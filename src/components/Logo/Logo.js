import React from 'react';


const Logo = ({ src, alt }) => {
  {console.log(src)}
  return(
 
   <img src={src} alt={alt} style={{ maxWidth: '70%', height: 'auto' }} />

  )
};

// Logo.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired
// };

export default Logo;
