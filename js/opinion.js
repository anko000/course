async function LoadOpinions() {
    var template = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/opition.template.html`)
        .then(response => response.text());


    var xmlData = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/opinion.data`)
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, "text/xml"));


    var variables = {
        opinions: xmlData.getElementsByTagName("opinions"),
        imgSource: function () {
            return "this.getElementsByTagName('imgSource')[0].childNodes[0].nodeValue";
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





