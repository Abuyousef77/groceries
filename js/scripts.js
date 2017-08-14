    $(document).ready(function() {
    $("#favorite").submit(function(event) {
    event.preventDefault();

    var item1 = $("input#item1").val().split(" ").reverse();
    // var splitSentence = item1.split (" ");
    // var mappedSentence = splitSentence.map(function(item1) {
    //   if (item1.length >= 3) {
    //     return item1;
    //   } else {
    //     false;
    //   }

    item1.forEach(function(word){
      if (word.length >= 3) {
        $("#sentence").append(word + " ");
      }
    })

      });
    //alert(mappedSentence.reverse());
  //});
});
