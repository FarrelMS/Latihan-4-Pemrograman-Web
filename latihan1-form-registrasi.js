const dataMahasiswa = [
  { namaLengkap: "Ahmad Fauzi", nim: "5025201001" },
  { namaLengkap: "Andi Pratama", nim: "5025201002" },
  { namaLengkap: "Anisah Putri", nim: "5025201003" },
  { namaLengkap: "Bagas Kara", nim: "5025201004" },
  { namaLengkap: "Bunga Citra", nim: "5025201005" },
];

const elNama = document.getElementById("inputNama");
const elNim = document.getElementById("inputNim");
const wadahSaran = document.getElementById("wadahSaran");
const form = document.getElementById("formRegistrasi");

elNama.addEventListener("input", () => {
  const keyword = elNama.value.trim().toLowerCase();
  wadahSaran.innerHTML = "";

  if (!keyword) {
    wadahSaran.style.display = "none";
    elNim.value = "";
    return;
  }

  const hasilFilter = dataMahasiswa.filter((mhs) =>
    mhs.namaLengkap.toLowerCase().includes(keyword),
  );

  if (hasilFilter.length > 0) {
    wadahSaran.style.display = "block";
    hasilFilter.forEach((mhs) => {
      const item = document.createElement("div");
      item.className = "saran-item";
      item.textContent = `${mhs.namaLengkap} (${mhs.nim})`;

      item.addEventListener("click", () => {
        elNama.value = mhs.namaLengkap;
        elNim.value = mhs.nim;
        wadahSaran.style.display = "none";
      });
      wadahSaran.appendChild(item);
    });
  } else {
    wadahSaran.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== elNama && e.target !== wadahSaran) {
    wadahSaran.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const elErr = document.getElementById("pesanError");
  const elOk = document.getElementById("pesanSukses");
  const mk = document.getElementById("pilihMk").value;
  const dosen = document.getElementById("pilihDosen").value;

  elOk.textContent = "";

  if (!elNama.value.trim() || !elNim.value.trim() || !mk || !dosen) {
    elErr.textContent = "* Semua kolom wajib diisi dengan benar!";
    return;
  }

  elErr.textContent = "";
  elOk.textContent = `Pendaftaran sukses! Nama: ${elNama.value}, MK: ${mk}`;
});

document.getElementById("btnReset").addEventListener("click", () => {
  document.getElementById("pesanError").textContent = "";
  document.getElementById("pesanSukses").textContent = "";
  wadahSaran.style.display = "none";
});
