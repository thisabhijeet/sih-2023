import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addACase } from "../features/cases/casesSlice";
import { useNavigate } from "react-router-dom";

function AddNewCase() {
  const dispatch = useDispatch();
  const generateUniqueID = () => {
    const date = new Date();
    const uniqueID = `${date.getFullYear()}${
      date.getMonth() + 1
    }${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    return uniqueID;
  };

  // Function to handle checkbox selection

  const [filingDate, setFilingDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [filingNo, setFilingNo] = useState(generateUniqueID());
  const [jurisdiction, setJurisdiction] = useState("Delhi");
  const [victims, setVictims] = useState([{ name: "", age: "", gender: "" }]);
  const [accused, setAccused] = useState([{ name: "", age: "", gender: "" }]);
  const [selectedSections, setSelectedSections] = useState([]);
  const navigate = useNavigate();
  const handleSectionChange = (event) => {
    const section = event.target.value;
    if (selectedSections.includes(section)) {
      // If the section is already selected, remove it
      setSelectedSections(selectedSections.filter((item) => item !== section));
    } else {
      // If the section is not selected, add it
      setSelectedSections([...selectedSections, section]);
    }
  };

  const addVictim = () => {
    setVictims([...victims, { name: "", age: "", gender: "" }]);
  };

  // Function to handle adding more accused
  const addAccused = () => {
    setAccused([...accused, { name: "", age: "", gender: "" }]);
  };

  const availableSections = [
    "302 IPC",
    "303 IPC",
    "304 IPC",
    "304A IPC",
    "308 IPC IT Act",
    "276C(1) IT Act",
    "132B Customs Act",
    "132(1) IT Act",
    "276CC IT Act",
    "271(1)(c) IT Act",
    "138 Negotiable Instruments Act",
    "26 Specific Relief Act",
    "24 Consumer Protection Act",
    "9 Arbitration and Conciliation Act",
    "12 Contempt of Courts Act",
  ];

  const sectionsRatings = {
    "302 IPC": 40,
    "303 IPC": 35,
    "304 IPC": 30,
    "304A IPC": 25,
    "308 IPC IT Act": 20,
    "276C(1) IT Act": 40,
    "132B Customs Act": 35,
    "132(1) IT Act": 30,
    "276CC IT Act": 25,
    "271(1)(c) IT Act": 20,
    "138 Negotiable Instruments Act": 40,
    "26 Specific Relief Act": 35,
    "24 Consumer Protection Act": 30,
    "9 Arbitration and Conciliation Act": 25,
    "12 Contempt of Courts Act": 20,
  };

  const jurisdictionRatings = {
    Delhi: 40,
    Kanpur: 35,
    Mathura: 30,
    Indore: 25,
    Raipur: 20,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0,
      c = 0;
    selectedSections.map((section) => {
      score += sectionsRatings[`${section}`];
    });
    const sectionScore = score / selectedSections.length;
    const jurisdictionScore = jurisdictionRatings[`${jurisdiction}`];
    score = 0;
    victims.map((v) => {
      let age = parseInt(v.age);
      //   console.log(age);
      if (age >= 10 && age < 20) {
        score += 40;
      } else if (age >= 20 && age < 30) {
        score += 35;
      } else if (age >= 30 && age < 40) {
        score += 30;
      } else if (age >= 40 && age < 50) {
        score += 25;
      } else if (age >= 50 && age < 60) {
        score += 20;
      }
    });
    const victimScore = score / victims.length;
    console.log(victimScore);
    score = 0;
    accused.map((v) => {
      let age = parseInt(v.age);
      if (age >= 10 && age < 20) {
        score += 40;
      } else if (age >= 20 && age < 30) {
        score += 35;
      } else if (age >= 30 && age < 40) {
        score += 30;
      } else if (age >= 40 && age < 50) {
        score += 25;
      } else if (age >= 50 && age < 60) {
        score += 20;
      }
    });
    const accusedScore = score / accused.length;
    score = (sectionScore + jurisdictionScore + victimScore + accusedScore) / 4;
    const info = {
      filingDate,
      filingNo,
      jurisdiction,
      victims,
      accused,
      selectedSections,
      score,
    };
    dispatch(addACase(info));
    navigate("/cases");
  };
  // const handleSubmit=(e)=>{
  // e.preventDefault();
  // // return <redirect to="/error-page" /> }/>
  // // redirect
  // navigate("/")
  // }
  return (
    <div className="bg-slate-950 pt-8">
      <div className="w-[600px] mx-auto p-4 border-[4px] rounded-md border-gray-600">
        <h2 className="text-4xl text-center font-bold mb-12 text-white">
          Generate New Case
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="filingDate"
              className="block text-xl font-medium text-white"
            >
              Filing Date:
            </label>
            <input
              type="date"
              id="filingDate"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md font-medium text-gray-500 outline-none"
              value={filingDate}
              onChange={(e) => setFilingDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="filingNo"
              className="block text-xl font-medium text-white"
            >
              Filing No:
            </label>
            <input
              type="text"
              id="filingNo"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md font-medium text-gray-500 outline-none"
              value={filingNo}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sectionsImposed"
              className="block text-xl font-medium text-white"
            >
              Sections Imposed:
            </label>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {availableSections.map((section, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`section${index}`}
                    value={section}
                    checked={selectedSections.includes(section)}
                    onChange={handleSectionChange}
                    className=""
                  />
                  <label
                    htmlFor={`section${index}`}
                    className="font-medium text-white"
                  >
                    {section}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="jurisdiction"
              className="block text-xl font-medium text-white"
            >
              Jurisdiction:
            </label>
            <select
              id="jurisdiction"
              className="mt-1 p-2 font-medium text-gray-500 outline-none block w-full border border-gray-300 rounded-md "
              value={jurisdiction}
              onChange={(e) => setJurisdiction(e.target.value)}
            >
              <option value="Delhi">Delhi</option>
              <option value="Raipur">Raipur</option>
              <option value="Mathura">Mathura</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Indore">Indore</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-xl font-medium text-white">
              Victims:
            </label>
            {victims.map((victim, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 grow border font-medium text-gray-500 border-gray-300 rounded-md outline-none"
                  value={victim.name}
                  onChange={(e) => {
                    const updatedVictims = [...victims];
                    updatedVictims[index].name = e.target.value;
                    setVictims(updatedVictims);
                  }}
                />
                <input
                  type="text"
                  placeholder="Age"
                  className="p-2 w-[100px] border  font-medium text-gray-500 border-gray-300 rounded-md outline-none"
                  value={victim.age}
                  onChange={(e) => {
                    const updatedVictims = [...victims];
                    updatedVictims[index].age = e.target.value;
                    setVictims(updatedVictims);
                  }}
                />
                <input
                  type="text"
                  placeholder="Gender"
                  className="p-2 w-[100px] border  font-medium text-gray-500 border-gray-300 rounded-md outline-none"
                  value={victim.gender}
                  onChange={(e) => {
                    const updatedVictims = [...victims];
                    updatedVictims[index].gender = e.target.value;
                    setVictims(updatedVictims);
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              className=" text-[18px] bg-slate-500 text-white font-bold px-8 py-2 rounded-full cursor-pointer mt-2"
              onClick={addVictim}
            >
              Add Victim
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-xl font-medium text-white">
              Accused:
            </label>
            {accused.map((accuse, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 grow border  font-medium text-gray-500 border-gray-300 rounded-md outline-none"
                  value={accuse.name}
                  onChange={(e) => {
                    const updatedAccused = [...accused];
                    updatedAccused[index].name = e.target.value;
                    setAccused(updatedAccused);
                  }}
                />
                <input
                  type="text"
                  placeholder="Age"
                  className="p-2 w-[100px] border  font-medium text-gray-500 border-gray-300 rounded-md outline-none"
                  value={accuse.age}
                  onChange={(e) => {
                    const updatedAccused = [...accused];
                    updatedAccused[index].age = e.target.value;
                    setAccused(updatedAccused);
                  }}
                />
                <input
                  type="text"
                  placeholder="Gender"
                  className="p-2 w-[100px] border  font-medium text-gray-500 border-gray-300 rounded-md outline-none"
                  value={accuse.gender}
                  onChange={(e) => {
                    const updatedAccused = [...accused];
                    updatedAccused[index].gender = e.target.value;
                    setAccused(updatedAccused);
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              className=" bg-slate-500 text-white font-bold text-[18px]  px-8 py-2 rounded-full cursor-pointer mt-2"
              onClick={addAccused}
            >
              Add Accused
            </button>
          </div>
          <button
            type="submit"
            className="bg-slate-500 text-white font-bold text-[18px] px-8 py-2 rounded-full cursor-pointer mt-2 mb-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewCase;
