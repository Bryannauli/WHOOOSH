// Handle Ticket Search Form
document.querySelector('.pemesanan-tiket form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const asal = document.getElementById('asal').value;
    const tujuan = document.getElementById('tujuan').value;
    const tanggal = document.getElementById('tanggal').value;

    if (asal && tujuan && tanggal) {
        alert(`Pencarian tiket dari ${asal} ke ${tujuan} pada ${tanggal}`);
    } else {
        alert('Mohon lengkapi semua data pemesanan!');
    }
});

// Simulate Payment Confirmation
document.querySelector('.konfirmasi-pembayaran').addEventListener('click', function() {
    const status = Math.random() > 0.5 ? 'Berhasil' : 'Gagal';
    alert(`Pembayaran ${status}`);
});

// Simple Login Functionality
document.querySelector('.profil form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "user@keretaapi.com" && password === "12345") {
        alert('Login Berhasil!');
    } else {
        alert('Email atau password salah.');
    }
});
