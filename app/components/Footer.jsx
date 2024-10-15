import {
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  // Social media data with specific hover colors
  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/Vaibhav-2-2",
      hoverColor:
        "h-8 w-8 text-gray-400 hover:text-white transition duration-300 transform hover:scale-110", // GitHub hover color (dark gray)
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/vaibhav-khadse-875270254/",
      hoverColor:
        "h-8 w-8 hover:text-[#0A66C2] transition duration-300 transform hover:scale-110", // LinkedIn hover color (blue)
    },
    {
      id: 3,
      icon: <FaTwitter />,
      link: "https://twitter.com/yourprofile",
      hoverColor:
        "h-8 w-8 hover:text-[#1DA1F2] transition duration-300 transform hover:scale-110", // Twitter hover color (light blue)
    },
  ];

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="flex flex-col items-center relative z-10">
        <h1 className="text-center text-3xl md:text-5xl font-bold lg:max-w-[45vw] lg:leading-tight">
          Ready to take <span className="text-purple-500">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* Custom styled button */}
        <a href="mailto:vaibhavkh22@gmail.com">
          <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 font-bold hover:from-purple-500 hover:to-red-700 transition-all duration-300 ease-in-out drop-shadow-lg text-white py-3 px-6 rounded-full flex items-center gap-2">
            Let&apos;s get in touch <FaLocationArrow />
          </button>
        </a>
      </div>

      {/* Adjusted margin-left and margin-right */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 mx-4 md:mx-20 relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Vaibhav Khadse
        </p>

        {/* Social icons with hover effects */}
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0 ml-auto md:ml-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 cursor-pointer flex justify-center items-center bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 ${info.hoverColor}`}
            >
              {info.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
