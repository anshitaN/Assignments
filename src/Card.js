import image1 from "./Images/ball dribble.png";
import image2 from "./Images/chai.png";
import image3 from "./Images/TRUCK-DRIBBLE.png";
import image4 from "./Images/land.png";
function Card(){
  return(
    <div className="card-blocks">
    <div className="Card">
      <div className="card-elem">
      <img className="card-img" src={image1} alt="" />
      <h3 className="card-title">Magic Ball</h3>
      <p className="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam error corporis culpa? Enim quae exercitationem earum, iusto quibusdam accusamus, hic dolor nam voluptate beatae animi? Impedit culpa magni quas sed!</p>
      <button className="card-btn">Read More</button>
      </div>
    </div>
    <div className="Card">
      <div className="card-elem">
      <img className="card-img" src={image2} alt="" />
      <h3 className="card-title">Chai Shai</h3>
      <p className="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam error corporis culpa? Enim quae exercitationem earum, iusto quibusdam accusamus, hic dolor nam voluptate beatae animi? Impedit culpa magni quas sed!</p>
      <button className="card-btn">Read More</button>
      </div>
    </div>
    <div className="Card">
      <div className="card-elem">
      <img className="card-img" src={image3} alt="" />
      <h3 className="card-title">Truck</h3>
      <p className="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam error corporis culpa? Enim quae exercitationem earum, iusto quibusdam accusamus, hic dolor nam voluptate beatae animi? Impedit culpa magni quas sed!</p>
      <button className="card-btn">Read More</button>
      </div>
    </div>
    <div className="Card">
      <div className="card-elem">
      <img className="card-img" src={image4} alt="" />
      <h3 className="card-title">Land</h3>
      <p className="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam error corporis culpa? Enim quae exercitationem earum, iusto quibusdam accusamus, hic dolor nam voluptate beatae animi? Impedit culpa magni quas sed!</p>
      <button className="card-btn">Read More</button>
      </div>
    </div>
    </div>
    
  );
}
export default Card;