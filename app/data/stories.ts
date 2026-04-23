export interface Story {
  /** Benzersiz hikaye kimliği */
  id: number
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
    idiom: 'Taşın Altına Elini Koymak',
    audio: '/audio/deyim1.mp3',
    text: 'UMUT Günün birinde dik yamaçların arasında sıkışmış ulaşımı sadece dar bir geçitten sağlanan Çamlıbel Kasabası adında bir yer vardı. Bu köyün insanları çok çalışkan olmasına rağmen bir o kadar da çekingen ve önce başkası yapsın mantığıyla yaşayan kişilerdi. Yağışlı bir kışı geride bırakan kasabada bahar sabahında insanlar büyük bir gürültüyle uyandılar. Toprağın kaymasıyla tek çıkış yolu olan geçidin tam ortasına kocaman devasa bir taş düşmüştü. Herkes şaşkınlıkla birbirlerine bakıp ne yapacaklarını tartışmaya başlamışlardı. Kasabalıların her birinden farklı fikirler çıkıyor ancak uygulama için kimse harekete geçmiyordu. Yaşlılar gücüm yok deyip kenara çekilirken gençler telefonlarıyla fotoğraf, video çekmekten ileri gidemiyorlardı. Günler geçtikçe eldeki stoklar da azalmaya başlayınca kasabanın huzuru da tadı da kaçmaya başladı. İnsanlar artık en küçük şeye bile sinirlenmeye başlamışlardı. Herkes bir kurtarıcı bekliyordu ama gittikçe umutlar da tükeniyordu.'
  }
]
