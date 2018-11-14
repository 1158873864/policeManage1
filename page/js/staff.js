var list=new Array();
var firstID=0;
var theGroup=0;
var tempList=new Array();
var url=getUrl();
var compare = function (obj1, obj2) {
    var val1 = obj1.id;
    var val2 = obj2.id;
    if (val1 > val2) {
        return -1;
    } else if (val1 < val2) {
        return 1;
    } else {
        return 0;
    }
}


if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href="mobile-staff.html";
}
else{

    $("#your-alert-1").hide();
    $("#your-alert-2").hide();
    $("#your-alert-3").hide();
    $("#your-alert-4").hide();
    $("#your-alert-5").hide();
    $("#page1").hide();
    $("#page2").hide();
    $("#page3").hide();
    $("#page4").hide();
    $("#page5").hide();

    $.ajax(
        {
            url: url+"/getStaffList",
            data: {
            },
            async:false,
            success: function (data) {
                for(var i=0;i<data.staffs.length;i++){
                    list.push(data.staffs[i]);
                }
                list.sort(compare);
                document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
                changepage(1);
                for(var i=0;i<list.length;i++){
                    tempList.push(list[i]);
                }
            },
            error: function (xhr) {
                alert('动态页有问题噶！\n\n' + xhr.responseText);
            },
            traditional: true,
        }
    )
}


function setthisquestion(n){
    var q=list[firstID+n];
    var storage = window.localStorage;
    storage["thisStaff"]=q.id;
}
function deletequestion(n){
    var r=confirm("确定删除么？");
    if(r) {
        var q = list[firstID + n];
        var url = getUrl();
        $.ajax(
            {
                url: url + "/deleteStaff",
                data: {
                    id: q.id
                },
                async: false,
                success: function (data) {
                    alert("删除成功");
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



function changegroup(to){
    $("#page1").show();
    $("#page2").show();
    $("#page3").show();
    $("#page4").show();
    $("#page5").show();
    if(to==1){
        if(theGroup!=0){
            theGroup=theGroup-1;
        }
    }
    else{
        theGroup=theGroup+1;

    }
    document.getElementById("page1").innerText=theGroup*5+1;
    document.getElementById("page2").innerText=theGroup*5+2;
    document.getElementById("page3").innerText=theGroup*5+3;
    document.getElementById("page4").innerText=theGroup*5+4;
    document.getElementById("page5").innerText=theGroup*5+5;


    changepage(1);
}
function changepage(page){
    $("#page1").show();
    $("#page2").show();
    $("#page3").show();
    $("#page4").show();
    $("#page5").show();
    firstID=(theGroup*5+page-1)*5;
    if(list.length<(theGroup*25+21)){
        $("#page5").hide();
        if(list.length<(theGroup*25+16)){
            $("#page4").hide();
            if(list.length<(theGroup*25+11)){
                $("#page3").hide();
                if(list.length<(theGroup*25+6)){
                    $("#page2").hide();
                    if(list.length<(theGroup*25+1)){
                        $("#page1").hide();
                    }
                }
            }
        }

    }
    if(list.length<(firstID+1)){
        $("#your-alert-1").hide();
        $("#your-alert-2").hide();
        $("#your-alert-3").hide();
        $("#your-alert-4").hide();
        $("#your-alert-5").hide();
    }
    else if(list.length<(firstID+2)){
        $("#your-alert-1").show();
        document.getElementById("number"+(firstID%5+1)).innerText=list[firstID].time;
        document.getElementById("name"+(firstID%5+1)).innerText=list[firstID].name;
        $("#your-alert-2").hide();
        $("#your-alert-3").hide();
        $("#your-alert-4").hide();
        $("#your-alert-5").hide();
    }
    else if(list.length<(firstID+3)){
        $("#your-alert-1").show();
        $("#your-alert-2").show();
        document.getElementById("number"+(firstID%5+1)).innerText=list[firstID].time;
        document.getElementById("name"+(firstID%5+1)).innerText=list[firstID].name;

        document.getElementById("number"+(firstID%5+2)).innerText=list[firstID+1].time;
        document.getElementById("name"+(firstID%5+2)).innerText=list[firstID+1].name;

        $("#your-alert-3").hide();
        $("#your-alert-4").hide();
        $("#your-alert-5").hide();
    }
    else if(list.length<(firstID+4)){
        $("#your-alert-1").show();
        $("#your-alert-2").show();
        $("#your-alert-3").show();
        document.getElementById("number"+(firstID%5+1)).innerText=list[firstID].time;
        document.getElementById("name"+(firstID%5+1)).innerText=list[firstID].name;

        document.getElementById("number"+(firstID%5+2)).innerText=list[firstID+1].time;
        document.getElementById("name"+(firstID%5+2)).innerText=list[firstID+1].name;

        document.getElementById("number"+(firstID%5+3)).innerText=list[firstID+2].time;;
        document.getElementById("name"+(firstID%5+3)).innerText=list[firstID+2].name;

        $("#your-alert-4").hide();
        $("#your-alert-5").hide();
    }
    else if(list.length<(firstID+5)){
        $("#your-alert-1").show();
        $("#your-alert-2").show();
        $("#your-alert-3").show();
        $("#your-alert-4").show();
        document.getElementById("number"+(firstID%5+1)).innerText=list[firstID].time;
        document.getElementById("name"+(firstID%5+1)).innerText=list[firstID].name;

        document.getElementById("number"+(firstID%5+2)).innerText=list[firstID+1].time;
        document.getElementById("name"+(firstID%5+2)).innerText=list[firstID+1].name;

        document.getElementById("number"+(firstID%5+3)).innerText=list[firstID+2].time;
        document.getElementById("name"+(firstID%5+3)).innerText=list[firstID+2].name;

        document.getElementById("number"+(firstID%5+4)).innerText=list[firstID+3].time;
        document.getElementById("name"+(firstID%5+4)).innerText=list[firstID+3].name;

        $("#your-alert-5").hide();
    }
    else{
        $("#your-alert-1").show();
        $("#your-alert-2").show();
        $("#your-alert-3").show();
        $("#your-alert-4").show();
        $("#your-alert-5").show();
        document.getElementById("number"+(firstID%5+1)).innerText=list[firstID].time;
        document.getElementById("name"+(firstID%5+1)).innerText=list[firstID].name;

        document.getElementById("number"+(firstID%5+2)).innerText=list[firstID+1].time;
        document.getElementById("name"+(firstID%5+2)).innerText=list[firstID+1].name;

        document.getElementById("number"+(firstID%5+3)).innerText=list[firstID+2].time;
        document.getElementById("name"+(firstID%5+3)).innerText=list[firstID+2].name;

        document.getElementById("number"+(firstID%5+4)).innerText=list[firstID+3].time;
        document.getElementById("name"+(firstID%5+4)).innerText=list[firstID+3].name;

        document.getElementById("number"+(firstID%5+5)).innerText=list[firstID+4].time;
        document.getElementById("name"+(firstID%5+5)).innerText=list[firstID+4].name;

    }


}

function searchAll() {
    list=new Array();
    var name=$("#name").val();
    var identity=$("#identity").val();
    var vehicleLicense=$("#vehicleLicense").val();
    var phone=$("#phone").val();
    for(var i=0;i<tempList.length;i++){
        if(tempList[i].name.indexOf(name)>(-1)&&tempList[i].identity.indexOf(identity)>(-1)&&tempList[i].vehicleLicense.indexOf(vehicleLicense)>(-1)&&tempList[i].phone.indexOf(phone)>(-1)){
            list.push(tempList[i]);
        }
    }

    firstID=0;
    theGroup=0;
    changepage(1);
    document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
}
/*
function searchByName(){
    list=new Array();
    var text=$("#name").val();
    for(var i=0;i<tempList.length;i++){
        if(tempList[i].name.indexOf(text)>(-1)){
            list.push(tempList[i]);
        }
    }

    firstID=0;
    theGroup=0;
    changepage(1);
    document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
}

function searchByIdentity(){
    list=new Array();
    var text=$("#identity").val();
    for(var i=0;i<tempList.length;i++){
        if(tempList[i].identity.indexOf(text)>(-1)){
            list.push(tempList[i]);
        }
    }

    firstID=0;
    theGroup=0;
    changepage(1);
    document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
}

function searchByLicense(){
    list=new Array();
    var text=$("#vehicleLicense").val();
    for(var i=0;i<tempList.length;i++){
        if(tempList[i].vehicleLicense.indexOf(text)>(-1)){
            list.push(tempList[i]);
        }
    }

    firstID=0;
    theGroup=0;
    changepage(1);
    document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
}

function searchByPhone(){
    list=new Array();
    var text=$("#phone").val();
    for(var i=0;i<tempList.length;i++){
        if(tempList[i].phone.indexOf(text)>(-1)){
            list.push(tempList[i]);
        }
    }

    firstID=0;
    theGroup=0;
    changepage(1);
    document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
}*/

function hideName(){
    document.getElementById("name").value="";
}

function hideIdentity(){
    document.getElementById("identity").value="";
}

function hideLicense(){
    document.getElementById("vehicleLicense").value="";
}

function hidePhone(){
    document.getElementById("phone").value="";
}

$("#sex").change(function() {
        changeByCondition();
})

$("#height").change(function() {
    changeByCondition();
})

$("#accent").change(function() {
    changeByCondition();
})

$("#bodyType").change(function() {
    changeByCondition();
})

$("#area").change(function() {
    changeByCondition();
})

$("#type").change(function() {
    changeByCondition();
})

$("#vehicleType").change(function() {
    changeByCondition();
})


function showAll(){
    list=new Array();
    for(var i=0;i<tempList.length;i++){
        list.push(tempList[i]);
    }
    firstID=0;
    theGroup=0;
    changepage(1);
    document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
}

function changeByCondition(){
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

    if(sex=="男"){
        document.getElementById("h1").innerText="1.7m以下";
        document.getElementById("h2").innerText="1.7m-1.8m";
        document.getElementById("h3").innerText="1.8m以上";
    }
    else if(sex=="女"){
        document.getElementById("h1").innerText="1.55m以下";
        document.getElementById("h2").innerText="1.55m-1.65m";
        document.getElementById("h3").innerText="1.65m以上";
    }

    list=new Array();
    for(var i=0;i<tempList.length;i++){
        if((sex==tempList[i].sex||sex=="全部")&&(height==tempList[i].height||height=="全部")&&(accent==tempList[i].accent||accent=="全部")&&(bodyType==tempList[i].bodyType||bodyType=="全部")&&(area==tempList[i].area||area=="全部")&&(type==tempList[i].type||type=="全部")&&(vehicleType==tempList[i].vehicleType||vehicleType=="全部")){
            list.push(tempList[i]);
        }
    }
    firstID=0;
    theGroup=0;
    changepage(1);
    document.getElementById("jilu").innerText="共"+(list.length)+"条记录";
}
