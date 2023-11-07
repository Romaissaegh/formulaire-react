import "./section_title.css"
interface title{
    title:string;
};
function Section_Title(Title:title){
    let A1:string="";
    let A2:string="";
    for(let i=0;i<Title.title.length;i++){
        if(i<3){
            A1+=(Title.title[i]);
        }else{
            A2+=(Title.title[i]);
        }
    }
    A2+='__________________________________________________________________________________________________________________________________'
    return (
        <div className="Section_Title">
            <label className="FLS">
                {A1}
            </label>
            <label className="RMS">
                {A2}
            </label>
        </div>
    );
}
export default Section_Title;