import React, { useEffect ,useNavigate} from 'react'
import { useParams } from 'react-router-dom'
import {course,dev} from '../constants/course'
import Product from './product'
import hary from "../harry.png";
import master from "../master.jpg"
import apna from "../apna.jpg";
import webdev from "../webdev.jpg"
import rajat from '../rajat.jpg'

const Course = () => {
   return(
    <>
    
    <div className='contain'>
    <h1 className='develop'>Development Courses</h1>
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      margin:"170px 260px ",
      gap:"3em",
      width:"75em",
      
      justifyContent:"space-evenly",
      
    }}>
    
     
     <Product
     imgsrc={hary} 
    title='CodeWithHarry'
    para='Javascript'
    stars='4.4'
     />
     <Product
     imgsrc={apna} 
    title='Apna College'
    para='Web  Course'
     />
     <Product
     imgsrc={webdev} 
    title='CodeWithHarry'
    para='Javascript'
     />
     <Product
     imgsrc={rajat} 
    title='CodeWithHarry'
    para='Javascript'
     />
     <Product
     imgsrc={master} 
    title='CodeWithHarry'
    para='Javascript'
     /><Product
     imgsrc={master} 
    title='CodeWithHarry'
    para='Javascript'
     />
     <Product
     imgsrc={hary} 
    title='CodeWithHarry'
    para='Javascript'
     />
     <Product
     imgsrc={hary} 
    title='CodeWithHarry'
    para='Javascript'
     />
     
     </div>
    </div>
    </>
  );
  };
  
  
export default Course
