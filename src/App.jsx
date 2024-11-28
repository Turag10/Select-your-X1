import { useState } from "react";
import PlayerSec from "./components/playerSection/PlayerSec";
import SelectedPlayers from "./components/SelectedPlayers";
import playerData from "./team.json"; // Import the JSON file with player data

const Navbar = ({ money }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="/src/assets/image/logo.png"
              alt="Logo"
              className="h-12 rounded-full"
            />
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-10">
            <a href="#home" className="text-gray-800 hover:text-blue-600 font-medium text-lg">
              Home
            </a>
            <a href="#fixture" className="text-gray-800 hover:text-blue-600 font-medium text-lg">
              Fixture
            </a>
            <a href="#teams" className="text-gray-800 hover:text-blue-600 font-medium text-lg">
              Teams
            </a>
            <a href="#schedules" className="text-gray-800 hover:text-blue-600 font-medium text-lg">
              Schedules
            </a>
          </div>
          <div className="flex-shrink-0">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-md">
              <span className="text-gray-800 font-medium text-lg">{money} Coin</span>
              <img src="/src/assets/image/coin 2.jpg" alt="Coin Icon" className="h-5 w-5 ml-2 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = ({ setMoney }) => {
  const handleClaimCredit = () => {
    const freeCredit = 5000; // Define the amount of free credit
    setMoney((prevMoney) => prevMoney + freeCredit); // Update the money state
    alert(`You have claimed ${freeCredit} coins!`);
  };

  return (
    <div className="bg-[url('src/assets/image/bg-shadow.png')] bg-slate-800 bg-cover text-center py-16 px-16 text-white rounded-lg">
      <img
        src="/src/assets/image/banner-main.png"
        alt="Cricket Banner"
        className="mx-auto mb-8 rounded-lg shadow-lg"
      />
      <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream XI Cricket Team</h1>
      <p className="mt-4 text-lg text-gray-300">Beyond Boundaries, Beyond Limits</p>
      <button
        className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        onClick={handleClaimCredit}
      >
        Claim Free Credit
      </button>
    </div>
  );
};

const App = () => {
  const [money, setMoney] = useState(0); // Initial money
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [view, setView] = useState("players"); // Manage views: "players" or "selected"

  const handleChoosePlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      alert("You can only select up to 6 players.");
      return;
    }

    if (money < player.price) {
      alert("Insufficient funds to select this player.");
      return;
    }

    if (selectedPlayers.some((p) => p.id === player.id)) {
      alert("Player is already selected!");
      return;
    }

    setMoney((prev) => prev - player.price);
    setSelectedPlayers((prev) => [...prev, player]);
  };

  const handleRemovePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find((p) => p.id === playerId);
    setMoney((prev) => prev + playerToRemove.price);
    setSelectedPlayers((prev) => prev.filter((player) => player.id !== playerId));
  };

  return (
    <>
      <Navbar money={money} />
      <HeroSection setMoney={setMoney} />
      <div className="flex justify-end mt-4 px-4">
  <button
    className={`px-6 py-2 text-lg font-semibold ${
      view === "players"
        ? "bg-yellow-500 text-white"
        : "bg-gray-100 text-gray-800"
    } border-b-4 ${
      view === "players" ? "border-yellow-600" : "border-gray-300"
    } rounded-t-md`}
    onClick={() => setView("players")}
  >
    Available
  </button>
  <button
    className={`ml-4 px-6 py-2 text-lg font-semibold ${
      view === "selected"
        ? "bg-yellow-500 text-white"
        : "bg-gray-100 text-gray-800"
    } border-b-4 ${
      view === "selected" ? "border-yellow-600" : "border-gray-300"
    } rounded-t-md`}
    onClick={() => setView("selected")}
  >
    Selected ({selectedPlayers.length})
  </button>
</div>



      {view === "players" ? (
        <PlayerSec
          players={playerData}
          onChoosePlayer={handleChoosePlayer}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          onRemovePlayer={handleRemovePlayer}
        />
      )}
    </>
  );
};

export default App;
