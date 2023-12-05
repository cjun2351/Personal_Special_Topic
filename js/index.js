AOS.init(); //啟動 AOS

$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 100, // 外距 100px
  nav: false,
  autoplay: true, //自動撥放
  autoplayTimeout: 2000,
  autoplayHoverPause: true, //hover 時停止自動撥放
  autowidth: true,
  responsive: {
    0: {
      nav: false,
      items: 1, // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      nav: false,
      items: 2, // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1000: {
      nav: false,
      items: 3,
    },
  },
});

window.addEventListener("scroll", () => {
  //新增滾動事件
  const verticalScrollPx = window.scrollY;
  //建立 Y 軸滾動常數
  const header = document.querySelector("header");
  //選取 header
  if (window.innerWidth > 768) {
    //如果螢幕寬度大於 768 px
    if (verticalScrollPx < 800) {
      //如果 Y 軸滾動小於 700
      header.style.backgroundColor = "transparent";
      //header 背景透明
    } else if (verticalScrollPx >= 800) {
      // 若超過或等於 700
      header.style.backgroundColor = "#292f47";
      //header 背景為深藍色
    }
  }
});
