import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
const firstJob ={
  title: 'FrontEnd developer',
  company:  "Google",
  img: "https://i.blogs.es/6f44dd/google-2015-1/450_1000.jpg"
};

const secondJob = {
  title: 'BackEnd developer',
  company:  "Intel",
  img: "https://pbs.twimg.com/profile_images/1410620195895484416/RrhbE0Pg_400x400.jpg"
}
//setup vars

function JobList(){
  return(
    <section className='joblist'>
      <Job
        img={firstJob.img}
        title={firstJob.title}
        company={firstJob.company}
      />
      <Job
        img = {secondJob.img}
        title = {secondJob.title}
        company = {secondJob.company}
      />
      </section>
  );
}

const Job = (props) => {
  
  return(
  <article className='job'>
    <img src={props.img}alt = ''/>
    <h1>{props.title}</h1>
    <h4>{props.company}</h4>
    <p></p>
  </article>
  );
};

//const Image = () => <img src="https://i.blogs.es/6f44dd/google-2015-1/450_1000.jpg" alt = ""/>;
//const Company = () => <h4 style =  {{color:'#617d98',fontSize:
//'0.75rem',marginTop:'0.25rem'}}>Google</h4> 
//const Title = () => <h1>FrontEnd Developer</h1>



ReactDom.render(<JobList />, document.getElementById('root'));