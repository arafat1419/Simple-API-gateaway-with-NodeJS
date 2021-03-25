NAMA KELOMPOK 5
KETUA : MOHAMMAD ARAFAT MAKU (F55118213)
ANGGOTA : 
          - DWIE FAJAR FEBRILISTYAS (F55118198)
          - ABD. RACHIM I BUTOLO    (F55118239)
          - ZULKIFLI ALJABARULLAH   (F55118210)
          - ANANDA PUSPITASARI      (F55118250)

PORT :
- apigateaway           : 3000
- olahkaryawan-service  : 8080
- login-service         : 8081
- pekerjaan-service     : 8082

NAMA DATABASE : cloud-db

Cara Penggunaan :
- Service
1. Olah Karyawan, Fungsi :
    - Get One : localhost:8080/olahkaryawan/"id_karyawan"
    - Get All : localhost:8080/olahkaryawan/
    - Post    : localhost:8080/olahkaryawan/
                - contoh
                  {
                    "nama_karyawan": "Arafat Maku",
                    "alamat": "poso",
                    "no_hp": "085394933612",
                    "gaji": "15000000.00",
                    "pangkat": "CEO"
                  }
    - Update  : localhost:8080/olahkaryawan/
                - contoh
                  {
                    "nama_karyawan": "Mohammad Arafat",
                    "alamat": "palu",
                    "no_hp": "085394933612",
                    "gaji": "10000000.00",
                    "pangkat": "Co-CEO"
                  }
    - Delete One  : localhost:8080/olahkaryawan/"id_karyawan"
    - Delete All  : localhost:8080/olahkaryawan/

2. Pekerjaan, Fungsi :
    - Get One : localhost:8080/pekerjaan/"id_pekerjaan"
    - Get All : localhost:8080/pekerjaan/
    - Post    : localhost:8080/pekerjaan/
                - contoh
                  {
                    "pangkat": "CEO",
                    "dibutuhkan": 1
                  }
    - Update  : localhost:8080/pekerjaan/
                - contoh
                  {
                    "pangkat": "CEO",
                    "dibutuhkan": 1
                  }
    - Delete One  : localhost:8080/pekerjaan/"id_pekerjaan"
    - Delete All  : localhost:8080/pekerjaan/

3. Login, Fungsi :
    - Get One : localhost:8080/login/"email"
    - Get All : localhost:8080/login/
    - Post Signup    : localhost:8080/login/signup
                - contoh
                  {
                    "email" : "test@test.com",
                    "password" : "test"
                  }
    - Post Login : localhost:8080/login/login
                - contoh
                  {
                    "email" : "test@test.com",
                    "password" : "test"
                  }
    - Delete One  : localhost:8080/login/"email"
    - Delete All  : localhost:8080/login/
    - CAT : SAAT BERHASIL LOGIN AKAN DI BERIKAN TOKEN YANG AKAN DIGUNAKAN UNTUK AUTHENTIKASI PADA APIGATEAWAY

  
- Apigateaway
1. Olah Karyawan  : Semua fungsi membutuhkan authentikasi token
2. Pekerjaan      : Semua fungsi membutuhkan authentikasi token
3. Login          : - Fungsi Post Signup dan Post Login tidak membutuhkan Token
                    - Login bisa mendapatkan Token
4. Cara Memasukkan Token : 
                    - Buka Headers
                    - Tambahkan key : Authorization
                    - Tambahkan value : Token yang di dapat di login


 Data :
- Service
  1. Olah Data Karyawan (Get One OK, Get All OK, Post OK, Update OK, Delete OK, Delete All OK)
  2. Daftar Pekerjaan (Get One OK, Get All OK, Post OK, Update OK, Delete OK, Delete All OK)
  3. Login (Get One OK, Get All OK, Post Signup OK, Post Login OK, Delete, Delete All)

- Api Gateaway (Auth)
  1. Karyawan OK
  2. Pekerjaan OK
  3. Login OK

- Data Karyawan
ID,
Nama,
Alamat,
No HP,
gaji,
pangkat

- Daftar Pekerjaan
ID,
Pangkat,
Dibutuhkan

- Login
email,
password               