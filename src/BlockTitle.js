import React from 'react';
// import axios from 'axios';
import BlockItem from './BlockItem'



export default function BlockTitle(props){

    // const [body, setbody] = useState(props.body)
    // const items = React.useRef([]);

// console.log(items.current)

    return (
        // {el._id}
        <>
        <ul className="">
        {props.body.map(
            
            (el,i) => (
                <BlockItem 
                name={el.data.name}
                age={el.data.age}
                fetchData={props.fetchData}
                i={i}
                id={el._id}
                 />     
            )
        )}
        {/* <R/> */}
        </ul>
        </>
    )

}