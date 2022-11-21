import axios from "axios";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./styles.css";

export default function App() {
  // const API_KEY = "1635890035cbba097fd5c26c8ea672a1";
  const API_KEY = "9a13b9c2be6420501ec97cd77fb030fc";
  const BASE_URL =
    "https://api.openweathermap.org/data/2.5/forecast/?units=metric";
  const [weatherList, setWeatherList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    axios(`${BASE_URL}&q=${searchValue.trim()}&appid=${API_KEY}`)
      .then((res) => {
        let b = {};
        let count = 1;
        let temp = res?.data?.list.map((it) => {
          if (!b[it.dt_txt.split(" ")[0]] && count < 6) {
            count++;
            b[it.dt_txt.split(" ")[0]] = it;
          } else null;
        });
        setWeatherList(Object.values(b));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  };
  return (
    <div className="App">
      <div className="navBar">
        <span className="title">Weather in your city</span>
        <input type="search" onChange={(e) => setSearchValue(e.target.value)} />
        <button
          className="btn"
          disabled={searchValue === ""}
          onClick={handleClick}
        >
          Search
        </button>
        {loading && <span>loading...</span>}
      </div>
      <div className="weatherContainer">
        {weatherList.map((it) => (
          <WeatherCard data={it} key={it.dt} />
        ))}
      </div>
    </div>
  );
}
