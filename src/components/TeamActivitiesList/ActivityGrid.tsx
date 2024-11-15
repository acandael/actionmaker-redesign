import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { Activity } from './activities-data';

interface ActivityGridProps {
  activities: Activity[];
}

export function ActivityGrid({ activities }: ActivityGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {activities.map((activity) => (
        <Card key={activity.id} className="group overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3]">
              <img
                src={activity.image}
                alt={activity.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {activity.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}