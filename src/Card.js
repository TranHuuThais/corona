import "./App.css";
const Card = ({ image, title, title1, desc }) => {
  return (
    <div>
      <div className="items">
        <img src={image} class="img-fluid rounded-top" alt="" />
        <li>
          <h2>{title}</h2>
          <u>{title1}</u>
          <p>{desc}</p>
        </li>
      </div>
    </div>
  );
};
export default Card;
