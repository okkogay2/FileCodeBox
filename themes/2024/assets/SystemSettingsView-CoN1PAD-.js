import{d as B,r as m,u as M,a as c,b as y,e,n as a,g as l,l as n,v as d,m as x,F as w,p as _,t as b,k as h,x as F,y as k,M as A}from"./index-bCMcMUDp.js";const z={class:"p-6 h-screen overflow-y-auto custom-scrollbar"},E={class:"space-y-4"},T={class:"grid grid-cols-1 gap-6"},W={class:"space-y-2"},K={class:"space-y-2"},I={class:"space-y-2"},j={class:"relative"},G={class:"space-y-2"},N={class:"space-y-2"},R=["value"],L={class:"space-y-2"},$={class:"grid grid-cols-1 gap-6 mt-8"},P={class:"space-y-2"},H={class:"space-y-2"},q={class:"space-y-4"},J={class:"space-y-2"},O={class:"space-y-4"},Q={class:"space-y-2"},X={key:0,class:"space-y-2"},Y={class:"flex items-center"},Z=["aria-checked"],ee={key:1,class:"space-y-4"},oe={class:"space-y-2"},re={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},te={class:"space-y-2"},ae={class:"space-y-2"},se={key:2,class:"space-y-4"},le={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ne={class:"space-y-2"},de={class:"space-y-2"},ie={class:"space-y-2"},ue={class:"space-y-2"},ge={class:"space-y-2"},ce={class:"space-y-2"},ye={class:"space-y-2"},be={class:"space-y-2"},pe={class:"flex items-center"},ve=["aria-checked"],me={class:"mt-8"},xe={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},he={class:"space-y-2"},fe={class:"flex items-center space-x-2"},we={class:"space-y-2"},_e={class:"flex items-center space-x-2"},ke={class:"space-y-2"},Ue={class:"flex items-center space-x-2"},Se={class:"space-y-2"},Ve={class:"flex flex-wrap gap-3"},Ce=["value"],De={class:"space-y-2"},Be={class:"flex items-center space-x-2"},Me={class:"space-y-2"},Fe={class:"flex items-center"},Ae=["aria-checked"],ze={class:"mt-8"},Ee={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Te={class:"space-y-2"},We={class:"flex items-center space-x-2"},Ke={class:"space-y-2"},Ie={class:"flex items-center space-x-2"},Ne=B({__name:"SystemSettingsView",setup(je){const s=F("isDarkMode"),t=m({name:"",description:"",file_storage:"",webdav_url:"",webdav_username:"",webdav_password:"",themesChoices:[],expireStyle:[],admin_token:"",robotsText:"",keywords:"",notify_title:"",storage_path:"",notify_content:"",openUpload:1,uploadSize:1,enableChunk:0,uploadMinute:1,max_save_seconds:0,opacity:.9,s3_access_key_id:"",background:"",showAdminAddr:0,page_explain:"",s3_secret_access_key:"",aws_session_token:"",s3_signature_version:"",s3_region_name:"",s3_bucket_name:"",s3_endpoint_url:"",s3_hostname:"",uploadCount:1,errorMinute:1,errorCount:1,s3_proxy:0,themesSelect:""}),p=m(1),v=m("MB"),u=m(1),g=m("天"),U=(i,o)=>i*{秒:1,分:60,时:3600,天:86400}[o],S=()=>{k({url:"/admin/config/get",method:"get"}).then(i=>{t.value=i.detail;let o=t.value.uploadSize;o>=1024*1024*1024?(p.value=Math.round(o/(1024*1024*1024)),v.value="GB"):o>=1024*1024?(p.value=Math.round(o/(1024*1024)),v.value="MB"):(p.value=Math.round(o/1024),v.value="KB");let r=t.value.max_save_seconds;r===0?(u.value=7,g.value="天"):r%86400===0&&r>=86400?(u.value=r/86400,g.value="天"):r%3600===0&&r>=3600?(u.value=r/3600,g.value="时"):r%60===0&&r>=60?(u.value=r/60,g.value="分"):(u.value=r,g.value="秒")})},f=M(),V=(i,o)=>i*{KB:1024,MB:1048576,GB:1073741824}[o],C=()=>{const i={...t.value};i.uploadSize=V(p.value,v.value),u.value===0?i.max_save_seconds=7*86400:i.max_save_seconds=U(u.value,g.value),k({url:"/admin/config/update",method:"patch",data:i}).then(o=>{o.code==200?f.showAlert("保存成功","success"):f.showAlert(o.message,"error")})};return S(),(i,o)=>(c(),y("div",z,[e("h2",{class:a(["text-2xl font-bold mb-6",[l(s)?"text-white":"text-gray-800"]])}," 系统设置 ",2),e("div",{class:a(["space-y-6 rounded-lg shadow-md p-6",[l(s)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[e("section",E,[e("h3",{class:a(["text-lg font-medium mb-4",[l(s)?"text-white":"text-gray-800"]])}," 基本设置 ",2),e("div",T,[e("div",W,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 网站名称 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t.value.name=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.name]])]),e("div",K,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 网站描述 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=r=>t.value.description=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.description]])]),e("div",I,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 管理员密码 ",2),e("div",j,[n(e("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=r=>t.value.admin_token=r),placeholder:"留空则不修改密码",class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.admin_token]]),e("div",{class:a(["absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-400",[l(s)?"text-gray-500":"text-gray-400"]])},o[32]||(o[32]=[e("span",{class:"text-xs"},"留空则不修改",-1)]),2)])]),e("div",G,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 关键词 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=r=>t.value.keywords=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.keywords]])]),e("div",N,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 主题选择 ",2),n(e("select",{"onUpdate:modelValue":o[4]||(o[4]=r=>t.value.themesSelect=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border appearance-none bg-no-repeat bg-right focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none cursor-pointer",[l(s)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]]),style:{"background-image":"url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%208l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')"}},[(c(!0),y(w,null,_(t.value.themesChoices,r=>(c(),y("option",{value:r.key,key:r.key},b(r.name)+" (by "+b(r.author)+" V"+b(r.version)+") ",9,R))),128))],2),[[x,t.value.themesSelect]])]),e("div",L,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," Robots.txt ",2),n(e("textarea",{"onUpdate:modelValue":o[5]||(o[5]=r=>t.value.robotsText=r),rows:"3",class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.robotsText]])])]),e("div",$,[e("div",P,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 通知标题 ",2),n(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=r=>t.value.notify_title=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.notify_title]])]),e("div",H,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 通知内容 ",2),n(e("textarea",{"onUpdate:modelValue":o[7]||(o[7]=r=>t.value.notify_content=r),rows:"3",class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.notify_content]])])]),e("div",q,[e("h3",{class:a(["text-lg font-medium mb-4",[l(s)?"text-white":"text-gray-800"]])}," 存储设置 ",2),e("div",J,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 存储路径 ",2),n(e("input",{type:"text",placeholder:"留空则使用默认路径，可不填写","onUpdate:modelValue":o[8]||(o[8]=r=>t.value.storage_path=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.storage_path]])]),e("div",O,[e("div",Q,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 存储方式 ",2),n(e("select",{"onUpdate:modelValue":o[9]||(o[9]=r=>t.value.file_storage=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border appearance-none bg-no-repeat bg-right focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none cursor-pointer",[l(s)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]]),style:{"background-image":"url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%208l3%203%203-3%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')"}},o[33]||(o[33]=[e("option",{value:"local"},"本地存储",-1),e("option",{value:"s3"},"S3 存储",-1),e("option",{value:"webdav"},"Webdav 存储",-1)]),2),[[x,t.value.file_storage]])]),t.value.file_storage==="local"?(c(),y("div",X,[e("label",{class:a(["block text-sm font-medium mb-2",[l(s)?"text-gray-300":"text-gray-700"]])}," 开启切片上传（实验性功能，还在开发中，目前仅本地存储可用，可能会出现未知问题） ",2),e("div",Y,[e("button",{type:"button",onClick:o[10]||(o[10]=r=>t.value.enableChunk=t.value.enableChunk===1?0:1),class:a(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[t.value.enableChunk===1?"bg-indigo-600":"bg-gray-200"]]),role:"switch","aria-checked":t.value.enableChunk===1},[e("span",{class:a(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",[t.value.enableChunk===1?"translate-x-5":"translate-x-0",l(s)&&t.value.enableChunk!==1?"bg-gray-100":"bg-white"]])},null,2)],10,Z),e("span",{class:a(["ml-3 text-sm",[l(s)?"text-gray-300":"text-gray-700"]])},b(t.value.enableChunk===1?"已开启":"已关闭"),3)])])):h("",!0),t.value.file_storage==="webdav"?(c(),y("div",ee,[e("div",oe,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," Webdav URL ",2),n(e("input",{type:"text",placeholder:"请输入 Webdav URL","onUpdate:modelValue":o[11]||(o[11]=r=>t.value.webdav_url=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.webdav_url]])]),e("div",re,[e("div",te,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," Webdav Username ",2),n(e("input",{type:"text",placeholder:"请输入 Webdav Username","onUpdate:modelValue":o[12]||(o[12]=r=>t.value.webdav_username=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.webdav_username]])]),e("div",ae,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," Webdav Password ",2),n(e("input",{type:"password",placeholder:"请输入 Webdav Password","onUpdate:modelValue":o[13]||(o[13]=r=>t.value.webdav_password=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.webdav_password]])])])])):h("",!0),t.value.file_storage==="s3"?(c(),y("div",se,[e("div",le,[e("div",ne,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," S3 AccessKeyId ",2),n(e("input",{type:"text","onUpdate:modelValue":o[14]||(o[14]=r=>t.value.s3_access_key_id=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.s3_access_key_id]])]),e("div",de,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," S3 SecretAccessKey ",2),n(e("input",{type:"password","onUpdate:modelValue":o[15]||(o[15]=r=>t.value.s3_secret_access_key=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.s3_secret_access_key]])]),e("div",ie,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," S3 BucketName ",2),n(e("input",{type:"text","onUpdate:modelValue":o[16]||(o[16]=r=>t.value.s3_bucket_name=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.s3_bucket_name]])]),e("div",ue,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," S3 EndpointUrl ",2),n(e("input",{type:"text","onUpdate:modelValue":o[17]||(o[17]=r=>t.value.s3_endpoint_url=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.s3_endpoint_url]])]),e("div",ge,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," S3 Region Name ",2),n(e("input",{type:"text","onUpdate:modelValue":o[18]||(o[18]=r=>t.value.s3_region_name=r),placeholder:"auto",class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.s3_region_name]])]),e("div",ce,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," S3 Signature Version ",2),n(e("select",{"onUpdate:modelValue":o[19]||(o[19]=r=>t.value.s3_signature_version=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[34]||(o[34]=[e("option",{value:"s3v2"},"S3v2",-1),e("option",{value:"s3v4"},"S3v4",-1)]),2),[[x,t.value.s3_signature_version]])]),e("div",ye,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," S3 Hostname ",2),n(e("input",{type:"text","onUpdate:modelValue":o[20]||(o[20]=r=>t.value.s3_hostname=r),class:a(["w-full rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.s3_hostname]])]),e("div",be,[e("label",{class:a(["block text-sm font-medium mb-2",[l(s)?"text-gray-300":"text-gray-700"]])}," 启用代理 ",2),e("div",pe,[e("button",{type:"button",onClick:o[21]||(o[21]=r=>t.value.s3_proxy=t.value.s3_proxy===1?0:1),class:a(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[t.value.s3_proxy===1?"bg-indigo-600":"bg-gray-200"]]),role:"switch","aria-checked":t.value.s3_proxy===1},[e("span",{class:a(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",[t.value.s3_proxy===1?"translate-x-5":"translate-x-0",l(s)&&t.value.s3_proxy!==1?"bg-gray-100":"bg-white"]])},null,2)],10,ve),e("span",{class:a(["ml-3 text-sm",[l(s)?"text-gray-300":"text-gray-700"]])},b(t.value.s3_proxy===1?"已开启":"已关闭"),3)])])])])):h("",!0)])]),e("div",me,[e("h3",{class:a(["text-lg font-medium mb-4",[l(s)?"text-white":"text-gray-800"]])}," 上传限制 ",2),e("div",xe,[e("div",he,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 每分钟上传限制 ",2),e("div",fe,[n(e("input",{type:"number","onUpdate:modelValue":o[22]||(o[22]=r=>t.value.uploadMinute=r),class:a(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.uploadMinute]]),e("span",{class:a([l(s)?"text-gray-300":"text-gray-700"])},"分钟",2)])]),e("div",we,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 上传数量限制 ",2),e("div",_e,[n(e("input",{type:"number","onUpdate:modelValue":o[23]||(o[23]=r=>t.value.uploadCount=r),class:a(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.uploadCount]]),e("span",{class:a([l(s)?"text-gray-300":"text-gray-700"])},"个文件",2)])]),e("div",ke,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 文件大小限制 ",2),e("div",Ue,[n(e("input",{type:"number","onUpdate:modelValue":o[24]||(o[24]=r=>p.value=r),class:a(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,p.value]]),n(e("select",{"onUpdate:modelValue":o[25]||(o[25]=r=>v.value=r),class:a(["rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[35]||(o[35]=[e("option",{value:"KB"},"KB",-1),e("option",{value:"MB"},"MB",-1),e("option",{value:"GB"},"GB",-1)]),2),[[x,v.value]])])]),e("div",Se,[e("label",{class:a(["block text-sm font-medium mb-2",[l(s)?"text-gray-300":"text-gray-700"]])}," 过期方式 ",2),e("div",Ve,[(c(),y(w,null,_(["day","hour","minute","forever","count"],r=>e("label",{key:r,class:"relative inline-flex items-center group cursor-pointer"},[n(e("input",{type:"checkbox",value:r,"onUpdate:modelValue":o[26]||(o[26]=D=>t.value.expireStyle=D),class:"peer sr-only"},null,8,Ce),[[A,t.value.expireStyle]]),e("div",{class:a(["px-4 py-2 rounded-full border-2 transition-all duration-200 select-none",[t.value.expireStyle.includes(r)?(l(s),"bg-indigo-600 border-indigo-600 text-white"):l(s)?"bg-gray-700 border-gray-600 text-gray-300 hover:border-indigo-500":"bg-white border-gray-300 text-gray-700 hover:border-indigo-500"]])},b({day:"按天",hour:"按小时",minute:"按分钟",forever:"永久",count:"按次数"}[r]),3)])),64))])]),e("div",De,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 最长保存时间 ",2),e("div",Be,[n(e("input",{type:"number","onUpdate:modelValue":o[27]||(o[27]=r=>u.value=r),class:a(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,u.value]]),n(e("select",{"onUpdate:modelValue":o[28]||(o[28]=r=>g.value=r),class:a(["rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white hover:border-gray-500":"border-gray-300 hover:border-gray-400"]])},o[36]||(o[36]=[e("option",{value:"秒"},"秒",-1),e("option",{value:"分"},"分",-1),e("option",{value:"时"},"时",-1),e("option",{value:"天"},"天",-1)]),2),[[x,g.value]])])]),e("div",Me,[e("label",{class:a(["block text-sm font-medium mb-2",[l(s)?"text-gray-300":"text-gray-700"]])}," 游客上传 ",2),e("div",Fe,[e("button",{type:"button",onClick:o[29]||(o[29]=r=>t.value.openUpload=t.value.openUpload===1?0:1),class:a(["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",[t.value.openUpload===1?"bg-indigo-600":"bg-gray-200"]]),role:"switch","aria-checked":t.value.openUpload===1},[e("span",{class:a(["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",[t.value.openUpload===1?"translate-x-5":"translate-x-0",l(s)&&t.value.openUpload!==1?"bg-gray-100":"bg-white"]])},null,2)],10,Ae),e("span",{class:a(["ml-3 text-sm",[l(s)?"text-gray-300":"text-gray-700"]])},b(t.value.openUpload===1?"已开启":"已关闭"),3)])])])]),e("div",ze,[e("h3",{class:a(["text-lg font-medium mb-4",[l(s)?"text-white":"text-gray-800"]])}," 错误限制 ",2),e("div",Ee,[e("div",Te,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 每分钟错误限制 ",2),e("div",We,[n(e("input",{type:"number","onUpdate:modelValue":o[30]||(o[30]=r=>t.value.errorMinute=r),class:a(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.errorMinute]]),e("span",{class:a([l(s)?"text-gray-300":"text-gray-700"])},"分钟",2)])]),e("div",Ke,[e("label",{class:a(["block text-sm font-medium",[l(s)?"text-gray-300":"text-gray-700"]])}," 错误次数限制 ",2),e("div",Ie,[n(e("input",{type:"number","onUpdate:modelValue":o[31]||(o[31]=r=>t.value.errorCount=r),class:a(["w-24 rounded-md shadow-sm px-4 py-2.5 transition-all duration-200 ease-in-out border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none",[l(s)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500":"border-gray-300 hover:border-gray-400 placeholder-gray-500"]])},null,2),[[d,t.value.errorCount]]),e("span",{class:a([l(s)?"text-gray-300":"text-gray-700"])},"次",2)])])])]),e("div",{class:"flex justify-end mt-8"},[e("button",{onClick:C,class:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"}," 保存设置 ")])])],2)]))}});export{Ne as default};
