#!/usr/bin/node

exports.esrever = function (list) {
  const newArr = [];
  let i = 0;
  let len = list.length - 1;
  while (len >= 0) {
    newArr[i] = list[len];
    len--;
    i++;
  }
  return newArr;
};
