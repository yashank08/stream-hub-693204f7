import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  SkipBack, 
  SkipForward, 
  ArrowLeft,
  Plus,
  Share2,
  ThumbsUp,
  Crown
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ContentRow } from '@/components/ContentRow';
import { mockContent, getTrendingContent } from '@/data/mockContent';
import { cn } from '@/lib/utils';

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const content = mockContent.find((item) => item.id === id);

  if (!content) {
    return (
      <Layout>
        <div className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Content Not Found</h1>
            <Link to="/">
              <Button variant="hero">Go Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{content.title} - Watch on Hotstar</title>
        <meta name="description" content={content.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Video Player */}
        <div 
          className="relative w-full aspect-video bg-black"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Video Placeholder */}
          <img
            src={content.banner || content.thumbnail}
            alt={content.title}
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay (when paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-200 shadow-lg animate-glow-pulse"
              >
                <Play className="w-10 h-10 fill-current ml-2" />
              </button>
            </div>
          )}

          {/* Video Controls */}
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 transition-opacity duration-300',
              showControls ? 'opacity-100' : 'opacity-0'
            )}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-6 h-6" />
                <span className="font-medium">Back</span>
              </Link>
              <div className="flex items-center gap-2">
                {content.isPremium && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-accent rounded-full text-accent-foreground text-sm font-semibold">
                    <Crown className="w-4 h-4" />
                    Premium
                  </div>
                )}
              </div>
            </div>

            {/* Center Title (visible when paused) */}
            {!isPlaying && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-16">
                <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">{content.title}</h1>
                <p className="text-muted-foreground">{content.year} • {content.duration}</p>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="relative h-1 bg-muted rounded-full cursor-pointer group">
                  <div
                    className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0:00</span>
                  <span>{content.duration}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>
                  <button className="p-2 text-foreground hover:text-primary transition-colors">
                    <SkipBack className="w-6 h-6" />
                  </button>
                  <button className="p-2 text-foreground hover:text-primary transition-colors">
                    <SkipForward className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <button className="p-2 text-foreground hover:text-primary transition-colors">
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.title}</h1>
              
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-6">
                <span className="px-2 py-1 bg-secondary rounded text-sm">{content.rating}</span>
                <span>{content.year}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{content.duration}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                {content.genre.map((genre, i) => (
                  <span key={genre}>
                    {genre}
                    {i < content.genre.length - 1 && ', '}
                  </span>
                ))}
              </div>

              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                {content.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="hero" size="lg">
                  <Play className="w-5 h-5 fill-current" />
                  Continue Watching
                </Button>
                <Button variant="outline" size="lg">
                  <Plus className="w-5 h-5" />
                  Add to Watchlist
                </Button>
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <ThumbsUp className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-12 h-12">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="bg-card rounded-xl p-6 h-fit">
              <h3 className="font-semibold text-foreground mb-4">Details</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Genre:</span>
                  <p className="text-foreground">{content.genre.join(', ')}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Release Year:</span>
                  <p className="text-foreground">{content.year}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Duration:</span>
                  <p className="text-foreground">{content.duration}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Rating:</span>
                  <p className="text-foreground">{content.rating}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Category:</span>
                  <p className="text-foreground capitalize">{content.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <ContentRow 
          title="You May Also Like" 
          content={getTrendingContent().filter(item => item.id !== id)} 
        />
      </div>
    </>
  );
};

export default Watch;
