import axios from 'axios';

const bid = '40449';
const api_key = 'mbzEmvctDUhA224Z';

const cors_api = 'https://cors-anywhere.herokuapp.com';

export const chat = async (id, msg) => {
  try {
    const res = await axios.get(
      `${cors_api}/http://api.brainshop.ai/get?bid=${bid}&key=${api_key}&uid=${id}&msg=${msg}`
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.message);
  }
};
