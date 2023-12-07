import TicketForm from "./TicketForm";
import High from "./priorities/High";
import Medium from "./priorities/Medium";
import Closed from "./statuses/Closed";
import Open from "./statuses/Open";
import Pending from "./statuses/Pending";
import Resolved from "./statuses/Resolved";

const Home = () => {
  const handleOpenModal = () => {
    console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  };

  const handleCloseModal = (e) => {
    console.log(e);
    const modal = document.getElementById("modal");
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <div>
      <div className="min-height-300 bg-primary position-absolute w-100" />
      <aside
        className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          />
          <a
            className="navbar-brand m-0"
            href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html "
            target="_blank"
          >
            <img
              src="./src/assets/img/logo-ct-dark.png"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold">Argon Dashboard 2</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0" />
        <div
          className="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                <div className="icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={16}
                    width={18}
                    viewBox="0 0 576 512"
                    style={{ fill: "orange" }}
                  >
                    <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Ticket</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/tables.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Tables</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/profile.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/sign-in.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-copy-04 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/sign-up.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-collection text-info text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer mx-3 ">
          <div className="card card-plain shadow-none" id="sidenavCard">
            <img
              className="w-50 mx-auto"
              src="./src/assets/img/illustrations/icon-documentation.svg"
              alt="sidebar_illustration"
            />
            <div className="card-body text-center p-3 w-100 pt-0">
              <div className="docs-info">
                <h6 className="mb-0">Need help?</h6>
                <p className="text-xs font-weight-bold mb-0">
                  Please create a new ticket
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-sm mb-0 w-100"
            href=""
            type="button"
            onClick={() => {handleOpenModal()}}
          >
            New Ticket
          </button>
        </div>
      </aside>
      <main className="main-content position-relative border-radius-lg ">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-white" href="#">
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
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          Today's Money
                        </p>
                        <h5 className="font-weight-bolder">$53,000</h5>
                        <p className="mb-0">
                          <span className="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                          since yesterday
                        </p>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                        <i
                          className="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          Today's Users
                        </p>
                        <h5 className="font-weight-bolder">2,300</h5>
                        <p className="mb-0">
                          <span className="text-success text-sm font-weight-bolder">
                            +3%
                          </span>
                          since last week
                        </p>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                        <i
                          className="ni ni-world text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          New Clients
                        </p>
                        <h5 className="font-weight-bolder">+3,462</h5>
                        <p className="mb-0">
                          <span className="text-danger text-sm font-weight-bolder">
                            -2%
                          </span>
                          since last quarter
                        </p>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                        <i
                          className="ni ni-paper-diploma text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          Sales
                        </p>
                        <h5 className="font-weight-bolder">$103,430</h5>
                        <p className="mb-0">
                          <span className="text-success text-sm font-weight-bolder">
                            +5%
                          </span>{" "}
                          than last month
                        </p>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                        <i
                          className="ni ni-cart text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-header pb-0">
                  <h6>Authors table</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="w-50px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            #
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Title
                          </th>
                          <th className="w-150px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Requestor
                          </th>
                          <th className="w-100px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Priority
                          </th>
                          <th className="w-100px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Receiving Depart
                          </th>
                          <th className="w-150px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Resolver
                          </th>
                          <th className="w-100px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Status
                          </th>
                          <th className="w-100px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Created At
                          </th>
                          <th className="w-100px text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Updated At
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="mx-2">123</span>
                          </td>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div></div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                {/* <p className="text-xs text-secondary mb-0">
                                  miriam@creative-tim.com
                                </p> */}
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programtor
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Developer
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <High />
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              14/09/20
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="/"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                            <Resolved />
                          </td>
                          <td>
                            <span>14/20/2023 08:12:23</span>
                          </td>
                          <td>
                            <span className="mx-2">14/20/2023 08:12:23</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="mx-2">123</span>
                          </td>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div></div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm title-width">
                                  Về việc: máy tính phòng nhân sự hỏng màn
                                  hìnhkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programtor
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Developer
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <High />
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              14/09/20
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="/"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                            <Open />
                          </td>
                          <td>
                            <span>14/20/2023 08:12:23</span>
                          </td>
                          <td>
                            <span className="mx-2">14/20/2023 08:12:23</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="mx-2">123</span>
                          </td>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div></div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                {/* <p className="text-xs text-secondary mb-0">
                                  miriam@creative-tim.com
                                </p> */}
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programtor
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Developer
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <High />
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              14/09/20
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="/"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                            <Pending />
                          </td>
                          <td>
                            <span>14/20/2023 08:12:23</span>
                          </td>
                          <td>
                            <span className="mx-2">14/20/2023 08:12:23</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="mx-2">123</span>
                          </td>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div></div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                {/* <p className="text-xs text-secondary mb-0">
                                  miriam@creative-tim.com
                                </p> */}
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              Programtor
                            </p>
                            <p className="text-xs text-secondary mb-0">
                              Developer
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <Medium />
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              14/09/20
                            </span>
                          </td>
                          <td className="align-middle">
                            <a
                              href="/"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                            <Closed />
                          </td>
                          <td>
                            <span>14/20/2023 08:12:23</span>
                          </td>
                          <td>
                            <span className="mx-2">14/20/2023 08:12:23</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="modal" onClick={e => {handleCloseModal(e)}}>
        <TicketForm />
      </div>
    </div>
  );
};

export default Home;
