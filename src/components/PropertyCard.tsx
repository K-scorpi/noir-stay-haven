
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  image, 
  title, 
  location, 
  price, 
  rating,
  className
}) => {
  return (
    <div className={cn(
      "animate-fade-in glass-card rounded-xl overflow-hidden hover-scale", 
      className
    )}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-white line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-primary text-primary" />
            <span className="text-sm text-white">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-white/60 mb-3">{location}</p>
        <p className="text-lg font-medium">
          <span className="text-white">${price}</span>
          <span className="text-white/60 text-sm"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
