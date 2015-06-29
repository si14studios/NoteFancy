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

var API_KEY = "AIzaSyBZY6mZ3bvW6cg-oSHnGpzF8pDB0RgrXcI";
var CLIENT_ID = "302886424414-okrk6c1pb8hg3ehuq62k0k1hp4qlsfai.apps.googleusercontent.com";
var scopes = "https://www.googleapis.com/auth/plus.login "
           + "https://www.googleapis.com/auth/plus.me";

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

   document.addEventListener("deviceready", function(){
        //alert("Device is indeed ready");
        $('#grid').preview_panel([
           {n_title: "Lorem Ipsum Dolor", n_author: "Camille Wells", n_note_preview: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
           {n_title: "Sit Amet", n_author: "Gwendolyn Nichols", n_note_preview: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
           {n_title: "Consectetur Adipiscing", n_author: "Doreen Harrington", n_note_preview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"},
           {n_title: "Sed Do Eiusmod", n_author: "Laurie Vega", n_note_preview: "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet"},
        ]);

        // launch when button is pressed
        $('#login').click(function(e) {
          e.preventDefault();

          // OAuth2 Sign in stuff
          $.oauth2({
              auth_url: 'https://accounts.google.com/o/oauth2/auth',           // required
              response_type: 'token',      // required  - "code"/"token"
              token_url: '',          // required for response_type ="code"
              logout_url: 'https://accounts.google.com/logout',         // recommended if available
              client_id: '302886424414-okrk6c1pb8hg3ehuq62k0k1hp4qlsfai.apps.googleusercontent.com',          // required
              client_secret: '',      // required for response_type ="code"
              redirect_uri: 'http://localhost',       // required - any dummy url http://www.yourcompany.com
              other_params: {scope: scopes}        // optional params object for scope, state, ...

          // everything is successful, commense witchcraft
          }, function(token, response){

                var vals = token.split('&');
                var token = vals[0];
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

          // Report and Errors in the sign in process
          }, function(error, response){
                alert('error: ' + error);
          });
      });
   },true);
});


// runs when the gapi script is fully loaded
function handleGoogleLoad() {
    gapi.client.setApiKey(API_KEY);

}

// just some notes for gapi
// https://developers.google.com/api-client-library/javascript/start/start-js
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript
// https://developers.google.com/api-client-library/javascript/reference/referencedocs
