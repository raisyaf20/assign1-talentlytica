import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [nilaiDosen, setNilaiDosen] = useState([]);
  const [result, setResult] = useState([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedNilai = [...nilaiDosen];
    updatedNilai[index] = Number(value);
    setNilaiDosen(updatedNilai);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = {
      aspekNilai: [],
    };

    for (let i = 0; i < nilaiDosen.length; i++) {
      jsonData.aspekNilai.push({
        mahasiswa: `mahasiswa_${i + 1}`,
        nilai: nilaiDosen[i],
      });
    }

    setResult(JSON.stringify(jsonData));
  };

  const renderStudentInputs = () => {
    const inputs = [];
    for (let i = 0; i < 10; i++) {
      inputs.push(
        <tr key={i}>
          <td>Mahasiswa {i + 1}:</td>
          <td>
            <select
              value={nilaiDosen[i] || ""}
              onChange={(e) => handleChange(e, i)}
            >
              <option value="">Pilih nilai</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select
              value={nilaiDosen[i] || ""}
              onChange={(e) => handleChange(e, i)}
            >
              <option value="">Pilih nilai</option>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select
              value={nilaiDosen[i] || ""}
              onChange={(e) => handleChange(e, i)}
            >
              <option value="">Pilih nilai</option>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select
              value={nilaiDosen[i] || ""}
              onChange={(e) => handleChange(e, i)}
            >
              <option value="">Pilih nilai</option>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </td>
        </tr>
      );
    }
    return inputs;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Mahasiswa</th>
              <th>
                Aspek <br /> Penilain 1
              </th>
              <th>
                Aspek <br /> Penilain 2
              </th>
              <th>
                Aspek <br /> Penilain 3
              </th>
              <th>
                Aspek <br /> Penilain 4
              </th>
            </tr>
          </thead>
          <tbody>{renderStudentInputs()}</tbody>
        </table>
        <button type="submit" style={{ marginTop: "25px" }}>
          Submit
        </button>
      </form>
      {result}
    </div>
  );
};

export default App;
