import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
export default function EditContact(props) {
    const { data, setData, post, processing, errors } = useForm({
        contact_1: props.contact.contact_1,
        contact_2: props.contact.contact_2,
        email: props.contact.email,
        fbk: props.contact.fbk,
        ins: props.contact.ins,
        lkn: props.contact.lkn,
        id: props.contact.id,
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post(`/contact/${data.id}`);
    }
    return (
        <>
            <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Update Contact
                                    </h4>
                                    <p className="card-description">
                                        {" "}
                                        Contact form{" "}
                                    </p>
                                    <form
                                            className="forms-sample"
                                            onSubmit={submit}
                                        >
                                            <div className="form-group">
                                                <label htmlFor="contact_1">
                                                   Location
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="contact_1"
                                                    placeholder="Location"
                                                    name="contact_1"
                                                    value={data.contact_1}
                                                    onChange={(e) =>
                                                        setData(
                                                            "contact_1",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.contact_1 && (
                                                    <div>{errors.contact_1}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="contact_2">
                                                   Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="contact_2"
                                                    placeholder="Phone Number"
                                                    name="contact_2"
                                                    value={data.contact_2}
                                                    onChange={(e) =>
                                                        setData(
                                                            "contact_2",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.contact_2 && (
                                                    <div>{errors.contact_2}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">
                                                   Email
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.email && (
                                                    <div>{errors.email}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="fbk">
                                                   FaceBook
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fbk"
                                                    placeholder="Facebook"
                                                    name="fbk"
                                                    value={data.fbk}
                                                    onChange={(e) =>
                                                        setData(
                                                            "fbk",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.fbk && (
                                                    <div>{errors.fbk}</div>
                                                )}
                                            </div>

                                            
                                            <div className="form-group">
                                                <label htmlFor="fr_des">
                                                   Instagram
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="ins"
                                                    placeholder="Service Icon"
                                                    name="ins"
                                                    value={data.ins}
                                                    onChange={(e) =>
                                                        setData(
                                                            "ins",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.ins && (
                                                    <div>{errors.ins}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="lkn">
                                                   LinkendIn
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lkn"
                                                    placeholder="Service Icon"
                                                    name="lkn"
                                                    value={data.lkn}
                                                    onChange={(e) =>
                                                        setData(
                                                            "lkn",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.lkn && (
                                                    <div>{errors.lkn}</div>
                                                )}
                                            </div>

                                            
                                            <div className="form-group">
                                                <label htmlFor="tkt">
                                                   TIKtok
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lkn"
                                                    placeholder="Tiktok"
                                                    // name="lkn"
                                                    // value={data.lkn}
                                                    // onChange={(e) =>
                                                    //     setData(
                                                    //         "lkn",
                                                    //         e.target.value
                                                    //     )
                                                    // }
                                                />
                                                {/* {errors.lkn && (
                                                    <div>{errors.lkn}</div>
                                                )} */}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="twt">
                                                   Twitter
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="twt"
                                                    placeholder="Twitter"
                                                    // name="lkn"
                                                    // value={data.lkn}
                                                    // onChange={(e) =>
                                                    //     setData(
                                                    //         "lkn",
                                                    //         e.target.value
                                                    //     )
                                                    // }
                                                />
                                                {/* {errors.lkn && (
                                                    <div>{errors.lkn}</div>
                                                )} */}
                                            </div>


                                            <button
                                               
                                                type="submit"
                                                className="btn btn-primary mr-2"
                                                disabled={processing}
                                            >
                                                Submit
                                            </button>
                                            <button className="btn btn-light">
                                                Cancel
                                            </button>

                                            </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
