import './page1.css'
import { useRef } from 'react';
function SLT({T}){
    return (
        <section id={T[3]} className='SingleLine'><label className='SingleLineText'>{T[0]} </label><br/><textarea id={T[2]+'Input'} placeholder={T[1]} className='MultipleLinesInput'/></section>
    );
}
function Page2rep({L,n}){
    if(n>=L.length)return (<></>);
    return (
        <>
        <SLT T={L[n]}/>
        <Page2rep L={L} n={n+1}/>
        </>
    );
}
export default Page2rep;