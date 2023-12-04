$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 20, // 外距 20px
  nav: false,
  autoplay: true, //自動撥放
  autoplayTimeout: 2000,
  autoplayHoverPause: true, //hover 時停止自動撥放
  autowidth: true,
  responsive: {
    0: {
      items: 1, // 螢幕大小為 0~600 顯示 1 個項目
      nav: false,
    },
    600: {
      items: 2, // 螢幕大小為 600~1000 顯示 3 個項目
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
