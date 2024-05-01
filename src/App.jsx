import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [entryList, setEntryList] = useState([]);

  const addData = (data) => {
    // console.log(data)
    setEntryList([...entryList, data]);
  };
  return (
    <>
      <h1>Not to do list</h1>
      <Form addData={addData} />
      <Table list={entryList} />
    </>
  );
}

export default App;
