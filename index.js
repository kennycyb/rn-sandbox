// Import React and core React Native components
import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

// Main component class that renders the welcome screen
class HelloWorld extends React.Component {
  render() {
    return (
      // Container view that centers its content
      <View style={styles.container}>
        {/* Welcome text displayed to the user */}
        <Text style={styles.hello}>
            Welcome to ReactNative!
        </Text>
      </View>
    );
  }
}

// Define stylesheet for component layout and text styling
const styles = StyleSheet.create({
  container: {
    // Fill available space and center content
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    // Style the welcome text
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// Register the component as the root app component
AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);