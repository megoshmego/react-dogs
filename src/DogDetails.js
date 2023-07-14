import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  // Find the dog object that matches the name from the URL parameter
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <div>Dog not found!</div>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <h2>Fun Facts</h2>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
