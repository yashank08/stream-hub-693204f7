export interface Content {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  banner?: string;
  category: 'movies' | 'series' | 'sports' | 'kids';
  genre: string[];
  year: number;
  rating: string;
  duration: string;
  language: string;
  isPremium: boolean;
  videoUrl?: string;
  episodes?: Episode[];
}

export interface Episode {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  episodeNumber: number;
  seasonNumber: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'viewer';
  avatar?: string;
  watchlist: string[];
  favorites: string[];
}
