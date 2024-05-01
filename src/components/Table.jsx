import React from "react";

const Table = ({ list }) => {
  return (
    <>
      <div className="row mt-5 gap-2">
        {/* <!-- 1. entry list --> */}
        <div className="col-md">
          <h3 className="text-center">Entry List</h3>
          <hr />
          <table className="table myTable table-hover border">
            <tbody id="entryList">
              {list.map((item, index) => {
                return (
                  <tr key={index}>
                    {item.task} {item.hr}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>

        {/* <!-- 2. bad list  --> */}
        <div className="col-md">
          <h3 className="text-center">Bad List</h3>
          <hr />
          <table className="table myTable table-hover border">
            <tbody id="badList"></tbody>
          </table>
          <button>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-trash"></i>
          </button>
          <div className="alert alert-success" role="alert">
            You could have saved = <span id="badHrs">0</span> hrs
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
