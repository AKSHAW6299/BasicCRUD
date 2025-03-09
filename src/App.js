import React, { useEffect, useState } from 'react';
import { dummyData } from './DummyData';


function App() {

  const [data, setData] = useState([])

  // Fetch data
  useEffect(() => {
    setData(dummyData)
  }, [])


  return (
    <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.firstName}</td>
                        <td className="border px-4 py-2">{item.lastName}</td>
                        <td className="border px-4 py-2">{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  );
}

export default App;