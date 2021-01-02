import React from 'react';
import axios from 'axios';

export default function BlockAdd(props){

    // const [man, setInfoOfMan] = React.useState({});

    const name = React.useRef();
    const age = React.useRef();


    function addData() {

        // props.fetchData();
        // return false
        axios.put('http://178.128.196.163:3000/api/records/', {
                data: {
                    name: name.current.value,
                    age: age.current.value
                }
            }
        )
        .then(()=>props.fetchData());
        name.current.value= '';
        age.current.value = '';
    }

//     function put(){

// axios.put('http://178.128.196.163:3000/api/records/', {
//         data: {
//             name: 'Ilya',
//             age: '34'
//         }
//     }
// )
//     }



    // function onChangeName(event){
    //     // setstate(event)
    //     setInfoOfMan({
    //             ...man,
    //             name: event.target.value
    //         })
    // // console.log(man)
    // }

    // function onChangeAge(event){
    //     setInfoOfMan({
    //             ...man,
    //             age: event.target.value
    //         })
    // // console.log(man)
    // }
    return(
        <>
        <h1 className="litleClass">Добавить запись</h1>
        <div className="addComponent">
            <input ref={name} placeholder="Имя" type="text"/>
            <input ref={age} placeholder="Возраст" type="text"/>
            <div 
                className="btn"
                onClick={addData}
            >
                Добавить
            
            </div>
        </div>

        </>
    )

}