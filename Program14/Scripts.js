// function Declaration
function buatObjectMahasiswa(nama, npm, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Roby', 51420142, 'Roby7383950@gmail.com', 'Teknik Informatika');