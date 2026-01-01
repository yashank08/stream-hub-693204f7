import { Link } from 'react-router-dom';
import { Play, Crown, Plus, Info } from 'lucide-react';
import { Content } from '@/types/content';
import { cn } from '@/lib/utils';

interface ContentCardProps {
  content: Content;
  size?: 'small' | 'medium' | 'large';
}

export const ContentCard = ({ content, size = 'medium' }: ContentCardProps) => {
  const sizeClasses = {
    small: 'w-32 md:w-40',
    medium: 'w-40 md:w-52',
    large: 'w-52 md:w-64',
  };

  const aspectClasses = {
    small: 'aspect-[2/3]',
    medium: 'aspect-[2/3]',
    large: 'aspect-[16/9]',
  };

  return (
    <Link
      to={`/watch/${content.id}`}
      className={cn(
        'group relative flex-shrink-0 rounded-lg overflow-hidden card-hover cursor-pointer',
        sizeClasses[size]
      )}
    >
      {/* Thumbnail */}
      <div className={cn('relative w-full', aspectClasses[size])}>
        <img
          src={content.thumbnail}
          alt={content.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Premium Badge */}
        {content.isPremium && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-accent/90 rounded-md text-accent-foreground text-xs font-semibold">
            <Crown className="w-3 h-3" />
            Premium
          </div>
        )}

        {/* Hover Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-200 shadow-lg">
              <Play className="w-6 h-6 fill-current ml-1" />
            </button>
          </div>
        </div>

        {/* Bottom Actions (visible on hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center gap-2 mb-2">
            <button className="w-8 h-8 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <Plus className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-secondary/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3 bg-card">
        <h3 className="font-semibold text-foreground text-sm truncate group-hover:text-primary transition-colors duration-200">
          {content.title}
        </h3>
        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
          <span>{content.year}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>{content.duration}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {content.genre.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-0.5 bg-secondary rounded text-xs text-muted-foreground"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
