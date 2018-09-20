/*
  Utilidades comunes para todas las practicas
 */

const _ = require("underscore");
const Utils = {};

const REG_URL = /(\b(http|ftp|https|ftps):\/\/[-A-ZáéíóúÁÉÍÓÚ0-9+&@#\/%?=~_|!:,.;]*[-A-ZáéíóúÁÉÍÓÚ0-9+&@#\/%=~_|])/ig;

Utils.getURL = (string) => {
  const urls = string.match(REG_URL);
  let url = null;
  if (urls instanceof Array) {
    url = urls[0];
  }
  return url;
};

Utils.existe = (cosa) => {
  return !_.isUndefined(cosa) && !_.isNull(cosa);
};

Utils.esString = (cosa) => {
  return _.isString(cosa);
};

Utils.esObjeto = (cosa) => {
  return _.isObject(cosa);
};

Utils.esNumero = (cosa) => {
  let numero = false;
  if (Utils.existe(cosa)) {
    numero = typeof parseInt(cosa) === "number";
  }
  return numero
};

Utils.esArray = (cosa) => {
  return _.isArray(cosa);
};

Utils.esURL = (cosa) => {
  if (Utils.esString(cosa)) {
    return REG_URL.test(cosa);
  }
};

Utils.esRegExp = (cosa) => {
  return (cosa instanceof RegExp);
};


Utils.busca = (b, a) => {
  if (Utils.esRegExp(b)) {
    if (Utils.esString(a) && a.length > 0) {
      return b.test(a);
    } else {
      return false;
    }
  } else {
    if (Utils.esString(a)) {
      return (a.toLowerCase().indexOf(b.toLowerCase()) > -1);
    } else {
      if (Utils.esArray(a)) {
        let result = false;
        for (let item in a) {
          if (Utils.busca(b, a[item])) {
            result = true;
          }
        }
        return result;
      }
    }
  }
};

module.exports = Utils;