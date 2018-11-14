var url=getUrl();
var storage = window.localStorage;
var id=storage["thisStaff"];
$.ajax(
    {
        url: url+"/getStaff",
        data: {
            id:id
        },
        async:false,
        success: function (data) {
            document.getElementById("number").innerText=data.staff.id;
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
            for(var i=0;i<data.staff.images.length;i++){
                $("#imageList").append("<img src='"+getImagePath()+data.staff.images[i]+"' style=\"width: 10rem;height: 10rem;\">")
            }

        },
        error: function (xhr) {
            alert('动态页有问题噶！\n\n' + xhr.responseText);
        },
        traditional: true,
    }
)
