import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key : '48908e3ad5dc45c18aad472ef2b794ee'
  }
})