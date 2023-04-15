import { Link, Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import hero_2 from "../styles/images/hero_2.jpg";

export default function Contact(props) {
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
                                    {props.translations.contact}
                                </h1>
                                <p data-aos="fade-up">
                                    {props.translations.welcome2}
                                </p>
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
                                <h2 className="heading mb-5">{props.translations.contact}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-4 mb-5 mb-lg-0"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="contact-info">
                                    <div className="address mt-4">
                                        <i className="icon-room" />
                                        <h4 className="mb-2">Location:</h4>
                                        <p>{props.contact[0].contact_1}</p>
                                    </div>
                                    <div className="open-hours mt-4">
                                        <i className="icon-clock-o" />
                                        <h4 className="mb-2">Open Hours:</h4>
                                        <p>
                                            Monday-Friday:
                                            <br />
                                            09:00 AM - 05:00 PM
                                        </p>
                                    </div>
                                    <div className="email mt-4">
                                        <i className="icon-envelope" />
                                        <h4 className="mb-2">Email:</h4>
                                        <p>{props.contact[0].email}</p>
                                    </div>
                                    <div className="phone mt-4">
                                        <i className="icon-phone" />
                                        <h4 className="mb-2">Call:</h4>
                                        <p>{props.contact[0].contact_2}</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-8"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <form action="#">
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <textarea
                                                name=""
                                                id=""
                                                cols={30}
                                                rows={7}
                                                className="form-control"
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="submit"
                                                defaultValue="Send Message"
                                                className="btn btn-primary"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
}
