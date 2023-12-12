//啟動 AOS
// AOS.init();
//Owl carousel 設定
$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 100, // 外距 100px
  nav: false,
  dots: true,
  autoplay: true, //自動撥放
  autoplayTimeout: 3000,
  smartSpeed: 800,
  autoplayHoverPause: true, //hover 時停止自動撥放
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
//header 背景顏色設定
window.addEventListener("scroll", () => {
  //新增滾動事件
  const verticalScrollPx = window.scrollY;
  //建立 Y 軸滾動常數
  const header = document.querySelector("header");
  if (window.innerWidth > 768) {
    //如果螢幕寬度大於 768 px
    if (verticalScrollPx < 650) {
      //如果 Y 軸滾動小於 650
      header.style.backgroundColor = "transparent";
    } else if (verticalScrollPx >= 650) {
      // 若超過或等於 650
      header.style.backgroundColor = "#292f47";
    }
  }
});
//表單檢查
function checkForm() {
  let name = document.querySelector("#name");
  let phone = document.querySelector("#phone");
  let email = document.querySelector("#email");
  let textAreaContent = document.querySelector("#content");
  if (!name.value) {
    showWarning("請輸入姓名");
    return false;
  }
  if (!phone.value) {
    showWarning("請輸入聯絡電話");
    return false;
  }
  if (!email.value) {
    showWarning("請輸入電子郵件");
    return false;
  }
  if (!textAreaContent.value) {
    showWarning("請輸入內容");
    return false;
  }
  showThanks(); //無錯誤則彈出感謝視窗
}
document.querySelector("#submitBtn").addEventListener("click", checkForm); //送出表單前檢查
//彈窗點擊事件
document.querySelector(".mask").addEventListener("click", hidePopUp);
function showPopUp() {
  document.querySelector(".pop-up").style.display = "block";
  document.querySelector(".mask").style.display = "block";
}
function hidePopUp() {
  document.querySelector(".pop-up").style.display = "none";
  document.querySelector(".mask").style.display = "none";
}
//彈窗顯示內容
function showWarning(message) {
  let popUp = document.querySelector(".pop-up");
  popUp.innerHTML = `<div class="warning">
      <p>${message}</p>
  </div>
  <button class="confirm">確認</button>`; // 修改警告內文
  showPopUp();
  document.querySelector(".confirm").addEventListener("click", hidePopUp);
}

function showThanks() {
  let popUp = document.querySelector(".pop-up");
  popUp.innerHTML = `<div class="thanks-area">
  <p>感謝你的填寫，確定要送出嗎?</p>
</div>
<div class="confirm-btns">
  <button class="cancel">取消</button>
  <button class="confirm">確認</button>
</div>`; // 修改感謝並確認內容
  showPopUp();
  document.querySelector(".cancel").addEventListener("click", hidePopUp);
  document.querySelector(".confirm").addEventListener("click", () => {
    document.querySelector("#contact-form").submit(); // 送出表單
  });
}
