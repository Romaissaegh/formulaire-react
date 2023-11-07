import './page1.css'
interface Ti{
    T:String[];
}
interface K{
    L:String[][],
    n:number;
}
function SLT(A:Ti){
    return (
        <section className='SingleLine'><label className='SingleLineText'>{A.T[0]} </label><br/><textarea id={A.T[2]+'Input'} placeholder={A.T[1]+''} className='MultipleLinesInput'/></section>
    );
}
function Page2rep(A:K){
    if(A.n>=A.L.length)return (<></>);
    return (
        <>
        <SLT T={A.L[A.n]}/>
        <Page2rep L={A.L} n={A.n+1}/>
        </>
    );
}
export default Page2rep;