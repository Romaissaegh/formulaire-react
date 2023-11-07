import './honors.css'
export default function Honor({date,result,name,location}){
    return (
        <div className="honors">
            <section className="date">{date}</section>
            <section className="result">{result}</section>
            <section className="name">{name}</section>
            <section className="location">{location}</section>
        </div>
    );
}