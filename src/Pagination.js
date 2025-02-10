import React, { useEffect, useState } from "react";
import "./Pagination.css";
import Pagination1 from "./components/pagination";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [slicedArray, setSlicedArray] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [count, setCount] = useState(0);

  const api1 = async () => {
    const data1 = fetch("https://fakestoreapi.com/products/");
    const data2 = fetch("https://dummyjson.com/products");
    Promise.all([data1, data2]).then((res) => {
      Promise.all(res.map((item) => item.json())).then((res) => {
        const data1 = res[0];
        const data2 = res[1].products;
        const newData = [...data1, ...data2];
        const data7 = newData?.slice(0, itemsPerPage);
        setSlicedArray(data7);
        setData([...data1, ...data2]);
      });
    });
  };

  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const array = [...Array(totalPages)].map((_, i) => {
    return i;
  });

  const displayItems = (page) => {
    setCount(page);
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + parseInt(itemsPerPage);
    const data1 = data?.slice(startIndex, endIndex);
    setSlicedArray(data1);
  };

  const itemSettingPerPage = (items) => {
    setCount(0);
    setItemsPerPage(items);
    const data1 = data?.slice(0, items);
    setSlicedArray(data1);
  };

  const prevDisplay = () => {
    setCount(count - 1);
    const startIndex = (count - 1) * itemsPerPage;
    const endIndex = startIndex + parseInt(itemsPerPage);
    const data1 = data?.slice(startIndex, endIndex);

    setSlicedArray(data1);
  };

  const nextDisplay = () => {
    setCount(count + 1);
    const startIndex = (count + 1) * itemsPerPage;
    const endIndex = startIndex + parseInt(itemsPerPage);
    const data1 = data?.slice(startIndex, endIndex);
    setSlicedArray(data1);
  };

  useEffect(() => {
    api1();
  }, []);
  console.log(data)

  return (
    <div className="pagination-container">
      <div className="items-dropdown">
        <label>Items per page: </label>
        <select
          value={itemsPerPage}
          onChange={(e) => itemSettingPerPage(e.target.value)}
          className="items-select"
        >
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
        </select>
      </div>

      <Pagination1
        itemsPerPage={itemsPerPage}
        displayItems={displayItems}
        prevDisplay={prevDisplay}
        nextDisplay={nextDisplay}
        count={count}
        data={data}
        slicedArray={slicedArray}
        array={array}
      />
    </div>
  );
};

export default Pagination;
