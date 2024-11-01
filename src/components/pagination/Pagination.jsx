import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page >= 0 && page < totalPages) {
            onPageChange(page);
        }
    };

    const getVisiblePages = () => {
        const pages = [];
        const startPage = Math.floor(currentPage / 5) * 5; 
        const endPage = Math.min(startPage + 5, totalPages);

        for (let i = startPage; i < endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <div className='pagination'>
            <button  
                className='pagination-btn' 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 0}
            >
                Prev
            </button>
            {visiblePages.map((page) => (
                <button 
                    key={page} 
                    onClick={() => handlePageChange(page)} 
                    className={currentPage === page ? 'active' : ''} 
                >
                    {page + 1} 
                </button>
            ))}
            <button 
                className='pagination-btn' 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage >= totalPages - 1}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
