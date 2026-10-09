// Prioritas: Sunda & Inggris. Format: id|en|su
(`Nama saya Adin|My name is Adin|Nami abdi Adin
Rumah saya dekat sini|My house is near here|Imah abdi deukeut ti dieu
Saya sedang belajar bahasa Sunda|I am learning Sundanese|Abdi nuju diajar basa Sunda
Bisa tolong ulangi?|Could you repeat that?|Tiasa diulang deui?
Apa artinya ini?|What does this mean?|Naon hartosna ieu?
Saya mengerti|I understand|Abdi ngartos
Saya tidak tahu|I don't know|Abdi teu terang
Tunggu sebentar|Wait a moment|Antosan sakedap
Ayo pergi|Let's go|Hayu angkat
Saya pulang dulu|I'll head home now|Abdi badé mulih heula
Sampai ketemu besok|See you tomorrow|Dugi ka isukan
Selamat pagi, apa kabar?|Good morning, how are you?|Wilujeng enjing, kumaha damang?
Semoga berhasil|Good luck|Mugia suksés
Selamat makan|Enjoy your meal|Mangga tuang
Saya kenyang|I am full|Abdi kenyang
Terima kasih atas bantuannya|Thank you for your help|Hatur nuhun kana pitulungna
Maaf mengganggu|Sorry to bother you|Hapunten ngaganggu
Saya setuju|I agree|Abdi sapuk
Boleh saya duduk di sini?|May I sit here?|Tiasa abdi linggih di dieu?
Apakah ini aman?|Is this safe?|Naha ieu aman?
Sudah selesai|It is done|Parantos réngsé
Belum|Not yet|Acan
Sudah|Already|Atos
Nasi|Rice|Sangu
Ayam|Chicken|Hayam
Sayur|Vegetables|Sayuran
Buah|Fruit|Buah
Kopi|Coffee|Kopi
Teh|Tea|Teh
Pedas|Spicy|Pedes
Manis|Sweet|Amis
Asin|Salty|Asin
Cantik|Beautiful|Geulis
Tampan|Handsome|Kasép
Bagus|Good|Alus
Jelek|Bad|Goréng
Besar|Big|Gedé
Kecil|Small|Leutik
Panas|Hot|Panas
Dingin|Cold|Tiis
Baru|New|Anyar
Rumah|House|Imah
Sekolah|School|Sakola
Pasar|Market|Pasar
Jalan|Road|Jalan
Keluarga|Family|Kulawarga
Ibu|Mother|Ema
Bapak|Father|Bapa
Kakak|Older sibling|Lanceuk
Adik|Younger sibling|Adi
Teman|Friend|Babaturan`).split("\n").forEach(l=>{const[a,b,c]=l.split("|");PHRASES.push({id:a,en:b,su:c})});
