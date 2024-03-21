export default function Home(){
    return(
        <>
        <header>
        <div class="logo">
            <a href="#home" class="nav__link"><img src="img/logoBlack.png" alt="" /></a>
        </div>

        <button class="nav-toggle" aria-label="toggle navigation">
            <span class="hamburger"></span>
        </button>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                <li class="nav__item"><a href="#skills" class="nav__link">My Skills</a></li>
                <li class="nav__item"><a href="#about" class="nav__link">About Me</a></li>
                <li class="nav__item"><a href="#projects" class="nav__link">Projects</a></li>
                <li class="nav__item"><a href="#tutorials" class="nav__link">Tutorials</a></li>
            </ul>
        </nav>
    </header>

    {/* <!--Introduction--> */}
    <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
            Hi, I'm <strong>Shanelle Haye</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Front-End Dev</p>
        <img src="img/ProfileImg.jpg" alt="Shanelle Haye smiling" class="intro__img" />
    </section>

        </>
    )
}