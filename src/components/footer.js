import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <p>&copy; California Republic</p>
        <div className='foot'>
        
      <div className="footer-content">
        <div className='headings'>Contact</div>
        <div className='content'>
            <p>pratikpjn@gmail.com</p>
            <p>7777777777</p>
        </div>
      </div>
      <div className="footer-content">
        <div className='headings'>Connect</div>
        <div className='content'>Follow us on</div>
        <div className='footer-link'>
            <a>twitter</a>
            <a>facebook</a>
            <a>instagram</a>
        </div>
        
         
        
      </div>
      <div className="footer-content">
        <div className='headings'>Jobs</div>
        <div className='content'>Want to join the team Email us your resume</div>

      </div>
      </div>
    </footer>
  );
};

export default Footer;
