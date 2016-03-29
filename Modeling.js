var gamecontroller = document.getElementById('gamecontroller');
var analogstick = document.getElementById('analogstick');
var fourfacebuttons = document.getElementById('fourfacebuttons');
var dpad = document.getElementById('dpad');
var start = document.getElementById('start');
var home = document.getElementById('home');
var bumpers = document.getElementById('bumpers');
var triggers = document.getElementById('triggers');
var analogStickHoverable = document.getElementById('analogStickHoverable');



gamecontroller.addEventListener("click", function(){
    analogstick.innerHTML = "<h2>Analog stick</h2> <img src='http://g02.a.alicdn.com/kf/HTB18nsiJpXXXXbnXVXXq6xXFXXXo/1-Pair-X360ace-Gamepad-Hat-Analog-Joystick-Rubber-Cap-for-Xbox-360-Cover-Gaming-Other-Accessories.jpg' width='200'>";
    fourfacebuttons.innerHTML = "<h2>A, B, X, Y</h2> <img src='http://www.marauderzstuff.com/content/binary/Windows-Live-Writer/The-Xbox-360-Transforming-Controller_D/DSC00464.jpg' width='300'>";
    dpad.innerHTML = "<h2>Directional Pad</h2> <img src='http://www.thatvideogameblog.com/wp-content/uploads/2008/03/360dpad-mar20.jpg' width='375'>";
    start.innerHTML = "<h2>Start and Select Button</h2> <img src='http://vignette3.wikia.nocookie.net/castlecrashers/images/b/ba/Xbox360_Button_Start.png/revision/latest?cb=20081102233126' width='200'>";
    home.innerHTML = "<h2>Home Button</h2> <img src='http://nxeassets.xbox.com/shaxam/0201/40/df/40dfb105-39e6-4f20-bfd4-c304570e2a43.PNG?v=1' width='300'>";
    bumpers.innerHTML = "<h2>Bumpers</h2><img src='https://wiki.teamfortress.com/w/images/a/ae/Xbox_Button_Bumper_Right.png?t=20111217064810' width='330'>";
    triggers.innerHTML = "<h2>Triggers</h2><img src='http://www.modjunkiez.com/assets/images/blacktriggers1.jpg' width='190'>";
    
    analogstick.addEventListener("click", function(){
        document.getElementById('analogstickinfo').innerHTML = "There are two analog sticks on a controller, one on the top left and the bottom right. The one on the top left is mostly used for movement in games and the one on the bottom right is either used for looking around in first or third person games or just never used at all.";
    }
    );
    fourfacebuttons.addEventListener("click", function(){
        document.getElementById('fourfacebuttonsinfo').innerHTML = "";
    }
    );
    dpad.addEventListener("click", function(){
        document.getElementById('dpadinfo').innerHTML = "";
    }
    );
    start.addEventListener("click", function(){
        document.getElementById('startinfo').innerHTML = "";
    }
    );
    home.addEventListener("click", function(){
        document.getElementById('homeinfo').innerHTML = "";
    }
    );
    bumpers.addEventListener("click", function(){
        document.getElementById('bumpersinfo').innerHTML = "";
    }
    );
    triggers.addEventListener("click", function(){
        document.getElementById('triggersinfo').innerHTML = "";
    }
    );
    analogStickHoverable.addEventListener("mouseenter", function(){
        
    }
    );
}
);