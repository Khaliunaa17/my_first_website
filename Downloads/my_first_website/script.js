const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Form илгээгдэхийг зогсооно

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Хоосон утга шалгах
  if (name === '' || email === '' || message === '') {
    alert('Бүх талбарыг бөглөнө үү!');
    return;
  }

  // Email шалгах regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Зөв имэйл хаяг оруулна уу!');
    return;
  }

  // Амжилттай илгээсэн бол
  alert('Амжилттай илгээгдлээ!');

  // Form талбар хоослох
  form.reset();
});

