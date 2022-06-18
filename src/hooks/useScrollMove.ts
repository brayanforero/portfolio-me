import React, { useRef, useEffect } from 'react'

function useScrollMove(handleHideNav?: CallableFunction) {
  const rootRef = useRef<Element | null>()
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault()

    if (typeof handleHideNav !== 'undefined') {
      handleHideNav(false)
    }
    const [sectionName] = e.currentTarget.id.split('-')

    if (sectionName === 'go') return rootRef.current?.scrollTo({ top: 0 })

    const offset = document.getElementById(sectionName)?.offsetTop || 0
    rootRef.current?.scrollTo({ top: offset * 0.95 })
  }

  useEffect(() => {
    rootRef.current = document.getElementById('root')
  }, [])

  return {
    move: handleScroll,
  }
}

export default useScrollMove
