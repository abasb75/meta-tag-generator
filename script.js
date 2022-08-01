var title = null;
var url = null;
var keywords = null;
var description = null;
var image = null;
var revisit = null;
var auther = null;
var robot_index = null;
var robot_follow = null;
var responsive = null;
var result = null;
var generate_meta = null;
var meta_tags_list = '';
var og_list = '';
var twiter_list = '';
var copy = null;
window.onload = function (){
    title = document.getElementById('title');
    url = document.getElementById('url');
    description = document.getElementById('description');
    keywords = document.getElementById('keyword');
    revisit = document.getElementById('revisit');
    image = document.getElementById('image');
    auther = document.getElementById('auther');
    robot_index = document.getElementById('robot');
    robot_follow = document.getElementById('robot_link');
    responsive = document.getElementById('responsive');
    result = document.getElementById('result');
    generate_meta = document.getElementById('generate_meta');
    copy = document.getElementById('copy');

    revisit.onkeypress = checkRevisitInput;

    generate_meta.onclick = generate_meta_tags;
    copy.onclick = copy_meta_tags;


}
function checkRevisitInput(e){
    if(!revisit) return;
    var char = e.charCode;
    if(char>57) return false;
    if(revisit.value.length==0 && char<=48) return false;
    if(char<48) return false;
    console.log(char);
    return true;
}
function generate_meta_tags(){
    meta_tags_list = '';
    add_og();
    add_twitter();
    add_images();
    add_utf8();
    add_title();
    add_description();
    add_keywords();
    add_url();
    add_revisit();
    add_Robots();
    add_responsive();
    result.value = meta_tags_list + og_list + twiter_list;
}
function copy_meta_tags(){
    copy.innerHTML = 'Copied !!!';
    var text_copy = result.value;
    if (navigator.clipboard != undefined) {//Chrome
        navigator.clipboard.writeText(text_copy);
    }
    else if(window.clipboardData) { // Internet Explorer
        window.clipboardData.setData("Text", text_copy);
    }
    setTimeout(function (){
        copy.innerHTML = '   COPY';
    },3000)
}

function add_utf8(){
    meta_tags_list += '<meta charset="UTF-8">\n';
    meta_tags_list += '<meta http-equiv="Content-Type" content="" charset="utf-8" />\n';
}
function add_title(){
    if(!title) return;
    if(title.value.length == 0) return;
    meta_tags_list += '<title>'+title.value+'</title>\n';
    meta_tags_list += '<meta name="title" content="'+title.value+'">\n';
    og_list += '<meta property="og:title" content="'+title.value+'">\n';
    twiter_list += '<meta property="twitter:title" content="'+title.value+'">\n';
}
function add_description(){
    if(!description) return;
    if(description.value.length == 0) return;
    meta_tags_list += '<meta name="description" content="'+description.value+'">\n';
    og_list += '<meta property="og:description" content="'+description.value+'">\n';
    twiter_list += '<meta property="twitter:description" content="'+description.value+'">\n';
}
function add_keywords(){
    if(!keywords) return;
    if(keywords.value.length == 0) return;
    meta_tags_list += '<meta name="keywords" content="' + keywords.value+'">\n';
    meta_tags_list += '<meta name="news_keywords" content="' + keywords.value+'">\n';
}
function add_url(){
    if(!url) return;
    if(url.value.length == 0) return;
    meta_tags_list += '<meta name="url" content="'+url.value+'">\n';
    twiter_list += '<meta property="twitter:url" content="'+url.value+'">\n';
    og_list += '<meta property="og:url" content="'+url.value+'">\n';
}
function add_og(){
    og_list = '\n\n\n<!--OpenGrap And Facebook -->\n';
    og_list += '<meta property="og:type" content="website">\n';
}
function add_twitter(){
    twiter_list = '\n\n\n<!--Twitter -->\n';

}
function add_images(){
    if(!image) return;
    if(image.value.length == 0) {
        twiter_list += '<meta property="twitter:card" content="summary">\n';
        return;
    }
    twiter_list += '<meta property="twitter:card" content="summary_large_image">\n';
    twiter_list += '<meta property="twitter:image" content="'+image.value+'">\n';
    og_list += '<meta property="og:image" content="'+image.value+'">\n';
}
function add_revisit(){
    if(!revisit) return;
    if(revisit.value.length == 0) return;
    meta_tags_list += '<meta name="revisit-after" content="'+revisit.value+' days">\n';
}
function add_Robots(){
    if(!robot_index.checked && !robot_follow.checked){
        meta_tags_list += '<meta name="robots" content=" index , follow ">\n';
    }else if(robot_index.checked && !robot_follow.checked){
        meta_tags_list += '<meta name="robots" content=" noindex , follow ">\n';
    }else if(!robot_index.checked && robot_follow.checked){
        meta_tags_list += '<meta name="robots" content=" index , nofollow ">\n';
    }else {
        meta_tags_list += '<meta name="robots" content=" noindex , nofollow ">\n';
    }
}
function add_responsive(){
    if(!responsive.checked){
        meta_tags_list += '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">\n';
        meta_tags_list += '<meta name="apple-mobile-web-app-capable" content="yes">';
    }
}
function add_auther(){
    if(!auther) return;
    if(auther.value.length == 0);
    meta_tags_list += '<meta name="author" content="'+auther.value+'">\n';
}