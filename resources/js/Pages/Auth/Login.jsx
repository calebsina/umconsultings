import "../../styles/admin/vendors/mdi/css/materialdesignicons.min.css";
import "../../styles/admin/vendors/css/vendor.bundle.base.css";
import "../../styles/admin/css/style.css";
import logo_dark from "../../styles/admin/images/logo-dark.svg";

import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <div className="brand-logo">
                                        <img src={logo_dark} />
                                    </div>
                                    <h4>Hello! let's get started</h4>
                                    <h6 class="font-weight-light">
                                        Sign in to continue.
                                    </h6>
                                    <form className="pt-3" onSubmit={submit}>
                                        <div>
                                            <InputLabel
                                                htmlFor="email"
                                                value="Email"
                                            />

                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={handleOnChange}
                                            />

                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="password"
                                                value="Password"
                                            />

                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="mt-1 block w-full"
                                                autoComplete="current-password"
                                                onChange={handleOnChange}
                                            />

                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                            <label className="flex items-center">
                                                <Checkbox
                                                    name="remember"
                                                    value={data.remember}
                                                    onChange={handleOnChange}
                                                />
                                                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                                    Keep me signed in
                                                </span>
                                            </label>
                                        </div>

                                        <div className="flex items-center justify-end mt-4">
                                            {canResetPassword && (
                                                <Link
                                                    href={route(
                                                        "password.request"
                                                    )}
                                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )}

                                            <PrimaryButton
                                                className="ml-4"
                                                disabled={processing}
                                            >
                                                Log in
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
