import React, { Component } from 'react';

import { Text, View } from 'react-primitives';

class App extends Component {
  render() {
    return (
      <View>
        <h2>First part</h2>
        <Text>text component</Text>
        <div>div text</div>
        <h2>Second part in another View</h2>
        <View>
          <Text>text component</Text>
          <div>div text</div>
        </View>
      </View>
    );
  }
}

export default App;
