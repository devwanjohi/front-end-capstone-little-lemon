import bruchetta from "../assets/images/bruchetta.svg";
import salad from "../assets/images/greek-salad1.jpg";
import dessert from "../assets/images/lemon-dessert1.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Specials() {
  return (
    <>
      <div className="specials">
        <div className="specials-head">
          <h3>Specials</h3>

          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="container specials-con">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={salad} className="card-img-top" alt="Salad"/>
              <div className="card-body">
                <h5 className="card-title">Greek Salad</h5>
                <p className="card-text">
                  The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
                <button id="button" type="button" className="btn">Order Delivery</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={bruchetta} className="card-img-top" alt="Salad"/>
              <div className="card-body">
                <h5 className="card-title">Bruschetta</h5>
                <p className="card-text">
                  Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.
                </p>
                <button id="button" type="button" className="btn">Order Delivery</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={dessert} className="card-img-top" alt="Salad"/>
              <div className="card-body">
                <h5 className="card-title">Lemon Cake</h5>
                <p className="card-text">
                  This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
                <button id="button" type="button" className="btn">Order Delivery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Specials;