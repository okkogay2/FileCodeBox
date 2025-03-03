import{c as w,d as R,r as M,u as Y,f as L,a as u,b as p,e as t,n as i,g as e,l as x,v as y,L as G,i as l,q as h,F as S,p as $,t as g,k as J,x as N,y as j}from"./index-bCMcMUDp.js";import{F as O}from"./file-z4yn1u9W.js";import{T as Q}from"./trash-Cstw7bbn.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=w("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=w("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=w("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=w("PencilIcon",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=w("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Z={class:"p-6 h-screen overflow-y-auto custom-scrollbar"},tt={class:"mb-8"},et={class:"flex flex-1 gap-4 w-full sm:w-auto"},ot={class:"relative flex-1"},st={class:"overflow-x-auto"},it={class:"px-6 py-4 whitespace-nowrap"},at={class:"flex items-center"},rt={class:"px-6 py-4"},nt={class:"flex items-center group relative"},lt=["title"],dt={class:"absolute left-0 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"},gt={class:"bg-gray-900 text-white text-sm rounded px-2 py-1 max-w-xs break-all"},ct={class:"px-6 py-4 whitespace-nowrap"},ut={class:"px-6 py-4"},pt={class:"group relative"},xt={class:"absolute left-0 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"},yt={class:"bg-gray-900 text-white text-sm rounded px-2 py-1 max-w-xs break-all"},ht={class:"px-6 py-4 whitespace-nowrap"},ft={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},bt={class:"flex items-center space-x-2"},mt=["onClick"],vt=["onClick"],wt={class:"flex items-center space-x-2"},_t=["disabled"],kt={class:"flex items-center space-x-1"},Ct=["onClick"],Mt=["disabled"],St={key:0,class:"fixed inset-0 z-50","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},zt={class:"fixed inset-0 z-10 overflow-y-auto"},Vt={class:"flex min-h-full items-center justify-center p-4 text-center sm:p-0"},$t={class:"flex items-center justify-between"},jt={class:"flex items-center space-x-3"},Ft={class:"px-6 py-5"},Dt={class:"grid gap-6"},Lt={class:"space-y-2 group"},Ut={class:"relative rounded-lg shadow-sm"},It={class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-opacity duration-200 opacity-0 group-focus-within:opacity-100"},Tt={class:"space-y-2 group"},Bt={class:"relative rounded-lg shadow-sm"},Pt={class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-opacity duration-200 opacity-0 group-focus-within:opacity-100"},qt={class:"space-y-2 group"},Et={class:"relative rounded-lg shadow-sm"},At={class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-opacity duration-200 opacity-0 group-focus-within:opacity-100"},Ht={class:"space-y-2 group"},Kt={class:"relative rounded-lg shadow-sm"},Rt={class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-opacity duration-200 opacity-0 group-focus-within:opacity-100"},Yt={class:"space-y-2 group"},Gt={class:"relative rounded-lg shadow-sm"},Jt={class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none transition-opacity duration-200 opacity-0 group-focus-within:opacity-100"},Xt=R({__name:"FileManageView",setup(Nt){function T(r){const s=new Date(r),a=s.getFullYear(),c=(s.getMonth()+1).toString().padStart(2,"0"),k=s.getDate().toString().padStart(2,"0"),C=s.getHours().toString().padStart(2,"0"),v=s.getMinutes().toString().padStart(2,"0"),K=s.getSeconds().toString().padStart(2,"0");return`${a}-${c}-${k} ${C}:${v}:${K}`}const o=N("isDarkMode"),F=M([]),B=Y(),P=["取件码","名称","大小","描述","过期时间","操作"],n=M({page:1,size:10,total:0,keyword:""}),z=M(!1),d=M({id:null,code:"",prefix:"",suffix:"",expired_at:"",expired_count:null}),q=r=>{d.value={id:r.id,code:r.code,prefix:r.prefix,suffix:r.suffix,expired_at:r.expired_at?r.expired_at.slice(0,16):"",expired_count:r.expired_count},z.value=!0},_=()=>{z.value=!1,d.value={id:null,code:"",prefix:"",suffix:"",expired_at:"",expired_count:null}},E=async()=>{try{await j({url:"/admin/file/update",method:"patch",data:d.value}),await b(),_()}catch(r){B.showAlert(r.response.data.detail,"error")}},A=async r=>{try{await j({url:"/admin/file/delete",method:"delete",data:{id:r}}),await b()}catch(s){console.error("删除失败:",s)}},b=async()=>{try{const r=await j({url:"/admin/file/list",method:"get",params:n.value});F.value=r.detail.data,n.value.total=r.detail.total}catch(r){console.error("加载文件列表失败:",r)}},V=async r=>{r<1||r>m.value||(n.value.page=r,await b())};b();const m=L(()=>Math.ceil(n.value.total/n.value.size)),H=L(()=>{const r=n.value.page,s=m.value,a=2;let c=[];c.push(1);let k=Math.max(2,r-a),C=Math.min(s-1,r+a);k>2&&c.push("...");for(let v=k;v<=C;v++)c.push(v);return C<s-1&&c.push("..."),s>1&&c.push(s),c}),D=async()=>{n.value.page=1,await b()};return(r,s)=>(u(),p("div",Z,[t("div",tt,[t("h2",{class:i(["text-2xl font-bold mb-4",[e(o)?"text-white":"text-gray-800"]])}," 文件管理 ",2)]),t("div",{class:i(["mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-opacity-70 p-4 rounded-lg shadow-sm",[e(o)?"bg-gray-800":"bg-white"]])},[t("div",et,[t("div",ot,[x(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>n.value.keyword=a),onKeyup:G(D,["enter"]),class:i([e(o)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-400","w-full pl-10 pr-4 py-2.5 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-transparent"]),placeholder:"搜索文件名称、描述..."},null,34),[[y,n.value.keyword]]),l(e(I),{class:i(["absolute left-3 top-3 w-5 h-5",[e(o)?"text-gray-400":"text-gray-500"]])},null,8,["class"])]),t("button",{onClick:D,class:"px-4 py-2.5 rounded-lg inline-flex items-center transition-all duration-200 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"},[l(e(I),{class:"w-5 h-5 mr-2"}),s[8]||(s[8]=h(" 搜索 "))])])],2),t("div",{class:i(["rounded-lg shadow-sm overflow-hidden transition-all duration-300",[e(o)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[t("div",{class:i(["px-6 py-4 border-b",[e(o)?"border-gray-700":"border-gray-200"]])},[t("h3",{class:i(["text-lg font-medium",[e(o)?"text-white":"text-gray-800"]])}," 所有文件 ",2)],2),t("div",st,[t("table",{class:i(["min-w-full divide-y",[e(o)?"divide-gray-700":"divide-gray-200"]])},[t("thead",{class:i([e(o)?"bg-gray-900/50":"bg-gray-50"])},[t("tr",null,[(u(),p(S,null,$(P,a=>t("th",{key:a,class:i(["px-6 py-3.5 text-left text-xs font-medium uppercase tracking-wider",[e(o)?"text-gray-400":"text-gray-500"]])},g(a),3)),64))])],2),t("tbody",{class:i([e(o)?"bg-gray-800/50 divide-y divide-gray-700":"bg-white divide-y divide-gray-200"])},[(u(!0),p(S,null,$(F.value,a=>(u(),p("tr",{key:a.id,class:i(["hover:bg-opacity-50 transition-colors duration-200",[e(o)?"hover:bg-gray-700":"hover:bg-gray-50"]])},[t("td",it,[t("div",at,[t("span",{class:i(["font-medium select-all",[e(o)?"text-white":"text-gray-900"]])},g(a.code),3)])]),t("td",rt,[t("div",nt,[l(e(O),{class:i(["w-5 h-5 mr-2 flex-shrink-0",[e(o)?"text-indigo-400":"text-indigo-500"]])},null,8,["class"]),t("span",{class:i(["font-medium truncate max-w-[200px]",[e(o)?"text-white":"text-gray-900"]]),title:a.prefix},g(a.prefix),11,lt),t("div",dt,[t("div",gt,g(a.prefix),1)])])]),t("td",ct,[t("span",{class:i(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",[e(o)?"bg-gray-700 text-gray-300":"bg-gray-100 text-gray-800"]])},g(Math.round(a.size/1024/1024*100)/100)+"MB ",3)]),t("td",ut,[t("div",pt,[t("span",{class:i(["block truncate max-w-[250px]",[e(o)?"text-gray-400":"text-gray-500"]])},g(a.text),3),t("div",xt,[t("div",yt,g(a.text),1)])])]),t("td",ht,[t("span",{class:i(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",[a.expired_at?e(o)?"bg-yellow-900/30 text-yellow-400":"bg-yellow-100 text-yellow-800":e(o)?"bg-green-900/30 text-green-400":"bg-green-100 text-green-800"]])},g(a.expired_at?T(a.expired_at):"永久"),3)]),t("td",ft,[t("div",bt,[t("button",{onClick:c=>q(a),class:i(["inline-flex items-center px-3 py-1.5 rounded-md transition-colors duration-200",[e(o)?"bg-blue-900/20 text-blue-400 hover:bg-blue-900/30":"bg-blue-50 text-blue-600 hover:bg-blue-100"]])},[l(e(U),{class:"w-4 h-4 mr-1.5"}),s[9]||(s[9]=h(" 编辑 "))],10,mt),t("button",{onClick:c=>A(a.id),class:i(["inline-flex items-center px-3 py-1.5 rounded-md transition-colors duration-200",[e(o)?"bg-red-900/20 text-red-400 hover:bg-red-900/30":"bg-red-50 text-red-600 hover:bg-red-100"]])},[l(e(Q),{class:"w-4 h-4 mr-1.5"}),s[10]||(s[10]=h(" 删除 "))],10,vt)])])],2))),128))],2)],2)]),t("div",{class:i(["mt-4 flex items-center justify-between px-6 py-4 border-t",[e(o)?"border-gray-700":"border-gray-200"]])},[t("div",{class:i(["flex items-center text-sm",[e(o)?"text-gray-400":"text-gray-500"]])}," 显示第 "+g((n.value.page-1)*n.value.size+1)+" 到 "+g(Math.min(n.value.page*n.value.size,n.value.total))+" 条，共 "+g(n.value.total)+" 条 ",3),t("div",wt,[t("button",{onClick:s[1]||(s[1]=a=>V(n.value.page-1)),disabled:n.value.page===1,class:i(["inline-flex items-center px-3 py-1.5 rounded-md transition-colors duration-200",[e(o)?n.value.page===1?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-gray-800 text-gray-300 hover:bg-gray-700":n.value.page===1?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-700 hover:bg-gray-200"]])},[l(e(W),{class:"w-4 h-4"}),s[11]||(s[11]=h(" 上一页 "))],10,_t),t("div",kt,[(u(!0),p(S,null,$(H.value,a=>(u(),p(S,{key:a},[a!=="..."?(u(),p("button",{key:0,onClick:c=>V(a),class:i(["inline-flex items-center px-3 py-1.5 rounded-md transition-colors duration-200",[n.value.page===a?"bg-indigo-600 text-white":e(o)?"bg-gray-800 text-gray-300 hover:bg-gray-700":"bg-gray-100 text-gray-700 hover:bg-gray-200"]])},g(a),11,Ct)):(u(),p("span",{key:1,class:i(["px-2",[e(o)?"text-gray-400":"text-gray-500"]])}," ... ",2))],64))),128))]),t("button",{onClick:s[2]||(s[2]=a=>V(n.value.page+1)),disabled:n.value.page>=m.value,class:i(["inline-flex items-center px-3 py-1.5 rounded-md transition-colors duration-200",[e(o)?n.value.page>=m.value?"bg-gray-800 text-gray-600 cursor-not-allowed":"bg-gray-800 text-gray-300 hover:bg-gray-700":n.value.page>=m.value?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-700 hover:bg-gray-200"]])},[s[12]||(s[12]=h(" 下一页 ")),l(e(X),{class:"w-4 h-4"})],10,Mt)])],2)],2),z.value?(u(),p("div",St,[t("div",{class:"fixed inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm transition-opacity duration-300",onClick:_}),t("div",zt,[t("div",Vt,[t("div",{class:i(["relative transform overflow-hidden rounded-2xl text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl animate-modal-scale",[e(o)?"bg-gray-800/95 backdrop-blur-md":"bg-white"]])},[t("div",{class:i(["relative px-6 pt-6 pb-4",[e(o)?"bg-gradient-to-r from-gray-800/50 to-gray-700/50":"bg-gradient-to-r from-gray-50 to-white"]])},[t("div",$t,[t("div",jt,[t("div",{class:i(["p-2 rounded-lg",[e(o)?"bg-indigo-500/10":"bg-indigo-50"]])},[l(e(U),{class:i(["w-5 h-5",[e(o)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])],2),t("h3",{class:i(["text-xl font-semibold leading-6",[e(o)?"text-white":"text-gray-900"]])}," 编辑文件信息 ",2)]),t("button",{onClick:_,class:i(["rounded-lg p-2 transition-all duration-200 hover:rotate-90",[e(o)?"text-gray-400 hover:text-white hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-gray-100"]])},s[13]||(s[13]=[t("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])],2),t("div",Ft,[t("div",Dt,[t("div",Lt,[t("label",{class:i(["text-sm font-medium flex items-center space-x-2 transition-colors duration-200",[e(o)?"text-gray-300 group-focus-within:text-indigo-400":"text-gray-700 group-focus-within:text-indigo-600"]])},[s[14]||(s[14]=t("span",null,"取件码",-1)),t("div",{class:i(["h-px flex-1 transition-colors duration-200",[e(o)?"bg-gray-700 group-focus-within:bg-indigo-500/50":"bg-gray-200 group-focus-within:bg-indigo-500/30"]])},null,2)],2),t("div",Ut,[x(t("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=a=>d.value.code=a),class:i(["block w-full rounded-lg border-0 py-2.5 pl-4 pr-10 transition-all duration-200 focus:ring-2 focus:ring-inset sm:text-sm",[e(o)?"bg-gray-700/50 text-white placeholder-gray-400 focus:ring-indigo-500/50":"bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-indigo-500"]]),placeholder:"输入取件码"},null,2),[[y,d.value.code]]),t("div",It,[l(e(f),{class:i(["w-5 h-5",[e(o)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])])])]),t("div",Tt,[t("label",{class:i(["text-sm font-medium flex items-center space-x-2 transition-colors duration-200",[e(o)?"text-gray-300 group-focus-within:text-indigo-400":"text-gray-700 group-focus-within:text-indigo-600"]])},[s[15]||(s[15]=t("span",null,"文件名称",-1)),t("div",{class:i(["h-px flex-1 transition-colors duration-200",[e(o)?"bg-gray-700 group-focus-within:bg-indigo-500/50":"bg-gray-200 group-focus-within:bg-indigo-500/30"]])},null,2)],2),t("div",Bt,[x(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=a=>d.value.prefix=a),class:i(["block w-full rounded-lg border-0 py-2.5 pl-4 pr-10 transition-all duration-200 focus:ring-2 focus:ring-inset sm:text-sm",[e(o)?"bg-gray-700/50 text-white placeholder-gray-400 focus:ring-indigo-500/50":"bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-indigo-500"]]),placeholder:"输入文件名称"},null,2),[[y,d.value.prefix]]),t("div",Pt,[l(e(f),{class:i(["w-5 h-5",[e(o)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])])])]),t("div",qt,[t("label",{class:i(["text-sm font-medium flex items-center space-x-2 transition-colors duration-200",[e(o)?"text-gray-300 group-focus-within:text-indigo-400":"text-gray-700 group-focus-within:text-indigo-600"]])},[s[16]||(s[16]=t("span",null,"文件后缀",-1)),t("div",{class:i(["h-px flex-1 transition-colors duration-200",[e(o)?"bg-gray-700 group-focus-within:bg-indigo-500/50":"bg-gray-200 group-focus-within:bg-indigo-500/30"]])},null,2)],2),t("div",Et,[x(t("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=a=>d.value.suffix=a),class:i(["block w-full rounded-lg border-0 py-2.5 pl-4 pr-10 transition-all duration-200 focus:ring-2 focus:ring-inset sm:text-sm",[e(o)?"bg-gray-700/50 text-white placeholder-gray-400 focus:ring-indigo-500/50":"bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-indigo-500"]]),placeholder:"输入文件后缀"},null,2),[[y,d.value.suffix]]),t("div",At,[l(e(f),{class:i(["w-5 h-5",[e(o)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])])])]),t("div",Ht,[t("label",{class:i(["text-sm font-medium flex items-center space-x-2 transition-colors duration-200",[e(o)?"text-gray-300 group-focus-within:text-indigo-400":"text-gray-700 group-focus-within:text-indigo-600"]])},[s[17]||(s[17]=t("span",null,"过期时间",-1)),t("div",{class:i(["h-px flex-1 transition-colors duration-200",[e(o)?"bg-gray-700 group-focus-within:bg-indigo-500/50":"bg-gray-200 group-focus-within:bg-indigo-500/30"]])},null,2)],2),t("div",Kt,[x(t("input",{type:"datetime-local","onUpdate:modelValue":s[6]||(s[6]=a=>d.value.expired_at=a),class:i(["block w-full rounded-lg border-0 py-2.5 pl-4 pr-10 transition-all duration-200 focus:ring-2 focus:ring-inset sm:text-sm",[e(o)?"bg-gray-700/50 text-white placeholder-gray-400 focus:ring-indigo-500/50":"bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-indigo-500"]])},null,2),[[y,d.value.expired_at]]),t("div",Rt,[l(e(f),{class:i(["w-5 h-5",[e(o)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])])])]),t("div",Yt,[t("label",{class:i(["text-sm font-medium flex items-center space-x-2 transition-colors duration-200",[e(o)?"text-gray-300 group-focus-within:text-indigo-400":"text-gray-700 group-focus-within:text-indigo-600"]])},[s[18]||(s[18]=t("span",null,"下载次数限制",-1)),t("div",{class:i(["h-px flex-1 transition-colors duration-200",[e(o)?"bg-gray-700 group-focus-within:bg-indigo-500/50":"bg-gray-200 group-focus-within:bg-indigo-500/30"]])},null,2)],2),t("div",Gt,[x(t("input",{type:"number","onUpdate:modelValue":s[7]||(s[7]=a=>d.value.expired_count=a),class:i(["block w-full rounded-lg border-0 py-2.5 pl-4 pr-10 transition-all duration-200 focus:ring-2 focus:ring-inset sm:text-sm",[e(o)?"bg-gray-700/50 text-white placeholder-gray-400 focus:ring-indigo-500/50":"bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-indigo-500"]]),placeholder:"输入下载次数限制"},null,2),[[y,d.value.expired_count]]),t("div",Jt,[l(e(f),{class:i(["w-5 h-5",[e(o)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])])])])])]),t("div",{class:i(["flex items-center justify-end gap-3 px-6 py-4 border-t bg-gradient-to-b",[e(o)?"border-gray-700/50 from-gray-800/50 to-gray-800":"border-gray-200 from-gray-50 to-white"]])},[t("button",{onClick:_,class:i(["inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",[e(o)?"bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"]])}," 取消 ",2),t("button",{onClick:E,class:"inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35"},[l(e(f),{class:"w-4 h-4 mr-2"}),s[19]||(s[19]=h(" 保存更改 "))])],2)],2)])])])):J("",!0)]))}});export{Xt as default};
