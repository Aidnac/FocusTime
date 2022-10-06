import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where we r going to build the timer</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
  },
});

export default App;
