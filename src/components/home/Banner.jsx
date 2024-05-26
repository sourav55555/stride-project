const Banner = () => {
  return (
    <div
      className="hero h-[700px] bgBanner"
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-5xl font-semibold">Welcome to our store with some best <span className="text-blue-400">Collections</span></h1>
          <p className="mb-5 w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa voluptatum dolore doloribus adipisci earum fuga repudiandae sed velit officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, harum!
          </p>
          <button className="btn bg-slate-800 text-white hover:text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
