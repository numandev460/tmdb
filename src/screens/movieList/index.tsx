import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/header'; 

const MovieList = () => {
  const [data, setData] = useState<any>(['trending Data','second Trednding data']);

  const onTrendingClick = () => {
    console.log('Trending click')
    setData(['trending Data','second Trednding data']);

  };

  const onPopularClick = () => {
    console.log('Popular Click')
    setData(['popular Data','Second Popular Data']);

  };

  return (
    <View style={styles.container}>
      <Header onTrendingClick={onTrendingClick} onPopularClick={onPopularClick} />
      <View>
        {/* {data.map((item:any, index:any) => ( */}
          <View >
            <Image style={{width:150,height:200}}  source={require('../../assets/cardImage.jpeg')}/>
          </View>
        {/* // ))} */}
      </View>
    </View>
  );
};

export default MovieList;
