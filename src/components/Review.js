
const Review = ({id, name, image, job, text}) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>

      <div className="container-down">
        <h4>{name} </h4>
        <h3>{job} </h3>
        <p className="info">{text} </p>
      </div>
    </div>
  )
}

export default Review;