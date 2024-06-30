const Header = ({ img, text, subText }) => {
  return (
    <div className="relative w-full">
    <img className="w-full" src={img} alt="Background" />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
      <h1 className="text-white text-2xl md:text-8xl font-bold">{text}</h1>
      <p className="text-center text-white mt-4">
       {subText}
      </p>
    </div>
  </div>
  );
};

export default Header;
