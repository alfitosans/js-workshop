// Constructor
function Mahasiswa(nama, npm, email, jurusan) {
  this.nama = nama;
  this.npm = npm;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa(
  "Muhamad Alfito Santosa",
  50420751,
  "alfitosantosa@gmail.com",
  "Teknik Informatika"
);

console.log(mhs4);
console.log(`nama saya ${mhs4.nama}`);
