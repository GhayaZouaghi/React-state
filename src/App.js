import React from "react";
import "./App.css";

import photo from "./assets/phot.jpg";
import { Button } from "react-bootstrap";

import Information from "./components/information";
import Counter from "./components/counter";

class App extends React.Component {
  state = {
    fullName: "John",
    bio: " Born in 1969",
    profession: " Teacher",
    imgSrc: photo,
    shows: true,
  };

  hundleClickShow = () => this.setState({ shows: !this.state.shows });

  render() {
    return (
      <div className="App">
        <Button variant="primary" size="lg" onClick={this.hundleClickShow}>
          shows
        </Button>
        <br></br>
        {this.state.shows && (
          <div>
            <Information
              fullName={this.state.fullName}
              bio={this.state.bio}
              profession={this.state.profession}
              imgSrc={this.state.imgSrc}
            />
            <Counter />
          </div>
        )}
      </div>
    );
  }
}

export default App;
