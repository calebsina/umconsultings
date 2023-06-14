import "../styles/fonts/icomoon/style.css";
import "../styles/fonts/flaticon/font/flaticon.css";
import "../styles/css/tiny-slider.css";
// import "../styles/css/aos.css";
import "../styles/css/flatpickr.min.css";
import "../styles/css/glightbox.min.css";
import "../styles/css/style.css";

import { Link, usePage } from "@inertiajs/react";

// const { url } = usePage();
export default function Navbar(props) {

    const local = usePage().props.locale;
    // const lang = usePage().props.locale;

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
                            <div className="col-6 col-lg-3" >
                                <Link
                                    href="/"
                                    className="logo m-0 float-start"
                                >
                                    U&amp;M consulting
                                </Link>
                            </div>
                            <div className="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
                                <ul className="js-clone-nav  text-center site-menu p-0 m-0">
                                    <li>
                                        <Link href={local == 'fr' ? '/fr' : '/'} >{local == 'fr' ? 'Acceuil' : 'Home'}</Link>
                                    </li>
                                    <li>
                                        <Link href={local == 'fr' ? '/fr/about' : '/about'}>{local == 'fr' ? 'À propos' : 'About Us'}</Link>
                                    </li>
                                    <li >
                                        <Link href={local == 'fr' ? '/fr/services' : '/services'}>
                                        {local == 'fr' ? 'services' : 'services'}
                                        </Link>
                                    </li>
                                    <li >
                                        <Link href={local =='fr' ? '/fr/blogs' : '/blogs'}>{local == 'fr' ? 'Blog' : 'Blog'}</Link>
                                    </li>

                                    {/* <select className="has-children">
                                    <option><Link href="/lang/en">English</Link></option>
                                    <option><Link href="/lang/fr">Francais</Link></option>
                                    </select> */}
                                    
                                    <li className="has-children">
                                        <Link href="/language/en">English</Link>
                                        <ul className="dropdown">
                                            <li>
                                            <Link href="/language/fr">Francais</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-3 text-lg-end">
                                <ul className="js-clone-nav d-none d-lg-inline-block text-end site-menu">
                                    <li className="cta-button">
                                        <Link href={local == 'fr' ? '/fr/contact' : '/contact'}>
                                            {local == 'fr' ? 'Contactez-nous' : 'Contact Us'}
                                        </Link>
                                    </li>
                                </ul>
                                <Link
                                    href="#"
                                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                                    data-toggle="collapse"
                                    data-target="#main-navbar"
                                >
                                    <span />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
