import React from 'react';
import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const creators = [
        { id: 1, name: 'Anna', avatar: '/src/assets/88847909.jpg', url: 'https://github.com/annamelya2021' },
        { id: 2, name: 'Manu', avatar: 'src/assets/138526079.jpg', url: 'https://github.com/Manudies' },
        { id: 3, name: 'Belen', avatar: 'src/assets/153951441.jpg', url: 'https://github.com/cristobendito' },
        { id: 4, name: 'Marisa', avatar: 'src/assets/maxresdefault_dfdd.jpg', url: 'https://url_de_la_pagina_3' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <button className="scroll-to-top" onClick={scrollToTop}>
                ↑
            </button>
            <div className="copyright">&copy; {year} Guardians of React </div>
            <div className="creators">
                {creators.map(creator => (
                    <a key={creator.id} href={creator.url} target="_blank" rel="noopener noreferrer" className="creator-link">
                        <div className="creator">
                            <img src={creator.avatar} alt={creator.name} className="creator-avatar" />
                            <span className="creator-name">{creator.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
