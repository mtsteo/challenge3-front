import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg"
import user from "../../../assets/icons/user.svg";
import search from "../../../assets/icons/search.svg";
import heart from "../../../assets/icons/heart.svg";
import cart from "../../../assets/icons/cart.svg";
import MenuButton from "./MenuButton";
import MenuIcon from "./MenuIcon";

export default function Header() {
  const MenuOptions = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop"
    },
    {
      id: 3,
      name: "About",
      path: "/about"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
  ]

  const MenuIcons = [
    {
      id: 1,
      path: "",
      icon: user
    },
    {
      id: 1,
      path: "",
      icon: search
    },
    {
      id: 1,
      path: "",
      icon: heart
    },
    {
      id: 1,
      path: "",
      icon: cart
    }
  ]
  return (
    <header className="grid grid-cols-3 h-20 justify-center items-center">
      <Link to="/home" className=" h-fit w-fit flex  ">
        <img className="ml-16  self-center" src={logo} alt="" />
      </Link>
      <div className="grid grid-cols-4 gap-10 ">
        {MenuOptions.map((option) => {
          return <MenuButton key={option.id} name={option.name} path={option.path} />
        })}
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-row gap-12">
          {MenuIcons.map((icon) => <MenuIcon path={icon.path} icon={icon.icon} />)}
        </div>
      </div>
    </header>
  );
}
