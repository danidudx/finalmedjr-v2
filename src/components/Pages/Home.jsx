import React from 'react';
import Hero from '../Hero';
import AboutSection from '../Section/AboutSection';
import BrandsSection from '../Section/BrandsSection';
import Banner from '../Section/BannerSection';
import Section from '../Section';
import FeaturesSection from '../Section/FeaturesSection';
import TestimonialSection from '../Section/TestimonialSection';
import BlogSection from '../Section/BlogSection';
import AppointmentSection from '../Section/AppointmentSection';
import FaqSection from '../Section/FaqSection';
import AwardSection from '../Section/AwardSection';
import DepartmentSection from '../Section/DepartmentSection';
import { pageTitle } from '../../helpers/PageTitle';
import './home.css';

const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: ' Skin Health Assessment',
    subTitle:
      'Upload images, receive accurate skin disease detection, and connect with relevant specialists for personalized care and treatment.',
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Stress Relief Games',
    subTitle:
      'Engage in immersive games designed to alleviate stress, promote relaxation, and enhance mental well-being for a healthier lifestyle.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: ' Chatbot Support',
    subTitle: 'Access our ChatGPT-powered chatbot for friendly conversations, stress relief tips, and emotional support whenever you need it, 24/7.',
  },

  {
    iconSrc: '/images/home_1/respect.svg',
    title: 'Expert Blogs & Insights',
    subTitle:
      'Explore our comprehensive collection of blogs offering expert insights, health tips, and actionable advice for holistic well-being and self-care.',
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Doctor Directory',
    subTitle:
      'Find and connect with trusted healthcare professionals specializing in various skin conditions, ensuring personalized care and treatment plans for you.',
  },
];
/*const brandData = [
  { imgUrl: 'images/brand_1.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_2.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_3.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_4.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_5.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_7.png', imgAlt: 'Brand' },
  { imgUrl: 'images/brand_8.png', imgAlt: 'Brand' },
];*/
const faqData = [
  {
    title: 'How accurate is the skin disease detection feature?',
    content:
      ' Our advanced image recognition technology ensures high accuracy in identifying various skin conditions, backed by thorough algorithms and expert validation.',
  },
  {
    title: ' Can I trust the recommendations for doctors provided on the website?',
    content:
      'Absolutely! We carefully curate our database of healthcare professionals, ensuring they are qualified specialists with expertise in treating specific skin conditions.',
  },
  {
    title: 'Are the stress relief games effective?',
    content:
      'Yes, our stress relief games are designed based on psychological principles to promote relaxation and reduce stress levels effectively, providing a fun and therapeutic experience.',
  },
  {
    title: 'How can I access the chatbot for stress relief?',
    content:
      'Simply navigate to the chatbot section on our website or app, and you can start interacting with our ChatGPT-powered chatbot instantly, anytime you need support or a friendly conversation.',
  },
  {
    title: 'Can I contribute to the blog section?',
    content:
      'We welcome contributions from health experts, bloggers, and individuals passionate about promoting wellness. Please reach out to us to discuss potential collaboration opportunities.',
  },
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/post_1.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blogpage',
    socialShare: true,
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/post_2.jpeg',
    date: 'May 4, 2023',
    btnText: 'Learn More',
    href: '/blogpage',
    socialShare: true,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/post_3.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blogpage',
    socialShare: true,
  },
];



export default function Home() {
  pageTitle('Home');
  return (
    <>
      <Hero
        title="Empowering Wellness Explore, Connect, Thrive"
        subTitle=" Your Gateway to Health. Discover skin conditions, connect with specialists, destress with games, and explore insightful blogs for holistic well-being. Download our app now!"
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_img.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        infoList={[
          {
            bgUrl: "images/home_1/cta_bg.svg"
          },
        ]}
        btnText="Read More"
        btnUrl="/about"
      />
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Features" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl="/images/home_1/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="ProHealth"
          featureList={[
            {
              featureListTitle:
                'Our Vision and Values',
              featureListSubTitle:
                ' our mission is to revolutionize healthcare accessibility, empowering individuals to take charge of their well-being through innovative technology, expert guidance, and compassionate support.',
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
     

      {/* End Departments Section */}
      {/* Start Award Section */}
     
      {/* End Award Section */}
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Prioritize your well-being with MedJR where health meets convenience and empowerment."
        />
      </Section>
      {/* End Banner Section */}
      {/* Start Blog Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section>
      {/* End Blog Section */}
      {/* Start Appointment Section */}
     
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      {/*<Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section>*/}
      {/* End Brand Section */}
    </>
  );
}