import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import StartButton from './src/components/Buttons/StartButton/StartButton';
import StopButton from './src/components/Buttons/StopButton/StopButton';
import TimerColumn from './src/components/TimerColumn/TimerColumn';
import TimerCircle from './src/components/TimerCircle/TimerCircle';
function App(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const startTimer = () => {
    if (minutes || seconds != 0) {
      setIsActive(!isActive);
      setIsDisabled(!isDisabled);
    }
  };
  const stopTimer = () => {
    setIsStopped(!isStopped);
  };
  const cancelTimer = () => {
    setIsActive(!isActive);
    setIsDisabled(true);
    setIsStopped(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timerContainer}>
        {isActive ? (
          <TimerCircle
            minutes={minutes}
            seconds={seconds}
            isStopped={isStopped}
          />
        ) : (
          <TimerColumn
            setMinutes={setMinutes}
            setSeconds={setSeconds}
            minutes={minutes}
            seconds={seconds}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <StopButton onPress={cancelTimer} isDisabled={isDisabled} />
        <StartButton
          isStopped={isStopped}
          isActive={isActive}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  timerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
