import{j as y,r as m,I as j,a as F,A as S,L as h,u as M,b as P,c as O,d as x,B as u,e as g,M as T,G as E,f as k,g as I,h as Q,i as q,R as V,k as _,l as R,m as L,F as B,n as z,o as G,p as H,q as U,s as N,t as $,v as K}from"./vendor.f363f8db.js";const J=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}};J();const D=[{image:"https://http2.mlstatic.com/D_NQ_638324-MLA49633100760_042022-OO.webp"},{image:"https://http2.mlstatic.com/D_NQ_616919-MLA49612752598_042022-OO.webp"},{image:"https://http2.mlstatic.com/D_NQ_916500-MLA49613032017_042022-OO.webp"},{image:"https://http2.mlstatic.com/D_NQ_620081-MLA49613189312_042022-OO.webp"},{image:"https://http2.mlstatic.com/D_NQ_795844-MLA49613326992_042022-OO.webp"},{image:"https://http2.mlstatic.com/D_NQ_942274-MLA49633371395_042022-OO.webp"}],e=y.exports.jsx,a=y.exports.jsxs,A=y.exports.Fragment,X=({slides:t})=>{const[s,i]=m.exports.useState(0),d=t.length;return a("section",{className:"slider overflow-hidden",children:[e("button",{type:"button",className:"rightArrow",onClick:()=>{i(s===d-1?0:s+1),console.log(s)},children:e(j,{})}),e("button",{type:"button",className:"leftArrow",onClick:()=>{i(s===0?d-1:s-1),console.log(s)},children:e(F,{})}),D.map((n,c)=>e("div",{className:c===s?"slideActive":"slide",children:c===s&&e(A,{children:e("img",{src:n.image,alt:"Imagen1"})})},c))]})},o={logo:"https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png",disney:"https://http2.mlstatic.com/D_NQ_877425-MLA47306668299_082021-OO.webp",perfil:"https://mla-s1-p.mlstatic.com/963934-MLA48348620838_112021-O.jpg",tarjetas1:"https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg",tarjetas2:"https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg",tarjetas3:"https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg",tarjetas4:"https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg",producto:"https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",descubri1:"https://http2.mlstatic.com/D_NQ_638029-MLA49613425109_042022-C.webp",descubri2:"https://http2.mlstatic.com/D_NQ_713900-MLA49597675984_042022-C.webp",pagar1:"https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg",pagar2:"https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg",pagar3:"https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg",mediospago1:"https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg",mediospago2:"https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg",mediospago3:"https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg",mediospago4:"https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg",mediospago5:"https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg",mediospago6:"https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg",mediospago7:"https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"},Y=()=>a("div",{className:"bg-white w-4/5 h-[100px] mx-auto my-12 flex items-center justify-around rounded-md shadow-sm shadow-gray-300",children:[a("div",{className:"flex p-4 items-center",children:[e("img",{src:o.tarjetas1,alt:"Tarjeta Credito",className:"h-14"}),a("div",{className:"ml-4",children:[e("h3",{className:"text-[18px]",children:"Tarjeta de cr\xE9dito"}),e("p",{className:"text-CelesteML text-[15px]",children:"Ver promociones bancarias"})]})]}),a("div",{className:"flex p-4 items-center",children:[e("img",{src:o.tarjetas2,alt:"Tarjeta Debito",className:"h-14"}),a("div",{className:"ml-4",children:[e("h3",{className:"text-[18px]",children:"Tarjeta de d\xE9bito"}),e("p",{className:"text-CelesteML text-[15px]",children:"Ver m\xE1s"})]})]}),a("div",{className:"flex p-4 items-center",children:[e("img",{src:o.tarjetas3,alt:"Sin tarjeta",className:"h-14"}),a("div",{className:"ml-4",children:[e("h3",{className:"text-[18px]",children:"Cuotas sin tarjeta"}),e("p",{className:"text-CelesteML text-[15px]",children:"Conoc\xE9 Mercado Cr\xE9dito"})]})]}),a("div",{className:"flex p-4 items-center",children:[e("img",{src:o.tarjetas4,alt:"Efectivo",className:"h-14"}),a("div",{className:"ml-4",children:[e("h3",{className:"text-[18px]",children:"Efectivo"}),e("p",{className:"text-CelesteML text-[15px]",children:"Ver m\xE1s"})]})]}),e(S,{className:"text-3xl text-CelesteML"})]}),w=({producto:t})=>e("div",{className:"bg-white rounded-md shadow-sm shadow-gray-300 hover:shadow-md hover:shadow-gray-400",children:a(h,{to:`/producto/${t.id}`,children:[e("img",{src:t.imagen,alt:"Foto Producto",className:"object-contain h-64 w-64 align-middle mx-auto"}),e("hr",{}),a("div",{className:"mt-[1px] p-5 h-2/3",children:[e("p",{className:"text-[24px] tracking-wide",children:t.precio}),a("p",{className:"text-[16px]",children:["6 x $",t.precio/6," sin inter\xE9s"]}),e("p",{className:"text-[16px] text-green-600 font-bold",children:"Env\xEDo gratis"}),e("p",{className:"",children:t.titulo})]})]})}),p=[{id:1,titulo:'Monitor gamer Samsung F24T35 led 24" azul y gris oscuro 100V/240V',imagen:"https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",precio:"54000",miniaturas:{a:"https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",b:"https://http2.mlstatic.com/D_NQ_NP_829321-MLA46348271392_062021-O.webp",c:"https://http2.mlstatic.com/D_NQ_NP_787245-MLA48355828650_112021-O.webp"},descripcion:"Samsung est\xE1 fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa l\xEDder en la industria tecnol\xF3gica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendr\xE1s y disfrutar\xE1s de una gran experiencia visual en todo momento."},{id:2,titulo:"Smart Tv Noblex Dk50x6500 Led 4k 50",imagen:"https://http2.mlstatic.com/D_NQ_NP_829321-MLA46348271392_062021-O.webp",precio:"120000",miniaturas:{a:"https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",b:"https://http2.mlstatic.com/D_NQ_NP_829321-MLA46348271392_062021-O.webp",c:"https://http2.mlstatic.com/D_NQ_NP_787245-MLA48355828650_112021-O.webp"},descripcion:"Samsung est\xE1 fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa l\xEDder en la industria tecnol\xF3gica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendr\xE1s y disfrutar\xE1s de una gran experiencia visual en todo momento."},{id:3,titulo:"Auriculares Gamer Gadnic A800 Play Sonido 7.1 Usb Gaming Pc",imagen:"https://http2.mlstatic.com/D_NQ_NP_787245-MLA48355828650_112021-O.webp",precio:"4500",miniaturas:{a:"https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",b:"https://http2.mlstatic.com/D_NQ_NP_829321-MLA46348271392_062021-O.webp",c:"https://http2.mlstatic.com/D_NQ_NP_787245-MLA48355828650_112021-O.webp"},descripcion:"Samsung est\xE1 fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa l\xEDder en la industria tecnol\xF3gica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendr\xE1s y disfrutar\xE1s de una gran experiencia visual en todo momento."},{id:4,titulo:"Xiaomi Redmi Note 10 5G Dual SIM 128 GB gris grafito 4 GB RAM",imagen:"https://http2.mlstatic.com/D_NQ_NP_730981-MLA48800008115_012022-O.webp",precio:"66000",miniaturas:{a:"https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",b:"https://http2.mlstatic.com/D_NQ_NP_829321-MLA46348271392_062021-O.webp",c:"https://http2.mlstatic.com/D_NQ_NP_787245-MLA48355828650_112021-O.webp"},descripcion:"Samsung est\xE1 fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa l\xEDder en la industria tecnol\xF3gica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendr\xE1s y disfrutar\xE1s de una gran experiencia visual en todo momento."},{id:5,titulo:"Joystick inal\xE1mbrico Sony PlayStation Dualshock 4 magma red",imagen:"https://http2.mlstatic.com/D_NQ_NP_720461-MLA41795429603_052020-O.webp",precio:"12000",miniaturas:{a:"https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",b:"https://http2.mlstatic.com/D_NQ_NP_829321-MLA46348271392_062021-O.webp",c:"https://http2.mlstatic.com/D_NQ_NP_787245-MLA48355828650_112021-O.webp"},descripcion:"Samsung est\xE1 fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa l\xEDder en la industria tecnol\xF3gica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendr\xE1s y disfrutar\xE1s de una gran experiencia visual en todo momento."}],C=()=>a("div",{className:"my-12",children:[a("h2",{className:"my-6 text-2xl text-gray-500",children:["\xDAltima Visita",e("button",{className:"text-CelesteML text-[18px] ml-4",children:"Ver m\xE1s"})]}),e("div",{className:"grid grid-cols-5 space-x-4",children:p.map((t,s)=>e(w,{producto:t},s))})]}),W=()=>a("div",{className:"my-12",children:[a("h2",{className:"my-6 text-2xl text-gray-500",children:["Ofertas",e("button",{className:"text-CelesteML text-[18px] ml-4",children:"Ver m\xE1s"})]}),e("div",{className:"grid grid-cols-5 space-x-4",children:p.map((t,s)=>e(w,{producto:t},s))})]}),Z=()=>a("div",{className:"my-12  text-stone-600",children:[e("h2",{className:"my-6 text-2xl text-gray-500",children:"Descubr\xED"}),a("div",{className:"grid grid-cols-2 space-x-4",children:[a("div",{className:"bg-white rounded-sm grid grid-cols-2 hover:shadow-xl shadow-gray-500",children:[a("div",{className:"flex flex-col p-8 justify-evenly align-",children:[e("p",{children:"ACC. PARA VEH\xCDCULOS"}),a("p",{className:"font-semibold text-[28px] tracking-tight",children:["HASTA 40% OFF ",e("br",{})," Y 12X SIN INTER\xC9S"]}),e("button",{className:"bg-CelesteML w-28 h-10 text-white font-semibold rounded-sm hover:bg-blue-600 transition-colors duration-200 ease-in",children:"ver m\xE1s"})]}),e("img",{src:o.descubri1,alt:"Vehiculos"})]}),a("div",{className:"bg-white rounded-sm grid grid-cols-2 hover:shadow-xl shadow-gray-50",children:[a("div",{className:"flex flex-col p-8 justify-evenly align-",children:[e("p",{children:"CUMPLE SUPER"}),a("p",{className:"font-semibold text-[28px] tracking-tight",children:["APROVECH\xC1",e("br",{})," HASTA 50% OFF"]}),e("button",{className:"bg-CelesteML w-28 h-10 text-white font-semibold rounded-sm hover:bg-blue-600 transition-colors duration-200 ease-in",children:"ver m\xE1s"})]}),e("img",{src:o.descubri2,alt:"Supermercados"})]})]})]}),ee=()=>e("div",{className:"bg-white py-16 ",children:a("div",{className:"w-4/5 grid grid-cols-3 mx-auto",children:[a("div",{className:"flex flex-col text-center p-6 justify-evenly space-y-2",children:[e("img",{src:o.pagar1,alt:"Tarjeta",className:"h-14 mb-4"}),e("p",{className:"text-[20px] text-stone-700",children:"Eleg\xED c\xF3mo pagar"}),e("p",{className:"text-[16px] px-10 text-gray-500",children:"Pod\xE9s pagar con tarjeta, d\xE9bito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Cr\xE9dito."}),e("a",{className:"text-CelesteML",children:"C\xF3mo pagar tus compras"})]}),a("div",{className:"flex flex-col text-center p-6 justify-evenly space-y-2",children:[e("img",{src:o.pagar2,alt:"Tarjeta",className:"h-14 mb-4"}),e("p",{className:"text-[20px] text-stone-700",children:"Env\xEDo gratis desde $4000"}),e("p",{className:"text-[16px] px-10 text-gray-500",children:"Solo por estar registrado en Mercado Libre ten\xE9s env\xEDos gratis en miles de productos. Es un beneficio de Mercado Puntos"}),e("a",{className:"text-CelesteML",children:"C\xF3mo pagar tus compras"})]}),a("div",{className:"flex flex-col text-center p-6 justify-evenly space-y-2",children:[e("img",{src:o.pagar3,alt:"Tarjeta",className:"h-14 mb-4"}),e("p",{className:"text-[20px] text-stone-700",children:"Seguridad, de principio a fin"}),e("p",{className:"text-[16px] px-10 text-gray-500",children:"\xBFNo te gusta? \xA1Devolelo! En Mercado Libre, no hay nada que no puedas hacer, porque est\xE1s siempre protegido."}),e("a",{className:"text-CelesteML",children:"C\xF3mo pagar tus compras"})]})]})}),ae=()=>a("div",{className:"bg-FondoGris h-[300vh]",children:[e(X,{slides:D}),e(Y,{}),a("div",{className:"w-4/5 mx-auto",children:[e(C,{}),e(W,{}),e(Z,{})]}),e(ee,{})]}),te=()=>{const t=M();return console.log(t),e("div",{className:"h-screen flex justify-center",children:e("h1",{className:"text-gray-600 text-2xl pt-64",children:"La p\xE1gina no existe."})})},se=()=>a(A,{children:[a("p",{className:"my-4",children:[e("span",{className:"font-semibold",children:"Tambi\xE9n puede interesarte:"})," monitor 22 - monitor gigabyte - monitores pc - monitor led 19"]}),a("div",{className:"flex justify-between",children:[a("div",{className:"flex space-x-6",children:[e("p",{children:"Volver al listado"}),e("p",{className:"text-CelesteML",children:"Computaci\xF3n - Monitores y Accesorios - Monitores - Samsung - 24' "})]}),a("div",{className:"flex mb-4 space-x-4 text-CelesteML text-[16px]",children:[e("p",{children:"Compartir"}),e("p",{children:"Vender uno igual"})]})]})]}),re=({prod:t})=>{const[s,i]=m.exports.useState(!1);return a("div",{className:"p-4 space-y-2",children:[a("div",{className:"flex justify-between",children:[e("p",{className:"text-gray-500 my-auto",children:"Nuevo | 30349 vendidos"}),e("button",{onClick:()=>{i(s===!1)},children:s?e(P,{className:"text-CelesteML text-3xl"}):e(O,{className:"text-CelesteML text-3xl"})})]}),e("h2",{className:"font-semibold text-2xl leading-tight",children:t.titulo}),a("div",{className:"flex",children:[a("div",{className:"flex text-CelesteML my-auto",children:[e(x,{}),e(x,{}),e(x,{}),e(x,{}),e(x,{})]}),e("p",{className:"text-gray-500 ml-6",children:" 2429 opiniones"})]}),a("div",{className:"py-2",children:[a("h3",{className:"text-4xl",children:["$ ",t.precio]}),a("p",{children:["en ",a("span",{className:"text-green-600 font-semibold text-xl",children:["6x $ ",t.precio/6," sin inter\xE9s"]})]}),e("p",{className:"text-CelesteML",children:"Ver los medios de pago"})]}),e("p",{className:"font-semibold text-sm",children:"Lo que ten\xE9s que saber de este producto"}),a("ul",{className:"list-disc ml-4 text-gray-500",children:[e("li",{children:'Pantalla led de 24"'}),e("li",{children:"Tiene una resoluci\xF3n de 1920px-1080px"}),e("li",{children:"Relaci\xF3n de aspecto de 16.9"}),e("li",{children:"Panel IPS"}),e("li",{children:"Su brillo es de 250cd/m"}),e("li",{children:"Tipos de conexi\xF3n: D-Sub, HDMI, 1.4"})]}),e("p",{className:"text-CelesteML",children:"Ver Caracter\xEDsticas"}),e("p",{children:"Opciones de compra"}),e("p",{className:"text-CelesteML",children:"27 productos nuevos desde $29.999"})]})},ie=()=>a("div",{children:[e("h2",{className:"my-6 text-2xl",children:'Caracter\xEDsticas de Samsung T24T35 24"'}),a("div",{className:"grid grid-cols-2 space-y-4 px-4",children:[a("div",{className:"flex space-x-6 text-lg items-center",children:[e(u,{}),a("p",{children:["Tama\xF1o de la pantalla: ",e("span",{className:"font-semibold",children:'24"'})]})]}),a("div",{className:"flex space-x-6 text-lg items-center",children:[e(u,{}),a("p",{children:["Tama\xF1o de la pantalla: ",e("span",{className:"font-semibold",children:'24"'})]})]}),a("div",{className:"flex space-x-6 text-lg items-center",children:[e(u,{}),a("p",{children:["Tama\xF1o de la pantalla: ",e("span",{className:"font-semibold",children:'24"'})]})]}),a("div",{className:"flex space-x-6 text-lg items-center",children:[e(u,{}),a("p",{children:["Tama\xF1o de la pantalla: ",e("span",{className:"font-semibold",children:'24"'})]})]})]}),a("button",{className:"flex my-6 items-center text-CelesteML text-lg",children:["Ver m\xE1s caracter\xEDsticas ",e(g,{})," "]})]}),le=()=>a("div",{className:"my-12",children:[a("h2",{className:"my-6 text-2xl text-gray-500",children:["Ofertas",e("button",{className:"text-CelesteML text-[18px] ml-4",children:"Ver m\xE1s"})]}),e("div",{className:"grid grid-cols-3 space-x-4",children:p.map((t,s)=>e(w,{producto:t},s))})]}),ce=({prod:t})=>a("div",{children:[e("h2",{className:"my-6 text-2xl",children:"Desripci\xF3n"}),a("p",{className:"text-gray-700 text-xl",children:["Samsung est\xE1 fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa l\xEDder en la industria tecnol\xF3gica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendr\xE1s y disfrutar\xE1s de una gran experiencia visual en todo momento.",e("br",{}),e("br",{})," Un monitor a tu medida Con tu pantalla LED no solo ahorr\xE1s energ\xEDa, ya que su consumo es bajo, sino que vas a ver colores n\xEDtidos y definidos en tus pel\xEDculas o series favoritas.",e("br",{}),e("br",{}),' Una experiencia visual de calidad Este monitor de 24" te va a resultar c\xF3modo para estudiar, trabajar o ver una pel\xEDcula en tus tiempos de ocio. Asimismo, su resoluci\xF3n de 1920 x 1080 te permite disfrutar de momentos \xFAnicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 4 ms lo hace ideal para gamers y cin\xE9filos porque es capaz de mostrar im\xE1genes en movimiento sin halos o bordes borrosos.']})]}),oe=({prod:t})=>(m.exports.useState({}),a("div",{className:"grid grid-cols-9",children:[a("div",{className:"space-y-2",children:[e("img",{src:t.imagen,className:" w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML"}),e("img",{src:t.imagen,className:" w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML"}),e("img",{src:t.imagen,className:" w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML"}),e("img",{src:t.imagen,className:" w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML"}),e("img",{src:t.imagen,className:" w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML"}),e("img",{src:t.imagen,className:" w-[4rem] h-[4rem] border-[1px] border-gray-300 p-[2px] object-contain rounded-lg hover:border-CelesteML"})]}),e("div",{className:"col-span-4 ",children:e("img",{src:t.imagen,className:"w-full  object-contain h-[50vh]"})}),e("div",{className:"col-span-4",children:e(re,{prod:t})}),a("div",{className:"col-span-9 p-6",children:[e("hr",{className:" mt-4 h-0"}),e(le,{}),e("hr",{className:" mt-4 h-0"}),e(ie,{}),e("hr",{className:" mt-4 h-0"}),e(ce,{prod:t})]})]})),ne=({prod:t,agregarCarrito:s})=>{console.log(t);const{id:i,titulo:d,precio:r,imagen:l,descripcion:n}=t,[c,b]=m.exports.useState(1);return a("div",{className:"p-6 border-[1px] border-gray-200 rounded-lg space-y-4",children:[a("div",{className:"flex text-green-500 text-lg ",children:[e(T,{className:"text-2xl mr-3"}),a("div",{children:[e("div",{className:"flex items-center",children:a("p",{children:["Llega gratis ",e("span",{className:"font-bold",children:"ma\xF1ana"})]})}),a("div",{className:"flex text-CelesteML items-center",children:[e(E,{className:"mr-2"}),e("p",{className:"text-[16px]",children:"Enviar a Met\xE1n 4072"})]})]})]}),a("div",{className:"flex text-green-500 text-lg ",children:[e(k,{className:"text-4xl mr-3"}),a("div",{children:[e("div",{className:"flex",children:a("p",{children:["Retir\xE1 gratis"," ",e("span",{className:"font-bold",children:"a partir del lunes "}),"en correos y otros puntos"]})}),e("div",{className:"flex text-CelesteML",children:e("p",{className:"text-[16px]",children:"Ver en mapa"})})]})]}),a("div",{children:[a("p",{children:["Vendido por ",e("span",{className:"text-CelesteML",children:"TIENDA-LIDER"})]}),e("p",{children:"101.815 ventas"}),e("p",{className:"text-[13px] text-gray-400",children:"Hace Factura A"})]}),e("p",{className:"font-semibold",children:"Stock disponible"}),a("form",{onSubmit:v=>{if(v.preventDefault(),c<1){alert("Cantidad incorrecta");return}s({id:i,imagen:l,precio:r,titulo:d,descripcion:n,cantidad:c})},children:[a("div",{className:"flex items-center mb-8",children:[a("p",{children:["Cantidad:",a("select",{className:"font-semibold border ml-4",value:c,onChange:v=>b(parseInt(v.target.value)),children:[e("option",{value:"1",children:"1 unidad"}),e("option",{value:"2",children:"2 unidades"}),e("option",{value:"3",children:"3 unidades"}),e("option",{value:"4",children:"4 unidades"})]})]})," "]}),a("div",{children:[e("a",{href:"/carrito",children:e("p",{className:"w-full bg-CelesteML p-3 rounded-lg text-white font-semibold text-lg mb-2 cursor-pointer text-center hover:bg-blue-400 ease-in transition-colors",children:"Comprar ahora"})}),e("input",{type:"submit",value:"Agregar al carrito",className:"w-full bg-blue-100 p-3 rounded-lg text-CelesteML font-semibold text-lg mb-2 cursor-pointer hover:bg-blue-200 ease-in transition-colors"})]})]}),a("div",{className:"flex text-gray-500 ",children:[e(I,{className:"mr-3 text-xl"}),a("p",{children:[e("span",{className:"text-CelesteML",children:"Devoluci\xF3n gratis."})," Ten\xE9s 30 d\xEDas desde que lo recib\xEDs."]})]}),a("div",{className:"flex text-gray-500 ",children:[e(Q,{className:"mr-3 text-4xl"}),a("p",{children:[e("span",{className:"text-CelesteML",children:"Compra protegida."})," Recib\xED el producto que esperabas o te devolvemos tu dinero."]})]}),a("div",{className:"flex text-gray-500 ",children:[e(q,{className:"mr-3 text-xl"}),a("p",{children:[e("span",{className:"text-CelesteML",children:"Mercado Puntos."})," Sum\xE1s 393 puntos."]})]})]})},de=()=>a("div",{className:"p-6 border-[1px] border-gray-200 rounded-lg space-y-4",children:[e("p",{className:"text-lg",children:"Informaci\xF3n sobre el vendedor"}),a("div",{className:"flex text-lg items-center",children:[e(E,{className:"text-2xl mr-3"}),a("div",{children:[e("p",{children:"Ubicaci\xF3n"}),e("p",{className:"text-gray-600 text-[16px]",children:"Boedo, Capital Federal."})]})]}),a("div",{className:"flex text-lg items-center text-green-600",children:[e(V,{className:"text-2xl mr-3"}),a("div",{children:[e("p",{className:"font-semibold",children:"MercadoL\xEDder Platinum"}),e("p",{className:"text-gray-600 text-[16px]",children:"\xA1Es uno de los mejores del sitio!"})]})]}),a("div",{className:"grid grid-cols-5 h-4",children:[e("div",{className:"w-full bg-red-600 opacity-30"}),e("div",{className:"w-full bg-orange-400 opacity-30"}),e("div",{className:"w-full bg-yellow-300 opacity-30"}),e("div",{className:"w-full bg-lime-500 opacity-30"}),e("div",{className:"w-full bg-green-600"})]}),a("div",{className:"grid grid-cols-3 py-2 text-center ",children:[a("div",{children:[e("p",{className:"h-12 text-2xl",children:"877"}),e("p",{className:"text-[11px] py-1",children:"Ventas en los \xFAltimos 60 d\xEDas"})]}),a("div",{children:[e(_,{className:"mx-auto h-12 text-2xl text-green-600"}),e("p",{className:"text-[11px] py-1",children:"Brinda buena atenci\xF3n"})]}),a("div",{children:[e(_,{className:"mx-auto h-12 text-2xl text-green-600"}),e("p",{className:"text-[11px] py-1",children:"Despacha sus productos a tiempo"})]})]})]}),me=()=>a("div",{className:"p-6 border-[1px] border-gray-200 rounded-lg space-y-4 text-gray-700 text-lg",children:[e("p",{className:"text-xl",children:"Medios de pago"}),a("div",{className:"bg-green-600 rounded-md py-2 px-6 flex text-white text-[14px]",children:[e(R,{className:"text-2xl mr-3"}),a("p",{children:["\xA1Pag\xE1 en ",e("span",{className:"font-semibold",children:"hasta 12 cuotas sin inter\xE9s!"})]})]}),e("p",{children:"Hasta 12 cuotas sin tarjeta"}),e("img",{src:o.mediospago1,alt:"Mercado Cr\xE9dito"}),e("p",{children:"Tarjetas de cr\xE9dito"}),a("div",{className:"flex space-x-4",children:[e("img",{src:o.mediospago2,alt:"Visa"}),e("img",{src:o.mediospago3,alt:"American Express"}),e("img",{src:o.mediospago4,alt:"Naranja"}),e("img",{src:o.mediospago5,alt:"Master Card"})]}),e("p",{children:"Tarjetas de d\xE9bito"}),a("div",{className:"flex space-x-4",children:[e("img",{src:o.mediospago2,alt:"Visa"}),e("img",{src:o.mediospago5,alt:"Master Card"})]}),e("p",{children:"Efectivo"}),a("div",{className:"flex space-x-4",children:[e("img",{src:o.mediospago6,alt:"Pago F\xE1cil"}),e("img",{src:o.mediospago7,alt:"RapiPago"})]}),e("button",{className:"text-CelesteML",children:"Conoc\xE9 otros medios de pago"})]}),pe=({prod:t,agregarCarrito:s})=>a("div",{className:"space-y-4",children:[e(ne,{agregarCarrito:s,prod:t}),e(de,{}),e(me,{})]}),he=()=>{const t=[{titulo:"Costo y tiempo de env\xEDo"},{titulo:"Devoluciones gratis"},{titulo:"Medios de pago y promociones"},{titulo:"Garant\xEDa"},{titulo:"Cuotas sin tarjeta"}],s=[{pregunta:"Tiene luz LED?",respuesta:"Si, tiene luz LED en los bordes exteriores."},{pregunta:"Tiene microfono desmontable?",respuesta:"No tiene microfono"},{pregunta:"Me recomendar\xEDa este producto para un ni\xF1o de 8 a\xF1os?",respuesta:"El producto es muy resistente a golpes gracias a su protector de silicona. Es de f\xE1cil uso y configuraci\xF3n para ni\xF1os. La bater\xEDa tiene una autonom\xEDa de 10hs. El producto es altamente recomendable! "}];return a("div",{className:"p-4",children:[e("h2",{className:"my-6 text-2xl",children:"Preguntas y respuestas"}),a("div",{children:[e("p",{className:"text-lg font-semibold",children:"\xBFQu\xE9 quer\xE9s saber?"}),e("div",{className:"flex space-x-6 my-6",children:t.map((i,d)=>e("div",{className:"bg-blue-100 text-CelesteML font-semibold p-2 rounded-lg w-full text-center ",children:e("h2",{children:i.titulo})}))}),e("p",{className:"text-lg font-semibold",children:"Busc\xE1 lo que quer\xE9s saber"}),a("div",{className:"h-12 bg-white rounded-lg  grid grid-cols-10 w-full overflow-hidden border border-gray-300 my-6 ",children:[e("input",{id:"consultas",type:"text",placeholder:"Escrib\xED una pregunta o palabra clave...",className:" shadow-gray-400 py-2 px-4 placeholder-gray-300 col-span-9 h-full"}),e(L,{className:"h-full text-gray-300 text-center w-full p-2 col-span-1 bg-CelesteML "})]}),e("p",{className:"text-lg font-semibold",children:"\xDAltimas realizadas"}),e("div",{children:s.map((i,d)=>a("div",{className:"text-lg my-6 ",children:[e("p",{children:i.pregunta}),a("div",{className:"flex text-gray-400  mt-2",children:[e(B,{}),a("div",{className:"px-2",children:[e("p",{children:i.respuesta}),e("p",{className:"text-md",children:"Respondido por Ignacio Kang"})]})]})]},d))})]})]})},xe=({prod:t,agregarCarrito:s})=>a("div",{className:"bg-white p-4",children:[a("div",{className:"grid grid-cols-7",children:[e("div",{className:"col-span-5",children:e(oe,{prod:t})}),e("div",{className:"col-span-2",children:e(pe,{prod:t,agregarCarrito:s})})]}),e("hr",{className:" mt-4 h-0"}),e("div",{className:"grid grid-cols-7",children:e("div",{className:"col-span-5",children:e(he,{})})})]}),ue=({agregarCarrito:t})=>{const s=M();console.log(s);const[i,d]=m.exports.useState({});return m.exports.useEffect(()=>{for(let r=0;r<p.length;r++)s.id==p[r].id&&(console.log(s.id),console.log(p[r]),d(p[r]));console.log(i)},[s]),a("div",{className:"w-4/5 mx-auto",children:[e(se,{}),e(xe,{prod:i,agregarCarrito:t}),e(C,{})]})},ge=[{id:1,titulo:"Categorias",path:"./categorias",cName:"nav-item"},{id:2,titulo:"Ofertas",path:"./ofertas",cName:"nav-item"},{id:3,titulo:"Historial",path:"./historial",cName:"nav-item"},{id:4,titulo:"Supermercado",path:"./supermercado",cName:"nav-item"},{id:5,titulo:"Moda",path:"./moda",cName:"nav-item"},{id:6,titulo:"Vender",path:"./vender",cName:"nav-item"},{id:7,titulo:"Ayuda",path:"./ayuda",cName:"nav-item"}],Ne=[{id:1,titulo:"Vehiculos",path:"./vehiculos",cName:"submenu-item"},{id:2,titulo:"Inmuebles",path:"./inmuebles",cName:"submenu-item"},{id:3,titulo:"Tecnolog\xEDa",path:"./tecnologia",cName:"submenu-item"}],be=({setDropdown:t})=>e("ul",{className:"absolute bg-stone-700 text-white font-semibold w-64 space-y-4 py-8 z-40",onClick:()=>t(!1),children:Ne.map(s=>e("li",{className:"hover:bg-CelesteML w-full pl-8 h-10 flex-col pt-2 ",children:e(h,{to:s.path,children:s.titulo})},s.id))}),fe=()=>{const[t,s]=m.exports.useState(!1);return e("div",{className:"text-gray-600 font-thin h-full pt-2",children:e("ul",{className:"flex space-x-6 w-full ",children:ge.map(i=>i.titulo=="Categorias"?a("li",{className:"",onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1)},children:[i.titulo,t&&e(be,{setDropdown:s})]},i.id):e("li",{children:i.titulo},i.id))})})},ve=({producto:t,actualizarCantidad:s,eliminarProducto:i})=>{const d=t.precio*t.cantidad;return a("div",{className:"flex justify-between",children:[a("div",{className:"flex space-x-6 w-3/5",children:[e("img",{src:t.imagen,alt:"Imagen producto",className:"w-16 h-16 object-contain border-2 p-2 bg-white"}),a("div",{className:"space-y-4 truncate",children:[e("p",{className:"text-2xl font-semibold truncate",children:t.titulo}),a("p",{className:"font-thin text-lg",children:["Color: Negro ",e("span",{className:"text-CelesteML",children:"Modificar"})]}),e("p",{className:"text-green-600",children:"Env\xEDo gratis"}),a("ul",{className:"flex text-CelesteML justify-between",children:[e("li",{children:e("button",{type:"button",onClick:()=>i(t.id),children:"Eliminar"})}),e("li",{children:"M\xE1s productos del vendedor"}),e("li",{children:"Comprar ahora"}),e("li",{children:"Guardar para despu\xE9s"})]})]})]}),a("div",{className:"flex items-center mb-8",children:[a("p",{children:["Cantidad:",a("select",{className:"font-semibold border ml-4",value:t.cantidad,onChange:r=>s({cantidad:r.target.value,id:t.id}),children:[e("option",{value:"1",children:"1 unidad"}),e("option",{value:"2",children:"2 unidades"}),e("option",{value:"3",children:"3 unidades"}),e("option",{value:"4",children:"4 unidades"})]})]})," "]}),e("div",{children:a("p",{className:"text-3xl",children:["$",d]})})]})},ye=({carro:t,setCarro:s,actualizarCantidad:i,eliminarProducto:d})=>{const r=()=>{s([])},[l,n]=m.exports.useState(0);return m.exports.useEffect(()=>{const c=t.reduce((b,f)=>b+f.cantidad*f.precio,0);n(c)},[t]),a("div",{className:"w-4/5 mx-auto ",children:[a("div",{className:"bg-white my-8 rounded-lg overflow-hidden shadow-md shadow-gray-300 border-0 p-24",children:[e("p",{className:"text-xl font-semibold px-12 underline underline-offset-[1.7rem]",children:"Carrito"}),e("hr",{className:"mt-6 mb-12"}),t.length===0?a("div",{className:"text-center text-lg text-gray-400 space-y-4",children:[e("h2",{className:"text-3xl text-black",children:"Tu carrito est\xE1 vac\xEDo"}),e("p",{children:"\xBFNo sab\xE9s qu\xE9 comprar? \xA1Miles de productos te esperan!"})]}):a("div",{children:[t.map(c=>a("div",{children:[e(ve,{producto:c,actualizarCantidad:i,eliminarProducto:d},c.id),e("hr",{className:"my-12"})]})),a("div",{className:"flex flex-col items-end",children:[a("p",{className:"text-CelesteML text-xl flex items-center mb-6 ",children:["Env\xEDo a Met\xE1n 4070, Boedo",e(g,{className:"ml-2"})," ",e("span",{className:"text-green-600 text-2xl font-normal ml-24",children:"Gratis"})]}),a("p",{className:"text-3xl space-x-12 ",children:["Total con env\xEDo ",e("span",{className:"ml-24",children:l})]}),e("button",{className:"w-64 bg-CelesteML p-3 rounded-lg text-white font-semibold text-lg mt-16",onClick:r,children:"Vaciar carrito"})]})]})]}),e(C,{})]})},Ee=({carro:t})=>e("div",{className:"bg-Amarillo h-[110px] py-4  text-gray-700 border-b-[1px] border-gray-300 ",children:a("div",{className:"w-4/5 mx-auto grid grid-rows-2",children:[a("div",{className:"flex h-[36px] justify-between",children:[e(h,{to:"/",children:e("img",{src:o.logo,alt:"Logo MercadoLibre",className:"h-full w-[140px]"})}),a("div",{className:"h-full bg-white rounded-sm shadow-md mx-12 grid grid-cols-10 w-1/2 ",children:[e("input",{id:"buscador",type:"text",placeholder:"Buscar productos, marcas y m\xE1s...",className:" shadow-gray-400 py-2 px-4 placeholder-gray-300 col-span-9 h-full"}),e(L,{className:"h-full text-gray-500 text-center w-full p-2 col-span-1 bg-white text-md"})]}),e("div",{children:e(h,{to:"/producto",children:e("img",{src:o.disney,alt:"DisneyPlus",className:"h-[120%] w-[380px]"})})})]}),a("div",{className:"flex items-middle h-[36px] mt-2 justify-between",children:[a("div",{className:"flex w-[140px] items-center",children:[e(E,{className:"text-3xl font-thin"}),a("div",{className:"ml-1 -space-y-1",children:[e("p",{className:"text-[12px] font-thin",children:"Enviar a Ignacio"}),e("p",{className:"text-[14px]",children:"Met\xE1n 4070"})]})]}),e("div",{className:"w-1/2 mx-12",children:e(fe,{})}),a("ul",{className:"flex space-x-3 items-center w-[380px] text-md justify-around",children:[a("li",{className:"flex items-center",children:[" ",e("img",{src:o.perfil,alt:"Foto perfil",className:"h-6 rounded-full mr-2"})," ","Ignacio ",e(g,{})]}),e("li",{clas:!0,children:"Mis compras"}),a("li",{className:"flex items-center",children:["Favoritos ",e(g,{})]}),e("li",{className:"text-xl",children:e(z,{})}),e("li",{className:"text-xl",children:e(h,{to:"/carrito",children:a("div",{className:"flex relative",children:[e(G,{}),t.length>0?e("span",{className:"bg-red-500 h-2 w-2 rounded-full absolute top-0 right-0",children:" "}):""]})})})]})]})]})}),we=()=>e("div",{className:"bg-white h-[110px] py-4  text-gray-700 border-t-[1px] border-gray-300 ",children:a("div",{className:"w-4/5 mx-auto text-sm text-gray-500",children:[a("ul",{className:"flex space-x-6 text-sm justify-between text-black mb-2",children:[e("li",{children:"Trabaj\xE1 con nosotros"}),e("li",{children:"T\xE9rminos y condiciones"}),e("li",{children:"C\xF3mo cuidamos tu privacidad"}),e("li",{children:"Informaci\xF3n al usuario financiero"}),e("li",{children:"Ayuda"}),e("li",{children:"Defensa del Consumidor"}),e("li",{children:"Informaci\xF3n sobre seguros"})]}),e("p",{children:"Ignacio Kang - Front End Developer"}),e("p",{children:"ignaciokang10@gmail.com"})]})}),Ce=()=>a("div",{className:"fixed bottom-10 left-10 bg-white  p-4 z-50 rounded-lg border shadow-md",children:[e("p",{children:"Este sitio web fue creado por Ignacio Kang con el \xFAnico fin de demostrar sus habilidades como desarrollador FullStack."}),e("p",{children:"Ninguno de los productos es real. MercadoLibre \xA9 no est\xE1 relacionado al proyecto bajo ning\xFAn punto de vista."})]});function Me(){const[t,s]=m.exports.useState([]);return m.exports.useEffect(()=>{var n;const l=(n=JSON.parse(localStorage.getItem("carro")))!=null?n:[];s(l)},[]),m.exports.useEffect(()=>{localStorage.setItem("carro",JSON.stringify(t))},[t]),e("div",{className:"bg-FondoGris",children:a(H,{children:[e(Ee,{carro:t}),e(Ce,{}),a(U,{children:[e(N,{path:"/",element:e(ae,{})}),e(N,{path:"*",element:e(te,{})}),e(N,{path:"/producto/:id",element:e(ue,{agregarCarrito:l=>{if(t.some(n=>n.id===l.id)){const n=t.map(c=>(c.id===l.id&&(c.cantidad=l.cantidad),c));s(n)}else s([...t,l])}})}),e(N,{path:"carrito",element:e(ye,{carro:t,setCarro:s,actualizarCantidad:l=>{const n=t.map(c=>(c.id===l.id&&(c.cantidad=l.cantidad),c));s(n)},eliminarProducto:l=>{const n=t.filter(c=>c.id!==l);s(n)}})})]}),e(we,{})]})})}$.render(e(K.StrictMode,{children:e(Me,{})}),document.getElementById("root"));