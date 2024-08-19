import React, { useState } from "react";
import bg from "../assets/bg.png";
const Form = () => {
  // variable part start
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailError, setMailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // function part start
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    email == "" ? setMailError(true) : setMailError(false);
    password == "" ? setPasswordError(true) : setPasswordError(false);
  };

  return (
    <>
      <div
        className="w-full min-h-screen bg-blue-950 flex items-center  "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container  flex justify-center">
          <form
            onSubmit={handleSubmit}
            action=""
            className="w-[470px]  bg-white rounded-[10px] flex flex-col items-center  "
          >
            <h3 className="font-DMsans font-bold text-[42px] leading-[52px] text-[#1E0E62] text-center mt-[60px] mb-[50px] ">
              Sign In
            </h3>
            <div className="flex  flex-col  ">
              <div className="flex flex-col  ">
                <label
                  htmlFor="email"
                  className="font-DMsans font-bold text-[16px] text-[#1E0E62]  mb-[10px] "
                >
                  Email
                </label>
                <input
                  onChange={handleEmail}
                  type="emil"
                  placeholder="Your email"
                  className="w-[370px] h-[60px] rounded-[100px] text-orange-600 font-bold border-[2px] border-[#EBEAED] pl-[24px] outline-none placeholder:font-normal "
                />
              </div>
              <p
                className={`text-red-500 opacity-0 text-right ${
                  mailError ? "opacity-100" : "opacity-0"
                }`}
              >
                Email is blank.
              </p>
              <div className="flex flex-col  ">
                <label
                  htmlFor="password"
                  className="font-DMsans font-bold text-[16px] text-[#1E0E62]  mb-[10px] "
                >
                  Password
                </label>
                <input
                  onChange={handelPassword}
                  type="password"
                  placeholder="Your password"
                  className="w-[370px] h-[60px] rounded-[100px] border-[2px] border-[#EBEAED] pl-[24px] outline-none  text-orange-600 font-bold placeholder:font-normal "
                />
              </div>
              <p
                className={`text-red-500 opacity-0 text-right ${
                  passwordError ? "opacity-100" : "opacity-0"
                }`}
              >
                Password is blank.
              </p>
            </div>
            <button
              className="w-[230px] h-[60px] bg-cyan-500 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/50 hover:text-[#dfdede] rounded-[100px] text-white font-DMsans font-bold mt-[30px] mb-[70px]  "
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
