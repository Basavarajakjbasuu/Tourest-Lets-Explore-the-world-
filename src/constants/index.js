/** @format */
import images from './images';
export const navLinks = [
	{
		id: 'home',
		title: 'Home'
	},

	{
		id: 'about',
		title: 'About Us'
	},

	{
		id: 'Toures',
		title: 'Toures'
	},

	{
		id: 'Destination',
		title: 'Destination'
	},

	{
		id: 'Blogs',
		title: 'Blogs'
	},

	{
		id: 'Contact Us',
		title: 'Contact Us'
	}
];

export const destinationsLinks = [
	{
		id: 'maldives',
		place: 'male',
		destini: 'Maldives',
		img: images.destination1,
		height: 1100,
		width: 1140,
		Clsname: 'w-50'
	},
	{
		id: 'Bangkok',
		place: 'Bangkok',
		destini: 'Thiland',
		img: images.destination2,
		height: 1100,
		width: 1140,
		Clsname: 'w-50'
	},
	{
		id: 'Kuala Lumpur',
		place: 'Kulal Lumpur',
		destini: 'Malaysia',
		img: images.destination3,
		height: 1110,
		width: 480
	},
	{
		id: 'Kathmandu',
		place: 'Kathmandu',
		destini: 'Nepal',
		img: images.destination4,
		height: 1110,
		width: 480
	},
	{
		id: 'Jakarta',
		place: 'Jakarta',
		destini: 'Indonesia',
		img: images.destination5,
		height: 1110,
		width: 480
	}
];

export const popularToures = [
	{
		id: 1,
		img: images.popular1,
		days: 5,
		title: 'A good traveler has no fixed plans and is not intent on arriving',
		location: 'Kuala Lumpur, Malaysia'
	},
	{
		id: 2,
		img: images.popular2,
		days: 12,
		title: 'A good traveler has no fixed plans and is not intent on arriving',
		location: 'Kuala Lumpur, Malaysia'
	},
	{
		id: 3,
		img: images.popular3,
		days: 9,
		title: 'A good traveler has no fixed plans and is not intent on arriving',
		location: 'Kuala Lumpur, Malaysia'
	}
];

import { BiTime } from 'react-icons/bi';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TbBrandMeta } from 'react-icons/tb'
import { ImTwitter } from 'react-icons/im'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai';


export { BiTime, AiOutlineStar, AiTwotoneStar, AiOutlineArrowRight, TbBrandMeta, ImTwitter, AiOutlineGoogle, AiFillLinkedin, AiOutlineInstagram };

export const aboutUs = [
	{
		id: 1,
		icons: images.icon1,
		title: 'Tour guide',
		desc: ' Lorem Ipsum available, but the majority have suffered alteration in some.'
	},
	{
		id: 2,
		icons: images.icon2,
		title: 'Friendly price',
		desc: ' Lorem Ipsum available, but the majority have suffered alteration in some.'
	},
	{
		id: 3,
		icons: images.icon3,
		title: 'Reliable tour',
		desc: ' Lorem Ipsum available, but the majority have suffered alteration in some.'
	}
];

export const blogs = [
	{
		id: 1,
		img: images.popular2,
		days: 8,
		desc: 'A good traveler has no fixed plans and is not intent on arriving.'
	},
	{
		id: 2,
		img: images.popular3,
		days: 12,
		desc: 'A good traveler has no fixed plans and is not intent on arriving.'
	},
	{
		id: 3,
		img: images.popular1,
		days: 8,
		desc: 'A good traveler has no fixed plans and is not intent on arriving.'
	}
];

export const footerTopDestinations = [
	'Indonesia, Jakarta',
	'Maldives, Malé',
	'Australia, Canberra',
	'Thailand, Bangkok',
	'Morocco, Rabat'
];

export const footerCategories = [
	'Travel',
	'Lifestyle',
	'Fashion',
	'Education',
	'Food & Drink'
];

export const footerQuickLinks = [
	'About',
	'Contact',
	'Tours',
	'Booking',
	'Terms & Conditions'
];
