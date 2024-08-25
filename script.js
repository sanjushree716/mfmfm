document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'pass') {
        window.location.href = 'admin.html';
    } else if (username === 'student' && password === 'pass') {
        window.location.href = 'student.html';
    } else {
        alert('Invalid credentials!');
    }
});
