import './skills.css'
interface Ski{
    Name:String,
    Desc:String;
}
export default function Skill(A:Ski){
    return (
        <div className='block'>
            <section className='LeftBox atend gray midsz'>{A.Name}</section>
            <section className='MidBox'> </section>
            <section className='RightBox midlo'>{A.Desc}</section>
            <br/>
        </div>
    );
}