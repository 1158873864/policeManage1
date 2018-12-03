

var url=getUrl();
var storage = window.localStorage;
var id=storage["thisStaff"];
var imageList=new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
var idList=new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

$.ajax(
    {
        url: url+"/getStaff",
        data: {
            id:id
        },
        async:false,
        success: function (data) {
            document.getElementById("name").value=data.staff.name;
            document.getElementById("identity").value=data.staff.identity;
            document.getElementById("phone").value=data.staff.phone;
            document.getElementById("address").value=data.staff.address;
            document.getElementById("sex").value=data.staff.sex;
            if(data.staff.sex=="男"){
                document.getElementById("h1").innerText="1.7m以下";
                document.getElementById("h2").innerText="1.7m-1.8m";
                document.getElementById("h3").innerText="1.8m以上";
            }
            else{
                document.getElementById("h1").innerText="1.55m以下";
                document.getElementById("h2").innerText="1.55m-1.65m";
                document.getElementById("h3").innerText="1.65m以上";
            }
            document.getElementById("height").value=data.staff.height;
            document.getElementById("accent").value=data.staff.accent;
            document.getElementById("bodyType").value=data.staff.bodyType;
            document.getElementById("area").value=data.staff.area;
            document.getElementById("type").value=data.staff.type;
            document.getElementById("vehicleType").value=data.staff.vehicleType;
            document.getElementById("vehicleLicense").value=data.staff.vehicleLicense;

            for (var i = 0; i < data.staff.wholeImages.length; i++) {
                imageList[1].push(data.staff.wholeImages[i]);
                var id=guid();
                idList[1].push(id);
                $("#imageList1").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.wholeImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    <span><button onclick=\"delImage('"+id+"',1)\" style=\"color: red;\"><-删除</button></span>\n" +
                    "                                </div>");
            }

            for (var i = 0; i < data.staff.halfImages.length; i++) {
                imageList[2].push(data.staff.halfImages[i]);
                var id=guid();
                idList[2].push(id);
                $("#imageList2").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.halfImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    <span><button onclick=\"delImage('"+id+"',2)\" style=\"color: red;\"><-删除</button></span>\n" +
                    "                                </div>");
            }

            for (var i = 0; i < data.staff.identityImages.length; i++) {
                imageList[3].push(data.staff.identityImages[i]);
                var id=guid();
                idList[3].push(id);
                $("#imageList3").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.identityImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    <span><button onclick=\"delImage('"+id+"',3)\" style=\"color: red;\"><-删除</button></span>\n" +
                    "                                </div>");
            }

            for (var i = 0; i < data.staff.vehicleImages.length; i++) {
                imageList[4].push(data.staff.vehicleImages[i]);
                var id=guid();
                idList[4].push(id);
                $("#imageList4").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.vehicleImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    <span><button onclick=\"delImage('"+id+"',4)\" style=\"color: red;\"><-删除</button></span>\n" +
                    "                                </div>");
            }

            for (var i = 0; i < data.staff.otherImages.length; i++) {
                imageList[5].push(data.staff.otherImages[i]);
                var id=guid();
                idList[5].push(id);
                $("#imageList5").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.otherImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    <span><button onclick=\"delImage('"+id+"',5)\" style=\"color: red;\"><-删除</button></span>\n" +
                    "                                </div>");
            }

        },
        error: function (xhr) {
            alert('动态页有问题噶！\n\n' + xhr.responseText);
        },
        traditional: true,
    }
)



function fileSelect(order) {
    document.getElementById("image"+order).click();
}

function fileSelected(order) {
    var fd = new FormData($("#upload-file-form"+order)[0]);
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
            imageList[order].push(data);
            var id=guid();
            idList[order].push(id);
            $("#imageList"+order).append("<div id='"+id+"'>\n" +
                "                                    <img src='"+getImagePath()+data+"' style=\"width: 10rem;height: 10rem\">\n" +
                "                                    <span><button onclick=\"delImage('"+id+"','"+order+"')\" style=\"color: red;\"><-删除</button></span>\n" +
                "                                </div>");
        },
        error: function (xhr) {
            alert("上传图片失败！")
            // Handle upload error
            // ...
        }
    });

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
                        clearImage();
                        for (var i = 0; i < data.staff.wholeImages.length; i++) {
                            imageList[1].push(data.staff.wholeImages[i]);
                            var id=guid();
                            idList[1].push(id);
                            $("#imageList1").append("<div id='"+id+"'>\n" +
                                "                                    <img src='"+getImagePath()+data.staff.wholeImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                                "                                    <span><button onclick=\"delImage('"+id+"',1)\" style=\"color: red;\"><-删除</button></span>\n" +
                                "                                </div>");
                        }

                        for (var i = 0; i < data.staff.halfImages.length; i++) {
                            imageList[2].push(data.staff.halfImages[i]);
                            var id=guid();
                            idList[2].push(id);
                            $("#imageList2").append("<div id='"+id+"'>\n" +
                                "                                    <img src='"+getImagePath()+data.staff.halfImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                                "                                    <span><button onclick=\"delImage('"+id+"',2)\" style=\"color: red;\"><-删除</button></span>\n" +
                                "                                </div>");
                        }

                        for (var i = 0; i < data.staff.identityImages.length; i++) {
                            imageList[3].push(data.staff.identityImages[i]);
                            var id=guid();
                            idList[3].push(id);
                            $("#imageList3").append("<div id='"+id+"'>\n" +
                                "                                    <img src='"+getImagePath()+data.staff.identityImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                                "                                    <span><button onclick=\"delImage('"+id+"',3)\" style=\"color: red;\"><-删除</button></span>\n" +
                                "                                </div>");
                        }

                        for (var i = 0; i < data.staff.vehicleImages.length; i++) {
                            imageList[4].push(data.staff.vehicleImages[i]);
                            var id=guid();
                            idList[4].push(id);
                            $("#imageList4").append("<div id='"+id+"'>\n" +
                                "                                    <img src='"+getImagePath()+data.staff.vehicleImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                                "                                    <span><button onclick=\"delImage('"+id+"',4)\" style=\"color: red;\"><-删除</button></span>\n" +
                                "                                </div>");
                        }

                        for (var i = 0; i < data.staff.otherImages.length; i++) {
                            imageList[5].push(data.staff.otherImages[i]);
                            var id=guid();
                            idList[5].push(id);
                            $("#imageList5").append("<div id='"+id+"'>\n" +
                                "                                    <img src='"+getImagePath()+data.staff.otherImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                                "                                    <span><button onclick=\"delImage('"+id+"',5)\" style=\"color: red;\"><-删除</button></span>\n" +
                                "                                </div>");
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


function delImage(x,order){
    $("#"+x).hide();
    var index=idList[order].indexOf(x);
    if (index > -1) {
        idList[order].splice(index,1);
        imageList[order].splice(index, 1);
    }
}

function clearImage(){

    document.getElementById("imageList1").innerText="";
    document.getElementById("imageList2").innerText="";
    document.getElementById("imageList3").innerText="";
    document.getElementById("imageList4").innerText="";
    document.getElementById("imageList5").innerText="";
    imageList=new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
    idList=new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array());

}

function backTo(){
    window.location.href="staff.html";
}

function addUser(){
    var url = getUrl();

    var name=$("#name").val();
    var identity=$("#identity").val();
    var phone=$("#phone").val();
    var address=$("#address").val();
    var vehicleLicense=$("#vehicleLicense").val();

    if(name==""||identity==""||phone==""||address==""){
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

            if (imageList[1].length == 0) {
                imageList[1].push("");
            }
            if (imageList[2].length == 0) {
                imageList[2].push("");
            }
            if (imageList[3].length == 0) {
                imageList[3].push("");
            }
            if (imageList[4].length == 0) {
                imageList[4].push("");
            }
            if (imageList[5].length == 0) {
                imageList[5].push("");
            }
            $.ajax(
                {
                    url: url + "/updateStaff",
                    data: {
                        id: id,
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
                        wholeImages: imageList[1],
                        halfImages: imageList[2],
                        identityImages: imageList[3],
                        vehicleImages: imageList[4],
                        otherImages: imageList[5]
                    },
                    async: false,
                    success: function (data) {
                        alert("修改成功");
                        window.location.href = "index.html";
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
}