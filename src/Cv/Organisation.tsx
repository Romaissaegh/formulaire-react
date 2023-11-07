import './Organisation.css'
export default function Organisation({date,role,name,location}){
    return (
        <div className='organisation'>
            <section className="date">{date}</section>
            <section className="role">{role}</section>
            <section className='empty'></section>
            <section className="name">{name}</section>
            <section className="location">{location}</section>
        </div>
    );
}