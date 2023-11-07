import './skills.css'
export default function Skill({Name,Desc}){
    return (
        <div className='block'>
            <section className='LeftBox atend gray midsz'>{Name}</section>
            <section className='MidBox'> </section>
            <section className='RightBox midlo'>{Desc}</section>
            <br/>
        </div>
    );
}