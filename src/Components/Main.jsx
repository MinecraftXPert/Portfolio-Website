export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20 md:flex-row md:justify-around md:mt-[4rem]">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-[48px] text-center md:text-left md:text-[56px]">
          Welcome to
          <br />
          my portfolio
        </h1>
        <br />
        <br />
        <h3 className="mb-7 text-[28px] text-gray-800 text-center md:text-left md:mb-5">
          Hi, my name is Noah. I'm a frontend-developer trying
          <br />
          to become a full-stack developer.
        </h3>
        <button className="bg-[#1a73e8] text-white p-3 rounded-xl cursor-pointer">
          Explore Projects
        </button>
      </div>
      <div>
        <img className="w-[400px]" src="imgs/coding.png" alt="" />
      </div>
    </div>
  );
}

// {/* Gmail icon by Icons8: https://icons8.com/icons/set/gmail */}
//         {/* Github icon by Icons8: https://icons8.com/icons/set/github */}
//         {/* Instagram icon by Icons8: https://icons8.com/icons/set/instagram */}
//         <div className="flex justify-center mt-5 gap-2 md:justify-start">
//           <img src="gmail.svg" alt="gmail icon" width="35px" />
//           <img src="github.svg" alt="github icon" width="35px" />
//           <img src="instagram.svg" alt="instagram icon" width="35px" />
//         </div>
