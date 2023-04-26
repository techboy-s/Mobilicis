import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

const Table = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (showTable) {
      axios
        .get("http://localhost:8080/api/getphone")
        .then((response) => {
          if (response.data && Array.isArray(response.data.data)) {
            setData(response.data.data);
          } else {
            throw new Error("API response is not an array");
          }
        })
        .catch((error) => {
          console.log(error);
          setData([]);
          alert("Error: API response is not in the expected format.");
        });
    }
  }, [showTable]);

  const handleButtonClick = () => {
    setShowTable(true);
  };

  return (
    <div>
      <h4>Male Users which have phone price greater than 10,000</h4>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Show Table 2{" "}
      </button>

      {showTable && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Income</th>
              <th>City</th>
              <th>Car</th>
              <th>Quote</th>
              <th>Phone Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.income}</td>
                <td>{item.city}</td>
                <td>{item.car}</td>
                <td>{item.quote}</td>
                <td>{item.phone_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
