
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "APPSWIFTS transformed our online presence completely. Their team delivered a website that not only looks beautiful but converts visitors into customers. The attention to detail was exceptional.",
      name: "Jean Pierre Hakizimana",
      designation: "CEO at Rwanda Tech Solutions",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800",
    },
    {
      quote:
        "The digital marketing campaign APPSWIFTS created for us increased our online sales by 200% in just three months. Their strategic approach and understanding of digital channels is unmatched in Rwanda.",
      name: "Claudine Uwase",
      designation: "Marketing Director at Kigali Fresh Foods",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=800",
    },
    {
      quote:
        "Working with APPSWIFTS on our learning platform was a game-changer. Their AI integration recommendations have made our product stand out in the market. They are true visionaries in the tech space.",
      name: "Emmanuel Mugisha",
      designation: "Founder at EduTech Rwanda",
      src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?fit=crop&w=800",
    },
    {
      quote:
        "Outstanding support and robust features. APPSWIFTS delivers on all its promises. Their team's communication and attention to our needs exceeded expectations.",
      name: "Marie Ishimwe",
      designation: "Operations Manager at Kigali Hospitality",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?fit=crop&w=800",
    },
    {
      quote:
        "The scalability and performance of our new e-commerce platform have been game-changing for our business. APPSWIFTS understood exactly what we needed to grow in the Rwandan market.",
      name: "David Mutabazi",
      designation: "Director at Rwanda Crafts Collective",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?fit=crop&w=800",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}

export { AnimatedTestimonialsDemo };
