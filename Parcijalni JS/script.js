"use strict";

document.addEventListener('DOMContentLoaded', function() {

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('results');
    const loader = document.getElementById('loader');
  
   
    searchButton.addEventListener('click', handleSearch);
  
    function handleSearch() {
      const query = searchInput.value.trim();
  
      
      resultsContainer.innerHTML = '';
  
      if (query.length > 0) {
        showLoader();
  
       
        const searchUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}`;
  
       
        fetch(searchUrl)
          .then(response => response.json())
          .then(data => {
            hideLoader();
  
            if (data.resultCount === 0) {
              displayMessage('Nema rezultata.');
            } else {
              displayResults(data.results);
            }
          })
          .catch(error => {
            hideLoader();
            displayMessage('Dogodila se pogreška. Molimo pokušajte ponovno kasnije.');
          });
      }
    }
  
    function showLoader() {
      loader.style.display = 'block';
    }
  
    function hideLoader() {
      loader.style.display = 'none';
    }
  
    function displayMessage(message) {
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      resultsContainer.appendChild(messageElement);
    }
  
    function displayResults(results) {
      results.forEach(result => {
        const resultElement = document.createElement('p');
        resultElement.textContent = result.trackName;
        resultsContainer.appendChild(resultElement);
      });
    }
  });
  