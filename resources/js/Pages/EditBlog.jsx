import Authenticated from "@/Layouts/AuthenticatedLayout";
import Modal from "@/Components/Modal";
import { Head, useForm, Link } from "@inertiajs/react";
import { useState } from "react";
// import  {useState} from 'react';
export default function EditBlog(props) {
    const { data, setData, post, processing, errors, progress } = useForm({
        id: props.details.id,
        en_title: props.details.en_title,
        author: props.details.author,
        publishedon: props.details.publishedon,
        en_descr: props.details.en_descr,
        en_content_1: props.details.en_content_1,
        en_content_2: props.details.en_content_2,
        en_content_3: props.details.en_content_3,
        en_content_4: props.details.en_content_4,
        img_url: null,
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post(`/blogcreate/${data.id}`);
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
                        <>
                            {/* Hello world */}
                            <div className="col-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            Create New Blog post
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
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="en_title"
                                                    placeholder="title"
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
                                                <label htmlFor="author">
                                                    Author
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="author"
                                                    placeholder="author"
                                                    name="author"
                                                    value={data.author}
                                                    onChange={(e) =>
                                                        setData(
                                                            "author",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.author && (
                                                    <div>{errors.author}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="publishedon">
                                                    Publish Date
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="publishedon"
                                                    placeholder="published date"
                                                    name="publishedon"
                                                    value={data.publishedon}
                                                    onChange={(e) =>
                                                        setData(
                                                            "publishedon",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.publishedon && (
                                                    <div>
                                                        {errors.publishedon}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="en_descr">
                                                    Blog description
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputEmail3"
                                                    placeholder="Description"
                                                    name="en_descr"
                                                    value={data.en_descr}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_descr",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.descr && (
                                                    <div>{errors.descr}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="en_content_1">
                                                    Section One
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    id="en_content_1"
                                                    name="en_content_1"
                                                    rows={5}
                                                    value={data.en_content_1}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_content_1",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_content_1 && (
                                                    <div>
                                                        {errors.en_content_1}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="en_content_2">
                                                    Section Two
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="en_content_2"
                                                    rows={5}
                                                    name="en_content_2"
                                                    value={data.en_content_2}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_content_2",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_content_2 && (
                                                    <div>
                                                        {errors.en_content_2}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="en_content_3">
                                                    Section Three
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="en_content_3"
                                                    rows={5}
                                                    name="en_content_3"
                                                    value={data.en_content_3}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_content_3",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_content_3 && (
                                                    <div>
                                                        {errors.en_content_3}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="en_content_4">
                                                    Section four
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="en_content_4"
                                                    rows={5}
                                                    name="en_content_4"
                                                    value={data.en_content_4}
                                                    onChange={(e) =>
                                                        setData(
                                                            "en_content_4",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.en_content_4 && (
                                                    <div>
                                                        {errors.en_content_4}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label>File upload</label>

                                                <div className="input-group col-xs-12">
                                                    <input
                                                        type="file"
                                                        className="form-control file-upload-info"
                                                        disabled=""
                                                        placeholder="Upload Image"
                                                        name="img_url"
                                                        // value={data.img_url}
                                                        onChange={(e) =>
                                                            setData(
                                                                "img_url",
                                                                e.target
                                                                    .files[0]
                                                                   
                                                            )
                                                        }
                                                    />

                                                    {errors.img_url && (
                                                        <div>
                                                            {errors.img_url}
                                                        </div>
                                                    )}
                                                </div>
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
                        </>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
