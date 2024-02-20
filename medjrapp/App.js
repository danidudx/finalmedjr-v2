import React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{ uri: 'http://10.0.2.2:3000' }}
      style={{ flex: 1 }}
    />
  );
};

export default App;
