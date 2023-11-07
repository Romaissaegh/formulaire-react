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
        <section className='SingleLine'><label className='SingleLineText'>{A.T[0]} </label><br/><input id={A.T[2]+'Input'} placeholder={A.T[1]+''} className='SingleLineInput'/></section>
    );
}
function Page1rep(A:K){
    if(A.n>=A.L.length)return (<></>);
    return (
        <>
        <SLT T={A.L[A.n]}/>
        <Page1rep L={A.L} n={A.n+1}/>
        </>
    );
}
export default Page1rep;