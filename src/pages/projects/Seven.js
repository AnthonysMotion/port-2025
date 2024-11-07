import React, { useEffect } from 'react';
import Footer from '../../components/Footer';

const Seven = () => {
  useEffect(() => {
    document.title = "Anthony Thach | Photography";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    /* japan */
    "https://live.staticflickr.com/65535/54122729496_4364db69ce_k.jpg",
    "https://live.staticflickr.com/65535/54123003788_0e4602028c_k.jpg",
    "https://live.staticflickr.com/65535/54121880587_0ef3b83202_k.jpg",
    "https://live.staticflickr.com/65535/54122723006_90d91a7078_k.jpg",
    "https://live.staticflickr.com/65535/54123186885_1426b10771_k.jpg",
    "https://live.staticflickr.com/65535/54121875302_d6d01994fc_k.jpg",
    "https://live.staticflickr.com/65535/54123060894_84734942d6_k.jpg",
    "https://live.staticflickr.com/65535/54122998053_1673a4c6e7_k.jpg",
    "https://live.staticflickr.com/65535/54123181470_f4a477742b_k.jpg",
    "https://live.staticflickr.com/65535/54122998293_d23ab60315_k.jpg",
    "https://live.staticflickr.com/65535/54123000203_6ebbe507ae_k.jpg",
    "https://live.staticflickr.com/65535/54122999398_20e93bc133_k.jpg",
    "https://live.staticflickr.com/65535/54123184855_bdf03d90a1_k.jpg",
    "https://live.staticflickr.com/65535/54123064099_1305f64fe5_k.jpg",
    "https://live.staticflickr.com/65535/54121879502_16300770df_k.jpg",
    "https://live.staticflickr.com/65535/54122729086_99502a4072_k.jpg",
    "https://live.staticflickr.com/65535/54123185925_8c292a690a_k.jpg",
    /* queenstown */
    "https://live.staticflickr.com/65535/54123182245_e400f7196b_k.jpg",
    "https://live.staticflickr.com/65535/54121876952_1b4e823f04_k.jpg",
    "https://live.staticflickr.com/65535/54121875777_467e942c8e_k.jpg",
    "https://live.staticflickr.com/65535/54123186415_6218617f57_k.jpg",
    "https://live.staticflickr.com/65535/54122725886_820b8d0b0b_k.jpg",
    "https://live.staticflickr.com/65535/54122726616_95d97f7413_k.jpg",
    "https://live.staticflickr.com/65535/54123182895_e9468bd43f_k.jpg",
    /* yeah */
    "https://live.staticflickr.com/65535/54122725366_843fd2620d_k.jpg",
    "https://live.staticflickr.com/65535/54121877412_e752c88dcc_k.jpg",
    "https://live.staticflickr.com/65535/54121876032_58edef7902_k.jpg",
    "https://live.staticflickr.com/65535/54122997248_135f61b26c_k.jpg"
  ];

  const numColumns = 4;
  const columns = Array.from({ length: numColumns }, () => []);

  images.forEach((image, index) => {
    columns[index % numColumns].push(image);
  });
  return (
    <div className='container'>
      <div className='photo-grid'>
        <div className="photo-grid-row">
          {columns.map((column, colIndex) => (
            <div className="photo-grid-column" key={colIndex}>
              {column.map((src, imgIndex) => (
                <img src={src} alt={`img-${imgIndex}`} key={imgIndex} />
              ))}
            </div>
          ))}
        </div>
        <h2 style={{ "padding-top": "2rem" }}>These images were shot on:</h2>
        <ul>
          <li>Canon EOS R10</li>
          <li>Canon EOS 60D</li>
          <li>Kodak Ektar H35</li>
          <br />
          <li>Sigma 50mm f1.4</li>
          <li>Canon 18-135mm f3.5 - 5.6</li>
          <li>Canon 18-45mm f.4.5 - 6.3</li>
        </ul>
      </div>
      <Footer />
      <style>
        {`
          .photo-grid {
            padding: 2rem;
            padding-top: 4rem;
          }

          .photo-grid-row {
            display: flex;
            flex-wrap: wrap;
            padding: 0 4px;
          }

          .photo-grid-column {
            flex: 15%;
            padding: 0 4px;
          }

          .photo-grid-column img {
            margin-top: 8px;
            width: 100%;
            vertical-align: middle;
          }
        `}
      </style>
    </div>
  );
};

export default Seven;