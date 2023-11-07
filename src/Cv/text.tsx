
import './texts.css'
interface Texts{
    content:string[];
}
function Descr(content:Texts){
    content.content[0]=content.content[0];
    console.log(content.content[0])
    return (
        <div className='Description'>
            {content.content[0]}
        </div>
    );
}

export default Descr;