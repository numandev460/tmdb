import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/movieList';
import MovieDetail from '../screens/movieDetail';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{title: 'My Movie List', headerShown: false}}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{title: 'Movie Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
