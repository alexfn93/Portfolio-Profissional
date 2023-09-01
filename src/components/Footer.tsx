export default function Footer() {
  return (
    <div className="container mx-auto flex max-w-4xl p-4 text-sm">
      <p className="flex-grow">
        &copy; {new Date().getFullYear()} &middot; Todos os direitos reservados.
      </p>
      <ul className="flex flex-nowrap gap-2">
        <p>Minhas redes sociais</p>
        <li>
          <a href="https://www.youtube.com/@AlexFernandesDev" target="_blank" className="profile__social-link">
            <i className="ri-youtube-line"></i>
          </a>
        </li>
        <li className="text-gray-500">&middot;</li>
        <li>
          <a href="https://www.linkedin.com/in/alexfernandes-fullstack/" target="_blank" className="profile__social-link">
            <i className="ri-linkedin-box-line"></i>
          </a>
        </li>
        <li className="text-gray-500">&middot;</li>
        <li>
          <a href="https://github.com/alexfn93" target="_blank" className="profile__social-link">
            <i className="ri-github-line"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
