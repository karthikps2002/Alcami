
window.addEventListener('DOMContentLoaded', function () {
    // Newsletter subscribe button functionality
    const subscribeButton = document.querySelector('.subscribe-button');
    const emailInput = document.querySelector('.form-input');
  
    if (subscribeButton && emailInput) {
      subscribeButton.addEventListener('click', function () {
        const email = emailInput.value.trim();
  
        if (!email) {
          alert('Please enter an email address.');
          return;
        }
  
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
  
        // Simulate a subscription (replace with actual API call)
        console.log(`Subscribed with email: ${email}`);
        alert('Thank you for subscribing!');
        emailInput.value = '';
      });
    } else {
      console.error("Subscribe button or email input not found.");
    }
  
    // Optional: Add click events to social icons
    const socialLinks = document.querySelectorAll('.footer-column .footer-link');
  
    socialLinks.forEach(link => {
      link.addEventListener('click', () => {
        const platform = link.textContent.trim();
        alert(`You clicked on ${platform}. Add your logic here.`);
      });
    });
  });
  