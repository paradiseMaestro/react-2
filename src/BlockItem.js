import React from 'react';
import axios from 'axios';

export default function BlockItem(props){

    const [isDisabled, setIsDisabled] = React.useState(true);

    let name = React.useRef('');
    let age = React.useRef('');


    function onChangeIsDisabled(id,_name,_age) {
    if(name.current.value==''){
        name.current.value = _name
    }
    if(name.current.age==''){
        name.current.value = _age
    }
    if(!isDisabled){
        axios.post('http://178.128.196.163:3000/api/records/'+id,{
            data: {
                name: name.current.value,
                age: age.current.value
            }
        })
        .then(() => {
            props.fetchData();
        })
    }
    setIsDisabled(!isDisabled)
    }

    function del(id){
        axios.delete('http://178.128.196.163:3000/api/records/'+id)
        .then(() => {
            props.fetchData();
        })
    }

    return (
    <ol className="olItem"
    key={props.i}
    >
        <div>
            <p>Имя: </p>
            <input
            ref={name}
            placeholder={props.name}
            disabled={isDisabled}
            type="text"
            />

            <p>Возраст: </p>
            <input 
            ref={age}
            placeholder={props.age}
            disabled={isDisabled}
            type="text"/>
        </div>
        <div
        onClick={()=>onChangeIsDisabled(props.id,props.name,props.age)}
        className="btn">
            {isDisabled ? 'Изменить':'Сохранить'}
        </div>
        <div className="btn"
        onClick={() => {
            del(props.id);
        }}
        >Удалить</div>
    </ol>        
 
    )
}