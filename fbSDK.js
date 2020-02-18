  window.fbAsyncInit = function() {
    // console.log("FB initialization started.");
    FB.init({
      appId            : '1981051258695498',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v6.0'
    });
  };

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