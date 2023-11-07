import './App.css'
interface Informa{
  username : string;
  logo : string;
};
function App(info:Informa) {
  return (<div className="Contacts">
    <img className='Logo' src={info.logo}></img>
    <label className='Infos'>{info.username}</label>
    </div>
  )
}

export default App
