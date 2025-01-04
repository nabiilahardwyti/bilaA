document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let nama = document.getElementById('nama').value;
    let jumlah = document.getElementById('jumlah').value;
    let kategori = document.getElementById('kategori').value;

    if (!nama || !jumlah || !kategori) {
        document.getElementById('message').innerText = 'Semua kolom harus diisi!';
        document.getElementById('message').style.color = 'red';
    } else {
        document.getElementById('message').innerText = 'Transaksi berhasil disimpan!';
        document.getElementById('message').style.color = 'green';

        let table = document.getElementById('tabelTransaksi').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.rows.length);
        newRow.insertCell(0).innerText = nama;
        newRow.insertCell(1).innerText = jumlah;
        newRow.insertCell(2).innerText = kategori;

        document.getElementById('transaksiForm').reset();
    }
});
