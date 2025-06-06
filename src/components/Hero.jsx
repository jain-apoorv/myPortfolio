function Hero() {
  return (
    <section className="text-center mt-32 mb-16 px-4">
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Hi, I'm <span className="font-bold text-blue-400">Apoorv Jain</span>, a
        final-year student at ABV-IIITM Gwalior, graduating in 2026.
        <br />I love{" "}
        <span className="font-bold text-indigo-400">problem-solving</span>,
        building apps with the{" "}
        <span className="font-bold text-green-400">MERN stack</span>, applying{" "}
        <span className="font-bold text-purple-400">machine learning</span>{" "}
        techniques to create smart solutions.
      </p>

      <a
        href="https://drive.google.com/file/d/1qhEUFfQzxkDBKCSfiYTEmSwKIjkWc3Iu/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-6 inline-block px-8 py-4
          bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
          text-white font-semibold rounded-full
          shadow-lg
          hover:from-purple-700 hover:via-indigo-600 hover:to-blue-500
          hover:scale-105
          transition
          duration-300
          ease-in-out
          transform
          cursor-pointer
          select-none
        "
      >
        View Resume
      </a>
    </section>
  );
}

export default Hero;
