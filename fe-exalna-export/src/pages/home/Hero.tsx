const Hero = () => {
  return (
    <section className="h-[100vh] w-full flex justify-center bg-[url('@img/Hero-Home.png')] bg-center bg-no-repeat bg-cover">
      <div className="containers flex justify-start items-center z-10">
        <span
          content=""
          className="w-[200px] left-0 bottom-0 absolute -z-30 h-[200px] bg-blue-600 blur-[50rem] rounded-full"
        ></span>
        <div className="flex flex-col">
          <h2 className="text-6xl font-bold drop-shadow-2xl">
            The First Step to Export <br />{" "}
            <span className="text-blue-600">Global Success Awaits!</span>
          </h2>
          <p className="font-semibold w-[600px]">
            <span className="font-bold italic text-black">
              Every great journey begins with a first step.
            </span>{" "}
            Take your first step now and watch your products break into the
            global market, unlocking limitless opportunities.
          </p>
          <div className="flex gap-1">
            <button className="flex gap-2 items-center self-start bg-blue-600 px-4 py-2 rounded-xl text-white font-bold mt-2 cursor-pointer hover:shadow-2xl animated hover:shadow-blue-600 active:scale-95">
              <i className="ri-phone-line"></i>
              <span>Contact Us</span>
            </button>
            <button className="flex gap-2 items-center self-start bg-white text-blue-600 px-4 py-2 rounded-xl font-bold mt-2 cursor-pointer hover:shadow-2xl animated hover:shadow-blue-600 active:scale-95">
              <i className="ri-bard-line"></i>
              <span>Ask AI</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
