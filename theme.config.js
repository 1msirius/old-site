import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub, FaLinkedin, FaGoodreadsG, FaSpotify } from 'react-icons/fa'
import { TbMailFilled } from 'react-icons/tb'
const YEAR = new Date().getFullYear()

export default {
  darkMode: true,
  head: ({ title }) => (
    <>
      <title>
        {title ? (title !== 'About' ? title + ' | Sirius' : 'Sirius') : 'Sirius'}
      </title>
    </>
  ),
  footer: (
    <small className="block mt-32">
      <time>
        
        © {YEAR}{' '}
      </time>{' '}
      <a className="no-underline" href="#" target="_blank">
        {' '}
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
      <div className="flex text-lg gap-3.5 float-right">
        <a href="https://twitter.com" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://github.com/sirius-27" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.goodreads.com/akshattalapa" target="_blank">
          <FaGoodreadsG />
        </a>
        <a
          href="https://open.spotify.com/user/31cscbv4s256ppqweoixud5hxq6q?si=135e0066f0574c33"
          target="_blank"
        >
          <FaSpotify />
        </a>
        <a href="https://www.linkedin.com/in/akshattalapa/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailto:akshattalapa27@gmail.com" target="_blank">
          <TbMailFilled />
        </a>
      </div>
    </small>
  )
}
