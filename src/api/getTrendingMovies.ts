import {request} from '../lib/request';
const getTrendingMovies = async (page:number) => {
  try {
    const response = await request({
      url: `popular?language=en-US&page=${page}`,
      method: 'GET',
      params: {key: 'd88208968012f07cfa7884835280574e'},
      convertKeys: true,
    });
    return response;
  } catch (error) {
    console.error('Error retrieving user reviews:', error);
  }
};

export default getTrendingMovies;
