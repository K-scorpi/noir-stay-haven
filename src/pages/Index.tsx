
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import TestimonialCard from '@/components/TestimonialCard';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Modern Luxury Villa with Sea View",
    location: "Santorini, Greece",
    price: 379,
    rating: 4.98
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1eHVyeSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Downtown Penthouse with Skyline View",
    location: "New York, United States",
    price: 425,
    rating: 4.85
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwYXBhcnRtZW50fGVufDB8fDB8fHww",
    title: "Luxury Alpine Chalet",
    location: "Courchevel, France",
    price: 560,
    rating: 4.99
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGx1eHVyeSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Beachfront Villa with Private Pool",
    location: "Bali, Indonesia",
    price: 290,
    rating: 4.94
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGx1eHVyeSUyMHZpbGxhfGVufDB8fDB8fHww",
    title: "Designer Apartment in Historic Center",
    location: "Paris, France",
    price: 310,
    rating: 4.92
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    title: "Scandinavian Loft with Sauna",
    location: "Stockholm, Sweden",
    price: 245,
    rating: 4.88
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
    title: "Luxury Suite with Private Terrace",
    location: "Barcelona, Spain",
    price: 280,
    rating: 4.95
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Secluded Forest Cottage",
    location: "Aspen, United States",
    price: 320,
    rating: 4.97
  },
];

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    name: "Alex Johnson",
    location: "London, UK",
    rating: 5,
    text: "Our stay at the Santorini villa was absolutely incredible! The views were breathtaking and the amenities were top-notch. Will definitely book through StayHaven again!"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Sarah Miller",
    location: "Toronto, Canada",
    rating: 4,
    text: "The booking process was smooth and the apartment exceeded our expectations. The host was very responsive and provided great local recommendations."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww",
    name: "Michael Chen",
    location: "Sydney, Australia",
    rating: 5,
    text: "We had an amazing family vacation at the Bali villa. The private pool was perfect for the kids and the staff was incredibly helpful. Would highly recommend!"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D)' }}
      >
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Discover and book unique accommodations around the world
          </p>
          
          <SearchBar />
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="container mx-auto px-4 mt-16">
        <CategoryFilter />
      </section>
      
      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Properties</h2>
          <Button variant="ghost" className="text-white flex items-center gap-2 hover:bg-white/5">
            View All <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              {...property}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bHV4dXJ5fGVufDB8fDB8fHww)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-6 text-gradient">
              Share Your Space, Earn Extra Income
            </h2>
            <p className="text-white/80 mb-8">
              Join thousands of hosts who are earning by sharing their homes, apartments, and unique spaces with travelers from around the world.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Become a Host
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">What Our Guests Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-white/70 mb-8">
            Subscribe to our newsletter for exclusive offers, travel inspiration, and new property listings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 px-4 rounded-lg bg-secondary border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="h-12 bg-primary hover:bg-primary/90 sm:px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
