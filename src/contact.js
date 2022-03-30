export function displayContact(content) {
    content.innerHTML = "";
    
    let banner = document.createElement('div');
    banner.textContent = "Contact Us"
    banner.classList.add('heading-banner');

    let email = document.createElement('div');
    email.classList.add('email');
    email.textContent = "For any questions, please contact support@northitalia.com"

    
    content.appendChild(banner);
    content.appendChild(email);
}