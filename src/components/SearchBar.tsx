
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Search, Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const SearchBar: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  return (
    <div className="glass-card p-5 rounded-2xl w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-5 relative">
          <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
          <Input 
            placeholder="Where do you want to go?"
            className="pl-10 bg-secondary border-white/5 text-white placeholder:text-white/40 focus-visible:ring-accent h-12"
          />
        </div>
        
        <div className="md:col-span-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full h-12 justify-start text-left font-normal bg-secondary border-white/5 text-white hover:bg-secondary/80"
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-white/60" />
                {date ? (
                  date.toLocaleDateString()
                ) : (
                  <span className="text-white/40">Select dates</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-secondary border-white/10">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="bg-secondary text-white"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="md:col-span-3">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
