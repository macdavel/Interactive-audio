SC.initialize({
		client_id: 'a93bdb6a3ee57264e5ce88a2edc34f27'
		});

var music = ['94686925','26299470','162022719','151640044','141483353','154899511'];

var already_played = false;

// $("#stream").live("click", function(){
// 	if(already_played === true){
// 		sound_obj.stop();
// 	}

// 	// getAllData();

// 	console.log("playing again");
// 	SC.stream("/tracks/"+music[Math.floor(Math.random()*7)], function(sound){
// 			already_played = true;
// 			sound_obj = sound;
// 		  sound.play({
// 		    loops:3
// 		  });

// });
// })


$("#stream").hover(
  function() {


  	console.log("hovered in")
    	SC.stream("/tracks/192640084", function(sound){
			already_played = true;
			sound_obj = sound;
		  sound.play({
		    // loops:3
		  });

  })
}, function() {
  	console.log("Hovered out yeah")

    sound_obj.stop();
  }

  )



$("#breakfast").hover(
  function() {


    console.log("hovered in")
      SC.stream("/tracks/192748793", function(sound){
      already_played = true;
      sound_obj = sound;
      sound.play({
        // loops:3
      });

  })
}, function() {
    console.log("Hovered out yeah")

    sound_obj.stop();
  }

  )




$("#gym").hover(
  function() {


    console.log("hovered in")
      SC.stream("/tracks/192748549", function(sound){
      already_played = true;
      sound_obj = sound;
      sound.play({
        // loops:3
      });

  })
}, function() {
    console.log("Hovered out yeah")

    sound_obj.stop();
  }

  )



$("#love").hover(
  function() {


    console.log("hovered in")
      SC.stream("/tracks/192640084", function(sound){
      already_played = true;
      sound_obj = sound;
      sound.play({
        // loops:3
      });

  })
}, function() {
    console.log("Hovered out yeah")

    sound_obj.stop();
  }

  )


$("#alone_time").hover(
  function() {


    console.log("hovered in")
      SC.stream("/tracks/192655982", function(sound){
      already_played = true;
      sound_obj = sound;
      sound.play({
        // loops:3
      });

  })
}, function() {
    console.log("Hovered out yeah")

    sound_obj.stop();
  }

  )
