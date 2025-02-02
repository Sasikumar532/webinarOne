import React, { useState, useEffect } from 'react';

// This component will handle lazy loading of images
const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <img
      src={loaded ? src : ''}
      alt={alt}
      className={className}
      style={{ opacity: loaded ? 1 : 0 }}
      loading="lazy" // Lazy load attribute for modern browsers
    />
  );
};

export default LazyImage;
