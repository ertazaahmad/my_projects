let clock = document.querySelector(".clock");
let hour = document.querySelector(".hour");
let colon = document.querySelector(".colon");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let apmEl = document.querySelector(".apm");

function updateClock() {
  const now = new Date();

  let h24 = now.getHours();   // 0–23 (REAL time)
  let m = now.getMinutes();
  let s = now.getSeconds();

  // ✅ Decide AM / PM FIRST
  let ampm = h24 >= 12 ? "PM" : "AM";

  // ✅ THEN convert to 12-hour format
  let h12 = h24 % 12 || 12;

  hour.textContent = String(h12).padStart(2, "0");
  minute.textContent = String(m).padStart(2, "0");
  second.textContent = String(s).padStart(2, "0");
  apmEl.textContent = ampm;
  colon.style.visibility = s % 2 === 0 ? "visible" : "hidden";
}

setInterval(updateClock, 1000);
updateClock();

  