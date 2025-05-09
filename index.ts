import 'react-native-gesture-handler'; 
import 'react-native-reanimated';

import { registerRootComponent } from 'expo';
import App from './src/App';
if (__DEV__) {
  import('react-native-reanimated').then((Reanimated) => {
    Reanimated.setUpTests?.();
  });
}
registerRootComponent(App);