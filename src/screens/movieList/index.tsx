import React, {useState, useEffect} from 'react';
import {ScrollView, View, Button, Text, TouchableOpacity} from 'react-native';
import {Header} from '../../components/header';
import {MovieCard} from '../../components/movieCard';
import getTrendingMovies from '../../api/getTrendingMovies';
import getLatestMovies from '../../api/getLatestMovies';
import {useNavigation} from '@react-navigation/core';

const MovieList = () => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchTrendingMovies();
  }, [page]);

  const fetchTrendingMovies = async () => {
    try {
      setLoading(true);
      const trendingMoviesResponse = await getTrendingMovies(page);
      setLoading(false);
      setData(trendingMoviesResponse.results);
      setTotalPages(trendingMoviesResponse.totalPages);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      setLoading(false);
    }
  };

  const fetchLatestMovies = async () => {
    try {
      setLoading(true);
      const latestMoviesResponse = await getLatestMovies(page);
      setLoading(false);
      setData(latestMoviesResponse.results);
      setTotalPages(latestMoviesResponse.totalPages);
    } catch (error) {
      console.error('Error fetching latest movies:', error);
      setLoading(false);
    }
  };

  const onTrendingClick = async () => {
    await fetchTrendingMovies();
  };

  const onPopularClick = async () => {
    await fetchLatestMovies();
  };

  const loadNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const loadPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <View>
      <Header
        onTrendingClick={onTrendingClick}
        onPopularClick={onPopularClick}
      />
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
          gap: 10,
        }}>
        <Button title="Previous Page" onPress={loadPreviousPage} />
        <Button title="Next Page" onPress={loadNextPage} />
      </View> */}
      {loading ? (
        <Text>Loading ....</Text>
      ) : (
        <ScrollView>
          {data?.map((movie: any, index: number) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MovieDetail', {id: movie.id});
                }}>
                <MovieCard
                  name={movie.title}
                  date={movie.releaseDate}
                  imageSource={{
                    uri: `https://image.tmdb.org/t/p/w500/${movie.posterPath}`,
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default MovieList;
