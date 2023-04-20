import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
export default function EditService(props) {
    const { data, setData, post, processing, errors } = useForm({
        en_title: props.service.en_title,
        fr_title: props.service.fr_title,
        en_des: props.service.en_des,
        fr_des: props.service.fr_des,
        service_icon: props.service.service_icon,
        id: props.service.id,
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post(`/adminservice/${data.id}`);
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
                                        Add Services
                                    </h4>
                                    <p className="card-description">
                                        {" "}
                                        English Post{" "}
                                    </p>
                                    <form
                                            className="forms-sample"
                                            onSubmit={submit}
                                        >
                                            <div className="form-group">
                                                <label htmlFor="en_title">
                                                   English Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="en_title"
                                                    placeholder="English title"
                                                    name="en_title"
                                                    value={data.en_title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_title",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_title && (
                                                    <div>{errors.en_title}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fr_title">
                                                   French Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fr_title"
                                                    placeholder="french title"
                                                    name="fr_title"
                                                    value={data.fr_title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "fr_title",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.fr_title && (
                                                    <div>{errors.fr_title}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="en_des">
                                                   English Description
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="en_des"
                                                    placeholder="English Description"
                                                    name="en_des"
                                                    value={data.en_des}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_des",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_des && (
                                                    <div>{errors.en_des}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="fr_des">
                                                   French Description
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fr_des"
                                                    placeholder="French Description"
                                                    name="fr_des"
                                                    value={data.fr_des}
                                                    onChange={(e) =>
                                                        setData(
                                                            "fr_des",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.fr_des && (
                                                    <div>{errors.fr_des}</div>
                                                )}
                                            </div>

                                            
                                            <div className="form-group">
                                                <label htmlFor="fr_des">
                                                   Service Icon
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="service_icon"
                                                    placeholder="Service Icon"
                                                    name="service_icon"
                                                    value={data.service_icon}
                                                    onChange={(e) =>
                                                        setData(
                                                            "service_icon",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.service_icon && (
                                                    <div>{errors.service_icon}</div>
                                                )}
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
