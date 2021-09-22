import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Carrousel from "./components/carrousel/Carrousel";

import MainHeader from "./components/header/MainHeader";
import MainPage from "./components/mainpage/MainPage";
import MovieInfo from "./components/movieinfo/MovieInfo";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/:id">
            <MovieInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
