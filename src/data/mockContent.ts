import { Content } from '@/types/content';

export const mockContent: Content[] = [
  // Movies
  {
    id: '1',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    thumbnail: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    banner: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'movies',
    genre: ['Action', 'Crime', 'Drama'],
    year: 2008,
    rating: 'PG-13',
    duration: '2h 32m',
    isPremium: true,
  },
  {
    id: '2',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop',
    category: 'movies',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    year: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    isPremium: false,
  },
  {
    id: '3',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    banner: 'https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'movies',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    year: 2014,
    rating: 'PG-13',
    duration: '2h 49m',
    isPremium: true,
  },
  {
    id: '4',
    title: 'Avatar',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    thumbnail: 'https://cdn.dribbble.com/userupload/6158891/file/original-dba5dfaf6b04c7aa584921d7cd42e109.jpg?resize=752x&vertical=center',
    category: 'movies',
    genre: ['Action', 'Adventure', 'Fantasy'],
    year: 2009,
    rating: 'PG-13',
    duration: '2h 42m',
    isPremium: false,
  },
  {
    id: '5',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop',
    category: 'movies',
    genre: ['Action', 'Sci-Fi'],
    year: 1999,
    rating: 'R',
    duration: '2h 16m',
    isPremium: true,
  },
  // Series
  {
    id: '6',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    thumbnail: 'https://m.media-amazon.com/images/I/91+GrGr5TWL._AC_UF894,1000_QL80_.jpg',
    category: 'series',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2008,
    rating: 'TV-MA',
    duration: '5 Seasons',
    isPremium: true,
  },
  {
    id: '7',
    title: 'Stranger Things',
    description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
    thumbnail: 'https://m.media-amazon.com/images/I/81U0-cRG34S._AC_UF894,1000_QL80_.jpg',
    category: 'series',
    genre: ['Drama', 'Fantasy', 'Horror'],
    year: 2016,
    rating: 'TV-14',
    duration: '4 Seasons',
    isPremium: false,
  },
  {
    id: '8',
    title: 'Game of Thrones',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    thumbnail: 'https://m.media-amazon.com/images/I/51A7EGmxK-L._AC_UF894,1000_QL80_.jpg',
    category: 'series',
    genre: ['Action', 'Adventure', 'Drama'],
    year: 2011,
    rating: 'TV-MA',
    duration: '8 Seasons',
    isPremium: true,
  },
  // Sports
  {
    id: '9',
    title: 'Premier League 2025',
    description: 'Watch the best football action from the English Premier League live.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolOIZdXxOMtncBB_SiqZ7y3tM7iHtE96GRA&s',
    category: 'sports',
    genre: ['Football', 'Live'],
    year: 2025,
    rating: 'All Ages',
    duration: 'Live',
    isPremium: true,
  },
  {
    id: '10',
    title: 'IPL Cricket',
    description: 'The biggest cricket league in the world - Indian Premier League.',
    thumbnail: 'https://i.pinimg.com/564x/f2/44/ae/f244aef51c9888440791edd302759a8d.jpg',
    category: 'sports',
    genre: ['Cricket', 'Live'],
    year: 2025,
    rating: 'All Ages',
    duration: 'Live',
    isPremium: true,
  },
  {
    id: '11',
    title: 'Formula 1',
    description: 'Experience the thrill of Formula 1 racing with exclusive coverage.',
    thumbnail: 'https://images.squarespace-cdn.com/content/v1/52744b67e4b0782c048b666f/1751545234572-MPQOL4N4A0MIE8SZHPA4/9+Cover+1.jpg?format=1500w',
    category: 'sports',
    genre: ['Racing', 'Motorsport'],
    year: 2025,
    rating: 'All Ages',
    duration: 'Live',
    isPremium: true,
  },
  // Kids
  {
    id: '12',
    title: 'Chhota Bheem',
    description: 'Follow the adventures of Bheem and his friends in the town of Dholakpur.',
    thumbnail: 'https://m.media-amazon.com/images/M/MV5BMjFhNzU4NmItOTczMC00YTMyLTkzZjgtNTJjZDA0YmRkZTc4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    category: 'kids',
    genre: ['Animation', 'Adventure'],
    year: 2008,
    rating: 'TV-Y7',
    duration: '20 Seasons',
    isPremium: false,
  },
  {
    id: '13',
    title: 'Motu Patlu',
    description: 'Comic adventures of two best friends Motu and Patlu in the fictional city of Furfuri Nagar.',
    thumbnail: 'https://m.media-amazon.com/images/I/71zpLued29L.jpg',
    category: 'kids',
    genre: ['Animation', 'Comedy'],
    year: 2012,
    rating: 'TV-Y',
    duration: '10 Seasons',
    isPremium: false,
  },
  {
    id: '14',
    title: 'Doraemon',
    description: 'A robotic cat from the future helps a schoolboy named Nobita with his gadgets.',
    thumbnail: 'https://i.pinimg.com/736x/ef/2b/04/ef2b045bce82875d5cef98aa835b5548.jpg',
    category: 'kids',
    genre: ['Animation', 'Sci-Fi'],
    year: 1979,
    rating: 'TV-Y',
    duration: '50+ Seasons',
    isPremium: false,
  },
];

export const featuredContent = mockContent[0];

export const getContentByCategory = (category: Content['category']) => 
  mockContent.filter(item => item.category === category);

export const getTrendingContent = () => 
  mockContent.slice(0, 6);

export const getLatestContent = () => 
  [...mockContent].sort((a, b) => b.year - a.year).slice(0, 6);

export const getPremiumContent = () => 
  mockContent.filter(item => item.isPremium);

export const searchContent = (query: string) => 
  mockContent.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
  );
