import Entet from './Entete.tsx'
import './index.css'
import Section_Title from './section_title.tsx'
import Descr from './text.tsx'
import Skill from './Skills.tsx'
import Honor from './honors.tsx'
import Organisation from './Organisation.tsx'
import Fft from './footer.tsx'
function Inst(){
  return (
    <div className='page'>
      <div className="actual-My_CV" id="actual-My_CV">
    <Entet></Entet>
    <Section_Title title='Summary'></Section_Title>
    <Descr content={["I am a competitive programmer & a computer science student. I started my programming journey through MOI when I was in middle school, where I improved my problem solving skills during the last 6 years."]}></Descr>
    <Section_Title title='Education'></Section_Title>
    <section>
        <section className='Education'>
          <label className='BigName'>CPGE Moulay Driss:</label>
          <label className='SMName'>Fes, Morocco</label>
          <br/>
          <label className='midText'> Maths and physics</label>
          <label className='SMName'>2021-2023</label>
        </section>
        <section>
          <label className='BigName'> Ecole Mohamadia d'Ingenieurs:</label>
          <label className='SMName'>Rabat, Morocoo</label>
          <br/>
          <label className='midText'> Computer science engineering</label>
          <label className='SMName'>2023-expected graduation in 2026</label>
          </section> 
    </section>
    <Section_Title title='Skills'></Section_Title>
    <section className='Description'>
      <Skill Name={'Programming:'} Desc={'C/C++, Python, JavaScript.'}/>
      <Skill Name={'Languages:'} Desc={'Frensh, Arabic, English.'}/>
      <Skill Name={'Others:'} Desc={'Maths.'}/>
    </section>
    <Section_Title title='Honors&Rewards'></Section_Title>
    <section className='Description'>
    <Honor date={'2018'} result={'Semi-finalist'} name={'Moroccan Olympiad in informatics'} location={'MOI, Morocco'}/>
    <Honor date={'2019'} result={'Finalist'} name={'Moroccan Olympiad in informatics'} location={'MOI, Morocco'}/>
    <Honor date={'2020'} result={'Finalist'} name={'Moroccan Olympiad in informatics'} location={'MOI, Morocco'}/>
    <Honor date={'2021'} result={'1\'st place'} name={'Moroccan Olympiad in informatics'} location={'MOI, Morocco'}/>
    <Honor date={'2021'} result={'Finalist'} name={'International Olympiad in informatics'} location={'IOI, Singapour'}/>
    <br/>
    <Honor date={'2021'} result={'1\'st place'} name={'Les Journées Nationales des Jeunes Développeurs (JNJD)'} location={'INPT, Morocco'}/>
    <Honor date={'2022'} result={'1\'st place'} name={'Les Journées Nationales des Jeunes Développeurs (JNJD)'} location={'INPT, Morocco'}/>
    <Honor date={'2023'} result={'1\'st place'} name={'Les Journées Nationales des Jeunes Développeurs (JNJD)'} location={'INPT, Morocco'}/>
    <br/>
    <Honor date={'2021'} result={'1\'st place'} name={'AUI compete section coding '} location={'AUI, Morocco'}/>
    <br/>
    <Honor date={'2022'} result={'1\'st place'} name={'CodeIt'} location={'EHTP, Morocco'}/>
    </section>
    <Section_Title title='Programs'></Section_Title>
    <section className='Description'>
    <Organisation date={'2021-now'} role={'Member'} name={'MOI scientifique community'} location={'Morocco'}/>
    <br/>
    <Organisation date={'2021-2023'} role={'Deputy Director'} name={'CP square'} location={'Morocco'}/>
    </section>
    <Fft/>
    </div>
    </div>
  );
}
export default Inst;

