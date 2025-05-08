
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ className }) => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const categories = [
    { name: 'All', icon: '🏠' },
    { name: 'Beachfront', icon: '🏖️' },
    { name: 'Cabins', icon: '🌲' },
    { name: 'Design', icon: '🎨' },
    { name: 'Luxe', icon: '✨' },
    { name: 'Trending', icon: '🔥' },
    { name: 'Amazing Views', icon: '🏞️' },
    { name: 'Countryside', icon: '🌄' },
    { name: 'Mansions', icon: '🏰' },
  ];
  
  return (
    <div className={cn("w-full overflow-x-auto scrollbar-none py-4", className)}>
      <div className="flex items-center gap-4 min-w-max px-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={cn(
              "flex flex-col items-center gap-2 px-4 py-2 rounded-lg transition-colors",
              activeCategory === category.name
                ? "bg-primary text-white"
                : "bg-secondary/50 text-white/70 hover:bg-secondary"
            )}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
