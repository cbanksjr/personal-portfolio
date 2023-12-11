/** @format */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";
import imageSelf from "../assets/57F76CF8-3951-412B-B7FC-1E8838E0263D_1_105_c.jpeg";

const Profile = ({ name, occupation, statement }) => {
  const [myName, setName] = useState(name);
  const [index, setIndex] = useState(0);

    useEffect(()=>{
      const interval = setInterval(() => {
        setIndex((i) => i % myName.length + 1)
      }, 175);
      return () => clearInterval(interval);
    }, [myName.length]);

  return (
    <section className="flex flex-col p-12 lg:grid grid-cols-[4fr 2fr] grid-rows-[4fr] items-center pt-8 pb-56 mt-20">
      <img
        className="w-[475px] h-[575px] lg:col-start-2 rounded-[50%] shadow-2xl shadow-slate-900"
        src={imageSelf}
        alt={name}
      />
      <div className="pt-20 lg:flex flex-col items-center row-start-1 leading-normal">
        <h1 className="text-xl text-center lg:text-5xl font-extrabold mb-10">
          {occupation}
        </h1>
        <h2 className="xl:flex text-slate-50 font-semibold text-xl">
          <p className="text-center xl:p-6">
            <span className="text-sm lg:text-xl font-normal">My name is </span>
            <span className="lg:text-2xl">{name.substring(0, index)}</span>
            <span className="text-sm lg:text-xl font-normal">
              <br />
              {statement}
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

Profile.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  statement: PropTypes.string,
};
export default Profile;
