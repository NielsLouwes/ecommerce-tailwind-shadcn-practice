export default function Header() {
  const categories = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <main>
      <div className="flex gap-20 h-20 border-solid border-black bg-black">
        <h2 className="text-2xl font-bold">Sneakers</h2>
        <div className="flex gap-6 text-gray-500">
          {categories.map((category) => (
            <p key={category}>{category}</p>
          ))}
        </div>
      </div>
    </main>
  );
}