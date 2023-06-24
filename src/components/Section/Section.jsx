import "./Section.css";
const Section = (props) => {
  const { category, images } = props.category;
  return (
    <section>
      <h2>{category}</h2>
      <div>
        {images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </section>
  );
};

export default Section;
