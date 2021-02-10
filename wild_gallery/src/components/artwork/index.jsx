import React, { useEffect, useState } from "react";
import { Title } from "./style";
import axios from "axios";


export default function Artwork() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (`http://localhost:5050/artworkAll/`,);

      setData (result.data);
    };

    fetchData();
  },[]);
  return (
    <div>
      <Title>ARTWORKS</Title>
      <div>
        <ul>
          {data.map(item =>(
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.name}</p>
              <img src={item.image} alt = "Image of the artwork"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
