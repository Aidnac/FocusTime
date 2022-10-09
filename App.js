import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
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
