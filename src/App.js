import React, { Component } from 'react';

import { Box } from 'grommet';

import { Text, View } from 'react-primitives';

class App extends Component {
  render() {
    return (
      <View>
        <Box>
          <h2>First part</h2>
          <Text>text component</Text>
          <div>div text</div>
        </Box>
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
