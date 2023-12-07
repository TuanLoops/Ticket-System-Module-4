import axios from "axios";
import { useEffect, useState } from "react";

const TicketForm = () => {
  const [lcs, setLcs] = useState([]);
  const [mcs, setMcs] = useState([]);
  const [scs, setScs] = useState([]);
  const [largeCategory, setLargeCategory] = useState();
  const [mediumCategory, setMediumCategory] = useState();
  const [smallCategory, setSmallCategory] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/hello/ctg/dto");
        let data = await response.data;
        setLcs(data);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [lcs]);

  const handleChangeLCategory = (e) => {
    setLargeCategory(e.target.value);
  };

  const handleChangeMCategory = (e) => {
    setMediumCategory(e.target.value);
  };

  const handleChangeSCategory = (e) => {
    setSmallCategory(e.target.value);
  };

  function handleSubmitTicket() {}

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
                    <select
                      className="form-control select-arrow"
                      value={largeCategory}
                      onChange={(e) => {
                        handleChangeLCategory(e);
                      }}
                    >
                      {lcs.map((lc, index) => (
                        <option key={index} value={lc}>
                          {lc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control select-arrow"
                      value={mediumCategory}
                      onChange={(e) => {
                        handleChangeMCategory(e);
                      }}
                    ></select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control select-arrow"
                      value={smallCategory}
                      onChange={(e) => {
                        handleChangeSCategory(e);
                      }}
                    >
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
                  <button
                    className="btn btn-primary bg-success"
                    onClick={handleSubmitTicket}
                  >
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
