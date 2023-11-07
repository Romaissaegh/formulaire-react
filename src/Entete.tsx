import './Global.css'
export default function Entete({T}){
    return(
        <>
        <h1>{T[0]}</h1>
        {T[1] &&(
            <h2>{T[1]}</h2>
        )}
        </>
    );
}