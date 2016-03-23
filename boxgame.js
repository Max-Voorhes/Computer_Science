var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var bullets = [];
var enemies = [];
var hardenemies = [];
var superhardenemies = [];
// var gameover = [];
var die = [];
// var line = [];

var box = {
    xPos: 200,
    yPos: 450,
    height: 20,
    width: 20,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    shooting: false,
    die: false,
    canshoot: true,
    
    move: function() {

        if (box.goLeft && box.xPos > 0) {
            box.xPos -= 7;
        }
        if (box.goRight && box.xPos < 380) {
            box.xPos += 7;
        }
        if (box.goUp && box.yPos > 400) {
            box.yPos -= 7;
        }
        if (box.goDown && box.yPos < 580) {
            box.yPos += 7;
        }

    },
    shoot: function() {
        if (box.shooting && box.canshoot) {
            bullets.push(new Bullet(box.xPos, box.yPos));
            setTimeout(function(){
                box.canshoot = true;
            }, 250);
            box.canshoot = false;
        }
    },
    draw: function() {
        ctx.rect(box.xPos, box.yPos, this.width, this.height);
        ctx.stroke();
    }
};

function Bullet(xPos, yPos ) {
    this.xPos = xPos + 9;
    this.yPos = yPos;
    this.height = 10;
    this.width = 2;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();

    };
    this.move = function() {
        this.yPos -= 10;
        if(this.yPos < 0){
            return false;
            
        }
        
        return true;
        
    };
}

function Enemy(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 30;
    this.width = 30;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };
    this.move = function() {
        this.xPos -= 0;
        this.yPos -= -1;
    };
}

function Hardenemy(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 40;
    this.width = 40;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };
    var tempRand = Math.random() * mycanvas.width;
    this.move = function() {
        this.xPos -= tempRand;
        this.yPos -= -10;
    };
}

function Superhardenemy(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 50;
    this.width = 50;
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };
    var tempRand = Math.random() * mycanvas.width;
    this.move = function() {
        this.xPos -= tempRand;
        this.yPos -= -100;
    };
}
// function Line(xPos, yPos){
//     this.xPos = xPos;
//     this.yPos = yPos;
//     this.height = 10;
//     this.width = 400;
//     this.draw = function() {
//         ctx.rect(this.xPos, this.yPos, this.width, this.height);
//         ctx.stroke();
//     };
// }
    
    
    
document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = true;
    }
    if (evt.keyCode === 38) {
        box.goUp = true;
    }
    if (evt.keyCode === 39) {
        box.goRight = true;
    }
    if (evt.keyCode === 40) {
        box.goDown = true;
    }
    if (evt.keyCode === 32) {
        box.shooting = true;
    }
    if (evt.keyCode === 
0,	1,	2,	3,	4,	5,	6,	7,	8,	9,
10,	11,	12,	13,	14,	15,	16,	17,	18,	19,
20,	21,	22,	23,	24,	25,	26,	27,	28,	29,
30,	31,	33,	34,	35,	36,	41,	42,	43,	44,	
45,	46,	47,	48,	49,
50,	51,	52,	53,	54,	55,	56,	57,	58,	59,
60,	61,	62,	63,	64,	65,	66,	67,	68,	69,
70,	71,	72,	73,	74,	75,	76,	77,	78,	79,
80,	81,	82,	83,	84,	85,	86,	87,	88,	89,
90,	91,	92,	93,	94,	95,	96,	97,	98,	99,
100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
110, 111, 112, 113, 114, 115, 116, 117,	118, 119,
120, 121, 122, 123,	124, 125, 126, 127,	128, 129,
130, 131, 132, 133,	134, 135, 136, 137,	138, 139,
140, 141, 142, 143,	144, 145, 146, 147,	148, 149,
150, 151, 152, 153,	154, 155, 156, 157, 158, 159,
160, 161, 162, 163,	164, 165, 166, 167, 168, 169,
170, 171, 172, 173,	174, 175, 176, 177, 178, 179,
180, 181, 182, 183,	184, 185, 186, 187, 188, 189,
190, 191, 192, 193,	194, 195, 196, 197,	198, 199,
200, 201, 202, 203,	204, 205, 206, 207,	208, 209,
210, 211, 212, 213, 214, 215, 216, 217,	218, 219,
220, 221) {
        box.die = true;
    }

});

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = false;
    }
    if (evt.keyCode === 38) {
        box.goUp = false;
    }
    if (evt.keyCode === 39) {
        box.goRight = false;
    }
    if (evt.keyCode === 40) {
        box.goDown = false;
    }
    if (evt.keyCode === 32) {
        box.shooting = false;
    }
    if (evt.keyCode === 
0,	1,	2,	3,	4,	5,	6,	7,	8,	9,
10,	11,	12,	13,	14,	15,	16,	17,	18,	19,
20,	21,	22,	23,	24,	25,	26,	27,	28,	29,
30,	31,	33,	34,	35,	36,	41,	42,	43,	44,	
45,	46,	47,	48,	49,
50,	51,	52,	53,	54,	55,	56,	57,	58,	59,
60,	61,	62,	63,	64,	65,	66,	67,	68,	69,
70,	71,	72,	73,	74,	75,	76,	77,	78,	79,
80,	81,	82,	83,	84,	85,	86,	87,	88,	89,
90,	91,	92,	93,	94,	95,	96,	97,	98,	99,
100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
110, 111, 112, 113, 114, 115, 116, 117,	118, 119,
120, 121, 122, 123,	124, 125, 126, 127,	128, 129,
130, 131, 132, 133,	134, 135, 136, 137,	138, 139,
140, 141, 142, 143,	144, 145, 146, 147,	148, 149,
150, 151, 152, 153,	154, 155, 156, 157, 158, 159,
160, 161, 162, 163,	164, 165, 166, 167, 168, 169,
170, 171, 172, 173,	174, 175, 176, 177, 178, 179,
180, 181, 182, 183,	184, 185, 186, 187, 188, 189,
190, 191, 192, 193,	194, 195, 196, 197,	198, 199,
200, 201, 202, 203,	204, 205, 206, 207,	208, 209,
210, 211, 212, 213, 214, 215, 216, 217,	218, 219,
220, 221) {
        box.die = false;
    }
});

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    box.move();
    box.draw();
    box.shoot();
    
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].move();
        bullets[i].draw();
        for(var j = 0; j < enemies.length; j++){
            if(isColliding(bullets[i], enemies[j])){
                enemies.splice(j, 1);
                // bullets.splice(bullets , 1);
            }
        }
        
    }
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].move();
        enemies[i].draw();
        if(isColliding(box, enemies[i])){
            box.splice(i, 1);
        }
        // for(var j = 0; j < bullets.length; j++){
        //     if(isColliding(enemies[i], bullets[j])){
        //         bullets.splice(j, 1);
        //     }
        // if(isColliding(bullets, enemies[i])){
        //     enemies.splice(i, 1);
        //     bullets.splice(bullets, 1);
        // }
    }
    
    for (var i = 0; i < die.length; i++) {
        
    }
    window.requestAnimationFrame(gameLoop);
}

var wave1 = setInterval(function(){
    var tempRand = Math.random() * mycanvas.width;
    enemies.push(new Enemy(tempRand, 0));
    hardenemies.push(new Hardenemy(tempRand, 0));
    superhardenemies.push(new Superhardenemy(tempRand, 0));
}, 1000);


function isColliding(thing1, thing2){
    console.log(thing1, thing2);
    var isLeft = thing2.xPos + thing2.width < thing1.xPos;
    var isRight = thing2.xPos > thing1.xPos + thing1.width;
    var isBelow = thing2.yPos + thing2.height < thing1.yPos;
    var isAbove = thing2.yPos > thing1.yPos + thing1.height;
    return !(isRight||isLeft||isAbove||isBelow);
}

gameLoop();