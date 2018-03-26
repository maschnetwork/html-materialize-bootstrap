let cryptos = [];

function CryptoCurrency(name, symbol, price){
    this.name = name;
    this.symbol = symbol;
    this.price = price;
}

CryptoCurrency.prototype.getHTML = function(){
    return '<li class="collection-item">'+this.name+" "+this.symbol+" "+this.price+"</li>";
};

function fillCryptoObjects(data){
    cryptos = [];
    data.forEach((crypto)=>{
        cryptos.push(new CryptoCurrency(crypto["name"], crypto["symbol"], crypto["price_usd"]));
    })
}

function printCryptoObjects(){
    $("#crypto-list").empty();
    cryptos.forEach((crypto) => {
        $("#crypto-list").append(crypto.getHTML());
    })
}

function getCryptoCurrenciesAjax(){
  $.ajax({
      url: "https://api.coinmarketcap.com/v1/ticker/?limit=10",
      success: (data) => {
         fillCryptoObjects(data);
         printCryptoObjects();
      },
      error: (data) => {
          alert("Could not read Url to fetch fancy crypto data");
      }
  })
}

$(document).ready(() => {
    $("#crypto").click(getCryptoCurrenciesAjax);
})