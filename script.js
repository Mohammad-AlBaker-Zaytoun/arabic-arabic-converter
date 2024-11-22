agent();

function agent() {
  let isUnlockingCached = false;
  const isUnlocking = () => isUnlockingCached;
  document.addEventListener("allow_copy", (event) => {
    const { unlock } = event.detail;
    isUnlockingCached = unlock;
  });

  const copyEvents = [
    "copy",
    "cut",
    "contextmenu",
    "selectstart",
    "mousedown",
    "mouseup",
    "mousemove",
    "keydown",
    "keypress",
    "keyup",
  ];
  const rejectOtherHandlers = (e) => {
    if (isUnlocking()) {
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    }
  };
  copyEvents.forEach((evt) => {
    document.documentElement.addEventListener(evt, rejectOtherHandlers, {
      capture: true,
    });
  });
}

var defLang = "en";
var defNumbs = defLang;
var e_harakat = 1;
var dir = "rtl";
var numbers = {
  ar: "٠١٢٣٤٥٦٧٨٩",
  fa: "۰۱۲۳۴۵۶۷۸۹",
  en: "0123456789",
};
var outputNumbers = numbers[defLang];

var y = "";
var g;
var old = "";
var tstr = "";
var csr1 = (csr2 = 0);
var laaIndex = 8 * 50;

var left = "یٹہےگکڤچپـئظشسيبلتنمكطضصثقفغعهخحج";
var right = "یٹہےڈڑگکڤژچپـئؤرلالآىآةوزظشسيبللأاأتنمكطضصثقفغعهخحجدذلإإۇۆۈ";

var harakat = "ًٌٍَُِّْ";
var symbols = "ـ.،؟ @#$%^&*-+|/=~,:";
var unicode =
  "ﺁ ﺁ ﺂ ﺂ " +
  "ﺃ ﺃ ﺄ ﺄ " +
  "ﺇ ﺇ ﺈ ﺈ " +
  "ﺍ ﺍ ﺎ ﺎ " +
  "ﺏ ﺑ ﺒ ﺐ " +
  "ﺕ ﺗ ﺘ ﺖ " +
  "ﺙ ﺛ ﺜ ﺚ " +
  "ﺝ ﺟ ﺠ ﺞ " +
  "ﺡ ﺣ ﺤ ﺢ " +
  "ﺥ ﺧ ﺨ ﺦ " +
  "ﺩ ﺩ ﺪ ﺪ " +
  "ﺫ ﺫ ﺬ ﺬ " +
  "ﺭ ﺭ ﺮ ﺮ " +
  "ﺯ ﺯ ﺰ ﺰ " +
  "ﺱ ﺳ ﺴ ﺲ " +
  "ﺵ ﺷ ﺸ ﺶ " +
  "ﺹ ﺻ ﺼ ﺺ " +
  "ﺽ ﺿ ﻀ ﺾ " +
  "ﻁ ﻃ ﻄ ﻂ " +
  "ﻅ ﻇ ﻈ ﻆ " +
  "ﻉ ﻋ ﻌ ﻊ " +
  "ﻍ ﻏ ﻐ ﻎ " +
  "ﻑ ﻓ ﻔ ﻒ " +
  "ﻕ ﻗ ﻘ ﻖ " +
  "ﻙ ﻛ ﻜ ﻚ " +
  "ﻝ ﻟ ﻠ ﻞ " +
  "ﻡ ﻣ ﻤ ﻢ " +
  "ﻥ ﻧ ﻨ ﻦ " +
  "ﻩ ﻫ ﻬ ﻪ " +
  "ﻭ ﻭ ﻮ ﻮ " +
  "ﻱ ﻳ ﻴ ﻲ " +
  "ﺓ ﺓ ﺔ ﺔ " +
  "ﺅ ﺅ ﺆ ﺆ " +
  "ﺉ ﺋ ﺌ ﺊ " +
  "ﻯ ﻯ ﻰ ﻰ " +
  "ﭖ ﭘ ﭙ ﭗ " +
  "ﭺ ﭼ ﭽ ﭻ " +
  "ﮊ ﮊ ﮋ ﮋ " +
  "ﭪ ﭬ ﭭ ﭫ " +
  "ﮒ ﮔ ﮕ ﮓ " +
  "ﭦ ﭨ ﭩ ﭧ " +
  "ﮦ ﮨ ﮩ ﮧ " +
  "ﮮ ﮰ ﮱ ﮯ " +
  "ﯼ ﯾ ﯿ ﯽ " +
  "ﮈ ﮈ ﮉ ﮉ " +
  "ﮌ ﮌ ﮍ ﮍ " +
  "ﯗ ﯗ ﯘ ﯘ " +
  "ﯙ ﯙ ﯚ ﯚ " +
  "ﯛ ﯛ ﯜ ﯜ " +
  "ﮎ ﮐ ﮑ ﮏ " +
  "ﻵ ﻵ ﻶ ﻶ " +
  "ﻷ ﻷ ﻸ ﻸ " +
  "ﻹ ﻹ ﻺ ﻺ " +
  "ﻻ ﻻ ﻼ ﻼ ";

var arabic =
  "آ" +
  "أ" +
  "إ" +
  "ا" +
  "ب" +
  "ت" +
  "ث" +
  "ج" +
  "ح" +
  "خ" +
  "د" +
  "ذ" +
  "ر" +
  "ز" +
  "س" +
  "ش" +
  "ص" +
  "ض" +
  "ط" +
  "ظ" +
  "ع" +
  "غ" +
  "ف" +
  "ق" +
  "ك" +
  "ل" +
  "م" +
  "ن" +
  "ه" +
  "و" +
  "ي" +
  "ة" +
  "ؤ" +
  "ئ" +
  "ى" +
  "پ" +
  "چ" +
  "ژ" +
  "ڤ" +
  "گ" +
  "ٹ" +
  "ہ" +
  "ے" +
  "ی" +
  "ڈ" +
  "ڑ" +
  "ۇ" +
  "ۆ" +
  "ۈ" +
  "ک";
var notEng = arabic + harakat + "ء،؟";
var brackets = "(){}[]";
var msie = (opera = 0);
var agent = navigator.userAgent;
if (agent.indexOf("MSIE") >= 0) msie = 1;
if (agent.indexOf("Opera") >= 0) opera = 1;
function ProcessInput() {
  frm = document.getElementById("writer");
  frm.outbox.value = "";
  old = "";
  tstr = "";
  y = frm.inpbox.value;
  x = y.split("");
  len = x.length;

  for (g = 0; g < len; g++) {
    b = a = 1;
    while (harakat.indexOf(x[g - b]) >= 0) b = b + 1;
    while (harakat.indexOf(x[g + a]) >= 0) a = a + 1;
    if (g == 0) {
      if (right.indexOf(x[a]) >= 0) pos = 2;
      else pos = 0;
    } else if (g == len - 1) {
      if (left.indexOf(x[len - b - 1]) >= 0) pos = 6;
      else pos = 0;
    } else {
      if (left.indexOf(x[g - b]) < 0) {
        if (right.indexOf(x[g + a]) < 0) pos = 0;
        else pos = 2;
      } else if (left.indexOf(x[g - b]) >= 0) {
        if (right.indexOf(x[g + a]) >= 0) pos = 4;
        else pos = 6;
      }
    }

    if (x[g] == "\n") {
      frm = document.getElementById("writer");
      old = old + frm.outbox.value + "\n";
      frm.outbox.value = "";
    } else if (x[g] == "\r") {
    } else if (x[g] == "ء") {
      addChar("ﺀ");
    } else if (brackets.indexOf(x[g]) >= 0) {
      asd = brackets.indexOf(x[g]);
      if (asd % 2 == 0) {
        addChar(brackets.charAt(asd + 1));
      } else {
        addChar(brackets.charAt(asd - 1));
      }
    } else if (arabic.indexOf(x[g]) >= 0) {
      if (x[g] == "ل") {
        ar_pos = arabic.indexOf(x[g + 1]);
        if (ar_pos >= 0 && ar_pos < 4) {
          addChar(unicode.charAt(ar_pos * 8 + pos + laaIndex));
          g = g + 1;
        } else {
          addChar(unicode.charAt(arabic.indexOf(x[g]) * 8 + pos));
        }
      } else {
        addChar(unicode.charAt(arabic.indexOf(x[g]) * 8 + pos));
      }
    } else if (symbols.indexOf(x[g]) >= 0) {
      addChar(x[g]);
    } else if (harakat.indexOf(x[g]) >= 0) {
      if (e_harakat == 1) {
        addChar(x[g]);
      }
    } else if (unicode.indexOf(x[g]) >= 0) {
      uni_pos = unicode.indexOf(x[g]);
      la_pos = unicode.indexOf(x[g]);
      if (la_pos >= laaIndex) {
        for (temp = 8; temp < 40; temp += 8) {
          if (la_pos < temp + laaIndex) {
            addChar(arabic.charAt(temp / 8 - 1));
            addChar("ل");
            temp = 60;
          }
        }
      } else {
        for (temp = 8; temp < laaIndex + 32; temp += 8) {
          if (uni_pos < temp) {
            addChar(arabic.charAt(temp / 8 - 1));
            temp = 1000;
          }
        }
      }
    } else {
      h = g;
      frm = document.getElementById("writer");
      while (
        notEng.indexOf(x[h]) < 0 &&
        unicode.indexOf(x[h]) < 0 &&
        brackets.indexOf(x[h]) < 0 &&
        x[h] != undefined
      ) {
        for (var key in numbers) {
          if (numbers.hasOwnProperty(key)) {
            mynumb = numbers[key].indexOf(x[h]);
            if (mynumb >= 0) {
              x[h] = numbers[defNumbs].charAt(mynumb);
            }
          }
        }
        tstr = tstr + x[h];
        h = h + 1;
        if (msie == 1 || opera == 1) {
          temp = h + 1;
        } else {
          temp = h;
        }
        if (x[temp] == "\n") {
          break;
        }
      }
      xstr = tstr.split("");
      r = xstr.length - 1;
      if (r == 1 && xstr[1] == " ") {
        tstr = " " + xstr[0];
      } else {
        while (xstr[r] == " ") {
          tstr = " " + tstr.substring(0, tstr.length - 1);
          r = r - 1;
        }
      }
      frm.outbox.value = tstr + frm.outbox.value;
      tstr = "";
      g = h - 1;
    }
  }
  frm.outbox.value = old + frm.outbox.value;
}

function addChar(chr) {
  frm = document.getElementById("writer");
  frm.outbox.value = chr + frm.outbox.value;
}

function addKB(chr) {
  frm = document.getElementById("writer");
  mainlength = frm.inpbox.value.length;
  if (chr == "لا" || chr == "لإ" || chr == "لأ" || chr == "لآ") csr2 = csr2 + 1;
  frm.inpbox.value =
    frm.inpbox.value.substring(0, csr1) +
    chr +
    frm.inpbox.value.substring(csr2, mainlength);
  csr1 = csr1 + chr.length;
  csr2 = csr1;
}

function remKB() {
  frm = document.getElementById("writer");
  mainlength = frm.inpbox.value.length;
  frm.inpbox.value =
    frm.inpbox.value.substring(0, csr1 - 1) +
    frm.inpbox.value.substring(csr2, mainlength);
  if (csr1 > 0) {
    csr1 = csr1 - 1;
  }
  csr2 = csr1;
}

function update(o) {
  csr1 = getSelectionStart(o);
  csr2 = getSelectionEnd(o);
  //document.getElementById('cursorPos').firstChild.nodeValue = csr1
  return true;
}

function getSelectionStart(o) {
  if (o.createTextRange) {
    var r = document.selection.createRange().duplicate();
    r.moveEnd("character", o.value.length);
    if (r.text == "") return o.value.length;
    return o.value.lastIndexOf(r.text);
  } else {
    return o.selectionStart;
  }
}

function getSelectionEnd(o) {
  if (o.createTextRange) {
    var r = document.selection.createRange().duplicate();
    r.moveStart("character", -o.value.length);
    return r.text.length;
  } else {
    return o.selectionEnd;
  }
}

function selectit() {
  output = document.getElementById("outbox");
  output.focus();
  output.select();
}

function setNumbers(lang) {
  defNumbs = lang;
  outputNumbers = numbers[lang];
  setValue("xnumbers", numbs);
  hide("numbers");
}

function switch_harakat() {
  if (e_harakat == 1) {
    e_harakat = 0;
    setValue("xharakat", hars0);
  } else {
    e_harakat = 1;
    setValue("xharakat", hars1);
  }
}

function switch_dir() {
  if (dir == "rtl") {
    dir = "ltr";
    setValue("xdir", dir0);
  } else {
    dir = "rtl";
    setValue("xdir", dir1);
  }
  setDir("inpbox", dir);
  setDir("outbox", dir);
}

function copyclip(data) {
  window.clipboardData.setData("text", data);
}

function show(item) {
  document.getElementById(item).style.display = "block";
}

function hide(item) {
  document.getElementById(item).style.display = "none";
}

function setDir(item, value) {
  document.getElementById(item).dir = value;
}

function setValue(item, value) {
  document.getElementById(item).value = value;
}

function setHTML(item, value) {
  document.getElementById(item).innerHTML = value;
}

function setLang(langid) {
  defLang = langid;
  hide("arAbout");
  hide("enAbout");
  if (langid == "ar") {
    numbs = "الارقام";
    hars0 = "الحركات غير مفعلة";
    hars1 = "الحركات مفعلة";
    dir0 = "اتجاه النص: من اليسار الى اليمين";
    dir1 = "اتجاه النص: من اليمين الى اليسار";
    setHTML("box1info", "النص الاصلي");
    setHTML("box2info", "النص الناتج");
    setValue("aboutpop", "عن الأداة");
    setValue("languagepop", " اللغة ");
    setValue("keyboardpop", "لوحة المفاتيح العربية");
    setValue("kspace", "مسافة");
    setValue("ktab", "فاصلة");
    setValue("kbspace", "تراجع");
    setValue("deletetxt", "حذف النص");
    setValue("selecttxt", "تظليل النص المعالج");
    setValue("processtxt", "معالجة النص");
    show("arAbout");
  } else if (langid == "en") {
    numbs = "Numbers";
    hars0 = "Arabic Harakat Disabled";
    hars1 = "Arabic Harakat Enabled";
    dir0 = "Direction: Left To Right";
    dir1 = "Direction: Right To Left";
    setHTML("box1info", "Input");
    setHTML("box2info", "Output");
    setValue("aboutpop", "About");
    setValue("languagepop", "Language");
    setValue("keyboardpop", "Arabic Keyboard");
    setValue("kspace", "Space");
    setValue("ktab", "Tab");
    setValue("kbspace", "BackSpace");
    setValue("deletetxt", "Clear Fields");
    setValue("selecttxt", "Select Output");
    setValue("processtxt", "Process Input");
    show("enAbout");
  }
  setNumbers(langid);
  switch_harakat();
  switch_harakat();
  switch_dir();
  switch_dir();
  hide("lang");
}
