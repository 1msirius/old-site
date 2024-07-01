import React from 'react';
import Footer from './components/footer';

const Head = ({ title }) => (
  <title>
    {title && title !== 'About' ? `${title} | Sirius` : 'Sirius'}
  </title>
);

export default {
  darkMode: true,
  head: Head,
  footer: <Footer />
};