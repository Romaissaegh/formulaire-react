import './index.css'
export default function Education({Name,Desc,Location,Date}){
    return (
        <div className='block'>
            <section className='LeftBox atend gray midsz'>{Name}</section>
            <section className='MidBox'> </section>
            <section className='RightBox midlo'>{Desc}</section>
            <br/>
        </div>
    );
}