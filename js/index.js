AOS.init(); //啟動 AOS

$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 100, // 外距 100px
  nav: false,
  autoplay: true, //自動撥放
  autoplayTimeout: 2000,
  autoplayHoverPause: true, //hover 時停止自動撥放
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
    if (verticalScrollPx < 650) {
      //如果 Y 軸滾動小於 650
      header.style.backgroundColor = "transparent";
      //header 背景透明
    } else if (verticalScrollPx >= 650) {
      // 若超過或等於 650
      header.style.backgroundColor = "#292f47";
      //header 背景為深藍色
    }
  }
});

function checkForm(e) {
  let name = document.querySelector("#name");
  let phone = document.querySelector("#phone");
  let email = document.querySelector("#email");
  let textAreaContent = document.querySelector("#content");
  let popUp = document.querySelector(".pop-up");

  if (!name.value) {
    e.preventDefault();
    popUp.innerHTML = `<div class="warning">
        <p>請輸入姓名</p>
    </div>
    <button class="confirm">確認</button>`;
    showPopUp();
    document.querySelector(".confirm").addEventListener("click", hidePopUp);
    return false;
  }
  if (!phone.value) {
    e.preventDefault();
    popUp.innerHTML = `<div class="warning">
        <p>請輸入聯絡電話</p>
    </div>
    <button class="confirm">確認</button>`;
    showPopUp();
    document.querySelector(".confirm").addEventListener("click", hidePopUp);
    return false;
  }
  if (!email.value) {
    e.preventDefault();
    popUp.innerHTML = `<div class="warning">
        <p>請輸入電子信箱</p>
    </div>
    <button class="confirm">確認</button>`;
    showPopUp();
    document.querySelector(".confirm").addEventListener("click", hidePopUp);
    return false;
  }
  if (!textAreaContent.value) {
    e.preventDefault();
    popUp.innerHTML = `<div class="warning">
        <p>請輸入內容</p>
    </div>
    <button class="confirm">確認</button>`;
    showPopUp();
    document.querySelector(".confirm").addEventListener("click", hidePopUp);
    return false;
  }
  alert("感謝您的填寫");
}

document.querySelector("form").addEventListener("submit", checkForm);
document.querySelector(".mask").addEventListener("click", hidePopUp);
function showPopUp() {
  document.querySelector(".pop-up").style.display = "block";
  document.querySelector(".mask").style.display = "block";
}
function hidePopUp() {
  document.querySelector(".pop-up").style.display = "none";
  document.querySelector(".mask").style.display = "none";
}
