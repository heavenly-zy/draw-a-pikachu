!function () {
    var duration = 40
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = prefix + code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let css = `
    /*
     * 一只野生的皮卡丘出现了，让我们一起来捕获（画）它吧
     */ 




    /*
     * 首先，需要准备皮卡丘的皮
     */ 
    .preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
    }
    .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
    }


    /*
     * 然后，画皮卡丘的鼻子
     */ 
    .nose {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-50%);
    }


    /*
     * 其次，画皮卡丘的两只眼睛
     */ 
    .eye {
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }


    /*
     * 左眼
     */ 
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }


    /*
     * 右眼
     */ 
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }


    /*
     * 这只皮卡丘看起来好像没什么精神，不如我们......给它画两颗眼珠子
     */ 
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: -1px;
        border: 2px solid #000000;
    }


    /*
     * 嗯，现在看起来精神多了，接下来画皮卡丘的红脸颊
     */ 
    .face {
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border-radius: 50%;
        border: 2px solid #000000;
        position: absolute;
        top: 85px;
    }


    /*
     * 左脸
     */ 
    .left.face {
        right: 50%;
        margin-right: 116px;
    }


    /*
     * 右脸
     */ 
    .right.face {
        left: 50%;
        margin-left: 116px;
    }


    /*
     * 上嘴唇
     */ 
    .upperLip {
        height: 20px;
        width: 80px;
        border: 2px solid black;
        position: absolute;
        top: 50px;
        background: #FEE433;
    }
    .left.upperLip {
        right: 50%;
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-15deg);
    }
    .right.upperLip {
        left: 50%;
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(15deg);
    }


    /*
     * 下嘴唇
     */ 
    .lowerLip-wrapper {
        width: 300px;
        height: 145px;
        position: absolute;
        bottom: -36px;
        left: 50%;
        margin-left: -150px;
        overflow: hidden;
        /*border: 1px solid red;*/
    }
    .lowerLip {
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0px;
        overflow: hidden;
    }


    /*
     * 嘴唇里面有舌头
     */ 
    .lowerLip::after {
        content: '';
        position: absolute;
        bottom: -35px;
        width: 150px;
        height: 150px;
        background: #FC4A62;
        left: 50%;
        margin-left: -75px;
        border-radius: 50%;
    }
    


    /*
     * 好了，恭喜你捕获到一只野生的皮卡丘≥﹏≤
     */ 
    `
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) // 获取到当前选中的button
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 40
                break
            case 'fast':
                duration = 5
                break
        }
    })
    writeCode('', css)
}.call()