;(function(L2_f){L2.aux.onLoad(L2_f)}(function() {

  var L2_show = (function(L2_qry) { if (L2_qry instanceof L2.Ar) L2_qry = L2_qry.v[0]; return L2.html(document.querySelectorAll(L2_qry))._html_.setGen(['setStyle','display','block'])});
  var L2_hide = (function(L2_qry) { if (L2_qry instanceof L2.Ar) L2_qry = L2_qry.v[0]; return L2.html(document.querySelectorAll(L2_qry))._html_.setGen(['setStyle','display','none'])});
  var L2_showPanel = function(L2_id) { if (L2_id instanceof L2.Ar) L2_id = L2_id.v[0];
    L2.html(document.querySelectorAll('#panel'))._html_.setGen(['setStyle','min-width','450px']);
    L2.sca(L2_show(('#mask,#panel,#'+((L2_id+'_panel'))))); };
  var L2_hidePanel = (function(L2_id) { if (L2_id instanceof L2.Ar) L2_id = L2_id.v[0]; return L2.sca(L2_hide('#mask,#panel,.sub_panel'))});


  L2.html(document.querySelectorAll('#close,#mask'))._html_.on('click',L2_hidePanel);


  ;(function(L2_f){L2.html(document.querySelectorAll('#choosing,#about,#tv_film,#photos,#jokes'))._html_.on('click',L2_f)}(function(L2_evt) { if (L2_evt instanceof L2.Ar) L2_evt = L2_evt.v[0];
    L2.sca(L2_showPanel(L2.html([L2_evt._event_.currentTarget])._html_.checkElmt()._html_.getGen('attr','id')));

 }));
  ;(function(L2_f){L2.html(document.querySelectorAll('#panel'))._html_.on('click',L2_f)}(function(L2_evt) { if (L2_evt instanceof L2.Ar) L2_evt = L2_evt.v[0];
    L2_evt._event_.stop('propagation');

 }));
  var L2_photoMax = (7);
  var L2_photoInd = (new L2.Ar((1)))._setRand(L2_photoMax).v[0];
  var L2_newPhoto = function() {
    L2.html(document.querySelectorAll('#panel'))._html_.setGen(['setStyle','min-width','200px']);
    L2.html(document.querySelectorAll('#photo_wrap'))._html_.setGen(['setProp','innerHTML','<img id="photo">']);
    ;(function(L2_f){L2.html(document.querySelectorAll('#photo'))._html_.on('load',L2_f)}(function(L2_evt) { if (L2_evt instanceof L2.Ar) L2_evt = L2_evt.v[0];
      var L2_me = L2.html([L2_evt._event_.currentTarget])._html_.checkElmt();
      var L2_ratio = L2.symb.aa.apply("/",L2_me._html_.getGen('style','width')._mapMeth_ass("replaceStr",'px',''),(L2_me._html_.getGen('style','height')._mapMeth_ass("replaceStr",'px',''))).v[0];
      if ((L2_ratio>(1))) {
        L2_me._html_.setGen(['setStyle','width','520px','height',((L2.pf.ew.round((((1)/L2_ratio)*(520)))+'px'))]);
        L2.html(document.querySelectorAll('#photo_wrap'))._html_.setGen(['setStyle','width','530px','height',((L2.pf.ew.round((((1)/L2_ratio)*(530)))+'px'))]); }
      else {
        L2_me._html_.setGen(['setStyle','height','520px','width',((L2.pf.ew.round((L2_ratio*(520)))+'px'))]);
        L2.html(document.querySelectorAll('#photo_wrap'))._html_.setGen(['setStyle','height','530px','width',((L2.pf.ew.round((L2_ratio*(530)))+'px'))]); }
      L2_me._html_.setGen(['setStyle','visibility','visible']); }));
    L2.html(document.querySelectorAll('#photo'))._html_.setGen(['setAttr','src',((('images/photos/'+L2_photoInd)+'.jpg'))]);
    L2_photoInd = ((L2_photoInd+(1))%((L2_photoMax+(1)))); };
  L2.html(document.querySelectorAll('#photos,#photo_btn'))._html_.on('click',L2_newPhoto);


  var L2_Joke = (new L2.ArSh((new L2.ArJSA([(0),(2)]))));
  L2_Joke._appendAr((L2.sc.apnd("c",'Why is 6 afraid of 7?','Because 7 8 9!')),"r",false,true);

  L2_Joke._appendAr((L2.sc.apnd("c",'What do you call a man with a seagull on his head?','Cliff.')),"r",false,true);

  L2_Joke._appendAr((L2.sc.apnd("c",'What did the zero say to the eight?','Nice belt.')),"r",false,true);

  L2_Joke._appendAr((L2.sc.apnd("c",('Knock Knock<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who\'s there?<br><br>'+'Boo<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspBoo Who?'),'No need to cry!')),"r",false,true);


  var L2_jokeInd = (new L2.Ar((1)))._setRand(((L2_Joke.r-(1)))).v[0];
  var L2_newJoke = function() {
    L2_jokeInd = ((L2_jokeInd+(1))%(L2_Joke.r));
    L2.html(document.querySelectorAll('#punchline_text'))._html_.setGen(['setStyle','visibility','hidden'])._html_.setGen(['setProp','innerHTML',(L2_Joke._slashEnt2(L2_jokeInd,(1)))]);


    L2.html(document.querySelectorAll('#joke_text'))._html_.setGen(['setProp','innerHTML',(L2_Joke._slashEnt2(L2_jokeInd,(0)))]); };
  L2.html(document.querySelectorAll('#jokes,#new_joke_btn'))._html_.on('click',L2_newJoke);
  ;(function(L2_f){L2.html(document.querySelectorAll('#punchline_btn'))._html_.on('click',L2_f)}(function() {
    L2.html(document.querySelectorAll('#punchline_text'))._html_.setGen(['setStyle','visibility','visible']);

 }));
  undefined;

  var L2_link = function(s) { window.open(s, '_blank') };

  L2.html(document.querySelectorAll('#youtube'))._html_.on('click',(function() { return L2.sca(L2_link('https://www.youtube.com/channel/UCcvpT7viHj3ACQaf64-YzXA'))}));

  L2.html(document.querySelectorAll('#twitter'))._html_.on('click',(function() { return L2.sca(L2_link('https://twitter.com/intent/tweet?text=Hattie%27s%20wonderful%20website%21%20https%3A%2F%2Fhatttiecrackles.github.io%2Fwebsite%2F'))}));

  L2.html(document.querySelectorAll('.choosing_icon'))._html_.on('click',(function(L2_evt) { if (L2_evt instanceof L2.Ar) L2_evt = L2_evt.v[0]; return L2.sca(L2_link(L2.html([L2_evt._event_.currentTarget])._html_.checkElmt()._html_.getGen('attr','data-link').v[0]))}));








 }));