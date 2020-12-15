async function LoadOpinions() {
    var template = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/opition.template.html`, {cache: "no-cache"} )
        .then(response => response.text());


    var xmlData = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/opinion.data`, {cache: "no-cache"})
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, "text/xml"));

    //alert(xmlData.getElementsByTagName("opinion").length);
    var variables = {
        opinions: xmlData.getElementsByTagName("opinion"),
        imgSource: function () {
            return this.getElementsByTagName('imgSource')[0].childNodes[0].nodeValue;
        },
        fullName: function () {
            return this.getElementsByTagName("fullName")[0].childNodes[0].nodeValue;
        },
        city: function () {
            return this.getElementsByTagName("city")[0].childNodes[0].nodeValue;
        },
        opinionText: function () {
            return this.getElementsByTagName("opinionText")[0].childNodes[0].nodeValue;
        },
    };
    //alert(templayed(template)(variables));

    $("#opinions").html(templayed(template)(variables));

}

$(document).ready(function () {
    LoadOpinions();
});





