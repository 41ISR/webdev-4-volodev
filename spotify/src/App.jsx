import './App.css';
import { useFetch } from './hooks/useFetch';
import { TrackList } from './components/TrackList/TrackList';

function App() {
    const API_URL = 'https://kitek.ktkv.dev/songs.json';
    const { data: tracks, loading, error } = useFetch(API_URL);

    console.log('Состояние App:', { tracks, loading, error });

    return (
        <div className="app">
            <header className="app-header">
                <h1>Список треков</h1>
                <p>Добро пожаловать в вашу музыкальную библиотеку</p>
            </header>
            
            <main className="app-main">
                <TrackList 
                    tracks={tracks} 
                    loading={loading} 
                    error={error} 
                />
            </main>
        </div>
    );
}

export default App;