import { SafeAreaView, View} from 'react-native';
import React from 'react';
import { StackNavigation } from './src/navigation/stackNavigation';
import MovieList from './src/screens/movieList';

const App = () => {
  return (
    <SafeAreaView>
   
      {/* <StackNavigation/> */}
      <MovieList/>
    </SafeAreaView>
  );
};

export default App;
