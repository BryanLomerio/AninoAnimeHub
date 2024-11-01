import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Episodes = () => {
    const { animeId } = useParams(); 
    const [episodes, setEpisodes] = useState([]);
    const [animeTitle, setAnimeTitle] = useState('');

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const animeResponse = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`);
                setAnimeTitle(animeResponse.data.data.attributes.canonicalTitle);
                
                const episodeResponse = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}/episodes`);
                setEpisodes(episodeResponse.data.data);
            } catch (error) {
                console.error("Error fetching episodes:", error);
            }
        };

        fetchEpisodes();
    }, [animeId]);

    return (
        <div>
            <h3>Episodes for {animeTitle}</h3> 
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.id}>{episode.attributes.canonicalTitle}</li>
                ))}
            </ul>
        </div>
    );
};

export default Episodes;
