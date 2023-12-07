import React from 'react';

const TicketForm = () => {

    function handleSubmitTicket() {

    }

    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h5>Create New Ticket</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label text-sm"
                      >
                        Title
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        placeholder="Enter title..."
                      />
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
                      <select className="form-control select-arrow">
                        <option>Hardware problems</option>
                        <option>Sofware problems</option>
                        <option>Network problems</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <select
                        className="form-control select-arrow"
                        defaultValue="Select a problem"
                      >
                        <option>Computer devices related</option>
                        <option>asdas</option>
                        <option>asdasd</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <select className="form-control select-arrow">
                        <option>asdasd</option>
                        <option>asdasd</option>
                        <option></option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr className="horizontal dark" />
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label text-sm"
                      >
                        Detail
                      </label>
                      <textarea
                        className="form-control"
                        type="text"
                        defaultValue="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                        cols={10}
                        rows={6}
                        placeholder="Describe your issue..."
                      />
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-between">
                    <div className="d-flex">
                      <label
                        className="btn btn-primary bg-secondary me-1"
                        htmlFor="attach-file"
                      >
                        Attach a file
                      </label>
                      <span className="d-flex align-items-center mb-3">
                        <input type="file" id="attach-file" />
                      </span>
                    </div>
                    <button className="btn btn-primary bg-success" onClick={handleSubmitTicket}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TicketForm;