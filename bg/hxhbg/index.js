var imgurl, flag;
$.ajax({
    url: "https://api.vvhan.com/api/acgimg?type=json",
    method: "GET",
    success: function (data) {
        console.log(data);
        flag = data.success;
        imgurl = data.imgurl;
        if (flag == true) {
            $(".bg").css("background-image", imgurl);
        } 
    },
    error:function(){
        $(".bg span").text("请求失败");
    }
});