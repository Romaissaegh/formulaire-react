import './page1.css'
import { useRef } from 'react';
const FirstName=<section className='SingleLine'><label className='Name'>First Name: </label><br/> <input type='text' className='SingleLineInput'/></section>
function SLT({T}){
    return (
        <section id={T[4]} className='SingleLine'><label className='SingleLineText'>{T[1]} </label><br/><input id={T[3]+'Input'} type={T[0]} placeholder={T[2]} className='SingleLineInput' /></section>
    );
}
function Page1rep({L,n}){
    if(n>=L.length)return (<></>);
    return (
        <>
        <SLT T={L[n]}/>
        <Page1rep L={L} n={n+1}/>
        </>
    );
}
export default Page1rep;