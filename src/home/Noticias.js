import React from 'react'
import './Noticias.css';

export default function Noticias() {
    return (
        <section id="noticias" className='padded'>
            <div className="container">
                <h2>ADICIONAL</h2>
                <div className="row">
                
                
                <div class="why-us">
                    <div class="row  justify-content-md-center text-center">
                      <div class="col-md-3 col-xs-12">
                        <div class="count">4526</div>
                        <span class="span2">Lorem Ipsum </span>
                        <br></br>
                        <p class="p2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                      <div class="col-md-3 col-xs-12">
                        <div class="count">85599</div>
                        <span class="span2">Lorem Ipsum </span>
                        <br></br>
                        <p class="p2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                      <div class="col-md-3 col-xs-12">
                        <div class="count">45555</div>
                        <span class="span2">Lorem Ipsum </span>
                        <br></br>
                        <p class="p2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                  </div>
                    
                   
                </div>
            </div>
            <br></br>
            <br></br>
        <div class="container">
            <div class="row  ">
                
                <figure class="col-md">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/V_MX0HiIgRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </figure>

                <article class="col-xs-12 col-sm-12 col-md ">
                  <h2 class="title">Informacion</h2>       
                  
                  <div class="items col-xs-12 col-sm-12 col-md-12">
                    
                    <i class="fas fa-tv"></i>
                    <div class="content">
                      <h5 class="title">Nuestra Historia </h5>
                      <p>contamos con las mejores marcas inspiradoras </p>
                      <a href="#" class="read-more">Conocer más &gt;&gt;</a> 
                    </div>
                  </div> 
                  <div class="items col-xs-12 col-sm-12 col-md-12">
                    
                    <i class="fas fa-layer-group"></i>
                    <div class="content">
                      <h5 class="title">Datos Historicos </h5>
                      <p>contamos con marcas que trabajan en lo alto con deportistas reconocidos mundialmente</p>
                      <a href="#" class="read-more">Conocer más &gt;&gt;</a> 
                    </div>
                  </div> 
                  
                 </article>            
            </div>
        </div>
    </section>
    )
}
