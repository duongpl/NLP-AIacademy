// var jq = document.createElement('script');
// jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
// document.getElementsByTagName('head')[0].appendChild(jq);
// // ... give time for script to load, then type (or see below for non wait option)
// jQuery.noConflict();

javascript: (function (e, s) {
    e.src = s;
    e.onload = function () {
        jQuery.noConflict();
        console.log('jQuery injected');
        jQuery(function ($) {
            var pathname = window.location.pathname
            a = pathname.split('.html')
            b = a[0].split('-')
            c = b[b.length - 1]
            d = c.slice(1, c.length)
            $("main").prepend(
                "<div id='recommend-box' style='width: 250px;height: 160px;border-radius: 6px;margin-top: 20px;margin-left: 20px;box-shadow: 1px 12px 20px #bbbbbb;background: repeat-x;background-image: linear-gradient(to right, #00309c , #00b8ff);color: white !important;position: fixed;'> <h3 id='recommend-box-title' style='padding-top: 10px;padding-left: 10px;margin-left: 15px;'>SẢN PHẨM NÀY CÓ:</h3><div id='result' style='text-align: center; '>"+"<img src='https://i.gifer.com/ZZ5H.gif' style='width:20%'> "+"</div></div>"
            )
            $.ajax({
                url: 'http://localhost:5000/test/' + d,
                success: function (res) {
                    $("#result").empty()
                    $("#result").append("<table style='font-size: 15px;margin-left: 20px;text-align: center;vertical-align: middle;'> <tbody><tr> <td><img width='20px' src='https://2.pik.vn/20216cd27b74-c5a9-4dec-87a5-43e4a6e404f0.png'></td> <td><b id='pos'>" + res.tt + "</b> bình luận tích cực</td> </tr> <tr> <td><img width='20px' src='https://2.pik.vn/202167e7f7f0-78cc-4e31-b53f-fab867dd0a26.png'></td> <td><b id='neg'>" + res.tc + "</b> bình luận tiêu cực</td> </tr> </tbody></table> ")
                },
            });
            // $("#result").empty()
            // $("#result").append("<table style='font-size: 15px;margin-left: 20px;text-align: center;vertical-align: middle;'> <tbody><tr> <td><img width='20px' src='https://2.pik.vn/20216cd27b74-c5a9-4dec-87a5-43e4a6e404f0.png'></td> <td><b id='pos'>" + '520' + "</b> bình luận tích cực</td> </tr> <tr> <td><img width='20px' src='https://2.pik.vn/202167e7f7f0-78cc-4e31-b53f-fab867dd0a26.png'></td> <td><b id='neg'>" + '100' + "</b> bình luận tiêu cực</td> </tr> </tbody></table> ")

        })
    };
    document.head.appendChild(e);
})(document.createElement('script'), 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')

