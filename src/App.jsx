import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import CardImage from "./components/CardImage";
function App() {
  const cards = [
    { imageUrl: "./Photos/photo1.png", name:'Bill Mahoney', role: 'Product Owner' },
    { imageUrl: "./Photos/photo2.png", name:'Saba Cabrera', role: 'Art Director' },
    { imageUrl: "./Photos/photo3.png", name:'Shae Lee', role: 'Tech Lead' },
    { imageUrl: "./Photos/photo4.png", name:'Skylah Lu', role: 'UX Designer' },
    { imageUrl: "./Photos/photo5.png", name:'Griff Richards', role: 'Developer' },
    { imageUrl: "./Photos/photo6.png", name:'Stan John', role: 'Developer' },
  ];
  return (
    <>
      <div className="lg:container mx-auto  px-4   sm:px-10 lg:px-[1rem] xl:px-[8rem]">
        <div className="grid sm:grid-cols-2 gap-4 ">
          <div>
            <h1 className="text-2xl lg:text-5xl sm:text-3xl font-bold">The creative crew</h1>
          </div>
          <div className=" lg:text-2xl ">
            <div className="mx-auto lg:w-[27rem]">
              <p className="font-bold">WHO WE ARE</p>
              <p className="text-[0.8rem]  lg:text-2xl">
                We are term of creatively diverse. driven. innovative
                individuals working in various locations from the world.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="columns-3 gap-4 bg-cyan-500"> */}
        <div className="grid grid-cols-2 px-3 sm:px-0 sm:grid-cols-3 gap-0 mt-6 lg:mt-32">
          {cards.map((item, index) => {
            console.log((index + 1) % 2);
            return (
              <CardImage
                // className={`${(index + 1) % 2 == 0 ? " bg-gray-900 " : ""} `}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
