import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

const searchCategories = [
  'Business Loans',
  'Credit Cards',
  'HR Software',
  'Accounting Software',
  'CRM Software',
  'Project Management Tools',
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = searchCategories.filter(category =>
        category.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <div className="flex">
        <Input
          type="text"
          placeholder="Search for business services..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-64 mr-2"
        />
        <Button type="submit">
          <SearchIcon className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-64 bg-background border border-input rounded-md mt-1 max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-accent hover:text-accent-foreground cursor-pointer"
              onClick={() => {
                setSearchTerm(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}