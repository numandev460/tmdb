import {request} from '../lib/request';
const getMoviesDetail = async (id: string) => {
  try {
    const response = await request({
      url: `${id}?language=en-US`,
      method: 'GET',
      params: {key: 'd88208968012f07cfa7884835280574e'},
      convertKeys: true,
    });
    return response;
  } catch (error) {
    console.error('Error retrieving user reviews:', error);
    throw error;
  }
};

export default getMoviesDetail;
