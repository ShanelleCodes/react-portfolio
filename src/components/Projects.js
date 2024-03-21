export default function Projects(){
    return(
        <>
            <section class="projects" id="projects">
        <h2 class="section__title">My Projects</h2>
        <p class="section__subtitle section__subtitle--projects">A selection of my range of work</p>

        <div class="portfolio">
            {/* <!--Portfolio Item 01--> */}
            <a href="/pages/project01.html" class="portfolio__item">
                <img src="img/projectImg/project01.jpg" alt="" class="portfolio__img" />
            </a>
            {/* <!--Portfolio Item 02--> */}
            <a href="/pages/project02.html" class="portfolio__item">
                <img src="/img/projectImg/project02.jpg" alt="" class="portfolio__img" />
            </a>
            {/* <!--Portfolio Item 03--> */}
            <a href="/pages/gallery.html" class="portfolio__item" >
                <img src="/img/projectImg/graphic-design.jpg" alt="" class="portfolio__img" />
            </a>
            {/* <!--Portfolio Item 04--> */}
            <a href="/pages/project03.html" class="portfolio__item" hidden>
                <img src="/img/projectImg/project03.jpg" alt="" class="portfolio__img" />
            </a>
            {/* <!--Portfolio Item 05--> */}
            <a href="#" class="portfolio__item" hidden>
                <img src="/img/projectImg/project-img.jpg" alt="" class="portfolio__img" />
            </a>
            {/* <!--Portfolio Item 06--> */}
            <a href="#" class="portfolio__item" hidden>
                <img src="/img/projectImg/project-img.jpg" alt="" class="portfolio__img" />
            </a>

        </div>
    </section>
        </>
    )
}