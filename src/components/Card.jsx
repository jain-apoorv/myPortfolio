function Card({ item, onClick, isPublication = false }) {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-tr from-blue-700 via-indigo-800 to-purple-900 rounded-xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Open details for ${
        isPublication ? "publication" : "project"
      } ${item.title}`}
    >
      <img
        src={item.image}
        alt={`${item.title} cover`}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
        {/* <p className="text-sm text-gray-300 mb-2">
          {isPublication ? item.year : item.duration}
        </p> */}
        <p className="text-gray-200">{item.summary}</p>
      </div>
    </div>
  );
}

export default Card;
