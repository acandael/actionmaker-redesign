export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const categories: Category[] = [
  {
    id: 'actief',
    name: 'Actief',
    image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'indoor',
    name: 'Indoor',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'workshop',
    name: 'Workshop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cultureel',
    name: 'Cultureel',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'culinair',
    name: 'Culinair',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
  },
];

export const activities: Activity[] = [
  {
    id: 'scherminitiatie',
    title: 'Scherminitiatie',
    description: 'De initiatie schermen laat u kennis maken met deze "ridderlijke" sport die toch voor de meeste mensen nog vrij onbekend is.',
    image: 'https://images.unsplash.com/photo-1523832080381-5f16f0dd0360?auto=format&fit=crop&q=80&w=800',
    category: 'actief',
  },
  {
    id: 'boogschieten',
    title: 'Boogschieten',
    description: 'Het duel zal uitgevochten worden met de recurve boog. Eerst schieten de deelnemers een aantal oefenpijlen.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800',
    category: 'outdoor',
  },
  {
    id: 'laserkleischieten',
    title: 'Laserkleischieten',
    description: 'Laserkleischieten is sensationeel en veilig. Voor kinderen in de richting van "Starfox".',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80&w=800',
    category: 'actief',
  },
  {
    id: 'sumoworstelen',
    title: 'Sumoworstelen',
    description: 'Sumoworstelen is dansen en trekken in een dik opgespannen vinyl pak. Met 2 personen bestrijdt u de mat en staat u met de bekende Japanse sport.',
    image: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?auto=format&fit=crop&q=80&w=800',
    category: 'actief',
  },
  {
    id: 'blaaspijpschieten',
    title: 'Blaaspijpschieten',
    description: 'Blaaspijpschieten is een spannende en intrigerende activiteit voor alle leeftijden. Leer de geschiedenis van het blaaspijpschieten kennen.',
    image: 'https://images.unsplash.com/photo-1515474594679-6a12d48b0805?auto=format&fit=crop&q=80&w=800',
    category: 'outdoor',
  },
  {
    id: 'pistoolkruisboogschieten',
    title: 'Pistoolkruisboogschieten',
    description: 'Na een uitleg door een ervaren schutter beginnen we met een initiatie pistoolkruisboogschieten.',
    image: 'https://images.unsplash.com/photo-1584226761916-f5de1e0d8138?auto=format&fit=crop&q=80&w=800',
    category: 'indoor',
  },
  {
    id: 'pistoolschieten',
    title: 'Pistoolschieten',
    description: 'Wie heeft een vaste hand om met luchtdruk pistoolschieten doel de roos te treffen. Wij schieten met een kaliber .177.',
    image: 'https://images.unsplash.com/photo-1584226761916-f5de1e0d8138?auto=format&fit=crop&q=80&w=800',
    category: 'indoor',
  },
  {
    id: 'kruisboogschieten',
    title: 'Kruisboogschieten',
    description: 'De kruisboog is een eeuwenoud mechanisch wapen. Na een uitleg door een ervaren schutter beginnen we met een initiatie kruisboogschieten.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800',
    category: 'outdoor',
  },
  {
    id: 'chocoladeworkshop',
    title: 'Chocoladeworkshop',
    description: 'Een chocoladeworkshop onder leiding van een professionele chocolatier.',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800',
    category: 'culinair',
  },
  {
    id: 'stadsspel',
    title: 'Stadsspel',
    description: 'Het spel bestaat een legende rond 3 verdwenen bakkers van Keizer Karel.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
    category: 'cultureel',
  },
  {
    id: 'indoor-lasershooting',
    title: 'Indoor Lasershooting',
    description: 'Alternatief in het geval van heel slecht weer met veel wind voor het laserkleischieten of een leuke indooractiviteit.',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80&w=800',
    category: 'indoor',
  }]