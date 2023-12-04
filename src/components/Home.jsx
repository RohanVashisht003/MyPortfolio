import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <Element
      name="home"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Rohan Sharma
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span>I am &nbsp;</span>
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Mern stack developer")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
          Experienced full-stack developer, thrive on turning design concepts
          into web applications. My strong, domain knowledge,communication
          skills, and ability to adapt to various project requirements make me
          an asset to any development team.
        </p>
      </div>
    </Element>
  );
};

export default Home;
