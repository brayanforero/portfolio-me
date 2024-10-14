import useTransparency from "@hooks/utilities/useTransparency"



function Header() {
  const { headerRef, isFar } = useTransparency({ distance: 100 })
  const classEffect = isFar ? 'backdrop-blur-sm bg-purple-400/10 outline-purple-500'
    : 'backdrop-blur-0 bg-purple-300/0 outline-purple-500/0'
  return (
    <nav ref={headerRef} className={`fixed top-4 left-0 right-0 z-10 flex items-center justify-center p-3 transition-colors w-[20rem] md:w-[26.25rem] gap-4 md:gap-6 mx-auto text-base md:text-lg font-semibold rounded-full outline-1 outline ${classEffect}`}>
      <a className="transition-colors hover:text-purple-500" href="#top">Inicio {isFar}
      </a>
      <a className="hover:text-purple-500" href="#experience">Experiencia</a>
      <a className="hover:text-purple-500" href="#projects">Proyectos</a>
      <a className="hover:text-purple-500" href="#me">Sobre Mi</a>
    </nav>
  )
}

export default Header