import React from "react";
import { Container, Name, BigContainer, Path } from "./style";
import { Link } from "react-router-dom";
import artists from "./artists.json";

export default function ArtistsList() {
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
}
