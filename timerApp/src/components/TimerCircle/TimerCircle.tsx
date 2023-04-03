import { View, Text } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import styles from './TimerCircle.style';
const TimerCircle = ({ minutes, seconds, isStopped }) => {
  const [minute, setMinute] = useState(minutes);
  const [second, setSecond] = useState(seconds);
  const funRef = useRef(null);
  useEffect(() => {
    if (isStopped === false) {
      funRef.current = setInterval(() => {
        setSecond(second => second - 1);
      }, 1000);
    }

  }, [isStopped]);

  if (second === 0) {
    if (minute > 0) {
      setSecond(59);
      setMinute(minute => minute - 1);
    } else {
      clearInterval(funRef.current);
    }
  }
  if (isStopped) {
    clearInterval(funRef.current);
  }
  console.log(isStopped);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>
        {minute < 10 ? '0' + minute : minute}:{' '}
        {second < 10 ? '0' + second : second}
      </Text>
    </View>
  );
};

export default TimerCircle;
