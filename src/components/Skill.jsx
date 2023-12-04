import { Element } from "react-scroll";
import { languages } from "../assets/StaticData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element
      name="skill"
      className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300  py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
            Skills
          </p>
          <p className="py-6">
            I have used and worked with the following technologies in my
            projects.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center justify-center">
          {languages.map(({ id, src, title, style, imgStyle }) => (
            <div
              key={id}
              className={`shadow-md transform hover:scale-105 rounded-full w-40 h-40 flex flex-col justify-center ${style}`}
              data-aos="fade-up"
              data-aos-duration={id + "00"}
              data-aos-easing="linear"
            >
              <img
                src={src}
                alt={title}
                className={`mx-auto h-20 w-20 ${imgStyle ? imgStyle : ""}`}
              />
              <p className="mt-1">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skill;
