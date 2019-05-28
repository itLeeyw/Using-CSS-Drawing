!function(){
        let code = `
    /*
    * 如何画一只皮卡丘
    * 首先画背景
    */
    .preview{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        background: #fee433;
        
    }
    .wrapper{
        position: relative;
        height: 165px;
        width: 100%;
    }
    /*
    * 然后画眼睛
    */
    .eye{
        position: absolute;
        width: 49px;
        height: 49px;
        border-radius: 50%;
        background: #2e2e2e;
        border: 2px solid #000;

    }
    .eye::before{
        content: '';
        display: block;
        width: 26px;
        height: 26px;
        border: 2px solid #000000;
        border-radius: 50%;
        background: white;
        position: absolute;
        left: 3px;

    }

    /*
    * 左眼
    */
    .eye.left{
        left:50%;
        margin-left: 90px;
    }

    /*
    * 右眼
    */
    .eye.right{
        right:50%;
        margin-right: 90px;
    }

    /*
    * 再画鼻子
    */
    .nose{
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -15px;
        border-radius: 50%;
        border: 11px solid ;
        border-color: black transparent transparent transparent;
        border-width: 12px 15px;
    }

    /*
    * 画皮卡丘的腮红~
    */
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
    }
    .face.left{
        right:50%;
        top: 85px;
        margin-right: 116px;
    }
    .face.right{
        left:50%;
        top: 85px;
        margin-left: 116px;
    }

    /*
    * 接下来画皮卡丘的嘴巴~
    */
    .upLip{
        position: absolute;
        height: 25px;
        width: 83px;
        border: 3px solid black;
        top: 48px;
        background: #fee433;
    }
    .upLip.left{
        border-bottom-left-radius: 50% 50%;
        border-top: transparent;
        border-right: transparent;
        transform: rotate(-20deg);
        right: 50%;
    }
    .upLip.right{
        border-bottom-right-radius: 50% 10px;
        border-top: transparent;
        border-left: transparent;
        transform: rotate(20deg);
        left: 50%;
    }

    /*
    * 最后画皮卡丘的舌头~
    */
    .lowerLip-wrapper{
        position: absolute;
        bottom:0;
        left: 50%;
        margin-left: -150px;
        height: 110px;
        width: 300px;
        overflow: hidden;
    }
    .lowerLip{ 
        position: absolute;
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border:2px solid black;
        bottom: 0;
        overflow: hidden;
    }
    .lowerLip::after{
        content:'';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%;
    }

    /*
    * 皮卡丘画好啦~
    */
    `
    var duration = 10;
    var flag = 1;
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        let id = setTimeout(function run(){
            n += 1;
            container.innerHTML =  Prism.highlight( prefix + code.substring(0,n),Prism.languages.css,'css');
            container.scrollTop = container.scrollHeight
            styleTag.innerHTML = code.substring(0,n)
            if(flag){
                if (n < code.length){
                    id = setTimeout(run,duration);
                }else{
                    fn && fn.call()
                }
            }else{
                clearTimeout(id)
                container.innerHTML =  Prism.highlight( prefix + code,Prism.languages.css,'css');
                styleTag.innerHTML = code
            }
        },1)
    }
 
    writeCode('',code);

    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let $speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch($speed){
            case 'slow':
                duration = 80
                break
            case 'normal':
                duration = 40
                break
            case 'fast':
                duration = 5
                break
            case 'stop':
                flag = 0
                break
            default:
                duration = 50
        }
    })
}.call()