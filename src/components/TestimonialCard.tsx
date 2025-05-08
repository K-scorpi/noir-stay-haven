
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  location,
  rating,
  text,
  className
}) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 h-full animate-fade-in hover-scale", 
      className
    )}>
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border border-white/10" 
        />
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-white/60">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "fill-primary text-primary" : "text-white/20"} 
          />
        ))}
      </div>
      
      <p className="text-white/80 italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
