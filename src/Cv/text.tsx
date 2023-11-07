import { Component } from 'react';
import './texts.css'
interface Texts{
    content:string[];
}
function Descr(content:Texts){
    content.content[0]=content.content[0];
    console.log(content.content[0])
    return (
        <div className='Description'>
            {content.content[0]}
        </div>
    );
}

export default Descr;
function Event(content:Texts){
    return (
        <div className='Event'>
            <div className='SMName'>{content.content[0]}</div>
            &en=
            <div className='SMName'>{content.content[1]}</div>
        </div>
    );
}