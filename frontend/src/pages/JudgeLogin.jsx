import React, { useEffect, useState } from "react";

function JudgeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("done");
  };

  return (
    <div className="h-screen bg-blue-300 flex flex-col text-white justify-center items-center">
      <div className="w-[600px] mx-auto flex flex-col text-white justify-center items-center -mt-16">
        <div className="font-bold text-5xl">Welcome to Judge Login!</div>
        <form
          className="flex flex-col justify-center items-center"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="flex mt-16 justify-between items-center w-[450px]">
            <div className="text-[24px] font-medium">Email</div>
            <input
              className="ml-4 rounded-full px-4 py-4 text-gray-500 outline-none w-[330px] font-medium"
              type="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex mt-8 justify-between items-center w-[450px]">
            <div className="text-[24px] font-medium">Password</div>
            <input
              className="ml-4 rounded-full px-4 py-4 text-gray-500 outline-none w-[330px] font-medium"
              type="password"
              placeholder="randomPassword"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-[20px] text-white mt-8 text-center font-medium py-2 w-2/5 rounded-full cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default JudgeLogin;
