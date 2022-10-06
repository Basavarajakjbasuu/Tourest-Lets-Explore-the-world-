/** @format */

import images from '../../constants/images';
import './AdminCard.css';


const AdminCard = () => {
	return (
		<div className="app__adminCard-container">
			<div className="app__adminCard-wrapper">
				<img src={images.adminImg} alt="admin Image" className='profileImg' />
				<div className="app__adminCard-details">
					<h4>Basavaraja</h4>
					<p>Admin</p>
				</div>
			</div>
			<div className="app__adminCard-time">
				<p>10:30 AM</p>
			</div>
		</div>
	);
};

export default AdminCard;
