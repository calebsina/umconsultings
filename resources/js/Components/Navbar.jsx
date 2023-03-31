import "../styles/fonts/icomoon/style.css";
import "../styles/fonts/flaticon/font/flaticon.css";
import "../styles/css/tiny-slider.css";
// import "../styles/css/aos.css";
import "../styles/css/flatpickr.min.css";
import "../styles/css/glightbox.min.css";
import "../styles/css/style.css";

import { Link } from "@inertiajs/react";
export default function Navbar() {
    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <nav className="site-nav mt-3">
                <div className="container">
                    <div className="site-navigation">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <Link
                                    href="index.html"
                                    className="logo m-0 float-start"
                                >
                                    U&amp;M consulting
                                </Link>
                            </div>
                            <div className="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
                                <ul className="js-clone-nav  text-center site-menu p-0 m-0">
                                    <li className="active">
                                        <Link href="index.html">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="about.html">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="services.html">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="blog.html">Blog</Link>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">Eng</a>
                                        <ul className="dropdown">
                                            <li>
                                                <Link href="#">Fre</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-3 text-lg-end">
                                <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu ">
                                    <li className="cta-button">
                                        <Link href="contact.html">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                                    data-toggle="collapse"
                                    data-target="#main-navbar"
                                >
                                    <span />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
