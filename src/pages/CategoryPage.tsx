import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ContentCard } from '@/components/ContentCard';
import { getContentByCategory } from '@/data/mockContent';
import { Content } from '@/types/content';

interface CategoryPageProps {
  category: Content['category'];
  title: string;
  description: string;
}

const LANGUAGES = ['All', 'English', 'Hindi', 'Tamil', 'Telugu'];

export const CategoryPage = ({ category, title, description }: CategoryPageProps) => {
  const allContent = getContentByCategory(category);
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const filteredContent = useMemo(() => {
    if (selectedLanguage === 'All') return allContent;
    return allContent.filter((item) => item.language === selectedLanguage);
  }, [allContent, selectedLanguage]);

  return (
    <>
      <Helmet>
        <title>{title} - Cine2Flow</title>
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

            {/* Language Filter */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Language</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                      selectedLanguage === lang
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-foreground hover:bg-primary/20'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>


            {/* Content Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {filteredContent.map((item) => (
                <ContentCard key={item.id} content={item} size="medium" />
              ))}
            </div>

            {/* Empty State */}
            {filteredContent.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No content available in {selectedLanguage}.
                </p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};
