import React from 'react';
import tw from 'twin.macro';

const Footer = () => {
  return (
    <footer css={tw`bg-gray-100 py-8`}>
      <div css={tw`container mx-auto`}>
        This project is maintained by xxx. View the repo on Github.
      </div>
    </footer>
  );
};

export default Footer;
