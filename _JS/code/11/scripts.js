var mahasiswa = {
    nama : 'Fajar Arahman',
    npm : 50420445,
    kelas : '2IA16',
    jurusan : 'Teknik Informatika',
    IPSemester : [2.90, 3.10, 3.25, 2.88, 3.59],
    IPKumulatif : function(){
        var total = 0
        var ip = this.IPSemester;
        for(var i=0; i < ip.length; i++){
            total += ip[i];
        }
        return total/ip.length;
    }
}
mahasiswa.IPKumulatif();