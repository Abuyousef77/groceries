    $(document).ready(function() {
    $("#favorite").submit(function(event) {
    event.preventDefault();
    $("#favorite").hide(800);
    $("#results").show(800);
    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();
    var item4 = $("input#item4").val();
    var userInput = [item1, item2, item3, item4];
    var array = [item1, item2, item3, item4 ];
    array.sort();
    var uppers = array.map(function(x) { return x.toUpperCase(); });
    alert("My Groceries are: " + uppers);
    userInput.map(function(item) {
    });
  });
});
