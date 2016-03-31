var leftanalogStickHoverable = document.getElementById('leftanalogStickHoverable');
var rightanalogStickHoverable = document.getElementById('rightanalogStickHoverable');
var fourfacebuttonshoverable = document.getElementById('fourfacebuttonshoverable');
var dpadhoverable = document.getElementById('dpadhoverable');
var starthoverable = document.getElementById('starthoverable');
var homehoverable = document.getElementById('homehoverable');
var leftbumperhoverable = document.getElementById('leftbumperhoverable');
var rightbumperhoverable = document.getElementById('rightbumperhoverable');
var lefttriggerhoverable = document.getElementById('lefttriggerhoverable');
var righttriggerhoverable = document.getElementById('righttriggerhoverable');
var connecthoverable = document.getElementById('connecthoverable');
var backhoverable = document.getElementById('backhoverable');
var hovertext = document.getElementById('hovertext');


leftanalogStickHoverable.addEventListener("mouseenter", function(){
   hovertext.innerHTML="<p>The left is mostly used for movement in games and to navigate through menu screens in games or home menus on your console of choice.</p>";
});

leftanalogStickHoverable.addEventListener("mouseleave", function(){
   hovertext.innerHTML="";
});
rightanalogStickHoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The right analog stick is often used to look around in first or third person shooters or isn't used at all.</p>";
});

rightanalogStickHoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

fourfacebuttonshoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The ABXY buttons are usually called the face buttons on a controller since they are the only buttons that really stick out. The A button is often used to accept commands you give to the game, the B button is often used to go back, and the X and Y buttons are used to perform specific actions in what ever game you are playing along with the A and B buttons.</p>";
});

fourfacebuttonshoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

dpadhoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The directional pad also known as the dpad is the equivalent to arrow keys on a keyboard. The dpad is like the left analog stick in that it is most often used for movement in video games except with a dpad, it's much harder to move since you don't have full 360 degree control like you do with an analog stick.</p>";
});

dpadhoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

starthoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The start button is often used to bring up menus in video games.</p>";
});

starthoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

homehoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The home or guide button is the button that brings up the home menu while you are playing a game.</p>";
});

homehoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

leftbumperhoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The left bumper has many uses in games, but on the home menu, it is most often to scroll to the page to the left of the one you are currently on when using a game console.</p>";
});

leftbumperhoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

rightbumperhoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The right bumper also has many uses in games, but on the home menu, it is most often to scroll to the page to the right of the one you are currently on when using a game console.</p>";
});

rightbumperhoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

lefttriggerhoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The left trigger also has many uses in games and that is about it for the left trigger.</p>";
});

lefttriggerhoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

righttriggerhoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The right trigger also has many uses in other games but it's most significant use is in shooter games where you fire the weapon the player is using with the right trigger.</p>";
});

righttriggerhoverable.addEventListener("mouseleave", function(){
    hovertext.innerHTML="";
});

connecthoverable.addEventListener("mouseenter", function(){
    hovertext.innerHTML="<p>The connect button is used to sync up your controller with your console of choice. For example, this controller would sync up to an xbox 360 since it's an xbox 360 controller.</p>";
});

connecthoverable.addEventListener("mouseleave", function() {
   hovertext.innerHTML=""; 
});

backhoverable.addEventListener("mouseenter", function() {
   hovertext.innerHTML="<p>To be completely honest, I don't know why this button is here.</p>"; 
});

backhoverable.addEventListener("mouseleave", function() {
    hovertext.innerHTML="";
});