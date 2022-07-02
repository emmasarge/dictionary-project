import SearchBar from './components/molecules/searchBar';
import './index.css';

export default function App() {
  return (
    <div className="App container mb-4 maxWidth">
      <SearchBar defaultKeyword={'rose'} />
      <p className="text-center smallText mt-2 resource-link">This is an open source project by Emma Sargeant available on <a href="https://github.com/emmasarge/dictionary-project" target="_blank"ref="noreferror" >Github</a> and hosted on <a href="https://bespoke-buttercream-ec36b1.netlify.app/" target="_blank" ref="noreferror">Netlify</a></p>
  
    </div>
  );
}

