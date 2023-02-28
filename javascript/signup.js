async function handleSignupForm(event) {
event.preventDefault();
const userName = document.querySelector('#signupUsername').value.trim();
const password = document.querySelector('#signupPassword').value.trim();
  
if (userName && password) {
const response = await fetch('/api/users/', {
method: 'POST',
body: JSON.stringify({ userName, password }),
headers: { 'Content-Type': 'application/json' }
});

if (response.ok) {
document.location.replace('/blogboard');
} else {
alert(response.statusText);
}}}
  
document.querySelector('#signup').addEventListener('submit', handleSignupForm )     