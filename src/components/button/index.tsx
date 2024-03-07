import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

const Index: React.FC<Props> = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title || 'Watch Latest'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 50,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});
export default Index;
