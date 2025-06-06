import Card from "./Card";

function Section({
  title,
  description,
  items,
  setSelectedItem,
  isPublication = false,
  id,
}) {
  return (
    <section className="mb-16 text-center scroll-mt-24" id={id}>
      <h2
        className={`text-5xl font-extrabold tracking-tight mb-4 ${
          isPublication ? "text-purple-400" : "text-blue-400"
        }`}
      >
        {title}
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <Card
            key={idx}
            item={item}
            onClick={() => setSelectedItem(item)}
            isPublication={isPublication}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;
