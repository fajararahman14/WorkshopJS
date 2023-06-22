function buatObjectMahasiswa(nama, npm, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMahasiswa('Fajar', 50420445, 'fajararahman@studentsite.gunadarma.ac.id','Teknik Informatika');