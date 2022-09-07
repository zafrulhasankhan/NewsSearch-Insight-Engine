import axios from 'axios';

export const GoogleSearch = async (term) => {
  const { data } = await axios.get(
    'https://newsapi.org/v2/everything',
    {
      params: {
        // apiKey: "7ec20566352f48668f4ee7ce5f75c107",
        apiKey: "69d14a2e4fdf4ae49a344590b22b462c",
        q: term,
        searchIn: "title"
      },
    }
  );
 

  return data;
};
