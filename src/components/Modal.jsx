import {
  FaGithub,
  FaExternalLinkAlt,
  FaBookOpen,
  FaFilePowerpoint,
  FaFilePdf,
  FaVideo,
} from "react-icons/fa";

function Modal({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-xl max-w-xl w-full overflow-y-auto max-h-[90vh] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={item.image}
          alt={`${item.title} cover`}
          className="w-full h-56 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3
            className={`text-3xl font-bold mb-2 ${
              item.type === "publication" ? "text-purple-400" : "text-blue-400"
            }`}
          >
            {item.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {item.type === "publication" ? item.year : item.duration}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            {item.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>

          {item.type === "publication" && item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-700 rounded hover:bg-purple-800 transition text-gray-100"
            >
              <FaBookOpen size={20} />
              <span>View Publication</span>
            </a>
          )}

          {item.type === "project" && (
            <div className="flex space-x-4">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt size={20} />
                  <span>Demo</span>
                </a>
              )}
              {item.ppt && (
                <a
                  href={item.ppt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                >
                  <FaFilePowerpoint size={20} />
                  <span>PPT</span>
                </a>
              )}
              {item.pdf && (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                >
                  <FaFilePdf size={20} />
                  <span>Pdf</span>
                </a>
              )}
              {item.video && (
                <a
                  href={item.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
                >
                  <FaVideo size={20} />
                  <span>Video</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
