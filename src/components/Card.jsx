const Card = (props) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <img className="w-100" src={props.film.Poster} alt="" />
    </div>
  );
};

export default Card;
