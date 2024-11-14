import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Category } from './activities-data';

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFiltersProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={cn(
            "group relative h-48 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl",
            selectedCategory === category.id && "ring-2 ring-primary"
          )}
          onClick={() => onCategorySelect(selectedCategory === category.id ? null : category.id)}
        >
          <img
            src={category.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white uppercase tracking-wide">
              {category.name}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}