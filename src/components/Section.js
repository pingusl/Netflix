const Section = (props) => {
  return (
    <div className="section">
      <div className="category">{props.category}</div>
      {props.arrayOfImages.map((item, index) => {
        return (
          <div className="image">
            <img src={item} id={index} />
          </div>
        );
      })}
    </div>
  );
};
export default Section;
