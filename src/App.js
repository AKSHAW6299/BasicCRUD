import React, { useEffect, useState } from 'react';
import { EmployeeData } from './EmployeeData';

function App() {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    console.log('data :', data);

    useEffect(() => {
        setData(EmployeeData);
    }, []);

    const handleEdit = (id) => {
        const dt = data.filter(item => item.id === id);
        if (dt !== undefined) {
            setIsUpdate(true);
            setId(id);
            setFirstName(dt[0].firstName);
            setLastName(dt[0].lastName);
            setAge(dt[0].age);
        }
    }

    const handleDelete = (id) => {
        if (id > 0) {
            if (window.confirm('Are you sure you want to delete?')) {
                const dt = data.filter(item => item.id !== id);
                setData(dt);
            }
        }
    }

    const handleClear = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setId(0);
        setIsUpdate(false);
    }

    const handleSave = (e) => {
        let error = ''
        if (firstName === '')
            error += 'First name is required\n';
        if (lastName === '')
            error += 'Last name is required\n';
        if (age <= 0)
            error += 'Age is required\n';
        
        if (error === '') {
            e.preventDefault();
            const dt = [...data];
            const newObject = {
                id: EmployeeData.length + 1,
                firstName: firstName,
                lastName: lastName,
                age: age
            }
            dt.push(newObject);
            setData(dt);
        } else {
            alert(error);
        }
    }

    const handleUpdate = () => {
        const index = data.map((item) => {
            return item.id;
        }).indexOf(id);

        const dt = [...data];
        dt[index].firstName = firstName;
        dt[index].lastName = lastName;
        dt[index].age = age;
        setData(dt);
        handleClear();
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Basic CRUD</h1>

            <div className="mb-4 flex space-x-2 gap-4">
                <div className="mb-2 flex-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        className="mt-1 p-2 border rounded w-full"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div className="mb-2 flex-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        className="mt-1 p-2 border rounded w-full"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div className="mb-2 flex-1">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="text"
                        id="age"
                        placeholder="Age"
                        className="mt-1 p-2 border rounded w-full"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                </div>
                <div className='flex-1 mt-8'>
                    {isUpdate ? (
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
                            onClick={() => handleUpdate()}
                        >
                            Update
                        </button>
                    ) : (
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
                            onClick={(e) => handleSave(e)}
                        >
                            Save
                        </button>
                    )}
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleClear()}
                    >
                        Clear
                    </button>
                </div>
            </div>

            <hr />
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
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{item.id}</td>
                            <td className="border px-4 py-2">{item.firstName}</td>
                            <td className="border px-4 py-2">{item.lastName}</td>
                            <td className="border px-4 py-2">{item.age}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleEdit(item.id)}>
                                    Edit
                                </button>
                                <button 
                                    className={`${index < 3 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'} text-white font-bold py-1 px-2 rounded`} 
                                    onClick={() => index >= 3 && handleDelete(item.id)}
                                    disabled={index < 3}
                                >
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