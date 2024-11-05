import shadow from '../../assets/image/bg-shadow.png'
const SubscribeSection = () => {
  return (
    <div
      className="absolute w-full h-80 top-2/4 left-0 right-0 flex flex-col items-center justify-center space-y-3 rounded-lg outline outline-offset-[8px] outline-2 outline-white text-center border p-2 sm:p-6"
      style={{        
        backgroundImage: `url(${shadow})`,
        backgroundSize: "100% 100%",
        backgroundColor: "#fff",
      }}
    >
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
        Subscribe to our Newsletter
      </h1>
      <p className="text-slate-500">
        Get the latest updates and news right in your inbox!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center max-sm:space-y-3 sm:space-x-3">
        <input
          className="border px-3 py-1 rounded-lg w-full"
          type="text"
          placeholder="Enter your email"
        />
        <button className="bg-gradient-to-r from-purple-300 to-yellow-300 px-3 py-1 rounded-lg font-bold w-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
