import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search as SearchIcon } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ContentCard } from '@/components/ContentCard';
import { searchContent } from '@/data/mockContent';
import { Content } from '@/types/content';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Content[]>([]);
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    if (query) {
      setResults(searchContent(query));
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchInput)}`;
    }
  };

  return (
    <>
      <Helmet>
        <title>{query ? `Search: ${query}` : 'Search'} - Hotstar</title>
        <meta name="description" content={`Search results for ${query} on Hotstar`} />
      </Helmet>
      
      <Layout>
        <div className="pt-24 pb-8 min-h-screen">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search movies, shows, sports..."
                  className="w-full pl-14 pr-4 py-4 bg-secondary border border-border rounded-xl text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  autoFocus
                />
              </div>
            </form>

            {/* Results */}
            {query && (
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Search Results for "{query}"
                </h1>
                <p className="text-muted-foreground mb-8">
                  {results.length} result{results.length !== 1 && 's'} found
                </p>

                {results.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                    {results.map((item) => (
                      <ContentCard key={item.id} content={item} size="medium" />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-foreground mb-2">No results found</h2>
                    <p className="text-muted-foreground">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Initial State */}
            {!query && (
              <div className="text-center py-16">
                <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-foreground mb-2">Search for content</h2>
                <p className="text-muted-foreground">
                  Find your favorite movies, TV shows, and more
                </p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
