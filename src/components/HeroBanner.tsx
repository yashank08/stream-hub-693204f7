import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Volume2, VolumeX, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Content } from '@/types/content';
import { cn } from '@/lib/utils';

interface HeroBannerProps {
  content: Content[];
}

export const HeroBanner = ({ content }: HeroBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const featuredContent = content.slice(0, 5);
  const currentContent = featuredContent[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredContent.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [featuredContent.length]);

  if (!currentContent) return null;

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      {featuredContent.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        >
          <img
            src={item.banner || item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Multiple Gradient Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            {/* Premium Badge */}
            {currentContent.isPremium && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/90 rounded-full text-accent-foreground text-sm font-semibold mb-4 animate-slide-up">
                <Crown className="w-4 h-4" />
                Premium Content
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {currentContent.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="px-2 py-1 bg-secondary rounded text-sm">{currentContent.rating}</span>
              <span>{currentContent.year}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{currentContent.duration}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              {currentContent.genre.map((genre, i) => (
                <span key={genre}>
                  {genre}
                  {i < currentContent.genre.length - 1 && ', '}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg mb-6 line-clamp-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {currentContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link to={`/watch/${currentContent.id}`}>
                <Button variant="hero" size="xl">
                  <Play className="w-6 h-6 fill-current" />
                  Play Now
                </Button>
              </Link>
              <Link to={`/watch/${currentContent.id}`}>
                <Button variant="glass" size="xl">
                  <Info className="w-6 h-6" />
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-24 right-8 w-10 h-10 rounded-full bg-secondary/50 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-200"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-4 bg-muted-foreground/50 hover:bg-muted-foreground'
            )}
          />
        ))}
      </div>
    </section>
  );
};
