import SearchHeader from "@/components/SearchHeader";

export default function SearchLayout({ children }) {
  return (
    <div>
      {/* Header Specfic for the results page */}
      <SearchHeader />
      {children}
    </div>
  );
}
