const Accordion = () => {
  return (
    <div className="pt-24 mb-14 px-8 w-4/5 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl underline">
        Frequently Asked Questions!
      </h1>
      <div className="flex items-center gap-16 justify-between">
        <div>
          <img className="h-[350px] w-[420px]" src="/public/qna.png" alt="" />
        </div>
        <div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium bg-slate-600 text-white">
              What is the most trending thing?
            </div>
            <div className="collapse-content">
              <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nesciunt quas iusto ullam ducimus incidunt odit fugiat impedit, dicta dolorum.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium bg-slate-600 text-white">
              Best way to get discounts?
            </div>
            <div className="collapse-content">
              <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, a praesentium. Saepe quidem quibusdam autem?</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium bg-slate-600 text-white">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="mt-3">hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium bg-slate-600 text-white">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="mt-3">hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
