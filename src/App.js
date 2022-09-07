import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { Home } from './components/HomeScreen';


// import { GoogleSearch } from './api/GoogleSearch';
import NewsCards from './components/NewsCards/NewsCards';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import axios from 'axios';
import HeaderSearchPage from './components/Search/HeaderSearchPage';

const App = (props) => {
  let history = useHistory();
  const [NewsArticles, setNewsArticles] = useState([]);
  const [activeArticles, setactiveArticles] = useState(-1);
  const [Loading, setLoading] = useState(false);
  //search term
  const [searchTerm, setSearchTerm] = useState('');
  // serach data
  const [searchData, setSearchData] = useState({});
  //set search term
  const setSearch = async (term) => {
    setSearchTerm(term);
    await setData(term);
    history.push('/search');
  };
  //set search data
  const setData = async (term) => {
    const searches = await GoogleSearch(term);
    setactiveArticles(-1);
  };

  const GoogleSearch = async (term) => {
    setLoading(true);
    await axios.get(
      'https://newsapi.org/v2/everything',
      {
        params: {
          // apiKey: "7ec20566352f48668f4ee7ce5f75c107",
          apiKey: "69d14a2e4fdf4ae49a344590b22b462c",
          q: term,
          searchIn: "title"
        },
      }
    ).then((res) => {
    
      setNewsArticles(res.data.articles);
    }).finally(() => {
      setLoading(false);
    });

  }

  useEffect(() => {
    // setLoading(true);
    // setSearch();
    // setData();
    // setLoading(false);
  }, [])

  return (

    <>
      <Switch>
        <Route
          exact
          path={'/'}
          component={() => <Home setSearch={setSearch} />}
        />

        {searchTerm !== '' && !Loading ? (
          <Route
            exact
            path={'/search'}
            component={() => (

              <NewsCards
                articles={NewsArticles}
                activeArticle={activeArticles}
                searchTerm={searchTerm}
                setSearch={setSearch}
              />
            )}
          />
        ) :
          <div className="search-page">
            <HeaderSearchPage searchTerm={searchTerm} setSearch={setSearch} />
            <h4 style={{ fontFamily: 'cursive', textAlign: 'center', position: 'relative', top: '70px' }}>
              Loading....
            </h4>
          </div>}



        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
