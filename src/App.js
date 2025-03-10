import React, { useEffect, useState } from 'react';
import { dummyData } from './DummyData';

function App() {
    const [data, setData] = useState([]);

    console.log('data :', data);
    

    useEffect(() => {
        setData(dummyData);
    },[]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User data</h1>
            <table className="table-auto w-full border-collapse">
                <thead> 
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">User ID</th>
                        <th className="px-4 py-2 border">First Name</th>
                        <th className="px-4 py-2 border">Last Name</th>
                        <th className="px-4 py-2 border">Age</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100 text-center">
                            <td className="border px-4 py-2">{index+1}</td>
                            <td className="border px-4 py-2">{item.id}</td>
                            <td className="border px-4 py-2">{item.firstName}</td>
                            <td className="border px-4 py-2">{item.lastName}</td>
                            <td className="border px-4 py-2">{item.age}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;