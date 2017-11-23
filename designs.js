// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let height, width,color;



  $('button').click(function(){
    height=$('#input_height').val();
    width=$('#input_width').val();
    makeGrid();
    //获取颜色
    $("#colorPicker").change(function(){
        color=$(this).val();
    });


    $("td").click(function(){
      $(this).css("background-color",color);
    });
  });





/*
@para
*/

function makeGrid() {
      color=$('#colorPicker').val();
      $('#pixel_canvas').html("");

      for(let i=0;i<height;i++)
      $('#pixel_canvas').append('<tr></tr>');
      for(let j=0;j<width;j++)
      $('tr').append('<td></td>');




}
