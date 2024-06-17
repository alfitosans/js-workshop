// jika menggunakan object
var mahasiswa = {
  nama: "Alfito Santosa",
  npm: 50420751,
  kelas: "4IA05",
  jurusan: "Teknik Informatika",
  IPSemester: [2.9, 3.1, 3.25, 2.88, 3.5],
  IPKumulatif: function () {
    var total = 0;
    var ip = this.IPSemester;
    for (var i = 0; i < ip.length; i++) {
      total += ip[i];
    }
    return total / ip.length;
  },
};
mahasiswa.IPKumulatif();
console.log(mahasiswa.IPKumulatif());
