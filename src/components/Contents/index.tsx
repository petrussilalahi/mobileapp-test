import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from '../../screens/Feed/styles';

import IconBlock from '../../../assets/block.png';
import IconComment from '../../../assets/comment.png';
import IconDownvoteInactive from '../../../assets/downvote_inactive.png';
import IconShare from '../../../assets/share.png';
import IconUpvoteInactive from '../../../assets/upvote_inactive.png';

export default function Contents({item, handleDownvote, handleUpvote}: any) {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            width={48}
            height={48}
            style={styles.image}
          />
          <View style={styles.wrapperContent}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textDate}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <View style={styles.wrapperText}>
            <Text>{item.content}</Text>
          </View>
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            height={200}
          />
        </View>
        <View style={styles.ContainerIcon}>
          <View style={styles.wrapperIcon}>
            <Image
              source={IconShare}
              height={18}
              width={18}
              style={styles.imgIconShare}
            />
            <Image
              source={IconComment}
              height={18}
              width={18}
              style={styles.imgIconComment}
            />
            <Text style={styles.textComment}>{item?.comments.length}</Text>
          </View>
          <View style={styles.wrapperCount}>
            {item.downvote < 1 ? (
              <Image
                source={IconBlock}
                height={18}
                width={18}
                style={styles.iconBlock}
              />
            ) : (
              <Text style={styles.textVote}>{item.downvote}</Text>
            )}
            <Pressable onPress={() => handleDownvote(item)}>
              <Image
                source={IconDownvoteInactive}
                height={18}
                width={18}
                style={styles.iconDownvote}
              />
            </Pressable>
            <Text style={styles.textUpvote}>{item.upvote}</Text>
            <Pressable onPress={() => handleUpvote(item)}>
              <Image
                source={IconUpvoteInactive}
                height={18}
                width={18}
                style={styles.iconUpvoteIncative}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.lineBig} />
    </Pressable>
  );
}
