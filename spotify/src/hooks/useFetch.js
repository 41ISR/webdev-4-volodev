import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                
                // Имитируем загрузку с сервера
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Создаем наши 3 трека вручную
                const customTracks = [
                    {
                        id: 1,
                        name: "Время",
                        artists: [
                            { id: 1, name: "2hug" }
                        ],
                        album: {
                            id: 1,
                            name: "Моменты",
                            images: [
                                { url: "https://via.placeholder.com/300x300/667eea/white?text=2hug" }
                            ]
                        },
                        duration_ms: 183000, // 3:03
                        popularity: 87
                    },
                    {
                        id: 2,
                        name: "Никому не верить",
                        artists: [
                            { id: 2, name: "Whole Lotta Swag" }
                        ],
                        album: {
                            id: 2,
                            name: "Доверие",
                            images: [
                                { url: "https://via.placeholder.com/300x300/764ba2/white?text=WLS" }
                            ]
                        },
                        duration_ms: 217000, // 3:37
                        popularity: 92
                    },
                    {
                        id: 3,
                        name: "П О Р Ш Е",
                        artists: [
                            { id: 3, name: "Baby Melo" }
                        ],
                        album: {
                            id: 3,
                            name: "Эмоции",
                            images: [
                                { url: "https://via.placeholder.com/300x300/f093fb/white?text=Melo" }
                            ]
                        },
                        duration_ms: 156000, // 2:36
                        popularity: 95
                    }
                ];

                setData(customTracks);
                setError(null);
                
            } catch (err) {
                setError(err.message);
                console.error('Ошибка при загрузке данных:', err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
};