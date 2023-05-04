import spaceSailorsImage from '~/assets/images/space_sailors.png';
import comboBreakerImage from '~/assets/images/combo_breaker.png';

type Platform = 'steam' | 'googlePlay' | 'appStore' | 'itchio';
type Game = {
  title: string;
  image: string;
  url: string;
  description: string;
  platforms: Platform[];
};

export const games: Game[] = [
  {
    title: 'Space Sailors',
    image: spaceSailorsImage,
    url: 'https://play.google.com/store/apps/details?id=com.FracturalStudios.SpaceSailors',
    description:
      'A vibrant, mobile, local-multiplayer, spaceship-dogfighting game.',
    platforms: ['googlePlay'],
  },
  {
    title: 'Combo Breaker',
    image: comboBreakerImage,
    url: 'https://play.google.com/store/apps/details?id=com.FracturalStudios.ComboBreaker',
    description: 'Arcade ball slicing action.',
    platforms: ['googlePlay'],
  },
];
export default games;
