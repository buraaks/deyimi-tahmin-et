export interface Story {
  /** Benzersiz hikaye kimliği */
  id: number
  /** Hikaye başlığı */
  title: string
  /** Doğru cevap — deyim */
  idiom: string
  /** Ses dosyası yolu (public/ altında) */
  audio: string
  /** Opsiyonel hikaye metni */
  text?: string
}

/**
 * Hikaye verileri
 * --------------------------------------------------
 * Ses dosyaları /public/audio/ altına yerleştirilmelidir.
 * Yeni bir deyim eklemek için bu diziye eleman eklemeniz yeterlidir.
 */
export const stories: Story[] = [
  {
    id: 1,
    title: 'Umut',
    idiom: 'Taşın altına elini koymak',
    audio: '/audio/deyim1.mp3',
    text: 'Günün birinde dik yamaçların arasında sıkışmış ulaşımı sadece dar bir geçitten sağlanan Çamlıbel Kasabası adında bir yer vardı. Bu köyün insanları çok çalışkan olmasına rağmen bir o kadar da çekingen ve önce başkası yapsın mantığıyla yaşayan kişilerdi. Yağışlı bir kışı geride bırakan kasabada bahar sabahında insanlar büyük bir gürültüyle uyandılar. Toprağın kaymasıyla tek çıkış yolu olan geçidin tam ortasına kocaman devasa bir taş düşmüştü. Herkes şaşkınlıkla birbirlerine bakıp ne yapacaklarını tartışmaya başlamışlardı. Kasabalıların her birinden farklı fikirler çıkıyor ancak uygulama için kimse harekete geçmiyordu. Yaşlılar gücüm yok deyip kenara çekilirken gençler telefonlarıyla fotoğraf, video çekmekten ileri gidemiyorlardı. Günler geçtikçe eldeki stoklar da azalmaya başlayınca kasabanın huzuru da tadı da kaçmaya başladı. İnsanlar artık en küçük şeye bile sinirlenmeye başlamışlardı. Herkes bir kurtarıcı bekliyordu ama gittikçe umutlar da tükeniyordu.Kasabanın lisesinde okuyan, sessizliğiyle bilinen Osman her gün okula giderken bu manzaraya şahit oluyordu. İnsanların bu umursamazlığına tahammül edemediğinden bir akşamüstü okul dönüşü eve girmeden babasının tamir malzemelerinin olduğu eski odunluğun yolunu tuttu. İşine yarayacağını düşündüğü malzemeleri alarak yola çıktı. Ertesi sabah uyandıklarında kasabalılar Osman’ı kan ter içinde taşı yerinden oynatmaya çalışırken gördüler. Cılız olmasına rağmen Osman’ın uğraşlarını görünce kendi cüsselerinden utandılar. Bir grup topluluk ise boşuna uğraşma diye nasihatlerde bulunmaya başladı. Osman pes etmedi milim milim oynamaya başlayan taş ona umut oluyordu. Etraftakilerin de içine bir umut ışığı doğdu. Bu heyecanlı bekleyiş kulaktan kulağa yayılmaya başladı. Osman’ın etrafını artık kuru kalabalık çevirmiyordu, eli iş tutan yardıma gelmeye başladı. Eli iş tutmayanlar bile yemek, su taşıma derken bir şekilde destek olmaya çalışıyorlardı. Birkaç gün kasabada bu hareketlilik devam etti. Akşama doğru yerinden asla kalkmaz denilen taş büyük uğraşlar sonucunda yolun kenarındaki uçuruma yuvarlandı. Sonunda yol açılmıştı. Sevinç çığlıkları, kahkahalar havada uçuşuyordu. Osman adeta kasabanın kahramanı ilan edilmişti. Osman, ”Bu hepimizin çabasıyla oldu, ben sadece önayak oldum. ” dedi. Bir kez daha herkes Osman ile gurur duymuştu. Yaşanan olaydan ders çıkaran insanlar artık daha duyarlı davranmaya başlamıştı. Birlik ve beraberlik kasabanın artık temel taşı olmuştu. '
  },
  {
    id: 2,
    title: 'Çizgi',
    idiom: 'Kulağına küpe olmak',
    audio: '/audio/deyim2.mp3',
    text: 'Aslan on yedi yaşındaydı ve kendini dünyanın en iyi kalecisi sanıyordu. Fatih antrenör defalarca söylemişti: “Yerinde dur, çizgiden çıkma!” Aslan her seferinde başını sallar, sonra aynı hatayı yapardı. Çünkü ona göre antrenör değişime kapalıydı. Aslan bunu hazmedemiyordu çünkü kendisinin daha iyi bildiğini düşünüyordu. Final maçıydı. Skor 0-0 ve dakika 87\'yi gösterirken rakip takımın forveti ceza sahasına girdi. Aslan yine çizgiden çıktı, hücuma gitti. Rakip topu gördü, beklemedi. Boş kaleye vurdu çünkü Aslan kalede değildi. Tribünler sessiz kaldı. Takım arkadaşları Aslan’a bakmadı bile. Antrenör Fatih yanına gelmedi, bağırmadı, hiçbir şey söylemedi. Tüm bu olanlardan sonra Aslan başını öne eğip soyunma odasına doğru yol aldı. Uzun bir süre tek başına oturdu. Aklında tek bir şey dönüyordu: “Çıkma çizgiden.” Bir daha çizgiden hiç çıkmadı...'
  },
  {
    id: 3,
    title: 'Usta',
    idiom: 'Pabucu dama atılmak',
    audio: '/audio/deyim3.mp3',
    text: 'Kasabanın en ünlü demircisiydi Ahmet Usta. Yıllarca herkes kapısına koşardı, at nalı mı lazım, bıçak mı yoksa kapı menteşesi mi? Tek adres oydu. Günlerden bir gün kasabaya genç bir demirci taşındı. Hem hızlı hem ucuz hem de modern aletler kullanıyordu. İnsanlar yavaş yavaş yeni ustaya yönelmeye başladı. Ahmet usta aldırmadı. ”Bunlar geçer, kalite her zaman kazanır. ” dedi ve eski usulüne devam etti. Aylar geçti. Dükkanın önünden artık kimse geçmez oldu. Hatır sormaya dahi uğrayan olmadı. Bir sabah çırağı Ali içeriye girdi, etrafına baktı ve sonra yavaşca sordu: “Usta... Bugün müşteri bekliyor muyuz?” Ahmet Usta uzun süre cevap veremedi. Çekicini masaya bıraktı, karşı dükkanın önündeki kalabalığı gördü. “Bekliyorum oğlum. ” dedi sessizce “ama sen de görüyorsun boşuna bekliyorum. ” dedi ve o gün dükkanın kepenkleri sonsuza dek kapandı ve bir daha açılmadı. '
  },
  {
    id: 4,
    title: 'Karar',
    idiom: 'Tatlıya bağlamak',
    audio: '/audio/deyim3.mp3',
    text: 'Havalar serinlemeye başlamıştı. 9/H sınıfında küçük ama gittikçe büyüyen bir tartışma başlamıştı. Sınıf, okulun düzenlediği “En İyi Sınıf Panosu” yarışmasına hazırlanıyordu. Herkes kendi fikrinin olmasını istiyordu. Yasin, panonun modern ve sade olmasını istiyordu. Pınar ise tam tersine rengarenk, dikkat çekici ve hareketli bir pano hayal ediyordu. İkisi de fikrinden vazgeçmeyince tartışma büyüdü ve sınıf ikiye bölündü. Sesler yükseldikçe diğer öğrenciler de gerildi. Yarışma günü yaklaşmasına rağmen kimse çalışmak istemiyordu. Herkes bekliyordu. Kim geri adım atacak? Selim ayağa kalktı. Genelde fazla sessizdi ama bu kez farklıydı. Tahtaya doğru yürüdü ve ikiye bölünmüş pano çizdi. “Panonun bir tarafı Yasin’in dediği gibi sade olsun diğer tarafı da Pınar’ın istediği gibi renkli. Ama ortada ikisini bağlayan bir tema kullanalım. ” dedi.Yasin kaşlarını çattı ve düşünmeye başladı: “Düzen bozulmaz mı?” dedi. Pınar da merakla yaklaştı: “Renkler de olur mu gerçekten?” dedi. Selim gülümsedi: “İkisi de olur. Hem dikkat çeker hem de okunur. Neden ikisini birleştirmiyoruz?” Bir anda sınıfın havası değişti. Az önce tartışan öğrenciler şimdi birlikte fikir üretmeye başlamıştı. Renkler seçildi, yazılar düzenlendi, pano yavaş yavaş ortaya çıktı. Ortaya çıkan pano, hem düzenli hem de dikkat çekiciydi. Yarışma günü öğretmenler panoyu uzun uzun inceledi. Sonuçlar açıklandığında 9/H sınıfı birinci olmuştu. Kutlama sırasında Yasin, Pınar’a dönüp gülerek “İyi ki orta yolu bulmuşuz. ” dedi. Selim ise kenardan onları izliyordu. Kimse fark etmese de o gün sınıftaki büyük bir anlaşmazlığı küçük ama etkili fikriyle çözmüştü. Tartışmayı büyütmek yerine herkesi memnun edecek bir yol bulmuştu. .'
  },
  {
    id: 5,
    title: 'Gölge',
    idiom: 'Yüreği ağzına gelmek',
    audio: '/audio/deyim3.mp3',
    text: 'Gece yarısına doğruydu. Kemal köy yolundan eve dönüyordu. Ay bulutların arkasına saklanmış, etraf neredeyse zifiri karanlığa bürünmüştü. Sadece telefonunun zayıf ışığı ve rüzgarın uğultusu ona eşlik ediyordu. Yolun ortasında ilerlerken bir anda çalılıkların arasından hışırtı duydu. Kemal olduğu yerde donakaldı. Nefesini tutmuş, sesi anlamaya çalışıyordu. ”Belki bir kedi ya da rüzgar... ” diye düşünmeye çalıştı ama içindeki huzursuzluk gitgide büyüyordu. Tam yürümeye devam edecekti ki bu sefer ses çok daha yakından geldi. Çalılıklar sanki biri tarafından ayrılıyormuş gibi sallanmaya başladı. Kemal’in kalbi hızla çarpmaya başladı. Ayaklarını ileri geri oynatmak istese de olduğu yerde kalakalmıştı. Bir gölge, karanlığın içinden yavaşça belirir gibi oldu. Kemal artık nefes almakta zorlanıyordu. Boğazı kurumuş, dizleri titremeye başlamıştı. O an korkudan kontrolünü kaybetmiş gibiydi. Dayanamayarak bir adım geri attı. Tam o sırada bulutlar aralandı ve ay ışığı etrafı aydınlattı. Gölge dediği şeyin aslında komşularının köpeği olduğunu fark etti. Kemal derin bir nefes aldı, soğuk soğuk ter döküyordu. Bir süre yerinden kıpırdayamadı. Az önce yaşadığı korku, onu sanki bir anda bambaşka bir dünyaya götürmüş sonra tekrar geri getirmişti. Başını sallayıp kendi kendine gülümsedi. “Bu kadar da korkulmaz ki!” dese de az önce hissettiklerinin hala etkisindeydi.'
  },
  {
    id: 6,
    title: 'Mucize',
    idiom: 'Gözleri fal taşı gibi açılmak',
    audio: '/audio/deyim3.mp3',
    text: 'Miraç, eski deri cüzdanını masanın üzerine bıraktığında içi her zamanki gibi bomboştu. Ay sonu gelmiş, faturalar kapıya dayanmış, mutfakta ise sadece yarım paket makarna kalmıştı. “Bir mucize... ” diye fısıldadı kendi kendine, “Sadece küçük bir mucizeye ihtiyacım var. ” dedi. Bir anda üşüdüğünü hissettiği için kıyafet dolabına yöneldi. Kışlık giysilerin içinden bir tane mont giydi. Elini montunun cebine attığı sırada eline bir kağıt değmişti... Cebinden kağıdı çıkardıktan sonra şaşkınlıkla kağıdı incelemeye başladı ve bunun eski bir çek olduğunu fark etti. Hemen hatırladı ve bu çeki geçen yıl çalıştığı şirket ona ödül olarak vermişti. İhtiyacı yok diye cebine sıkıştırmıştı ve aklından tamamen çıkmıştı. Tam sıkıştığı anda ilaç gibi gelmişti. Kalbi hızla atmaya başladı. Çek hala geçerli miydi diye bankayı alelacele aradı. Bankadan aldığı olumlu yanıttan sonra Miraç’ın yüzündeki o yorgun ifade bir saniyede silindi. Kaşları yukarı fırladı, göz kapakları sanki görünmez iplerle yukarı çekilmişçesine sonuna kadar gerildi. Göz bebekleri büyüdü, beyaz kısımları o kadar net ortaya çıktı ki karşısında biri olsa o bakışlarda kendi yansımasını bile görebilirdi. Bir an nefes almayı unuttu, bakışları çeke öyle bir kitlendi ki sanki gözlerini kırpsaydı o çek ortadan kaybolacaktı. Dudaklarını hafifçe araladı ama ağzından tek bir kelime bile çıkmadı. Sadece o kocaman, yuvarlak ve donmuş bakışlarla elindeki çeke bakmaya devam etti. Sonra bir anda lavaboya gidip eline yüzüne su çarptı, biraz kendine gelmeye başladı. Miraç, üzerindeki şaşkınlığı biraz olsun attıktan sonra içi içine sığmadığından arkadaşlarını aramaya başladı. Hem şaşkınlığını hem sevincini paylaşmak için onları evine davet etti ve güzel bir akşam geçirdiler.'
  }
]
