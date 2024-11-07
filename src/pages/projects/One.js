import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

const Zero = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Lenovo";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
      <div className='lenovo-section-one'>
        <h1>Lenovo Hero Stories</h1>
        <p className='color uncap'>"Again, thank you so much for jumping on board last minute, doing the work and getting it to a level that our clients love"</p>
        <p className='uncap'>
          I was brought onto the team at Lenovo to work on a marketing campaign and ultimately to produce a series of content for Lenovo Australia and New Zealand, to leverage the power of omni-channel video content-driven marketing to connect with consumers on a one-to-one basis, using hero stories to build emotional connections that drive engagement and advocacy. <br /> <br />
          Each project in this category showcases and celebrates Lenovo's newfound partnership with various creators, demonstrating the power of technology in enabling creativity and the ability to push boundaries.
        </p>
        <iframe src="https://www.youtube.com/embed/EXdlcKyY8Ts" title='Ngarino' frameBorder="0" allowFullScreen style={{ width: "100%", height: "800px", marginBottom: "20px" }}></iframe>
        <p className='uncap'>Blending ancient knowledge and modern technology for healing. "Well-being is important in order for us to nourish and flourish in this world of abundance. To expand the intention of your given purpose, it needs to be relatable to the demographic – in this day and age, everyone is on technology," as stated by the founder of Māori movement, Ngarino Te Waati, in Lenovo's highly progressive, impactful, content-driven social media campaign delivering a strong branding message with an impactful hero story from the Māori community.</p>
        <iframe src="https://www.youtube.com/embed/zza3W9dt0S8" title='Kat Young' frameBorder="0" allowFullScreen style={{ width: "100%", height: "800px", marginBottom: "20px" }}></iframe>
        <p className='uncap'>Katrina Young is an Australian artist and illustrator. Her artwork spans many mediums and themes, but at its heart, Kat's work aims to tell a story. With Kat now joining the team at Lenovo, the motivation to create media to introduce Kat was brought to the table.</p>
        <iframe src="https://www.youtube.com/embed/YnA65TkdYWQ" title='Kirsten Banks' frameBorder="0" allowFullScreen style={{ width: "100%", height: "800px", marginBottom: "20px" }}></iframe>
        <p className='uncap'>Kirsten Banks is an Indigenous Australian astrophysicist and science communicator who breaks barriers and forges new paths in the world of STEM. With a newfound collaboration between tech giants Lenovo and Kirsten, Lenovo wanted to showcase and introduce her to their audience. I was brought onto the team to work on and produce a series of media to showcase and introduce Kirsten.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Zero;
