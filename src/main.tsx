import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Page1rep from './page1';
import Page2rep from './page2';
import Ent from './Entete';
import Inst from './Cv/main';
const root=ReactDOM.createRoot(document.getElementById('root')!);
const slide=ReactDOM.createRoot(document.getElementById('Test')!);
const CV=ReactDOM.createRoot(document.getElementById('CV')!);
const A=[['text','First name:','Ex:Mohammed','User_FN'],['text','Last name:','Ex:BENOMAR EL MDEGHRI','User_LN'],['date','Birthday:','','User_Bd'],['tel','Phone number','Ex: +212 612-345678','User_PN'],['mail','Email:','Ex: qwertyu@iop.com','User_email'],['text','Country:','Ex:Morocco','User_country'],['text','City','Ex:Fes','User_City'],['text','Profession','Ex:Computer engineering student','User_Prof']];
const B=[['Education:','Ex:\n\nSchool Mohamadia of engineering: Computer science engineering','School'],['Languages:','Ex:\n\nEnglish\nArabic\n...','Languages'],['Technical skills:','EX:\n\nProgramming: Javascript,C++.\nMathematical:Linear algebra.','Tech_skills'],['Other skills:','Ex:\n\nGood at speaches.','Other_skills']];
function Init(){
root.render(
  <React.StrictMode>
    <Ent T={['Formulaire','Page 1: Personal informations']}/>
    <Page1rep L={A} n={0}/>
    <br/>
    <section className='Centered'><button className='Button1' onClick={P2}>Next</button></section>
    <br/>
  </React.StrictMode>
);
CV.render(<></>);
sliding();
}

function P2(){
  root.render(
    <React.StrictMode>
      <Ent T={['Formulaire','Page 2: Career']}/>
      <Page2rep L={B} n={0}/>
      <br/>
      <section className='Centered'><button className='Button1' onClick={CV_Load}>Submit</button></section>
      <br/>
    </React.StrictMode>
  );
  CV.render(<></>);
  }
  function CV_Load(){
    CV.render(
      <React.StrictMode>
        <Inst />
        <br/>
      </React.StrictMode>
    );
    root.render(<></>);
    }

Init();
function sliding(){
slide.render(
  <React.StrictMode>
    <br/>
    <button className='slide' onClick={Init}>Page 1</button>
    <br/>
    <button className='slide' onClick={P2}>Page 2</button>
    <br/>
    <button className='slide' onClick={CV_Load}>CV</button>
  </React.StrictMode>
);
}
