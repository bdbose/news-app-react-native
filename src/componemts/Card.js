import React from 'react';
import {Image, Linking, View, Text} from 'react-native';

const Card = ({descp, imgUrl, newsUrl, source, title}) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        backgroundColor: '#444',
        borderRadius: 20,
        shadowColor: 'white',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
      }}>
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
        }}>
        <Image
          style={{
            flex: 1,
            height: 300,
            resizeMode: 'contain',
            backgroundColor: 'black',
          }}
          source={{uri: imgUrl}}
        />
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: 'white',
            marginBottom: 20,
          }}>
          {descp}...
          <Text
            style={{
              color: 'white',
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              Linking.openURL(newsUrl);
            }}>
            more
          </Text>
        </Text>
        <Text
          style={{
            color: 'white',
            marginBottom: 20,
          }}>
          Source: {source}
        </Text>
      </View>
    </View>
  );
};

export default Card;
