import { useId, useState } from "react";
import heroImage from "../assets/hero_image.png";
import logo_white from "../assets/logo_white.svg";
import { ArrowUpRight } from 'lucide-react';

export const HeroSection = () => {
  const [story, setStory] = useState("");
  const storyFieldId = useId();

  return (
    <main className="relative w-full h-[1204px] bg-variable-collection-deep-green overflow-hidden">
      <img
        className="absolute top-[calc(50.00%_-_602px)] left-[calc(50.00%-760px)] w-[calc(100.00%+40px)] h-[1204px] aspect-[1.31] object-cover"
        alt="Privacy leaked stories background"
        src={heroImage}
      />
      <header className="flex w-[90vw] h-[97px] items-center justify-between p-[18.6px] absolute top-11 left-[calc(50.00%-696px)] bg-[#0000001a] rounded-[20px] overflow-hidden shadow-[0px_4.13px_33.48px_#0000001a,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_7.0px_rgba(0,0,0,0.20),inset_-1px_0_7.0px_rgba(0,0,0,0.16)] backdrop-blur-[11.9px] backdrop-brightness-[100.0%] backdrop-saturate-[80.0%] backdrop-hue-rotate-[-5.0deg] [-webkit-backdrop-filter:blur(11.9px)_brightness(100.0%)_saturate(80.0%)_hue-rotate(-5.0deg)]">
        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
          <img
            className="relative w-[80px] h-auto"
            alt="Youth Privacy Community logo"
            src={logo_white}
          />
          <p className="relative w-fit font-['Archivo-Black',Helvetica] font-normal text-variable-collection-white text-[26.9px] tracking-[0] leading-none">
            <span className="font-black">Youth Privacy</span>
            <span className="font-['Archivo-Regular',Helvetica]">
              {" "}
              <br />
            </span>
            <span className="font-['Archivo-Regular',Helvetica] text-[20.7px]">
              Community
            </span>
          </p>
        </div>
        <a
          href="#"
          className="inline-flex h-[60px] items-center justify-center gap-[5.36px] px-[30px] py-[17.14px] relative flex-[0_0_auto] bg-variable-collection-lemon-light border-1 border-white rounded-2xl"
          aria-label="Visit our website"
        >
          <span className="relative flex items-center justify-center w-fit font-['Archivo',Helvetica] font-semibold text-variable-collection-black text-[17.1px] text-center tracking-[0] whitespace-nowrap">
            Visit our website
          </span>
          <ArrowUpRight className="!relative !w-[25.71px] !h-[25.71px]" />
        </a>
      </header>
      <h1 className="absolute top-[206px] left-[calc(50.00%_-_536px)] w-[1071px] font-['Archivo', Helvetica] font-black text-variable-collection-white text-9xl text-center tracking-[0] leading-[102.4px]">
        Privacy Leaked Stories
      </h1>
      <section
        className="flex flex-col w-[707px] h-[389px] items-center gap-[25.62px] pt-[29.89px] pb-[12.81px] px-[12.81px] absolute top-[480px] left-[calc(50.00%_-_354px)] rounded-[38.42px] overflow-hidden shadow-[0px_3.42px_17.08px_#0000004c]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,213,18,1) 15%, rgba(48,254,112,1) 90%, rgba(73,215,153,1) 100%)",
        }}
        aria-labelledby={`${storyFieldId}-heading`}
      >
        <p
          id={`${storyFieldId}-heading`}
          className="relative w-[486.7px] h-[93.93px] mt-[-0.78px] font-['Archivo',Helvetica] font-normal text-variable-collection-black text-[27.3px] text-center tracking-[0] leading-[32.8px]"
        >
          <span className="font-['Archivo',Helvetica] font-black text-[#131313] text-[27.3px] tracking-[0] leading-[32.8px]">
            Anonymously{" "}
          </span>
          <span className="font-['Archivo',Helvetica] font-bold">
            share how your privacy has been leaked for others to learn. This is
            your safe space!
          </span>
        </p>
        <form
          className="flex items-center justify-center relative flex-1 self-stretch w-full grow"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor={storyFieldId} className="sr-only font-['Archivo', Helvetica] font-black">
            Share your story here
          </label>
          <textarea
            id={storyFieldId}
            value={story}
            onChange={(event) => setStory(event.target.value)}
            placeholder="Share your story here..."
            className="relative w-full h-full resize-none bg-white rounded-[25.62px] font-['Archivo', Helvetica] font-normal text-variable-collection-black text-[27.3px] text-center tracking-[0] leading-[32.8px] placeholder:font-bold placeholder:text-variable-collection-black placeholder:opacity-50 px-auto py-10"
            aria-describedby={`${storyFieldId}-heading`}
          />
        </form>
      </section>
      <button
        type="button"
        className="all-unset box-border flex w-[264px] h-[82px] items-center justify-center gap-[7.32px] px-[41px] py-[23.43px] absolute top-[931px] left-[41.75%] bg-variable-collection-orange-frenzy rounded-[21.87px] cursor-pointer"
        aria-label="Submit story"
      >
        <div className="relative flex items-center justify-center w-fit font-['Archivo-SemiBold',Helvetica] font-semibold text-variable-collection-black text-[23.4px] text-center tracking-[0] leading-[21.1px] whitespace-nowrap">
          Submit
        </div>
      </button>
      <a
        href="#"
        className="absolute top-[1066px] left-[calc(50.00%_-_151px)] font-['Host_Grotesk-Bold',Helvetica] font-bold text-variable-collection-white text-4xl text-center tracking-[0] leading-[43.2px] underline whitespace-nowrap"
      >
        Read other stories
      </a>
    </main>
  );
};

export default HeroSection;
