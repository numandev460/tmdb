import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import getMoviesDetail from '../../api/getMoviesDetail';
import KGFImage from '../../assets/images/kgf.jpeg';
import producation from '../../assets/images/producation.jpeg';
import {styles} from './style';
import Button from '../../components/button';
import {url} from 'inspector';
const MovieDetail = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const id = '1096197';
  useEffect(() => {
    fetchMoviesDetail();
  }, []);

  const fetchMoviesDetail = async () => {
    setLoading(true);
    const response = await getMoviesDetail(id);
    setLoading(false);
    setData(response);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {loading ? (
          <View style={styles.ind}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View>
            <View>
              <ImageBackground
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${data?.backdropPath}`,
                }}
                resizeMode="cover"
                style={styles.image}>
                <View style={styles.button_Container}>
                  <Button title="Watch Now" />
                  <Button title="Add a Watch List" />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.sec_container}>
              <View style={styles.text_Container}>
                <View>
                  <Text style={styles.heading}>
                    {data?.originalTitle || data?.title}
                  </Text>
                  <Text style={styles.date}>{data?.releaseDate}</Text>
                </View>
                <View>
                  <Text style={styles.heading}>voteCount</Text>
                  <Text style={styles.date}>{data?.voteCount}</Text>
                </View>
              </View>
              <View style={styles.story_container}>
                <Text style={styles.heading}>Overview</Text>
                <Text style={styles.detail_text}>{data?.overview}</Text>
              </View>
              <View style={styles.story_containers}>
                <Text style={styles.heading}>Genres</Text>
                <Text style={styles.detail_text}>
                  {data?.genres?.map((item: any) => item.name).join(', ')}
                </Text>
              </View>
              <View>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 20}}>
                  Vote Average
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 20}}>
                  {data?.voteAverage}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;
