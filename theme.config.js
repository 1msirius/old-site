import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";

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
        <AiOutlineMail />
      </a>
      <a href="https://twitter.com">
        <FaXTwitter />
      </a>
      <a href="https://github.com/sirius-27">
        <FaGithub />
      </a>
    </small>
  )
  
}
