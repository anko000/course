async function LoadOpinions() {
    var template = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/cake.template.html`, {cache: "no-cache"} )
        .then(response => response.text());


    var xmlData = await fetch(`https://raw.githubusercontent.com/anko000/course/master/templayed/cake.data`, {cache: "no-cache"})
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, "text/xml"));