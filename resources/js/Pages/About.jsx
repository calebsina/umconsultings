import hero_1 from "../styles/images/hero_1.jpg";
import img_v_1 from "../styles/images/img_v_1.jpg";
import img_v_2 from "../styles/images/img_v_2.jpg";
import person_2 from "../styles/images/person_sq_1.jpg";
import person_3 from "../styles/images/person_sq_2.jpg";

import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function About(props) {
    return (
        <>
            <Guest>
                <div className="hero overlay">
                    <div className="img-bg rellax">
                        <img src={hero_1} alt="Image" className="img-fluid" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-lg-5">
                                <h1 className="heading" data-aos="fade-up">
                                    About Us
                                </h1>
                                <p className="mb-5" data-aos="fade-up">
                                    we are the number one in providing one-stop
                                    study abroad solutions for students and help
                                    them achieve their goals through proper
                                    career counseling &amp; guidance.
                                </p>
                                <div data-aos="fade-up">
                                    <Link
                                        href="#"
                                        className="play-button align-items-center d-flex glightbox3"
                                    >
                                        <span className="icon-button me-3">
                                            <span className="icon-play" />
                                        </span>
                                        <span className="caption">
                                            Watch Video
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section-2">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
                                <div className="image-stack mb-5 mb-lg-0">
                                    <div
                                        className="image-stack__item image-stack__item--bottom"
                                        data-aos="fade-up"
                                    >
                                        <img
                                            src={img_v_1}
                                            alt="Image"
                                            className="img-fluid rellax "
                                        />
                                    </div>
                                    <div
                                        className="image-stack__item image-stack__item--top"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                        data-rellax-percentage="0.5"
                                    >
                                        <img
                                            src={img_v_2}
                                            alt="Image"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-lg-1">
                                <div>
                                    <h2
                                        className="heading mb-3"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        Explore All Corners of The World With Us
                                    </h2>
                                    <p data-aos="fade-up" data-aos-delay={200}>
                                        The number one in providing one-stop
                                        study abroad solutions for students.
                                    </p>
                                    <p data-aos="fade-up" data-aos-delay={300}>
                                        help them achieve their goals through
                                        proper career counseling &amp; guidance,
                                        to add value for our partner
                                        institutions and stakeholders.
                                    </p>
                                    <p
                                        className="my-4"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        <a href="#" className="btn btn-primary">
                                            Read more
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-6 mx-auto text-center">
                                <div
                                    className="heading-content"
                                    data-aos="fade-up"
                                >
                                    <h2 className="heading">
                                        Meet Our Team of Experts
                                    </h2>
                                    <p>
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <Link href="#" className="person">
                                    <img
                                        src={person_3}
                                        alt="Image"
                                        className="img-fluid mb-4"
                                    />
                                    <span className="subheading d-inline-block">
                                        CEO, Co-Founder
                                    </span>
                                    <h3 className="mb-3">John Anderson</h3>
                                    <p className="text-muted">
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link href="#" className="person">
                                    <img
                                        src={person_2}
                                        alt="Image"
                                        className="img-fluid mb-4"
                                    />
                                    <span className="subheading d-inline-block">
                                        CEO, Co-Founder
                                    </span>
                                    <h3 className="mb-3">Jane Parkenson</h3>
                                    <p className="text-muted">
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link href="#" className="person">
                                    <img
                                        src={person_3}
                                        alt="Image"
                                        className="img-fluid mb-4"
                                    />
                                    <span className="subheading d-inline-block">
                                        CEO, Co-Founder
                                    </span>
                                    <h3 className="mb-3">Kelsey Gutierrez</h3>
                                    <p className="text-muted">
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-lg-3">
                                <Link href="#" className="person">
                                    <img
                                        src={person_2}
                                        alt="Image"
                                        className="img-fluid mb-4"
                                    />
                                    <span className="subheading d-inline-block">
                                        CEO, Co-Founder
                                    </span>
                                    <h3 className="mb-3">Matthew Madron</h3>
                                    <p className="text-muted">
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
}
