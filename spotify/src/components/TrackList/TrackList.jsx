import './TrackList.css';
import { TrackItem } from '../TrackItem/TrackItem';
import { Loading } from '../Loading/Loading';

export const TrackList = ({ tracks, loading, error }) => {
    console.log('TrackList получил:', { tracks, loading, error });

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="track-list-message error">Ошибка: {error}</div>;
    }

    // Обрабатываем разные возможные структуры данных
    let actualTracks = tracks;
    
    if (tracks && tracks.songs && Array.isArray(tracks.songs)) {
        actualTracks = tracks.songs;
    } else if (tracks && Array.isArray(tracks)) {
        actualTracks = tracks;
    } else {
        actualTracks = [];
    }

    if (!actualTracks || actualTracks.length === 0) {
        return <div className="track-list-message">Треки не найдены</div>;
    }

    return (
        <div className="track-list-container">
            <div className="track-list-header">
                Найдено треков: {actualTracks.length}
            </div>
            <ul className="track-list">
                {actualTracks.map((track, index) => (
                    <TrackItem 
                        key={track.id || index} 
                        track={track} 
                        index={index} 
                    />
                ))}
            </ul>
        </div>
    );
};