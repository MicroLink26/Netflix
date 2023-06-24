const Section = (props) => {
  const { category, images } = props.category;
  return (
    <section>
      <h2>{category}</h2>
      {images.map((image) => (
        <img src={image} />
      ))}
    </section>
  );
};

export default Section;
