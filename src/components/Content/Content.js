import React, { useState } from 'react'
import Movie from '../Movie/Movie';
import "./Content.css"

const Content = () => {
    const [searchTerm , setSearchTerm] = useState("")
    const API_KEY = "8b6e1e6e77645f310debd8e8179a11fb"
    return (
      <div className="content">
        <div className="content__search container">
          <h5>Search</h5>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Movie
          title="Trending Now"
          fetchUrl={`/trending/all/week?api_key=${API_KEY}&language=en-US`}
          searchTerm={searchTerm}
        />
        <Movie
          title="Top Rated"
          fetchUrl={`/movie/top_rated?api_key=${API_KEY}&language=en-US`}
          searchTerm={searchTerm}
        />
        <Movie
          title="Action Movies"
          fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=28`}
          searchTerm={searchTerm}
        />
        <Movie
          title="Comedy Movies"
          fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=35`}
          searchTerm={searchTerm}
        />
        <Movie
          title="Horror Movies"
          fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=27`}
          searchTerm={searchTerm}
        />
        <Movie
          title="Romance Movies"
          fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=10749`}
          searchTerm={searchTerm}
        />
        <Movie
          title="Documentaries Movies"
          fetchUrl={`/discover/movie?api_key=${API_KEY}&with_genres=99`}
          searchTerm={searchTerm}
        />
      </div>
    );
}

export default Content