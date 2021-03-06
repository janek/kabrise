import React from "react"

import Layout from "@common/Layout"
import Navbar from "@common/Navbar"
import Sidebar from "@common/Sidebar"
import SocialIcons from "@common/SocialIcons"

import Video from "@sections/Video"
import Header from "@sections/Header"
import About from "@sections/About"
import Project from "@sections/Project"
import Instagram from "@sections/Instagram"

import Form from "@sections/Form"
import Footer from "@sections/Footer"

const IndexPage = () => (
  <Layout>
    <SocialIcons />
    <Sidebar />
    <Video />
    <Navbar />
    <Header />
    <About />
    <Project />
    <Instagram />
    <Form />
  </Layout>
)

export default IndexPage
