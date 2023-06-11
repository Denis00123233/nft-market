import Image from "next/image";
import Logo from "../../assets/imges/logo.png";
import styles from "./styles.module.scss";
import Container from "../Container";

const Header = () => {
    return (
        <Container>
            <header className={styles.header}>
                <div className={styles.header__left}>
                    <Image src={Logo} alt="Logo" />  
                    <div className={styles.header__sep}></div> 
                    <nav>
                        <a href="#Discover">Discover</a>
                        <a href="#How-it-work">How it work</a>
                    </nav>
                </div>
                <div className={styles.header__right}>
                    <div className={styles.header__inputWrap}>
                        <input type="text" placeholder="Search" />
                    </div>
                    {/* <i className="icon-notify" /> */}
                    <button className={styles.header__blueButton} >Upload</button>
                    <button className={styles.header__whiteButton} >Connect Wallet</button>
                </div>
            </header>
        </Container>
    )
}

export default Header;