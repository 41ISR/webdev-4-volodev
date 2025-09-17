import './Loading.css';

export const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Загрузка треков...</p>
        </div>
    );
};