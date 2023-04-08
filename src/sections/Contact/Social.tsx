interface Props {
  url: string
  name: string
  children: React.ReactNode
}

function Social ({ url, children }: Props): JSX.Element {
  return (
    <a href={url} target="_blank" className="Contact-social" rel="noreferrer">
      {children}
    </a>
  )
}

export default Social
