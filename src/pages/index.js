import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Video from '@sections/Video';
import Header from '@sections/Header';
import About from '@sections/About';
import Project from '@sections/Project';
import Focus from '@sections/Focus';

import Footer from '@sections/Footer';

const IndexPage = () => (
	<Layout>
		<Video />
		<Navbar />
		<Header />
		<About />
		<Project />
		<Focus />
		<Footer />
	</Layout>
);

export default IndexPage;
