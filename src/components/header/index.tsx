import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export const Header = ({ onTrendingClick, onPopularClick }:any) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
      <Button title="Trending" onPress={onTrendingClick} />
      <Button title="Popular" onPress={onPopularClick} />
    </View>
  );
};

