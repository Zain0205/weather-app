import { CiSearch } from "react-icons/ci";

function Input() {
  return (
    <div className="relative text-center">
      <input type="text" className="rounded-full w-full px-5 py-2 focus:outline-none text-xl font-light capitalize shadow-xl" placeholder="Search for city..." />
      <button className="absolute text-[1.7rem] cursor-pointer top-[8.5px] right-4">
        <CiSearch />
      </button>
    </div>
  );
}

export default Input;
