
var storage=window.localStorage;
var id=storage["updateadmin"];
var date;
var url=getUrl();
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
            $("#imageList").append("<img src='"+"../"+imageList+"' style=\"width: 10rem;height: 10rem;\">")
        },
        error: function (xhr) {
            alert("上传图片失败！")
            // Handle upload error
            // ...
        }
    });

}
$.ajax(
    {
        url: url+"/getAdmin",
        data: {
            id:id
        },
        async:false,
        success: function (data) {

            document.getElementById("name").value=data.admin.username;
            document.getElementById("password").value=data.admin.password;
            date=data.admin.date;
            var limits=data.admin.limits;
            document.getElementById("limits").value=limits;
            imageList=data.admin.face;
            document.getElementById("imageList").innerText="";
            $("#imageList").append("<img src='"+getImagePath()+imageList+"' style=\"width: 10rem;height: 10rem;\">")

        },
        error: function (xhr) {
            alert('动态页有问题噶！\n\n' + xhr.responseText);
        },
        traditional: true,
    }
)
document.getElementById("ad").onclick=function() {
    var name = $("#name").val();
    var pass = $("#password").val();
    var obj1 = document.getElementById("limits"); //定位id
    var index1 = obj1.selectedIndex; // 选中索引
    var limits = obj1.options[index1].text; // 选中文本

    $.ajax(
        {
            url: url+"/updateAdmin",
            data: {
                id:id,
                username:name,
                password:pass,
                limits:limits,
                date:date,
                face:imageList
            },
            success: function (data) {
                alert("修改成功");
                window.location.href = "admin-list.html";
            },
            error: function (xhr) {
                alert('动态页有问题噶！\n\n' + xhr.responseText);
            },
            traditional: true,
        }
    )


}