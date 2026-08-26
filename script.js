const navigationLinks = document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                menuLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.45
    }
);

sections.forEach((section) => {
    observer.observe(section);
});