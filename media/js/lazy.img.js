function genImgbtn(){
    $('.hidden-img').each(function(){
        $(this).css("text-align", "center");
        var img_big_path = $(this).attr('data-img-big-path');
        var img_small_path = $(this).attr('data-img-small-path');
        var img_title = $(this).attr('data-img-title');
        var btn_id = $(this).attr('id')+"-btn";
        var img_id = $(this).attr('id')+"-img";
        var img_html = "<a href='"+img_big_path+"'><img id='"+img_id+"' style='display:none' data-path='"+img_small_path+"' title='点击显示大图' /></a><input data-img-id='"+img_id+"' value='Show Img' onclick='showImg(this)' style='font-size:12px; padding:5px; text-align:center;' type='button'><br />"+img_title;
        $(this).html(img_html);
    });
}
function showImg(btn){
    var img = "#"+$(btn).attr('data-img-id');
    var imgpath = $(img).attr("data-path");
    $(img).attr('src', imgpath);
    $(img).css('display', '');
    $(btn).css('display', 'none');
}
