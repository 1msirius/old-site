import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaLinkedin, FaGoodreadsG } from 'react-icons/fa'
import { TbMailFilled } from 'react-icons/tb'

export default {
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time> © {new Date().getFullYear()} </time> Akshat.
      <style jsx>{`
        a {
          float: right;
          margin-left: 1rem;
          font-size: 18px;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <a href="mailto:akshattalapa27@gmail.com" target="_blank">
        <TbMailFilled />
      </a>
      <a href="https://www.linkedin.com/in/akshattalapa/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://www.goodreads.com/akshattalapa" target="_blank">
        <FaGoodreadsG />
      </a>
      <a href="https://github.com/sirius-27" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com" target="_blank">
        <FaXTwitter />
      </a>
    </small>
  )
}
