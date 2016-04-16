'use strict';

var assign = require('object-assign');


function Service() {
};

Service.prototype.request = (req) => {

        return new Promise(function (resolve, reject) {

            var method = req.method || 'GET';

            var xhr = new XMLHttpRequest();

            xhr.open(method, req.url);
            xhr.onLoad = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                }
                else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    })
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            };
            if (req.headers) {
                Object.keys(req.headers).forEach(function (key) {
                    xhr.setRequestHeader(key, req.headers[key]);
                });
            }
            else{
                xhr.setRequestHeader("Content-type", "application/json");
            }
            var params = JSON.stringify(req.data);
            if (params && typeof params === 'object') {
                params = Object.keys(params).map(function (key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
                }).join('&');
            }
            xhr.send(params);
        })
};

module.exports = Service;