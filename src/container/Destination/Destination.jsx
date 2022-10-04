import './Destination.css'

import { destinationsLinks } from '../../constants';
import Destini from '../Destini/Destini';

const Destination = () => {
  return (
		<div className="app__destination-card section__padding">
			<p className="app__destination-subtitle">Destination</p>
			<h2 className="app__destination-title">Choose Your Place</h2>
			<div className="app__destination-lists">
				{destinationsLinks.map((destination) => (
					<Destini
						key={destination.id}
						place={destination.place}
						destination={destination.destini}
            image={destination.img}
            height={destination.height}
						width={destination.width}
						cname={destination.Clsname}
					/>
				))}
			</div>
		</div>
	);
}

export default Destination