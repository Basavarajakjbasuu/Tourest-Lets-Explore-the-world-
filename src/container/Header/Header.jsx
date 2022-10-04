/** @format */

import './Header.css';

import images from '../../constants/images'
const Header = () => {
	return (
		<div className="app__header section__padding">
			<div className="app__wrapper_info">
				<h2 className="app__subheading">Explore Your Travel</h2>
				<h1 className="app__heading-h1">Trusted Travel Agency</h1>
				<p className="app__subpara">
					I travel not to go anywhere, but to go. I travel for travel's sake the
					great affair is to move.
				</p>
				<div className="app__button_wrapper">
					<button className="button-1" type="button">
						Contact Us
					</button>
					<button className="button-2" type="button">
						Learn More
					</button>
				</div>
			</div>

			<div className="app__wrapper_img">
				<img src={images.hero} alt="hero image" />
			</div>
		</div>
	);
};

export default Header;
