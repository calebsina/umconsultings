import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
export default function EditQuestion(props) {
    const { data, setData, post, processing, errors } = useForm({
        en_question: props.question.en_question,
        fr_question: props.question.fr_question,
        en_answer: props.question.en_answer,
        fr_answer: props.question.fr_answer,
        id: props.question.id,
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post(`/question/${data.id}`);
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
                                        Frequently Asked Questions
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
                                                <label htmlFor="en_question">
                                                   English Question
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="en_question"
                                                    placeholder="English Question"
                                                    name="en_question"
                                                    value={data.en_question}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_question",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_question && (
                                                    <div>{errors.en_question}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="fr_question">
                                                   French Question
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fr_question"
                                                    placeholder="french Question"
                                                    name="fr_question"
                                                    value={data.fr_question}
                                                    onChange={(e) =>
                                                        setData(
                                                            "fr_question",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.fr_title && (
                                                    <div>{errors.fr_title}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="en_answer">
                                                   English Answer
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="en_answer"
                                                    placeholder="English Answer"
                                                    name="en_answer"
                                                    value={data.en_answer}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_answer",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_answer && (
                                                    <div>{errors.en_answer}</div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="fr_answer">
                                                   French Answer
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="fr_answer"
                                                    placeholder="French Answer"
                                                    name="fr_answer"
                                                    value={data.fr_answer}
                                                    onChange={(e) =>
                                                        setData(
                                                            "fr_answer",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.fr_answer && (
                                                    <div>{errors.fr_answer}</div>
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
