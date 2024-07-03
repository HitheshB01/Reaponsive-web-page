import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className='footer-columns'>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><a href="#our-story">Our story</a></li>
            <li><a href="#csr">CSR Initiatives</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Solution</h3>
          <ul>
            <li><a href="#quickremit">QuickRemit</a></li>
            <li><a href="#institutional-trading">Institutional trading</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#compliance">Compliance</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Terms</h3>
          <ul>
            <li><a href="#dubai">Encryptus Dubai</a></li>
            <li><a href="#lithuania">Encryptus Lithuania</a></li>
          </ul>
        </div>
        </div>
       
        <div className="footer-column newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form>
            <input className='email' type="email" placeholder="Enter your email address" />
            <button className='submit-btn' type="submit">Submit</button>
          </form>
          <p>By submitting your email address, you will receive a notification from Encryptus about the industry updates, news and much more.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Digital assets, including cryptocurrencies and other digital securities, can be risky investments due to their high price volatility. These assets may not be suitable for all consumers and can result in significant losses. Digital asset markets and exchanges are not regulated in the same way as traditional financial products and may not offer the same level of customer protection. Additionally, digital assets do not have legal tender status and are not covered by deposit insurance. It is important to note that past performance of a digital asset is not necessarily indicative of future performance. For more information on the risks and potential disclosures related to digital assets, please refer to the User Agreement and Privacy Policy pages. © 2024 ENCRYPTUS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
