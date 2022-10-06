/** @format */

import { AiOutlineArrowRight, blogs } from '../../constants';
import './Blog.css';

import { BiTime } from '../../constants';
import AdminCard from '../../containers/AdminCard/AdminCard'
const Blog = () => {
	return (
		<div className="app__popularToure-conatiner section__padding" id="Blogs">
			<h3 className="app__popularToure-subTitle ">From The Blog Post</h3>
			<h1 className="app__popularToure-title ">Latest News & Articles</h1>
			<div className="app__popularToure-wrapper">
				{blogs.map(blog => (
					<div className="app__popularToure-card" key={blog.id}>
						<img src={blog.img} alt={blog.desc} />
						<div className="card-badge">
							<BiTime />
							<time dateTime="4dys">{blog.days} Days</time>
						</div>
						<div className="app__popularToure-card_content">
							<AdminCard />
							<p className="blog-desc">{blog.desc}</p>
							<div className="card-wrap">
								<div className="app__blog-readMore">Read More</div>
								<AiOutlineArrowRight />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
