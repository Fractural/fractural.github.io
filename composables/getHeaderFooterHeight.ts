const headerHeight = ref(0);
const footerHeight = ref(0);

const resizeEventListener = () => {
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  headerHeight.value = header?.clientHeight ?? 0;
  footerHeight.value = footer?.clientHeight ?? 0;
};

export default function getHeaderFooterHeight() {
  onMounted(() => {
    resizeEventListener();
    window.addEventListener('resize', resizeEventListener);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resizeEventListener);
  });

  return { headerHeight, footerHeight };
}
