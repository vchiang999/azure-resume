window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();

    // Close navbar when a nav-link is clicked
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Simulate click on toggler to close
            }
        });
    });

    // Close navbar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarToggler.click(); // Simulate click on toggler to close
        }
    });

    // Initialize Work Experience Carousel
    const workCarouselElement = document.getElementById('workCarousel');
    if (workCarouselElement) {
        const workCarousel = new bootstrap.Carousel(workCarouselElement);
    }
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://getresumecounterfunctionapp.azurewebsites.net/api/GetResumeCounter?code=jp4rx3wuLEzaXvSFeBKaq08RGiVCwRtpAA1Cdxdc15c9ZGjM79tWjg=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}