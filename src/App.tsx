import { MovieListPage } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MovieListPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
