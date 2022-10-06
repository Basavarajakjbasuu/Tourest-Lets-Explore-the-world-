/** @format */

import { aboutUs } from '../../constants';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => {
	return (
		<div className="app__aboutUs-container section__padding" id='about'>
			<div className="app__aboutUs-content">
				<h3 className="app__aboutUs-subTitle">About Us</h3>
				<h2 className="app__aboutUs-title">
					Explore all tour of the world with us.
				</h2>
				<p className='app__aboutUs-descPara'>
					Lorem Ipsum available, but the majority have suffered alteration in
					some form, by injected humour, or randomised words which don't look
					even slightly believable.
				</p>
				{aboutUs.map(about => (
					<div className="app__aboutUs-aboutItem" key={about.id}>
						<div className="app_aboutUs-icon">
							<img src={about.icons} alt="" className="mySvg" />
						</div>
						<div className="app__about-content">
							<h2>{about.title}</h2>
							<p>{about.desc}</p>
						</div>
					</div>
				))}
				<button className="Booking__Button">Booking Now</button>
			</div>
			<div className="app__aboutUs-image ">
				<img src={images.aboutBanner} alt="about Banner Img" />
			</div>
		</div>
	);
};

export default AboutUs;
