$(document).ready(function(){
    $("#button").click(function(){
        let task = ($('#nhapten').val());
        $('#tasktable').append("<li style='list-style: none;'><label><input type='checkbox' id='checkboxa'> " + task +  "</lable></li>");
            let dscheck = $("input:checked").length;
            let tong =  $( "#tasktable input[type='checkbox']").length;        
            let ketqua = Math.floor((dscheck/tong)*100);
            $('#percent').animate({width: ketqua + '%'}).html(ketqua + '%');  
    });

    // bắt sk click
    $(document).on("click","#checkboxa",function (){
        // đêm các ô được tích dấu
        let dscheck = $("input:checked").length;
        // tổng số ô chưa được tích
        let tong =  $( "#tasktable input[type='checkbox']").length;        
        let ketqua = Math.floor((dscheck/tong)*100);
        $('#percent').css("width", ketqua + "%").text(ketqua + "%");
    });

    
    
// bài 2
        // khai báo thẻ có id là progress
        let prg = $('#progress');
        // khai báo chều dài
        let counter = 0;
        // khai báo phần trăm
        let progress = 0;
        // khai báo 1 thẻ setintevel có 2 tham số (tham số 1 : tên của function,"tham số 2 :tốc độ chạy ")
        let run = setInterval(frame,400);
            function frame (){
                // nếu phần trăm bằng 100% và chiều dài chạy đến 100% thì dừng lại k chạy nữa
            if(progress == 100 && counter == 100){
                clearInterval(run);
            }else{
                // tăng phần trăm lên 1 đơn vị
                progress +=1;
                // tăng chiều dài lên 1 đơn vị
                counter +=1;
                prg.css("width",counter+"%");
                prg.text(progress + "%")
            }
        }


    // bài 3
    //
    $(document).on("click","#check-all-left",function() {
                                                        // prop chả về checked , chính nó chả về gitri checked
        $("input[type=checkbox]").not('#check-all-right').prop("checked", $(this).prop("checked"));
        // let a = $("#tableleft input[type=checkbox]").prop('checked',this.checked);
    });

    $(document).on("click","#gotoright",function(){
        $("#tableleft input:checked").not("#check-all-left").each(function(){
            $(this).prop("checked",false).parents("tr").remove().appendTo("#tableright");
                // alert('adsads');
        });
        // alert(1321);
    });


    // sang trái
    $(document).on("click","#check-all-right",function() {
        // prop chả về checked , chính nó chả về gitri checked
        $("input[type=checkbox]").not('#check-all-left').prop("checked", $(this).prop("checked"));
        // let a = $("#tableleft input[type=checkbox]").prop('checked',this.checked);
        
    });

        $(document).on("click","#gotoleft",function(){
            $("#tableright input:checked").not("#check-all-right").each(function(){
            $(this).prop("checked",false).parents("tr").remove().appendTo("#tableleft");
            // alert('adsads');
            });
        // alert(1321);
        });


    // tìm kiếm
    
        // lấy ra class của input keyup là k cần ấn enter 
        
            // $(".form-control").on("keyup", function() {
            //     // khai báo 1 gtri value = chính gtri của nó kèm theo hàm viết chữ thường
            //     let value = $(this).val().toLowerCase();
            // //   truy xuất đến bảng table rồi tr và thêm thuộc tính filter để tìm kiếm
            //   $("#tableleft tr").filter(function() {
            //     //   lấy chính nó để ẩn và hiện chính gtri mà mk tìm kiếm in ra text thêm thuộc tính tìm bằng chữ thường và tìm kí tự có giá trị lớn hơn -1
            //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            //   });
            // });
              
            // $(".form-control").on("keyup", function() {
            //   let value = $(this).val().toLowerCase();
            //   $("#tableright tr").filter(function() {
            //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            //   });
            // });
        

});
