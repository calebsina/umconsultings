import hero_2 from "../styles/images/hero_2.jpg";
import gal_1 from "../styles/images/gal_1.jpg";
import gal_2 from "../styles/images/gal_2.jpg";
import gal_3 from "../styles/images/gal_3.jpg";
import gal_4 from "../styles/images/gal_4.jpg";
import gal_5 from "../styles/images/gal_5.jpg";
import gal_6 from "../styles/images/gal_6.jpg";
import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

export default function Blog(props) {
    return (
        <>
            <Guest>
                <div className="hero overlay">
                    <div className="img-bg rellax">
                        <img src={hero_2} alt="Image" className="img-fluid" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center justify-content-start">
                            <div className="col-lg-6 mx-auto text-center">
                                <h1 className="heading" data-aos="fade-up">
                                    Blog
                                </h1>
                                <p className="mb-4" data-aos="fade-up">
                                    A small river named Duden flows by their
                                    place and supplies it with the necessary
                                    regelialia. It is a paradisematic country,
                                    in which roasted parts of sentences fly into
                                    your mouth.
                                </p>
                                <div data-aos="fade-up">
                                    <Link
                                        href="#"
                                        className="play-button glightbox3 w-100 text-center"
                                    >
                                        <div className="d-inline-flex align-items-center ">
                                            <span className="icon-button me-3">
                                                <span className="icon-play" />
                                            </span>
                                            <span className="caption">
                                                Watch Video
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                            {props.blog.data.map((item) => (
                                <div key={item.id}
                                    className="col-6 col-sm-6 col-md-6 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="media-entry">
                                        <Link href="/details/"{...item.id}>
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
                                                <Link href="/details/"{...item.id}>
                                                    {item.en_title}
                                                </Link>
                                            </h3>
                                            <p>{item.en_descr}</p>
                                            <Link
                                                href="/details/"{...item.id}
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
                            ))}
                        </div>
                    </div>
                </div>

                {/* paginator */}

                <nav
                    className="mt-5"
                    aria-label="Page navigation example"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <ul className="custom-pagination pagination">
                        <li className="page-item prev">
                            <Link className="page-link" href="#">
                                Previous
                            </Link>
                        </li>
                        {props.blog.links.map(items => 
                             <li key={items.label} className="page-item active">
                             <Link className="page-link" href={items.url}>
                                 {items.label}
                             </Link>
                         </li>
                            )}
                       
                        
                        <li className="page-item next">
                            <Link className="page-link" href="#">
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>


            </Guest>
        </>
    );
}
