let theBody = document.getElementsByTagName("body");
function Color(r,g,b,a){   
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = function(){
        return `rgb(${r},${g},${b})`
    }
    this.RGBToHex = function(){
        hexR = r.toString(16);
        hexG = g.toString(16);
        hexB = b.toString(16);
      
        if (hexR.length == 1)
          hexR = "0" + hexR;
        if (hexG.length == 1)
          hexG = "0" + hexG;
        if (hexB.length == 1)
          hexB = "0" + hexB;
        return "#" + hexR + hexG + hexB;
      };
      this.rgba = function(){
        return `rgb(${r},${g},${b},${a})`
      }
      this.colorChanger = function(value){
        document.body.style.backgroundColor = value;
      }
}
let colorCode = new Color(30,100,10,0.6); 
colorCode.colorChanger(colorCode.rgba())
console.log(colorCode.rgb())
console.log(colorCode.RGBToHex())
console.log(colorCode.rgba())
