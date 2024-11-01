import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FaPlay } from "react-icons/fa"; 
import './Home.css';
import { AiOutlineReload } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';

const Home = () => {
    const [allAnime, setAllAnime] = useState([]); 
    const [visibleAnime, setVisibleAnime] = useState([]); 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [currentPage, setCurrentPage] = useState(0); 
    const [totalPages, setTotalPages] = useState(0); 
    const [visibleCount, setVisibleCount] = useState(20); 
    const [totalAnimeCount, setTotalAnimeCount] = useState(0); 
    const [filters, setFilters] = useState({ genre: '', season: '', type: '', language: '', country: '', year: '', sort: '' });
    const [loading, setLoading] = useState(true);

    const limit = 20;

    useEffect(() => {
        const fetchTopAnime = async (page) => {
            setLoading(true); 
            try {
                const response = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page * limit}`);
                
                setAllAnime(response.data.data); 
                setVisibleAnime(response.data.data.slice(0, visibleCount)); 
                setTotalPages(Math.ceil(response.data.meta.count / limit)); 
                setTotalAnimeCount(response.data.meta.count); 
            } catch (error) {
                console.error('Error fetching anime:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchTopAnime(currentPage);
    }, [currentPage]);

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
                <h1 className='sub-title'>Anime Lists</h1>
                <div className='cards-container'> 
                    <div className='cards'>
                        {loading ? ( 
                            <p>Loading...</p> 
                        ) : visibleAnime.length > 0 ? visibleAnime.map((anime, index) => (
                            <div key={index} className='anime-card'>
                                <Link to={`/anime/${anime.id}/episodes`}>
                                    <div className='image-container'>
                                        <img src={anime.attributes?.posterImage?.large} alt={anime.attributes?.canonicalTitle} />
                                        <button 
                                            className='play-button' 
                                            onClick={() => openModal(anime.attributes?.trailer?.url)}
                                        >
                                            <FaPlay />
                                        </button>
                                    </div>
                                </Link>
                                <h3>{anime.attributes?.canonicalTitle}</h3>
                            </div>
                        )) : <p>No anime found.</p>}
                    </div>
                </div>
            </div>

            {!loading && (
                <>
                    <div className='pagination-container'>
                        <Pagination 
                            className="pagination-controls"
                            currentPage={currentPage} 
                            totalPages={totalPages} 
                            onPageChange={setCurrentPage} 
                        />
                        <p className='pagination-results'>
                            Showing {visibleAnime.length} of {totalAnimeCount} Results
                        </p>
                    </div>

                    {visibleCount < allAnime.length && (
                        <div className='loadmore-container'>
                            <button className='loadmore' onClick={loadMoreAnime}>
                                <AiOutlineReload /> Load more....
                            </button>
                        </div>
                    )}
                </>
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
