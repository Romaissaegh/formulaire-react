import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Add_Contacts from './Contacts.tsx'
import CodeforcesLogo from "./assets/Codeforces logo.png";
import phoneLogo from "./assets/Phone img.jpg"
import LinkedIn from "./assets/Linkedin logo.png"
import MailLogo from "./assets/Mail logo.png"
import LocationLogo from "./assets/GPS_Logo.jpg"
import BirthLogo from "./assets/birth.jpg"
import Pdp from "./assets/My_Face1.png"
import './index.css'

let S=["+212 601-410622","med1.mdeghri@gmail.com","med mdeghri","medmdg_MOI"]
let Links=["tel:0601410622","mailto:med1.mdeghri@gmail.com","https://www.linkedin.com/in/med-mdeghri-4b969b229/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bvc8BfW8yTSWwGKR9Z4NP7g%3D%3D","https://codeforces.com/profile/medmdg_MOI"]
let Logos=[phoneLogo,MailLogo,LinkedIn,CodeforcesLogo];
function Entet(){
    return (
    <section className='Entete'>
    <img src={Pdp} className='Pdp'/>
    <div className='Name FirstName'>Mohammed </div>
    <div className='Name LastName'>BENOMAR EL MDEGHRI</div>
    <div className='Desc'>COMPETITIVE PROGRAMMER & COMPUTER SCIENCE STUDENT</div>
    <App logo={LocationLogo} username='24B LOTS BAB AL ANDALOUS APT5 TGHAT FES'></App> | <App logo={BirthLogo} username="15'th August, 2003" ></App>
    <Add_Contacts  username={S} lien={Links} logo={Logos}></Add_Contacts>
    </section>
    );
}
export default Entet;