$(document).ready(function(){

    $(".FirstForm").submit(function(e){
        e.preventDefault()
        var heading = $(".headingtext").val();
        $("main").append("<div><h1>" + heading + "</h1></div>"); 
        $(".mySelect option").remove();
        $("h1").each(function(index){
            index = index+1;
            // console.log(index)
            head = $(this).text();
            // $(".mySelect").append($('<option></option>').attr("value",index).text(head));  
            $(".mySelect").append('<option value='+index+'>'+head+'</option>');

            $(".myHeading").append('<option value='+index+'>'+head+'</option>');

            
        });
    });
    $(".SecondForm").submit(function(e){
        e.preventDefault();
        var subheading = $(".subheadingtext").val();
        var i = $('.mySelect option:selected').attr('value');
        console.log(subheading,i)
        
        $( "main div:nth-child("+i+")").append("<div><h4>" + subheading + "</h4></div>");   
        // console.log(i)


       
    });     
});




 // $("#subheading-button").submit(function () {
    //     var subheading = $("#subheading-body").val();
    //     $( "main:nth-child(#mySelect)" ).append( "<h4>" + subheading + "</h4>" );

    // })


    // $("#formsubmit").click(function () {
    //     var drpdwnval3 = $("#selectType option:selected").text();
    //     if (drpdwnval3 == text) {
    //         var label = $("#label").val();
    //         var value = $("#value").val();
    //     }
    //     var str = label + value

    //     $("#form-div").html(str);

    // })