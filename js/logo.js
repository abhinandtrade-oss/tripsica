class TripsicaLogo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Find if we are in a subdirectory (though currently we are not, it's good practice)
        const pathPrefix = this.getAttribute('path-prefix') || '';
        
        this.innerHTML = `
            <div class="logo-container w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center mb-8 overflow-hidden mx-auto transition-transform hover:scale-105 duration-300">
                <img src="${pathPrefix}assets/images/logo.jpg" alt="Tripsica Tours Travels Logo"
                    class="w-full h-full object-cover rounded-full" loading="lazy">
            </div>
        `;
    }
}

// Define the custom element
if (!customElements.get('tripsica-logo')) {
    customElements.define('tripsica-logo', TripsicaLogo);
}
