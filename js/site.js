/* Standalone site interactions. Wix runtime has been removed. */
(function(){
  'use strict';
  /*
    The original Wix capture does not expose the WhatsApp destination in
    the rendered HTML. To avoid inventing a phone number, keep it configurable.
    Set WHATSAPP_URL below before publishing.
  */
  var WHATSAPP_URL = '';

  function init(){
    document.querySelectorAll('button[aria-label="QUERO CONVERSAR PELO WHATSAPP"]').forEach(function(button){
      button.addEventListener('click',function(){
        if (WHATSAPP_URL) {
          window.open(WHATSAPP_URL,'_blank','noopener,noreferrer');
        } else {
          console.warn('WhatsApp URL not configured. Edit js/site.js.');
        }
      });
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
