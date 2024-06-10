import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaLinkedin, FaGoodreadsG } from 'react-icons/fa'
import { TbMailFilled } from 'react-icons/tb'

export default {
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time> {new Date().getFullYear()} </time> © Akshat Talapa.
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
      <a href="mailto:example@email.com">
        <TbMailFilled />
      </a>
      <a href="https://github.com/sirius-27">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com">
        <FaGoodreadsG />
      </a>
      <a href="https://github.com/sirius-27">
        <FaGithub />
      </a>
      <a href="https://twitter.com">
        <FaXTwitter />
      </a>
    </small>
  )
}
