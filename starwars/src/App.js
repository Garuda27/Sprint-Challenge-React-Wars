import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components"; 

const App= () => {
  const [data, setData] = useState([])

const fetchApp= () => {
  axios.get('https://swapi.co/api/people/')
    .then(response => {
        setData(response.data.results)
        console.log(response.data)
    })
    .catch(error => {console.log('error in Data')})
}

  useEffect(fetchApp, [])

  console.log(data);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


function StarWars() {
  const [data, setData] = useState([]);

  const Main = styled.div`
width: 100%;
margin: 10px auto;
display: flex;
flex-wrap: wrap;
`;

const Body = styled.div`
margin: 30px;
width: 300px;
flex-direction: column;
padding-bottom: 20px;
background-color: white;
`;
const Header = styled.div`
background-color: black;
color: white;
padding: 20px;
`;

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log("it's working:", res.data);
        setData(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

function Info(props) {
  return (
    <div className="characters">
      <Body>
        <Header>
          <h2>Name: {props.name}</h2>
        </Header>
          <p>Gender: {props.gender}</p>
          <p>Birth Year: {props.birth}</p>
      </Body>
    </div>
  );
}

  return (
    <div className="App">
      <Main>
        {data.map(data => {
          return (
            <Info
              key={data.created}
              name={data.name}
              gender={data.gender}
              birth={data.birth_year}/>
          );
        })}
      </Main>
    </div>
  );
}

  return StarWars();
  }

export default App;
