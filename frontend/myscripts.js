fetch('http://localhost:5000/post')
  .then((res) => res.json())
  .then((data) => console.log(data));
