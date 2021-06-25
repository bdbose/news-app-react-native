import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ScrollView, Image, View, TextInput, Text} from 'react-native';
import variables from '../../env';
import Card from '../componemts/Card';
import Loader from '../componemts/Loader';
const Main = () => {
  const [state, setState] = useState([]);
  const [pseudo, setPseudo] = useState([]);
  const [loader, setLoader] = useState(false);
  const getData = async () => {
    const data = await fetch(variables.REACT_APP_BACKEND_URL);
    const res = await data.json();
    setLoader(true);
    setState(res.detail);
    setPseudo(res.detail);
  };
  const searchFilter = text => {
    if (text !== '') {
      const filter = state.filter(ele => {
        return ele.title.toLowerCase().includes(text.toLowerCase());
      });
      setPseudo(filter);
    } else {
      setPseudo(state);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: '#222',
      }}>
      <View
        style={{
          margin: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: 10,
          backgroundColor: 'white',
          padding: 10,
          paddingTop: 5,
          paddingBottom: 5,
        }}>
        <TextInput
          placeholder="Seach"
          placeholderTextColor="grey"
          style={{
            color: 'black',
            flex: 1,
          }}
          onChangeText={text => {
            searchFilter(text);
          }}
        />
        <Image
          style={{
            height: 20,
            width: 20,
          }}
          source={require('../assets/loupe.png')}
        />
      </View>
      {loader ? (
        pseudo.length !== 0 ? (
          pseudo.map((i, indx) => {
            return <Card key={indx} {...i} />;
          })
        ) : (
          <Text
            style={{
              color: 'grey',
              flex: 1,
              textAlign: 'center',
            }}>
            No Data Found
          </Text>
        )
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};

export default Main;
