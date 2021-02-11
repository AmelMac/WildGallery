import React, { useEffect, useState } from "react";
import { Title, Img, Liste, H2, Li } from "./style";
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
        <Liste>
          {data.map(item =>(
            <Li key={item.id}>
              <Img src={item.image} alt = "Image of the artwork"/>
              <H2>{item.title}</H2>
              <p>{item.name}</p>
              
            </Li>
          ))}
        </Liste>
      </div>
    </div>
  );
}
