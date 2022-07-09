import "./featureCard.css";

// link address: https://t3.ftcdn.net/jpg/05/04/58/54/240_F_504585449_mn2TyFGZwglrhOmgI1AcBjlkebjxgEQL.jpg

export const FeatureCard = ({ title, description, imgUrl }) => {
  return (
    // <section className="feature">
    // <section
    //   style={{
    //     backgroundColor: "red",
    //   }}
    // >
    <div className="proj-imgbx">
      {/* <div
        style={{
          backgroundImage: `url({ imgUrl })`,
          backgroundSize: "stretch",
        }}
      > */}
      <img
        src={imgUrl}
        style={{
          backgroundSize: "stretch",
        }}
      />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span> {description}</span>
      </div>
    </div>
    // </section>
  );
};
