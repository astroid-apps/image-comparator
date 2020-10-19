# Image Comparator
This script compare two images using a slide bar. No libraries such as jQuery are needed.

スライドバーを使用して2枚の画像を比較するためのスクリプトです。jQueryなどのライブラリは使用していないため軽量です。

# Usage
1. Please download the file [./dist/comparator.js](./dist/comparator.js).
1. Please write HTML as follows.

```HTML
<!doctype html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<script src="comparator.js"></script>
    
		<title>image-comparator</title>
	</head>
	<body>
		<div id="images" style="width: 800px"></div>
		
		<script>
			var captionL = "Caption for left image";
			var imgL = "URL for left image";
			var captionR = "Caption for right image";
			var imgR = "URL for right image";
			var ic = new ImageComparator("images",imgL,imgR,captionL,captionR);
		</script>
	</body>
</html>
```

It is possible to change images and captions using ```setImage```.

```JavaScript
ic.setImage(newImageUrlL,newImageUrlR,newCaptionL,newCaptionR);
```

# Sample Image

![sample](./sample.png)

