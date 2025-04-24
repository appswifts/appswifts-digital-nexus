"use client"

import VideoHero from "./VideoHero";

function LandingHero() {
  return (
    <VideoHero
      videoUrl="https://cdn.dribbble.com/userupload/25326332/file/original-28e20b38d9251f4cf3f08bb2609cfa5f.mp4"
      title="Welcome to Irugoo"
      subtitle={{
        regular: "Discover and book ",
        gradient: "amazing experiences",
        gradientColor: "#89BF42"
      }}
      description="Explore a world of services, accommodations, and activities across East Africa. Book with ease and create unforgettable memories."
      ctaText="Explore Now"
      ctaHref="#services"
    />
  )
}

export default LandingHero
