var camera = Titanium.Media.showCamera({
    success:function(event){
        var image = event.media;
        if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
            // ファイル名取得
            var filename = image.getNativePath();
            // モジュール読み込み
            var androimage = require('jp.simplecode.InvertCameraModule');
            // 画像回転
            var modifyfile = androimage.rotateImage(filename);
            // ファイルアップロード
            // uploadCameraImage(modifyfile);
            // 撮影後終了させる
            Ti.Android.currentActivity.finish();
        }
    },
    cancel:function(){
        // 撮影後終了させる
         Ti.Android.currentActivity.finish();
    },
    error:function(error){
        // カメラがない場合
        if(error.code == Titanium.Media.NO_CAMERA){
            alert("カメラがありません");
        }
    },
    // フォトギャラリーへの保存
    saveToPhotoGallery:true,
    // 撮影直後に拡大縮小移動可
    allowEditing:true,
    // 撮影可能なメディア種別
    mediaTypes:Ti.Media.MEDIA_TYPE_PHOTO
});

/*
 * ファイルアップロード処理
 */
function uploadCameraImage(image){
    var xhr = Ti.Network.createHTTPClient();
    xhr.onreadystatechange = checkReadyState;
    xhr.timeout = 10000; // 10秒でタイムアウト。指定しない場合、無制限
    var url = "http://[Your DOMAIN]/upload.php";
    xhr.open('POST',url);
    xhr.send({media:image});
    xhr.onload = function(){
        var json = JSON.parse(xhr.responseText);
    };
    xhr.onerror = function(){};
    // ステータスチェック
    function checkReadyState(){
        Ti.API.info("xhr.readyState:" + xhr.readyState);
        Ti.API.info("xhr.status:" + xhr.status);
        if((xhr.readyState == 4) && (xhr.status == 200)){
            Ti.API.info("xhr.responseText:" + xhr.responseText);
            if(xhr.responseText == "{\"error\":\"files_media\"}"){
                alert("時間を置いて再度行ってください");
            }
        }
    }
}
