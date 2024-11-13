import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { NavLinks } from './NavLinks';
import { NavLogo } from './NavLogo';
import { LanguageToggle } from './LanguageToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-sm py-0 shadow-lg" : "bg-transparent py-2"
      )}
      role="banner"
    >
      <nav 
        className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <NavLogo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10"
                aria-label={isOpen ? "Sluit menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-black/95 backdrop-blur-md border-neutral-800"
            >
              <div className="flex flex-col space-y-6 mt-8">
                <NavLinks mobile onNavigate={() => setIsOpen(false)} />
                <LanguageToggle mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}