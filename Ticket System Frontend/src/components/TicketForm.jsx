import axios from "axios";
import { useEffect, useState } from "react";

const TicketForm = () => {
  const [largeCategories, setLargeCategories] = useState([]);
  const [mediumCategories, setMediumCategories] = useState([]);
  const [smallCategories, setSmallCategories] = useState([]);
  const [largeCategory, setLargeCategory] = useState("");
  const [mediumCategory, setMediumCategory] = useState("");
  const [smallCategory, setSmallCategory] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/hello/ctg/dto");
        let data = await response.data;
        setLargeCategories(data);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  const handleChangeLCategory = (e) => {
    setLargeCategory(e.target.value);
    setMediumCategories(
      largeCategories.find((lc) => lc.id == e.target.value).mcDtoList
    );
    setMediumCategory("");
    setSmallCategory("");
  };

  const handleChangeMCategory = (e) => {
    setMediumCategory(e.target.value);
    setSmallCategories(
      mediumCategories.find((mc) => mc.id == e.target.value).scDtoList
    );
    setSmallCategory("");
  };

  const handleChangeSCategory = (e) => {
    setSmallCategory(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleSubmitTicket = () => {
    const reqBody = {
      title: title,
      detail: detail,
      smallCategory: {
        id: smallCategory,
      },
      mediumCategory: {
        id: mediumCategory,
      },
      largeCategory: {
        id: largeCategory,
      },
    };

    axios
      .post("http://localhost:8080/users/api/auth/ticket", reqBody, {headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`}})
      .then((response) => {
        console.log("Submission successful:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
    setTitle("");
    setDetail("");
    setLargeCategory("");
    setMediumCategory("");
    setSmallCategory("");
  };

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
                      placeholder="Enter title..."
                      value={title}
                      onChange={handleChangeTitle}
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
                      onChange={handleChangeLCategory}
                    >
                      <option value="" disabled>
                        -- Select Category --
                      </option>
                      {largeCategories.map((largeCatagory, index) => (
                        <option key={index} value={largeCatagory.id}>
                          {largeCatagory.name}
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
                      onChange={handleChangeMCategory}
                    >
                      <option value="" disabled>
                        -- Select Category --
                      </option>
                      {mediumCategories.map((mediumCategory, index) => (
                        <option key={index} value={mediumCategory.id}>
                          {mediumCategory.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-control select-arrow"
                      value={smallCategory}
                      onChange={handleChangeSCategory}
                    >
                      <option value="" disabled>
                        -- Select Category --
                      </option>
                      {smallCategories.map((smallCategory, index) => (
                        <option key={index} value={smallCategory.id}>
                          {smallCategory.name}
                        </option>
                      ))}
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
                      cols={10}
                      rows={6}
                      value={detail}
                      onChange={handleChangeDetail}
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
                    id="submit"
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
