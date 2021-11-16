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
        $(".mySubheading").append('<option value=' + i + '>' + subheading + '</option>');
        
    });
    $(".myHeading").on('change', function () {
        var ind = $(this).val();
        $("main div:nth-child(" + ind + ")").each(function (ind) {
            console.log(ind)
            console.log($(this).text());
            $(".mySubheading option").remove();
            $(".mySubheading").append('<option value=' + ind + '>' + $(this).text() + '</option>');
        })
    });
    $(".ThirdForm").submit(function (r) {
        r.preventDefault();
        var Selectedoption = $('.optn option:selected').text();
        var fieldSet = $("<fieldset id=\"yourform\"></fieldset>");
        var id = $("#field_label").val();
        var label = $("#field_label").val();
        var class_name = $("#field_class").val();
        var field_value = $("#field_value").val();
        var field_place = $("#field_place").val();
        var field_options = $("#field_options").val();
        var i = $('.myHeading option:selected').attr('value');
        var input;
        if(Selectedoption == "Text"){
            input = $("<input type=\"text\" id=\"" + id + "\" name=\"" + label + "\" class=\"" + class_name + "\" placeholder=\"" + field_place + "\" value=\"" + field_value + "\" />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+")").append(fieldSet); 
        }
        if(Selectedoption == "Text Area"){
            input = $("<textarea id=\"" + id + "\" name=\"" + label + "\" class=\"" + class_name + "\" placeholder=\"" + field_place + "\" value=\"" + field_value + "\" />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+")").append(fieldSet); 
        }
        if(Selectedoption == "Number"){
            input = $("<input type=\"number\" id=\"" + id + "\" name=\"" + label + "\" class=\"" + class_name + "\" placeholder=\"" + field_place + "\" value=\"" + field_value + "\" />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+")").append(fieldSet); 
        }
        if(Selectedoption == "Email"){
            input = $("<input type=\"email\" id=\"" + id + "\" name=\"" + label + "\" class=\"" + class_name + "\" placeholder=\"" + field_place + "\" value=\"" + field_value + "\" />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+")").append(fieldSet); 
        }
        if(Selectedoption == "Check Box"){
            // <label for="vehicle1"> I have a bike</label><br>
            var opts = field_options.split(",");
            opts.map(function(index){
                // label = index
                console.log("label",label)
                console.log("index",index)
                console.log("id",id)
                input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + label + "\" class=\"" + class_name + "\" /> <br>");
                fieldSet.append(label);
                fieldSet.append(input);
                $("main div:nth-child("+i+")").append(fieldSet);    
            })
        }
        if(Selectedoption == "Select list") {
            var opts = field_options.split(",");
            opts.map(function(index){
                input = $("<input type=\"Select list\" id=\"" + id+ "\" name=\"" + label + "\" class=\"" + class_name + "\" /> <br>");
                fieldSet.append(label);
                fieldSet.append(input);
                $("main div:nth-child("+i+")").append(fieldSet); 
            })
        }
    if(Selectedoption == "Radio Button") {
        var opts = field_options.split(",");
            opts.map(function(index){
                input = $("<input type=\"radio button\" id=\"" + id+ "\" name=\"" + label + "\" class=\"" + class_name + "\" /> <br>");
                fieldSet.append(label);
                fieldSet.append(input);
                $("main div:nth-child("+i+")").append(fieldSet);    
            })            
        }
    if(Selectedoption == "upload file"){
        input = $("<input type=\"upload\" id=\"" + id + "\" name=\"" + label + "\" class=\"" + class_name + "\" placeholder=\"" + field_place + "\" value=\"" + field_value + "\" />");
            fieldSet.append(label);
            fieldSet.append(input);
            $("main div:nth-child("+i+")").append(fieldSet); 
        }
        
        
    });

    });









