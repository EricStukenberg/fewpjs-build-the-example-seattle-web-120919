// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (even) => {
  const error_msg = document.getElementById("modal");
  error_msg.style.display = "none";
  console.log(error_msg);
  const like_hearts = document.getElementsByClassName("like-glyph");
  console.log(like_hearts.length);
  let len = like_hearts.length;
  for(let i = 0; i < len; i++ ) {
    like_hearts[i].addEventListener("click", () => like(like_hearts[i])); 
  }

}); 



function like(like_heart) {
  console.log(like_heart.innerHTML);

    mimicServerCall().then(() => {
      if(like_heart.innerHTML === EMPTY_HEART) {
        like_heart.innerHTML = FULL_HEART;
        like_heart.style.color = "red";
      } else {
        like_heart.innerHTML = EMPTY_HEART;
        like_heart.style.color = "";
      }
    }).catch((error) => {
      const error_msg = document.getElementById("modal");
      error_msg.style.display = "block";
      console.log(error);
      setTimeout(() => {error_msg.style.display = "none";}, 1000)
      console.log("AFTER SLEEP");
    });


}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


