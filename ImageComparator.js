/*
	画像比較
	
	2020/10/19 右側のキャプションの位置がずれる不具合を修正
	2020/07/02 キャプション追加
	2020/06/13 clipPathがIEでは未対応のため、trimmedImgLで囲ってtrimmedImgLのwidthを変更する方法を採用
	2020/06/12 モジュール化
	2020/06/06 作成開始
*/

export function ImageComparator(elementId,imageUrlL,imageUrlR,captionL,captionR){
	
	//画像の表示幅(initで設定)
	let width;
	
	//スライドバーの表示幅(initで設定)
	let barWidth;
	
	//背景画像(外側divの高さがずれないようにvertical-alignを設定)
	const imgR = document.createElement("img");
	imgR.setAttribute("style","vertical-align:bottom;width:100%;");
	imgR.setAttribute("src",imageUrlR);
	
	//上に重ねる比較画像(横幅は読み込み完了時にimgRの幅が決まり次第反映)
	const imgL = document.createElement("img");
	imgL.setAttribute("style","vertical-align:bottom;");
	imgL.setAttribute("src",imageUrlL);
	
	//imgLをトリミングするためのdiv(横幅以上の部分はoverflow:hidden;で非表示)
	const trimmedImgL = document.createElement("div");
	trimmedImgL.setAttribute("style","position:absolute;z-index:1;top:0px;bottom:0px;left:0px;overflow:hidden;");
	trimmedImgL.appendChild(imgL);
	
	//境界線
	const bar = document.createElement("div");
	bar.setAttribute("style","position:absolute;z-index:3;top:0px;height:100%;");
	bar.style.backgroundColor = "#cccccc";
	
	//imgRキャプション
	const capR = document.createElement("div");
	capR.setAttribute("style","position:absolute;z-index:2;bottom:0px;padding:2px 2px 2px 2px;");
	capR.style.backgroundColor = "#eeeeee";
	capR.innerHTML = captionR;
	
	//imgLキャプション
	const capL = document.createElement("div");
	capL.setAttribute("style","position:absolute;z-index:4;bottom:0px;padding:2px;");
	capL.style.backgroundColor = "#eeeeee";
	capL.innerHTML = captionL;
	
	//マウス操作を受け付けるための最前面レイヤー
	const slider = document.createElement("div");
	slider.setAttribute("style","position:absolute;z-index:5;top:0px;bottom:0px;left:0px;right:0px;");
	
	//--------------------------------------------------
	//境界移動
	//--------------------------------------------------
	
	//境界位置(0.0～1.0)(画面サイズ変更後に復元するために、widthに対する割合を変数に記録)
	let pos = 0;
	
	const shift = function(x){
		if(x < 0) x = 0;
		if(x > width) x = width;
		
		//IEはclipPath未対応
//		imgL.style.clipPath = "inset(0px " + (width - x) + "px 0px 0px)";
		trimmedImgL.style.width = x + "px";
		
		//境界線を表示させる位置
		bar.style.left = x - barWidth / 2 + "px";
		
		//キャプションの位置
		if(capR.getBoundingClientRect().width + x + barWidth / 2 > width){
			capR.style.left = width - capR.getBoundingClientRect().width + "px";
			capR.style.zIndex = 2;
			capL.style.zIndex = 4;
		}else{
			capR.style.left = x + barWidth / 2 + "px";
		}

		if(x - barWidth / 2 - capL.getBoundingClientRect().width < 0){
			capL.style.right = width - capL.getBoundingClientRect().width + "px";
			capL.style.zIndex = 2;
			capR.style.zIndex = 4;
		}else{
			capL.style.right = width - (x - barWidth / 2) + "px";
		}
		
		pos = x / width;
	};

	//--------------------------------------------------
	//マウス操作(PC用)
	//--------------------------------------------------
	
	const mouseMove = function(e){
		shift(e.pageX - div.getBoundingClientRect().left);
		e.preventDefault();
	};
	
	slider.addEventListener("mousedown", e => {
		slider.style.cursor = "w-resize";
		window.addEventListener("mousemove",mouseMove);
		mouseMove(e);
	});
	
	window.addEventListener("mouseup", e => {
		slider.style.cursor = "default";
		window.removeEventListener("mousemove",mouseMove);
	});

	//--------------------------------------------------
	//タッチ操作(スマートフォン用)
	//--------------------------------------------------
	
	const touchMoveStart = function(e){
		
		//2点タッチ以上で停止
		if(e.touches.length == 1){
			shift(e.touches[0].pageX - div.getBoundingClientRect().left);
			e.preventDefault();

			slider.addEventListener("touchmove",touchMove,{passive: false});
		}else{
			slider.removeEventListener("touchmove",touchMove,{passive: false});
			slider.removeEventListener("touchstart",touchMoveStart,{passive: false});
		}
	};

	const touchMove = function(e){
		shift(e.touches[0].pageX - div.getBoundingClientRect().left);
		e.preventDefault();
	};

	slider.addEventListener("touchstart",touchMoveStart,{passive: false});

	slider.addEventListener("touchend", e => {
		if(e.touches.length == 1) slider.addEventListener("touchstart",touchMoveStart,{passive: false});
	});
	
	//--------------------------------------------------
	//初期化
	//--------------------------------------------------
	
	const div = document.getElementById(elementId);
	//html側で指定したstyleを残すために「setAttribute("style",～)」は使わない
	div.style.position = "relative";
	div.appendChild(imgR);
	
	const init = function(p){
		width = imgR.width;
		imgL.style.width = width + "px";
		
		barWidth = width * 0.01;
		bar.style.width = barWidth + "px";
		
		div.appendChild(trimmedImgL);
		div.appendChild(bar);
		div.appendChild(capR);
		div.appendChild(capL);
		div.appendChild(slider);
		
		shift(width * p);
	};
	
	window.addEventListener("load", e => {
		init(0.5);
	});

	window.addEventListener("resize", e => {
		init(pos);
	});
	
	//--------------------------------------------------
	//画像差し替え機能
	//--------------------------------------------------
	
	this.setImage = function(newImageUrlL,newImageUrlR,newCaptionL,newCaptionR){
		imgL.setAttribute("src",newImageUrlL);
		imgR.setAttribute("src",newImageUrlR);
		capL.innerHTML = newCaptionL;
		capR.innerHTML = newCaptionR;
	};
};