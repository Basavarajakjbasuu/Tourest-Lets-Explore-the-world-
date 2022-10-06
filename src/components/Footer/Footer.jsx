/** @format */

import {
  AiFillLinkedin,
  AiOutlineGoogle,
	AiOutlineInstagram,
	footerCategories,
	footerQuickLinks,
	footerTopDestinations,
  ImTwitter,
  TbBrandMeta
} from '../../constants';

import './Footer.css';

const Footer = () => {
	return (
		<div className="app__footer-wrapper section__padding" id="Contact%20Us">
			<div className="app__footer-container">
				<div className="app__footer-topDestinations">
					<h4>Top destination</h4>
					{footerTopDestinations.map(topDestination => (
						<p key={topDestination}>{topDestination}</p>
					))}
				</div>
				<div className="app__footer-categories">
					<h4>Categories</h4>
					{footerCategories.map(categry => (
						<p key={categry}>{categry}</p>
					))}
				</div>
				<div className="app__footer-quickLinks">
					<h4>Quick links</h4>
					{footerQuickLinks.map(quicklink => (
						<p key={quicklink}>{quicklink}</p>
					))}
				</div>
				<div className="app__footer-newsLetter">
					<h4>Get a newsletter</h4>
					<p>
						For the latest deals and tips, travel no further than your inbox
					</p>
					<div className="app__footer-newsLetter-form">
						<input type="email" placeholder="Email address" />
						<button className="custom__button">Subscribe</button>
					</div>
				</div>
			</div>
			<div className="app__footer-bottom">
				<h1>
					<a href="#Home">Tourest</a>
				</h1>
				<div className="app__footer-copyRights">
					&copy; 2022{' '}
					<a href="#">
						BassuJk
					</a>
					. All Rights Reserved
				</div>
				<div className="app__footer-scoialMedia-links">
					<a href="#" className="socialMedia-link">
						<TbBrandMeta />
					</a>
					<a href="#" className="socialMedia-link">
						<ImTwitter />
					</a>
					<a href="#" className="socialMedia-link">
						<AiOutlineGoogle />
					</a>
					<a href="#" className="socialMedia-link">
						<AiFillLinkedin />
					</a>
					<a href="#" className="socialMedia-link">
						<AiOutlineInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
