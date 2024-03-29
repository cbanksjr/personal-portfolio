import { useState, useEffect } from "react";
import Icons from "./Icons";
import imageSelf from "../assets/headshot-2.jpg";

const Profile = () => {
  const [myName, setName] = useState('Craig Banks Jr');
  const [index, setIndex] = useState(0);

    useEffect(()=>{
      const interval = setInterval(() => {
        setIndex((i) => i % myName.length + 1)
      }, 175);
      return () => clearInterval(interval);
    }, [myName.length]);

  return (
    <section className="flex flex-col p-auto xl:grid grid-cols-[4fr 2fr] grid-rows-[4fr] items-center justify-center pt-8 pb-36 mt-20">
      <img
        className="w-84 h-96 md:w-[475px] md:h-[525px] xl:w-[525px] xl:h-[575px] xl:ml-36 xl:col-start-2 rounded-[50%] shadow-2xl shadow-slate-900"
        src={imageSelf}
        alt='Craig Banks Jr'
      />
      <div className="pt-20 lg:flex flex-col items-center row-start-1 leading-normal">
        <h1 className="text-xl text-center lg:text-5xl 2xl:text-7xl font-extrabold mb-10">
          Software Developer
        </h1>
        <h2 className="xl:flex text-slate-50 font-semibold text-xl">
          <p className="text-center xl:p-6">
            <span className="text-sm lg:text-xl 2xl:text-2xl font-normal">My name is </span>
            <span className="lg:text-2xl 2xl:text-3xl">{myName.substring(0, index)}</span>
            <span className="text-sm lg:text-xl 2xl:text-2xl font-normal">
              <br />
              I am a developer based in Dallas, TX
            </span>
          </p>
        </h2>
        <div className="m-auto xl:flex items-center p-2 mt-4">
          <h2 className="invisible xl:visible font-bold mr-4">Skills:</h2>
          <Icons />
        </div>
      </div>
    </section>
  );
};

export default Profile;
