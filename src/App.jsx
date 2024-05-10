import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

// we are using unsplash api free 
const App = () => {
  return (
    <>
    <ThemeToggle/>
    <SearchForm/>
    <Gallery/>
    </>
  );
};
export default App;
