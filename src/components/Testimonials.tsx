
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean Pierre Hakizimana",
    role: "CEO",
    company: "Rwanda Tech Solutions",
    content: "APPSWIFTS transformed our online presence completely. Their team delivered a website that not only looks beautiful but converts visitors into customers. The attention to detail and understanding of our market needs was exceptional.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800"
  },
  {
    id: 2,
    name: "Claudine Uwase",
    role: "Marketing Director",
    company: "Kigali Fresh Foods",
    content: "The digital marketing campaign APPSWIFTS created for us increased our online sales by 200% in just three months. Their strategic approach and understanding of digital channels is unmatched in Rwanda.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=800"
  },
  {
    id: 3,
    name: "Emmanuel Mugisha",
    role: "Founder",
    company: "EduTech Rwanda",
    content: "Working with APPSWIFTS on our learning platform was a game-changer. Their AI integration recommendations have made our product stand out in the market. They are true visionaries in the tech space.",
    imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?fit=crop&w=800"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-r from-primary/10 to-accent/10 container-padding">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">
            Hear from businesses across Rwanda about their experience working with APPSWIFTS.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white p-4 rounded-full">
              <Quote size={28} />
            </div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={currentTestimonial.imageUrl} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-2xl md:text-3xl font-gt italic mb-8 leading-relaxed">
                  "{currentTestimonial.content}"
                </p>
                <div className="flex flex-col">
                  <h4 className="text-2xl font-gt">{currentTestimonial.name}</h4>
                  <p className="text-premium-gray font-actief mt-1">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12 gap-6">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={24} />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
