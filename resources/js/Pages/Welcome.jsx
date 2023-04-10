import hero_1 from "../styles/images/hero_1.jpg";
import img_v_2 from "../styles/images/img_v_2.jpg";
import svg01 from "../styles/images/svg/01.svg";
import svg02 from "../styles/images/svg/02.svg";
import svg03 from "../styles/images/svg/03.svg";
import svg04 from "../styles/images/svg/04.svg";
import img_v_1 from "../styles/images/img_v_1.jpg";
import gal_1 from "../styles/images/gal_1.jpg";
import gal_2 from "../styles/images/gal_2.jpg";
import gal_3 from "../styles/images/gal_3.jpg";
import gal_4 from "../styles/images/gal_4.jpg";
import gal_5 from "../styles/images/gal_5.jpg";
import gal_6 from "../styles/images/gal_6.jpg";

// import img5 from "../styles/images/img-5.jpg";
// import img6 from "../styles/images/img-6.jpg";
// import img7 from "../styles/images/img-7.jpg";

import img_1 from "../styles/images/img_1.jpg";

import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function Welcome(props) {
    // service =

    return (
        <>
            <Guest>
                <Head title="U&M Consulting" />
                <div className="hero overlay">
                    <div className="img-bg rellax">
                        <img src={hero_1} alt="Image" className="img-fluid" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-lg-5">
                                <h1 className="heading" data-aos="fade-up">
                                    It's a Big World Out There, Go Explore
                                </h1>
                                <p className="mb-5" data-aos="fade-up">
                                    We match student abilities, performance, and
                                    desires with the best possible career
                                    options. .
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
                {/* <h2>Hello world</h2> */}
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

                {/* Services section */}
                <div className="section service-section-1">
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
                                    <div
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
                                                <h3>
                                                    {
                                                        props.services[0][
                                                            "en_title"
                                                        ]
                                                    }
                                                </h3>
                                                <p>
                                                    {
                                                        props.services[0][
                                                            "en_des"
                                                        ]
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <div className="service-1">
                                            <span className="icon">
                                                <img
                                                    src={svg02}
                                                    alt="Image"
                                                    className="img-fluid"
                                                />
                                            </span>
                                            <div>
                                                <h3>
                                                    {
                                                        props.services[1][
                                                            "en_title"
                                                        ]
                                                    }
                                                </h3>
                                                <p>
                                                    {
                                                        props.services[1][
                                                            "en_des"
                                                        ]
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        <div className="service-1">
                                            <span className="icon">
                                                <img
                                                    src={svg03}
                                                    alt="Image"
                                                    className="img-fluid"
                                                />
                                            </span>
                                            <div>
                                                <h3>
                                                    {
                                                        props.services[2][
                                                            "en_title"
                                                        ]
                                                    }
                                                </h3>
                                                <p>
                                                    {
                                                        props.services[2][
                                                            "en_des"
                                                        ]
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0"
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        <div className="service-1">
                                            <span className="icon">
                                                <img
                                                    src={svg04}
                                                    alt="Image"
                                                    className="img-fluid"
                                                />
                                            </span>
                                            <div>
                                                <h3>
                                                    {
                                                        props.services[3][
                                                            "en_title"
                                                        ]
                                                    }
                                                </h3>
                                                <p>
                                                    {
                                                        props.services[3][
                                                            "en_des"
                                                        ]
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div
                                className="col-lg-5 mb-4 mb-lg-0 order-lg-2"
                                data-aos="fade-up"
                            >
                                <img
                                    src={img_1}
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                            <div
                                className="col-lg-5"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h2 className="heading mb-4">
                                    Our Mission, Our Goals
                                </h2>
                                <p>
                                    To match the student’s abilities,
                                    performance, and desires with the best
                                    possible career options, To provide
                                    customized solutions to the students
                                    aspiring to study overseas,
                                </p>
                                <p>
                                    Strive for the organic growth of our
                                    organization through integrity, honesty,
                                    transparency and excellence.
                                </p>
                                <p
                                    className="my-4"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <Link href="#" className="btn btn-primary">
                                        Read more
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog  */}
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-12"
                                data-aos="fade-up"
                                data-aos-delay={0}
                            >
                                <h2 className="heading mb-5">Recent Posts</h2>
                            </div>
                        </div>
                        <div className="row align-items-stretch">
                            {props.blog.map((item) =>
                                 <div key={item.id}
                                 className="col-6 col-sm-6 col-md-6 col-lg-3"
                                 data-aos="fade-up"
                                 data-aos-delay={100}
                             >
                                 <div className="media-entry">
                                     <Link href="#">
                                         <img
                                             src={gal_1}
                                             alt="Image"
                                             className="img-fluid"
                                         />
                                     </Link>
                                     <div className="bg-white m-body">
                                         <span className="date">
                                             May 14, 2020
                                         </span>
                                         <h3>
                                             <Link href={`/details/${item.id}`}>
                                                 {item.en_title}
                                             </Link>
                                         </h3>
                                         <p>{item.en_des}</p>
                                         <Link
                                             href={`/details/${item.id}`}
                                             className="more d-flex align-items-center float-start"
                                         >
                                             <span className="label">
                                                 Read More
                                             </span>
                                             <span className="arrow">
                                                 <span className="icon-keyboard_arrow_right" />
                                             </span>
                                         </Link>
                                     </div>
                                 </div>
                             </div>
                            )}
                           
                         
                     
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <img
                                    src={img_v_2}
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                            <div
                                className="col-lg-5 mt-4 mt-lg-0"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <h2 className="heading mb-5">
                                    Frequently Asked <br /> Questions
                                </h2>
                                <div
                                    className="custom-accordion"
                                    id="accordion_1"
                                >
                                    <div className="accordion-item">
                                        <h2 className="mb-0">
                                            <button
                                                className="btn btn-link"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                How to download and register?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordion_1"
                                        >
                                            <div className="accordion-body">
                                                Far far away, behind the word
                                                mountains, far from the
                                                countries Vokalia and
                                                Consonantia, there live the
                                                blind texts. Separated they live
                                                in Bookmarksgrove right at the
                                                coast of the Semantics, a large
                                                language ocean.
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h2 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                How to create your paypal
                                                account?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordion_1"
                                        >
                                            <div className="accordion-body">
                                                A small river named Duden flows
                                                by their place and supplies it
                                                with the necessary regelialia.
                                                It is a paradisematic country,
                                                in which roasted parts of
                                                sentences fly into your mouth.
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h2 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                How to link your paypal and bank
                                                account?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordion_1"
                                        >
                                            <div className="accordion-body">
                                                When she reached the first hills
                                                of the Italic Mountains, she had
                                                a last view back on the skyline
                                                of her hometown Bookmarksgrove,
                                                the headline of Alphabet Village
                                                and the subline of her own road,
                                                the Line Lane. Pityful a
                                                rethoric question ran over her
                                                cheek, then she continued her
                                                way.
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h2 className="mb-0">
                                            <button
                                                className="btn btn-link collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                We are better than others?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordion_1"
                                        >
                                            <div className="accordion-body">
                                                When she reached the first hills
                                                of the Italic Mountains, she had
                                                a last view back on the skyline
                                                of her hometown Bookmarksgrove,
                                                the headline of Alphabet Village
                                                and the subline of her own road,
                                                the Line Lane. Pityful a
                                                rethoric question ran over her
                                                cheek, then she continued her
                                                way.
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* .accordion-item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5 bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 text-center mb-3 mb-lg-0 text-lg-start">
                                <h3 className="text-white m-0">
                                    Begin your adventurous journey here.
                                </h3>
                            </div>
                            <div className="col-lg-5 text-center text-lg-end">
                                <Link
                                    href="#"
                                    className="btn btn-outline-white"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
}
