import { Vec3 } from "cannon-es";

export default class GeometryBucket {
    points;
    faces;
    uvs;

    constructor(points, faces, uvs = undefined) {
        this.points = points;
        this.faces = faces;
        this.uvs = uvs;
    }
}

export function applyUVsToGeometry(uvMatrix, geometry) {
    let i = 0;
    uvMatrix.forEach(coord => {
        geometry.attributes.uv.set(coord, i*2);
        i++;
    });
    geometry.attributes.uv.needsUpdate = true;
}

export function extractVecArrayAsList(numArray) {
    const buffer = [];
    numArray.forEach(e => {
        buffer.push(e.x),
        buffer.push(e.y),
        buffer.push(e.z)
    });
    return buffer;
}

export function extractNumMatrixAsList(numMatrix) {
    const buffer = [];
    numMatrix.forEach(e => {
        e.forEach(i => {buffer.push(i)});
    });
    return buffer;
}

export const srcGeometries = {
    4: new GeometryBucket(
        [
            new Vec3(0.0, 0.0, 1.0),
            new Vec3(0.9428090453147888, 0.0, -0.3333333432674408),
            new Vec3(-0.4714045226573944, 0.8164966106414795, -0.3333333432674408),
            new Vec3(-0.4714045226573944, -0.8164966106414795, -0.3333333432674408),
        ],
        [
            [0, 1, 2],
            [0, 2, 3],
            [0, 3, 1],
            [1, 3, 2],
        ],
        [
            [0.610511302947998, 0.8103421926498413],
            [0.711689829826355, 0.6567227244377136],
            [0.805730402469635, 0.8143925070762634],
            [0.3953303098678589, 0.4906896650791168],
            [0.5005965232849121, 0.3361230492591858],
            [0.6040992736816406, 0.49224135279655457],
            [0.29311373829841614, 0.6551709771156311],
            [0.3930887281894684, 0.8112890124320984],
            [0.18961122632026672, 0.8081855773925781],
            [0.6035388112068176, 0.17629677057266235],
            [0.710568904876709, 0.335518479347229],
            [0.505327582359314, 0.335518479347229],
        ]
    ),
    6: new GeometryBucket(
        [
            new Vec3(-1.0, -1.0, -1.0),
            new Vec3(-1.0, -1.0, 1.0),
            new Vec3(-1.0, 1.0, -1.0),
            new Vec3(-1.0, 1.0, 1.0),
            new Vec3(1.0, -1.0, -1.0),
            new Vec3(1.0, -1.0, 1.0),
            new Vec3(1.0, 1.0, -1.0),
            new Vec3(1.0, 1.0, 1.0),
        ],
        [
            [0, 1, 3, 2],
            [2, 3, 7, 6],
            [6, 7, 5, 4],
            [4, 5, 1, 0],
            [2, 6, 4, 0],
            [7, 3, 1, 5],
        ],
        [
            [0.3239915370941162, 0.6512883901596069],
            [0.3239915370941162, 0.965175986289978],
            [0.5005533695220947, 0.965175986289978],
            [0.5005533695220947, 0.6512883901596069],
            [0.585703432559967, 0.6544956564903259],
            [0.585703432559967, 0.9686056971549988],
            [0.7623904347419739, 0.9686056971549988],
            [0.7623904347419739, 0.6544956564903259],
            [0.24042168259620667, 0.6541897058486938],
            [0.24042168259620667, 0.9646437168121338],
            [0.06579125672578812, 0.9646437168121338],
            [0.06579125672578812, 0.6541897058486938],
            [0.7611858248710632, 0.6566371917724609],
            [0.7611858248710632, 0.9664641618728638],
            [0.5869081020355225, 0.9664641618728638],
            [0.5869081020355225, 0.6566371917724609],
            [0.3260394334793091, 0.5019804835319519],
            [0.5011140704154968, 0.5019804835319519],
            [0.5011140704154968, 0.19073669612407684],
            [0.3260394334793091, 0.19073669612407684],
            [0.24064984917640686, 0.5012372732162476],
            [0.06401066482067108, 0.5012372732162476],
            [0.06401066482067108, 0.18721213936805725],
            [0.24064984917640686, 0.18721213936805725]
        ]
    ),
    8: new GeometryBucket(
        [
            new Vec3(1.0, 0.0, 0.0),
            new Vec3(-1.0, 0.0, 0.0),
            new Vec3(0.0, 1.0, 0.0),
            new Vec3(0.0, -1.0, 0.0),
            new Vec3(0.0, 0.0, 1.0),
            new Vec3(0.0, 0.0, -1.0),
        ],
        [
            [4, 0, 2],
            [4, 2, 1],
            [4, 1, 3],
            [4, 3, 0],
            [5, 2, 0],
            [5, 1, 2],
            [5, 3, 1],
            [5, 0, 3],
        ],
        [
            [0.5015026926994324, 0.33517950773239136],
            [0.604292094707489, 0.4915979504585266],
            [0.3987133502960205, 0.4915979504585266],
            [0.7115669250488281, 0.6497606039047241],
            [0.6088595390319824, 0.4915906488895416],
            [0.8142743110656738, 0.4915906488895416],
            [0.7064528465270996, 0.6554252505302429],
            [0.6055554747581482, 0.8113391995429993],
            [0.5066666007041931, 0.6539589762687683],
            [0.2913563847541809, 0.6544901728630066],
            [0.3929715156555176, 0.8097133040428162],
            [0.18974120914936066, 0.8097133040428162],
            [0.7079586386680603, 0.33356282114982605],
            [0.5042010545730591, 0.3324824869632721],
            [0.6052528023719788, 0.1785001903772354],
            [0.6098929047584534, 0.8098168969154358],
            [0.7094965577125549, 0.6535409688949585],
            [0.8104235529899597, 0.8120830059051514],
            [0.39319464564323425, 0.17507238686084747],
            [0.29007500410079956, 0.32707643508911133],
            [0.19007501006126404, 0.17360615730285645],
            [0.2915670573711395, 0.6517157554626465],
            [0.18946385383605957, 0.49319037795066833],
            [0.3936701714992523, 0.49319031834602356]
        ]
    ),
    10: new GeometryBucket(
        [
            new Vec3(0.0, 0.0, 1.0,),
            new Vec3(0.0, 0.0, -1.0,),
            new Vec3(0.8147122859954834, 0.26471614837646484, 0.10557282716035843),
            new Vec3(0.5035199522972107, 0.6930356621742249, -0.10557278990745544),
            new Vec3(2.4403665754846315e-09, 0.8566392064094543, 0.10557283461093903),
            new Vec3(0.5035198926925659, -0.6930355429649353, 0.10557279735803604),
            new Vec3(0.8147122263908386, -0.26471608877182007, -0.10557281225919724),
            new Vec3(2.4403661313954217e-09, -0.8566390872001648, -0.10557280480861664),
            new Vec3(-0.5035198926925659, -0.6930355429649353, 0.10557279735803604),
            new Vec3(-0.8147122263908386, -0.26471608877182007, -0.10557281225919724),
            new Vec3(-0.8147122859954834, 0.26471614837646484, 0.10557282716035843),
            new Vec3(-0.5035199522972107, 0.6930356621742249, -0.10557278990745544)
        ],
        [
            [2, 0, 5],
            [6, 1, 3],
            [7, 8, 9],
            [11, 1, 9],
            [3, 1, 11],
            [5, 0, 8],
            [7, 1, 6],
            [4, 11, 10],
            [8, 0, 10],
            [2, 3, 4],
            [6, 2, 5],
            [0, 2, 4],
            [0, 4, 10],
            [9, 8, 10],
            [7, 5, 8],
            [5, 7, 6],
            [2, 6, 3],
            [4, 3, 11],
            [10, 11, 9],
            [1, 7, 9],
        ],
        [
            [0.8092055916786194, 0.8109498620033264],
            [0.610817551612854, 0.8094953298568726],
            [0.7125266790390015, 0.6564591526985168],
            [0.6036018133163452, 0.49144482612609863],
            [0.39922887086868286, 0.49142301082611084],
            [0.5009075403213501, 0.3350255787372589],
            [0.3945925831794739, 0.17406702041625977],
            [0.29175135493278503, 0.16103066504001617],
            [0.19262488186359406, 0.17406702041625977],
            [0.5035394430160522, 0.653586745262146],
            [0.7051195502281189, 0.6544623970985413],
            [0.6065619587898254, 0.8103771805763245],
            [0.3949815332889557, 0.4956386089324951],
            [0.4965595602989197, 0.6506606340408325],
            [0.2974473834037781, 0.6525018215179443],
            [0.1934642791748047, 0.8099119663238525],
            [0.29333335161209106, 0.6546530723571777],
            [0.39320245385169983, 0.8099119663238525],
            [0.6108545660972595, 0.17959998548030853],
            [0.707777738571167, 0.3311339020729065],
            [0.506218671798706, 0.33477550745010376],
            [0.7122222185134888, 0.6505863666534424],
            [0.6746900081634521, 0.571436882019043],
            [0.6101441383361816, 0.49235573410987854],
            [0.2945067882537842, 0.3310557007789612],
            [0.1936412900686264, 0.174819216132164],
            [0.3923860192298889, 0.17684265971183777],
            [0.18785232305526733, 0.49596717953681946],
            [0.28739774227142334, 0.5075031518936157],
            [0.39412322640419006, 0.49396929144859314],
            [0.7459051609039307, 0.7432425618171692],
            [0.8092055916786194, 0.8109498620033264],
            [0.7125266790390015, 0.6564591526985168],
            [0.2914501428604126, 0.6512265205383301],
            [0.18785232305526733, 0.49596717953681946],
            [0.39412322640419006, 0.49396929144859314],
            [0.8144444227218628, 0.4963342547416687],
            [0.7122222185134888, 0.6505863666534424],
            [0.6101441383361816, 0.49235573410987854],
            [0.33349716663360596, 0.24024443328380585],
            [0.2945067882537842, 0.3310557007789612],
            [0.3923860192298889, 0.17684265971183777],
            [0.2933333218097687, 0.7971749305725098],
            [0.1934642791748047, 0.8099119663238525],
            [0.39320245385169983, 0.8099119663238525],
            [0.5697636604309082, 0.26649773120880127],
            [0.6108545660972595, 0.17959998548030853],
            [0.506218671798706, 0.33477550745010376],
            [0.534162163734436, 0.4243259131908417],
            [0.6036018133163452, 0.49144482612609863],
            [0.5009075403213501, 0.3350255787372589],
            [0.3585827350616455, 0.5832433700561523],
            [0.3949815332889557, 0.4956386089324951],
            [0.2974473834037781, 0.6525018215179443],
            [0.5667119026184082, 0.7194371223449707],
            [0.5035394430160522, 0.653586745262146],
            [0.6065619587898254, 0.8103771805763245],
            [0.2910141348838806, 0.02030629850924015],
            [0.3945925831794739, 0.17406702041625977],
            [0.19262488186359406, 0.17406702041625977]
        ]
    ),
    12: new GeometryBucket(
        [
            new Vec3(0.5773502588272095, 0.5773502588272095, 0.5773502588272095),
            new Vec3(0.5773502588272095, 0.5773502588272095, -0.5773502588272095),
            new Vec3(0.5773502588272095, -0.5773502588272095, 0.5773502588272095),
            new Vec3(0.5773502588272095, -0.5773502588272095, -0.5773502588272095),
            new Vec3(-0.5773502588272095, 0.5773502588272095, 0.5773502588272095),
            new Vec3(-0.5773502588272095, 0.5773502588272095, -0.5773502588272095),
            new Vec3(-0.5773502588272095, -0.5773502588272095, 0.5773502588272095),
            new Vec3(-0.5773502588272095, -0.5773502588272095, -0.5773502588272095),
            new Vec3(0.35682210326194763, 0.9341723322868347, 0.0),
            new Vec3(-0.35682210326194763, 0.9341723322868347, 0.0),
            new Vec3(0.35682210326194763, -0.9341723322868347, 0.0),
            new Vec3(-0.35682210326194763, -0.9341723322868347, 0.0),
            new Vec3(0.9341723322868347, 0.0, 0.35682210326194763),
            new Vec3(0.9341723322868347, 0.0, -0.35682210326194763),
            new Vec3(-0.9341723322868347, 0.0, 0.35682210326194763),
            new Vec3(-0.9341723322868347, 0.0, -0.35682210326194763),
            new Vec3(0.0, 0.35682210326194763, 0.9341723322868347),
            new Vec3(0.0, -0.35682210326194763, 0.9341723322868347),
            new Vec3(0.0, 0.35682210326194763, -0.9341723322868347),
            new Vec3(0.0, -0.35682210326194763, -0.9341723322868347),
        ],
        [
            [4, 16, 0, 8, 9],
            [1, 8, 0, 12, 13],
            [2, 12, 0, 16, 17],
            [5, 9, 8, 1, 18],
            [3, 13, 12, 2, 10],
            [6, 17, 16, 4, 14],
            [14, 4, 9, 5, 15],
            [2, 17, 6, 11, 10],
            [1, 13, 3, 19, 18],
            [7, 15, 5, 18, 19],
            [7, 11, 6, 14, 15],
            [7, 19, 3, 10, 11],
        ],
        [
            [0.15398263931274414, 0.6595039963722229],
            [0.06927695870399475, 0.5500954985618591],
            [0.10163163393735886, 0.3730689287185669],
            [0.20633363723754883, 0.3730689287185669],
            [0.23868833482265472, 0.5500955581665039],
            [0.3610817492008209, 0.3683675527572632],
            [0.3287833034992218, 0.19164855778217316],
            [0.41334179043769836, 0.0824301689863205],
            [0.4979002773761749, 0.19164851307868958],
            [0.4656018614768982, 0.3683675527572632],
            [0.8466233015060425, 0.6557214260101318],
            [0.764119565486908, 0.5491569638252258],
            [0.7956331968307495, 0.3767317831516266],
            [0.8976134061813354, 0.3767317831516266],
            [0.929127037525177, 0.5491569638252258],
            [0.6400673389434814, 0.37144479155540466],
            [0.5352098941802979, 0.37144479155540466],
            [0.502807080745697, 0.1941552460193634],
            [0.5876386165618896, 0.08458428084850311],
            [0.6724701523780823, 0.1941552460193634],
            [0.2425692230463028, 0.9264073967933655],
            [0.2425692230463028, 0.7455083131790161],
            [0.33934471011161804, 0.6896073818206787],
            [0.3991551995277405, 0.8359577655792236],
            [0.3393447697162628, 0.9823082685470581],
            [0.7604090571403503, 0.927321195602417],
            [0.6610991954803467, 0.9846860766410828],
            [0.5997224450111389, 0.8345028758049011],
            [0.6610991954803467, 0.6843196749687195],
            [0.7604090571403503, 0.7416845560073853],
            [0.14143210649490356, 0.9816471338272095],
            [0.08127884566783905, 0.8344579935073853],
            [0.14143210649490356, 0.687268853187561],
            [0.23876217007637024, 0.7434900999069214],
            [0.23876217007637024, 0.9254259467124939],
            [0.5868270993232727, 0.6569954752922058],
            [0.5036417245864868, 0.5495507121086121],
            [0.5354157090187073, 0.37570133805274963],
            [0.6382386088371277, 0.37570133805274963],
            [0.6700124740600586, 0.5495507121086121],
            [0.15328221023082733, 0.08448858559131622],
            [0.23701970279216766, 0.1926465928554535],
            [0.20503482222557068, 0.3676499128341675],
            [0.10152959823608398, 0.3676499128341675],
            [0.06954467296600342, 0.1926465928554535],
            [0.9183614253997803, 0.8345027565956116],
            [0.8587383031845093, 0.9803944826126099],
            [0.762266218662262, 0.9246687889099121],
            [0.762266218662262, 0.7443368434906006],
            [0.858738362789154, 0.6886111497879028],
            [0.7961488366127014, 0.3687049448490143],
            [0.76424241065979, 0.1941310465335846],
            [0.8477745652198792, 0.08623842895030975],
            [0.9313066005706787, 0.1941310465335846],
            [0.8994002342224121, 0.3687049448490143],
            [0.41383397579193115, 0.6561844348907471],
            [0.33188480138778687, 0.5503363609313965],
            [0.3631865978240967, 0.3790704905986786],
            [0.4644813537597656, 0.3790704905986786],
            [0.49578315019607544, 0.5503363609313965],
        ]
    ),
    20: new GeometryBucket(
        [
            new Vec3(0.8506507873535156, 0.525731086730957, 0.0),
            new Vec3(-0.8506507873535156, 0.525731086730957, 0.0),
            new Vec3(0.8506507873535156, -0.525731086730957, 0.0),
            new Vec3(-0.8506507873535156, -0.525731086730957, 0.0),
            new Vec3(0.525731086730957, 0.0, 0.8506507873535156),
            new Vec3(0.525731086730957, 0.0, -0.8506507873535156),
            new Vec3(-0.525731086730957, 0.0, 0.8506507873535156),
            new Vec3(-0.525731086730957, 0.0, -0.8506507873535156),
            new Vec3(0.0, 0.8506507873535156, 0.525731086730957),
            new Vec3(0.0, -0.8506507873535156, 0.525731086730957),
            new Vec3(0.0, 0.8506507873535156, -0.525731086730957),
            new Vec3(0.0, -0.8506507873535156, -0.525731086730957),
        ],
        [
            [0, 8, 4],
            [0, 5, 10],
            [2, 4, 9],
            [2, 11, 5],
            [1, 6, 8],
            [1, 10, 7],
            [3, 9, 6],
            [3, 7, 11],
            [0, 10, 8],
            [1, 8, 10],
            [2, 9, 11],
            [3, 11, 9],
            [4, 2, 0],
            [5, 0, 2],
            [6, 1, 3],
            [7, 3, 1],
            [8, 6, 4],
            [9, 4, 6],
            [10, 5, 7],
            [11, 7, 5],
        ],
        [
            [0.6059942841529846, 0.49227648973464966],
            [0.7073489427566528, 0.6526424884796143],
            [0.4993334710597992, 0.6512209177017212],
            [0.6059942841529846, 0.49227648973464966],
            [0.5027413964271545, 0.33577242493629456],
            [0.7087998986244202, 0.3331265151500702],
            [0.3967140316963196, 0.4925273060798645],
            [0.4993334710597992, 0.6512209177017212],
            [0.2919459342956543, 0.6517196893692017],
            [0.3967140316963196, 0.4925273060798645],
            [0.29493945837020874, 0.3357105255126953],
            [0.5027413964271545, 0.33577242493629456],
            [0.8080124258995056, 0.8167975544929504],
            [0.7101756930351257, 0.9702852964401245],
            [0.608577311038971, 0.8124687671661377],
            [0.5040212869644165, 0.3328344523906708],
            [0.6082802414894104, 0.1760680377483368],
            [0.7077430486679077, 0.3362899720668793],
            [0.19070985913276672, 0.8100963234901428],
            [0.2919459342956543, 0.6517196893692017],
            [0.39540374279022217, 0.8104590177536011],
            [0.29318052530288696, 0.3335084617137909],
            [0.19101838767528534, 0.17370201647281647],
            [0.3940155804157257, 0.1753145307302475],
            [0.6059942841529846, 0.49227648973464966],
            [0.8163903951644897, 0.49295279383659363],
            [0.7073489427566528, 0.6526424884796143],
            [0.9156029224395752, 0.6492127180099487],
            [0.7073489427566528, 0.6526424884796143],
            [0.8163903951644897, 0.49295279383659363],
            [0.3967140316963196, 0.4925273060798645],
            [0.2919459342956543, 0.6517196893692017],
            [0.18734893202781677, 0.4939850866794586],
            [0.08488312363624573, 0.6533734798431396],
            [0.18734893202781677, 0.4939850866794586],
            [0.2919459342956543, 0.6517196893692017],
            [0.4993334710597992, 0.6512209177017212],
            [0.3967140316963196, 0.4925273060798645],
            [0.6059942841529846, 0.49227648973464966],
            [0.5027413964271545, 0.33577242493629456],
            [0.6059942841529846, 0.49227648973464966],
            [0.3967140316963196, 0.4925273060798645],
            [0.8089472651481628, 0.8120107650756836],
            [0.6087054014205933, 0.8121424317359924],
            [0.7111334204673767, 0.6547126770019531],
            [0.8118059635162354, 0.17646367847919464],
            [0.610598087310791, 0.17678560316562653],
            [0.710383415222168, 0.33128276467323303],
            [0.7073489427566528, 0.6526424884796143],
            [0.6052933931350708, 0.8135624527931213],
            [0.4993334710597992, 0.6512209177017212],
            [0.2919459342956543, 0.6517196893692017],
            [0.4993334710597992, 0.6512209177017212],
            [0.39540374279022217, 0.8104590177536011],
            [0.4971621632575989, 0.3343426585197449],
            [0.39327678084373474, 0.17669568955898285],
            [0.2932550013065338, 0.3331865072250366],
            [0.3940155804157257, 0.1753145307302475],
            [0.19101838767528534, 0.17370201647281647],
            [0.29274141788482666, 0.012214269489049911],
        ]
    )
}