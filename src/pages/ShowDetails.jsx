import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowDetails = () => {
  const { showId } = useParams();
  const [singleShow, setSingleShow] = useState(null);

  const getShowDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${showId}`
      );
      setSingleShow(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShowDetails();
  }, [showId]);

  if (!singleShow) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div>
        <div key={singleShow.id}>
          <div className="show-details-container">
            <div>
              <img
                src={singleShow.image?.medium}
                alt={singleShow.name}
                className="single-show-img"
              />
            </div>
            <div>
              <h2>{singleShow.name}</h2>
              <p>{singleShow.summary}</p>
              <p>Rating: {singleShow.rating.average}</p>
              <p>Genre: {singleShow.genres.join(" , ")}</p>
              <p>Lang: {singleShow.language}</p>
              <p>Premiere: {singleShow.premiered}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
