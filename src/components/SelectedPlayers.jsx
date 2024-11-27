
const SelectedPlayers = ({ selectedPlayers, setView }) => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Selected Players ({selectedPlayers.length}/6)
        </h2>
        <ul className="space-y-4">
          {selectedPlayers.map((player) => (
            <li
              key={player.id}
              className="border p-4 bg-white rounded-md shadow-md"
            >
              <h3 className="text-lg font-bold">{player.name}</h3>
              <p className="text-sm text-gray-500">{player.country}</p>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                {player.role}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setView("players")}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Back to Player Selection
        </button>
      </div>
    </section>
  );
};

export default SelectedPlayers;
