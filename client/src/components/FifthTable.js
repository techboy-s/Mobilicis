import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";

const Table = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (showTable) {
      axios
        .get("http://localhost:8080/api/getavgincome")
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
      <h4>
        Show the data of top 10 cities which have the highest number of users
        and their average income
      </h4>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Show Table 5{" "}
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
              <th>Count</th>
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
                <td>{item._id}</td>
                <td>{item.count}</td>
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Table.css";

// const Table = () => {
//   const [data, setData] = useState([]);
//   const [showTable, setShowTable] = useState(false);

//   useEffect(() => {
//     if (showTable) {
//       axios
//         .get("http://localhost:8080/api/getavgincome")
//         .then((response) => {
//           if (response.data && Array.isArray(response.data.data)) {
//             setData(response.data.data);
//           } else {
//             throw new Error("API response is not an array");
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//           setData([]);
//           alert("Error: API response is not in the expected format.");
//         });
//     }
//   }, [showTable]);

//   const handleButtonClick = () => {
//     setShowTable(true);
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Show Table</button>

//       {showTable && (
//         <table>
//           <thead>
//             <tr>
//               <th>City</th>
//               <th>Count</th>
//               <th>Average Income</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item._id}>
//                 <td>{item._id}</td>
//                 <td>{item.count}</td>
//                 <td>{item.income}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Table;
