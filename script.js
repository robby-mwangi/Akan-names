const akanForm = document.getElementById('akanForm');
const resultDiv = document.getElementById('result');
const akanNameSpan = document.getElementById('akanName');

const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

akanForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const birthdate = new Date(akanForm.birthdate.value);
  const gender = akanForm.gender.value;

  if (!birthdate || !gender) return;

  const dayIndex = birthdate.getDay();

  let akanName = '';
  if (gender === 'male') {
    akanName = maleNames[dayIndex];
  } else if (gender === 'female') {
    akanName = femaleNames[dayIndex];
  }

  akanNameSpan.textContent = akanName;
  resultDiv.style.display = 'block';
});