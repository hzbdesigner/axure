for(var i = 0; i < 499; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u217','hidden','none',500);

	SetPanelVisibility('u187','hidden','none',500);

	SetPanelVisibility('u93','hidden','none',500);

	SetPanelVisibility('u165','hidden','none',500);

	SetPanelVisibility('u51','hidden','none',500);

	SetPanelVisibility('u54','hidden','none',500);

	SetPanelVisibility('u72','hidden','none',500);

	SetPanelVisibility('u283','hidden','none',500);

}

});

widgetIdToShowFunction['u50'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('OnLoadVariable')) > Number('0')) {
function waitu23af246fc4ff4c0db2c2dbeeb71637271() {

SetGlobalVariableValue('OnLoadVariable', '' + (GetGlobalVariableValue('OnLoadVariable') - 1) + '');

SetWidgetRichText('u53', '<p style="text-align:center;"><span style="font-family:Heiti SC;font-size:20px;font-weight:normal;font-style:normal;text-decoration:none;color:#CCCCCC;">' + (GetGlobalVariableValue('OnLoadVariable')) + '秒后重新获取</span></p>');

	SetPanelVisibility('u50','hidden','none',500);
}
setTimeout(waitu23af246fc4ff4c0db2c2dbeeb71637271, 1000);

}
else
if ((GetGlobalVariableValue('OnLoadVariable')) == ('0')) {

	SetPanelVisibility('u51','hidden','none',500);

}

}

widgetIdToHideFunction['u50'] = function() {
var e = windowEvent;

if ((GetGlobalVariableValue('OnLoadVariable')) > Number('0')) {
function waitu9ca5b073c53343fdaaab9b08307a15f01() {

SetGlobalVariableValue('OnLoadVariable', '' + (GetGlobalVariableValue('OnLoadVariable') - 1) + '');

SetWidgetRichText('u53', '<p style="text-align:center;"><span style="font-family:Heiti SC;font-size:20px;font-weight:normal;font-style:normal;text-decoration:none;color:#CCCCCC;">' + (GetGlobalVariableValue('OnLoadVariable')) + '秒后重新获取</span></p>');

	SetPanelVisibility('u50','','none',500);
}
setTimeout(waitu9ca5b073c53343fdaaab9b08307a15f01, 1000);

}
else
if ((GetGlobalVariableValue('OnLoadVariable')) == ('0')) {

	SetPanelVisibility('u51','hidden','none',500);

}

}
gv_vAlignTable['u270'] = 'top';u272.tabIndex = 0;

u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if (true) {

	SetPanelVisibility('u283','','none',500);

	SetPanelState('u283', 'pd1u283','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u272'] = 'top';u273.tabIndex = 0;

u273.style.cursor = 'pointer';
$axure.eventManager.click('u273', function(e) {

if (true) {

	SetPanelState('u4', 'pd7u4','swing','left',500,'swing','left',500);

SetGlobalVariableValue('OnLoadVariable', '2');

}
});
gv_vAlignTable['u273'] = 'top';gv_vAlignTable['u274'] = 'top';gv_vAlignTable['u276'] = 'center';gv_vAlignTable['u278'] = 'center';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u280'] = 'center';gv_vAlignTable['u282'] = 'center';gv_vAlignTable['u285'] = 'center';gv_vAlignTable['u287'] = 'top';gv_vAlignTable['u289'] = 'top';gv_vAlignTable['u490'] = 'top';gv_vAlignTable['u491'] = 'top';u492.tabIndex = 0;

u492.style.cursor = 'pointer';
$axure.eventManager.click('u492', function(e) {

if (true) {

	SetPanelState('u433', 'pd0u433','swing','right',500,'swing','right',500);

	MoveWidgetTo('u494', GetNum('125'), GetNum('107'),'swing',500);

}
});
gv_vAlignTable['u492'] = 'top';u493.tabIndex = 0;

u493.style.cursor = 'pointer';
$axure.eventManager.click('u493', function(e) {

if (true) {

	SetPanelState('u433', 'pd1u433','swing','left',500,'swing','left',500);

	MoveWidgetTo('u494', GetNum('255'), GetNum('107'),'swing',500);

}
});
gv_vAlignTable['u493'] = 'top';gv_vAlignTable['u496'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u291'] = 'top';gv_vAlignTable['u293'] = 'top';document.getElementById('u108_img').tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	SetPanelVisibility('u187','','none',500);

}
});
gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u299'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u111'] = 'center';document.getElementById('u112_img').tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u114'] = 'top';gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u116'] = 'top';u117.tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

	MoveWidgetTo('u122', GetNum('15'), GetNum('206'),'swing',500);

}
});
gv_vAlignTable['u117'] = 'top';u118.tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	MoveWidgetTo('u122', GetNum('125'), GetNum('206'),'swing',500);

}
});
gv_vAlignTable['u118'] = 'top';u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	MoveWidgetTo('u122', GetNum('255'), GetNum('206'),'swing',500);

}
});
gv_vAlignTable['u119'] = 'top';u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	MoveWidgetTo('u122', GetNum('355'), GetNum('206'),'swing',500);

}
});
gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u129'] = 'top';gv_vAlignTable['u130'] = 'top';u132.tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	SetPanelVisibility('u283','','none',500);

	SetPanelState('u283', 'pd1u283','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u132'] = 'top';u133.tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	SetPanelState('u4', 'pd7u4','swing','left',500,'swing','left',500);

SetGlobalVariableValue('OnLoadVariable', '1');

}
});
gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u134'] = 'top';gv_vAlignTable['u136'] = 'center';document.getElementById('u137_img').tabIndex = 0;

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	SetPanelVisibility('u217','','none',500);

}
});
gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u145'] = 'top';gv_vAlignTable['u146'] = 'top';u148.tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelVisibility('u165','','none',500);

}
});
gv_vAlignTable['u148'] = 'top';document.getElementById('u149_img').tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	SetPanelVisibility('u165','','none',500);

}
});
document.getElementById('u10_img').tabIndex = 0;
HookClick('u10', false);

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',500,'swing','right',500);

	SetPanelState('u5', 'pd0u5','none','',500,'fade','',500);

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u13'] = 'center';document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	SetPanelVisibility('u93','','none',500);

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u150'] = 'center';document.getElementById('u151_img').tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	SetPanelVisibility('u165','','none',500);

}
});
gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u153'] = 'top';gv_vAlignTable['u154'] = 'top';u156.tabIndex = 0;

u156.style.cursor = 'pointer';
$axure.eventManager.click('u156', function(e) {

if (true) {

	SetPanelVisibility('u283','','none',500);

	SetPanelState('u283', 'pd1u283','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u156'] = 'top';gv_vAlignTable['u157'] = 'top';gv_vAlignTable['u158'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u164'] = 'center';document.getElementById('u166_img').tabIndex = 0;

u166.style.cursor = 'pointer';
$axure.eventManager.click('u166', function(e) {

if (true) {

	SetPanelVisibility('u165','hidden','none',500);

}
});
gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u169'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u35'] = 'top';u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u72','','fade',500);

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u38'] = 'top';u39.tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	SetPanelVisibility('u54','','fade',500);

}
});
gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u171'] = 'center';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u176'] = 'top';gv_vAlignTable['u177'] = 'top';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u43'] = 'center';document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

SetGlobalVariableValue('OnLoadVariable', '60');

	SetPanelVisibility('u51','','none',500);

SetWidgetRichText('u53', '<p style="text-align:center;"><span style="font-family:Heiti SC;font-size:20px;font-weight:normal;font-style:normal;text-decoration:none;color:#CCCCCC;">' + (GetGlobalVariableValue('OnLoadVariable')) + '秒后重新获取</span></p>');

	SetPanelVisibility('u50','hidden','none',500);

}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u390'] = 'top';gv_vAlignTable['u391'] = 'top';gv_vAlignTable['u392'] = 'top';gv_vAlignTable['u393'] = 'top';gv_vAlignTable['u394'] = 'top';gv_vAlignTable['u396'] = 'center';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u184'] = 'center';gv_vAlignTable['u186'] = 'center';document.getElementById('u188_img').tabIndex = 0;

u188.style.cursor = 'pointer';
$axure.eventManager.click('u188', function(e) {

if (true) {

	SetPanelVisibility('u187','hidden','none',500);

}
});
gv_vAlignTable['u189'] = 'center';document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

SetGlobalVariableValue('OnLoadVariable', '9');

;

SetWidgetRichText('u53', '<p style="text-align:center;"><span style="font-family:Microsoft YaHei;font-size:20px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;">' + (GetGlobalVariableValue('OnLoadVariable')) + '秒后重新获取</span></p>');

	SetPanelVisibility('u50','hidden','none',500);

}
});
gv_vAlignTable['u53'] = 'center';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	SetPanelVisibility('u54','hidden','fade',500);

}
});
gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u191'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u199'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	SetPanelVisibility('u72','hidden','fade',500);

}
});
gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u87'] = 'center';document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if ((GetGlobalVariableValue('OnLoadVariable')) == ('1')) {

	SetPanelState('u4', 'pd6u4','swing','right',500,'swing','right',500);

}
else
if ((GetGlobalVariableValue('OnLoadVariable')) == ('2')) {

	SetPanelState('u4', 'pd5u4','swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u90'] = 'top';gv_vAlignTable['u91'] = 'top';gv_vAlignTable['u92'] = 'top';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u401'] = 'center';gv_vAlignTable['u403'] = 'center';document.getElementById('u404_img').tabIndex = 0;

u404.style.cursor = 'pointer';
$axure.eventManager.click('u404', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u405'] = 'center';gv_vAlignTable['u406'] = 'top';gv_vAlignTable['u408'] = 'top';gv_vAlignTable['u410'] = 'top';gv_vAlignTable['u412'] = 'top';gv_vAlignTable['u414'] = 'top';gv_vAlignTable['u416'] = 'top';gv_vAlignTable['u418'] = 'top';gv_vAlignTable['u420'] = 'top';gv_vAlignTable['u422'] = 'top';gv_vAlignTable['u424'] = 'center';document.getElementById('u425_img').tabIndex = 0;

u425.style.cursor = 'pointer';
$axure.eventManager.click('u425', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','left',500,'none','',500);

}
});
gv_vAlignTable['u426'] = 'center';gv_vAlignTable['u428'] = 'center';gv_vAlignTable['u429'] = 'top';gv_vAlignTable['u295'] = 'top';gv_vAlignTable['u430'] = 'top';gv_vAlignTable['u431'] = 'top';gv_vAlignTable['u435'] = 'top';u436.tabIndex = 0;

u436.style.cursor = 'pointer';
$axure.eventManager.click('u436', function(e) {

if (true) {

	SetPanelState('u4', 'pd2u4','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u436'] = 'top';gv_vAlignTable['u438'] = 'center';gv_vAlignTable['u440'] = 'top';gv_vAlignTable['u441'] = 'top';gv_vAlignTable['u442'] = 'top';gv_vAlignTable['u444'] = 'center';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u447'] = 'top';gv_vAlignTable['u448'] = 'top';gv_vAlignTable['u450'] = 'center';gv_vAlignTable['u451'] = 'top';gv_vAlignTable['u452'] = 'top';document.getElementById('u453_img').tabIndex = 0;
HookClick('u453', false);

u453.style.cursor = 'pointer';
$axure.eventManager.click('u453', function(e) {

if (true) {

	SetPanelState('u4', 'pd5u4','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u454'] = 'center';gv_vAlignTable['u456'] = 'center';gv_vAlignTable['u458'] = 'top';u459.tabIndex = 0;

u459.style.cursor = 'pointer';
$axure.eventManager.click('u459', function(e) {

if (true) {

	SetPanelState('u4', 'pd2u4','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u459'] = 'top';gv_vAlignTable['u461'] = 'center';gv_vAlignTable['u463'] = 'top';u464.tabIndex = 0;

u464.style.cursor = 'pointer';
$axure.eventManager.click('u464', function(e) {

if (true) {

	SetPanelState('u4', 'pd1u4','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u464'] = 'top';gv_vAlignTable['u466'] = 'center';gv_vAlignTable['u468'] = 'top';u469.tabIndex = 0;

u469.style.cursor = 'pointer';
$axure.eventManager.click('u469', function(e) {

if (true) {

	SetPanelState('u4', 'pd3u4','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u469'] = 'top';gv_vAlignTable['u471'] = 'center';gv_vAlignTable['u473'] = 'top';u474.tabIndex = 0;

u474.style.cursor = 'pointer';
$axure.eventManager.click('u474', function(e) {

if (true) {

	SetPanelState('u4', 'pd4u4','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u474'] = 'top';gv_vAlignTable['u476'] = 'center';document.getElementById('u477_img').tabIndex = 0;
HookClick('u477', false);

u477.style.cursor = 'pointer';
$axure.eventManager.click('u477', function(e) {

if (true) {

	SetPanelState('u4', 'pd6u4','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u478'] = 'center';gv_vAlignTable['u479'] = 'top';gv_vAlignTable['u481'] = 'center';gv_vAlignTable['u483'] = 'center';gv_vAlignTable['u485'] = 'center';gv_vAlignTable['u486'] = 'top';gv_vAlignTable['u487'] = 'top';gv_vAlignTable['u489'] = 'center';gv_vAlignTable['u301'] = 'center';gv_vAlignTable['u302'] = 'top';u303.tabIndex = 0;

u303.style.cursor = 'pointer';
$axure.eventManager.click('u303', function(e) {

if (true) {

	SetPanelState('u283', 'pd0u283','swing','down',500,'swing','down',500);
function waitue7f651a96d8246398445f0644c84e80b1() {

	SetPanelVisibility('u283','hidden','none',500);
}
setTimeout(waitue7f651a96d8246398445f0644c84e80b1, 1000);

}
});
gv_vAlignTable['u303'] = 'top';gv_vAlignTable['u305'] = 'center';gv_vAlignTable['u307'] = 'top';gv_vAlignTable['u309'] = 'top';gv_vAlignTable['u498'] = 'center';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u313'] = 'top';gv_vAlignTable['u315'] = 'top';gv_vAlignTable['u318'] = 'top';gv_vAlignTable['u319'] = 'top';gv_vAlignTable['u321'] = 'center';document.getElementById('u322_img').tabIndex = 0;

u322.style.cursor = 'pointer';
$axure.eventManager.click('u322', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u323'] = 'center';gv_vAlignTable['u324'] = 'top';gv_vAlignTable['u326'] = 'center';gv_vAlignTable['u328'] = 'top';gv_vAlignTable['u330'] = 'top';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u334'] = 'top';gv_vAlignTable['u336'] = 'top';gv_vAlignTable['u340'] = 'top';gv_vAlignTable['u341'] = 'top';gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u344'] = 'center';document.getElementById('u345_img').tabIndex = 0;

u345.style.cursor = 'pointer';
$axure.eventManager.click('u345', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u346'] = 'center';gv_vAlignTable['u347'] = 'top';gv_vAlignTable['u349'] = 'center';gv_vAlignTable['u350'] = 'top';gv_vAlignTable['u352'] = 'center';gv_vAlignTable['u353'] = 'top';gv_vAlignTable['u355'] = 'center';gv_vAlignTable['u356'] = 'top';gv_vAlignTable['u358'] = 'center';gv_vAlignTable['u359'] = 'top';gv_vAlignTable['u361'] = 'center';gv_vAlignTable['u362'] = 'top';gv_vAlignTable['u364'] = 'center';gv_vAlignTable['u365'] = 'top';gv_vAlignTable['u367'] = 'center';gv_vAlignTable['u368'] = 'top';gv_vAlignTable['u103'] = 'top';document.getElementById('u104_img').tabIndex = 0;
HookClick('u104', false);

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	SetPanelVisibility('u93','hidden','none',500);

	SetPanelState('u5', 'pd1u5','swing','left',500,'swing','left',500);

}
});
gv_vAlignTable['u105'] = 'center';document.getElementById('u106_img').tabIndex = 0;
HookClick('u106', false);

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	SetPanelVisibility('u93','hidden','none',500);

}
});
gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u370'] = 'center';gv_vAlignTable['u371'] = 'top';gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u375'] = 'top';gv_vAlignTable['u377'] = 'top';gv_vAlignTable['u379'] = 'top';gv_vAlignTable['u381'] = 'top';gv_vAlignTable['u382'] = 'top';gv_vAlignTable['u384'] = 'top';gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u202'] = 'top';gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u204'] = 'top';gv_vAlignTable['u205'] = 'top';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u209'] = 'top';document.getElementById('u397_img').tabIndex = 0;

u397.style.cursor = 'pointer';
$axure.eventManager.click('u397', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u398'] = 'center';gv_vAlignTable['u399'] = 'top';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u212'] = 'top';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u214'] = 'top';gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u216'] = 'top';document.getElementById('u218_img').tabIndex = 0;

u218.style.cursor = 'pointer';
$axure.eventManager.click('u218', function(e) {

if (true) {

	SetPanelVisibility('u217','hidden','none',500);

}
});
gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u225'] = 'center';gv_vAlignTable['u226'] = 'top';gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u230'] = 'top';gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u235'] = 'top';gv_vAlignTable['u236'] = 'top';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u239'] = 'top';gv_vAlignTable['u240'] = 'top';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u242'] = 'top';gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u244'] = 'top';gv_vAlignTable['u245'] = 'top';gv_vAlignTable['u246'] = 'top';gv_vAlignTable['u248'] = 'center';document.getElementById('u249_img').tabIndex = 0;

u249.style.cursor = 'pointer';
$axure.eventManager.click('u249', function(e) {

if (true) {

	SetPanelState('u4', 'pd0u4','swing','right',500,'swing','right',500);

}
});
gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u252'] = 'top';gv_vAlignTable['u253'] = 'top';u254.tabIndex = 0;

u254.style.cursor = 'pointer';
$axure.eventManager.click('u254', function(e) {

if (true) {

	MoveWidgetTo('u259', GetNum('15'), GetNum('116'),'swing',500);

}
});
gv_vAlignTable['u254'] = 'top';u255.tabIndex = 0;

u255.style.cursor = 'pointer';
$axure.eventManager.click('u255', function(e) {

if (true) {

	MoveWidgetTo('u259', GetNum('125'), GetNum('116'),'swing',500);

}
});
gv_vAlignTable['u255'] = 'top';u256.tabIndex = 0;

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	MoveWidgetTo('u259', GetNum('255'), GetNum('116'),'swing',500);

}
});
gv_vAlignTable['u256'] = 'top';u257.tabIndex = 0;

u257.style.cursor = 'pointer';
$axure.eventManager.click('u257', function(e) {

if (true) {

	MoveWidgetTo('u259', GetNum('355'), GetNum('116'),'swing',500);

}
});
gv_vAlignTable['u257'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u263'] = 'center';gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u268'] = 'top';gv_vAlignTable['u269'] = 'top';