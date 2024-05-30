import React, { useState } from 'react';

const CleaningServiceBooking = () => {
  const [selectedCleaning, setSelectedCleaning] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showDetails, setShowDetails] = useState('');

  const cleaningOptions = [
    {
      name: 'Standard Cleaning',
      details: `
        <h1 class="text-lg font-semibold">Bedrooms</h1>
        <ul class="list-disc pl-5">
          <li>Dusting of furniture</li>
          <li>Making bed</li>
          <li>Sweeping and/or mopping floors</li>
          <li>Dusting and wiping of skirtings</li>
          <li>Folding or hanging clothes</li>
          <li>Cleaning mirrors</li>
          <li>Cleaning out cobwebs</li>
        </ul>
        <h1 class="text-lg font-semibold mt-4">Living Room</h1>
        <ul class="list-disc pl-5">
          <li>Dusting of furniture and surfaces</li>
          <li>Mopping and sweeping floors</li>
          <li>Dusting and wiping of skirtings</li>
          <li>Dusting and wiping electronics</li>
          <li>Cleaning mirrors</li>
          <li>Cleaning out cobwebs</li>
        </ul>
        <h1 class="text-lg font-semibold mt-4">Kitchen</h1>
        <ul class="list-disc pl-5">
          <li>Wiping surfaces, sinks, and appliances</li>
          <li>Washing dishes</li>
          <li>Wiping outside of cupboards and fridge</li>
          <li>Cleaning the stovetop</li>
          <li>Cleaning inside and outside of the microwave</li>
          <li>Wiping walls</li>
          <li>Emptying bins and cleaning cobwebs</li>
        </ul>
      `,
    },
    {
      name: 'Deep Cleaning',
      details: `
        <h1 class="text-lg font-semibold">Bedrooms</h1>
        <ul class="list-disc pl-5">
          <li>Dusting of furniture</li>
          <li>Making bed</li>
          <li>Sweeping and/or mopping floors</li>
          <li>Dusting and wiping of skirtings</li>
          <li>Folding or hanging clothes</li>
          <li>Cleaning mirrors</li>
          <li>Cleaning out cobwebs</li>
        </ul>
        <h1 class="text-lg font-semibold mt-4">Living Room</h1>
        <ul class="list-disc pl-5">
          <li>Dusting of furniture and surfaces</li>
          <li>Mopping and sweeping floors</li>
          <li>Dusting and wiping of skirtings</li>
          <li>Dusting and wiping electronics</li>
          <li>Cleaning mirrors</li>
          <li>Cleaning out cobwebs</li>
        </ul>
        <h1 class="text-lg font-semibold mt-4">Kitchen</h1>
        <ul class="list-disc pl-5">
          <li>Wiping surfaces, sinks, and appliances</li>
          <li>Washing dishes</li>
          <li>Wiping outside of cupboards and fridge</li>
          <li>Cleaning the stovetop</li>
          <li>Cleaning inside and outside of the microwave</li>
          <li>Wiping walls</li>
          <li>Emptying bins and cleaning cobwebs</li>
        </ul>
      `,
    },
    {
      name: 'Move-In Cleaning',
      details: `
        <h1 class="text-lg font-semibold">Bedrooms</h1>
        <ul class="list-disc pl-5">
          <li>Dusting of furniture</li>
          <li>Making bed</li>
          <li>Sweeping and/or mopping floors</li>
          <li>Dusting and wiping of skirtings</li>
          <li>Folding or hanging clothes</li>
          <li>Cleaning mirrors</li>
          <li>Cleaning out cobwebs</li>
        </ul>
        <h1 class="text-lg font-semibold mt-4">Living Room</h1>
        <ul class="list-disc pl-5">
          <li>Dusting of furniture and surfaces</li>
          <li>Mopping and sweeping floors</li>
          <li>Dusting and wiping of skirtings</li>
          <li>Dusting and wiping electronics</li>
          <li>Cleaning mirrors</li>
          <li>Cleaning out cobwebs</li>
        </ul>
        <h1 class="text-lg font-semibold mt-4">Kitchen</h1>
        <ul class="list-disc pl-5">
          <li>Wiping surfaces, sinks, and appliances</li>
          <li>Washing dishes</li>
          <li>Wiping outside of cupboards and fridge</li>
          <li>Cleaning the stovetop</li>
          <li>Cleaning inside and outside of the microwave</li>
          <li>Wiping walls</li>
          <li>Emptying bins and cleaning cobwebs</li>
        </ul>
      `,
    },
  ];

  const taskOptions = [
    {
      name: 'Ironing',
      details: `
        <h1 class="text-lg font-semibold">Ironing</h1>
        <ul class="list-disc pl-5">
          <li>Ironing clothes</li>
          <li>Folding clothes</li>
        </ul>
      `,
    },
    {
      name: 'Laundry',
      details: `
        <h1 class="text-lg font-semibold">Laundry</h1>
        <ul class="list-disc pl-5">
          <li>Washing clothes</li>
          <li>Drying clothes</li>
        </ul>
      `,
    },
    {
      name: 'Wardrobe Organization',
      details: `
        <h1 class="text-lg font-semibold">Wardrobe Organization</h1>
        <ul class="list-disc pl-5">
          <li>Organizing wardrobe</li>
          <li>Folding clothes</li>
        </ul>
      `,
    },
  ];

  const handleCleaningChange = (name) => {
    let updatedCleaning = [];
    if (selectedCleaning.includes(name)) {
      updatedCleaning = selectedCleaning.filter((item) => item !== name);
      setShowDetails('');
    } else {
      updatedCleaning = [name];
      setShowDetails(name);
    }
    setSelectedCleaning(updatedCleaning);

    if (updatedCleaning.length >= 1) {
      setErrorMessage('Notice!! You can select only one type of cleaning');
    } else {
      setErrorMessage('');
    }
  };

  const handleTaskChange = (name) => {
    const updatedTasks = selectedTasks.includes(name)
      ? selectedTasks.filter((item) => item !== name)
      : [...selectedTasks, name];
    setSelectedTasks(updatedTasks);

    if (showDetails === name) {
      setShowDetails('');
    } else {
      setShowDetails(name);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20 md:pt-24 lg:pt-32">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Book a Cleaning Service</h1>
        <p className={`mb-4 text-center ${errorMessage ? 'text-red-500' : 'text-gray-700'}`}>
          {errorMessage || 'You can select one type of cleaning and extra tasks'}
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Cleaning Types</h2>
          {cleaningOptions.map((option) => (
            <div key={option.name} className="mb-4">
              <button
                className={`flex justify-between items-center w-full py-3 px-5 border rounded-lg ${
                  selectedCleaning.includes(option.name)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-white'
                } hover:bg-blue-100`}
                id={`cleaning-${option.name.replace(/\s+/g, '-').toLowerCase()}`}
                name="cleaning"
                onClick={() => handleCleaningChange(option.name)}
              >
                <span className="text-lg font-medium text-gray-800">{option.name}</span>
                <input
                  type="checkbox"
                  checked={selectedCleaning.includes(option.name)}
                  readOnly
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </button>
              {showDetails === option.name && (
                <div className="mt-2 p-4 border rounded-lg bg-gray-50">
                  <div dangerouslySetInnerHTML={{ __html: option.details }} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Additional Tasks</h2>
          {taskOptions.map((option) => (
            <div key={option.name} className="mb-4">
              <button
                className={`flex justify-between items-center w-full py-3 px-5 border rounded-lg ${
                  selectedTasks.includes(option.name)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-white'
                } hover:bg-blue-100`}
                id={`task-${option.name.replace(/\s+/g, '-').toLowerCase()}`}
                name="task"
                onClick={() => handleTaskChange(option.name)}
              >
                <span className="text-lg font-medium text-gray-800">{option.name}</span>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(option.name)}
                  readOnly
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </button>
              {showDetails === option.name && (
                <div className="mt-2 p-4 border rounded-lg bg-gray-50">
                  <div dangerouslySetInnerHTML={{ __html: option.details }} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Selected Services</h2>
          {selectedCleaning.length > 0 && (
            <div className="mb-4">
              <h3 className="font-medium text-gray-700">Cleaning:</h3>
              {selectedCleaning.map((service) => (
                <p key={service} className="ml-4 text-gray-600">{service}</p>
              ))}
            </div>
          )}
          {selectedTasks.length > 0 && (
            <div className="mb-4">
              <h3 className="font-medium text-gray-700">Tasks:</h3>
              {selectedTasks.map((task) => (
                <p key={task} className="ml-4 text-gray-600">{task}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CleaningServiceBooking;
