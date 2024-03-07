import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: height / 2,
    justifyContent: 'flex-end',
  },
  sec_container: {
    backgroundColor: '#48494B',
    width: '100%',
    height: height / 2,
  },
  text_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    width: width - 50,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  story_container: {
    paddingHorizontal: 20,
  },
  story_containers: {
    padding: 20,
  },
  detail_text: {
    color: 'white',
  },
  date: {
    color: 'white',
    marginTop: 4,
  },
  production: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  production_card: {
    // flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: width / 4 - 20,
    margin: 10,
  },
  button_Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  ind: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
