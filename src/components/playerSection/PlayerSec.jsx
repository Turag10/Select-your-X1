// import PlayerCard from "../PlayerCard";




import PropTypes from "prop-types";
import PlayerCard from "../PlayerCard";

const PlayerSec = ({ players, onChoosePlayer, selectedPlayers, setView }) => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Players</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onChoosePlayer={onChoosePlayer}
              isSelected={selectedPlayers.some((p) => p.id === player.id)}
            />
          ))}
        </div>
        <button
          onClick={() => setView("selected")}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          View Selected Players
        </button>
      </div>
    </section>
  );
};

// Corrected PropTypes
PlayerSec.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired, // Array of player objects
  selectedPlayers: PropTypes.arrayOf(PropTypes.object).isRequired, // Array of selected player objects
  onChoosePlayer: PropTypes.func.isRequired, // Function to handle choosing a player
  setView: PropTypes.func.isRequired, // Function to switch between views
};

export default PlayerSec;


//const PlayerSection = ({ players, onChoosePlayer, selectedPlayers, setView }) => {
//   return (
//     <section className="p-8 bg-gray-100">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Players</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {players.map((player) => (
//             <PlayerCard
//               key={player.id}
//               player={player}
//               onChoosePlayer={onChoosePlayer}
//               isSelected={selectedPlayers.some((p) => p.id === player.id)}
//             />
//           ))}
//         </div>
//         <button
//           onClick={() => setView("selected")}
//           className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
//         >
//           View Selected Players
//         </button>
//       </div>
//     </section>
//   );
// };

// PlayerSection.propTypes = {
//   players: PropTypes.array.isRequired,
//   onChoosePlayer: PropTypes.func.isRequired,
//   selectedPlayers: PropTypes.array.isRequired,
//   setView: PropTypes.func.isRequired,
// };
