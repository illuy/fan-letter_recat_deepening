import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
    color:inherit;
    text-decoration: none;
}
*{
    box-sizing: border-box;
}

/* 백그라운드 */
body{
    background-color: #151515;
    position: relative;
    width: 100%;
    height: auto;
}
body::before{
    content: '';
    display: block;
    width: 100%;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    opacity: 0.2;    
    background-image: url(https://www.rollingstone.com/wp-content/uploads/2023/10/aespa-ep-announcement.jpg?w=1581&h=1054&crop=1);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;    
}
body::after{
    content: '';
    display: block;
    width: 100%;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    background: linear-gradient(to bottom, transparent 70%, #151515)
}
`;

export default Globalstyle;
