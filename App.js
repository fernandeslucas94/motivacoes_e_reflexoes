import HomeScreen from './src/pages/Home/home';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Black.ttf'),
  });
  return HomeScreen();
}
