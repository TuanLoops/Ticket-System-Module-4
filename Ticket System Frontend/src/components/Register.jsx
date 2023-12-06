const Register = () => {

    return (
      <>
        <main className="main-content  mt-0">
          <div
            className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
            style={{
              backgroundImage:
                'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg")',
              backgroundPosition: "top",
            }}
          >
            <span className="mask bg-gradient-dark opacity-6" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 text-center mx-auto">
                  <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                  <p className="text-lead text-white">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div className="card z-index-0 shadow-lg p-3 mb-4">
                  <div className="card-header text-center pt-2 pb-0">
                    <h5 className="fs-3 m-0">Register with</h5>
                  </div>
                  <div className="card-body">
                    <form role="form">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          aria-label="Confirm Password"
                        />
                      </div>
                      <div className="form-check form-check-info text-start">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I agree the{" "}
                          <a
                            href="javascript:;"
                            className="text-dark font-weight-bolder"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn bg-gradient-dark w-100 my-4 mb-2"
                        >
                          Sign up
                        </button>
                      </div>
                      <p className="text-sm mt-3 mb-0">
                        Already have an account?{" "}
                        <a
                          href="javascript:;"
                          className="text-dark font-weight-bolder"
                        >
                          Sign in
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-4 mx-auto text-center">
                <a
                  href="javascript:;"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Company
                </a>
                <a
                  href="javascript:;"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  About Us
                </a>
                <a
                  href="javascript:;"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Team
                </a>
                <a
                  href="javascript:;"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Products
                </a>
                <a
                  href="javascript:;"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Blog
                </a>
                <a
                  href="javascript:;"
                  target="_blank"
                  className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Register;