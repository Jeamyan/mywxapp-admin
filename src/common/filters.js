'use strict';

/**
 * 整个项目的过滤器
 * @param time
 * @returns {*}
 */

/**
 * 获取距离当前时间的时间间隔
 * @param time
 * @returns {*}
 */
export const timeToNow = (time) => {
  const t = parseFloat(new Date - new Date(time)) / 1000;
  let str;
  if (t) {
    if (t > 60 && t < 3600) {
      str = `${parseInt(t / 60.0, 10)}分钟前`;
    } else if (t >= 3600 && t < 86400) {
      str = `${parseInt(t / 3600.0, 10)}小时前`;
    } else if (t >= 86400 && t < 86400 * 30) {
      str = `${parseInt(t / 86400.0, 10)}天前`;
    } else if (t >= 86400 * 30 && t < 86400 * 365) {
      str = `${parseInt(t / (86400.0 * 30), 10)}个月前`;
    } else if (t >= 86400 * 365) {
      str = `${parseInt(t / (86400.0 * 365), 10)}年前`;
    } else {
      str = `${parseInt(t, 10)}秒前`;
    }
  }
  return str;
};

/**
 * 日期格式化
 * @param date       //日期,时间戳
 * @param fmt        //格式规则 'yyyy-M-d'  'yyyy-MM-dd'  'yyyy-MM-dd hh:mm:ss' 'dd/MM/yyyy''
 * @returns {String}
 */
export const getTime = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  date = new Date(date);
  let o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S': date.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }

  return fmt;
};

/**
 * 移除空字符和引号
 * @param String
 * @returns {String}
 */
export const removeNbsp = (text) => {
  let str;
  str = text.replace(/&nbsp;/g, '').replace(/&quot;/g, '');
  return str;
};

/**
 * 获取任意天之后的日期
 * @param dayCount    //类型Number,天数
 * @returns {date}
 */
export const arbiDaysLaterDate = (dayCount) => {
  let day = new Date();
  day.setDate(day.getDate() + dayCount);//获取dayCount天后的日期
  return getTime(day);
};

