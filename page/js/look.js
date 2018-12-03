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
            document.getElementById("name").innerText=data.staff.name;
            document.getElementById("identity").innerText=data.staff.identity;
            document.getElementById("phone").innerText=data.staff.phone;
            document.getElementById("address").innerText=data.staff.address;
            document.getElementById("sex").innerText=data.staff.sex;
            document.getElementById("height").innerText=data.staff.height;
            document.getElementById("accent").innerText=data.staff.accent;
            document.getElementById("bodyType").innerText=data.staff.bodyType;
            document.getElementById("area").innerText=data.staff.area;
            document.getElementById("type").innerText=data.staff.type;
            document.getElementById("vehicleType").innerText=data.staff.vehicleType;
            document.getElementById("vehicleLicense").innerText=data.staff.vehicleLicense;
            for (var i = 0; i < data.staff.wholeImages.length; i++) {
                imageList[1].push(data.staff.wholeImages[i]);
                var id=guid();
                idList[1].push(id);
                $("#imageList1").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.wholeImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                </div>");
            }

            for (var i = 0; i < data.staff.halfImages.length; i++) {
                imageList[2].push(data.staff.halfImages[i]);
                var id=guid();
                idList[2].push(id);
                $("#imageList2").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.halfImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    </div>");
            }

            for (var i = 0; i < data.staff.identityImages.length; i++) {
                imageList[3].push(data.staff.identityImages[i]);
                var id=guid();
                idList[3].push(id);
                $("#imageList3").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.identityImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    </div>");
            }

            for (var i = 0; i < data.staff.vehicleImages.length; i++) {
                imageList[4].push(data.staff.vehicleImages[i]);
                var id=guid();
                idList[4].push(id);
                $("#imageList4").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.vehicleImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    </div>");
            }

            for (var i = 0; i < data.staff.otherImages.length; i++) {
                imageList[5].push(data.staff.otherImages[i]);
                var id=guid();
                idList[5].push(id);
                $("#imageList5").append("<div id='"+id+"'>\n" +
                    "                                    <img src='"+getImagePath()+data.staff.otherImages[i]+"' style=\"width: 10rem;height: 10rem\">\n" +
                    "                                    </div>");
            }

        },
        error: function (xhr) {
            alert('动态页有问题噶！\n\n' + xhr.responseText);
        },
        traditional: true,
    }
)
