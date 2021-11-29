$(document).ready(function () {

    $(".FirstForm").submit(function (e) {
        e.preventDefault()
        $('.frstmodal').modal('hide');
        var heading = $(".headingtext").val();
        $("main").append("<div><h1>" + heading + "</h1></div>");
        $(".headingtext").val('');
        $(".mySelect option").remove();
        $(".myHeading option").remove();
        $("h1").each(function (index) {
            index = index + 1;
            head = $(this).text();
            $(".mySelect").append('<option value=' + index + '>' + head + '</option>');
            $(".myHeading").append('<option value=' + index + '>' + head + '</option>');
        });
    });
    $(".SecondForm").submit(function (e) {
        e.preventDefault();
        var subheading = $(".subheadingtext").val();
        $(".subheadingtext").val('');
        var i = $('.mySelect option:selected').attr('value');
        $("main div:nth-child(" + i + ")").append("<h4>" + subheading + "</h4>");
        // $(".mySubheading").append('<option value=' + i + '>' + subheading + '</option>');
        
    });
    $(".myHeading").on('change', function () {
        var ind = $(this).val();
        console.log("vsliurrur",ind)
        var flag = 0
        $("main div:nth-child(" + ind + ") h4").each(function (inda) {
            console.log("dfasdasd",inda)
            if(flag == 0){
                $(".mySubheading option").remove();
                flag = flag+1;
            }
            $(".mySubheading").append('<option value=' + inda + '>' + $(this).text() + '</option>');
        })
    });
    $(".ThirdForm").submit(function (r) {
        r.preventDefault();
        var Selectedoption = $('.optn option:selected').text();
        var fieldSet = $("<fieldset class='your form'></fieldset>");
        var id = $("#field_label").val();
        var label = $("#field_label").val();
        var class_name = $("#field_class").val();
        var field_value = $("#field_value").val();
        var field_place = $("#field_place").val();
        var field_options = $("#field_options").val();
        var i = $('.myHeading option:selected').attr('value');
        var j = $('.mySubheading option:selected').attr('value');
        console.log("abra ka daba",j)
        console.log("abr fjflkdjfkla",i)
        var input;
        if(Selectedoption == "Text"){
            input = $("<input type='text'  class='" + class_name + "' placeholder='" + field_place + "' value='" + field_value + "' />");
            console.log(input)
            fieldSet.append(label);
            fieldSet.append(input);

            $("main div:nth-child("+i+") h4:eq("+j+")").append(fieldSet); 
        }
        if(Selectedoption == "Text Area"){
            input = $("<textarea  class='" + class_name + "' placeholder='" + field_place + "' value='" + field_value + "' />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+") h4:eq("+j+")").append(fieldSet); 
        }
        if(Selectedoption == "Number"){
            input = $("<input type='number'  class='" + class_name + "' placeholder='" + field_place + "' value='" + field_value + "' />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+") h4:eq("+j+")").append(fieldSet); 
        }
        if(Selectedoption == "Email"){
            input = $("<input type='email'  class='" + class_name + "' placeholder='" + field_place + "' value='" + field_value + "' />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+")").append(fieldSet); 
        }
        if(Selectedoption == "Check Box"){
            // <label for="vehicle1"> I have a bike</label><br>
            var opts = field_options.split(",");
            opts.map(function(index){
                label = index
                console.log("label",label)
                console.log("index",index)
                console.log("id",id)
                input = $("<input type = 'checkbox'  class='" + class_name + "'   /> <br>");
                fieldSet.append(label);
                fieldSet.append(input);
                $("main div:nth-child("+i+")").append(fieldSet);    
            })
        }
        if(Selectedoption == "Select list") {
            var opts = field_options.split(",");
            opts.map(function(index){
                label = index
                input = $("<select class='" + class_name + "' /> <br>");
                fieldSet.append(label);
                fieldSet.append(input);
                $("main div:nth-child("+i+")").append(fieldSet); 
            })
        }
    if(Selectedoption == "Radio Button") {
        var opts = field_options.split(",");
            opts.map(function(index){
                label = index
                input = $("<input type='radio'  class='" + class_name + "' /> <br>");
                fieldSet.append(label);
                fieldSet.append(input);
                $("main div:nth-child("+i+")").append(fieldSet);    
            })            
        }
    if(Selectedoption == "upload file"){
        input = $("<input type='file'  class='" + class_name + "' placeholder='" + field_place + "' value='" + field_value + "' />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+")").append(fieldSet); 
        }
        
        
    });

    });
