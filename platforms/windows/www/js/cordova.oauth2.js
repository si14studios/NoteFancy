/*
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
* cordova.oauth2.js - v0.1.1
*
* jQuery plugin to do Oauth2 login using either authorization code
* grant or implicit grant method in a Cordova application
*
* Usage:
*   $.oauth2(options, successCallback, errorCallback);
*
*   $.oauth2({
*        auth_url: '',         // required
*        response_type: '',    // required
*        token_url: '',        // required if response_type = 'code'
*        logout_url: '',       // recommended if available
*        client_id: '',        // required
*        client_secret: '',    // required if response_type = 'code'
*        redirect_uri: '',     // required - some dummy url
*        other_params: {}      // optional params object for scope, state, display...
*    }, function(token, response){
*          // do something with token and response
*    }, function(error){
*          // do something with error
*    });
*
*
*
*
*/

(function($){
=======
 * cordova.oauth2.js - v0.1.1
 * 
 * jQuery plugin to do Oauth2 login using either authorization code
 * grant or implicit grant method in a Cordova application
 * 
 * Usage:
 *   $.oauth2(options, successCallback, errorCallback);
 *
 *   $.oauth2({
 *        auth_url: '',         // required
 *        response_type: '',    // required
 *        token_url: '',        // required if response_type = 'code'
 *        logout_url: '',       // recommended if available
 *        client_id: '',        // required
 *        client_secret: '',    // required if response_type = 'code'
 *        redirect_uri: '',     // required - some dummy url
 *        other_params: {}      // optional params object for scope, state, display...
 *    }, function(token, response){
 *          // do something with token and response
 *    }, function(error){
 *          // do something with error
 *    });
 *
 *
 *
 *
*/

(function($){            
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
    $.oauth2 = function (options, successCallback, errorCallback) {
        
        // checks if all the required oauth2 params are defined
        var checkOauth2Params = function(options){
            var missing = "";
            if(!options.client_id) {missing += " client_id"}
            if(!options.auth_url) {missing += " auth_url"}
            if(!options.response_type) {missing += " response_type"}
            if(!options.client_secret && options.response_type == "code") {missing += " client_secret"}
            if(!options.token_url && options.response_type == "code") {missing += " token_url"}
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
            if(!options.redirect_uri) {missing += " redirect_uri"}
=======
            if(!options.redirect_uri) {missing += " redirect_uri"}  
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
            if(missing){
                var error_msg = "Oauth2 parameters missing:" + missing;
                errorCallback(error_msg, {error:error_msg});
                return false;
            } else {
                return true;
            }
        }
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04

=======
        
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
        // performs logout after oauth redirect
        var oauth2Logout = function(options){
            if(options.logout_url){
                var s = document.createElement("script");
                s.src = options.logout_url;
                $("head").append(s);
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
            }
        }

        // String prototype to parse and get url params
        String.prototype.getParam = function( str ){
            str = str.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regex = new RegExp( "[\\?&]*"+str+"=([^&#]*)" );
=======
            }     
        }
        
        // String prototype to parse and get url params
        String.prototype.getParam = function( str ){
            str = str.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regex = new RegExp( "[\\?&]*"+str+"=([^&#]*)" );	
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
            var results = regex.exec( this );
            if( results == null ){
                return "";
            } else {
                return results[1];
            }
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
        }

=======
        }        
        
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
        // if params missing return
        if(!checkOauth2Params(options)) return;

        // build oauth login url
        var paramObj = {
            client_id: options.client_id,
            redirect_uri: options.redirect_uri,
            response_type: options.response_type
        };
        $.extend(paramObj, options.other_params);
        var login_url = options.auth_url + '?' + $.param(paramObj);

<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
        // CUSTOM: changes option depending of in an app or browser
        if (options.inapp) {
            var opt = '_blank';
        } else {
            var opt = '_self';
        }
        // open Cordova inapp-browser with login url
        var loginWindow = window.open(login_url, opt, 'location=yes');

        // check if redirect url has code, access_token or error
        $(loginWindow).on('loadstart', function(e) {
            var url = e.originalEvent.url;

            // if authorization code method check for code/error in url param
            if(options.response_type == "code"){
                url = url.split("#")[0];
=======
        // open Cordova inapp-browser with login url
        var loginWindow = window.open(login_url, '_blank', 'location=yes');

        // check if redirect url has code, access_token or error 
        $(loginWindow).on('loadstart', function(e) {
            var url = e.originalEvent.url;
            
            // if authorization code method check for code/error in url param
            if(options.response_type == "code"){
                url = url.split("#")[0];   
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
                var code = url.getParam("code");
                var error = url.getParam("error");
                if (code || error){
                    loginWindow.close();
                    oauth2Logout(options);
                    if (code) {
                        $.ajax({
                            url: options.token_url,
                            data: {code:code, client_id:options.client_id, client_secret:options.client_secret, redirect_uri:options.redirect_uri, grant_type:"authorization_code"},
                            type: 'POST',
                            success: function(data){
                                var access_token;
                                if((data instanceof Object)){
                                    access_token = data.access_token;
                                } else {
                                    access_token = data.getParam("access_token");
                                }
                                successCallback(access_token, data);
                            },
                            error: function(error){
                                errorCallback(error, error);
                            }
                        });
                    } else if (error) {
                        errorCallback(error, url.split("?")[1]);
                    }
                }
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
                // if implicit method check for acces_token/error in url hash fragment
=======
            // if implicit method check for acces_token/error in url hash fragment
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
            } else if(options.response_type == "token") {
                var access_token = url.split("access_token=")[1];
                var error = url.split("error=")[1];
                if(access_token || error){
                    loginWindow.close();
                    oauth2Logout(options);
                    if(access_token){
                        successCallback(access_token, url.split("#")[1]);
                    } else if(error){
                        errorCallback(error, url.split("#")[1]);
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
                    }
                }
            }
        });
    };
}(jQuery));
=======
                    }                   
                }
            }
        });
    }; 
}(jQuery));
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
