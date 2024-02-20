import './App.css';
import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [index, setIndex] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(true);

  async function getData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL + index);
      const newData = await res.json();
      console.log(newData);

      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [index])

  return (
    <div id="app">
      <h1>Exercise 5 - PokeDex!</h1>
      <div id="content">
        <div id="left">
          <div id="image">
            {loading ? (
              <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading"></img>
            ) : data ? (
              <img src={data.sprites.front_default} alt="pokemon"></img>
            ) : (
              <div>Error fetching data</div>
            )}
          </div>
          {loading ? (
            <div id="name">Loading...</div>
          ) : data ? (
            <div id="name">{data.name}</div>
          ) : (
            <div id="name">Error fetching data</div>
          )}
          <h3>Types:</h3>
          <div id="types">
            {loading ? (
              <div>Loading...</div>
            ) : data ? 
              data.types.map((currType) => {
                return <div className={`type ${currType.type.name}`}>{currType.type.name}</div>
              })
            : (
              <div>Error fetching data</div>
            )}
          </div>
          <div id="buttons">
            <div class="button"
              onClick={() => {
                if (index > 1) setIndex(index - 1);
            }}>
              <img
                src={"https://static-00.iconduck.com/assets.00/less-than-icon-338x512-djbyou2s.png"}
                alt="left button"
              ></img>
            </div>
            <div class="button"
              onClick={() => {
                setIndex(index + 1);
            }}>
              <img
                src={"https://static-00.iconduck.com/assets.00/greater-than-icon-338x512-4ae54dqo.png"}
                alt="right button"
              ></img>
            </div>
          </div>
        </div>
        <div id="right">
            <h2>Info</h2>
            <div id="info">
              {loading ? (
                <div>Loading...</div>
              ) : data ? info ? <div>
                  <div>height: {(data.height)/10}m</div> 
                  <div>weight: {(data.weight)/10}kg</div>
                  {data.stats.map((stat) => {
                    return <div>{stat.stat.name}: {stat.base_stat}</div>;
                  })}
                </div> : 
                data.moves.map((move) => {
                  return <div>{move.move.name}</div>;
                })
              : (
                <div>Error fetching data</div>
              )}
            </div>
            {info ? (
              <div id="buttons">
              <button class="chosen button"
                onClick={() => {
                  setInfo(true);
              }}>
                Info
              </button>
              <button class="notchosen button"
                onClick={() => {
                  setInfo(false);
              }}>
                Moves
              </button>
              </div>
            ) : 
            <div id="buttons">
              <button class="notchosen button"
                onClick={() => {
                  setInfo(true);
              }}>
                Info
              </button>
              <button class="chosen button"
                onClick={() => {
                  setInfo(false);
              }}>
                Moves
              </button>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
