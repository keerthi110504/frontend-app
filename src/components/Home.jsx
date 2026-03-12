import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const addToCart = () => {
    navigate("/cart");
  };

  return (
    <button onClick={addToCart}>
      Add to Cart
    </button>
  );
}

export default Home;