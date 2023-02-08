// Değişken isimleri harf, _ ve $ işareti ile başlayabilir.
// UNICODE kullanırken \ işareti ilk karakter olarak kullanılabilir.
/* İlk harften sonra variable isimlerinde rakam kullanılabilir 
ama $ ve _ dışında başka işaret kullanılamaz.*/
// Variable isimlerinde harfler arasında boşluk BIRAKILAMAZ. https://devopedia.org/naming-conventions

// Değişkenlere değer atama = operatörü ile yapılır.
// Bir değişken tanımladığımızda okulNumarasi değişkenine sayısal bir değer olan 12 değeri atanır.
// Değişkenler değer atanmadığında undefined değerini alırlar.
// Javascript'de değişken belirtmemize gerek yok.
/*
-Boolean = Mantıksal ifadedir. true veya false değeri atanabilir
-Number = Sayısal ifadedir. 2^53 -1 değerine kadar sayısal değerler atanabilir.
-BigInt = 2^53-1 değerinden büyük değerleri atayabilir.
-String = Metinsel ifadelerdir. Metinsel ifade tanımlanırken ifade “ ” 
veya ‘ ’ işaretleri arasına yazılır.
-Object = Yukarıda ki 7 veri türü de primitive tiplidir. 
Objelerde ( nesne, dizi ) gibi referans tipler de değişkenlere atanabilir. 
*/

// Var = Global scope veya function scope'ta deklarasyon sağlayamaya yarayan keyword'dur. 
// Değişken değerleri değiştirilebilir.
// Aynı isimle tekrardan tanımlanabilirler.
// var ile tanımlanan değişkenler global scope veya function scope'tur.
// Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir. 
// Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir. 
// Bu konuyu örneklerle açıklayalım.

// Global Scope - Aşağıda kod parçasında gördüğümüz gibi bu variable'a her yerden erişilebir.
var degisken = "globalde var ile tanimlanan degisken"
if(true){
  degisken = "var ile tanimlanan degiskenlere blocklardan erisilebilir";
}
console.log(degisken)

// Function Scope - Aşağıda kodlarda gördüğümüz gibi sadece function içindeyken erişilebilir.
// Eğer ki function dışında variable kullanılmaya çalışılır ise hata alırız.
function scope(){
    var functionScopeDegisken = "Bu degisken function scope da tanimlidir";
    if(true){
      var blocktaTanimliDegisken = "Bu degisken blockta tanimlidir"
          functionScopeDegisken = "Function scope da ki tanımlı degiskenlere o fonksiyonun blocklarından erişilebilir."
    }
    console.log(blocktaTanimliDegisken);
  }
/* Hatalı Kullanım
   scope();
  console.log(functionScopeDegisken);
  console.log(blocktaTanimliDegisken); */

// Let 
// Değişken değerleri değiştirilebilir.
// Aynı isimle tekrardan aynı blokta tanımlanamaz, farklı block'larda aynı isimle tanımlanabilir.
// Let ES6 ile gelmiş bir özelliktir. Function scope'un yaptığını yapıyor diyebiliriz.
let okulNumarasi =  414;
if(true){
 let okulNumarasi =  245;
 console.log("Ilk blockta ki deger: "+okulNumarasi);
  if(true){
     let okulNumarasi = 312;
    console.log("Ikinci blockta ki deger: "+okulNumarasi);
     }
}
 console.log("Global scopeta ki deger: "+okulNumarasi);

// Const 
// Block scope da tanımlı, değeri sonradan değiştirilemez değişkenleri deklare etmek için kullanılan keyword'dür.
// Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. Diziler içinde aynısı geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.
// const kullanici = {
//   isim: "Ahmet",
//  }
//  kullanici.isim = "Dila";
//  console.log(kullanici.isim);
 
//  const dizi = [1,2,3];
//  dizi = [1,2,3,4];

// Hoisting 
// JavaScript’te tanımlanan değişkenler yorumlanırken tanımladığınız değişkenler fonksiyon veya ifadenin yukarısına alınarak yorumlanır. Buna hoisting (yukarı alma) denir. Yukarıya alınan değişkenler var ile deklare edildiyse atandıkları değer yerine undefined değerini alır. let veya const ile deklare edildi ise ReferanceError hatası verir. let ve const ile deklare edilen değişkenler bloğun başlangıcından itibaren tanımının yapıldığı yere kadar kadar geçici (temporal dead zone) bölgededir.
//1- Console ekraninda ne yazar inceleyelim. 
var myvar;
console.log(myvar); 
myvar = 'local value';

// yukarıda ki örneği adım adım açıklarsak
// var myvar = undefinded;
// console.log(myvar); 
// myvar = 'local value';
// şeklinde olduğu icin console ekranında undefined değerini görürüz.

// 2- Console ekranında ne yazar inceleyelim.
sayi1 = 100;
console.log(sayi1+" ve "+sayi2);;
var sayi2 = 200;
var sayi1;

// Adım adım gidelim
// var sayi 2 = undefined
// var sayi 1 = undefined
// sayi 1 = 100;
// console.log(sayi1+ " ve "+sayi2)
// sayi 2= 200;
// sonuç olarak console ekranında henüz sayi 2 değerine değer atanmadığı için "100 ve undefined" değerini görürüz.