// Frasa tambahan: id|en|jv|su
(`Selamat siang|Good afternoon|Sugeng siang|Wilujeng siang
Selamat sore|Good evening|Sugeng sonten|Wilujeng sonten
Selamat malam|Good night|Sugeng ndalu|Wilujeng wengi
Apa kabar?|How are you?|Piye kabare?|Kumaha damang?
Saya baik-baik saja|I am fine|Aku apik-apik wae|Abdi sae-sae wae
Selamat datang|Welcome|Sugeng rawuh|Wilujeng sumping
Permisi|Excuse me|Nuwun sewu|Punten
Terima kasih banyak|Thank you very much|Matur nuwun sanget|Hatur nuhun pisan
Sama-sama|You're welcome|Sami-sami|Sami-sami
Silakan|Please, go ahead|Mangga|Mangga
Ya|Yes|Inggih|Muhun
Tidak|No|Mboten|Henteu
Senang bertemu denganmu|Nice to meet you|Seneng ketemu karo kowe|Bagja tepang sareng anjeun
Saya berasal dari Indonesia|I am from Indonesia|Aku saka Indonesia|Abdi ti Indonesia
Selamat ulang tahun|Happy birthday|Sugeng ambal warsa|Wilujeng milangkala
Hati-hati di jalan|Take care on the road|Ngati-ati ing dalan|Ati-ati di jalan
Saya lapar|I am hungry|Aku luwe|Abdi lapar
Saya haus|I am thirsty|Aku ngelak|Abdi hanaang
Saya mau makan|I want to eat|Aku arep mangan|Abdi badé tuang
Saya mau pesan|I would like to order|Aku arep pesen|Abdi badé pesen
Enak sekali|It is delicious|Enak banget|Raos pisan
Air putih|Plain water|Banyu putih|Cai bodas
Terlalu mahal|Too expensive|Larang banget|Awis pisan
Bisa kurang?|Can you lower the price?|Iso kurang?|Tiasa kirang?
Di mana stasiun?|Where is the station?|Stasiune ing ngendi?|Stasiun aya di mana?
Di mana rumah sakit?|Where is the hospital?|Rumah sakite ing ngendi?|Rumah sakit aya di mana?
Di mana masjid?|Where is the mosque?|Masjide ing ngendi?|Masjid aya di mana?
Belok kanan|Turn right|Belok tengen|Belok ka katuhu
Belok kiri|Turn left|Belok kiwa|Belok ka kenca
Lurus saja|Go straight|Lurus wae|Lempeng wae
Jauh tidak?|Is it far?|Adoh ora?|Jauh teu?
Dekat|Near|Cedhak|Deukeut
Saya tersesat|I am lost|Aku kesasar|Abdi nyasar
Saya sakit|I am sick|Aku loro|Abdi gering
Kepala saya pusing|I feel dizzy|Sirahku mumet|Sirah abdi lieur
Perut saya sakit|My stomach hurts|Wetengku loro|Beuteung abdi nyeri
Saya alergi|I am allergic|Aku alergi|Abdi alérgi
Telepon ambulans|Call an ambulance|Celuken ambulans|Telepon ambulans
Tolong panggil polisi|Please call the police|Tulung celuk polisi|Punten, telepon pulisi
Kebakaran!|Fire!|Kebakaran!|Kahuruan!
Awas!|Watch out!|Awas!|Awas!
Jam berapa sekarang?|What time is it?|Jam pinten saiki?|Ayeuna jam sabaraha?
Hari ini|Today|Dina iki|Dinten ayeuna
Besok|Tomorrow|Sesuk|Isukan
Kemarin|Yesterday|Wingi|Kamari
Satu|One|Siji|Hiji
Dua|Two|Loro|Dua
Tiga|Three|Telu|Tilu
Empat|Four|Papat|Opat
Lima|Five|Lima|Lima
Sepuluh|Ten|Sepuluh|Sapuluh
Boleh minta tolong?|Could you help me?|Bisa nulungi aku?|Tiasa ngabantosan abdi?
Bicara pelan-pelan|Please speak slowly|Ngomong alon-alon|Mangga nyarios lalaunan
Bisa bahasa Inggris?|Do you speak English?|Iso basa Inggris?|Tiasa basa Inggris?
Saya cinta kamu|I love you|Aku tresna karo kowe|Abdi bogoh ka anjeun
Semoga sehat selalu|Wishing you good health|Muga-muga tansah sehat|Mugia sehat salawasna`).split("\n").forEach(l=>{const[a,b,c,d]=l.split("|");PHRASES.push({id:a,en:b,jv:c,su:d})});
