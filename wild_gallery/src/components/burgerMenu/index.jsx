import React from "react";
import { slide as Menu } from "react-burger-menu";
import { StyledBurgerMenu } from "./style";

export default function BurgerMenu() {
  return (
    <StyledBurgerMenu>
      <Menu left width={"100vw"}>
        <a href="/">WILD GALLERY</a>
        <a href="/artists">ARTISTS</a>
        <a href="/artworks">ARTWORKS</a>
        <a href="/contact">CONTACT US</a>
      </Menu>
    </StyledBurgerMenu>
  );
}
