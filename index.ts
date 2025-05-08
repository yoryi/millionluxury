import 'react-native-gesture-handler'; // Solo si usas Gesture Handler
import 'react-native-reanimated'; // ✅ Importa Reanimated en la primera línea

import { registerRootComponent } from 'expo';
import App from './src/App';

// ✅ Configuración de Reanimated para Hermes (evita errores)
if (__DEV__) {
  import('react-native-reanimated').then((Reanimated) => {
    Reanimated.setUpTests?.();
  });
}

// ✅ Registra la app correctamente
registerRootComponent(App);