/* 
 
 */
var status = -1;
var hair_Colo_new;
var face_Colo_new
var modea = 0;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("��á����Ǵ�ͷ����#b#p1012117##k���������#b#t05150040##k���ҿ���Ϊ�����һ�����͡���ô����\r\n" +
                "#b#L0#����(ʹ�ûʼ�����ȯ)#k#l\r\n" +
                "#b#L1#����(ʹ�ûʼ�����ȯ)#k#l\r\n");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33710, 33720, 33750, 33660, 33670, 33680, 33690, 33970, 33980, 33990, 33810, 33960, 33730, 33740, 33760, 33770, 33800, 36770, 36920, 36490, 36990, 36740, 36880, 36940, 36900, 36950, 36890, 36830, 36620, 36690, 36730, 36720, 36640, 36700, 36580, 36680, 36530, 36520, 36510];
            } else {
                hair_Colo_new = [34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34670, 34710, 34720, 34750, 34760, 31990, 34880, 34890, 34900, 34910, 34680, 34690, 34660, 34790, 34800, 34860, 34540, 34700, 34730, 34740, 34770, 34830, 34870, 34990, 37900, 37830, 37630, 38070, 37640, 37810, 37880, 37950, 37920, 37860, 37890, 37760, 37690, 37610, 37710, 37720, 37700, 37580, 37680, 37530, 37520, 37440];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            modea = 1;
            cm.sendYesNo("ʹ�ûʼ��������ݿ�����������������͡������Ҫʹ��#b#t05150040##k������������");
        }
        if (selection == 1) {
            var hair = cm.getPlayerStat("HAIR");
            face_Colo_new = [];
            if (cm.getPlayerStat("GENDER") == 0) {
                face_Colo_new = [20020, //����020
                    20021, //����021
                    20022, //����022
                    20023, //����023
                    20024, //����024
                    20025, //����025
                    20026, //����026
                    20027, //����027
                    20028, //����028
                    20029, //����029
                    20030, //����030-����
                    20031, //����031
                    20032, //����032
                    20033, //����033-α��
                    20035, //����035-ˮ����(����)
                    20036, //����036-ս��
                    20037, //����037-����
                    20038, //����038-����
                    20040, //����040
                    20043, //����043-˫ͫɫ
                    20044, //����044-���������
                    20045, //����045-����
                    20046, //����046-������
                    20047, //����047-����
                    20048, //����048-˧��ħ��
                    20049, //����049-��ᾫ��
                    20050, //����050-����
                    20051, //����051-è��
                    20052, //����052-��
                    20053, //����053
                    20054, //����054
                    20055, //����055
                    20056, //����056
                    20057, //����057-�º;���
                    20058, //����058-ˣ���Ӱ
                    20059, //����059-�����Ӱ
                    20060, //����060
                    20061, //����061(����)
                    20062, //Ϭ����
                    20063, //����063
                    20064, //����064
                    20065, //����065-˫��
                    20066, //����066
                    20067, //����067
                    20068, //����068-�ǳ�
                    20069, //����069-�׹���
                    20070, //����070
                    20071, //����071-ͫ���
                    20072, //����072-ͫ����
                    20074, //����074-������ͫ
                    20075, //����075-�侲��ͫ
                    20076, //����076-����սʿ
                    20077, //����077-������
                    20080, //����080-������
                    20081, //����081
                    20082, //����082-����
                    20083, //�¶�����
                    20084, //����084-�¶�
                    20085, //����085-����
                    20086, //����086-˹��
                    20087, //����087-����
                    20088, //����088
                    20089, //����089-������
                    20090, //����090-��Ƥ
                    20093, //����093
                    20094, //���Ĳ���������
                    20095, //����095
                    20096, //����096-����
                    20097, //����097
                    20098, //����098-��̫
                    20099, //��˹����
                    23000, //����ð�ռ�����
                    23001, //�¸ҵ�ð�ռ�����
                    23002, //����102
                    23003, //�׶�����
                    23004, //����104
                    23005, //����005-������
                    23006, //����106
                    23008, //??? ??
                    23010, //�¹⣨�У�
                    23011, //������������
                    23012, //��������
                    23013, //��������
                    23014, //��������
                    23015, //�Ż���
                    23016, //����16-����
                    23017, //������
                    23018, //����18-��ħ
                    23019, //�Ż���
                    23020, //����020-���۾�
                    23021, //����021
                    23023, //����023-��������
                    23024, //˯����
                    23025, //ί��
                    23028, //��ͫ
                    23031//�����Բ��
                ];
            } else {
                face_Colo_new = [21020, //Ů��020
                    21021, //Ů��021
                    21022, //Ů��022
                    21023, //Ů��023
                    21024, //Ů��024
                    21025, //Ů��025
                    21026, //Ů��026
                    21027, //Ů��027
                    21028, //Ů��028-������
                    21029, //Ů��029
                    21030, //Ů��030-��Ц
                    21031, //Ů��031-��С��(����)
                    21033, //Ů��033-ˮ����
                    21034, //Ů��034-ս��
                    21035, //Ů��035-����
                    21036, //Ů��036-����
                    21038, //Ů��038
                    21041, //Ů��041-˫ͫɫ
                    21042, //Ů��042-�������Ů
                    21043, //Ů��043-����
                    21044, //Ů��044-������
                    21045, //Ů��045-����
                    21046, //Ů��046-˧��ħ��
                    21047, //Ů��047-��ᾫ��
                    21048, //Ů��048-����
                    21049, //Ů��049-è��
                    21050, //Ů��050-��
                    21052, //Ů��052
                    21053, //Ů��053
                    21054, //Ů��054
                    21055, //Ů��055-�º;���
                    21056, //Ů��056-ˣ���Ӱ
                    21057, //Ů��057-�����Ӱ
                    21058, //Ů��058
                    21059, //Ů��059
                    21060, //Ů��060
                    21061, //Ů��061-˫��
                    21062, //Ů��062
                    21063, //Ů��063
                    21064, //Ů��064-�ǳ�
                    21065, //������
                    21066, //Ů��066-ͫ���
                    21067, //Ů��067-ͫ����
                    21069, //Ů��069-������ͫ
                    21070, //Ů��070-�侲��ͫ
                    21071, //Ů��071-����սʿ
                    21072, //Ů��072-������
                    21073, //Ů��073-����ʹ
                    21074, //Ů��074-����ŵ��
                    21075, //Ů��05-�ɰ�ŵ��
                    21077, //Ů��077-��Բ��
                    21078, //Ů��078
                    21079, //����������
                    21080, //Ů��080-��ԥ
                    21081, //Ů��081-�¶���
                    21082, //Ů��082-����
                    21083, //Ů��083
                    21084, //Ů��084
                    21085, //Ů��085-ά����
                    21086, //Ů��086-������
                    21089, //��ɫ����
                    21090, //��������
                    21091, //Ů��091-������
                    21092, //Ů��092-����
                    21093, //Ů��093-ˮ������
                    21094, //���е�ð�ռ�����
                    21095, //�Ƿ�ð�ռ�֮��
                    21096, //Ů��096
                    21097, //�޼�����
                    21098, //Ů��098
                    21099, //Ů��099
                    24001, //Ů��101-����
                    24002, //Ů��102
                    24003, //??? ??
                    24004, //Ů��104
                    24007, //�¹⣨Ů��
                    24008, //������(Ů����)
                    24009, //��������
                    24010, //��������
                    24011, //Ů��11-�ٽ�ë
                    24012, //Ů��12-����
                    24013, //С����
                    24014, //Ů��14-��ħ
                    24015, //�Ż���
                    24016, //Ů��016-���۾�
                    24019, //��������
                    24020, //˯����
                    24022, //ί��
                    24024, //��ͫ
                    24026 //�����Բ��
                ];
            }
            for (var i = 0; i < face_Colo_new.length; i++) {
                face_Colo_new[i] = face_Colo_new[i] + (hair % 10);
            }
            modea = 2;
            cm.sendYesNo("ʹ�ûʼ��������ݿ�����������������͡������Ҫʹ��#b#t05150040##k������������");
        }
    } else if (status == 2) {
        if (modea == 1) {
            if (cm.setRandomAvatar(5150040, hair_Colo_new) == 1) {
                cm.sendOk("����,����������̾��������Ͱ�!");
            } else {
                cm.sendOk("����Ҫ�лʼ��������ݿ����Ҳ���Ϊ���������ݡ�");
            }
        }

        if (modea == 2) {
            if (cm.setRandomAvatar(5150040, face_Colo_new) == 1) {
                cm.sendOk("����,����������̾��������Ͱ�!");
            } else {
                cm.sendOk("����Ҫ�лʼ��������ݿ����Ҳ���Ϊ���������ݡ�");
            }
        }
        cm.safeDispose();
    }
}
