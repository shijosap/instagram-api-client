/**
 * Created by shijosap on 30-05-2017.
 */
import axios from 'axios';
export default class Users {

  constructor(baseUrl, clientId = '', accessKey = '') {
      this.clientId = clientId;
      this.accessKey = accessKey;
      this.baseUrl = baseUrl+'users/';
  }

    /**
     * Get user information
     * @param  user_id / 'self'
     */
  get(user_id = 'self') {
      const url = `${this.baseUrl}${user_id}`;
    return axios.get(url);
  };





};