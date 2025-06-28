// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json())
    .then(data => {
      // Create a <p> tag and show the new ID
      const p = document.createElement("p");
      p.textContent = `New user ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch(error => {
      // Show the error message in a <p> tag
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
