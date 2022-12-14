import './styles.css';

export function YouTube(){
    return(
        <div className='youtube'>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/JC9RwUJdQ6M" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>   
          </iframe>
        </div>
        
  )
}
