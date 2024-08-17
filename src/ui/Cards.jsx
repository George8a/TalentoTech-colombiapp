import React from 'react';

function Cards({elemento}) {
    return (


        	
		<article class="postcard light green">
        <a class="postcard__img_link" href="#">
            <img class="postcard__img" src={elemento.images[0]} alt="Image Title" />
        </a>
        <div class="postcard__text t-dark">
            <h1 class="postcard__title green"><a href="#">{elemento.name}</a></h1>
           
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">{elemento.description}</div>
            <ul class="postcard__tagbox">
                <li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                <li class="tag__item play green">
                    <a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
                </li>
            </ul>
        </div>
    </article>
       

    );
}

export default Cards;