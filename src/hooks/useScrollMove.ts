import { useRef, useEffect } from 'react'

function useScrollMove() {
  const rootRef = useRef<Element | null>()
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault()

    if (e.currentTarget.dataset.section === 'go')
      return rootRef.current?.scrollTo({ top: 0 })

    const elementToScreen = document.getElementById(
      e.currentTarget.dataset.section
    )
    const offsetXValue = elementToScreen?.offsetTop || 0
    rootRef.current?.scrollTo({ top: offsetXValue * 0.9 })
  }

  useEffect(() => {
    rootRef.current = document.getElementById('root')
  }, [])

  return {
    move: handleScroll,
  }
}

export default useScrollMove
