$(document).ready(function(){

    $(".FirstForm").submit(function(e){
        e.preventDefault()
        var heading = $(".headingtext").val();
        $("main").append("<div><h1>" + heading + "</h1></div>"); 
        $(".mySelect option").remove();
        $(".myHeading option").remove();
        $("h1").each(function(index){
            index = index+1;
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
        $("main div:nth-child("+i+")").append("<h4>" + subheading + "</h4>");   
        $(".mySubheading").append('<option value='+i+'>'+subheading+'</option>');        
    });    
    $(".myHeading").on('change',function(){
        index=$(this).val(); 
        
        $(".mySubheading").append('<option value='+index+'></option>');
    });
    // $(".myHeading").on('change',function(){
    $(".ThirdForm").submit(function(r){
        r.preventDefault();
        var Selectedoption = $('.optn option:selected').text();
        if(Selectedoption == "text")
            
                console.log("4")

            

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


    