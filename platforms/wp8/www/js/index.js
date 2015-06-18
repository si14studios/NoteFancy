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
        console.log('Device Ready');

        $('#grid').preview_panel([
           {n_title: "Lorem Ipsum Dolor", n_author: "Camille Wells", n_note_preview: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
           {n_title: "Sit Amet", n_author: "Gwendolyn Nichols", n_note_preview: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
           {n_title: "Consectetur Adipiscing", n_author: "Doreen Harrington", n_note_preview: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"},
           {n_title: "Sed Do Eiusmod", n_author: "Laurie Vega", n_note_preview: "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet"},
        ]);

        $('#login').click(function(e) {
          e.preventDefault();
          $.oauth2({
              auth_url: 'https://accounts.google.com/o/oauth2/auth',           // required
              response_type: 'token',      // required  - "code"/"token"
              token_url: '',          // required for response_type ="code"
              logout_url: 'https://accounts.google.com/logout',         // recommended if available
              client_id: '302886424414-okrk6c1pb8hg3ehuq62k0k1hp4qlsfai.apps.googleusercontent.com',          // required
              client_secret: '',      // required for response_type ="code"
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


/**
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    bindEvents: function() {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);

      } else {
        this.onDeviceReady();
      }
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        app.receivedEvent();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);

        navigator.notification.alert(
            'You are the winner!',  // message
            function() {

            },         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    }
};

app.initialize();
**/
