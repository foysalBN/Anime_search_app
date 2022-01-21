import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './components/Search';
import Details from './components/Details';
import axios from 'axios';

export interface IAnimes {
  mal_id: number,
  url: string,
  images: {
    jpg: {
      image_url: string
    }
  },
  title: string
}

function App() {
  //state lifted up to prevent loasing the values 
  const [query, setQuery] = useState('');
  const [page, setPage] = useState<number>(1)
  const [animes, setAnimes] = useState<IAnimes[]>([]);
  const [pageCount, setPageCount] = useState(0)
  let api = `https://api.jikan.moe/v4/anime?sfw=1&q=${query}&limit=20&page=${page}`;

  useEffect(() => {
    if (!query) {
      setAnimes([]);
      setPageCount(0);
      return;
    }
    axios.get(api)
      .then(res => {
        const { pagination, data } = res.data;
        setPageCount(pagination?.last_visible_page)
        setAnimes(data)
        console.log(res.data)
      })
      .catch(e => console.log('Got an error fetching data', e))
  }, [query, page, api])

  const searchProps = {
    query,
    setQuery,
    animes,
    page,
    setPage,
    pageCount
  }

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Search {...searchProps} />}
          />
          <Route path='/anime/:id' element={<Details />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
