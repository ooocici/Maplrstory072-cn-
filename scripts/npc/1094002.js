/* Author: Xterminator
	NPC Name: 		Bush
	Map(s): 		Victoria Road : Nautilus Harbor (120000000)
	Description: 		Quest
*/
var item;

function action(mode, type, selection) {
    if (cm.getQuestStatus(2186) == 1) {
	var rand = Math.floor(Math.random() * 2);
	if (rand == 0 && !cm.haveItem(4031853)) {
	    item = 4031853;
	} else if (rand == 1) {
	    item = 4031854;
	} else {
	    item = 4031855;
	}
	cm.gainItem(item, 1);
	if (item == 4031853) {
	    cm.sendNext("我发现阿别的眼镜。");
	} else {
	    cm.sendOk("我找到一副眼镜，但好像不是阿别的。阿别的是一对牛角架……");
	}
    }
    cm.safeDispose();
    cm.dispose();
}