//Owl carousel 設定
$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 20, // 外距 20px
  nav: true,
  dots: true,
  autoplay: true, //自動撥放
  autoplayTimeout: 3000,
  smartSpeed: 800,
  autoplayHoverPause: true, //hover 時停止自動撥放
  autowidth: true,
  responsive: {
    0: {
      items: 1, // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      items: 2, // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1000: {
      items: 3,
    },
  },
});
