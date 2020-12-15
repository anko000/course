async function LoadStores() {
    var template = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/stores.template.html`, {cache: "no-cache"} )
        .then(response => response.text());


    var xmlData = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/stores.data`, {cache: "no-cache"})
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, "text/xml"));


    var variables = {
        stores: xmlData.getElementsByTagName("store"),
        imgSource: function () {
            return this.getElementsByTagName('imgSource')[0].childNodes[0].nodeValue;
        },
        text: function () {
            return this.getElementsByTagName("text")[0].childNodes[0].nodeValue;
        },
    };
    //alert(templayed(template)(variables));

    $("#stores").html($("#stores").innerHTML + templayed(template)(variables));

}

$(document).ready(function () {
    LoadStores();
});





