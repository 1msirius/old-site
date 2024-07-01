import React from 'react';
import { FaXTwitter, FaGithub, FaLinkedin, FaGoodreadsG, FaSpotify } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';

const YEAR = new Date().getFullYear();

const SocialLink = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon />
  </a>
);

const SocialLinks = () => (
  <div className="flex text-lg gap-3.5 float-right">
    <SocialLink href="https://x.com/1msirius_" icon={FaXTwitter} />
    <SocialLink href="https://github.com/1msirius" icon={FaGithub} />
    <SocialLink href="https://www.goodreads.com/akshattalapa" icon={FaGoodreadsG} />
    <SocialLink href="https://open.spotify.com/user/31cscbv4s256ppqweoixud5hxq6q?si=135e0066f0574c33" icon={FaSpotify} />
    <SocialLink href="https://www.linkedin.com/in/akshattalapa/" icon={FaLinkedin} />
    <SocialLink href="mailto:akshattalapa27@gmail.com" icon={TbMailFilled} />
  </div>
);

const Footer = () => (
  <small className="block mt-32">
    <time>© {YEAR}</time>{' '}
    <a className="no-underline" href="https://x.com/1msirius_" target="_blank" rel="noopener noreferrer">
      Sirius.
    </a>
    <style jsx>{`
      @media screen and (max-width: 480px) {
        article {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
      }
    `}</style>
    <SocialLinks />
  </small>
);

export default Footer;