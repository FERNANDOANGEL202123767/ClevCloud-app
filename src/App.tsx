import React from 'react';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from '@/store/store';
import { AppNavigator } from '@/navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
