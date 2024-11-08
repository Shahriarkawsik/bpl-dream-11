const Subscribe = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-semibold text-xl text-white leading-6">Subscribe</h1>
      {/* <p className="max-w-72 text-xs text-slate-200">
        Subscribe to our newsletter for the latest updates.
      </p> */}
      <p className="text-color3.7 leading-6 max-sm:text-justify sm:w-full lg:w-11/12">
      Subscribe to our newsletter for the latest updates.
      </p>
      <div className="flex">
        <input
          className="py-1 px-3 rounded-l-lg"
          type="text"
          placeholder="Enter your email"
        />
        <button className="py-1 px-3 rounded-r-lg bg-gradient-to-r from-purple-300 to-yellow-300 text-black font-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
