// import "../styles/css/style.css";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    return (
        <>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <Head title="Dashboard" />
                <div className="content-wrapper">
                    <div className="d-xl-flex justify-content-between align-items-start">
                        <h2 className="text-dark font-weight-bold mb-2">
                            {" "}
                            Overview dashboard{" "}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">
                                <ul
                                    className="nav nav-tabs tab-transparent"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active"
                                            id="overview"
                                            data-toggle="tab"
                                            href="#overview"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            Overview
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            id="business-tab"
                                            data-toggle="tab"
                                            href='/adminblog'
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            id="performance-tab"
                                            data-toggle="tab"
                                            href="#"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Events
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            id="conversion-tab"
                                            data-toggle="tab"
                                            href="#"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Notifications
                                        </Link>
                                    </li>
                                </ul>
                                <div className="d-md-block d-none">
                                    <Link href="#" className="text-light p-1">
                                        <i className="mdi mdi-view-dashboard" />
                                    </Link>
                                    <Link href="#" className="text-light p-1">
                                        <i className="mdi mdi-dots-vertical" />
                                    </Link>
                                </div>
                            </div>

                            <div className="tab-content tab-transparent-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="overview"
                                    role="tabpanel"
                                    aria-labelledby="overview"
                                >
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <h5 className="mb-2 text-dark font-weight-normal">
                                                        Blog Post
                                                    </h5>
                                                    <h2 className="mb-4 text-dark font-weight-bold">
                                                        05
                                                    </h2>
                                                    <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                                                        <i className="mdi mdi-lightbulb icon-md absolute-center text-dark" />
                                                    </div>
                                                    <p className="mt-4 mb-0">
                                                        Completed
                                                    </p>
                                                    <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                                                        005
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <h5 className="mb-2 text-dark font-weight-normal">
                                                        Upcoming Events
                                                    </h5>
                                                    <h2 className="mb-4 text-dark font-weight-bold">
                                                        002
                                                    </h2>
                                                    <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                                                        <i className="mdi mdi-account-circle icon-md absolute-center text-dark" />
                                                    </div>
                                                    <p className="mt-4 mb-0">
                                                        Increased since
                                                        yesterday
                                                    </p>
                                                    <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                                                        50%
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <h5 className="mb-2 text-dark font-weight-normal">
                                                        Page Visits
                                                    </h5>
                                                    <h2 className="mb-4 text-dark font-weight-bold">
                                                        100,38
                                                    </h2>
                                                    <div className="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                                                        <i className="mdi mdi-eye icon-md absolute-center text-dark" />
                                                    </div>
                                                    <p className="mt-4 mb-0">
                                                        Increased since
                                                        yesterday
                                                    </p>
                                                    <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                                                        35%
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <h5 className="mb-2 text-dark font-weight-normal">
                                                        Followers
                                                    </h5>
                                                    <h2 className="mb-4 text-dark font-weight-bold">
                                                        4250k
                                                    </h2>
                                                    <div className="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent">
                                                        <i className="mdi mdi-cube icon-md absolute-center text-dark" />
                                                    </div>
                                                    <p className="mt-4 mb-0">
                                                        Decreased since
                                                        yesterday
                                                    </p>
                                                    <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                                                        25%
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-header">
                        <h3 className="page-title"> Events || Blogs </h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Blogs</a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Events
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Blog</h4>
                                    <p className="card-description">
                                        {" "}
                                        Add class <code>.table</code>
                                    </p>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Published On</th>
                                                <th>Author.</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.blog.data.map((item) => (
                                                <tr key={item.id}>
                                                    <td>{item.publishedon}</td>
                                                    <td>{item.author}</td>
                                                    <td>
                                                        <Link as="button" className="btn btn-gradient-dark btn-icon-text"  href={`/adminblog/${item.id}`}>
                                                        Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                                                        </Link>
                                                        <Link  className="btn btn-success btn-icon-text" method="delete" as="button" href={`/blogcreate/${item.id}`}>
                                                        <i className="mdi mdi-alert btn-icon-prepend"></i> Delete 
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    
                        <div className="btn-group" role="group" aria-label="Basic example">
                            {props.blog.links.map((items) => 
                                <Link preserveScroll as="button" key={items.label} href={items.url} className="btn btn-outline-secondary">{items.label}</Link>

                            )}
                           
                          </div>
                             
                           
                                </div>
                         
                                <Link
                                    as="button"
                                    href="/adminblog"
                                    className="btn btn-dark btn-rounded btn-fw"
                                >
                                    Create Blog
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Recent Events
                                    </h4>
                                    <p className="card-description">
                                        {" "}
                                        Add class <code>.table</code>
                                    </p>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Author.</th>
                                                <th>CreatedOn</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.events.map((item) => (
                                                <tr key={item.id}>
                                                    <td>item.title</td>
                                                    <td>{item.author}</td>
                                                    <td>{item.publishedOn}</td>
                                                    <td>
                                                        <Link href="#">
                                                            <label className="badge badge-danger">
                                                                Edit
                                                            </label>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-dark btn-rounded btn-fw"
                                >
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
