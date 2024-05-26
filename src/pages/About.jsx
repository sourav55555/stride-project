const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-14">
        <img
          src="/aboutus.jpeg"
          className="max-w-sm rounded-lg shadow-2xl w-2/5"
          alt="about us image"
        />
        <div className="w-3/5">
          <h1 className="text-4xl font-bold">Our Journey</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn shadow-md bg-slate-600 text-white hover:text-black px-10">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
