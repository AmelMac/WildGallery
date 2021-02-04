import { Reset } from "styled-reset";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Artists from "./components/artists/artist/index";
import BurgerMenu from "./components/burgerMenu";
import Artwork from "./components/artwork/index";
import Contact from "./components/contact/index";
import Home from "./components/home/index";
import { AppStyle } from "./style";
import ArtistPage from "./components/artists/artistPage/index";

function App() {
  return (
    <AppStyle>
      <Reset />
      <Router>
        <BurgerMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/artistPage" component={ArtistPage} />
          <Route exact path="/artworks" component={Artwork} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </AppStyle>
  );
}

export default App;