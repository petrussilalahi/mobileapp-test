import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 10,
    backgroundColor: '#fff',
  },
  wrapper: {height: 0.5, backgroundColor: '#fff'},
  textInput: {
    flex: 1,
  },
});
