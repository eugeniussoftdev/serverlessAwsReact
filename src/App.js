import styled from "styled-components";

import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import logo from "./logo.svg";

import "./App.css";
import "@aws-amplify/ui-react/styles.css";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure the container covers the full height */
`;

const Div = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <CenteredContainer>
          <Div />
        </CenteredContainer>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreeting: true });
