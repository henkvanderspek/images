const url = 'https://localhost:3000/comments';

fetch(url)
  .then((r) => r.json())
  .then(
    (json) =>
      (document.getElementById('output').innerHTML = JSON.stringify(
        json,
        null,
        2
      ))
  );
