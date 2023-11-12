import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Contents from '../../components/Contents';
import {useDispatch} from 'react-redux';
import {downvote, upvote} from '../../redux/action';
import Comments from '../../components/Comments';
import TextInputComments from '../../components/TextInputComments';
import {styles} from './styles';
import {addComment} from '../../redux/action/index';

interface PostDetailScreen {
  route: {
    params: {
      item: any;
    };
  };
}

const PostDetailScreen = ({route, navigation}: any) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const [commet, setcommet] = useState('');

  const handleUpvote = (item: any) => {
    dispatch(
      upvote({
        id: item.id,
      }),
    );
  };

  const handleDownvote = (item: any) => {
    dispatch(
      downvote({
        id: item.id,
      }),
    );
  };

  const handleComment = () => {
    dispatch(
      addComment({
        id: item.id,
        comment: commet,
      }),
    );
    setcommet('');
    navigation.navigate('feed');
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.scroolView}>
        <Contents
          item={item}
          handleDownvote={handleDownvote}
          handleUpvote={handleUpvote}
        />
        {item.comments.map((comment: any, idx: number) => {
          return <Comments item={comment} key={idx} />;
        })}
      </ScrollView>
      <TextInputComments
        setCommet={setcommet}
        handleComment={handleComment}
        commet={commet}
      />
    </SafeAreaView>
  );
};

export default PostDetailScreen;
