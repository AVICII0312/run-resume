var details_1 = `/*
*面试官你好，我是XXX
*只用文字做自我介绍太单调了
*我就用代码来展示吧
*首先准备一些样式
*/
* {
    transition: all 1s;
}
html {
    background:#eee;
}
#code {
    border: 1px solid #aaa;
    padding: 16px;

}
/* 代码高亮起来才好看 */
.token.selector { color: #690; }
.token.property { color: #905; }
.token.comment { color: slategray; }
/* 我认为还需要再加个呼吸效果 */
#code {
   animation: breath 0.5s infinite alternate-reverse;
}
/* 现在正式开始 */

/* 我需要一张白纸 */
#code-wrapper{
    width: 50%; left: 0;
    position: fixed; 
    height: 100%;
}
#paper>.content {
    display: block;
}

/* 接下来请看右边 */


`
var details_2 = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
var details_3 = `
/* 
 * 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`
var details_4 = `
/*
* 简历展示完毕
* 谢谢观看
*/
`
writeCode('',details_1,()=>{
    creatPaper( ()=>{
        writeMarkdown(details_2,()=>{
            writeCode(details_1,details_3,()=>{
                MarkdownToHtml(details_2, ()=>{
                    writeCode(details_1+details_3,details_4)
                })
            })
        })
    })
})



function writeCode(prefix,code,fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        pageStyle.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n > code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 10)
}
function creatPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    paper.className = 'papper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    console.log('paper创建成功')
    fn.call()
}
function writeMarkdown(details_2,fn) {
    let domContent = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domContent.innerHTML = details_2.substring(0, n)
        domContent.scrollTop = domContent.scrollHeight
        if (n > details_2.length) {
            window.clearInterval(id)
            console.log('Markdown书写完毕')
            fn.call()
        }
    }, 10)
}

function MarkdownToHtml(details_2,fn){
    let pre = document.querySelector('#paper > .content')
    pre.innerHTML = marked(details_2)
    pre.classList.add('markdown-body','active')
    fn && fn.call()
}

