import React from "react"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"
import Sidebar from "@common/Sidebar"
import SocialIcons from "@common/SocialIcons"
import Blendor from "@common/Blendor"

import Video from "@sections/Video"
import Header from "@sections/Header"
import About from "@sections/About"
import Project from "@sections/Project"
import Instagram from "@sections/Instagram"

import Form from "@sections/Form"
import Footer from "@sections/Footer"

const IndexPage = () => (
  <Layout>
    <Blendor />
    <Video />
    <SocialIcons />
    <Sidebar />
    <Navbar />
    <Header />
    <About />
    <Project />
    <Instagram />
    <Form />
    <Footer />
  </Layout>
)

export default IndexPage
