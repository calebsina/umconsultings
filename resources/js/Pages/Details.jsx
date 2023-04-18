import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import hero_2 from "../styles/images/hero_2.jpg";
import person_1 from "../styles/images/person_1.jpg";
import gal_1 from "../styles/images/gal_1.jpg";


export default function Details(props) {
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
                                <p>
                                    By <a href="#">{props.details.author}</a> on{" "}
                                    {/* {props.details.created_at} */}
                                    <a href="#">{props.details.publishedon}</a>
                                </p>
                                <h1 className="heading" data-aos="fade-up">
                                    {props.details.en_title}
                                </h1>
                                <p data-aos="fade-up">
                                    {props.details.en_descr}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 blog-content pe-5">
                                <p className="lead">{props.details.title}</p>
                                <p>{props.details.en_descr}</p>
                                <blockquote>
                                    <p>{props.details.en_content_1}</p>
                                </blockquote>

                                <blockquote>
                                    <p>{props.details.en_content_2}</p>
                                </blockquote>
                                <p>{props.details.en_content_3}</p>
                                <p>{props.details.en_content_4}</p>
                                <div className="pt-5">
                                    <p>
                                        Categories: <a href="#">Design</a>,{" "}
                                        <a href="#">Events</a> Tags:{" "}
                                        <a href="#">#html</a>,{" "}
                                        <a href="#">#trends</a>
                                    </p>
                                </div>

                            </div>
                            <div className="col-md-4 sidebar">
                                
                                <div className="sidebar-box">
                                    {/* <div className="categories">
                                        <h3>Categories</h3>
                                        <li>
                                            <a href="#">
                                                Creatives <span>(12)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                News <span>(22)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Design <span>(37)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                HTML <span>(42)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Web Development{" "}
                                                <span>(14)</span>
                                            </a>
                                        </li>
                                    </div> */}
                                </div>
                                <div className="sidebar-box">
                                    <img
                                        src={gal_1}
                                        alt="About the author"
                                        className="img-fluid mb-4 w-50 rounded-circle"
                                    />
                                    <h3 className="text-black">
                                        About The Author
                                    </h3>
                                    <p>
                                        Even the all-powerful Pointing has no
                                        control about the blind texts it is an
                                        almost unorthographic life One day
                                        however a small line of blind text by
                                        the name of Lorem Ipsum decided to leave
                                        for the far World of Grammar.
                                    </p>
                                    <p>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-md text-white"
                                        >
                                            Read More
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
}
