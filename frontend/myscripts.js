fetch(`http://localhost:5000/post`).then((res) =>
  res.json().then((data) => {
    // console.log(data);
    document.querySelector('#excuse').innerHTML =
      data[Math.floor(Math.random() * data.length)].message;
  })
);
// refresh button
const refreshButton = document.querySelector('#refresh-button');
const refreshPage = () => {
  location.reload();
};
refreshButton.addEventListener('click', refreshPage);
//modal
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  modal.style.display = 'block';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// formulaire

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', () => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const data = new URLSearchParams(formData);
  formData.get('message');
  fetch(`http://localhost:5000/post`, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
