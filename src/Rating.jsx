
export default function Rating ({children}){
    const stars = Math.round(children);
    const starElements = Array(5)
    .fill('☆')
    .map((star, index) => index < stars ? '★' : '☆');
    
    return(
        <div className="rating">
          
        {starElements.join('')}
        </div>
    );
}