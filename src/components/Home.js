import { useEffect } from "react";

export default function Home(){
    useEffect(() => {
        const hash = window.location.hash;
        if (hash){
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return(
        <>
        {/* <header>
        <div className="logo">
            <a href="#home" className="nav__link"><img src="img/logoBlack.png" alt="" /></a>
        </div>

        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#skills" className="nav__link">My Skills</a></li>
                <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
                <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
                <li className="nav__item"><a href="#tutorials" className="nav__link">Tutorials</a></li>
            </ul>
        </nav>
    </header> */}

    {/* <!--Introduction--> */}
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I'm <strong>Shanelle Haye</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Front-End Dev</p>
        <img src="img/ProfileImg.jpg" alt="Shanelle Haye smiling" className="intro__img" />
    </section>

        </>
    )
}