# react-native-flat-button
Flat button component for react-native

## Installation
`npm i react-native-flat-button --save`

##Demo

![react-native flat button](http://i.giphy.com/l2SpRnlcEly0cKwxO.gif)

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-flat-button';

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          text={"Hello"}
          onPress={this._onPress.bind(this)}
          containerStyle={styles.buttonContainer}/>
        <Button 
          text={"Hello"}
          backgroundColor={"#e74c3c"}
          borderColor={"#c0392b"}
          borderRadius={10}
          shadowHeight={5}
          onPress={this._onPress.bind(this)}
          containerStyle={styles.buttonContainer}
          contentStyle={styles.content}/>
        <Button 
          text={"Hello"}
          backgroundColor={"#3498db"}
          borderColor={"#2980b9"}
          borderRadius={16}
          shadowHeight={8}
          activeOpacity={0.5}
          onPress={this._onPress.bind(this)}
          containerStyle={styles.buttonContainer}
          contentStyle={{fontSize: 22, fontWeight: '900'}}/>
      </View>
    );
  }

  _onPress(){
    console.log("pressed");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
  content:{
    fontSize: 22
  }
});

AppRegistry.registerComponent('Example', () => Example);
```
