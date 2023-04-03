import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import styles from './TimerColumn.style'
const TimerColumn = ({ setHours, setMinutes, setSeconds, hours,minutes,seconds }) => {

  const createArray = (length, i = 0, arr = []) => {
    if (i >= length) {
      return arr
    }

    arr.push(i.toString())

    return createArray(length, i += 1, arr)
  };
  const AVAILABLE_MINUTES = createArray(60);
  const AVAILABLE_SECONDS = createArray(60);

  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.timerText}>{minutes}</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={itemValue => setMinutes(itemValue)}
        mode="dropdown">
        {AVAILABLE_MINUTES.map(value => (
          <Picker.Item
            style={styles.pickerItem}
            key={value}
            label={value}
            value={value}
          />
        ))}
      </Picker>
      <Text style={styles.pickerText}>dk.</Text>
      <Text style={styles.timerText}>{seconds}</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={itemValue => setSeconds(itemValue)}
        mode="dropdown">
        {AVAILABLE_SECONDS.map(value => (
          <Picker.Item
            style={styles.pickerItem}
            key={value}
            label={value}
            value={value}
          />
        ))}
      </Picker>
      <Text style={styles.pickerText}>sn.</Text>
    </View>
  );
};

export default TimerColumn;
