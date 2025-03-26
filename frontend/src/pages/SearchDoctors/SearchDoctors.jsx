import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import InputContainer from "../../components/InputContainer/InputContainer";
import Option from "../../components/Option";
import Loading from "../../components/Loading";
import Btn from "../../components/Btn";
import toast from "react-hot-toast";
import axios from "axios";
import Card from "../../components/BookDoctor/Card";

const BookDoctor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [search_by, setSearch_by] = useState("doctor_id");
  const [doctor_id, setDoctor_id] = useState("");
  const [location, setLocation] = useState("");
  const [specilization, setSpecilization] = useState("");
  const [users, setUsers] = useState([]);

  const data = [
    {
      label: "Search By",
      sele: "search_by",
      opt: [
        {
          val: "doctor_id",
          name: "Doctor ID",
        },
        {
          val: "credientials",
          name: "Credientials",
        },
      ],
    },
  ];

  const noInput = [
    {
      label: "Location",
      id: "location",
      placeholder: "Enter City",
      inputType: "text",
      onchange: (event) => {
        setLocation(event.target.value);
      },
    },
    {
      label: "Specilization",
      id: "specilization",
      placeholder: "Enter Doctor Specilization",
      inputType: "text",
      onchange: (event) => {
        setSpecilization(event.target.value);
      },
    },
  ];

  const btninfo = {
    label: "Search For Doctor",
    onclick: async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
        if (doctor_id == "" && (location == "" || specilization == "")) {
          toast.error("Please Fill Up Important Details");
          return;
        }
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        console.log(doctor_id);
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKENDURL}/api/v1/user/searchDoctor`,
          {
            doctor_id,
            location,
            specilization,
          },
          { withCredentials: true },
          config
        );
        if (data) {
          console.dir(data);
          setUsers(data);
        } else {
          console.log("Not Found");
        }
      } catch (error) {
        toast.error("Error on Backend Side");
      } finally {
        setIsLoading(false);
      }
    },
  };

  return (
    <div className="w-full">
      <div className="mt-2 w-[300px]">
        {data.map((ele, idx) => {
          return (
            <Option
              key={idx}
              opt={ele}
              setOption={setSearch_by}
              setDoctor_id={setDoctor_id}
              setLocation={setLocation}
              setSpecilization={setSpecilization}
            />
          );
        })}

        {search_by == "doctor_id" ? (
          <InputContainer
            detail={{
              label: "Doctor ID",
              id: "doctor_id",
              placeholder: "Enter Doctor ID",
              inputType: "text",
              onchange: (event) => {
                setDoctor_id(event.target.value);
              },
            }}
          />
        ) : (
          <form>
            {noInput.map((ele, idx) => {
              return <InputContainer key={idx} detail={ele} />;
            })}
          </form>
        )}

        {isLoading ? <Loading /> : <Btn btninfo={btninfo} />}

        {/* <label
          className="block font-medium text-gray-900"
          htmlFor="first-name"
        >
          Doctor ID
        </label>
      <div className="mt-2 w-[300px] relative">
        <input
          id="first-name"
          name="first-name"
          type="text"
          autoComplete="given-name"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        <FaSearch className="absolute top-2 w-5 h-5 right-3" />
      </div> */}
      </div>
      <div className="p-10  flex flex-wrap justify-center">
        {users.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default BookDoctor;
