import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {height: 547},
  wrapper: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {borderRadius: 24, marginLeft: 24},
  wrapperContent: {marginLeft: 16},
  textName: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.94,
  },
  textDate: {fontWeight: '400', fontSize: 12, lineHeight: 18},
  line: {height: 0.5, backgroundColor: '#C4C4C4'},
  wrapperText: {margin: 24},
  buttonShowMore: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textShowMore: {
    color: 'blue',
    fontSize: 11,
    marginVertical: 2,
  },
  ContainerIcon: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imgIconShare: {marginLeft: 22},
  imgIconComment: {marginLeft: 24},
  textComment: {
    width: 24,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  wrapperCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBlock: {marginLeft: 22},
  textVote: {
    width: 24,
    marginHorizontal: 11,
    textAlign: 'center',
  },
  iconDownvote: {marginLeft: 24},
  textUpvote: {
    width: 24,
    marginHorizontal: 11,
    textAlign: 'center',
  },
  iconUpvoteIncative: {marginRight: 22},
  lineBig: {height: 4, backgroundColor: '#C4C4C4'},
});
