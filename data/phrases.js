// Paket frasa bawaan. Kolom: id,en,jv,su,ms,es,ar,zh,ja
const PACK_LANGS=["id","en","jv","su","ms","es","ar","zh","ja"];
const PHRASES=`Halo|Hello|Halo|Halo|Helo|Hola|مرحبا|你好|こんにちは
Terima kasih|Thank you|Matur nuwun|Hatur nuhun|Terima kasih|Gracias|شكرا|谢谢|ありがとう
Selamat pagi|Good morning|Sugeng enjing|Wilujeng enjing|Selamat pagi|Buenos días|صباح الخير|早上好|おはようございます
Tolong saya|Help me|Tulungi aku|Tulungan abdi|Tolong saya|Ayúdame|ساعدني|请帮助我|助けてください
Berapa harga ini?|How much is this?|Pinten regane niki?|Sabaraha hargana ieu?|Berapa harga ini?|¿Cuánto cuesta esto?|كم سعر هذا؟|这个多少钱？|これはいくらですか？
Di mana toilet?|Where is the toilet?|Toilet ing ngendi?|Toilét aya di mana?|Di mana tandas?|¿Dónde está el baño?|أين الحمام؟|厕所在哪里？|トイレはどこですか？
Saya butuh dokter|I need a doctor|Aku butuh dokter|Abdi peryogi dokter|Saya perlukan doktor|Necesito un médico|أحتاج إلى طبيب|我需要医生|医者が必要です
Saya mau minum air|I would like some water|Aku pengin ngombe banyu|Abdi hoyong nginum cai|Saya mahu minum air|Quiero agua|أريد ماء|我想要水|水をください
Maaf|Sorry|Nuwun sewu|Hapunten|Maaf|Lo siento|آسف|对不起|ごめんなさい
Siapa namamu?|What is your name?|Jenengmu sapa?|Saha nami anjeun?|Siapa nama anda?|¿Cómo te llamas?|ما اسمك؟|你叫什么名字？|お名前は何ですか？
Saya tidak mengerti|I don't understand|Aku ora ngerti|Abdi teu ngartos|Saya tidak faham|No entiendo|لا أفهم|我不明白|わかりません
Sampai jumpa lagi|Goodbye|Sugeng pinanggih malih|Dugi ka patepang deui|Jumpa lagi|Adiós|إلى اللقاء|再见|さようなら`.split("\n").map(l=>{const p=l.split("|"),o={};PACK_LANGS.forEach((c,i)=>o[c]=p[i]);return o});
