function getCryptoCurrenciesAjax(){
  $.ajax({
      url: "https://api.coinmarketcap.com/v1/ticker/?limit=2",
      success: (data) => {
          console.log(data)
      },
      error: (data) => {
          alert("Could not read from URL");
      }
  })
}

$(document).ready(() => {
    $("#ajax").click(getCryptoCurrenciesAjax);
})