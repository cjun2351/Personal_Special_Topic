AOS.init(); //啟動 AOS

$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 100, // 外距 100px
  nav: true,
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
  let name = document.querySelector("#name"); //取得表單內 name 的格位
  let phone = document.querySelector("#phone"); //取得表單內 phone 的格位
  let email = document.querySelector("#email"); //取得表單內 email 的格位
  let textAreaContent = document.querySelector("#content"); //取得表單內 content 的格位
  if (!name.value) {
    // 如果 name 中沒填寫資料
    showWarning("請輸入姓名");
    return false; // 回傳 false
  }
  if (!phone.value) {
    // 如果 phone 中沒填寫資料
    showWarning("請輸入聯絡電話");
    return false; // 回傳 false
  }
  if (!email.value) {
    // 如果 email 中沒填寫資料
    showWarning("請輸入電子郵件");
    return false; // 回傳 false
  }
  if (!textAreaContent.value) {
    // 如果 content 中沒填寫資料
    showWarning("請輸入內容");
    return false; // 回傳 false
  }
  showThanks(); //無錯誤則彈出感謝視窗
}

document.querySelector("#submitBtn").addEventListener("click", checkForm); //送出表單前檢查
document.querySelector(".mask").addEventListener("click", hidePopUp); //點擊遮罩會關閉彈窗

function showPopUp() {
  // 建立秀出彈窗的函數
  document.querySelector(".pop-up").style.display = "block"; //秀出彈窗
  document.querySelector(".mask").style.display = "block"; //秀出遮罩
}
function hidePopUp() {
  // 建立關播彈窗的函數
  document.querySelector(".pop-up").style.display = "none"; //關閉彈窗
  document.querySelector(".mask").style.display = "none"; //關閉遮罩
}
function showWarning(message) {
  //建立秀出警告的函數
  let popUp = document.querySelector(".pop-up"); //取得 popUp
  popUp.innerHTML = `<div class="warning">
      <p>${message}</p>
  </div>
  <button class="confirm">確認</button>`; // 修改警告內文
  showPopUp(); // 秀出彈窗
  document.querySelector(".confirm").addEventListener("click", hidePopUp); //點擊確認關閉彈窗
}

function showThanks() {
  let popUp = document.querySelector(".pop-up"); //取得 popUp
  popUp.innerHTML = `<div class="thanks-area">
  <p>感謝你的填寫，確定要送出嗎?</p>
</div>
<div class="confirm-btns">
  <button class="cancel">取消</button>
  <button class="confirm">確認</button>
</div>`; // 修改感謝並確認內容
  showPopUp(); // 秀出彈窗
  document.querySelector(".cancel").addEventListener("click", hidePopUp); // 取消關閉視窗
  document.querySelector(".confirm").addEventListener("click", () => {
    // 新增確認按鈕事件
    document.querySelector("#contact-form").submit(); // 送出表單
  });
}
