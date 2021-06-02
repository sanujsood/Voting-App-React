import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import VotingCard from "./components/voting_card";
import langsJson from "./data/data.json";

function App() {
  let [langs, setLangs] = useState([]);

  useEffect(() => {
    setLangs(langsJson);
  }, []);

  function incrementVoteCount(langId) {
    langs = langs.map((langs) => {
      if (langs._id === langId) {
        langs.votes = langs.votes + 1;
      }
      return langs;
    });
    setLangs(langs);
  }

  return (
    <Container className="app">
      <h1 style={{color:"white",  textAlign:"center", fontSize:"60px"}}>Voting App</h1>
      <Row>

        {langs.map((lang) => {
          return (
              <VotingCard
                lang={lang}
                incrementVoteCount={(langID) => incrementVoteCount(langID)}
              />
          );
        })}
      </Row>
    </Container>
  );
}
export default App;