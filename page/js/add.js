var url = getUrl();
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href="mobile-add.html";
}
var imageList=new Array();

function fileSelected() {
    var fd = new FormData($("#upload-file-form")[0]);
    var url = getUrl();
    $.ajax({
        url: url + "/upload",
        type: "POST",
        data: fd,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        async: false,
        success: function (data) {
            imageList.push(data);
            $("#imageList").append("<img src='"+getImagePath()+imageList[imageList.length-1]+"' style=\"width: 10rem;height: 10rem;\">")
        },
        error: function (xhr) {
            alert("上传图片失败！")
            // Handle upload error
            // ...
        }
    });

}

function fileSelect() {
    document.getElementById("image").click();
}

function clearImage(){
    imageList.length=0;
    document.getElementById("imageList").innerText="";
}

function backTo(){
    window.location.href="index.html";
}


function changeByIdentity() {
    var identity=$("#identity").val();
    if(identity.length==18) {
        $.ajax(
            {
                url: url + "/getStaffByIdentity",
                data: {
                    identity: identity
                },
                async: false,
                success: function (data) {
                    if (data != "") {
                        document.getElementById("name").value = data.staff.name;
                        document.getElementById("identity").value = data.staff.identity;
                        document.getElementById("phone").value = data.staff.phone;
                        document.getElementById("address").value = data.staff.address;
                        document.getElementById("sex").value = data.staff.sex;
                        if (data.staff.sex == "男") {
                            document.getElementById("h1").innerText = "1.7m以下";
                            document.getElementById("h2").innerText = "1.7m-1.8m";
                            document.getElementById("h3").innerText = "1.8m以上";
                        }
                        else {
                            document.getElementById("h1").innerText = "1.55m以下";
                            document.getElementById("h2").innerText = "1.55m-1.65m";
                            document.getElementById("h3").innerText = "1.65m以上";
                        }
                        document.getElementById("height").value = data.staff.height;
                        document.getElementById("accent").value = data.staff.accent;
                        document.getElementById("bodyType").value = data.staff.bodyType;
                        document.getElementById("area").value = data.staff.area;
                        document.getElementById("type").value = data.staff.type;
                        document.getElementById("vehicleType").value = data.staff.vehicleType;
                        document.getElementById("vehicleLicense").value = data.staff.vehicleLicense;

                        for (var i = 0; i < data.staff.images.length; i++) {
                            clearImage();
                            imageList.push(data.staff.images[i]);
                            $("#imageList").append("<img src='" + getImagePath() + data.staff.images[i] + "' style=\"width: 10rem;height: 10rem;\">")
                        }
                    }
                },
                error: function (xhr) {
                    alert('动态页有问题噶！\n\n' + xhr.responseText);
                },
                traditional: true,
            }
        )
    }
    else{
        alert("请输入正确的身份证号！");
    }
}

function addUser(){
    var url = getUrl();

    var name=$("#name").val();
    var identity=$("#identity").val();
    var phone=$("#phone").val();
    var address=$("#address").val();
    var vehicleLicense=$("#vehicleLicense").val();

    if(name==""||identity==""||phone==""||address==""||vehicleLicense==""){
        alert("请填写除图片外的其他所有信息！");
    }
    else {
        var obj1 = document.getElementById("sex"); //定位id
        var index1 = obj1.selectedIndex; // 选中索引
        var sex = obj1.options[index1].text; // 选中文本

        var obj2 = document.getElementById("height"); //定位id
        var index2 = obj2.selectedIndex; // 选中索引
        var height = obj2.options[index2].text; // 选中文本

        var obj3 = document.getElementById("accent"); //定位id
        var index3 = obj3.selectedIndex; // 选中索引
        var accent = obj3.options[index3].text; // 选中文本

        var obj4 = document.getElementById("bodyType"); //定位id
        var index4 = obj4.selectedIndex; // 选中索引
        var bodyType = obj4.options[index4].text; // 选中文本

        var obj5 = document.getElementById("area"); //定位id
        var index5 = obj5.selectedIndex; // 选中索引
        var area = obj5.options[index5].text; // 选中文本

        var obj6 = document.getElementById("type"); //定位id
        var index6 = obj6.selectedIndex; // 选中索引
        var type = obj6.options[index6].text; // 选中文本

        var obj7 = document.getElementById("vehicleType"); //定位id
        var index7 = obj7.selectedIndex; // 选中索引
        var vehicleType = obj7.options[index7].text; // 选中文本
        if(identity.length==18) {
            if (imageList.length == 0) {
                imageList.push("");
                var r = confirm("人员身份证和车辆照片尚未上传，确定提交么？");
                if (r) {
                    $.ajax(
                        {
                            url: url + "/addStaff",
                            data: {
                                name: name,
                                identity: identity,
                                phone: phone,
                                address: address,
                                sex: sex,
                                height: height,
                                accent: accent,
                                bodyType: bodyType,
                                area: area,
                                type: type,
                                vehicleType: vehicleType,
                                vehicleLicense: vehicleLicense,
                                images: imageList
                            },
                            async: false,
                            success: function (data) {
                                alert("添加成功");
                                window.location.href = "index.html";
                            },
                            error: function (xhr) {
                                alert('动态页有问题噶！\n\n' + xhr.responseText);
                            },
                            traditional: true,
                        }
                    )
                }
            }
            else{
                $.ajax(
                    {
                        url: url + "/addStaff",
                        data: {
                            name: name,
                            identity: identity,
                            phone: phone,
                            address: address,
                            sex: sex,
                            height: height,
                            accent: accent,
                            bodyType: bodyType,
                            area: area,
                            type: type,
                            vehicleType: vehicleType,
                            vehicleLicense: vehicleLicense,
                            images: imageList
                        },
                        async: false,
                        success: function (data) {
                            alert("添加成功");
                            window.location.href = "index.html";
                        },
                        error: function (xhr) {
                            alert('动态页有问题噶！\n\n' + xhr.responseText);
                        },
                        traditional: true,
                    }
                )
            }
        }
        else{
            alert("请输入正确的身份证号！");
        }

    }
}