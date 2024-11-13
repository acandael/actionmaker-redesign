import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Team Building Activity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Een breed gamma van
          <br />
          unieke teambuildings
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Versterk je team met een leuke dag zonder zorgen
        </p>
        <Button 
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white group"
        >
          Vind je ideale teambuilding
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-white/30">
          <div className="w-full h-1/2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}