import { onMounted, onUnmounted, reactive } from 'vue';

export const screens = {
  xs: '320px',
  xsm: '400px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
export type ScreenType = keyof typeof screens | 'all';

let screenMap = new Map<ScreenType, number>();

for (const [key, value] of Object.entries(screens)) {
  screenMap.set(<ScreenType>key, parseInt(value));
}

// Sort by smallest to largest
screenMap = new Map<ScreenType, number>(
  [...screenMap.entries()].sort((a, b) => a[1] - b[1])
);

// Use the smallest value by default
const breakpoints = reactive({
  w: 0,
  h: 0,
  is: screenMap.keys().next().value as ScreenType,
});

export const belowBreakpoint = (
  target: ScreenType,
  reference: ScreenType = breakpoints.is
) => {
  return !aboveBreakpoint(target, reference);
};

export const aboveBreakpoint = (
  target: ScreenType,
  reference: ScreenType = breakpoints.is
) => {
  if (target == 'all' && reference == 'all') return true;
  if (target == 'all' && reference != 'all') return false;
  if (target != 'all' && reference == 'all') return true;
  return (screenMap.get(target) ?? 0) < (screenMap.get(reference) ?? 0);
};

const getBreakpoint = (w: number) => {
  for (let [key, cutoff] of screenMap) {
    if (w < cutoff) {
      return key;
    }
  }
  return <ScreenType>'all';
};

const setBreakpoint = () => {
  breakpoints.w = window.innerWidth;
  breakpoints.h = window.innerHeight;
  breakpoints.is = getBreakpoint(window.innerWidth);
};

export const useBreakpoint = () => {
  onMounted(() => {
    setBreakpoint();
    window.addEventListener('resize', setBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', setBreakpoint);
  });

  return {
    breakpoints,
  };
};

export default useBreakpoint;
