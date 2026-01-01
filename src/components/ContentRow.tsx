import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Content } from '@/types/content';
import { ContentCard } from './ContentCard';
import { Button } from '@/components/ui/button';

interface ContentRowProps {
  title: string;
  content: Content[];
  size?: 'small' | 'medium' | 'large';
}

export const ContentRow = ({ title, content, size = 'medium' }: ContentRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (content.length === 0) return null;

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('left')}
              className="hidden md:flex w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll('right')}
              className="hidden md:flex w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {content.map((item) => (
            <ContentCard key={item.id} content={item} size={size} />
          ))}
        </div>
      </div>
    </section>
  );
};
