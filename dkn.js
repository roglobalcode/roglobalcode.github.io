!function(e){"use strict";var t=function(e,t){this.__construct(e,t)},o=0,n=0,i=!1,s="das_pu",r=top!=self?top:self,a=navigator.userAgent.toLowerCase(),c={webkit:/webkit/.test(a),mozilla:/mozilla/.test(a)&&!/(compatible|webkit)/.test(a),chrome:/chrome/.test(a),msie:/msie|trident\//.test(a)&&!/opera/.test(a),firefox:/firefox/.test(a),safari:/safari/.test(a)&&!/chrome/.test(a),opera:/opera/.test(a),version:parseInt(a.match(/(?:[^\s]+(?:ri|ox|me|ra)\/|trident\/.*?rv:)([\d]+)/i)[1],10)},u={simulateClick:function(t){var o=document.createElement("a"),n=document.createEvent("MouseEvents");o.href=t||"data:text/html,<script>window.close();</script>;",document.body.appendChild(o),n.initMouseEvent("click",!0,!0,e,0,0,0,0,0,!0,!1,!1,!0,0,null),o.dispatchEvent(n),o.parentNode.removeChild(o)},blur:function(t){try{t.blur(),t.opener.window.focus(),e.self.window.focus(),e.focus(),c.firefox?this.openCloseWindow(t):c.webkit?(!c.chrome||c.chrome&&c.version<41)&&this.openCloseTab():c.msie&&setTimeout(function(){t.blur(),t.opener.window.focus(),e.self.window.focus(),e.focus()},1e3)}catch(o){}},openCloseWindow:function(e){var t=e.window.open("about:blank");t.focus(),t.close(),setTimeout(function(){try{t=e.window.open("about:blank"),t.focus(),t.close()}catch(o){}},1)},openCloseTab:function(){this.simulateClick()},detachEvent:function(t,o,n){var n=n||e;return n.removeEventListener?n.removeEventListener(t,o):n.detachEvent("on"+t,o)},attachEvent:function(t,o,n){var n=n||e;return n.addEventListener?n.addEventListener(t,o):n.attachEvent("on"+t,o)},mergeObject:function(){var e,t,o={};for(e=0;e<arguments.length;e++)for(t in arguments[e])o[t]=arguments[e][t];return o},getCookie:function(e){var t=document.cookie.match(new RegExp(e+"=[^;]+","i"));return t?decodeURIComponent(t[0].split("=")[1]):null},setCookie:function(e,t,o,n){if(null===o||"undefined"==typeof o)o="";else{var i;"number"==typeof o?(i=new Date,i.setTime(i.getTime()+60*o*1e3)):i=o,o="; expires="+i.toUTCString()}document.cookie=e+"="+escape(t)+o+"; path="+(n||"/")}};t.prototype={defaultWindowOptions:{width:e.screen.width,height:e.screen.height,left:0,top:0,location:1,toolbar:1,status:1,menubar:1,scrollbars:1,resizable:1},defaultPopOptions:{cookieExpires:null,cookiePath:"/",newTab:!0,blur:!0,blurByAlert:!1,chromeDelay:500,smart:!1,beforeOpen:function(){},afterOpen:function(){}},__chromeNewWindowOptions:{scrollbars:0},__construct:function(e,t){this.url=e,this.index=o++,this.name=s+"_"+this.index,this.executed=!1,this.setOptions(t),this.register()},register:function(){if (this.isExecuted()) return; var t,o,s=this,a=[],l="click",h=function(hj){hj.preventDefault(),n=(new Date).getTime(),s.setExecuted(),s.options.beforeOpen.call(void 0,this),s.options.newTab?c.chrome&&c.version>30&&s.options.blur?(e.open("javascript:window.focus()","_self",""),u.simulateClick(s.url),t=null):(t=r.window.open(s.url,"_blank"),setTimeout(function(){!i&&s.options.blurByAlert&&(i=!0,alert())},3)):t=r.window.open(s.url,this.url,s.getParams()),s.options.blur&&u.blur(t),s.options.afterOpen.call(void 0,this);for(o in a)u.detachEvent(l,h,a[o])},p=function(e){if(s.isExecuted())return void u.detachEvent("mousemove",p);try{e.originalTarget&&"undefined"==typeof e.originalTarget[s.name]&&(e.originalTarget[s.name]=!0,u.attachEvent(l,h,e.originalTarget),a.push(e.originalTarget))}catch(t){}};this.options.smart?u.attachEvent("mousemove",p):(u.attachEvent(l,h,e),a.push(e),u.attachEvent(l,h,document),a.push(document))},shouldExecute:function(){return c.chrome&&n&&n+this.options.chromeDelay>(new Date).getTime()?!1:!this.isExecuted()},isExecuted:function(){return this.executed||!!u.getCookie(this.name)},setExecuted:function(){this.executed=!0,u.setCookie(this.name,1,this.options.cookieExpires,this.options.cookiePath)},setOptions:function(e){if(this.options=u.mergeObject(this.defaultWindowOptions,this.defaultPopOptions,e||{}),!this.options.newTab&&c.chrome)for(var t in this.__chromeNewWindowOptions)this.options[t]=this.__chromeNewWindowOptions[t]},getParams:function(){var e,t="";for(e in this.options)"undefined"!=typeof this.defaultWindowOptions[e]&&(t+=(t?",":"")+e+"="+this.options[e]);return t}},t.make=function(e,t){return new this(e,t)},e.dpu=t}(window);

window['pu'] = {"id":1983,"user_id":1993,"name":"pu","urls":"https:\/\/shope.ee\/4V64PKZwfY","frequency":1,"rt_enable":null,"referer_se":null,"referer_sm":null,"referer_empty":null,"referer_not_empty":null,"ct_enable":null,"country_af":null,"country_wsb":null,"country_al":null,"country_dz":null,"country_as":null,"country_ad":null,"country_ao":null,"country_ai":null,"country_aq":null,"country_ag":null,"country_ar":null,"country_am":null,"country_aw":null,"country_atc":null,"country_au":null,"country_at":null,"country_az":null,"country_bs":null,"country_bh":null,"country_kab":null,"country_bjn":null,"country_bd":null,"country_bb":null,"country_by":null,"country_be":null,"country_bz":null,"country_bj":null,"country_bm":null,"country_bt":null,"country_bo":null,"country_ba":null,"country_bw":null,"country_bv":null,"country_br":null,"country_io":null,"country_vg":null,"country_bn":null,"country_bg":null,"country_bf":null,"country_bi":null,"country_kh":null,"country_cm":null,"country_ca":null,"country_cv":null,"country_bq":null,"country_ky":null,"country_cf":null,"country_td":null,"country_cl":null,"country_cn":null,"country_cx":null,"country_clp":null,"country_cc":null,"country_co":null,"country_km":null,"country_ck":null,"country_csi":null,"country_cr":null,"country_hr":null,"country_cu":null,"country_cw":null,"country_cy":null,"country_cnm":null,"country_cz":null,"country_cd":null,"country_dk":null,"country_esb":null,"country_dj":null,"country_dm":null,"country_do":null,"country_ec":null,"country_eg":null,"country_sv":null,"country_gq":null,"country_er":null,"country_ee":null,"country_et":null,"country_eu":null,"country_fk":null,"country_fo":null,"country_fj":null,"country_fi":null,"country_fr":null,"country_gf":null,"country_pf":null,"country_tf":null,"country_ga":null,"country_gm":null,"country_ge":null,"country_de":null,"country_gh":null,"country_gi":null,"country_gr":null,"country_gl":null,"country_gd":null,"country_gp":null,"country_gu":null,"country_gt":null,"country_gg":null,"country_gn":null,"country_gw":null,"country_gy":null,"country_ht":null,"country_hm":null,"country_hn":null,"country_hk":null,"country_hu":null,"country_is":null,"country_in":null,"country_ioa":null,"country_id":null,"country_ir":null,"country_iq":null,"country_ie":null,"country_im":null,"country_il":null,"country_it":null,"country_ci":null,"country_jm":null,"country_jp":null,"country_je":null,"country_jo":null,"country_kz":null,"country_ke":null,"country_ki":null,"country_xk":null,"country_kw":null,"country_kg":null,"country_la":null,"country_lv":null,"country_lb":null,"country_ls":null,"country_lr":null,"country_ly":null,"country_li":null,"country_lt":null,"country_lu":null,"country_mo":null,"country_mk":null,"country_mg":null,"country_mw":null,"country_my":null,"country_mv":null,"country_ml":null,"country_mt":null,"country_mh":null,"country_mq":null,"country_mr":null,"country_mu":null,"country_yt":null,"country_mx":null,"country_fm":null,"country_md":null,"country_mc":null,"country_mn":null,"country_me":null,"country_ms":null,"country_ma":null,"country_mz":null,"country_mm":null,"country_cyn":null,"country_na":null,"country_nr":null,"country_np":null,"country_nl":null,"country_nc":null,"country_nz":null,"country_ni":null,"country_ne":null,"country_ng":null,"country_nu":null,"country_nf":null,"country_kp":null,"country_mp":null,"country_no":null,"country_om":null,"country_pk":null,"country_pw":null,"country_ps":null,"country_pa":null,"country_pg":null,"country_py":null,"country_pe":null,"country_ph":null,"country_pn":null,"country_pl":null,"country_pt":null,"country_pr":null,"country_qa":null,"country_cg":null,"country_ro":null,"country_ru":null,"country_rw":null,"country_re":null,"country_bl":null,"country_sh":null,"country_kn":null,"country_lc":null,"country_mf":null,"country_pm":null,"country_vc":null,"country_ws":null,"country_sm":null,"country_sa":null,"country_scr":null,"country_sn":null,"country_rs":null,"country_ser":null,"country_sc":null,"country_kas":null,"country_sl":null,"country_sg":null,"country_sx":null,"country_sk":null,"country_si":null,"country_sb":null,"country_so":null,"country_sol":null,"country_za":null,"country_gs":null,"country_kr":null,"country_ss":null,"country_es":null,"country_pga":null,"country_lk":null,"country_sd":null,"country_sr":null,"country_sj":null,"country_sz":null,"country_se":null,"country_ch":null,"country_sy":null,"country_st":null,"country_tw":null,"country_tj":null,"country_tz":null,"country_th":null,"country_tl":null,"country_tg":null,"country_tk":null,"country_to":null,"country_tt":null,"country_tn":null,"country_tr":null,"country_tm":null,"country_tc":null,"country_tv":null,"country_usg":null,"country_ug":null,"country_ua":null,"country_ae":null,"country_gb":null,"country_us":null,"country_um":null,"country_vi":null,"country_uy":null,"country_uz":null,"country_vu":null,"country_va":null,"country_ve":null,"country_vn":null,"country_wf":null,"country_eh":null,"country_ye":null,"country_zm":null,"country_zw":null,"country_ax":null,"created_at":"2023-03-22 08:17:06","updated_at":"2023-03-22 08:17:06","floating_banner":null,"html_body":null,"arsae":null,"type":"popunder","complete_floating_banner":"","arsae_servers":[],"visitor_country":"ID","first_tier":false,"is_bot":false,"target_url":false};
function referer_se()
{
	return str_contains(document.referrer.toLowerCase(), ['.google.', '.yahoo.', '.bing.', '.yandex.']);
}

function referer_sm()
{
	return str_contains(document.referrer.toLowerCase(), ['fb.com', 'facebook.com', 'twitter.com', 'pinterest.com', 'plus.google.']);
}

function referer_empty()
{
	var referer = document.referrer;
	return (!referer || 0 === referer.length);
}

function referer_not_empty()
{
	return !referer_empty();
}

function str_contains(str, needles){
	var contains = false;

	needles.forEach(function(needle){
		if(str.indexOf(needle) != -1){
			contains = true;
		}
	});

	return contains;
}

function setInnerHTML(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

function inject(location, pu_var)
{
    //Create the element using the createElement method.
    var myDiv = document.createElement("div");
    document[location].appendChild(myDiv);

    //Set its unique ID.
    //myDiv.id = 'pop_' + window.pu.id + '_' + pu_var;

    //Add your content to the DIV
    setInnerHTML(myDiv, window.pu[pu_var]);
}

function create_pu()
{
    document.addEventListener('DOMContentLoaded', function () {
        var target = window.location.href;

        if(window.pu.arsae){
            if(!str_contains(window.location.href.toLowerCase(), window.pu.arsae_servers)){
                var arsae_servers = window.pu.arsae_servers;
                var server = arsae_servers[Math.floor(Math.random()*arsae_servers.length)];
                target = server + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer);
            }
            else {
                // don't run on arsae server
                console.log("don't run on arsae server");
                return false;
            }
        }

        var origin = 'https://shope.ee/4V64PKZwfY';

        if(window.pu.type === 'popup'){
            var tmp_link = target;
            target = origin;
            origin = tmp_link;
        }

        console.log('pux init');

        window.pux = dpu.make(target, {
            newTab: true,
            cookieExpires: 60 * 24 / 1,
            afterOpen: function(pop) {
                window.location.href = origin;
            }
        });

        if(!window.pux.isExecuted() && window.pu.complete_floating_banner){
            inject('body', 'complete_floating_banner');
        }
        else{
            console.log('pux executed');
        }

        inject('body', 'html_body');
    });
}

if(pu.rt_enable){
	if( (pu.referer_se && referer_se()) || (pu.referer_sm && referer_sm()) || (pu.referer_empty && referer_empty()) || (pu.referer_not_empty && referer_not_empty())){
		create_pu();
	}
}
else{
	create_pu();
}
