import React from 'react';
import {  View } from 'react-native';
import { CustomButton } from '../button';

export const Header = ({ onTrendingClick, onPopularClick }:any) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
      <CustomButton title='Trending' onPress={onTrendingClick}/>
      <CustomButton title='Popular' onPress={onPopularClick}/>
    </View>
  );
};

