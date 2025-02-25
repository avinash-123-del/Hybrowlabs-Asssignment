import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CharacterCount = () => {
  const [input, setInput] = useState("");
  const [counts, setCounts] = useState([]);

  const countCharacters = (str) => {
    const filteredStr = str.replace(/\s/g, "").toUpperCase(); 
    const countMap = new Map();
    const result = [];

    for (let i of filteredStr) {
      countMap.set(i, (countMap.get(i) || 0) + 1);
    }

    for (let n of filteredStr) {
      if (countMap.has(n)) {
        result.push(`${n}-${countMap.get(n)}`);
        countMap.delete(n); 
      }
    }
    return result;
  };
  
  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Character Count</h2>
      <div className="d-flex gap-2 align-items-center mt-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter text..."
        />
        <Button variant="danger" onClick={() => {setCounts([]) ; setInput("");}}>Reset</Button>
        <Button variant="success" onClick={() =>  setCounts(countCharacters(input))}>Count</Button>
      </div>
      <div className="text-gray-700">
        {counts.length > 0 ? (
          <ul>
            {counts.map((count, index) => (
              <li key={index}>{count}</li>
            ))}
          </ul>
        ) : (
          <p>No characters counted yet.</p>
        )}
      </div>
    </div>
  );
};

export default CharacterCount;
