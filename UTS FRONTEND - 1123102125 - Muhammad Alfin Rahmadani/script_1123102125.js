function hitungBiaya() {
    const berat = parseFloat(document.getElementById('berat').value);
    const asal = document.getElementById('asal').value;
    const tujuan = document.getElementById('tujuan').value;
    let biayaBerat, biayaJarak;

    // Biaya berdasarkan berat
    if (berat <= 1) {
        biayaBerat = 1500;
    } else if (berat <= 5) {
        biayaBerat = 2500;
    } else if (berat <= 10) {
        biayaBerat = 3500;
    } else {
        biayaBerat = 4500;
    }

    // Biaya berdasarkan jarak
    const biayaJarakTable = {
        'Banyuwangi': {'Banyuwangi': 5000, 'Jember': 7500, 'Probolinggo': 10000, 'Surabaya': 15000},
        'Jember': {'Banyuwangi': 7500, 'Jember': 5000, 'Probolinggo': 8500, 'Surabaya': 12500},
        'Probolinggo': {'Banyuwangi': 10000, 'Jember': 8500, 'Probolinggo': 6500, 'Surabaya': 9500},
        'Surabaya': {'Banyuwangi': 15000, 'Jember': 12500, 'Probolinggo': 9500, 'Surabaya': 5000}
    };

    biayaJarak = biayaJarakTable[asal][tujuan];

    // Total Biaya
    const totalBiaya = biayaBerat + biayaJarak;
    document.getElementById('totalBiaya').value = "Rp. " + totalBiaya.toLocaleString();
}
