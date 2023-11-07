import './Organisation.css'
interface Org{
    date:String;
    role: String,
    name: String,
    location: String;
}
export default function Organisation(A:Org){
    return (
        <div className='organisation'>
            <section className="date">{A.date}</section>
            <section className="role">{A.role}</section>
            <section className='empty'></section>
            <section className="name">{A.name}</section>
            <section className="location">{A.location}</section>
        </div>
    );
}