"use strict";

const searchInput = document.getElementById('searchInput');
const loader = document.getElementById('loader');
const resultsContainer = document.getElementById('resultsContainer');
const noResultsMessage = document.createElement('div');
noResultsMessage.id = 'noResultsMessage';
noResultsMessage.textContent = 'Ne postoji pjesma ni izvođač pod tim unosom. Pokušajte ispočetka.';

let timerId;

searchInput.addEventListener('input', () => {
  clearTimeout(timerId);
  timerId = setTimeout(fetchData, 500);
});

function fetchData() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') {
    displayNoResultsMessage();
    return;
  }

  showLoader();

  
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      hideLoader();

      if (data.results.length > 0) {
        displayResults(data.results);
      } else {
        displayNoResultsMessage();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      hideLoader();
      displayNoResultsMessage();
    });
}

function showLoader() {
  loader.style.display = 'block';
  resultsContainer.style.display = 'none';
  noResultsMessage.style.display = 'none';
}

function hideLoader() {
  loader.style.display = 'none';
}

function displayResults(results) {
  const table = document.createElement('table');
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  const th1 = document.createElement('th');
  th1.textContent = 'Pjesma';
  const th2 = document.createElement('th');
  th2.textContent = 'Izvođač';
  headerRow.appendChild(th1);
  headerRow.appendChild(th2);

  const tableBody = table.createTBody();
  for (const result of results) {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = result.trackName;
    const cell2 = row.insertCell();
    cell2.textContent = result.artistName;
  }

  resultsContainer.innerHTML = '';
  resultsContainer.appendChild(table);
  resultsContainer.style.display = 'block';
  noResultsMessage.style.display = 'none';
}

function displayNoResultsMessage() {
  resultsContainer.innerHTML = '';
  resultsContainer.style.display = 'none';
  noResultsMessage.style.display = 'block';
  if (!noResultsMessage.parentNode) {
    document.body.appendChild(noResultsMessage);
  }
}

