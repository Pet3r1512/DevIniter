import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import SearchModal from "./SearchModal";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex items-center justify-center lg:p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center py-2 px-4 rounded-2xl shadow-2xl dark:bg-gray-dark bg-gray-light dark:text-gray-light text-gray"
        >
          <Search size={20} className="lg:mr-2" />
          <span className="hidden lg:block">Search</span>
          <p className="ml-4 px-2 py-1 rounded-lg hidden lg:block">Ctrl K</p>
        </button>
      </div>
      <SearchModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
}
