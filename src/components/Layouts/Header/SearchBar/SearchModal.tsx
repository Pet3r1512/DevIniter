import { useState } from "react";

export default function SearchModal({
  isOpen,
  setIsOpen,
  searchTerm,
  setSearchTerm,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [searchResults, setSearchResults] = useState<string[]>([]); // Example search results

  // Sample data for demonstration
  const sampleData = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    // Filter results based on input
    const filteredResults = sampleData.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal only if the overlay (background) is clicked, not the modal itself
    if (e.currentTarget === e.target) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    return (
      <div
        onClick={handleOverlayClick}
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="bg-white dark:bg-black-main p-6 rounded-lg shadow-2xl transition-transform transform scale-100 sm:scale-110 lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Search</h2>
          <input
            type="text"
            placeholder="Search docs"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary dark:black-main dark:text-black transition"
          />

          <div className="mt-4">
            {searchResults.length > 0 ? (
              <ul className="bg-gray-100 dark:bg-gray-700 rounded-md shadow-md max-h-60 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 p-4">
                No results found.
              </div>
            )}
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
