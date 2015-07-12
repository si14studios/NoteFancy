/*
 * Copyright 2015 Si14Studios
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
// TODO: FORWARD TO HOME PAGE AFTER login
// TODO: VERIFY TOKENS
// TODO: CHECK BROWSER COMPATIBILITY FOR LOCAL STORAGE
// TODO: Find out why all of this inappbrowser crap is necessary when you could literally just link to the google page??????

var API_KEY = "AIzaSyBZY6mZ3bvW6cg-oSHnGpzF8pDB0RgrXcI";
var CLIENT_ID = "302886424414-okrk6c1pb8hg3ehuq62k0k1hp4qlsfai.apps.googleusercontent.com";
var scopes = "https://www.googleapis.com/auth/plus.login "
           + "https://www.googleapis.com/auth/plus.me";

window.onload = function() {
    // only if just logged in
    if (window.location.hash.indexOf('access_token') > -1) {
        window.localStorage.setItem('token', getUrlVars()['access_token']);
        window.location.href = 'http://localhost:8000';
    }
}

=======
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
// [{n_title: "", n_author: "", n_text_preview: ""}]
// will eventually be moved to its own JS file, as a JQuery plugin
 $.fn.preview_panel = function(args) {
      for (var i = 0; i < args.length; i++) {
          var curr = args[i];
          // The notes probably need a unique id to be identified
          $(this).append('<div class="note_preview">' +
          '<div class="n_title">' + curr.n_title + '</div>' +
          '<div class="n_author">by ' + curr.n_author + '</div>' +
          '<div class="n_text_preview">' + curr.n_note_preview + '</div>' +
          '</div>');
      }
 };

 $( document ).ready(function() {
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
   document.addEventListener("deviceready", function(){

        var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
        if ( app ) {
            // Running in an App
            var redirect = "http://localhost";
        } else {
            // Running in a Browser
            var redirect = window.location.href;
        }

        // has logged in before but didnt JUST log in, ya feel?
        if (window.localStorage.getItem('token') && (window.location.hash.indexOf('access_token') == -1 || app)) {
            var token = window.localStorage.getItem('token');
            loadgapi(token);
        }
=======

   document.addEventListener("deviceready", function(){
        //alert("Device is indeed ready");
        console.log('Device Ready');
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd

        $('#grid').preview_panel([
           {n_title: "Lorem Ipsum Dolor", n_author: "Camille Wells", n_note_preview: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
           {n_title: "Sit Amet", n_author: "Gwendolyn Nichols", n_note_preview: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
           {n_title: "Consectetur Adipiscing", n_author: "Doreen Harrington", n_note_preview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"},
           {n_title: "Sed Do Eiusmod", n_author: "Laurie Vega", n_note_preview: "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet"},
        ]);

<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
        // launch when button is pressed
        $('#login').click(function(e) {
          e.preventDefault();
          try {
          // OAuth2 Sign in stuff
=======
        $('#login').click(function(e) {
          e.preventDefault();
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
          $.oauth2({
              auth_url: 'https://accounts.google.com/o/oauth2/auth',           // required
              response_type: 'token',      // required  - "code"/"token"
              token_url: '',          // required for response_type ="code"
              logout_url: 'https://accounts.google.com/logout',         // recommended if available
              client_id: '302886424414-okrk6c1pb8hg3ehuq62k0k1hp4qlsfai.apps.googleusercontent.com',          // required
              client_secret: '',      // required for response_type ="code"
<<<<<<< 53ee975b211ee005b153df0cbf3d2ea573a81c04
              redirect_uri: redirect,       // required - any dummy url http://www.yourcompany.com
              other_params: {scope: scopes},        // optional params object for scope, state, ...
              inapp: app

          // everything is successful, commense witchcraft
        }, function(data, response){

              var token = data.split('&')[0];
              window.localStorage.setItem('token', token);
              loadgapi(token);

          // Report and Errors in the sign in process
          }, function(error, response){
                alert('error: ' + error);
          });
        } catch(e) {
          alert('error: ' + e);
        }
      });
   },true);
});

// runs when the gapi script is fully loaded
function handleGoogleLoad() {
    gapi.client.setApiKey(API_KEY);
}

// unused utility
function getUrlVars() {
    var vars = {};
      var parts = window.location.href.replace(/[?&#]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      return vars;
}

function loadgapi(token) {

    // Manually set token, from above.
    gapi.auth.setToken({
        access_token: token
    });

    // load API (might change)
    gapi.client.load('plus', 'v1').then(function(){
        // form request
        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });
        // execute request
        request.then(function(resp){
            // just for demonstration purposes
            $('#subtitle').text('Welcome Back: ' + resp.result.displayName);

            // runs if something goes wrong
        }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    });
}
=======
              redirect_uri: 'http://localhost',       // required - any dummy url http://www.yourcompany.com
              other_params: {scope: 'profile'}        // optional params object for scope, state, ...
          }, function(token, response){
                alert('success');
          }, function(error, response){
                alert('error');
          });
        });

   },true);
});
>>>>>>> 2614c50b374c2e9b6caf6fffb1cdbb6ae97216dd
