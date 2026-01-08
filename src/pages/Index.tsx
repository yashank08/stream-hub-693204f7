import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { ContentRow } from '@/components/ContentRow';
import { 
  mockContent, 
  getTrendingContent, 
  getLatestContent, 
  getPremiumContent,
  getContentByCategory 
} from '@/data/mockContent';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cine2Flow - Watch Movies, TV Shows, Sports Online</title>
        <meta name="description" content="Stream the latest movies, TV shows, and live sports on Cine2Flow. Enjoy unlimited entertainment with premium content." />
      </Helmet>
      
      <Layout>
        <HeroBanner content={mockContent} />
        
        <div className="-mt-20 relative z-10">
          <ContentRow 
            title="Trending Now" 
            content={getTrendingContent()} 
          />
          
          <ContentRow 
            title="Latest Releases" 
            content={getLatestContent()} 
          />
          
          <ContentRow 
            title="Premium Content" 
            content={getPremiumContent()} 
          />
          
          <ContentRow 
            title="Popular Movies" 
            content={getContentByCategory('movies')} 
          />
          
          <ContentRow 
            title="Top Series" 
            content={getContentByCategory('series')} 
          />
          
          <ContentRow 
            title="Live Sports" 
            content={getContentByCategory('sports')} 
          />
          
          <ContentRow 
            title="Kids Zone" 
            content={getContentByCategory('kids')} 
          />
        </div>
      </Layout>
    </>
  );
};

export default Index;
