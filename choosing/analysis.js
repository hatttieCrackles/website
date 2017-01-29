;(function() {




  var L2_trans = function(L2_path) { if (L2_path instanceof L2.Ar) L2_path = L2_path.v[0]; var L2_From = new L2.ArJSA([undefined]);
    var L2_Data = L2.aux.fromJSON(L2.sc.read((((L2_path || (L2.pf.noArg.wd()))+'/')+'config.json')));
    var L2_Pages = L2.sc.unwrap(L2_Data._dEnt("pages"));
    var L2_PageNames = L2_Pages["key"]("r");
    var L2_T = (new L2.ArSh((new L2.ArJSA([L2_Pages.r,(L2_Pages.r)])),0))["key:"]("r",undefined,L2_PageNames)["key:"]("c",undefined,L2_PageNames);
    var L2_p_index_=0; var L2_p_limit_=L2_PageNames.v.length; var L2_p=L2_PageNames.v[0]; for (;L2_p_index_<L2_p_limit_; L2_p=L2_PageNames.v[++L2_p_index_]) {
      L2_Pages._vEnt(L2_p);
      L2_From = L2.sc.unwrap(L2_Pages._vEnt(L2_p));
      if ((L2_From.r>(0))) {
        L2_T._twoDimSet("r","c",(new L2.ArJSA([L2_p])),(L2_From["map"]((function(L2_X) { if (!(L2_X instanceof L2.Ar)) L2_X = new L2.ArJSA([L2_X]); return L2_X._dEnt("page")}))._map(L2.pf.ew.unbox)),(1)); } }
    return L2_T["title:"]('Page Transitions')["label:"]("r",'From')["label:"]("c",'To');







 };
  var L2_compile = function(L2_path) { if (L2_path instanceof L2.Ar) L2_path = L2_path.v[0];
    L2_path = ((L2_path || (L2.pf.noArg.wd()))+'/');
    var L2_Data = L2.aux.fromJSON(L2.sc.read((L2_path+'config.json')));
    var L2_PageNames = L2.sc.unwrap(L2_Data._dEnt("pages"))["key"]("r");

    var converter = new (require('../Hattie/website/choosing/node_modules/showdown')).Converter();

    var L2_p_index_=0; var L2_p_limit_=L2_PageNames.v.length; var L2_p=L2_PageNames.v[0]; for (;L2_p_index_<L2_p_limit_; L2_p=L2_PageNames.v[++L2_p_index_]) {
      var L2_text = L2.sc.read((((L2_path+'pages/')+L2_p)+'.md'));

      L2_text = converter.makeHtml(L2_text);

      L2.aux.openIfBox(L2_Data._dEnt("pages"))["_vEnt:"](L2_p,(new L2.Box((L2.sc.pairMult('text',L2_text,'links',(L2.aux.openIfBox(L2_Data._dEnt("pages"))._vEnt(L2_p))))))); }
    L2.sc.write(L2_Data["toJSONa"](),((L2_path+'configAll.json')));
 };
  L2.sca(L2_compile('choosing/do_you_dare'));






 }());