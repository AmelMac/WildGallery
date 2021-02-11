import React, { useEffect, useState } from "react";
import {  } from "./style";
import { Link } from "react-router-dom";
import axios from "axios";


export default function ArtistList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (`http://localhost:5050/artist/`,);

      setData (result.data);
    };

    fetchData();
  },[]);
  return (
    <div>
      <div>
        <ul>
          {data.map(item =>(
            <li key={item.id}>
              <h2>{item.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


{/*export default function ArtistsList() {
  return artists.map((artist, key) => {
    return (
      <BigContainer>
        <Container>
          <Path to="/artistPage">
            <Name>{artist.name}</Name>
          </Path>
        </Container>
      </BigContainer>
    );
  });
}*/}
