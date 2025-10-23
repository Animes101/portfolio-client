import React from 'react';
import useFetch from '../hooks/useFetch';

const Services = () => {
  const { data } = useFetch('services.json');

  return (
     <div className='bg-backgroundDark text-textColor'>
      <div className="container mx-auto py-20 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold  text-buttonBankground dark:text-textColor mb-4 text-center">My Services</h1>
      <hr className="border-t-2 border-buttonBankground w-full mb-12 animate-grow" />

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-evenly">
        {data?.map((service, index) => (
          <div
            key={index}
            className="p-6 cursor-pointer rounded-lg shadow-md border border-textColor transition transform hover:-translate-y-2 hover:shadow-xl duration-500"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-buttonBankground dark:text-textColor">{service.title}</h3>
            <p className=" text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default Services;
