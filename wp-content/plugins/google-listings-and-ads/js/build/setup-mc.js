"use strict";(self.webpackChunkgoogle_listings_and_ads=self.webpackChunkgoogle_listings_and_ads||[]).push([[604],{9438:function(e,t,n){n.d(t,{nL:function(){return u},V:function(){return d},MN:function(){return g},ZP:function(){return _}});var o=n(9307),a=n(5736),s=n(5609),i=n(591),l=n(965),r=n(8144),c=n(4028);const d="all-accounts",u="ads-account",g="api-data-fetch-feature",m={[d]:{title:(0,a.__)("Disconnect all accounts","google-listings-and-ads"),confirmButton:(0,a.__)("Disconnect all accounts","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disconnect all my accounts.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disconnecting any WordPress.com account, Google account, Google Merchant Center account and Google Ads account connected to this extension.","google-listings-and-ads"),(0,a.__)("Any active product listings will continue to show on Google. They can be managed, edited, or deleted manually from Google Merchant Center (merchants.google.com).","google-listings-and-ads"),(0,a.__)("Any ongoing paid campaigns will continue to run. They can be managed, edited, or deleted manually from Google Ads (ads.google.com).","google-listings-and-ads")]},[u]:{title:(0,a.__)("Disconnect Google Ads account","google-listings-and-ads"),confirmButton:(0,a.__)("Disconnect Google Ads Account","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disconnect my Google Ads account.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disconnecting my Google Ads account from this WooCommerce extension.","google-listings-and-ads"),(0,a.__)("Any ongoing paid campaigns will continue to run. They can be managed, edited, or deleted manually from Google Ads (ads.google.com).","google-listings-and-ads"),(0,a.__)("Some configurations for Google Ads created through WooCommerce may be lost. This cannot be undone.","google-listings-and-ads")]},[g]:{title:(0,a.__)("Disable data fetching","google-listings-and-ads"),confirmButton:(0,a.__)("Disable data fetching","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disable the data fetching feature.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disabling the data fetching feature from this WooCommerce extension.","google-listings-and-ads"),(0,a.__)("Any ongoing campaigns and configuration will continue to run. They will be pushed to Google as in the previous versions of this extension.","google-listings-and-ads")]}};function p(e){let{disconnectTarget:t,onRequestClose:n,onDisconnected:u,disconnectAction:g}=e;const[p,_]=(0,o.useState)(!1),[h,f]=(0,o.useState)(!1),y=(0,c.T)(),{title:b,confirmButton:E,confirmation:C,contents:w}=m[t],v=()=>{h||n()};return(0,o.createElement)(i.Z,{className:"gla-disconnect-accounts-modal",title:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(r.Z,{size:20}),b),isDismissible:!h,buttons:[(0,o.createElement)(l.Z,{key:"1",isSecondary:!0,disabled:h,onClick:v},(0,a.__)("Never mind","google-listings-and-ads")),(0,o.createElement)(l.Z,{key:"2",isPrimary:!0,isDestructive:!0,loading:h,disabled:!p,onClick:()=>{let e=t===d?y.disconnectAllAccounts:y.disconnectGoogleAdsAccount;g&&(e=g),f(!0),e().then((()=>{u(),n()})).catch((()=>{f(!1)}))}},E)],onRequestClose:v},w.map(((e,t)=>(0,o.createElement)("p",{key:t},e))),(0,o.createElement)(s.CheckboxControl,{label:C,checked:p,disabled:h,onChange:_}))}function _(e){return(0,o.createElement)(p,e)}},2904:function(e,t,n){n.r(t),n.d(t,{default:function(){return Be}});var o=n(9307),a=n(9959),s=n(5736),i=n(431),l=n(6025),r=n(741),c=n(1410),d=()=>(0,o.createElement)(l.Z,{title:(0,s.__)("Get started with Google for WooCommerce","google-listings-and-ads"),helpButton:(0,o.createElement)(r.Z,{eventContext:"setup-mc"}),backHref:(0,i.getNewPath)({},"/google/start"),onBackButtonClick:()=>{(0,c.dk)("gla_setup_mc",{triggered_by:"back-button",action:"leave"})}}),u=n(279),g=n(6020),m=n(4028),p=n(9862),_=n(6166),h=n(921),f=n(70),y=n(3639),b=n(5351),E=n(1085),C=n(5170),w=n(1067),v=n(2848),k=n(5494),Z=n(2760),S=n(5004),P=n(1969),I=n(6883),G=n(965),A=n(3538),x=n(5602),T=n(2279),N=n(1693),q=n(8027),F=n(8300),M=n(6313),R=n(5631),B=n(4127),L=n(9498),V=n(3832);const W=[{trackId:"why-do-i-need-a-wp-account",question:(0,s.__)("Why do I need a WordPress.com account?","google-listings-and-ads"),answer:(0,s.__)("We use a WordPress.com account to connect your site to the WooCommerce and Google servers. It ensures that requests (e.g. product feed, clicks, sales, etc) from your site are securely and correctly attributed to your store. It enables a connection to your self-hosted site, and provides a common authentication interface across disparate server configurations and architectures.","google-listings-and-ads")},{trackId:"why-do-i-need-a-google-mc-account",question:(0,s.__)("Why do I need a Google Merchant Center account?","google-listings-and-ads"),answer:(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,(0,s.__)("Google Merchant Center helps you sync your store and product data with Google and makes the information available for both free listings on the Shopping tab and Google Shopping Ads. That means everything about your stores and products is available to shoppers when they search on a Google property.","google-listings-and-ads")),(0,o.createElement)("p",null,(0,o.createInterpolateElement)((0,s.__)("If you create a new Merchant Center account through this application, it will be associated with Google’s Comparison Shopping Service (Google Shopping) by default. You can change the CSS associated with your account at any time. <link>Please find more information here</link>.","google-listings-and-ads"),{link:(0,o.createElement)(q.Z,{context:"faqs",linkId:"find-a-partner",href:"https://comparisonshoppingpartners.withgoogle.com/find_a_partner/"})})))}];var D=()=>(0,o.createElement)(V.Z,{trackName:"gla_faq",context:"setup-mc-accounts",faqItems:W}),O=n(3497),Y=n(363);const U=()=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,(0,o.createInterpolateElement)((0,s.__)("If you are in the European Economic Area or Switzerland, your Merchant Center account must be associated with a Comparison Shopping Service (CSS). Please find more information at <link>Google Merchant Center Help</link> website.","google-listings-and-ads"),{link:(0,o.createElement)(q.Z,{context:"setup-mc-accounts",linkId:"comparison-shopping-services",href:"https://support.google.com/merchants/topic/9080307"})})),(0,o.createElement)("p",null,(0,o.createInterpolateElement)((0,s.__)("If you create a new Merchant Center account through this application, it will be associated with Google Shopping, Google’s CSS, by default. You can change the CSS associated with your account at any time. Please find more information about our CSS Partners <link>here</link>.","google-listings-and-ads"),{link:(0,o.createElement)(q.Z,{context:"setup-mc-accounts",linkId:"comparison-shopping-partners-find-a-partner",href:"https://comparisonshoppingpartners.withgoogle.com/find_a_partner/"})})),(0,o.createElement)("p",null,(0,s.__)("Once you have set up your Merchant Center account you can use our onboarding tool regardless of which CSS you use.","google-listings-and-ads")));var j=e=>{const{onContinue:t=(()=>{})}=e,{jetpack:n}=(0,S.Z)(),{google:a,scope:i}=(0,P.Z)(),{googleMCAccount:l,isPreconditionReady:r}=(0,I.Z)(),{hasFinishedResolution:c,hasGoogleAdsConnection:d}=(0,O.Z)(),{hasAccess:g,step:m}=(0,Y.Z)(),p=!n,_="yes"===n?.active&&!a,h="yes"===a?.active&&i.gmcRequired&&!l;if(p||_||h)return(0,o.createElement)(u.Z,null);const f="yes"!==n?.active,y=d&&g&&["","billing","link_merchant"].includes(m),b=!(c&&y&&r&&("connected"===l?.status||"incomplete"===l?.status&&"link_ads"===l?.step));return(0,o.createElement)(A.Z,null,(0,o.createElement)(x.Z,{title:(0,s.__)("Set up your accounts","google-listings-and-ads"),description:(0,s.__)("Connect the accounts required to use Google for WooCommerce.","google-listings-and-ads")}),(0,o.createElement)(N.Z,{className:"gla-wp-google-accounts-section",title:(0,s.__)("Connect accounts","google-listings-and-ads"),description:(0,s.__)("The following accounts are required to use the Google for WooCommerce plugin.","google-listings-and-ads")},(0,o.createElement)(F.Z,{size:"large"},(0,o.createElement)(M.ZP,{jetpack:n}),(0,o.createElement)(R.Z,{disabled:f}),(0,o.createElement)(L.Z,null))),(0,o.createElement)(N.Z,{className:"gla-google-mc-account-section",description:(0,o.createElement)(U,null),disabledLeft:!r},(0,o.createElement)(B.C,null),(0,o.createElement)(D,null)),(0,o.createElement)(T.Z,null,(0,o.createElement)(G.Z,{isPrimary:!0,disabled:b,onClick:t},(0,s.__)("Continue","google-listings-and-ads"))))},z=n(2984),H=n(2819),$=n(2159),J=n(4752),K=n(9814),Q=n(2295),X=n(3976),ee=()=>{const{adapter:{renderRequestedValidation:e}}=(0,J.S)();return(0,o.createElement)("div",{className:"gla-pre-launch-checklist"},(0,o.createElement)(N.Z,{title:(0,s.__)("Pre-Launch Checklist","google-listings-and-ads"),description:(0,o.createElement)("div",null,(0,o.createElement)("p",null,(0,s.__)("Ensure you meet Google Merchant Center requirements by reviewing this checklist. Otherwise, your products may be disapproved or your Google Merchant Center account may be suspended by Google.","google-listings-and-ads")),(0,o.createElement)("p",null,(0,o.createElement)(q.Z,{context:"setup-mc-checklist",linkId:"checklist-requirements",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2"},(0,s.__)("Read Google Merchant Center requirements","google-listings-and-ads"))))},(0,o.createElement)(N.Z.Card,null,(0,o.createElement)(N.Z.Card.Body,null,(0,o.createElement)(F.Z,{size:"large"},(0,o.createElement)(X.Z,{fieldName:"website_live",firstPersonTitle:(0,s.__)("My store is live and accessible to all users","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm your store is live and accessible to all users","google-listings-and-ads")},(0,s.__)("Your Merchant Center account can be suspended if your store is not functional. Ensure that your domain and product pages are not leading to an under construction webpage, or an error page that displays a status code beginning with a 4 or 5 (such as a 405 error).","google-listings-and-ads"),(0,o.createElement)(q.Z,{context:"setup-mc-checklist",linkId:"check-website-is-live",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#store-is-live"},(0,s.__)("Learn more about common landing page issues and how to fix them","google-listings-and-ads"))),(0,o.createElement)(X.Z,{fieldName:"payment_methods_visible",firstPersonTitle:(0,s.__)("I have a complete checkout process","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm you have a complete checkout process","google-listings-and-ads")},(0,s.__)("Ensure that all customers are able to complete the full checkout process on your site with an eligible payment method. Include a confirmation of the purchase after completion of the checkout process.","google-listings-and-ads"),(0,o.createElement)(q.Z,{context:"setup-mc-checklist",linkId:"check-payment-methods-visible",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#complete-checkout"},(0,s.__)("Learn more about Google's checkout requirements & best practices","google-listings-and-ads"))),(0,o.createElement)(X.Z,{fieldName:"checkout_process_secure",firstPersonTitle:(0,s.__)("I have a secure checkout process","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm you have a secure checkout process","google-listings-and-ads")},(0,s.__)("Update your website to ensure that every webpage that collects a customer's personal information is processed through a secure SSL server. Any page on your website that collects any personal information from the user needs to be SSL protected.","google-listings-and-ads"),(0,o.createElement)("div",null),(0,s.__)("Use a secure server: Make sure to use a secure processing server when processing customer's personal information (SSL-protected, with a valid SSL certificate). With SSL, your webpage URL will appear with https:// instead of http://","google-listings-and-ads"),(0,o.createElement)(q.Z,{context:"setup-mc-checklist",linkId:"check-checkout-process-secure",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#complete-checkout"},(0,s.__)("Learn to set up SSL on your website","google-listings-and-ads"))),(0,o.createElement)(X.Z,{fieldName:"refund_tos_visible",firstPersonTitle:(0,s.__)("My refund policy and terms of service are visible on my online store","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm a refund policy and terms of service are visible on your online store","google-listings-and-ads")},(0,s.__)("Show a clear return and refund policy on your website. Include return process, refund process, and customer requirements (return window, product condition and reason for return). If you don't accept returns or refunds, clearly state that on your website.","google-listings-and-ads"),(0,o.createElement)(q.Z,{context:"setup-mc-checklist",linkId:"check-refund-tos-visible",type:"external",href:"https://woocommerce.com/document/google-for-woocommerce/compliance-policy-2/#refund-and-terms"},(0,s.__)("Learn more about Google's refund policy requirements","google-listings-and-ads"))),(0,o.createElement)(X.Z,{fieldName:"contact_info_visible",firstPersonTitle:(0,s.__)("My store's phone number, email and/or address are visible on my website","google-listings-and-ads"),secondPersonTitle:(0,s.__)("Confirm your store's phone number, email and/or address are visible on your website","google-listings-and-ads")},(0,s.__)("Allow your customers to contact you for product inquiries by including contact information on your website (i.e. contact us form, business profile link, social media, email or phone number).","google-listings-and-ads"))),e("preLaunchChecklist")))))},te=n(5635);function ne(e){const t={};return["website_live","checkout_process_secure","payment_methods_visible","refund_tos_visible","contact_info_visible"].some((t=>!0!==e[t]))&&(t.preLaunchChecklist=(0,s.__)("Please check all requirements.","google-listings-and-ads")),t}function oe(e){let{onContinue:t}=e;const{updateGoogleMCContactInformation:n,saveSettings:a}=(0,m.T)(),{createNotice:i}=(0,Z.Z)(),{data:l}=(0,$.Z)(),{settings:r}=(0,E.Z)(),{data:c}=(0,te.Z)(),[d,g]=(0,o.useState)(!1),[p,_]=(0,o.useState)(!0),[h,f]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{if(h||!r||!c)return;const e={...r},t=c.allowed_countries&&!c.robots_restriction&&!c.page_not_found_error&&!c.page_redirects;t!==r.website_live&&(e.website_live=t),c.store_ssl!==r.checkout_process_secure&&(e.checkout_process_secure=c.store_ssl),c.refund_returns!==r.refund_tos_visible&&(e.refund_tos_visible=c.refund_returns),c.payment_gateways!==e.payment_methods_visible&&(e.payment_methods_visible=c.payment_gateways),((0,H.isEqual)(e,r)?Promise.resolve():a(e)).finally((()=>f(!0)))}),[h,c,r,a]),h?(0,o.createElement)(A.Z,null,(0,o.createElement)(x.Z,{title:(0,s.__)("Confirm store requirements","google-listings-and-ads"),description:(0,s.__)("Review and confirm that your store meets Google Merchant Center requirements.","google-listings-and-ads")}),(0,o.createElement)(J.Z,{initialValues:{website_live:r.website_live,checkout_process_secure:r.checkout_process_secure,payment_methods_visible:r.payment_methods_visible,refund_tos_visible:r.refund_tos_visible,contact_info_visible:r.contact_info_visible},extendAdapter:e=>({renderRequestedValidation(t){return e.adapter.requestedShowValidation?(0,o.createElement)(K.Z,{messages:e.errors[t]}):null}}),validate:ne,onChange:async(e,t)=>{try{await a(t),_(!0)}catch(e){p&&i("error",(0,s.__)("There was an error trying to save settings. Please try again later.","google-listings-and-ads")),_(!1)}},onSubmit:async()=>{try{await n(),t()}catch(e){i("error",(0,s.__)("Unable to update your contact information. Please try again later.","google-listings-and-ads"))}}},(e=>{const{handleSubmit:t,isValidForm:n,adapter:a}=e;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(Q.Z,{onPhoneNumberVerified:()=>g(!0)}),(0,o.createElement)(ee,null),(0,o.createElement)(T.Z,null,(0,o.createElement)(G.Z,{isPrimary:!0,loading:a.isSubmitting,disabled:!p,onClick:e=>{if(n&&d&&l.isAddressFilled)return t(e);a.showValidation()}},(0,s.__)("Continue","google-listings-and-ads"))))}))):(0,o.createElement)(u.Z,null)}var ae=n(6989),se=n.n(ae),ie=n(9818),le=n(5609),re=n(2548),ce=n(6154),de=n(4963),ue=n(457),ge=n(3119),me=n(4565);function pe(e){let{hideBudgetContent:t}=e;const n=[{Icon:ue.Z,content:(0,s.__)("Set a daily budget, and only pay when people click on your ads.","google-listings-and-ads")}];return t||n.push({Icon:ge.Z,content:(0,s.__)("Claim $500 in ads credit when you spend your first $500 with Google Ads. Terms and conditions apply.","google-listings-and-ads")}),(0,o.createElement)("div",{className:"gla-paid-ads-features-section__feature-list"},n.map(((e,t)=>{let{Icon:n,content:a}=e;return(0,o.createElement)(le.Flex,{key:t,align:"flex-start"},(0,o.createElement)(n,{size:"18"}),(0,o.createElement)(le.FlexBlock,null,a))})))}function _e(e){let{hideBudgetContent:t,hideFooterButtons:n,skipButton:a,continueButton:i}=e;return(0,o.createElement)(N.Z,{className:"gla-paid-ads-features-section",topContent:(0,o.createElement)(g.Pill,null,(0,s.__)("Recommended","google-listings-and-ads")),title:(0,s.__)("Performance Max campaign","google-listings-and-ads"),description:(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",null,(0,s.__)("Performance Max uses the best of Google’s AI to show the most impactful ads for your products at the right time and place. Google will use your product data to create ads for this campaign. ","google-listings-and-ads")),(0,o.createElement)("p",null,(0,o.createElement)(q.Z,{context:"setup-paid-ads",linkId:"paid-ads-with-performance-max-campaigns-learn-more",href:"https://support.google.com/google-ads/answer/10724817"},(0,s.__)("Learn more about Performance Max","google-listings-and-ads"))))},(0,o.createElement)(N.Z.Card,null,(0,o.createElement)(N.Z.Card.Body,null,(0,o.createElement)(le.Flex,{className:"gla-paid-ads-features-section__content",align:"center",gap:9},(0,o.createElement)(le.FlexBlock,null,(0,o.createElement)(N.Z.Card.Title,null,(0,s.__)("Drive more sales with Performance Max","google-listings-and-ads")),(0,o.createElement)("div",{className:"gla-paid-ads-features-section__subtitle"},(0,s.__)("Reach more customers by advertising your products across Google Ads channels like Search, YouTube and Discover. Set up your campaign now so your products are included as soon as they’re approved.","google-listings-and-ads")),(0,o.createElement)(pe,{hideBudgetContent:t})),(0,o.createElement)(le.FlexItem,null,(0,o.createElement)(me.Z,null)))),(0,o.createElement)(N.Z.Card.Footer,{hidden:n},a,i)))}var he=n(4885),fe=n(8194),ye=n(1706),be=n(2674),Ee=n(1142),Ce=n(922);const we="gla-onboarding-show-paid-ads-setup",ve="gla-onboarding-paid-ads",{sessionStorage:ke}=window;var Ze={setShowPaidAdsSetup(e){const t=Boolean(e).toString();ke.setItem(we,t)},getShowPaidAdsSetup(e){const t=ke.getItem(we);return null===t?e:"true"===t},setCampaign(e){let{amount:t,countryCodes:n}=e;const o=JSON.stringify({amount:t,countryCodes:n});ke.setItem(ve,o)},getCampaign(){const e=ke.getItem(ve);return null===e?null:JSON.parse(e)}},Se=n(3108);const Pe={amount:0,countryCodes:[],isValid:!1,isReady:!1};function Ie(e,t){const n={...e};return t&&(n.countryCodes===Pe.countryCodes?n.countryCodes=t:n.countryCodes=n.countryCodes.filter((e=>t.includes(e)))),n.isValid=!Object.keys((0,Ce.Z)(n)).length,n}function Ge(e){let{onStatesReceived:t}=e;const{hasGoogleAdsConnection:n}=(0,O.Z)(),{data:a}=(0,b.Z)(),{billingStatus:i}=(0,he.Z)(),l=(0,o.useRef)();l.current=t;const[r,c]=(0,o.useState)((()=>Ie({...Pe,...Ze.getCampaign()},a))),d=i?.status===Se.GOOGLE_ADS_BILLING_STATUS.APPROVED;if((0,o.useEffect)((()=>{const e={...r,isReady:r.isValid&&d};l.current(e),Ze.setCampaign(e)}),[r,d]),(0,o.useEffect)((()=>{c((e=>Ie(e,a)))}),[a]),!a||!i)return(0,o.createElement)(N.Z,null,(0,o.createElement)(Ee.Z,null));const u={countryCodes:r.countryCodes,amount:r.amount};return(0,o.createElement)(g.Form,{initialValues:u,onChange:(e,t,n)=>{c({...r,...t,isValid:n})},validate:Ce.Z},(e=>{const{countryCodes:t}=e.values,a=!n,i=a||0===t.length;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(fe.Z,{formProps:e,disabled:a,countrySelectHelperText:(0,s.__)("You can only choose from countries you’ve selected during product listings configuration.","google-listings-and-ads")}),(0,o.createElement)(ye.Z,{formProps:e,disabled:i},!i&&(0,o.createElement)(be.ZP,null)))}))}var Ae=n(146);const xe="complete-ads",Te="skip-ads";function Ne(){const e=(0,re.Z)(),{createNotice:t}=(0,Z.Z)(),{googleAdsAccount:n,hasGoogleAdsConnection:a}=(0,O.Z)(),[i]=(0,ce.Z)(),[l,r]=(0,o.useState)((()=>Ze.getShowPaidAdsSetup(!1))),[c,d]=(0,o.useState)({}),[u,g]=(0,o.useState)(null),m=async function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H.noop;g(n.target.dataset.action);try{await o(),await se()({path:`${_.Pj}/mc/settings/sync`,method:"POST"})}catch(e){g(null),t("error",(0,s.__)("Unable to complete your setup.","google-listings-and-ads"))}const a={guide:Se.fL.SUBMISSION_SUCCESS};window.location.href=e+(0,Ae.A6)(a)},p=u===Te||!c.isReady;function h(e){const t={opened_paid_ads_setup:"no",google_ads_account_status:n?.status,billing_method_status:"unknown",campaign_form_validation:"unknown"};if(l){const e=(0,ie.select)(_.Ls).getGoogleAdsAccountBillingStatus();(0,H.merge)(t,{opened_paid_ads_setup:"yes",billing_method_status:e?.status,campaign_form_validation:c.isValid?"valid":"invalid"})}const s=u===xe||!a;return(0,o.createElement)(G.Z,{isTertiary:!0,"data-action":Te,text:e,loading:u===Te,disabled:s,onClick:m,eventName:"gla_onboarding_complete_button_click",eventProps:t})}return(0,o.createElement)(A.Z,null,(0,o.createElement)(x.Z,{title:(0,s.__)("Create a campaign to advertise your products","google-listings-and-ads"),description:(0,s.__)("You’re ready to set up a Performance Max campaign to drive more sales with ads. Your products will be included in the campaign after they’re approved.","google-listings-and-ads")}),(0,o.createElement)(_e,{hideBudgetContent:!a,hideFooterButtons:!a||l,skipButton:h((0,s.__)("Skip this step for now","google-listings-and-ads")),continueButton:(0,o.createElement)(G.Z,{isPrimary:!0,text:(0,s.__)("Create campaign","google-listings-and-ads"),disabled:u===Te,onClick:()=>{r(!0),Ze.setShowPaidAdsSetup(!0)},eventName:"gla_onboarding_open_paid_ads_setup_button_click"})}),l&&(0,o.createElement)(Ge,{onStatesReceived:d}),(0,o.createElement)(de.Z,null),(0,o.createElement)(T.Z,{hidden:!l},(0,o.createElement)(le.Flex,{justify:"right",gap:4},h((0,s.__)("Skip paid ads creation","google-listings-and-ads")),(0,o.createElement)(G.Z,{isPrimary:!0,"data-action":xe,text:(0,s.__)("Complete setup","google-listings-and-ads"),loading:u===xe,disabled:p,onClick:async e=>{const t=i.bind(null,c.amount,c.countryCodes);await m(e,t)},eventName:"gla_onboarding_complete_with_paid_ads_button_click",eventProps:{budget:c.amount,audiences:c.countryCodes?.join(",")}}))))}var qe={accounts:"1",product_listings:"2",store_requirements:"3",paid_ads:"4"},Fe=e=>{let{savedStep:t}=e;const[n,a]=(0,o.useState)(t),{settings:i}=(0,E.Z)(),{data:l}=(()=>{const{hasFinishedResolution:e}=(0,f.Z)(),{hasFinishedResolution:t,data:n}=(0,h.Z)(),{loading:o,data:a}=(0,y.Z)({path:`${_.Pj}/mc/target_audience/suggestions`});return{loading:!e||!t||o,data:t&&null===n?.location&&null===n?.countries?a:n}})(),{targetAudience:r,getFinalCountries:d}=(0,b.Z)(),{hasFinishedResolution:u,data:S}=(0,C.Z)(),{hasFinishedResolution:P,data:I}=(0,w.Z)(),{saveTargetAudience:G,saveSettings:A}=(0,m.T)(),{saveShippingRates:x}=(0,v.Z)(),{saveShippingTimes:T}=(0,k.Z)(),{createNotice:N}=(0,Z.Z)();(0,p.Z)(c.P,{context:c.PE,step:n}),(0,o.useEffect)((()=>{null===r?.location&&l?.location&&G(l)}),[r,l,G]),(0,o.useEffect)((()=>{null===i?.shipping_rate&&A({...i,shipping_rate:"automatic",shipping_time:"flat"})}),[i,A]);const q=e=>{const t=n;(0,c.VF)("gla_setup_mc",t,e),a(e)},F=e=>{Number(e)<Number(n)&&((0,c.G2)("gla_setup_mc",e),a(e))};function M(e,t){this(t).catch((()=>N("error",e)))}const R=u?S:null,B=P?I:null,L=r?.location?r:null,V=i?.shipping_rate?i:null;return(0,o.createElement)(g.Stepper,{className:"gla-setup-stepper",currentStep:n,steps:[{key:qe.accounts,label:(0,s.__)("Set up your accounts","google-listings-and-ads"),content:(0,o.createElement)(j,{onContinue:()=>{q(qe.product_listings)}}),onClick:F},{key:qe.product_listings,label:(0,s.__)("Configure product listings","google-listings-and-ads"),content:(0,o.createElement)(z.Z,{headerTitle:(0,s.__)("Configure your product listings","google-listings-and-ads"),targetAudience:L,settings:V,shippingRates:R,shippingTimes:B,resolveFinalCountries:d,onTargetAudienceChange:M.bind(G,(0,s.__)("There was an error saving audience.","google-listings-and-ads")),onSettingsChange:M.bind(A,(0,s.__)("There was an error saving settings.","google-listings-and-ads")),onShippingRatesChange:M.bind(x,(0,s.__)("There was an error saving shipping rates.","google-listings-and-ads")),onShippingTimesChange:M.bind(T,(0,s.__)("There was an error saving shipping times.","google-listings-and-ads")),onContinue:()=>{q(qe.store_requirements)},submitLabel:(0,s.__)("Continue","google-listings-and-ads")}),onClick:F},{key:qe.store_requirements,label:(0,s.__)("Confirm store requirements","google-listings-and-ads"),content:(0,o.createElement)(oe,{onContinue:()=>{q(qe.paid_ads)}}),onClick:F},{key:qe.paid_ads,label:(0,s.__)("Create a campaign","google-listings-and-ads"),content:(0,o.createElement)(Ne,null),onClick:F}]})},Me=n(4766),Re=()=>{const{hasFinishedResolution:e,data:t}=(0,Me.Z)();if(!e&&!t)return(0,o.createElement)(u.Z,null);if(e&&!t)return null;const{status:n,step:a}=t;return"complete"===n?((0,i.getHistory)().replace((0,i.getNewPath)({},"/google/dashboard")),null):(0,o.createElement)(Fe,{savedStep:qe[a]})},Be=()=>((0,a.Z)("full-page"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(d,null),(0,o.createElement)(Re,null)))}}]);