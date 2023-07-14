import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams, useNavigate } from 'react-router-dom';
import NewColorForm from './NewColorForm';



const ColorsApp = () => {
  const [colors, setColors] = useState([
    { name: 'Blue', color: 'blue' },
    { name: 'Red', color: 'red' },
    { name: 'Green', color: 'green' },
  ]);

  const addColor = (color) => {
    setColors([color, ...colors]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorsList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDisplay colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" replace />} />
      </Routes>
    </Router>
  );
};

const ColorsList = ({ colors }) => (
  <ul>
    {colors.map((color, index) => (
      <li key={index}>
        <a href={`/colors/${color.name}`}>{color.name}</a>
      </li>
    ))}
    <li>
      <a href="/colors/new">Add a color</a>
    </li>
  </ul>
);

const ColorDisplay = ({ colors }) => {
  const { color } = useParams();
  const navigate = useNavigate();

  const colorObj = colors.find((c) => c.name === color);
  if (colorObj) {
    return (
      <div style={{ backgroundColor: colorObj.color, height: '100vh', width: '100vw' }}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  } else {
    return <Navigate to="/colors" replace />;
  }
};



export default ColorsApp;
