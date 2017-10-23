/**
 * Created by ASUS on 2017-10-23.
 */
window.onload= function () {
    var Set=document.querySelector('.set')
    var Set1=document.querySelector('.set1')
    Set.onmouseover= function () {
        Set1.style.display='block'
    }
    Set.onmouseout= function () {
        Set1.style.display='none'
    }
    var More=document.querySelector('#more')
    var R=document.querySelector('.right')
    var a=1
    var b=0
    var timer=null
    var timer2=null
    More.onmouseover= function () {
        this.style.zIndex=-1
        R.style.zIndex=1
        clearInterval(timer2)
        timer=setInterval(function () {
            if(a>0){
                a=a-1/10
                More.style.opacity=a
            }
            if(b<1){
                b=b+1/10
                R.style.opacity=b
            }
        },20)
    }
    R.onmouseleave= function () {
        this.style.zIndex=1
        R.style.zIndex=-1
        clearInterval(timer)
        timer2=setInterval(function () {
            if(a<1){
                a=a+1/10
                More.style.opacity=a
            }
            if(b>0){
                b=b-1/10
                R.style.opacity=b
            }
        },20)
    }
}