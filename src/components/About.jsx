import { Element } from "react-scroll";
import profile from "../assets/profile-img.jpg";
import { saveAs } from "file-saver";
import file from "../assets/cv.pdf";
import { BsDownload } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Element
      name="about"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-x-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              About
            </p>
          </div>
        </div>
        <div className="max-x[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            className="flex justify-center items-center"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="linear"
          >
            <img
              src={profile}
              alt="rohan"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "15rem", height: "15rem" }}
            />
          </div>
          {/* text */}
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              Hello, I am a computer science graduate from India.
            </p>
            <p className="text-sm leading-7">
              As a MERN stack developer, I sculpt the digital future, passionate
              about creating beautiful user experiences. In the world of bits
              and bytes, I dance to the MERNing rhythm. Code composer, bug
              buster, and pixel perfectionist.
            </p>
            {/* resume button */}
            <div className="mt-4">
              <button
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA]"
                onClick={() => saveAs(file, "rohan-sharma-resume.pdf")}
              >
                Download resume
                <span className="group-hover:translate-y-1 duration-300">
                  <BsDownload className="ml-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
