import useFetch from "./useFetch"
import ImageList from "./ImageList";

const Home = () => {
    const { error, Images } = useFetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
  
    return (
      <div className="home">
        { error && <div>{ error }</div> }
        { Images && <ImageList Images={Images} /> }
      </div>
    );
  }
   
  export default Home;