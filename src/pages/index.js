import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Sidebar from '@common/Sidebar';

import Video from '@sections/Video';
import Header from '@sections/Header';
import About from '@sections/About';
import Project from '@sections/Project';
import Focus from '@sections/Focus';

import Form from '@sections/Form';
import Footer from '@sections/Footer';

const IndexPage = () => (
	<Layout>
		<Video />
		<Sidebar />
		<Navbar />
		<Header />
		<About />
		<Project />
		<Form />
		<Footer />
	</Layout>
);

export default IndexPage;
