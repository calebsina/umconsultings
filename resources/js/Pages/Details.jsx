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
                                <div className="pt-5">
                                    <h3 className="mb-5">6 Comments</h3>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img
                                                    src={gal_1}
                                                    alt="comment section"
                                                />
                                            </div>
                                            <div className="comment-body">
                                                <h3>Jacob Smith</h3>
                                                <div className="meta">
                                                    January 9, 2018 at 2:21pm
                                                </div>
                                                <p>
                                                    When she reached the first
                                                    hills of the Italic
                                                    Mountains, she had a last
                                                    view back on the skyline of
                                                    her hometown Bookmarksgrove,
                                                    the headline of Alphabet
                                                    Village and the subline of
                                                    her own road, the Line Lane.
                                                    Pityful a rethoric question
                                                    ran over her cheek, then she
                                                    continued her way.
                                                </p>
                                                <p>
                                                    <a
                                                        href="#"
                                                        className="reply"
                                                    >
                                                        Reply
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img
                                                    src={person_1}
                                                    alt="comment"
                                                />
                                            </div>
                                            <div className="comment-body">
                                                <h3>Chris Meyer</h3>
                                                <div className="meta">
                                                    January 9, 2018 at 2:21pm
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Pariatur quidem
                                                    laborum necessitatibus,
                                                    ipsam impedit vitae autem,
                                                    eum officia, fugiat saepe
                                                    enim sapiente iste iure!
                                                    Quam voluptas earum impedit
                                                    necessitatibus, nihil?
                                                </p>
                                                <p>
                                                    <a
                                                        href="#"
                                                        className="reply"
                                                    >
                                                        Reply
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>

                                    {/* END comment-list */}
                                    <div className="comment-form-wrap pt-5">
                                        <h3 className="mb-5">
                                            Leave a comment
                                        </h3>
                                        <form action="#" className="">
                                            <div className="mb-3">
                                                <label htmlFor="name">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="website">
                                                    Website
                                                </label>
                                                <input
                                                    type="url"
                                                    className="form-control"
                                                    id="website"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message">
                                                    Message
                                                </label>
                                                <textarea
                                                    name=""
                                                    id="message"
                                                    cols={30}
                                                    rows={10}
                                                    className="form-control"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="submit"
                                                    defaultValue="Post Comment"
                                                    className="btn btn-primary btn-md text-white"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 sidebar">
                                <div className="sidebar-box">
                                    <form action="#" className="search-form">
                                        <div className="form-group">
                                            <span className="icon fa fa-search" />
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Type a keyword and hit enter"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-box">
                                    <div className="categories">
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
                                    </div>
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
