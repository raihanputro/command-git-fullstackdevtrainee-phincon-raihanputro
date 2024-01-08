# COMMAND GIT FULLSTACK DEVELOPER TRAINEE PHINCON <br /> RAIHAN PUTRO MAULANA RIZKY
- **git init** <br />
Inisialisasi git pada folder
- **git clone repo_url** <br />
Untuk clone repositori yang public
- **git clone ssh://git@github.com/[username]/[repository-name].git** <br />
Untuk clone repositori yang private
- **git status** <br />
Melihat status perubahan
- **git add nama_file** <br />
Memasukkan perubahan file dari working directory ke stage area
- **git add .**<br />
Memasukkan semua perubahan yang ada di working directory
- **git push**<br />
Menyimpan perubahan ke remote repositori
- **git push origin nama_branch**<br />
Menyimpan branch ke remote repository
- **git push origin --delete nama_branch**<br />
Mengahpus remote branch
- **git rm -r nama_file**<br />
Menghapus sebuah file
- **git pull**<br />
Mengupdate local repository ke commit terbaru
- **git clean -f** <br />
Menghapus semua file baru di working directory
- **git restore nama_file** <br />
Menghapus perubahan pada file di working directory
- **git restore –stage nama_file** <br />
Membatalkan perubahan pada stage area, pembatalan tidak dapat langsung di stage area
- **git commit -m “pesan”** <br />
Menyimpan perubahan dari stage area ke repository
- **git merge nama_branch** <br />
Merge branch ke branch yang aktif
- **git log**<br />
Melihat riwayat semua commit
- **git log --summary**<br />
Melihat riwayat semua commit secara detail
- **git log --online**<br />
Melihat riwayat commit secara ringkas
- **git log –oneline –graph**<br />
Melihat riwayat commit dengan hubungan antar commit
- **git show id_hash**<br />
Melihat detail dari sebuah commit
- **git show head**<br />
Melihat detail commit terakhir yang ada pada head
- **git diff id_hash HEAD**<br />
melihat perbandingan antar commit dengan commit terakhir pada head
- **git diff id_hash1 id_hash2**<br />
Melihat perbandingan antar commit
- **git difftool id_hash1 id_hash2**<br />
Melihat perbandingan antar commit dengan vs code
- **git reset –soft id_hash**<br />
Memindahkan HEAD pointer dan ke staging index
- **git reset –mixed id_hash**<br />
Memindahkan HEAD pointer dan ke working directory
- **git reset –hard id_hash**<br />
Memindahkan HEAD pointer dan menghapus seluruh perubahan di commit sebelumnya (destructive)
- **git commit –amend -m “pesan”**<br />
Apabila ada yang kurang di commit sebelumnya yang baru di commit, akan di merger oleh commit yang baru
- **git checkout id_hash – nama_file**<br />
Melihat perubahan pada sebuah file di commit tertentu dan file tersebut masuk ke staged area
- **git branch –show-current**<br />
Melihat branch saat ini
- **git checkout id_hash**<br />
Melihat seluruh isi folder pada commit tersebut
- **git checkout nama_branch**<br />
Kembali ke versi terbaru di branch tersebut
- **git revert id_hash**<br />
Mengembalikan perubahan pada commit tersebut tanpa mereset commit di atas nya / hanya merubah pada commit tersebut
- **git blame nama_file**<br />
Mengetahui siapa yang melakukan perubahan pada sebuah file
- **git config --global --list**<br />
Melihat
- **git config --global user.email "nama_email"**<br />
Mengatur email secara global di git
- **git config –global alias.nama_shortcut nama_perintah**<br />
Membuat shortcut nama perintah <br />
Contoh:
  - **git config –global alias.ko commit**
  - **git config –global alias.komit commit**
  - **git config –global alias.logone “log –oneline”**
