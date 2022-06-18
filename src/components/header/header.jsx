import "./header.sass";
import Logo from "../header/imgs/ok.svg";
import HeaderNav from "./header-nav/header-nav";

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="logo" />
            <HeaderNav />
        </header>
    );
}

export default Header;
