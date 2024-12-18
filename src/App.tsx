import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { SearchCompanies } from './api';

function App() {
  const [search, setsearch] = useState("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setsearch(e.target.value);
      console.log(e);
  }

  const onClick = async (e: SyntheticEvent) => {
      const result = await SearchCompanies(search);

      if (typeof result == "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(searchResult);
  }
  
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList searchResults={searchResult} />
      {serverError && <h1>Unable to connect to API</h1>}
    </div>
  );
}

export default App;
