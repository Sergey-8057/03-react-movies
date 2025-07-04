import toast, { Toaster } from 'react-hot-toast';
import fetchMovies from '../../services/movieService';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';

export default function App() {
  // const [articles, setArticles] = useState<Article[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      // setIsLoading(true);
      // setIsError(false);
      // 2. Використовуємо HTTP-функцію
      const data = await fetchMovies(query);
      console.log(data);
      if (data.movies.length === 0) {
        toast.error('No movies found for your request.');
        return;
      }
      // setArticles(data);
    } catch {
      // setIsError(true);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
}
