# belajar-typescript-decorator
Utility types
utility types di typescript adalah kumpulan type helper yang di sediakan untuk memodifikasi dan memanipulasi tipe
dengan utility type kita dapat membuat tipe baru berdasarkan tipe yang sudah ada 
tanpa harus menuliskan tipe baru dari awal berguna untuk menghindari pengulangan kode dan meningkatkan keamanan tipe

Partial<T>
partial membuat semua properties dari tipe T menjadi opsional ini berguna saat kita ingin bekerja dengan objeck yang mungkin hanya memiliki sebagian dari properties yang di butuhkan 

Required<T>
kebalikan dari partial utility type required menjadikan semua properties pada tipe T sebagai properties yang wajib(tidak boleh undifined)
kebalikan dari partial utility type required menjadikan semua properties pada tipe T sebagai properties yang wajib(tidak boleh undifined)
kebalikan dari partial utility type required menjadikan semua properties pada tipe T sebagai properties yang wajib(tidak boleh undifined)

Readonly<T>
utility  type readonly menjadikan semua properties dari tipe T hanya  baca (Read-Only) 
artinya kita tidaak bisa merubah nilainya setelah diinilisasi

Pick<T,K>
pick memungkinkan kita untuk memilih subset dari properties yang ada pada tipe T 

Omit<T>
omit berfungsi kebalikan dari pick ini  menghapus prooperties tertentu dari tipe T 

Record<K, T>
record digunkan untuk membuat tipe objek dimana kunci(K) dipetahkan ke nila dari tipe tertentu(T)  

Extract<T, U>
extract menghasilkan tipe yang hanya mengandung elemen dari T yang juga ada dalam U

Exclude<T, U>
exclude kebalikan dari extract ini menghasilkan tipe yang menghapus dari T yang juga adaa dalam U

NonNullable<T>
utility type ini menghilangkan null dan undifined dari tipe T

Return Type<T>
return type menghasilakan tipe dari nila kembalian (return type) dari fungsi T

Instance Type<T>
instance type menghasilkan tipe dari instance class T

Utility type digunakan saat kita ingin melakukan modifikasi tipe secara dinamis tanpa mendefinisikan ulang tipe yang sudah ada.
mereka membantu menulis kode yang lebih efisien,reusable, dan aman secara tipe 
Partial: untuk membuat objek opsional, misalnya dalam fungsi udate
pick atau omit: untuk membuat tipe dengan subset propertie tertentu
readonly: untuk memastikan objek tidak dapat diubah srtelah inisialisasi
record: untuk membuat peta objek dengan kunci tipe data