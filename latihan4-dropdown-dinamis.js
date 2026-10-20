const dbLokasi = {
  "Jawa Timur": ["Surabaya", "Malang", "Sidoarjo", "Gresik", "Kediri"],
  "Jawa Tengah": ["Semarang", "Solo", "Magelang", "Tegal"],
  "Jawa Barat": ["Bandung", "Bogor", "Bekasi", "Cirebon"],
  "DKI Jakarta": [
    "Jakarta Pusat",
    "Jakarta Selatan",
    "Jakarta Barat",
    "Jakarta Timur",
  ],
  Bali: ["Denpasar", "Badung", "Gianyar", "Tabanan"],
  "Sumatera Utara": ["Medan", "Binjai", "Pematangsiantar", "Tanjungbalai"],
};

const domProv = document.getElementById("selProv");
const domKota = document.getElementById("selKota");
const domHasil = document.getElementById("hasilPilihan");

Object.keys(dbLokasi).forEach((provinsi) => {
  const opsi = document.createElement("option");
  opsi.value = provinsi;
  opsi.textContent = provinsi;
  domProv.appendChild(opsi);
});

domProv.addEventListener("change", (e) => {
  const provTerpilih = e.target.value;

  domKota.innerHTML = '<option value="">-- Pilih Kota --</option>';
  domHasil.textContent = "";

  if (provTerpilih === "") {
    domKota.disabled = true;
  } else {
    domKota.disabled = false;
    dbLokasi[provTerpilih].forEach((kota) => {
      const opsi = document.createElement("option");
      opsi.value = kota;
      opsi.textContent = kota;
      domKota.appendChild(opsi);
    });
  }
});

domKota.addEventListener("change", (e) => {
  const kotaTerpilih = e.target.value;
  const provTerpilih = domProv.value;

  if (kotaTerpilih) {
    domHasil.innerHTML = `Anda memilih: <span style="color:#d9534f;">${kotaTerpilih}</span>, ${provTerpilih}`;
  } else {
    domHasil.innerHTML = "";
  }
});
