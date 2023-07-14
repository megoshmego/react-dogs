import React from 'react';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiskey from './assets/whiskey.jpg';
import duke from './assets/duke.jpg';
import perry from './assets/perry.jpg';
import tubby from './assets/tubby.jpg';


function App(props) {
  return (
    <Router>
      <div>
        <Nav dogs={props.dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={props.dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={props.dogs} />} />
          <Route path="/" element={<Navigate to="/dogs" replace />} />
          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </div>
    </Router>
  );
} // This closing bracket was missing

App.propTypes = {
  dogs: PropTypes.array.isRequired,
};

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
