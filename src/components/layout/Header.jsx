import Container from "../common/Container"

import Image from "../common/Image"

import logo from "../../assets/logo.png";
import Flex from "../common/Flex";
import Button from "../common/Button";
import { Link } from "react-router-dom";
// import About from "../pages/About";



const Header = () => {
  return (
    <div className="bg-orange-400 py-5">
    <Container>
   <Flex className={"justify-between items-center"}>
    <div className="">
      <Image imgSrc={logo}/>
    </div>
    <div className="">
      <ul className="flex items-center gap-4">
        <li className=" text-white font-semibold text-[20px] hover:text-orange-500"><Link to={"./"}>Home</Link></li>
        <li className=" text-white font-semibold text-[20px] hover:text-orange-500"><Link to={"about"}>About</Link></li>
        <li className=" text-white font-semibold text-[20px] hover:text-orange-500"><Link to={"service"}>Service</Link></li>
        <li className=" text-white font-semibold text-[20px] hover:text-orange-500"><Link to={"portfolio"}>portfolio</Link></li>
        <li className=" text-white font-semibold text-[20px] hover:text-orange-500"><Link to={"price"}>price</Link></li>
        <li className=" text-white font-semibold text-[20px] hover:text-orange-500"><Link to={"blog"}>Blog</Link></li>
      </ul>
    </div>
    <div className=""> 
      <Button btntxt={"contact us"}/>
    </div>
   </Flex>
    </Container>
    </div>
  )
}

export default Header