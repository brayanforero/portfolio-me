function End (): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className="flex items-center justify-center py-32 text-xl fadeIn">
      <p>Brayan Forero {year}</p>
    </footer>
  )
}

export default End
