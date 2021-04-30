const ImageList = ({Images}) =>{
    console.log(Images)
    return(
        
        <div className="image-list">
            {Images.map((image)=>(
                <div className="img-preview" key={image.id}>
                    <a href ={image.urls.small} ><img src={image.urls.small} className="img" /></a>
                    
                    
                    
                </div>
            ))}
            
        </div>
        
    );
}
export default ImageList;