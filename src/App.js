import './App.css';
import data from './components/data/data.js'
import Track from './components/track';

function App() {
  const Tracks = () => {
    return data.map(data => 
    <Track key={data.id} image={data.album.images[0].url} title={data.name} artist={data.artists[0].name} album={data.album.name} />)
  }

  return (
    <div className="App">
      <h1>PLAYLIST</h1>
      <Tracks />
    </div>
  );
}

export default App;
