// Handle registration form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const user = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          course: document.getElementById('course').value,
        };
  
        // Get existing users or create new array
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Add new user
        users.push(user);
  
        // Save to local storage
        localStorage.setItem('users', JSON.stringify(users));
  
        // Optional: Send via AJAX POST (simulated)
        fakeAjaxPost(user);
  
        // Clear form
        form.reset();
  
        alert('User registered successfully!');
      });
    }
  
    // If on users.html, populate the table
    const userTable = document.getElementById('userTableBody');
    if (userTable) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.forEach(user => {
        userTable.innerHTML += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.course}</td>
          </tr>
        `;
      });
    }
  });
  
  // Simulated AJAX POST request
  function fakeAjaxPost(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => console.log('Fake POST success:', response))
    .catch(err => console.error('POST error:', err));
  }
  