import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import variables from '../../env';
import Card from '../componemts/Card';
import Loader from '../componemts/Loader';
const Main = () => {
  const [state, setState] = useState([]);
  const getData = async () => {
    const data = await fetch(variables.REACT_APP_BACKEND_URL);
    const res = await data.json();
    setState(res.detail);
    // console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: '#222',
      }}>
      {state.length !== 0 ? (
        state.map((i, indx) => {
          return <Card key={indx} {...i} />;
        })
      ) : (
        <Loader />
      )}
    </ScrollView>
  );
};

export default Main;
