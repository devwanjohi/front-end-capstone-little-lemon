import restaurantChefs from "../assets/images/Mario and Adrian b.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import React from "react";

const About = () => {
  return (
    <>
      <section>
        <div className="container mt-5 horizontal-line">
          <div className="row">
            <div className="col-md-6">
              <h4>Little Lemon</h4>
              <h5>Chicago</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
                ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
                massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
                condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
                accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
                lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
                hendrerit consequat. In dictum ligula in elit euismod malesuada.
                Curabitur varius augue id tempus ultricies. Mauris suscipit porta
                odio, et pretium nibh scelerisque ut.
              </p>
            </div>
            <div className="col-md-6">
              <div className="about-imgs">
                <img id="chefs" src={restaurantChefs} alt="male owner" />
                <img id="restaurant" src={restaurant} alt="female owner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;