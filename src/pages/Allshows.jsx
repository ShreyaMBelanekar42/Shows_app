import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Allshows = () => {
  const [shows, setShows] = useState([]);

  const getShows = async () => {
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=asia"
      );
      setShows(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShows();
  }, []);

  return (
    <div className="grid-container">
      {shows.map((data) => {
        return (
          <div key={data.show.id}>
            <div className="grid-items">
              <img
                src={data.show.image?.medium}
                alt={data.show.name}
                className="all-shows-img"
              />
              <div className="grid-contents">
                <h3>{data.show.name}</h3>
                <p>Rating: {data.show.rating.average}</p>
                <p>Genre: {data.show.genres.join(" , ")}</p>
                <p>Lang: {data.show.language}</p>
                <p>Premiere: {data.show.premiered}</p>
                <button>
                  <Link to={`/show/${data.show.id}`}>View Summary</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Allshows;
