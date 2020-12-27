import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlockTitle from './BlockTitle';

// import './App.css';


function TableList() {






  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "http://178.128.196.163:3000/api/records/"
      );
      setdata(data)
    };
    fetchData()
  }, [setdata])
  // console.log(data)

  return (
    <div className="bodyData">
        <BlockTitle body={data}/>
    </div>
  );
}

export default TableList;
