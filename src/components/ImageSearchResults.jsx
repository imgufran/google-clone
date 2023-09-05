import Link from "next/link";

export default function ImageSearchResult({ results }) {
  return (
    <div className="pb-24 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4 px-3">
        {results.items?.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              {/* Image */}
              <Link href={result.image.contextLink}>
                <img className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow" src={result.link} alt={result.title} />
              </Link>

              <Link className="group-hover:underline truncate text-xl" href={result.image.contextLink}>
                <h2>{result.title}</h2>
              </Link>

              <Link href={result.image.contextLink}>
                <p className="group-hover:underline text-gray-600">{result.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
