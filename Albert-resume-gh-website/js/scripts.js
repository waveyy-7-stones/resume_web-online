/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Get the user's preferred color scheme
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Function to set the color scheme
    function setColorScheme(scheme) {
        const body = document.querySelector('body');
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(scheme);

        // Save the color scheme preference to localStorage
        localStorage.setItem('colorScheme', scheme);
    }

    // Function to toggle the color scheme
    function toggleColorScheme() {
        const body = document.querySelector('body');
        if (body.classList.contains('light-mode')) {
            setColorScheme('dark-mode');
        } else {
            setColorScheme('light-mode');
        }
    }

    // Function to load the saved color scheme preference
    function loadColorSchemePreference() {
        const savedScheme = localStorage.getItem('colorScheme');
        if (savedScheme) {
            setColorScheme(savedScheme);
        } else if (prefersDarkMode) {
            setColorScheme('dark-mode');
        } else {
            setColorScheme('light-mode');
        }
    }

    // Add event listener to the mode toggle button
    const modeToggleBtn = document.getElementById('mode-toggle');
    modeToggleBtn.addEventListener('click', toggleColorScheme);

    // Call the function to load the saved color scheme preference
    loadColorSchemePreference();

});
