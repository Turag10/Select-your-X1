import PropTypes from "prop-types";

const PlayerCard = ({player}) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={`/src/assets/image/${player.image}`}
        alt={player.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{player.name}</h3>
      <p className="text-sm text-gray-500">{player.country}</p>
      <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md mt-2">
        {player.role}
      </span>
      <div className="mt-2 text-gray-700">
        <p>
          <strong>Rating:</strong> {player.rating}
        </p>
        <p>
          <strong>Style:</strong> {player.style}
        </p>
        <p>
          <strong>Price:</strong> ₹{player.price.toLocaleString()}
        </p>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Choose Player
      </button>
    </div>
    );
};

PlayerCard.propTypes = {
    player: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

export default PlayerCard;