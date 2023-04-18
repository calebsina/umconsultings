import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
export default function Events(props) {
    const { data, setData, post, processing, errors } = useForm({
        id: props.events.id,
        event_name: props.events.event_name,
        location: props.events.location,
        time: props.events.time,
        form_link: props.events.form_link,
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post(`/event/${data.id}`);
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
                                        Update Events
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
                                                <label htmlFor="event_name">
                                                Name of Event
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="event_name"
                                                    placeholder="event_name"
                                                    name="event_name"
                                                    value={data.event_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "event_name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.event_name && (
                                                    <div>{errors.event_name}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Location">
                                                   Location
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Location"
                                                    placeholder="Location"
                                                    name="location"
                                                    value={data.location}
                                                    onChange={(e) =>
                                                        setData(
                                                            "location",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.location && (
                                                    <div>{errors.location}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="time">
                                                   Time
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="time"
                                                    placeholder="time"
                                                    name="time"
                                                    value={data.time}
                                                    onChange={(e) =>
                                                        setData(
                                                            "time",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.time && (
                                                    <div>{errors.time}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form_link">
                                                   Form Link
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="form_link"
                                                    placeholder="Form Link"
                                                    name="form_link"
                                                    value={data.form_link}
                                                    onChange={(e) =>
                                                        setData(
                                                            "form_link",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.form_link && (
                                                    <div>{errors.form_link}</div>
                                                )}
                                            </div>

                                            <button
                                               
                                                type="submit"
                                                className="btn btn-primary mr-2"
                                                disabled={processing}
                                            >
                                                Submit
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
