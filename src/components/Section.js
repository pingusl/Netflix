const Section = (props) => {
  return (
    <div className="section">
      <div className="category">{props.category}</div>
      <div className="carrousel">
        {props.arrayOfImages.map((item, index) => {
          return <img className="image" src={item} id={index} />;
        })}
      </div>
    </div>
  );
};
export default Section;
