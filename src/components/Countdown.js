import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes} from '../utils/sizes';

const minutesToMillis = min => min * 1000 * 60;
const formatTime = time => (time < 10 ? `0${time}` : time);

export const Countdown = ({minutes = 20, isPaused}) => {
  const interval = React.useRef(null);
  const countDown = () => {
    setMillis(time => {
      if (time === 0) {
        //do something
        return time;
      }
      const timeLeft = time - 1000;
      //report the progress
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
