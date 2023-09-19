import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ShowCases() {
  const { cases } = useSelector((state) => {
    return state.cases;
  });
  console.log(cases, "cases");

  return (
    <div className="h-screen bg-blue-300">
      <div className="bg-blue-300 pt-8">
        <Link
          to={"/addnewcase"}
          className="bg-blue-500 text-[20px] ml-[590px] text-white font-bold px-8 py-2 rounded-full cursor-pointer"
        >
          Add a new case
        </Link>
        <h2 className="text-[30px] font-bold text-white mt-8 mb-4 text-center">
          List of Cases
        </h2>
        {cases.length > 0 && (
          <div className="grid grid-cols-1 w-[500px] gap-4 mx-auto">
            {cases.map((info, index) => (
              <div
                key={index}
                className="rounded-lg bg-white overflow-hidden shadow-md"
              >
                <div className="p-4">
                  <h3 className="text-3xl text-center text-gray-500 font-bold mb-2">
                    Case {index + 1}
                  </h3>
                  <p>
                    <span className="font-bold text-gray-500">
                      Filing Date{" "}
                    </span>{" "}
                    <span className="font-semibold">{info.filingDate}</span>
                  </p>
                  <p className="mt-2">
                    <span className="font-bold text-gray-500">Filing No</span>{" "}
                    <span className="font-semibold"> {info.filingNo}</span>
                  </p>
                  <p className="mt-2">
                    <span className="font-bold text-gray-500">
                      Sections Imposed
                    </span>
                    <br />
                    <span className="font-semibold">
                      {info.selectedSections.join(", ")}
                    </span>
                  </p>
                  <p className="mt-2">
                    <span className="font-bold text-gray-500">
                      Jurisdiction:
                    </span>{" "}
                    <span className="font-semibold">{info.jurisdiction}</span>
                  </p>
                  <div className="mt-2">
                    <h4 className="font-bold text-gray-500">Victims</h4>
                    <ul>
                      {info.victims.map((victim, vIndex) => (
                        <li className="font-semibold" key={vIndex}>
                          {victim.name}, {victim.age} years, {victim.gender}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-bold text-gray-500">Accused</h4>
                    <ul>
                      {info.accused.map((accuse, aIndex) => (
                        <li className="font-semibold" key={aIndex}>
                          {accuse.name}, {accuse.age} years, {accuse.gender}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-2">
                    <span className="font-bold text-gray-500">
                      Hearing Time
                    </span>{" "}
                    <span className="font-semibold">
                      {parseInt(info.score)} minutes
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {cases.length == 0 && <div className="text-center text-gray-500 font-bold text-[24px]">No Cases Found as of now </div>}
      </div>
    </div>
  );
}

export default ShowCases;
