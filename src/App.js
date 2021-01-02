import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlockTitle from './BlockTitle';
import BlockAdd from './BlockAdd'


function TableList() {






  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const { data } = await axios(
      "http://178.128.196.163:3000/api/records/"
    );
    setdata(data)
  };
  useEffect(() => {
    fetchData()
  }, [setdata])

  return (
    <div className="bodyData">
        <BlockAdd fetchData={fetchData}/>
        <BlockTitle fetchData={fetchData} body={data}/>
    </div>
  );
}

export default TableList;
