function toggleDetails(button) {
  const details = button.nextElementSibling;
  const isHidden = details.classList.contains('hidden');
  
  if (isHidden) {
    details.classList.remove('hidden');
    button.textContent = 'Hide Details';
  } else {
    details.classList.add('hidden');
    button.textContent = 'View Details';
  }
}