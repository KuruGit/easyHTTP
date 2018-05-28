/***********************************
 * EasyHTTP Library
 * Library for HTTP requests
 * 
 * @author: David Breier
 * @version: 2.0.0
 * @license: MIT
 * 
 ***********************************/

class EasyHTTP {
    //Make http get request
    get(url) {
        return new Promise((resolve, reject)=> {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject (err));
        });
        
    }
}