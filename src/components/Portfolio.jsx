import { Element } from "react-scroll";
import { portfolio } from "../assets/StaticData";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <Element
      name="portfolio"
      className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
            Portfolio
          </h1>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-7">
          {portfolio.map((work) => (
            <a
              href={work.workUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-200 rounded-lg overflow-hidden"
              key={work.title}
              data-aos="fade-up"
              data-aos-duration={work.duration}
              data-aos-easing="linear"
            >
              <img
                src={work.imgUrl}
                alt="work"
                className="w-full"
                style={{ height: "20rem" }}
              />
              <div className="w-full p-5 text-black">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {work.title}
                </h3>
                {/* Technologies */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                  {work.tech.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2 py-1 bg-slate-300 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA]"
            href="https://github.com/RohanVashisht003?tab=repositories"
            rel="nofollow"
          >
            Checkout To Github
            <span className="group-hover:translate-y-1 duration-300">
              <FaGithub className="ml-4" />
            </span>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
