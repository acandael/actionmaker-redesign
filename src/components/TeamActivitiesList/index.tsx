import React, { useState } from 'react';
import { CategoryFilters } from './CategoryFilters';
import { ActivityGrid } from './ActivityGrid';
import { categories, activities } from './activities-data';

export function TeamActivitiesList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredActivities = selectedCategory
    ? activities.filter(activity => activity.category === selectedCategory)
    : activities;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Vind je teambuilding in ons breed gamma
        </h1>
      </div>

      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <ActivityGrid activities={filteredActivities} />
    </div>
  );
}