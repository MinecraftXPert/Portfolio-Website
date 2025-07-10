export default function About() {
  return (
    <section>
      <div className="flex flex-col items-center mt-[12rem]">
        <h1 className="text-[40px]">About me</h1>
      </div>
      <div className="max-w-[1300px] m-auto flex flex-col items-center md:flex-row md:justify-around p-8 gap-12">
        <div className="flex flex-col w-full md:w-[35rem] gap-5">
          <h1 className="text-[20px] text-center md:text-left font-bold">
            Hey nice to meet you, I'm Noah.
          </h1>
          <p className="text-[16px]/8 text-center md:text-left text-[#333333]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates magni provident. Delectus repellat dolore amet vero accusamus ab repudiandae! <br />
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis ipsam laboriosam aliquid, voluptas voluptates debitis asperiores officia vel doloremque, ad quasi veritatis quisquam.! <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora neque expedita! Corporis aliquam explicabo illo dicta soluta totam placeat impedit, iusto aspernatur expedita! Cum animi praesentium molestias porro dolorem corporis assumenda unde, dignissimos ut eveniet itaque doloribus, maxime sint?
          </p>
        </div>
        <div>
          <img src="imgs/coding.png" alt="" width="400px"/>
        </div>
      </div>
    </section>
  );
}
