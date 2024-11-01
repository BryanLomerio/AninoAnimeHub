import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FaPlay } from "react-icons/fa"; 
import './Home.css';
import { AiOutlineReload } from "react-icons/ai";

const Home = () => {
    const [allAnime, setAllAnime] = useState([]); 
    const [visibleAnime, setVisibleAnime] = useState([]); 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [visibleCount, setVisibleCount] = useState(20); 
    const [filters, setFilters] = useState({ genre: '', season: '', type: '', language: '', country: '', year: '', sort: '' });

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

    useEffect(() => {
        applyFilters();
    }, [filters, allAnime]); 

    const loadMoreAnime = () => {
        const newVisibleCount = Math.min(visibleCount + 20, allAnime.length); 
        setVisibleCount(newVisibleCount); 
    };

    const applyFilters = () => {
        let filteredAnime = allAnime;

        if (filters.genre) {
            filteredAnime = filteredAnime.filter(anime => anime.genres?.some(g => g.name.includes(filters.genre)));
        }

        //ANONG GENRE PA KAYA PWEDE MA FILTER

        setVisibleAnime(filteredAnime.slice(0, visibleCount)); 
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
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
        
            <div className='test'>
                <h1 className='sub-title'>Top</h1>
                <span className='filter-box'>
    <h1 className='filter-title'>Quick Filter</h1>
    <div className='filter-container'>
        <div className='select-group'>
            <div className='select-wrapper'>
                <select name="genre" id="genre" onChange={handleFilterChange}>
                    <option value="">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                </select>
            </div>
            <div className='select-wrapper'>
                <select name="year" id="year" onChange={handleFilterChange}>
                    <option value="">All Years</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>

        <div className='select-group'>
            <div className='select-wrapper'>
                <select name="rating" id="rating" onChange={handleFilterChange}>
                    <option value="">All Ratings</option>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                </select>
            </div>
            <div className='select-wrapper'>
                <select name="type" id="type" onChange={handleFilterChange}>
                    <option value="">All Types</option>
                    <option value="Movie">Movie</option>
                    <option value="TV Show">TV Show</option>
                </select>
            </div>
        </div>
        
        <div className='select-group'>
            <div className='select-wrapper'>
                <select name="language" id="language" onChange={handleFilterChange}>
                    <option value="">All Languages</option>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Spanish">Spanish</option>
                </select>
            </div>
            <div className='select-wrapper'>
                <select name="duration" id="duration" onChange={handleFilterChange}>
                    <option value="">All Durations</option>
                    <option value="Short">Short</option>
                    <option value="Medium">Medium</option>
                    <option value="Long">Long</option>
                </select>
            </div>
        </div>

        <div className='select-group'>
            <div className='select-wrapper'>
                <select name="status" id="status" onChange={handleFilterChange}>
                    <option value="">All Statuses</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className='select-wrapper'>
                <select name="producer" id="producer" onChange={handleFilterChange}>
                    <option value="">All Producers</option>
                    <option value="Producer A">Producer A</option>
                    <option value="Producer B">Producer B</option>
                </select>
            </div>
        </div>
    </div>
</span>


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
            </div>
            
            {visibleCount < allAnime.length && (
                <div className='loadmore-container'>
                    <button className='loadmore' onClick={loadMoreAnime}>
                        <AiOutlineReload /> Load more....
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
