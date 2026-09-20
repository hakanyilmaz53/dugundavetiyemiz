document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       AÇILIŞ / ZARF
    ===================================================== */

    const opening = document.getElementById("opening");
    const envelope = document.getElementById("envelope");
    const openInvitation = document.getElementById("openInvitation");

    document.body.classList.add("no-scroll");

    if (openInvitation && envelope && opening) {

        openInvitation.addEventListener("click", () => {

            envelope.classList.add("open");

            setTimeout(() => {

                opening.classList.add("open");

                document.body.classList.remove("no-scroll");

            }, 850);

        });

    }


    /* =====================================================
       GERİ SAYIM
       
       Düğün:
       25 Ekim 2026 - 19:00
    ===================================================== */

    const weddingDate =
        new Date("2026-10-25T19:00:00+03:00").getTime();

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    function updateCountdown() {

        const now =
            new Date().getTime();

        const difference =
            weddingDate - now;


        if (difference <= 0) {

            if (daysElement)
                daysElement.textContent = "00";

            if (hoursElement)
                hoursElement.textContent = "00";

            if (minutesElement)
                minutesElement.textContent = "00";

            if (secondsElement)
                secondsElement.textContent = "00";

            return;
        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (difference %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (difference %
                    (1000 * 60)) /
                1000
            );


        if (daysElement)
            daysElement.textContent =
                String(days).padStart(2, "0");

        if (hoursElement)
            hoursElement.textContent =
                String(hours).padStart(2, "0");

        if (minutesElement)
            minutesElement.textContent =
                String(minutes).padStart(2, "0");

        if (secondsElement)
            secondsElement.textContent =
                String(seconds).padStart(2, "0");
    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =====================================================
       SCROLL ANIMATION
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(".animate");


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(
        element => {

            element.classList.add("animate");

            observer.observe(element);

        }
    );

});