import Image from "next/image";
import Croco from "../assets/crocodilodemo.png"

const Home = () => {
  return (
    <div>
   
   <Image
      src={Croco}
      alt="Minha Imagem"
      width={100}
      height={70}
   />
    </div>
  );
}

export default Home;
