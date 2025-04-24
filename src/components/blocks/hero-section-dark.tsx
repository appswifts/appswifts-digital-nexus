import { HeroSection } from "@/components/ui/hero-section"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Welcome to Our Platform"
      subtitle={{
        regular: "Transform your ideas into ",
        gradient: "beautiful digital experiences",
        gradientColor: "#89BF42"
      }}
      description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
      ctaText="Get Started"
      ctaHref="/signup"
      ctaGradientColors={["#89BF42", "#74A438"]}
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#89BF42",
        darkLineColor: "#74A438",
      }}
    />
  )
}
export { HeroSectionDemo }