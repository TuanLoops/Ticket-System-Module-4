import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import Status from "./statuses/Status";
import Priority from "./priorities/Priority";

const TicketDetail = () => {
  const [choosenTicket, setChoosenTicket] = useState(null);
  const [ticketStatus, setTicketStatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/users/api/auth/ticket/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await response.data;
        setChoosenTicket(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [ticketStatus]);

  const acceptTicket = async () => {
    await axios
      .put(
        `http://localhost:8080/users/api/auth/ticket/accept/${id}`,
        { name: "hello" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => res.data)
      .then((data) => setTicketStatus(data.status.id))
      .catch((err) => console.log(err));
  };

  const openModalCloseTicket = () => {
    const modal = document.getElementById("close-ticket-modal");
    modal.style.display = "flex";
  };

  const closeModalCloseTicket = () => {
    const modal = document.getElementById("close-ticket-modal");
    modal.style.display = "none";
  };

  const closeTicket = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/users/api/auth/ticket/close/${id}`,
        { name: "hello" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await response.data;
      closeModalCloseTicket();
      setTicketStatus(data.status.id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const reopenTicket = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/users/api/auth/ticket/reopen/${id}`,
        { name: "hello" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = response.data;
      setTicketStatus(data.status.id);
    } catch (error) {
      console.log(error);
    }
  };

  const resolveTicket = () => {};

  return (
    <div className="g-sidenav-show bg-gray-100 mh-100vh">
      <div className="min-height-300 bg-primary position-absolute w-100" />
      <aside
        className="sidenav bg-white navbar navbar-vertical  border-0 border-radius-xl my-3 fixed-start ms-4 ticket-aside"
        style={{ maxWidth: "22.5rem" }}
        id="sidenav-main"
      >
        <div className="">
          <div className="card card-profile">
            <img
              src="../src/assets/img/bg-profile.jpg"
              alt="Image placeholder"
              className="card-img-top"
              style={{ width: "auto", height: "360px" }}
            />
            <div className="row justify-content-center">
              <div className="col-4 col-lg-4 order-lg-2">
                <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                  <a href="#">
                    <img
                      src="../src/assets/img/team-2.jpg"
                      className="rounded-circle img-fluid border border-2 border-white"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
              <div className="d-flex justify-content-between">
                <a
                  href="#"
                  className="btn btn-sm btn-info mb-0 d-none d-lg-block"
                >
                  Connect
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-info mb-0 d-block d-lg-none"
                >
                  <i className="ni ni-collection" />
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                >
                  Message
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"
                >
                  <i className="ni ni-email-83" />
                </a>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-center">
                    <div className="d-grid text-center">
                      <span className="text-lg font-weight-bolder">22</span>
                      <span className="text-sm opacity-8">Friends</span>
                    </div>
                    <div className="d-grid text-center mx-4">
                      <span className="text-lg font-weight-bolder">10</span>
                      <span className="text-sm opacity-8">Photos</span>
                    </div>
                    <div className="d-grid text-center">
                      <span className="text-lg font-weight-bolder">89</span>
                      <span className="text-sm opacity-8">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-uppercase font-weight-300 text-sm mb-2">
                  Requester
                </div>
                <h5>
                  {choosenTicket ? choosenTicket.requester.name : "-"}
                  <span className="font-weight-light">, 18+</span>
                </h5>
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />
                  Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2" />
                  University of Computer Science
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main
        className="main-content position-relative border-radius-lg"
        style={{ marginLeft: "24.5rem" }}
      >
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-white" href="/">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-white active"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
              <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="#"
                    className="nav-link text-white font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a
                    href="#"
                    className="nav-link text-white p-0"
                    id="iconNavbarSidenav"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="#" className="nav-link text-white p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    href="#"
                    className="nav-link text-white p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer" />
                  </a>
                  <ul
                    className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="#">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="./src/assets/img/team-2.jpg"
                              className="avatar avatar-sm  me-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New message
                              </span>{" "}
                              from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="dropdown-item border-radius-md" href="#">
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="./src/assets/img/small-logos/logo-spotify.svg"
                              className="avatar avatar-sm bg-gradient-dark  me-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New album
                              </span>{" "}
                              by Travis Scott
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item border-radius-md" href="#">
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4 d-flex flex-row ">
                <div
                  className=""
                  style={{
                    width: "70%",
                    padding: "8px",
                    borderRight: "1px dotted rgb(73, 80, 87)",
                  }}
                >
                  <div className="card-header pb-0">
                    <h5>Ticket #{choosenTicket ? choosenTicket.id : "-"}</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            htmlFor="example-text-input"
                            className="form-control-label text-sm"
                            style={{ height: "40.4px" }}
                          >
                            Title
                          </label>
                          <div
                            className="form-control"
                            type="text"
                            style={{ height: "40.4px" }}
                          >
                            {choosenTicket ? choosenTicket.title : "-"}
                          </div>
                        </div>
                      </div>
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label text-sm"
                      >
                        Category
                      </label>
                      <div className="col-md-4">
                        <div className="form-group">
                          <div
                            className="form-control select-arrow"
                            style={{ height: "40.4px" }}
                          >
                            {choosenTicket
                              ? choosenTicket.largeCategory.name
                              : "-"}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <div
                            className="form-control select-arrow"
                            style={{ height: "40.4px" }}
                          >
                            {choosenTicket
                              ? choosenTicket.mediumCategory.name
                              : "-"}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <div
                            className="form-control select-arrow"
                            style={{ height: "40.4px" }}
                          >
                            {choosenTicket
                              ? choosenTicket.smallCategory.name
                              : "-"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label text-sm"
                        >
                          Detail
                        </label>
                        <div
                          className="form-control"
                          type="text"
                          style={{ minHeight: "169.4px" }}
                        >
                          {choosenTicket ? choosenTicket.detail : ""}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-end">
                      {choosenTicket && choosenTicket.status.id == 1 ? (
                        choosenTicket &&
                        choosenTicket.status.id == 1 &&
                        choosenTicket.requester.user.username ==
                          localStorage.getItem("username") ? (
                          <button
                            className="btn btn-primary bg-dark"
                            disabled
                          >
                            Accept
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary bg-success"
                            onClick={acceptTicket}
                          >
                            Accept
                          </button>
                        )
                      ) : choosenTicket && choosenTicket.status.id == 3 ? (
                        <button
                          className="btn btn-primary bg-success"
                          onClick={reopenTicket}
                        >
                          Reopen
                        </button>
                      ) : choosenTicket && choosenTicket.status.id == 4 ? (
                        <button className="btn btn-primary bg-dark" disabled>
                          Reopen
                        </button>
                      ) : choosenTicket &&
                        choosenTicket.status.id == 2 &&
                        choosenTicket.resolver.user.username ==
                          localStorage.getItem("username") ? (
                        <button
                          className="btn btn-primary bg-success"
                          onClick={resolveTicket}
                        >
                          Resolved
                        </button>
                      ) : (
                        <button className="btn btn-primary bg-dark" disabled>
                          Resolving
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ width: "30%" }} className="d-flex flex-column">
                  <div className="card-body">
                    <div
                      className="col-md-12 justify-content-evenly d-flex  align-items-center flex-column"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div>
                        <span className="form-control-label fs-6 font-weight-bold">
                          Status:&nbsp;
                        </span>
                        {choosenTicket ? (
                          <Status value={choosenTicket.status.id} />
                        ) : (
                          "-"
                        )}
                      </div>
                      <div>
                        <span className="form-control-label fs-6 font-weight-bold">
                          Priority:&nbsp;
                        </span>
                        {choosenTicket ? (
                          <Priority value={choosenTicket.priority.id} />
                        ) : (
                          "-"
                        )}
                      </div>
                      <div>
                        <span className="form-control-label fs-6 font-weight-bold">
                          Resolver:&nbsp;
                        </span>
                        {choosenTicket && choosenTicket.resolver
                          ? choosenTicket.resolver.name
                          : "-"}
                      </div>
                      <div>
                        <span className="form-control-label fs-6 font-weight-bold">
                          Created at:&nbsp;
                        </span>
                        {choosenTicket ? choosenTicket.createdAt : "-"}
                      </div>
                      <div>
                        <span className="form-control-label fs-6 font-weight-bold">
                          Updated at:&nbsp;
                        </span>
                        {choosenTicket ? choosenTicket.updatedAt : "-"}
                      </div>
                      <div>
                        {choosenTicket && choosenTicket.status.id != 4 ? (
                          <button
                            className="btn btn-primary bg-danger"
                            onClick={openModalCloseTicket}
                          >
                            Close
                          </button>
                        ) : (
                          <button className="btn btn-primary bg-dark" disabled>
                            Close
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "240px",
                      backgroundImage:
                        "url('https://callio.vn/wp-content/uploads/2021/05/cskh.png')",
                      backgroundSize: "cover",
                      borderBottomRightRadius: "16px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="" id="close-ticket-modal">
        <div className="card">
          <div className="card-body" style={{ width: "640px" }}>
            <h4>Please provide your reason</h4>
            <div
              style={{
                width: "100%",
                borderTop: "1px solid rgb(200, 200, 200)",
                marginBottom: "16px",
              }}
            ></div>
            <div>
              <textarea
                style={{ width: "100%" }}
                className="form-control"
                cols={50}
                rows={4}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <button
                className="btn btn-primary btn-secondary"
                onClick={closeModalCloseTicket}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary btn-danger"
                onClick={closeTicket}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
