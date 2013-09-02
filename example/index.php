<?php
// 画像パス
$path = "images";
// アルファベット昇順ソート
$array = scandir($path);
// 配列個数の取得
$num = count($array);
// 横に並べる画像の最大数
$max = 2;
// カウント
$cnt = 0;

// HTML表示
print("<p style='font-size:20px;'>・画像ファイル一覧</p>");
print("<table border=1><tr>");
for($i=0; $i<$num; $i++){
    $filename = $path."/".$array[$i];

    if(Eregi('gif$', $filename) or
       Eregi('jpg$', $filename) or
       Eregi('jpeg$', $filename) or
       Eregi('png$', $filename)){
        print("<td>$filename<img width='50%' height='50%' src=".$filename."></td>");
        // カウント初期化
        $cnt = $cnt + 1;
        // カウント数の判定
        if($cnt >= $max){
            print("</tr><tr>");
            $cnt = 0;
        }
    }
}
print("</tr></table>");
