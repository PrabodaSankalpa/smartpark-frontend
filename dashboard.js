document.getElementById("refresh").addEventListener("click", () => {
  $.ajax({
      type: 'GET',
        dataType:"json",
      url: 'http://localhost:3000/balance',
      success: function (data, status, xhr) {
        document.getElementById("balanceText").innerHTML = data;
      }
    });
});
