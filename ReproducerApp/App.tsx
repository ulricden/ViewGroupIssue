/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View testID={'container'} style={{margin: 10}}>
      <View testID={'title'} style={{margin: 10}}>
        <Text>{'this is a title'}</Text>
      </View>
    </View>
  );
}

export default App;
