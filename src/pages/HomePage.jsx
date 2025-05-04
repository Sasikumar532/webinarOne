import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutCourses from '../components/AboutCourses';
import NumberHighlights from '../components/NumberHighlights';
import FacultySection from '../components/FacultySection';
import ProgramSection from '../components/ProgramSection';
import ParticipationSection from '../components/ParticipationSection';
import PartnerLogos from '../components/PartnerLogos';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import MasonryGallery from '../components/MasonryGallery';
import DifferenceSection from '../components/DifferenceSection';
import CourseProgram from '../components/CourseProgram';
import CoursePurpose from '../components/CoursePurpose';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactUs from '../components/ContactUs'

const HomePage = () => {
  return <div>
    <HeroSection/>
    <AboutCourses/>
    <DifferenceSection/>
    <ProgramSection/>
    <CourseProgram/>
    <FacultySection/>
    <MasonryGallery/>
    <CoursePurpose/>
    <PartnerLogos/>
    <ContactSection/>
    <ContactUs/>
    
  </div>;
};

export default HomePage;
