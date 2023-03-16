var filenames = new Array();

$.ajax({
    url: "./img",
    success: function (data) {
        $(data).find("a:contains(.jpg)").each(function () {
            let tmp = $(this).attr("href");
            let idx = tmp.lastIndexOf("/");
            tmp = tmp.slice(idx + 1, tmp.length);
            filenames.push(tmp)
        });


        var reg = /.*(?=\.jpg)/;
        filenames.sort((x, y) => {
            x = x.match(reg)[0];
            y = y.match(reg)[0];

        })
        console.log(filenames)
        var randomBgIndex = Math.round(Math.random() * (filenames.length-1));
        console.log(randomBgIndex)
        console.log()
        var img=filenames[randomBgIndex]
        $(".txbg").css("background-image", `url(./img/${img})`);

    }
});


