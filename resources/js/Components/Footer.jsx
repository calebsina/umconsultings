import "../styles/js/bootstrap.bundle.min";
import "../styles/js/tiny-slider";
// import "../styles/js/aos";
import "../styles/js/navbar";
import "../styles/js/counter";
import "../styles/js/rellax";
import "../styles/js/flatpickr";
import "../styles/js/glightbox.min";
// import "../styles/js/custom";



import { Link } from '@inertiajs/react';
export default function Footer(){
    return (
        <>
        <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="widget">
                <h3>
                  U&amp;M consulting<span className="text-primary">.</span>{" "}
                </h3>
                <p>
                  we are the number one in providing one-stop study abroad solutions
                  for students and help them achieve their goals through proper career
                  counseling &amp; guidance.
                </p>
              </div>{" "}
              {/* /.widget */}
              <div className="widget">
                <h3>Connect</h3>
                <ul className="list-unstyled social">
                  <li>
                    <Link href="#">
                      <span className="icon-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-pinterest" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="icon-dribbble" />
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>{" "}
            {/* /.col-lg-3 */}
            <div className="col-lg-2 ml-auto">
              <div className="widget">
                <h3>Links</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/blog">News</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>{" "}
            {/* /.col-lg-3 */}
            <div className="col-lg-2">
              <div className="widget">
                <h3>Company</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/blog">News</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>{" "}
            {/* /.col-lg-3 */}
            <div className="col-lg-3">
              <div className="widget">
                <h3>Contact</h3>
                <address>Bamenda , Commercial Avenue </address>
                <ul className="list-unstyled links mb-4">
                  <li>
                    <Link href="tel://+237679646336,">+237 679 64 63 36,</Link>
                  </li>
                  <li>
                    <Link href="tel:+237699663533">+237 699 66 35 33</Link>
                  </li>
                  <li>
                    <Link href="mailto:info@mydomain.com">info@mydomain.com</Link>
                  </li>
                </ul>
              </div>{" "}
              {/* /.widget */}
            </div>{" "}
            {/* /.col-lg-3 */}
          </div>{" "}
          {/* /.row */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="mb-0">Copyright ©. All Rights Reserved. </p>
            </div>
          </div>{" "}
          {/* /.container */}
        </div>{" "}
        {/* /.site-footer */}
     
      </div>
      
      </>
    );
}