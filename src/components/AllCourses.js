import React, {useState} from "react";
import Course from "./Course";

const Allcourse=()=>{

    // Creating an Array of Courses

    const[courses, setCourse] = useState([
        {title: "Java Course", description: "this is demo course"},
        {title: "Django Course", description: "this is demo course"},
        {title: "Reactjs Course", description: "this is demo course"}
    ]);

    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>

            {courses.length>0?
            courses.map((item)=> <Course course={item
            }/>):"NO COURSES "}
        </div>
    )
}

export default Allcourse;