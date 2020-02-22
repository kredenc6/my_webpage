  document.getElementById("login-button").addEventListener("click", () => {
    FB.login(function(response) {
      console.log(response);
      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
         console.log('Good to see you, ' + response.name + '.');
       });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
  });

  document.getElementById("share-button").addEventListener("click", () => {
    // FB.ui({
    //   method: 'share_open_graph',
    //   action_type: 'og.likes',
    //   action_properties: JSON.stringify({
    //     object:'https://developers.facebook.com/docs/javascript/examples',
    //   })
    // }, function(response){
    //   // Debug response (optional)
    //   console.log(response);
    // });
    
    FB.api(
      '/me',
      'GET',
      {"fields":"id,name"},
      function(response) {
        console.log(response);
          // Insert your code here
      }
    );

    // FB.ui({
    //   method: "share",
    //   href: "https://vibrant-gates-1be236.netlify.com"
    // }, function(response){ console.log(response) });
  });