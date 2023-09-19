import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="h-screen bg-blue-300 flex flex-col space-y-8 justify-center items-center">
      <Link
        to={"/judgelogin"}
        className="bg-blue-500 text-[20px] text-white px-8 py-2 rounded-full cursor-pointer"
      >
        Login as a Judge
      </Link>
      <Link
        to={"/adminlogin"}
        className="bg-blue-500 text-[20px] text-white px-8 py-2 rounded-full cursor-pointer"
      >
        Login as Admin
      </Link>
    </div>
  );
}

export default LoginPage;
