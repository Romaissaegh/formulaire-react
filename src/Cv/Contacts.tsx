import App from './App.tsx'
import './App.css'
interface Contacts{
    username : string[];
  logo : string[];
  lien :string[];
}
function Add_Contacts(info:Contacts) {
  return (<div className='Conact'>
  <label className="Contact">
    <img className='Logo' src={info.logo[0]}></img>
    <a className='Username' target='_blank' href={info.lien[0]}>{info.username[0]}</a>
    </label> | 
    <label className="Contact">
    <img className='Logo' src={info.logo[1]}></img>
    <a className='Username' target='_blank' href={info.lien[1]}>{info.username[1]}</a>
    </label> | <label className="Contact">
    <img className='Logo' src={info.logo[2]}></img>
    <a className='Username' target='_blank' href={info.lien[2]}>{info.username[2]}</a>
    </label> | 
    <label className="Contact"> <img className='Logo' src={info.logo[3]}></img>
    <a className='Username' target='_blank' href={info.lien[3]}>{info.username[3]}</a>
    </label>
    </div>
  )
}

export default Add_Contacts
