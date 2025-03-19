import { Search, ShoppingCart, User } from "lucide-react";

export const Header = () => (
  <header className="bg-black text-white p-4">
    <div className="flex items-center justify-between">
      <img src="/logo.png" alt="Nom nom" className="h-8" />
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search dishes..."
            className="px-4 py-2 rounded-full bg-gray-800"
          />
          <Search
            className="absolute right-3 top-2.5 text-gray-400"
            size={18}
          />
        </div>
        <ShoppingCart size={24} />
        <User size={24} />
      </div>
    </div>
  </header>
);
