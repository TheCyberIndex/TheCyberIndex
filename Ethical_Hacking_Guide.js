// Ethical_Hacking_Guide.js

// Example: Add functionality to toggle sections for better readability

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        // Create a toggle button for each section
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Section';
        toggleButton.style.display = 'block';
        toggleButton.style.margin = '10px auto';
        toggleButton.style.padding = '5px 10px';
        toggleButton.style.borderRadius = '5px';
        toggleButton.style.backgroundColor = '#00aaff';
        toggleButton.style.color = '#fff';
        toggleButton.style.border = 'none';
        toggleButton.style.cursor = 'pointer';

        // Insert the button at the top of each section
        section.insertBefore(toggleButton, section.firstChild);

        // Add click event to toggle the visibility of the section's content
        toggleButton.addEventListener('click', () => {
            const content = section.querySelectorAll('p, h3, ol, ul, pre');
            content.forEach(element => {
                if (element.style.display === 'none') {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    });
});
