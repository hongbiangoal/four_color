// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.drawCar(0);
    },

    start () {
        // cc.director.loadScene("gameover");
    },
    update(dt) {
        this.time += dt;
        let percent = this.time / this.duration;
        if (percent > 1) {
            return;
        }
        this.path.dashOffset = this.pathLength * (1 - percent);
        this.path._dirty = true;
    },
    // update (dt) {},
    drawCar: function (i,color) {
        // var group = this.addComponent('R.group');

        // 车窗 let pathStrings = ['M-19,-5 L-12,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'

        
        
        let pathStrings = ['M-19,-5 L-11,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'+
        'M-7,-24 a1,1 0,0 0,-1 -1 L-29,-25 a1,1 0,0 0,-1 1 L-30,15'+
        'M-7,-24 C-7.1,-8 -2,-2 0,0 C2,-7 -5,-24 -7,-24'+
        'M30,22 L30,1 a1,1 0,0 0,-1 -1 L0,0'+
        // 'M30,1 C38,0.8 35,20.7 35,25'+
        // 'M15,25 C21,20 29,20 35,25 C41,25 40,31 35,28 C29,23 21,23 15,28 C9,31 8,25 15,25'+
        'M25,25 C28.8,25 32.5,28.7 32.5,32.5 C32.5,36.3 28.8,40 25,40 C21.2,40 17.5,36.3 17.5,32.5 C17.5,28.7 21.2,25 25,25'+
        'M25,30 C26.27,30 27.5,31.23 27.5,32.5 C27.5,33.77 26.27,35 25,35 C23.73,35 22.5,33.77 22.5,32.5 C22.5,31.23 23.73,30 25,30'+
        'M32.5,30 C41.6,29.6 41.6,34.7 32.5,35'+
        // 'M-30,15 C-21.3,8.5 -7,8.8 0,15 C7,15.3 7,21.2 0,18 C-7,11.8 -21.3,11.5 -30,18 C-35.6,22.5 -37.8,15.8 -30,15'+
        'M-15,15 C-8.6,15 -2.5,21.1 -2.5,27.5 C-2.5,33.9 -8.6,40 -15,40 C-21.4,40 -27.5,33.9 -27.5,27.5 C-27.5,21.1 -21.4,15 -15,15'+
        'M-15,25 C-13.73,25 -12.5,26.23 -12.5,27.5 C-12.5,28.77 -13.73,30 -15,30 C-16.27,30 -17.5,28.77 -17.5,27.5 C-17.5,26.23 -16.27,25 -15,25'+
        'M17.5,30 L-3.2,30'+
        'M17.5,35 L-5,35'+
        'M-27,30 L-30,30'+
        'M-25,35 L-30,35'+
        'M-30,30 C-38.6,30 -38.1,35 -30,35'
    ];


            // let i = 0;
        let self = this;
        console.log("--------------------3-----"+i);
        function animate() {
            if(i >= pathStrings.length){
                return 0;
            }
            // var path = group.addPath();
            let path = self.addComponent('R.path');
            console.log("--------------------2-----"+i);
            path.strokeColor = "#5E5D5A";
            path.lineWidth = 2;
            if(color !== undefined){
                path.fillColor = color;
            }
            // path.fillColor = '#0000FF';
            // path.showHandles = true;
            console.log("---------------------1----"+self.path+"--"+path);

            path.scale = cc.v2(4, -4);

            self.path = path;
            console.log("---------------------4----"+i);
            let pathString = pathStrings[i];
            path.path(pathString);

            if(i===0){
                path.center(0, 0);
            }else if(i===1){
                path.center(40, 0);
            }else if(i===2){
                path.center(-40, 0);
            }
            

            i = ++i % pathStrings.length;

            self.time = 0;
            self.pathLength = path.getTotalLength();
           
            path.dashOffset = self.pathLength;
            path.dashArray = [self.pathLength];
        }

        


        animate();
        // this.schedule(animate, 1,1);

    },

    fillCar: function (i,color) {
        // var group = this.addComponent('R.group');

        // 车窗 let pathStrings = ['M-19,-5 L-12,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'

        
        
        let pathStrings = ['M-19,-5 L-12,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'
        ];


            // let i = 0;
        let self = this;
        console.log("--------------------3-----"+i);
        function animate() {
            if(i >= pathStrings.length){
                return 0;
            }
            // var path = group.addPath();
            let path = self.addComponent('R.path');
            console.log("--------------------2-----"+i);
            path.strokeColor = "#5E5D5A";
            path.lineWidth = 2;
            if(color !== undefined){
                path.fillColor = color;
            }
            // path.fillColor = '#0000FF';
            // path.showHandles = true;
            console.log("---------------------1----"+self.path+"--"+path);

            path.scale = cc.v2(4, -4);

            self.path = path;
            console.log("---------------------4----"+i);
            let pathString = pathStrings[i];
            path.path(pathString);

            if(i===0){
                path.center(0, 0);
            }else if(i===1){
                path.center(40, 0);
            }else if(i===2){
                path.center(-40, 0);
            }
            

            i = ++i % pathStrings.length;

            self.time = 0;
            self.pathLength = path.getTotalLength();
           
            path.dashOffset = self.pathLength;
            path.dashArray = [self.pathLength];
        }
    }
});
