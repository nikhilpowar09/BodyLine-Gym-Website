 // Form validation
 const form = document.querySelector('.contact-form');
 const nameInput = document.querySelector('input[name="cf-name"]');
 const emailInput = document.querySelector('input[name="cf-email"]');
 const messageInput = document.querySelector('textarea[name="cf-message"]');
 const messageError = document.querySelector('#message-error');

 form.addEventListener('submit', (e) => {
   e.preventDefault();

   if (nameInput.value === '') {
     messageError.textContent = 'Please enter your name';
     return;
   }

   if (emailInput.value === '' || !emailInput.value.includes('@')) {
     messageError.textContent = 'Please enter a valid email address';
     return;
   }

   if (messageInput.value === '') {
     messageError.textContent = 'Please enter a message';
     return;
   }

   // If all fields are valid, submit the form
   form.submit();
 });