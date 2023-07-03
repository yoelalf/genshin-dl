let link = 'https://sdk-os-static.mihoyo.com/hk4e_global/mdk/launcher/api/resource?launcher_id=10&key=gcStgarh'
// let link = 'offline.json'
let object_parent;
$(document).ready(function() {
    $.getJSON(link, function(obj) {
        console.log(obj)
        console.log()
        SetHTMLPreInstall(obj.data.pre_download_game)
        
    });;
});

SetHTMLPreInstall = (value) =>{
    //On Game Files
    document.getElementById('latest-before-predl').innerHTML = value.diffs[0].version
    document.getElementById('latest-after-predl').innerHTML = value.latest.version
    document.getElementById('link-predl').setAttribute("href", value.diffs[0].path)

    //On English Voice Pack
    document.getElementById('link-predl-en').setAttribute("href", value.diffs[0].voice_packs[1].path)

    //On Japanese Voice Pack
    document.getElementById('link-predl-jp').setAttribute("href", value.diffs[0].voice_packs[2].path)
}