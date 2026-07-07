import dotPattern from "../assets/dot_pattern.svg";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="flex flex-col h-[719px] items-start justify-end gap-2.5 px-[120px] py-[100px] relative bg-variable-collection-black overflow-hidden">
      <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center gap-1 relative flex-[0_0_auto]">
            <img
              className="relative w-[100px] h-auto"
              alt="Youth Privacy Community logo"
              src={logo}
            />
            <p className="relative w-fit font-['Archivo', Helvetica] font-normal text-variable-collection-white text-[26.2px] text-center tracking-[0] leading-none -mt-2">
              <span className="font-black">
                Youth Privacy
                <br />
              </span>
              <span className="font-['Archivo', Helvetica] font-normal text-[20.1px]">
                Community
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-[804.47px] -mt-[1.00px] font-['Host Grotesk', Helvetica] font-normal text-variable-collection-white opacity-60 text-lg text-center tracking-[0] leading-[normal]">
              YPC is where digital sovereignty meets youth culture. We are
              empowering 10 million young people to take absolute control of
              their data and embrace privacy as a lifestyle.
            </p>
            <div className="inline-flex items-center gap-4 relative">
                <a href="https://twitter.com/youthprivacyhq" target="_blank" className="inline-flex items-center justify-center gap-2 p-4 relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-variable-collection-white-stroke">
                    <img
                    className="relative w-6 h-6"
                    alt="Twitter Icon"
                    src={twitter} />
                </a>
                <a href="https://facebook.com/youthprivacyhq" target="_blank" className="inline-flex items-start gap-2 p-4 relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-variable-collection-white-stroke">
                    <img
                    className="relative w-6 h-6 aspect-[1]"
                    alt="Facebook Icon"
                    src={facebook}
                    />
                </a>
                <a href="https://instagram.com/youthprivacyhq" target="_blank" className="inline-flex items-start gap-2 p-4 relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-variable-collection-white-stroke">
                    <img
                    className="relative w-6 h-6"
                    alt="Instagram Icon"
                    src={instagram}
                    />
                </a>
                <a href="https://linkedin.com/in/youthprivacyhq" target="_blank" className="inline-flex items-start gap-2 p-4 relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-variable-collection-white-stroke">
                    <img
                    className="relative w-6 h-6 aspect-[1]"
                    alt="Linkedin Icon"
                    src={linkedin}
                    />
                </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit opacity-80 font-['Host Grotesk', Helvetica] font-normal text-variable-collection-white text-lg tracking-[0] leading-[normal]">
            © YPC® 2026. All Rights Reserved.
          </p>
          <a
            href="#top"
            className="flex w-[141px] items-center justify-between relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-variable-collection-white-stroke rounded-3xl"
            aria-label="Back to top"
          >
            <span className="relative w-fit font-['Host Grotesk', Helvetica] font-normal text-variable-collection-white text-lg tracking-[0] leading-[normal]">
              Back to top
            </span>
            <span className="inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-3xl overflow-hidden border border-solid border-variable-collection-white-stroke">
              <ArrowUp
                className="relative w-4 h-4 text-white"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
      <img
        className="absolute top-[-93px] left-0 w-[1726px] h-[261px]"
        alt=""
        aria-hidden="true"
        src={dotPattern}
      />
    </footer>
  );
};

export default Footer;