import { useHeaderHeight } from '@react-navigation/elements';
import { useWindowDimensions } from 'react-native';

export const useAspectRatio = () => {
  const headerHeight = useHeaderHeight();
  const dimension = useWindowDimensions();
  const heightLessNav = dimension.height - headerHeight;
  const height = dimension.width * (dimension.width / heightLessNav);
  const width = dimension.width;

  return { headerHeight, height, width };
};
