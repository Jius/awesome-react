export const Joke = ({ value, icon_url }) => {
  return (
    <div className="content">
      <img src={icon_url} className="chuck" />
      <blockquote>{value}</blockquote>
    </div>
  )
}