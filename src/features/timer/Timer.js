import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {colors} from '../../utils/colors';
import {spacing} from '../../utils/sizes';

export const Timer = ({focusSubject}) => {
  return (
    <View style={styles.container}>
      <View style={{paddingTop: spacing.md}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
