import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import my_pic from "../images/Jeff.jpg";


export default function About() {

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/JeffCantores",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jefferson-cantores/",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: "mailto:jeffersoncantores13@gmail.com",
      icon: SiGmail,
    }
  ];

  const profileSubheaders = [
    "Musician 🎸🥁🎵", 2000,
    "Computer Science Graduate 🎓", 2000,
    "QA Specialist 🕵️", 2000,
    "Test Automation Engineer 👨‍💻", 3000,
  ]

  const descriptionParagraphs = [
    `Hello! My name is Jeff, and I am a Senior Test Automation Engineer with a deep specialization in the Fintech and Banking domains. 
    I have a proven track record of automating mission-critical Web, Mobile (Android & iOS), and API layers for large-scale retail banking systems.`,

    `My expertise lies in designing and implementing robust test automation frameworks, leveraging tools such as Selenium, Appium, and RestAssured.`
  ]

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="animate-fade-in-right sm:animate-fade-in-bottom lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={my_pic}
          />
        </div>
        <div className="animate-fade-in-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 flex flex-col md:items-start md:text-left mt-10 md:mt-0 items-center text-center">
          <h1 className="font-mono sm:text-4xl text-3xl mb-4 font-medium text-slate-200">
            Jefferson Cantores
          </h1>
          <h2 className="font-mono sm:text-3xl text-3xl mb-4 font-semibold text-sky-300">
            <TypeAnimation
              sequence={profileSubheaders}
              repeat={Infinity}
            />
          </h2>

          {descriptionParagraphs.map((text, index) => (
            <p key={index} className="leading-relaxed mb-4">
              {text}
            </p>
          ))}
          {/* <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div> */}
          <div className="flex items-center mt-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="p-2 text-slate-400 hover:text-sky-300 hover:bg-slate-800/60 rounded-lg transition-colors duration-200"
                >
                  <Icon className="sm:w-6 sm:h-6 w-8 h-8" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}