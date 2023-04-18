import "../styles/admin/vendors/mdi/css/materialdesignicons.min.css";
import "../styles/admin/vendors/css/vendor.bundle.base.css";
import "../styles/admin/vendors/flag-icon-css/css/flag-icon.min.css";
import "../styles/admin/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css";
import "../styles/admin/vendors/font-awesome/css/font-awesome.min.css";

import "../styles/admin/css/style.css";


import "../styles/admin/vendors/jquery-circle-progress/js/circle-progress.min.js";
import "../styles/admin/vendors/chart.js/Chart.min.js";
import "../styles/admin/js/off-canvas.js";
import "../styles/admin/js/hoverable-collapse.js";
import "../styles/admin/js/misc.js";
import "../styles/admin/js/dashboard.js";



import $ from 'jquery';
import logo_dark from "../styles/admin/images/logo-dark.svg";
import profile_dark from "../styles/admin/images/faces/face28.png";
import face2 from "../styles/admin/images/faces/face2.jpg";
import face3 from "../styles/admin/images/faces/face3.jpg";



import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <div className="container-scroller">
                <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <Link
                            className="navbar-brand brand-logo"
                            href={route("dashboard")}
                        >
                            <img src={logo_dark} alt="logo" />
                        </Link>
                        <Link className="navbar-brand brand-logo-mini" href="#">
                            <img src={logo_dark} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-stretch">
                        <button
                            className="navbar-toggler navbar-toggler align-self-center"
                            type="button"
                            data-toggle="minimize"
                        >
                            <span className="mdi mdi-menu" />
                        </button>
                        <div className="search-field d-none d-xl-block">
                            <form
                                className="d-flex align-items-center h-100"
                                action="#"
                            >
                                <div className="input-group">
                                    <div className="input-group-prepend bg-transparent">
                                        <i className="input-group-text border-0 mdi mdi-magnify" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent border-0"
                                        placeholder="Search products"
                                    />
                                </div>
                            </form>
                        </div>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-profile dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    id="profileDropdown"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div className="nav-profile-img">
                                        <img src={profile_dark} alt="image" />
                                    </div>
                                    <div className="nav-profile-text">
                                        <p className="mb-1 text-black">
                                            {auth.user.name}
                                        </p>
                                    </div>
                                </Link>
                                <div
                                    className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm"
                                    aria-labelledby="profileDropdown"
                                    data-x-placement="bottom-end"
                                >
                                    <div className="p-3 text-center bg-primary">
                                        <img
                                            className="img-avatar img-avatar48 img-avatar-thumb"
                                            src={profile_dark}
                                            alt=""
                                        />
                                    </div>
                                    <div className="p-2">
                                        <h5 className="dropdown-header text-uppercase pl-2 text-dark">
                                            User Options
                                        </h5>
                                        <Link
                                            className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                                            href="#"
                                        >
                                            <span>Inbox</span>
                                            <span className="p-0">
                                                <span className="badge badge-primary">
                                                    3
                                                </span>
                                                <i className="mdi mdi-email-open-outline ml-1" />
                                            </span>
                                        </Link>
                                        <Link
                                            className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                                            href="#"
                                        >
                                            <span>Profile</span>
                                            <span className="p-0">
                                                <span className="badge badge-success">
                                                    1
                                                </span>
                                                <i className="mdi mdi-account-outline ml-1" />
                                            </span>
                                        </Link>
                                        <Link
                                            onClick={() => {}}
                                            className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                                            href="javascript:void(0)"
                                        >
                                            <span>Settings</span>
                                            <i className="mdi mdi-settings" />
                                        </Link>
                                        <div
                                            role="separator"
                                            className="dropdown-divider"
                                        />
                                        <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">
                                            Actions
                                        </h5>
                                        <Link
                                            className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                                            href="#"
                                        >
                                            <span>Lock Account</span>
                                            <i className="mdi mdi-lock ml-1" />
                                        </Link>
                                        <Link
                                            className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                                            href="#"
                                        >
                                            <span>Log Out</span>
                                            <i className="mdi mdi-logout ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link count-indicator dropdown-toggle"
                                    id="messageDropdown"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="mdi mdi-email-outline" />
                                    <span className="count-symbol bg-success" />
                                </Link>
                                <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="messageDropdown"
                                >
                                    <h6 className="p-3 mb-0 bg-primary text-white py-4">
                                        Messages
                                    </h6>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img
                                                src={profile_dark}
                                                alt="image"
                                                className="profile-pic"
                                            />
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                                                Mark send you a message
                                            </h6>
                                            <p className="text-gray mb-0">
                                                {" "}
                                                1 Minutes ago{" "}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img
                                                src={face2}
                                                alt="image"
                                                className="profile-pic"
                                            />
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                                                Cregh send you a message
                                            </h6>
                                            <p className="text-gray mb-0">
                                                {" "}
                                                15 Minutes ago{" "}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img
                                                src={face3}
                                                alt="image"
                                                className="profile-pic"
                                            />
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                                                Profile picture updated
                                            </h6>
                                            <p className="text-gray mb-0">
                                                {" "}
                                                18 Minutes ago{" "}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="dropdown-divider" />
                                    <h6 className="p-3 mb-0 text-center">
                                        4 new messages
                                    </h6>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link count-indicator dropdown-toggle"
                                    id="notificationDropdown"
                                    href="#"
                                    data-toggle="dropdown"
                                >
                                    <i className="mdi mdi-bell-outline" />
                                    <span className="count-symbol bg-danger" />
                                </Link>
                                <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="notificationDropdown"
                                >
                                    <h6 className="p-3 mb-0 bg-primary text-white py-4">
                                        Notifications
                                    </h6>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-success">
                                                <i className="mdi mdi-calendar" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject font-weight-normal mb-1">
                                                Event today
                                            </h6>
                                            <p className="text-gray ellipsis mb-0">
                                                {" "}
                                                Just a reminder that you have an
                                                event today{" "}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-warning">
                                                <i className="mdi mdi-settings" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject font-weight-normal mb-1">
                                                Settings
                                            </h6>
                                            <p className="text-gray ellipsis mb-0">
                                                {" "}
                                                Update dashboard{" "}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="dropdown-divider" />
                                    <Link className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="mdi mdi-link-variant" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                            <h6 className="preview-subject font-weight-normal mb-1">
                                                Launch Admin
                                            </h6>
                                            <p className="text-gray ellipsis mb-0">
                                                {" "}
                                                New admin wow!{" "}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="dropdown-divider" />
                                    <h6 className="p-3 mb-0 text-center">
                                        See all notifications
                                    </h6>
                                </div>
                            </li>
                        </ul>
                        <button
                            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                            type="button"
                            data-toggle="offcanvas"
                        >
                            <span className="mdi mdi-menu" />
                        </button>
                    </div>
                </nav>

                {/* side bar */}
                <div className="container-fluid page-body-wrapper">
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            <li className="nav-item nav-category">Main</li>
                            <li className="nav-item">
                                <Link className="nav-link" href={route("dashboard")}>
                                    <span className="icon-bg">
                                        <i className="mdi mdi-cube menu-icon" />
                                    </span>
                                    <span className="menu-title">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href="#"
                                >
                                    <span className="icon-bg">
                                        <i className="mdi mdi-contacts menu-icon" />
                                    </span>
                                    <span className="menu-title">
                                        Home Page
                                    </span>
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" href="/adminservice">
                                    <span className="icon-bg">
                                        <i className="mdi mdi-cube menu-icon" />
                                    </span>
                                    <span className="menu-title">
                                    Services
                                    </span>
                                </Link>
                            </li>
                     
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    <span className="icon-bg">
                                        <i className="mdi mdi-cube menu-icon" />
                                    </span>
                                    <span className="menu-title">
                                    frequently asked
                                    </span>
                                </Link>
                            </li>
                      
                            <li className="nav-item">
                                <Link className="nav-link" href="/adminblog">
                                    <span className="icon-bg">
                                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                                    </span>
                                    <span className="menu-title">Blog</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href="/contact/1"
                                >
                                    <span className="icon-bg">
                                        <i className="mdi mdi-chart-bar menu-icon" />
                                    </span>
                                    <span className="menu-title">
                                        Contact page
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/event/1">
                                    <span className="icon-bg">
                                        <i className="mdi mdi-format-list-bulleted menu-icon" />
                                    </span>
                                    <span className="menu-title">Events</span>
                                </Link>
                            </li>


                            <li className="nav-item sidebar-user-actions">
                                <div className="user-details">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-profile-img">
                                                    <img
                                                        src={profile_dark}
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="sidebar-profile-text">
                                                    <p className="mb-1">
                                                        {auth.user.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="badge badge-danger">
                                            3
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item sidebar-user-actions">
                                <div className="sidebar-user-menu">
                                    <Link href="#" className="nav-link">
                                        <i className="mdi mdi-settings menu-icon" />
                                        <span className="menu-title">
                                            Settings
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item sidebar-user-actions">
                                <div className="sidebar-user-menu">
                                    <Link href="#" className="nav-link">
                                        <i className="mdi mdi-speedometer menu-icon" />
                                        <span className="menu-title">
                                            Take Tour
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item sidebar-user-actions">
                                <div className="sidebar-user-menu">
                                    <Link href={route('logout')} method="post" as="button" className="nav-link btn btn-link btn-fw">
                                        <i className="mdi mdi-logout  menu-icon" />
                                        <span className="menu-title">
                                            Log Out
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-panel">
                        <div>{children}</div>
                        <footer className="footer">
                            <div className="footer-inner-wraper">
                                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                    <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                                        Copyright © starlightInc 2023
                                    </span>
                                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                                        {" "}
                                        Software{" "}
                                        <Link href="#" target="_blank">
                                            company
                                        </Link>{" "}
                                        starlightInc.com
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

{
    /* <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )} */
}
