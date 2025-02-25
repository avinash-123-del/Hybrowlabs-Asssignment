import React, { useState } from "react";
import axios from "axios";

const RecordAdder = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacter = async () => {
    const randomId = Math.floor(Math.random() * 20) + 1; 
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${randomId}/`);
      const newCharacter = {
        id: randomId,
        name: response.data.name,
        height: response.data.height,
        mass: response.data.mass,
        gender: response.data.gender,
      };
      setCharacters([...characters, newCharacter]);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  const handleDelete = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Record maintaining system</h1>
      <button className="btn btn-primary" onClick={fetchCharacter}>Add Record</button>
      <table border="1" style={{ marginTop: "20px", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.height}</td>
              <td>{e.mass}</td>
              <td>{e.gender}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordAdder;
