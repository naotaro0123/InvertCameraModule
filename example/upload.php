<?php
// 保存先のディレクトリのアクセス権変更を忘れないこと！
// apacheに権限を与えるか、imagesフォルダを777
// 画像保存先のディレクトリ
$save_dir ="images/";

if(!isset($_FILES)){
    $json = "{\"error\":\"files\"}";
}elseif(!isset($_FILES["media"])){
    $json = "{\"error\":\"files_media\"}";
}elseif(!isset($_FILES["media"]["name"])){
    $json = "{\"error\":\"files_media_name\"}";
}else{
    // 拡張子取得
    $type = explode(".",$fname);
    if($type[1] == "txt"){
        $fname = $type[0].".jpg";
    }
    $target_path = $save_dir . $fname;
    // アップロードファイルの保存
    if(!move_uploaded_file($_FILES['media']['tmp_name'],$target_path)){
        $json = "{\"error\":\"Can not Upload Image.{$fname}\"}";
    }else{
        $json = "{\"error\":\"\"}";
    }
}
// 処理結果をjsonで返す
header("Content-Type: text/javascript; charset=utf-8");
print $json;