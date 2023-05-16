// fetch(`http://localhost:5000/post`)
//   .then((res) => res.json())
//   .then((data) => console.log(data[6].excuse));

fetch(`http://localhost:5000/post`).then((res) =>
  res.json().then((data) => {
    console.log(data);
    document.querySelector('#excuse').innerHTML =
      data[Math.floor(Math.random() * data.length)].excuse;
  })
);

const refreshButton = document.querySelector('#refresh-button');
const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener('click', refreshPage);
