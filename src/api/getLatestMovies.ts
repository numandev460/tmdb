import {request} from '../lib/request';
const getLatestMovies = async (page:number) => {
  try {
    const response = await request({
      url: `latest?language=en-US&page=${page}`,
      method: 'GET',
      params: {key: 'd88208968012f07cfa7884835280574e'},
      convertKeys: true,
    });
    console.log('latest movies:', response);
    return response;
  } catch (error) {
    console.error('Error retrieving user latest Movies:', error);
  }
};

export default getLatestMovies;
