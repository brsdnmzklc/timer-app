import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timerText: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 18,
  },
  picker: {
    width: 30,
    ...Platform.select({
      android: {
        color: '#fff',
        backgroundColor: '#000',
        // marginLeft: 10,
      },
    }),
  },
  pickerItem: {
    color: '#000',
    fontSize: 18,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pickerText: {
    color: '#fff',
    fontSize: 18,
  },
});
