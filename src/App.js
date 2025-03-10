// Link => https://www.youtube.com/watch?v=maGN8iGs744&list=LL&index=1&t=532s
import React, { useEffect, useState } from 'react';
import { EmployeeData } from './EmployeeData';

function App() {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState(0);

    // Flag to show 1 button save or update at a single time!
    const [isUpdate, setIsUpdate] = useState(false);

    console.log('data :', data);

    // fetch data when the component renders
    useEffect(() => {
        setData(EmployeeData);
    }, []);


    // Creating 2 events, for edit and delete
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

    // 4) Delete method
    const handleDelete = (id) => {
        // this condition will return the all id except the deleted id!
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

    // 1) Create method
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
            // getting all remaining data
            const dt = [...data];
            // for addinhg a new data, creating an object of the data
            const newObject = {
                id: EmployeeData.length + 1,
                firstName: firstName,
                lastName: lastName,
                age: age
            }
            // We are pushing the new object to the data array i.e. dt
            dt.push(newObject);
            // updating data state
            setData(dt);
        } else {
            alert(error);
        }
    }

    // 3) Update method : We have to find index to update
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
                    {/* Using check */}
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
                                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(item.id)}>
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