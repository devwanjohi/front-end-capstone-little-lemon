import footer_logo from '../assets/images/footer_logo.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3 horizontal-line">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img src={footer_logo} className="footer-logo" alt="Logo" />
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
              <p>
                <a href="#" className="text-reset text-decoration-none">Home</a>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">About</a>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">Reservations</a>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">Order Online</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>New York, NY 10012, US</p>
              <p>info@example.com</p>
              <p>+ 01 234 567 88</p>
              <p>+ 01 234 567 89</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
              <p>
                <a href="#" className="text-reset text-decoration-none">Instagram</a>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">Facebook</a>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">Twitter</a>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">LinkIn</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">© 2023 Copyright: <a href="#" className="text-reset text-decoration-none fw-bold">Little Lemon</a></div>
    </footer>
  );
}

export default Footer;