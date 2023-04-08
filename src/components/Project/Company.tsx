
const Company: React.FC<{ name: string }> = ({ name }) => {
  return (
    <p className="Project-company">
      <i className="text-xl bx bxs-buildings"></i>
      {` ${name}`}
    </p>
  )
}

export default Company
