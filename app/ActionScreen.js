import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from "react-native";

class ActionScreen extends Component {
  state = { num: 0 };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.num} allowFontScaling={false}>{this.state.num || 0}</Text>
          <View>
            <TouchableHighlight style={styles.touch} activeOpacity={0.5} underlayColor="none" onPress={() => { this.setState({ num: this.state.num + 1 }) }}>
              <Text style={styles.text} allowFontScaling={false}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touch} activeOpacity={0.5} underlayColor="none" onPress={() => { this.setState({ num: this.state.num - 1 }) }}>
              <Text style={styles.text} allowFontScaling={false}>Sub</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touch} activeOpacity={0.5} underlayColor="none" onPress={() => { this.setState({ num: 0 }) }}>
              <Text style={styles.text} allowFontScaling={false}>Reset</Text>
            </TouchableHighlight>
          </View>
        </View>
      </>
    )
  }
}

export default ActionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFF'
  },
  num: {
    fontSize: 50
  },
  touch: {
    color: '#FFF',
    backgroundColor: '#6e6b6b',
    margin: 10,
    padding: 15,
    width: 180,
    borderRadius: 5
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18
  }
});
