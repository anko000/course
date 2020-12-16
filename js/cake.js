async function LoadOpinions() {
    var template1 = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/cake.template.html`, {
            cache: "no-cache"
        })
        .then(response => response.text());

    var template2 = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/cakeinform.template.html`, {
            cache: "no-cache"
        })
        .then(response => response.text());


    var xmlData = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/cake.data`, {
            cache: "no-cache"
        })
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, "text/xml"));
    //alert(xmlData.getElementsByTagName("cake").length);
    var variables = {
        cakes: xmlData.getElementsByTagName("cake"),
        id: function () {
            return this.getElementsByTagName('id')[0].childNodes[0].nodeValue;
        },
        imgSource: function () {
            return this.getElementsByTagName("imgSourse")[0].childNodes[0].nodeValue;
        },
        informCake: function () {
            return this.getElementsByTagName("informCake")[0].childNodes[0].nodeValue;
        },
    };
    
$("#table").html(templayed(template1)(variables));
    $("#pop").html(templayed(template2)(variables));
}

$(document).ready(function () {
    LoadOpinions();

});
