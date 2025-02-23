import Card from "./Card"

const Pagination1 = ({displayItems,prevDisplay,nextDisplay,array,slicedArray,count,data,itemsPerPage})=>{

    console.log(count)
    console.log(itemsPerPage)
    console.log(data.length)
    return (
        <>
        <div className="product-list">
        {slicedArray.length > 0
          ? slicedArray.map((item) => {
              return (
                // <div>
                //   <img src={item.thumbnail || item.image}/>
                // <div key={item.id} className="product-card">
                //   {item?.title}
                // </div>
                // </div>
                <Card item={item}/>
              );
            })
          : data?.map((item) => {
              return (
              <Card item={item}/>
              );
            })}
      </div>



      <div className="pagination-buttons">
       {count > 0  && <button onClick={prevDisplay}>Previous</button> }
        {array?.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => displayItems(index)}
              className="page-button"
            >
              {item}
            </button>
          );
        })}
        {count < data.length / itemsPerPage - 1  && <button onClick={nextDisplay}>Next</button> }
      </div>

      </>
    )
}
export default Pagination1