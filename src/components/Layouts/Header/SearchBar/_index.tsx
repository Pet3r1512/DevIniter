import { Search } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState<string[]>([]);

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

    const filteredResults = sampleData.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <Dialog>
      <DialogTrigger data-testid="search-trigger">
        <div className="flex items-center py-2 px-4 rounded-2xl shadow-2xl lg:dark:bg-gray-dark lg:bg-gray-light lg:dark:text-gray-light text-gray lg:w-48">
          <Search size={20} className="lg:mr-2" />
          <span className="hidden lg:block">Search</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="bg-white dark:bg-black-main p-6 rounded-lg shadow-2xl transition-transform transform scale-100 sm:scale-110">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
