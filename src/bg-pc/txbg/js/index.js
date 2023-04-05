var filenames = new Array();
filenames = ['02e8fb0cb2ee9122a7cdaee2986122ae.jpg', '075cb20a23c8b1c2ffd4b4cd2b97bdb5.jpg', '08737885321e715948787796462f5a4e.jpg', '0a493ae414c0cd0950a787e6fd3936a9.jpg', '0b6401b4bcf8d538d5075a4436b04dbb.jpg', '0cc3ac312eaa2729458ceadc2e53c2d7.jpg', '12dfe364a93908483a9053298736164a.jpg', '16d4466f582cd6349773f9478e6885bd.jpg', '204f3372f25e60245adb45082b0c66d7.jpg', '23b52f0f84e7469e62ba7fc6710bc2ba.jpg', '24505e508bd46db7cb67d741c3950790.jpg', '25d5c52cd6ae64c1d88806e942433695.jpg', '2c51d1f11ace1a5c927cbc9a46045e1f.jpg', '313d550b82472b7d4af719c5e93b3ba3.jpg', '335efc938ee2fb4991431dbf9b71a4c1.jpg', '37c18a9eb2456f9fc101e1b836a279f6.jpg', '38d2f16b9e3929a40e865be4044594dc.jpg', '428178550f5aa1890e33193794d14587.jpg', '4ac400a28c7e8fb8783c7940c9eb2067.jpg', '509b154e53e830a9b59cf52dd61c888c.jpg', '53f676887f99242140e2754dc7a7c8d4.jpg', '55b812fbb55a49ebbbf5aa00803fa45f.jpg', '5660854cdcbd438a854b5ec718bd2497.jpg', '599a49b2f68a438c63457b743bd116aa.jpg', '5aa80ed12988d4a776d56881e479ea88.jpg', '5f5a096f6e466eaac19ee0b75a55a315.jpg', '62c0b103576920e3fe8de5437173bb5a.jpg', '65db7b58040e7d40b522c1ee62ef8291.jpg', '71c62fa1f28f08c257bc33bf427244c8.jpg', '72cb78bb13c9cafcf0352e68ae604835.jpg', '892db7f18b78b035ff9debf9d7baf780.jpg', '8feca48592ecb42af428ff6fbd7e1ae1.jpg', '966155b473863457559985adbb1d3d4f.jpg', '986e7ca2d0f818280830191fc9f5c2d9.jpg', 'b6dfe05df8200e975a1a1fdfad08407d.jpg', 'c1921b51fae3532a07c6bb4691151469.jpg', 'c7685d7940f345fa21861792c139257d.jpg', 'c94c45b631d1f3a5f3f2f4bd1b6b1a77.jpg', 'cc94140f93dfdd814309cc9467095649.jpg', 'ce158374aeaed2cedd163f0e5ad48ec7.jpg', 'd67a24e7dd779e099e31921bf3dd1d2b.jpg', 'd835591df52cbb22aaae0d5d0d147990.jpg', 'd84313a7efc721837e1ddf6bffc6a84d.jpg', 'd8b0be4bed8b27a2ca6dee268175d0eb.jpg', 'd9019266b59ac0b0fb35bbd57db2d5a7.jpg', 'db703e5c94207cc95d246b231ca22105.jpg', 'e5e1ec5f2df0cddab35dd31b8f4985ac.jpg', 'f055d5d8b397eaf4667e5fd12d0a7049.jpg', 'f4a1671d740fced4d64756b868044768.jpg', 'f793afbaacc69830c1e3d93559125493.jpg', 'f7fedaa49b5894f82cf71708ef956e3f.jpg', 'f8ee1a3746dbd35ef14c5485da94ec05.jpg', 'fd8564a53e5e16ad1bd10cfa845324a7.jpg', 'fdd9a63e52e3e308ede085b9d29d4ec9.jpg'];
showimg()
function showimg() {
    var randomBgIndex = Math.round(Math.random() * (filenames.length - 1));
    console.log(randomBgIndex);
    console.log();
    var img = filenames[randomBgIndex];
    //图片在github中cdn随机取出
    $(".txbg").css("background-image", `url(https://cdn.jsdelivr.ren/gh/mxk-zwh/cccccc@master/src/bg-pc/txbg/img/${img})`);
    // $(".txbg").css("background-image", `url(${location.href.match(/([\w\W]+)\//)[0]}img/${img})`);
}
//useinliveserver 
function imgname() {
    $.ajax({
        url: "./img",
        success: function (data) {
            filenames=[];
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
            var randomBgIndex = Math.round(Math.random() * (filenames.length - 1));
            console.log(randomBgIndex)
            console.log()
            var img = filenames[randomBgIndex]
            $(".txbg").css("background-image", `url(./img/${img})`);

        }
    });
}



