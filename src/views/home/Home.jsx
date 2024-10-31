import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FaPlay } from "react-icons/fa"; 
import './Home.css';

const Home = () => {
    const [allAnime, setAllAnime] = useState([]); 
    const [visibleAnime, setVisibleAnime] = useState([]); 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [visibleCount, setVisibleCount] = useState(20); 

    useEffect(() => {
        const fetchTopAnime = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime'); 
                const topAnimeList = response.data.data;
                setAllAnime(topAnimeList); 
                setVisibleAnime(topAnimeList.slice(0, visibleCount)); 
            } catch (error) {
                console.error('Error fetching top anime:', error);
            }
        };

        fetchTopAnime();
    }, []);

    const loadMoreAnime = () => {
        const newVisibleCount = Math.min(visibleCount + 20, allAnime.length); 
        setVisibleAnime(allAnime.slice(0, newVisibleCount)); 
        setVisibleCount(newVisibleCount); 
    };

    const openModal = (url) => {
        setVideoUrl(url);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setVideoUrl('');
    };

    return (
        <div>
            <h1 className='title'>AninoAnime</h1>
            <h1 className='sub-title'>Trending</h1>
            <div className='cards-container'> 
                <div className='cards'>
                    {visibleAnime.map((anime, index) => (
                        <div key={index} className='anime-card'>
                            <div className='image-container'>
                                <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
                                <button 
                                    className='play-button' 
                                    onClick={() => openModal(anime.trailer?.embed_url || 'https://example.com')}
                                >
                                    <FaPlay />
                                </button>
                            </div>
                            <h3>{anime.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            
            {visibleCount < allAnime.length && (
                <div className='loadmore-container'>
                    <button className='loadmore' onClick={loadMoreAnime}>
                        Load More
                    </button>
                </div>
            )}

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h2>Playing Video</h2>
                {videoUrl && (
                    <iframe
                        width="560"
                        height="315"
                        src={videoUrl}
                        title="Anime Video Player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                )}
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Home;
