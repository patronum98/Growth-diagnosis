"use strict";
const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  // psword = document.querySelector("#psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", mypage);

function mypage() {
    alert("click")

  const req = {
    id: id.value,
    name: name.value,
    // psword: psword.value,
  };
  
    fetch("/mypage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          location.href = "/";
        } else {
          alert(res.msg);
        }
      })
      .catch((err) => {
        console.error("UPDATE 중 에러 발생");
      });
  }
