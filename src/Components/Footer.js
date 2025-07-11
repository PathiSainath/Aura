import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0f1422] text-gray-300 text-center py-6 text-sm tracking-wide font-sans shadow-inner">
      © {new Date().getFullYear()} All rights reserved by Aura +
    </footer>
  );
}

export default Footer;
