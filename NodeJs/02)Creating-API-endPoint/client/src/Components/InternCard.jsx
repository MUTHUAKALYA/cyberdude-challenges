const InternCard = ({
  internName,
  role,
  company,
  github,
  location,
  linkedin,
}) => {
  return (
    <div
      className="m-2 max-w-xs border p-2 bg-gray-50 w-[280px] sm:w-[300px]  flex flex-col items-center rounded-lg shadow-md bg-opacity-80
mt-20}"
    >
      <span className="text-fuchsia-900 font-black">{internName}</span>
      <span className="font-bold text-black">{role}</span>
      <span className="font-normal text-sm"> {company}</span>
      <div className="flex gap-x-5 my-2 text-white font-semibold">
        <button className="bg-fuchsia-800 py-1 px-3 rounded-lg">
          <a href="{github}">Github</a>
        </button>
        <button className="bg-fuchsia-800 py-1 px-3 rounded-lg">
          <a href="{linkedin}">Linkedin</a>
        </button>
      </div>

      <span>{/* {internName} is from {country} */}</span>
    </div>
  );
};

export default InternCard;
