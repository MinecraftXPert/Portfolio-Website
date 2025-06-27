export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-12 md:flex-row md:justify-around md:mx-10">
      <div>
        <h1 className="text-[48px] text-center md:text-left md:text-[56px]">
          Welcome to
          <br />
          my portfolio!
        </h1><br /><br />
        <h3 className="p-2 text-[28px] text-gray-800 text-center md:text-left">
          Hi, my name is Noah. I'm a frontend-developer trying<br />to become a
          full-stack developer.
        </h3>
      </div>
      <div>
        <img className="w-[400px]" src="imgs/coding.png" alt="" />
      </div>
    </div>
  );
}
