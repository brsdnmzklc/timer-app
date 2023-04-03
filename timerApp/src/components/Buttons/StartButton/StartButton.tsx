import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './StartButton.style';

const StartButton = ({
  startTimer,
  stopTimer,
  isActive,
  isStopped,
}: {
  onPress: Function;

  isActive: boolean;
}) => {
  return (
    <View
      style={
        isActive
          ? isStopped
            ? styles.mainContainer
            : {...styles.mainContainer, borderColor: '#FF8400'}
          : styles.mainContainer
      }>
      <TouchableOpacity
        onPress={isActive ? stopTimer : startTimer}
        style={
          isActive
            ? isStopped
              ? styles.container
              : styles.activeContainer
            : styles.container
        }>
        {isActive ? (
          isStopped ? (
            <Text style={styles.title}>Sürdür</Text>
          ) : (
            <Text style={styles.activeTitle}>Duraklat</Text>
          )
        ) : (
          <Text style={styles.title}>Başla</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default StartButton;
