# Image Comparator
This script compare two images using a slide bar. No libraries such as jQuery are needed.

スライドバーを使用して2枚の画像を比較するためのスクリプトです。jQueryなどのライブラリは使用していないため軽量です。

# Demo

https://astroid-apps.github.io/image-comparator/

# Usage
1. Please download the file [./ImageComparator.js](./ImageComparator.js).
1. Please write HTML as follows.

```HTML
<!doctype html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>image-comparator</title>
	</head>
	<body>
		<div id="images" style="width: 800px"></div>
		
		<script type="module">
			import {ImageComparator} from "./ImageComparator.js";

			const captionL = "Caption for left image";
			const imgL = "URL for left image";
			const captionR = "Caption for right image";
			const imgR = "URL for right image";
			const ic = new ImageComparator("images",imgL,imgR,captionL,captionR);
		</script>
	</body>
</html>
```

It is possible to change images and captions using ```setImage```.

```JavaScript
ic.setImage(newImageUrlL,newImageUrlR,newCaptionL,newCaptionR);
```

# Sample Image

![sample1](./sample1.png)

![sample2](./sample2.png)
