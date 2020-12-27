import React, { Component, useRef, useState, useEffect } from 'react';
import axios from 'axios';




export default function BlockTitle(props){

    const [body, setbody] = useState([props.body])
console.log(body)
    function R(){
        return (
            <div className="chItemBack">
            <div className="chItem">
                <input placeholder="Имя"/>
                <input placeholder="Возраст"/>
                <div className="btn"> OK </div>
            </div>
            </div>
        )
    }

    function del(id,i){
        axios.delete('http://178.128.196.163:3000/api/records/'+id);
        document.getElementsByClassName('olItem')[i].style.display = 'none';
    }

    function put(){

        axios.put('http://178.128.196.163:3000/api/records/', 
        {

            data: {
                name: 'Ilya',
                age: '34'
            }

        }

)
    }

    return (
        // {el._id}
        <>
        <ul className="">
        {props.body.map(
            (el,i) => (
                    <ol className="olItem" key={i}
                    
                    // style={{ display:'none'}}
                    >
                        <p>
                            Имя: {el.data.name} /
                            Возраст: {el.data.age}
                        </p>
                        <div className="btn">Изменить</div>
                        <div className="btn"
                        onClick={() => {
                            del(el._id,i);
                        }}
                        >Удалить</div>
                    </ol>        
            )
        )}
        {/* <R/> */}
        </ul>
        </>
    )

}