import React from 'react';
import {Text, SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import {RoundedButton} from '../../components/RoundedButton';
import {fontSizes, spacing} from '../../utils/sizes';

const HistoryItem = ({item, itndex}) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({focusHistory, onClear}) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{flex: 0.5, alignItems: 'center'}}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've Focused on</Text>
            <FlatList
              style={{flex: 1}}
              contentContainerStyle={{flex: 1, alignItems: 'center'}}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: status => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
