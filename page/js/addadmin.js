var imageList="";
function fileSelected() {
    var fd = new FormData($("#upload-file-form")[0]);
    var url = getUrl();
    $.ajax({
        url: url + "/uploadAdmin",
        type: "POST",
        data: fd,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        async: false,
        success: function (data) {
            imageList=data;
            document.getElementById("imageList").innerText="";
            $("#imageList").append("<img src='"+getImagePath()+imageList+"' style=\"width: 10rem;height: 10rem;\">")
        },
        error: function (xhr) {
            alert("上传图片失败！")
            // Handle upload error
            // ...
        }
    });

}

<mce:script language="<a href="http://lib.csdn.net/base/javascript" class='replace_word' title="JavaScript知识库" target='_blank' style='color:#df3434; font-weight:bold;'>JavaScript</a>" type="text/javascript"><!--

    /**
     * 对Date的扩展，将 Date 转化为指定格式的String
     * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * eg:
     * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
     * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
     * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
     * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
     * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
     */
    Date.prototype.pattern=function(fmt) {
        var o = {
            "M+" : this.getMonth()+1, //月份
            "d+" : this.getDate(), //日
            "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
            "H+" : this.getHours(), //小时
            "m+" : this.getMinutes(), //分
            "s+" : this.getSeconds(), //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S" : this.getMilliseconds() //毫秒
        };
        var week = {
            "0" : "/u65e5",
            "1" : "/u4e00",
            "2" : "/u4e8c",
            "3" : "/u4e09",
            "4" : "/u56db",
            "5" : "/u4e94",
            "6" : "/u516d"
        };
        if(/(y+)/.test(fmt)){
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        if(/(E+)/.test(fmt)){
            fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
        }
        for(var k in o){
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            }
        }
        return fmt;
    }


document.getElementById("ad").onclick=function() {
    if($("#password").val()!=$("#passwordagain").val()){
        alert("请保证密码一致！")
    }
    else {
        var name = $("#name").val();
        var pass = $("#password").val();
        var myDate = new Date();
        var date = myDate.pattern("yyyy/MM/dd");
        var obj1 = document.getElementById("limits"); //定位id
        var index1 = obj1.selectedIndex; // 选中索引
        var limits = obj1.options[index1].text; // 选中文本
        var url=getUrl();
        $.ajax(
            {
                url: url+"/addadmin",
                data: {
                    username:name,
                    password:pass,
                    limits:limits,
                    date:date,
                    face:imageList
                },

                success: function (data) {
                    alert("添加成功");
                    window.location.href = "admin-list.html";
                },
                error: function (xhr) {
                    alert('动态页有问题噶！\n\n' + xhr.responseText);
                },
                traditional: true,
            }
        )

    }
}