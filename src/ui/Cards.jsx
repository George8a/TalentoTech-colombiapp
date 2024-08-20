import React from 'react';

function Cards({elemento}) {
    return (


        	
		<article className="postcard light green">
        <a className="postcard__img_link" href="#">
            <img className="postcard__img" src={elemento.images[0]} alt="Image Title" />
        </a>
        <div className="postcard__text t-dark">
            <h1 className="postcard__title green"><a href="#">{elemento.name}</a></h1>
           
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">{elemento.description}</div>
         
        </div>
    </article>
       

    );
}

export default Cards;