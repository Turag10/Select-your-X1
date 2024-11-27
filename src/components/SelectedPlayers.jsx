
import PropTypes from "prop-types";


const SelectedPlayers = ({ selectedPlayers, setView }) => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Selected Players ({selectedPlayers.length}/6)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {selectedPlayers.map((player) => (
            <div key={player.id} className="border rounded-lg shadow-md p-4 bg-white">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{player.name}</h3>
              <p className="text-sm text-gray-500">{player.country}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setView("players")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add More Players
        </button>
      </div>
    </section>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  setView: PropTypes.func.isRequired,
};

export default SelectedPlayers;
