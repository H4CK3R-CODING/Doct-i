import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useRecoilValue } from "recoil";
import { userRecoil } from "../../Recoils/Atoms";
import { useNavigate } from "react-router-dom";

export default function List({ bookingDetails }) {
  const user = useRecoilValue(userRecoil);
  const navigate = useNavigate();
  console.dir(bookingDetails);
  return (
    <div className="shadow-lg w-[80vw] p-4 rounded-md lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {user == "Patient"
            ? bookingDetails?.doctor_id?.name
            : bookingDetails?.patient_id?.name}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              aria-hidden="true"
              className="mr-1.5 size-5 shrink-0 text-gray-400"
            />
            Full-time
          </div>
          {user === "Patient" ?? (
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon
                aria-hidden="true"
                className="mr-1.5 size-5 shrink-0 text-gray-400"
              />
              {user == "Patient"
                ? bookingDetails?.doctor_id?.location
                : bookingDetails?.patient_id?.location}
            </div>
          )}
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon
              aria-hidden="true"
              className="mr-1.5 size-5 shrink-0 text-gray-400"
            />
            $120k &ndash; $140k Fees
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              aria-hidden="true"
              className="mr-1.5 size-5 shrink-0 text-gray-400"
            />
            {user == "Patient" ? bookingDetails?.slot : bookingDetails?.slot}
          </div>
        </div>
      </div>
      <div className="mt-5  flex lg:ml-4 lg:mt-0">
        <span
          onClick={() => {
            alert("hel");
            navigate("/bookingDoctor", {
              state: { doctor_id: bookingDetails?.doctor_id?._id },
            });
          }}
          className="hidden sm:block"
        >
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {/* <PencilIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 size-5 text-gray-400"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ml-0.5 mr-1.5 size-5 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Change Slot
          </button>
        </span>

        <span
          onClick={() => {
            if(user == "Patient"){
              navigate("/doctordetails", {
                state: { user: bookingDetails?.doctor_id },
              });
            }
            else if(user == "Doctor"){
              navigate("/patientdetails", {
                state: { user: bookingDetails?.patient_id },
              });
            }
          }}
          className="ml-3 hidden sm:block"
        >
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {/* <LinkIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 size-5 text-gray-400"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="-ml-0.5 mr-1.5 size-5 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            View Profile
          </button>
        </span>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {/* <LinkIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 size-5 text-gray-400"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="-ml-0.5 mr-1.5 size-5 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            Cancel
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
            Verify
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 ml-1.5 size-5 text-gray-400"
            />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
              >
                View
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
