import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { ContentCard } from '@/components/ContentCard';
import { getContentByCategory } from '@/data/mockContent';
import { Content } from '@/types/content';

interface CategoryPageProps {
  category: Content['category'];
  title: string;
  description: string;
}

export const CategoryPage = ({ category, title, description }: CategoryPageProps) => {
  const content = getContentByCategory(category);

  return (
    <>
      <Helmet>
        <title>{title} - Hotstar</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Layout>
        <div className="pt-24 pb-8">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {['All', 'Popular', 'Latest', 'Premium'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 whitespace-nowrap"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {content.map((item) => (
                <ContentCard key={item.id} content={item} size="medium" />
              ))}
            </div>

            {/* Empty State */}
            {content.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No content available in this category.</p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};
