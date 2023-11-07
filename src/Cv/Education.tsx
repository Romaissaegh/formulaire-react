import './index.css'
interface Edu{
    Name:String,
    Desc:String,
    Location:String,
    Date:String;
}
export default function Education(A:Edu){
    return (
        <div className='block'>
            <section className='LeftBox atend gray midsz'>{A.Name}</section>
            <section className='MidBox'> </section>
            <section className='RightBox midlo'>{A.Desc}</section>
            <br/>
        </div>
    );
}