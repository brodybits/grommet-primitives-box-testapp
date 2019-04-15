import React, { Component } from 'react';

import { Box } from 'grommet';

import { Text, View } from 'react-primitives';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <View>
        <AppBar>
          Hello Grommet App
        </AppBar>
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
