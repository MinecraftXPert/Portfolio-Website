import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center mt-[12rem]">
        <h1 className="text-[40px]">About me</h1>
      </div>
      <div className="max-w-[1300px] m-auto flex flex-col items-center md:flex-row md:justify-around p-8 gap-12">
        <motion.div
          className="flex flex-col w-full md:w-[35rem] gap-5"
          initial={{ opacity: 0, transform: "translate(-50px, 0)" }}
          whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[20px] text-center md:text-left font-bold">
            Hey nice to meet you, I'm Noah.
          </h1>
          <p className="text-[16px]/8 text-center md:text-left text-[#333333]">
            Hi name is Noah! I am a 23 year old self-taught web developer
            currently pursuing a bachelor's degree in Computer Science.
            <br />
            <br />
            I've always loved learning about technology and have always had a
            passion learning about programming especially web development. I
            started out learning on a website called Khan Academy. It was a
            great start but was very limited in what you could actually learn.
            So I started going to other sites such as w3schools and watched lots
            of youtubers such as Web Dev Simplified and Kevin Powell. I hope to
            continue and excel in my programming knowledge as time goes on and
            hope to land a good internship one day.
            <br />
            <br />
            Besides programming, I'm also a big movie fanatic and enjoy pc
            gaming. One of my favorite games is Stardew Valley but also lots of
            other indie games such as Hollow Knight. I also enjoy playing chess
            although I'm not great at it but I hope to improve on it soon. I
            also enjoy learning how to play songs on the piano.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translate(50px, 0)" }}
          whileInView={{ opacity: 1, transform: "translate(0, 0)" }}
          transition={{ duration: 0.5 }}
        >
          <img src="imgs/coding.png" alt="" width="400px" />
        </motion.div>
      </div>
    </section>
  );
}
