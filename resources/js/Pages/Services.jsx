import hero_2 from "../styles/images/hero_2.jpg";
import svg01 from "../styles/images/svg/01.svg";
import svg02 from "../styles/images/svg/02.svg";
import svg03 from "../styles/images/svg/03.svg";
import svg04 from "../styles/images/svg/04.svg";

import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function Services(props) {
    return (
        <>
            <Guest>
                <div className="hero overlay">
                    <div className="img-bg rellax">
                        <img src={hero_2} alt="Image" className="img-fluid" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-lg-5">
                                <h1 className="heading" data-aos="fade-up">
                                    Services
                                </h1>
                                <p className="mb-5" data-aos="fade-up">
                                    We match student’s abilities, performance,
                                    and desires with the best possible career
                                    options.
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

                {/* Services section */}
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 mb-4 mb-lg-0">
                                <div
                                    className="heading-content"
                                    data-aos="fade-up"
                                >
                                    <h2>
                                        Our{" "}
                                        <span className="d-block">
                                            Services
                                        </span>
                                    </h2>
                                    <p>
                                        To be the number one in providing
                                        one-stop study abroad solutions for
                                        students and help them achieve their
                                        goals through proper career counseling
                                        &amp; guidance, to add value for our
                                        partner institutions and stakeholders.
                                    </p>
                                    <p
                                        className="my-4"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        <Link
                                            href="/service"
                                            className="btn btn-primary"
                                        >
                                            View All
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    {props.services.map((item) => (
                                        <div
                                            key={item.id}
                                            className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                                            data-aos="fade-up"
                                            data-aos-delay={100}
                                        >
                                            <div className="service-1">
                                                <span className="icon">
                                                    <img
                                                        src={svg01}
                                                        alt="Image"
                                                        className="img-fluid"
                                                    />
                                                </span>
                                                <div>
                                                    <h3>{item.en_title}</h3>
                                                    <p>{item.en_des}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
}
