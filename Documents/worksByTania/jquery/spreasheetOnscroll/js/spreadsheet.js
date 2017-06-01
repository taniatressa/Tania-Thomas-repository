$(document).ready(function() {
  var myWindow = $(window),
    myDoc = $(document);

  //each time user scrolls
  myWindow.scroll(function() {
    //verticAl end reached
    if (myDoc.height() - myWindow.height() === myWindow.scrollTop()) {
      // add new row
      var tr = $($('<tr/>')).append($('<th/>')).appendTo($('#spreadsheet'));

      //get the numer of current number of columns
      var numberOfCols = $('#spreadsheet tr:first-child th').length;
      for (var i = 0; i < numberOfCols; i++) {
        tr.append($('<td/>'));
      }

    }

    //horizontal end reached?
    if (myDoc.width() - myWindow.width() === myWindow.scrollLeft()) {
      //add a new column in heading row
      $('#spreadsheet tr:first-child').append(('<th/>'));

      //add the rows for columns
      $('#spreadsheet tr:not(:first-child)').each(function() {
        $(this).append($('<td/>'));
      });

    }
  });
});
