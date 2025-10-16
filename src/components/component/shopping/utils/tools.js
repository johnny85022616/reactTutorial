const Url = {
  // public method for url encoding
  encode: function (string) {
    return escape(this._utf8_encode(string));
  },
  // public method for url decoding
  decode: function (string) {
    return this._utf8_decode(unescape(string));
  },
  // private method for UTF-8 encoding
  _utf8_encode: function (string) {
    string = string.replace(/\r\n/g, '\n');
    var utftext = '';
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  },
  // private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    var string = '';
    var i = 0,
      c2,
      c3;
    var c = (c2 = 0);
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  },
};

export default  {
  getCookie(name) {
    var mycookie = document.cookie.split('; ');
    for (var i = 0; i < mycookie.length; i++) {
      var cookie1 = mycookie[i].split('=');
      if (cookie1[0] === name) {
        return Url.decode(cookie1[1]);
      }
    }
    return null;
  },
  setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  },
  //姓名防呆
  checkName(name) {
    let nameAlert = '';
    var otherChar = name.replace(/[A-Za-z-\s*\u4e00-\u9fa5]/g, ''); //取代非特殊字元正則
    var tabChar = name.search(/\t/); //存在tab正則
    var onlyChinese = name.replace(/[A-Za-z-\s*]/g, ''); //英文取代正則

    //是否為空值
    if (null == name || name.trim().length <= 0) {
      nameAlert += '本欄位不可為空';
    }
    //不可存在-特殊字元
    else if (otherChar != '') {
      nameAlert += '不可輸入數字或特殊字元';
    }
    //不可存在-TAB鍵(\t)
    else if (tabChar != -1) {
      nameAlert += '不可輸入特殊字元';
    }
    //當英文被取代掉時候 應只剩下中文
    else if (onlyChinese.length < 2 && onlyChinese.length != 0) {
      nameAlert += '不可中英夾雜';
    }
    //不可輸入超過20個字
    else if (name.length > 20) {
      nameAlert += '不可輸入超過20個字';
    }
    return nameAlert;
  },

  //手機防呆
  checkMoblie(phone) {
    let phoneAlert = '';
    var re = /^09/; //09開頭正則

    if (phone.length != 0) {
      if (/[^0-9x*]/g.test(phone)) {
        phoneAlert += '不可包含其他字元';
      } else if (null == phone || phone.length < 10) {
        phoneAlert += '字數不足';
      } else if (phone.match(re) == null) {
        phoneAlert += '必須為09開頭';
      }
    } else {
      phoneAlert += '請填寫手機號碼';
    }
    return phoneAlert;
  },
  //email防呆
  checkEmail(val) {
    let msg = '';
    if (val !== '') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      msg = regex.test(val) ? '' : '請輸入正確信箱格式';
    }
    return msg;
  },
  //地址防呆
  checkAddress(city, region, road) {
    let addressAlert = '';
    var addrFormat = new RegExp('[路街道號]'); //街道正則
    var otherChar = road.replace(/[\w-\s*x\u4e00-\u9fa5]/g, ''); //非特殊字元取代

    //縣市
    if (city === '') {
      addressAlert = '縣市錯誤,本欄位不可為空';
    }
    //區域
    else if (region === '') {
      addressAlert = '區域錯誤,本欄位不可為空';
    }
    //街道
    else if (null == road || road.trim().length <= 0) {
      addressAlert += '地址錯誤,請輸入地址';
    } else if (addrFormat.test(road) == false) {
      addressAlert += '地址錯誤,須包含路、街、道、號其中一個字元';
    } else if (otherChar != '') {
      addressAlert += '地址錯誤,不可輸入特殊字元';
    }
    return addressAlert;
  },
}