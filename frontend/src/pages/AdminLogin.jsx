import React from "react";

function AdminLogin() {
  return (
    <div className="h-screen bg-blue-300 flex flex-col text-white justify-center items-center">
      <div className="w-[600px] mx-auto flex flex-col text-white justify-center items-center -mt-16">
        <div className="font-bold text-5xl">Welcome to Admin Login!</div>
        <div className="flex mt-16 justify-between items-center w-[450px]">
          <div className="text-[24px] font-medium">Email</div>
          <input
            className="ml-4 rounded-full px-4 py-4 text-gray-500 outline-none w-[330px] font-medium"
            type="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="flex mt-8 justify-between items-center w-[450px]">
          <div className="text-[24px] font-medium">Password</div>
          <input
            className="ml-4 rounded-full px-4 py-4 text-gray-500 outline-none w-[330px] font-medium"
            type="password"
            placeholder="john@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
