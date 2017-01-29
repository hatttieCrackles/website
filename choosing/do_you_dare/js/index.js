;(function(L2_f){L2.aux.onLoad(L2_f)}(function() {

  ;(function(L2_f){L2.aux.ajaxGet('configAll.json',L2_f,"","")}(function(L2_data) { if (L2_data instanceof L2.Ar) L2_data = L2_data.v[0];




    var $center = document.getElementById('center');
    $center.style.height = window.innerHeight + 'px';
    window.onresize = function() {
      $center.style.height = window.innerHeight + 'px';
    };



    var L2_Data = L2.aux.fromJSON(L2_data);
    L2_data = undefined;
    var L2_paperElm = L2.html(document.querySelectorAll('#paper'));
    var L2_chooseElm = L2.html(document.querySelectorAll('#choose'));
    var L2_History = (new L2.ArJSA([]));
    var L2_loadPage = function(L2_name) { if (L2_name instanceof L2.Ar) L2_name = L2_name.v[0]; var L2_Intros = new L2.ArJSA([undefined]); var L2_Links = new L2.ArJSA([undefined]);
      var L2_Page = L2.sc.unwrap(L2.aux.openIfBox(L2_Data._dEnt("pages"))._vEnt(L2_name));
      L2_paperElm._html_.setGen(['setProp','innerHTML',(L2_Page._dEnt("text"))]);
      var L2_Choices = L2.sc.unwrap(L2_Page._dEnt("links"));
      if ((L2_Choices.r>(0))) {
        L2_Intros = L2_Choices["map"]((function(L2_X) { if (!(L2_X instanceof L2.Ar)) L2_X = new L2.ArJSA([L2_X]); return L2_X._dEnt("intro")}))._map(L2.pf.ew.unbox);
        L2_Links = L2_Choices["map"]((function(L2_X) { if (!(L2_X instanceof L2.Ar)) L2_X = new L2.ArJSA([L2_X]); return L2_X._dEnt("page")}))._map(L2.pf.ew.unbox);
        L2_chooseElm._html_.setGen(['setProp','innerHTML',(L2.symb.as["+"](L2.symb.aa.apply("+",L2.symb.as["+"](L2.symb.as["+"](L2.symb.as["+"](L2.symb.sa["+"]('<div data-link="',L2_Links),'" class="choice choice_'),(L2_Choices.r)),'">'),L2_Intros),'</div>')["join"]("r",''))]);
 }
      else {
        L2_chooseElm._html_.setGen(['setProp','innerHTML',('<div id="restart" data-link="start" class="choice">Return to start.</div>')]);
 }
      if ((L2_History.r>(0))) {
        L2_chooseElm._html_.adjHTML('afterbegin',(L2.symb.as["+"](L2.symb.sa["+"]('<div id="back" class="choice" data-link="',(L2_History._oneDimSc("r",((-(1)))))),'" title="Back">&#8592;</div>')));
 }
      var L2_choices = L2.html(document.querySelectorAll('.choice'));
      L2_choices._html_.setGen(['setStyle','height',(L2.symb.as["+"](L2_choices._html_.getGen('style','height')._mapMeth_ass("replaceStr",'px','')["max"]("r"),'px'))]);
      ;(function(L2_f){L2.html(document.querySelectorAll('.choice'))._html_.on('click',L2_f)}(function(L2_evt) { if (L2_evt instanceof L2.Ar) L2_evt = L2_evt.v[0];
        var L2_id = L2.html([L2_evt._event_.currentTarget])._html_.checkElmt()._html_.getGen('attr','id').v[0];
        if ((L2_id==='back')) {
          L2_History._oneDimAr("r",((new L2.ArJSA([(2),(1)]))._unary()),'cut'); }
        else if ((L2_id==='restart')) {
          L2_History = (new L2.ArJSA([])); }
        L2.sca(L2_loadPage(L2.html([L2_evt._event_.currentTarget])._html_.checkElmt()._html_.getGen('attr','data-link'))); }));
      L2_History._appendSc(L2_name,"r",false,true); };
    L2.sca(L2_loadPage('start'));







 }));
  undefined;

  function preloadImages(array) {
    if (!preloadImages.list) preloadImages.list = [];
    var list = preloadImages.list;
    for (var i=0; i<array.length; i++) {
      var img = new Image();
      img.onload = function() {
        var index = list.indexOf(this);
        if (index !== -1) list.splice(index, 1);
      }
      list.push(img);
      img.src = array['/images/' + i];
    }
  }
  preloadImages(['front_page.png','leaves_right.png','toucan.png',
    'door.png','key.png','littleSpider.png','spider.png','redLight.png',
    'yellowLight.png','triangles.png','ghost.png','poo.png','bolt.png']);




 }));