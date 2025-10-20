import React from 'react';
import useFetch from '../hooks/useFetch';

const Services = () => {
  const { data } = useFetch('services.json');

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center animate-fadeIn">My Services</h1>
      <hr className="border-t-2 border-blue-500 w-full mb-12 animate-grow" />

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 hover:shadow-xl duration-500"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
