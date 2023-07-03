let link = 'https://sdk-os-static.mihoyo.com/hk4e_global/mdk/launcher/api/resource?launcher_id=10&key=gcStgarh'
let object_parent;
$(document).ready(function() {
    $.getJSON(link, function(obj) {
        console.log(obj)
        console.log()
        SetHTMLPreInstall(obj.data.pre_download_game)
        
    });;
});

SetHTMLPreInstall = (value) =>{
    document.getElementById('latest-before-predl').innerHTML = value.diffs[0].version
    document.getElementById('latest-after-predl').innerHTML = value.latest.version
    document.getElementById('link-predl').setAttribute("href", value.latest.version)
}