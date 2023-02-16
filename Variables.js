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

// Number veri türü tanımlama
 let price = 100
 let tax = 0.18
 let priceTax = price * tax
 let total = price + priceTax
 console.log(
 "Fiyat:", price, 
 "KDV Oran:", tax, 
 "KDV Tutari:", priceTax,
 "Fiyat:", total,
 )

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log( "Number Constractor içine bilgi gönderildi:", Number(111))

//  Arttırma ve azaltma işlemi
let counter = 320
counter = counter + 1 //uzun yöntem
counter += 1;
counter ++;
console.log(counter)

counter --;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)

// İşlem önceliği
console.log( (2 + 3) * 10)

// mod(kalan) alma %
console.log( 4 % 3) // mod alma bölümden kalan sayıyı gösterir

// Üs alma
console.log( 2 * 2 * 2 *2) // Normal çarpma
console.log( 2 ** 4) // Üs alma

// Aşağı yuvarlama => Math.floor
console.log( "Aşağı yuvarlama", Math.floor(1.7) )
// Yukarı yuvarlama => Math.ceil
console.log( "Yukarı yuvarlama", Math.ceil(1.2) )
// Yakına yuvarlama => Math.round
console.log( "Yakına yuvarlama", Math.round(1.5)) //1.4 ve aşağısı aşağı 1.5 ve yukarı yukarı yuvarlar

// Boolean Veri Türü

// 0 ve 1'i anlamak
let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

// Eğer Boolean'ın içinde bir bilgi varsa true olarak görürüz.

// 0, -0, null, false, NaN, undefined, ("") İçinde değer barındırmayan tüm ifadeler false'tur.
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c7 = Boolean(-0);

// ********** Veri Turunu Ogrenmek ve Veri Turu Donusumleri ********** 

// veri turunu ogrenmek typeof:
let pricee = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

// string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: ", number1, typeof(number1) )

let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", number2, typeof(number2) )

let number3 = "11.1"
number3 = Number(number3)
console.log("number3: ", number3, typeof(number3) )

let number4 = "11.4px"
number4 = parseFloat(number4)
console.log("number4: ", number4, typeof(number4) )

// number veri tipinden string'e donusturmek:
let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5))

// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)

