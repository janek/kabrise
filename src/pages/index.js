import React from "react"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"

import Header from "@sections/Header"
import About from "@sections/About"
import Content from "@sections/Content"
import Stage from "@sections/Stage"
import Brands from "@sections/Brands"

import Footer from "@sections/Footer"

const IndexPage = () => (
	<Layout>
		<Navbar />
		<Header />
		<About />
		<Content />
		<Stage />
		<Footer />
	</Layout>
)

export default IndexPage
