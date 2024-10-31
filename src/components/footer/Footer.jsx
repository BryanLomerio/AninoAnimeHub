import React from 'react';
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './Footer.css';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
        <div className='lastfooter'>
            <div className='socials'>
                <div>Copyright © {currentYear} AninoAnimeHub. All Rights Reserved</div>
                <div>
                    <a href="https://www.facebook.com/Aninoqt" target='_blank' rel='noopener noreferrer'>
                        <FaFacebook />
                    </a> 
                </div>
                <div>
                    <a href="https://www.tiktok.com/@techbyanino?_t=8r0VDqN7Bcm&_r=1" target='_blank' rel='noopener noreferrer'>
                        <FaTiktok />
                    </a>
                </div>
                <div>
                    <a href={`mailto:bryanlomerioanino@gmail.com`} target='_blank' rel='noopener noreferrer'>
                        <MdEmail />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
