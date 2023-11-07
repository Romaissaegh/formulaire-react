import './Global.css'
interface K{
    T:String[];
}
export default function Entete(A:K){
    return(
        <>
        <h1>{A.T[0]}</h1>
        {A.T[1] &&(
            <h2>{A.T[1]}</h2>
        )}
        </>
    );
}