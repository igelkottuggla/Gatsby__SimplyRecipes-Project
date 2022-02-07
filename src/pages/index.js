import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
        <SEO title="Home" />
        <main className="page">
            <header className="hero">
            <StaticImage
                src="../assets/images/main.jpeg"
                alt="eggs and flour"
                className="hero-img"
                placeholder="blurred"
                layout="fullWidth"
            ></StaticImage>
            <div className="hero-container">
                <div className="hero-text">
                <h1>simply recipes</h1>
                <p>no fluff, just recipes</p>
                </div>
            </div>
            </header>
            <AllRecipes />
        </main>
        </Layout>
  )
}
