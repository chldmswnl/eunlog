type CategorySection = {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
};

export default function CategorySection({
  categories,
  selectedCategory,
  onClick,
}: CategorySection) {
  return (
    <article className="mx-4 text-center">
      <h3 className="font-bold border-b-2 border-slate-800 mb-3">Category</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`font-semibold cursor-pointer hover:text-blue-300 ${
              category === selectedCategory
                ? "text-blue-500"
                : "text-neutral-800"
            }`}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </article>
  );
}
