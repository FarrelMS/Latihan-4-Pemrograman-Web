const dataWilayah = {
  "Jawa Timur": {
    "Kota Surabaya": { Mulyorejo: "60115", Sukolilo: "60111", Gubeng: "60281" },
    "Kota Malang": { Lowokwaru: "65141", Klojen: "65111" },
  },
  "Jawa Barat": {
    "Kota Bandung": { Coblong: "40132", "Sumur Bandung": "40111" },
  },
  "DKI Jakarta": {
    "Jakarta Selatan": { Tebet: "12810", "Kebayoran Baru": "12110" },
  },
};

const cbProv = document.getElementById("cbProvinsi");
const cbKota = document.getElementById("cbKota");
const cbKec = document.getElementById("cbKecamatan");
const boxHasil = document.getElementById("boxHasil");

const populateDropdown = (elemen, listData, teksDefault) => {
  elemen.innerHTML = `<option value="">${teksDefault}</option>`;
  listData.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    elemen.appendChild(opt);
  });
  elemen.disabled = listData.length === 0;
};

populateDropdown(cbProv, Object.keys(dataWilayah), "Pilih Provinsi");

cbProv.addEventListener("change", () => {
  boxHasil.style.display = "none";
  populateDropdown(cbKec, [], "Pilih Kecamatan");

  if (cbProv.value) {
    const listKota = Object.keys(dataWilayah[cbProv.value]);
    populateDropdown(cbKota, listKota, "Pilih Kabupaten / Kota");
  } else {
    populateDropdown(cbKota, [], "Pilih Kabupaten / Kota");
  }
});

cbKota.addEventListener("change", () => {
  boxHasil.style.display = "none";
  if (cbKota.value) {
    const listKec = Object.keys(dataWilayah[cbProv.value][cbKota.value]);
    populateDropdown(cbKec, listKec, "Pilih Kecamatan");
  } else {
    populateDropdown(cbKec, [], "Pilih Kecamatan");
  }
});

document.getElementById("btnCari").addEventListener("click", () => {
  if (!cbProv.value || !cbKota.value || !cbKec.value) {
    boxHasil.innerHTML = "⚠️ Lengkapi pilihan Provinsi, Kota, dan Kecamatan!";
    boxHasil.style.background = "#fff3cd";
    boxHasil.style.color = "#856404";
  } else {
    const kodepos = dataWilayah[cbProv.value][cbKota.value][cbKec.value];
    boxHasil.innerHTML = `Area <b>${cbKec.value}, ${cbKota.value}</b><br>Kode Pos: <b>${kodepos}</b>`;
    boxHasil.style.background = "#d4edda";
    boxHasil.style.color = "#155724";
  }
  boxHasil.style.display = "block";
});
