import './TrackItem.css';

export const TrackItem = ({ track, index }) => {
    // Безопасное извлечение данных
    const formatDuration = (ms) => {
        if (!ms) return '0:00';
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const getArtists = () => {
        if (!track.artists) return 'Неизвестный артист';
        if (Array.isArray(track.artists)) {
            return track.artists.map(artist => artist.name || 'Неизвестный').join(', ');
        }
        return 'Неизвестный артист';
    };

    const getAlbumImage = () => {
        if (track.album?.images?.[0]?.url) {
            return track.album.images[0].url;
        }
        if (track.album_image) {
            return track.album_image;
        }
        return 'https://via.placeholder.com/60x60?text=No+Image';
    };

    const getAlbumName = () => {
        return track.album?.name || track.album_name || 'Неизвестный альбом';
    };

    const getTrackName = () => {
        return track.name || track.title || 'Никому не верить';
    };

    const getPopularity = () => {
        return track.popularity || track.popularity_score || 0;
    };

    const getDuration = () => {
        return track.duration_ms || track.duration || 108000;
    };

    return (
        <li className="track-item">
            <div className="track-number">{index + 1}</div>
            <div className="track-main">
                <img
                    src={getAlbumImage()}
                    alt={getAlbumName()}
                    className="album-art"
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/60x60?text=No+Image';
                    }}
                />
                <div className="track-info">
                    <div className="track-name">{getTrackName()}</div>
                    <div className="track-artists">{getArtists()}</div>
                    <div className="track-album">{getAlbumName()}</div>
                </div>
            </div>
            <div className="track-meta">
                <div className="duration">{formatDuration(getDuration())}</div>
                <div className="popularity">♪ {getPopularity()}</div>
            </div>
        </li>
    );
};