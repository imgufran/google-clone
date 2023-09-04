export default async function WebpageSearchPage({searchParams}) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.search}`
  );

  const data = await res.json();
  const results = data.items;

  return <>
    {results && results.map((result) => <h1>{result.title}</h1>)}
  </>;
}
