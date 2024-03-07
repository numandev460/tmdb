import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType } from 'react-native';
interface MovieCardProps {
    imageSource:ImageSourcePropType;
    name:string;
    date:string
}
export const MovieCard = ({ imageSource, name, date }:MovieCardProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imageSource}  />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>date: {date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 450,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    objectFit:'cover'
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  age: {
    fontSize: 16,
    color: '#888',
  },
});


