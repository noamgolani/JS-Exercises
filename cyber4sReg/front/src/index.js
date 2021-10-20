import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

import 'bootstrap';
import $ from 'jquery';
import axios from 'axios';

$('form').on('submit', (event) => {
  event.preventDefault();
});

$('#sbmt').on('click', (event) => {
  event.preventDefault();
  const name = $('input#name').val();
  const age = $('input#age').val();
  const ability = [
    ...$('input[type="checkbox"]').map(
      (_, checkEl) => checkEl.checked && $(`[for="${checkEl.id}"]`).html(),
    ),
  ].filter((val) => val);

  axios
    .post('http://127.0.0.1:5000/api', {
      name,
      age,
      ability,
    })
    .then(() => {
      alert('Success');
    })
    .catch((err) => {
      if (err.response) alert(`${err.response.status}: ${err.response.statusText}`);
    });
});
