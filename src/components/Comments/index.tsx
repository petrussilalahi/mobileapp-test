import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export default function Comments({item}: any) {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          width={36}
          height={36}
          style={styles.imgProfile}
        />
        <View style={styles.wrapper}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textComment}>{item.comment}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </>
  );
}
