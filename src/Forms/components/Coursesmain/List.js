import React from 'react'
import { useSelector } from 'react-redux';

const List = () => {

    const CourseArr = useSelector((state) => state.subscribe.subArr);
    console.log(CourseArr)
    return (
        <div className="container">
        <section className="main-cart-section">
          <div className="cart-items">
            <div className="cart-items-container-list">
              {CourseArr.map((item, i) => (
                <div className="items-info" key={i}> {/* Added key attribute */}
                  <div className="product-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="title">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="PlayList">{/* Add content for Playlist */}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}

export default List

{/* <div className="items-info">
              <div className="product-img">
                <img src={c2} alt="" />
              </div>
              <div className="title">
                <h3>C++ PROGRAMMING</h3>
              </div>
            </div>
            <div className="items-info">
              <div className="product-img">
                <img src={c5} alt="" />
              </div>
              <div className="title">
                <h3>WEB DEVELOPMENT</h3>
              </div>
            </div>
            <div className="items-info">
              <div className="product-img">
                <img src={c6} alt="" />
              </div>
              <div className="title">
                <h3>REACT JS</h3>
              </div>
            </div>
            <div className="items-info">
              <div className="product-img">
                <img src={c7} alt="" />
              </div>
              <div className="title">
                <h3>PYTHON PROGRAMMING</h3>
              </div>
            </div> */}