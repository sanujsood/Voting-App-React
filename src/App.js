import React from "react";
import { Container, Row } from "react-bootstrap";
import VotingCard from "./components/voting_card";
import langs_json from "./data/data.json";

function App() {
  

  return (
    <Container className="app">
      <h1 style={{color:"white",  textAlign:"center", fontSize:"60px"}}>Voting App</h1>
      <Row>

        {langs_json.map((lang) => {
          return (
              <VotingCard
                lang={lang}
              />
          );
        })}
      </Row>
    </Container>
  );
}
export default App;