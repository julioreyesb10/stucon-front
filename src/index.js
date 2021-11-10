import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';

//setup vars


function JobList(){
  return(
    <section className='joblist'>
      <Job/>
      <Job/>
      <Job/>
      <Job/>      
      </section>
  );
}

const Job = () => {
  return<article className='job'>
    <Image></Image>
    <Title/>
    <Company/>
  </article>;
};

const Image = () => <img src="https://i.blogs.es/6f44dd/google-2015-1/450_1000.jpg" alt = ""/>;
const Company = () => <h4>Google</h4> 
const Title = () => <h1>FrontEnd Developer</h1>
ReactDom.render(<JobList />, document.getElementById('root'));