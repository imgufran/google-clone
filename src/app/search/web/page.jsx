export default async function WebpageSearchPage({ searchParams }) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.search}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="ml-10">
        <p className="my-3">
          Your search -{" "}
          <span className="font-semibold">{searchParams.search}</span> - did not
          match any documents.
        </p>
        <p className="my-3">Suggestions:</p>
        <ul className="my-3 list-disc">
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </div>
    );
  }

  return <>{results && results.map((result) => <h1>{result.title}</h1>)}</>;
}
