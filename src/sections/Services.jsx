import React, { useEffect } from 'react';
import { service } from '../components/export';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="light bg-transparent pb-2">
      <section
        id="service"
        className="light bg-slate-100 lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500">
            OUR SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10"
          >
            Top real estate <br /> service available
          </h1>
        </div>
        <div
          id="service-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {service.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200 flex justify-center items-center">
                {/* Render the icon */}
                {item.icon && <item.icon className="text-red-600 text-4xl" />}
              </div>
              <h1 className="text-black text-[22px] font-semibold">
                {item.title}
              </h1>
              <p className="text-lg text-slate-700">{item.desc}</p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
