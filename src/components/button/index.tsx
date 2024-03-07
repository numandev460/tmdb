import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const CustomButton: React.FC<Props> = ({ title, onPress, type = 'tertiary', buttonStyle, textStyle }) => {
  let buttonStyleToUse, textStyleToUse;

  switch (type) {
    case 'primary':
      buttonStyleToUse = styles.primaryButton;
      textStyleToUse = styles.primaryText;
      break;
    case 'secondary':
      buttonStyleToUse = styles.secondaryButton;
      textStyleToUse = styles.secondaryText;
      break;
    case 'tertiary':
      buttonStyleToUse = styles.tertiaryButton;
      textStyleToUse = styles.tertiaryText;
      break;
    default:
      buttonStyleToUse = styles.primaryButton;
      textStyleToUse = styles.primaryText;
  }

  return (
    <TouchableOpacity style={[styles.button, buttonStyle, buttonStyleToUse]} onPress={onPress}>
      <Text style={[styles.text, textStyle, textStyleToUse]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    minWidth: 150,
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  tertiaryButton: {
    backgroundColor: '#28a745',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#fff',
  },
  tertiaryText: {
    color: '#fff',
  },
});


