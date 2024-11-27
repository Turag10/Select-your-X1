import profile from "../assets/image/cricket.jpg"; // Ensure this path is correct

const Header = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Select Your XI</h1>
      <img src={profile} alt="Cricket Team" className="rounded-lg shadow-lg" />
    </div>
  );
};

export default Header;
