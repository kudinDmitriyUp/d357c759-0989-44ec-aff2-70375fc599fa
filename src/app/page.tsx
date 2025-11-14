"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Calendar, Crown, DollarSign, Hand, Heart, HelpCircle, MessageSquare, PaintBrush, Palette, Sparkles, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"hover-magnetic"}
      defaultTextAnimation={"reveal-blur"}
      borderRadius={"sharp"}
      contentWidth={"large"}
      sizing={"medium"}
      background={"dotGrid"}
      cardStyle={"solid-bordered"}
      primaryButtonStyle={"diagonal-gradient"}
      secondaryButtonStyle={"outline"}
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {"name": "About", "id": "about"},
            {"name": "Services", "id": "services"},
            {"name": "Pricing", "id": "pricing"},
            {"name": "Team", "id": "team"},
            {"name": "Contact", "id": "contact"}
          ]}
          brandName={"Blush Nail Studio"}
          button={{
            "text": "Book Now",
            "href": "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title={"Beautiful Nails, Beautiful You"}
          description={"Experience luxury nail care with our professional services. From classic manicures to creative nail art, we make your nails look stunning."}
          tag={"Premium Nail Care"}
          tagIcon={Sparkles}
          mediaItems={[
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131585129-vdiltfyc.jpg",
              "imageAlt": "Professional manicure service"
            },
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131586225-ilgzlruq.jpg",
              "imageAlt": "Relaxing pedicure treatment"
            },
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131587523-o39rks8n.jpg",
              "imageAlt": "Creative nail art design"
            },
            {
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131586825-vdbcz6ea.jpg",
              "imageAlt": "Gel nail polish application"
            }
          ]}
          buttons={[
            {
              "text": "Book Appointment",
              "href": "contact"
            },
            {
              "text": "View Services",
              "href": "services"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag={"Why Choose Us"}
          description={"At Blush Nail Studio, we combine artistry with expertise to deliver exceptional nail care services. Our skilled technicians use only premium products and the latest techniques to ensure your nails look their absolute best while maintaining their health and strength."}
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardFive
          title={"Our Services"}
          description={"Discover our comprehensive range of nail care services designed to pamper and beautify"}
          tag={"Services"}
          tagIcon={Star}
          textboxLayout={"default"}
          gridVariant={"uniform-all-items-equal"}
          animationType={"blur-reveal"}
          showIconBoxBackground={true}
          features={[
            {
              "title": "Classic Manicure",
              "icon": Hand
            },
            {
              "title": "Luxury Pedicure",
              "icon": Sparkles
            },
            {
              "title": "Gel Nail Polish",
              "icon": Palette
            },
            {
              "title": "Nail Art Design",
              "icon": PaintBrush
            },
            {
              "title": "Spa Treatment",
              "icon": Sparkles
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title={"Our Packages"}
          description={"Choose the perfect nail care package for your needs"}
          tag={"Pricing"}
          tagIcon={DollarSign}
          textboxLayout={"default"}
          animationType={"slide-up"}
          plans={[
            {
              "id": "basic",
              "badge": "Essential Care",
              "badgeIcon": Heart,
              "price": "$35",
              "subtitle": "Perfect for regular maintenance",
              "buttons": [
                {
                  "text": "Book Now",
                  "href": "contact"
                },
                {
                  "text": "Learn More",
                  "href": "services"
                }
              ],
              "features": [
                "Classic manicure",
                "Nail shaping & buffing",
                "Cuticle care",
                "Base & top coat",
                "Choice of polish color"
              ]
            },
            {
              "id": "premium",
              "badge": "Most Popular",
              "badgeIcon": Crown,
              "price": "$65",
              "subtitle": "Complete nail transformation",
              "buttons": [
                {
                  "text": "Book Now",
                  "href": "contact"
                },
                {
                  "text": "Learn More",
                  "href": "services"
                }
              ],
              "features": [
                "Luxury manicure & pedicure",
                "Gel polish application",
                "Hand & foot massage",
                "Cuticle oil treatment",
                "Free nail art (simple design)"
              ]
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardOne
          title={"Meet Our Team"}
          description={"Our skilled nail technicians are passionate about making you look and feel beautiful"}
          tag={"Our Team"}
          tagIcon={Users}
          textboxLayout={"default"}
          gridVariant={"uniform-all-items-equal"}
          animationType={"scale-rotate"}
          members={[
            {
              "id": "1",
              "name": "Sarah M.",
              "role": "Senior Nail Artist",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131589059-gob247xc.jpg",
              "imageAlt": "Sarah M. - Senior Nail Artist"
            },
            {
              "id": "2",
              "name": "Emma R.",
              "role": "Nail Specialist",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131589921-s4dnoibs.jpg",
              "imageAlt": "Emma R. - Nail Specialist"
            },
            {
              "id": "3",
              "name": "Lisa K.",
              "role": "Spa Technician",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131590463-um65084s.jpg",
              "imageAlt": "Lisa K. - Spa Technician"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title={"What Our Clients Say"}
          description={"Real feedback from our valued customers who trust us with their nail care"}
          tag={"Testimonials"}
          tagIcon={MessageSquare}
          textboxLayout={"default"}
          gridVariant={"uniform-all-items-equal"}
          animationType={"opacity"}
          testimonials={[
            {
              "id": "1",
              "name": "Jennifer L.",
              "role": "Regular Client",
              "company": "Marketing Professional",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131591035-6la1z5ss.jpg",
              "imageAlt": "Jennifer L. - Happy customer"
            },
            {
              "id": "2",
              "name": "Michelle P.",
              "role": "Bride",
              "company": "Wedding Client",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131591954-0ymekrw8.jpg",
              "imageAlt": "Michelle P. - Satisfied bride"
            },
            {
              "id": "3",
              "name": "Amanda K.",
              "role": "Business Owner",
              "company": "Entrepreneur",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131592470-l9860w16.jpg",
              "imageAlt": "Amanda K. - Business client"
            },
            {
              "id": "4",
              "name": "Rachel D.",
              "role": "Teacher",
              "company": "Education Professional",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131593011-9z0fsrkc.jpg",
              "imageAlt": "Rachel D. - Happy teacher"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title={"Frequently Asked Questions"}
          description={"Everything you need to know about our nail care services"}
          tag={"FAQ"}
          tagIcon={HelpCircle}
          textboxLayout={"default"}
          imageSrc={"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763131593534-xbk916yf.jpg"}
          imageAlt={"Modern nail salon interior"}
          mediaPosition={"left"}
          animationType={"smooth"}
          faqs={[
            {
              "id": "1",
              "title": "How long does a typical manicure take?",
              "content": "A classic manicure usually takes 30-45 minutes, while gel manicures take about 60 minutes including drying time."
            },
            {
              "id": "2",
              "title": "How often should I get my nails done?",
              "content": "We recommend every 2-3 weeks for regular polish and 3-4 weeks for gel polish to maintain healthy, beautiful nails."
            },
            {
              "id": "3",
              "title": "Do you use sterilized equipment?",
              "content": "Absolutely! We follow strict sanitation protocols and use hospital-grade sterilization for all our tools and equipment."
            },
            {
              "id": "4",
              "title": "Can I bring my own nail polish?",
              "content": "Yes, you're welcome to bring your own polish. We also have an extensive collection of premium colors to choose from."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag={"Book Now"}
          tagIcon={Calendar}
          title={"Ready for Beautiful Nails?"}
          description={"Schedule your appointment today and experience the difference our professional nail care services can make"}
          inputPlaceholder={"Enter your email"}
          buttonText={"Book Appointment"}
          termsText={"By booking an appointment, you agree to our terms and conditions. We respect your privacy."}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText={"Blush Nail Studio"}
          columns={[
            {
              "items": [
                {
                  "label": "About Us",
                  "href": "about"
                },
                {
                  "label": "Our Services",
                  "href": "services"
                },
                {
                  "label": "Pricing",
                  "href": "pricing"
                }
              ]
            },
            {
              "items": [
                {
                  "label": "Meet Our Team",
                  "href": "team"
                },
                {
                  "label": "Contact Us",
                  "href": "contact"
                },
                {
                  "label": "Book Appointment",
                  "href": "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}