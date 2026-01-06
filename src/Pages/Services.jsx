// import useFetch from '../hooks/useFetch';

// // Swiper Imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const Services = () => {
//   const { data } = useFetch('services.json');

//   return (
//     <div className='bg-backgroundBg text-textColor'>
//       <div className="container mx-auto py-20 px-4">

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-buttonBankground dark:text-textColor mb-4 text-center">
//           My Services
//         </h1>

//         <hr className="border-t-2 border-buttonBankground w-full mb-12 animate-grow" />

//         {/* Swiper Slider */}
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           modules={[Pagination]}
//           className="mySwiper"
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {data?.map((service, index) => (
//             <SwiperSlide key={index}>
//               <div className="p-6 min-h-[350px]  cursor-pointer rounded-lg shadow-md border border-textColor transition transform hover:-translate-y-2 hover:shadow-xl duration-500">
//                 <div className="flex items-center justify-center mb-4">
//                   <img
//                     src={service.icon}
//                     alt={service.title}
//                     className="w-16 h-16"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-center text-buttonBankground dark:text-textColor">
//                   {service.title}
//                 </h3>
//                 <p className="text-center">{service.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </div>
//   );
// };

// export default Services;

import useFetch from '../hooks/useFetch';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Services = () => {
  const { data } = useFetch('services.json');

  return (
    <div className="bg-backgroundBg text-textColor">
      <div className="container mx-auto py-20 px-4">

        {/* Heading */}
        <h1
          data-aos="fade-down"
          className="text-4xl font-bold text-buttonBankground dark:text-textColor mb-4 text-center"
        >
          My Services
        </h1>

        {/* Line */}
        <hr
          data-aos="zoom-in"
          data-aos-delay="200"
          className="border-t-2 border-buttonBankground w-full mb-12"
        />

        {/* Swiper Slider */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data?.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="p-6 min-h-[350px] cursor-pointer rounded-lg shadow-md border border-textColor transition transform hover:-translate-y-2 hover:shadow-xl duration-500"
                >
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-center text-buttonBankground dark:text-textColor">
                    {service.title}
                  </h3>

                  <p className="text-center">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default Services;


