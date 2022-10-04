/** @format */

import './Destini.css';

const Destini = ({ place, destination, image, width, height, cname }) => (
	<div className="app__destini_wrapper">
		<div className={`app__destini_card ${cname}`}>
			<img src={image} alt="images" height={height} width={width}  />
			<div className="app__destini_card-content">
      <p className="card-subtitle">{place}</p>
      <h3 className="card-title">{destination}</h3>
    </div>
		</div>
	</div>
);

export default Destini;
