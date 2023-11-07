import './honors.css'
interface Hon{
    date:string,
    result: string,
    name: string,
    location: string;
}
export default function Honor(A:Hon){
    return (
        <div className="honors">
            <section className="date">{A.date}</section>
            <section className="result">{A.result}</section>
            <section className="name">{A.name}</section>
            <section className="location">{A.location}</section>
        </div>
    );
}