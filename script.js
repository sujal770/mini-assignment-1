document.getElementById('loadBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/items');
    const data = await response.json();
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous

    data.forEach(item => {
      outputDiv.innerHTML += `<p><strong>${item.name}</strong>: $${item.price}</p>`;
    });
  } catch (error) {
    console.error('Error fetching items:', error);
  }
});
