このモジュールはandroidにて、画像のイグジフ情報を読み取り、正しい向きに画像を書き直します


◆使用方法
（１）build.propertiesを自分の環境に合わせて修正

（２）eclipseにインポートする

（３）bulid.xmlからビルドする

（４）distフォルダにモジュールが出来上がるので、自分のTitaniumプロジェクト直下にzipだけ配置する

（５）自分のtiapp.xmlに以下を追記
    <modules>
        <module platform="android" version="0.1">jp.simplecode.InvertCameraModule</module>
    </modules>

（６）example/camera.jsを参考に自分のプロジェクトで使用する
    // モジュール読み込み
    var androimage = require('jp.simplecode.InvertCameraModule');
    // 画像回転
    var modifyfile = androimage.rotateImage(filename);

　※　画像をサーバにUPしたい場合は、camera.js内のサーバURLを修正して下さい。
　　example/upload.php,index.phpで動作確認できます

（７）自分のTitaniumプロジェクトをコンパイルするとmoduleフォルダが出来上がり使用できます



以下を参考にしました。
[TitaniumのAndroid用モジュールを作る] http://d.hatena.ne.jp/siso9to/20110819/1313724829
[Androidでカメラで撮った写真の向きを自動で補正する方法] http://9ensan.com/blog/smartphone/android/android-camera-autorotat/

[モジュール作成コマンド]
titanium create --platform=android --type=module --name=InvertCameraModule --id=jp.simplecode.InvertCameraModule --android=/Users/ikewadanaohito/Applications/adt-bundle-mac-x86_64/sdk
