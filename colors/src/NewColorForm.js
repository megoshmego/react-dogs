import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({
    name: "",
    color: "#000000"
  });

  const navigate = useNavigate();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addColor(formData);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name: </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="color">Color Value: </label>
        <input
          id="color"
          name="color"
          type="color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;
