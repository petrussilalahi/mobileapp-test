import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 80,
    paddingVertical: 30,
    paddingHorizontal: 24,
  },
  imgProfile: {borderRadius: 24, marginRight: 16},
  wrapper: {width: '90%'},
  textName: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14.52,
    color: '#828282',
  },
  textComment: {fontWeight: '400', fontSize: 16, lineHeight: 19.36},
  line: {height: 0.5, backgroundColor: '#828282'},
});
