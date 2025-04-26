import { Link } from 'react-router-dom';
function MainComponenet() {

    return (
        <nav>

            <h2>Create Product or Store</h2>
            
            <Link to="/product" style={{ display: "block", marginBottom: "8px" }}>Product Add</Link>
            <Link to="/store" style={{ display: "block", marginBottom: "8px" }}>Store Add</Link>
            <Link to="/productList" style={{ display: "block", marginBottom: "8px" }}>Products Shows</Link>
            <Link to="/storeList" style={{ display: "block", marginBottom: "8px" }}>Stores Show</Link>
        </nav>
      ); 
     

}

export default MainComponenet 