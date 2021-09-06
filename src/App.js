import './App.css';
import data from './components/data/data.js'
import Track from './components/track';

function App() {
  return (
    <div className="App">
      <h1>PLAYLIST</h1>
      <Track image={data.album.images[0].url} title={data.name} artist={data.artists[0].name} album={data.album.name} />
    </div>
  );
}

export default App;
