import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="absolute md:w-[calc(100vw-240px)] w-full top-0 right-0 h-full flex justify-center items-center flex-col bg-gradient-to-br from-[#191f24] to-[#22D37B] z-10 transition ease-in-out delay-150">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
