import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {StackNavigation} from './src/navigation/stackNavigation';
import MovieList from './src/screens/movieList';
import MovieDetail from './src/screens/movieDetail';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StackNavigation />
    </SafeAreaView>
  );
};

export default App;
