/** @format */

import { popularToures } from '../../constants';
import './PopularToure.css';

import { BiTime, AiTwotoneStar, AiOutlineStar } from '../../constants/index';

const PopularToure = () => {
	return (
		<div className="app__popularToure-conatiner section__padding" id="Toures">
			<h3 className="app__popularToure-subTitle ">Featured Toure</h3>
			<h1 className="app__popularToure-title ">Most Popular Tours</h1>
			<div className="app__popularToure-wrapper">
				{popularToures.map(popularToure => (
					<div className="app__popularToure-card" key={popularToure.id}>
						<img src={popularToure.img} alt={popularToure.title} />
						<div className="card-badge">
							<BiTime />
							<time dateTime="4dys">{popularToure.days} Days</time>
						</div>
						<div className="app__popularToure-card_content">
							<div className="card_Wrapper">
								<p className="card_price">From Rs.6999</p>
								<div className="card_rating">
									<AiTwotoneStar />
									<AiTwotoneStar />
									<AiTwotoneStar />
									<AiTwotoneStar />
									<AiOutlineStar />
									<data value={2}>(10)</data>
								</div>
							</div>
							<h3 className="card-desc">{popularToure.title}</h3>
							<p className="card-location">{popularToure.location}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularToure;
