import {client} from '~api/client';
import {attachToken, privateApi, publicApi} from '~services/ApiService';

/**
 * POST /login
 * @param {Object} payload Login Credentials
 */
export const postLogin = async payload => {
  const {data} = await client.post('/mobile-login', {
    ...payload,
  });
  return data;
};
