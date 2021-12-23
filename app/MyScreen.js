import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const MyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1} allowFontScaling={false}>Mobile app development</Text>
      <Text style={styles.text2} allowFontScaling={false}>name</Text>
    </View>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  text1: {
    fontSize: 20
  },
  text2: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '600'
  }
});
