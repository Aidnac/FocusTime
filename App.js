import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  const [focusSubject, setFocusSubject] = useState('Hello world');

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where we r going to build the timer</Text>
      ) : (
        <Text>Here I want to build the input for a subject</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});

export default App;
