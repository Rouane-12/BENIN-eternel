export type King = {
  slug: string;
  name: string;
  reign: string;
  epithet: string;
  summary: string;
  paragraphs: string[];
  legacy: string;
};

export const KINGS: King[] = [
  {
    slug: "gangnihessou",
    name: "Gangnihessou",
    reign: "vers 1600",
    epithet: "Le fondateur de la dynastie",
    summary:
      "Considéré comme le premier roi de la lignée fon, Gangnihessou pose les fondations spirituelles et politiques qui donneront naissance au royaume du Dahomey.",
    paragraphs: [
      "Au tournant du XVIIᵉ siècle, dans le plateau d'Abomey, un prince venu de la région de Tado au pays Adja franchit le fleuve Mono pour s'installer parmi les Fon. Ce prince, dont la mémoire collective conserve le nom de Gangnihessou, est l'un des trois fils d'Agasu, ancêtre mythique né de l'union d'une princesse et d'une panthère sacrée. Cette généalogie totémique structurera durablement l'imaginaire royal du Dahomey : les rois descendent d'un fauve, leur autorité tient à la fois du sang et du sacré.",
      "Gangnihessou n'est pas encore le souverain d'un État centralisé. Il dirige un clan, une fraternité guerrière qui doit composer avec les chefferies locales, les cultes de la terre, les marchands de la côte et les caravanes du nord. Il établit les premières alliances matrimoniales avec les familles autochtones et impose, par la diplomatie autant que par la force, le respect du tabou de la panthère, première loi religieuse de la future monarchie.",
      "Son règne est court, presque liminal, mais il invente une grammaire du pouvoir : recade royale, parole sacrée, conseil des anciens, sépultures dynastiques. Quand il disparaît, son frère Dakodonou hérite d'un noyau politique encore fragile mais doté d'une légitimité spirituelle qui le distingue déjà de ses voisins. Sans Gangnihessou, il n'y aurait pas eu de Dahomey.",
    ],
    legacy:
      "Patron des récades royales, gardien du mythe d'Agasu et de la panthère, il incarne l'origine, le serment fondateur que chaque roi répétera dans son nom de règne.",
  },
  {
    slug: "dakodonou",
    name: "Dakodonou",
    reign: "vers 1620 – 1645",
    epithet: "Le roi du sang versé",
    summary:
      "Successeur de Gangnihessou, Dakodonou impose le clan fon sur le plateau d'Abomey par la guerre et inscrit la dynastie dans la durée.",
    paragraphs: [
      "Dakodonou règne dans un Bénin pré-colonial fragmenté en chefferies rivales — Allada, Houéda, Houéyogbé, Mahi. Sa stratégie est implacable : élimination des chefs hostiles, intégration des vaincus, mariages avec les lignées autochtones pour consolider la légitimité du jeune royaume.",
      "La tradition lui attribue le meurtre fondateur du chef Dan, dont le ventre éventré donnera, dit la légende, son nom au royaume — \"Dan-xo-mè\", \"sur le ventre de Dan\". Plus qu'une anecdote, c'est un acte politique : la nouvelle capitale s'élève littéralement sur la dépouille des pouvoirs anciens.",
      "Sous son autorité s'organisent les premières institutions : conseil restreint, cour de justice, milice royale, recensement coutumier des villages tributaires. Dakodonou laisse à son successeur un territoire encore modeste mais structuré, prêt à devenir un véritable État.",
    ],
    legacy:
      "Il fonde Abomey comme capitale politique et impose le nom même du royaume — Danxomè, Dahomey.",
  },
  {
    slug: "houegbadja",
    name: "Houégbadja (Wegbaja)",
    reign: "1645 – 1685",
    epithet: "Le fondateur officiel du Dahomey",
    summary:
      "Architecte de la monarchie centralisée, Houégbadja transforme un clan victorieux en État de droit dynastique, doté de palais, d'institutions et de coutumes royales.",
    paragraphs: [
      "Houégbadja, fils de Dakodonou, est le véritable bâtisseur du royaume du Dahomey. À son avènement vers 1645, il hérite d'un pouvoir territorial limité mais d'une légitimité dynastique solide. Il décide alors de transformer ce pouvoir clanique en monarchie centralisée, héréditaire, sacrée — un projet politique sans équivalent dans la région.",
      "Il fait d'Abomey la capitale définitive du royaume et y édifie le premier palais royal — un ensemble de cours, de murs en banco et d'autels qui deviendra, agrandi par chacun de ses successeurs, l'extraordinaire complexe palatial classé aujourd'hui au patrimoine mondial de l'UNESCO. Chaque roi y construira son propre palais, sans détruire ceux des prédécesseurs : l'architecture devient archive.",
      "Houégbadja codifie les institutions : conseil des Migan (premier ministre, garde des sceaux), Mehu (intendant économique), Tokpo (ministre de l'agriculture), Yovogan (ministre des étrangers et de la côte). Il instaure le principe d'indivisibilité du royaume : la terre appartient au roi, qui en délègue l'usage. Il organise les recensements, les corvées royales, la perception des tributs en cauris, en huile de palme, en captifs.",
      "Il pose aussi les fondations rituelles de la monarchie : la cérémonie de l'Hwetanu — la \"coutume\" annuelle —, les sacrifices aux ancêtres, le culte des têtes royales conservées dans des paniers sacrés. Ces rites ne sont pas folkloriques : ils sont l'État.",
      "Quand il meurt vers 1685, Houégbadja laisse un royaume cohérent, riche, redouté, prêt à conquérir la côte. Il est le \"fondateur\" du Dahomey moderne au même titre que Clovis l'est pour la France ou Ivan III pour la Russie.",
    ],
    legacy:
      "Capitale Abomey, palais royaux, ministères de cour, coutume annuelle, principe de propriété royale du sol — toute la structure du Dahomey vient de lui.",
  },
  {
    slug: "akaba",
    name: "Akaba",
    reign: "1685 – 1708",
    epithet: "Le roi guerrier",
    summary:
      "Akaba étend par les armes le royaume hérité de son père, repoussant les frontières vers le nord et l'est du plateau.",
    paragraphs: [
      "Successeur de Houégbadja, Akaba consacre la quasi-totalité de son règne à la consolidation militaire du royaume. Il organise une armée permanente, divisée en compagnies disciplinées, équipée des premiers fusils achetés sur la côte. Cette modernisation militaire change l'équilibre régional.",
      "Il mène des campagnes contre les chefferies mahi du nord, soumet les villages rebelles du plateau et impose à plusieurs petites royautés un tribut annuel. Sa sœur jumelle Hangbé, figure marquante de la cour, joue un rôle politique majeur et exercera même brièvement la régence à sa mort.",
      "Akaba meurt sans avoir pu réaliser son grand projet : la conquête de Ouidah. Mais il lègue à son frère Agaja une armée aguerrie, un trésor royal solide et une administration prête à passer à l'offensive maritime.",
    ],
    legacy:
      "Première armée moderne du Dahomey ; consolidation territoriale du plateau d'Abomey.",
  },
  {
    slug: "agaja",
    name: "Agaja",
    reign: "1708 – 1740",
    epithet: "Le conquérant de la mer",
    summary:
      "Agaja ouvre le Dahomey à l'Atlantique en conquérant Allada (1724) et Ouidah (1727), faisant de son royaume un acteur central du commerce mondial.",
    paragraphs: [
      "Agaja est le souverain qui transforme un royaume d'intérieur en puissance atlantique. À son avènement, le Dahomey est enclavé : pour vendre, pour acheter des armes, il dépend du bon vouloir des royaumes côtiers — Allada, Ouidah, Hueda — qui contrôlent les comptoirs européens. Agaja décide de briser cette dépendance.",
      "En 1724, ses armées prennent Allada après une campagne foudroyante. Trois ans plus tard, en 1727, c'est au tour du royaume de Ouidah de tomber. Le Dahomey accède directement à la mer. Le roi de Ouidah s'enfuit, les forts européens — anglais, français, portugais — passent sous la tutelle du Yovogan, ministre de la côte.",
      "Mais l'accès à la mer attire les convoitises. L'empire Oyo, immense puissance yoruba à l'est, voit d'un très mauvais œil l'expansion de ce voisin agressif. Pendant près de vingt ans, Oyo envahit régulièrement le Dahomey, oblige Agaja à payer tribut, à fuir Abomey, à reconstruire. Le roi survit politiquement par une diplomatie habile et par sa capacité à toujours relever ses armées.",
      "C'est aussi sous Agaja que se développe la fameuse traite atlantique organisée par l'État dahoméen. Les captifs faits dans les guerres voisines sont vendus aux Européens contre des fusils, de la poudre, des étoffes, des cauris. Le commerce des esclaves devient un instrument économique et militaire au service de la guerre, qui elle-même alimente le commerce — un cycle tragique dont les conséquences marqueront durablement la côte des Esclaves.",
      "Agaja est aussi le premier à organiser les Mino, ces gardes féminines qui formeront, sous Guézo, les célèbres \"Amazones du Dahomey\". Il institutionnalise la cour, multiplie les ambassades, accueille des marchands européens à Abomey et tente même d'envoyer une mission au roi du Portugal.",
      "Quand il meurt en 1740, le Dahomey est un royaume méconnaissable : militairement redouté, économiquement intégré au commerce mondial, ouvert sur l'océan. Mais cette ouverture est aussi le poison qui rendra le royaume vulnérable aux puissances européennes deux siècles plus tard.",
    ],
    legacy:
      "Conquête maritime, ouverture diplomatique, structuration de la traite atlantique, embryon des Amazones.",
  },
  {
    slug: "tegbessou",
    name: "Tegbessou",
    reign: "1740 – 1774",
    epithet: "Le roi de l'âge d'or",
    summary:
      "Tegbessou stabilise les conquêtes d'Agaja, paie le tribut à Oyo et installe le Dahomey dans une longue phase de prospérité.",
    paragraphs: [
      "Tegbessou hérite d'un royaume vaste mais épuisé par les guerres oyo. Sa première décision est pragmatique : accepter formellement le tribut annuel à l'empire Oyo en échange de la paix. Ce choix, mal compris à l'époque, sauve le Dahomey et lui permet de se reconstruire.",
      "Pendant trois décennies, il organise patiemment l'administration, codifie les coutumes royales, dynamise le commerce de Ouidah. La cour d'Abomey devient un centre artistique majeur : bas-reliefs en banco, tentures appliquées, statuettes bochios, parures royales.",
      "Tegbessou est aussi un roi profondément religieux. Il développe les cultes vodun d'État, institue de grandes cérémonies funéraires, fait sculpter des trônes votifs encore conservés aujourd'hui dans les palais d'Abomey.",
    ],
    legacy:
      "Stabilité diplomatique, essor artistique, prospérité du commerce atlantique.",
  },
  {
    slug: "kpengla",
    name: "Kpengla",
    reign: "1774 – 1789",
    epithet: "Le réformateur",
    summary:
      "Kpengla réorganise l'armée, durcit le contrôle d'État sur le commerce et lutte contre les marchands concurrents sur la côte.",
    paragraphs: [
      "Kpengla est un administrateur méticuleux. Il refond la fiscalité, impose un monopole royal sur la vente des captifs à Ouidah, multiplie les inspecteurs du Yovogan, sanctionne durement la corruption.",
      "Militairement, il réorganise les compagnies, renforce les Mino, mène des raids contre les Mahi et contre les royaumes côtiers qui tentent de contourner Ouidah. Sa diplomatie avec Oyo se durcit ; le tribut est négocié à la baisse.",
      "Son règne consolide le modèle dahoméen — un État central, militaire, marchand — pendant une période où, en Europe, les premières voix abolitionnistes commencent à s'élever.",
    ],
    legacy:
      "État centralisé, monopole commercial royal, modernisation militaire.",
  },
  {
    slug: "agonglo",
    name: "Agonglo",
    reign: "1789 – 1797",
    epithet: "Le diplomate",
    summary:
      "Agonglo cherche l'apaisement avec les puissances européennes et engage une politique d'ouverture qui choquera la cour traditionaliste.",
    paragraphs: [
      "Au moment où la Révolution française éclate, Agonglo monte sur le trône d'Abomey. Il accueille à sa cour des missionnaires portugais, négocie des accords commerciaux nouveaux, envisage même de se convertir au christianisme — geste politique inouï pour un roi du Dahomey.",
      "Cette ouverture lui vaut une opposition farouche d'une partie de la cour, attachée aux cultes vodun et au modèle de Tegbessou. Une conspiration se forme, et Agonglo est assassiné en 1797. Sa mort ouvre une période de crise dynastique.",
    ],
    legacy:
      "Premier roi ouvertement diplomate, victime d'une réaction conservatrice.",
  },
  {
    slug: "adandozan",
    name: "Adandozan",
    reign: "1797 – 1818",
    epithet: "Le roi effacé",
    summary:
      "Long règne contesté, marqué par les conflits avec Oyo, les difficultés économiques et la rivalité avec son frère Guézo, qui finira par le déposer.",
    paragraphs: [
      "Adandozan, fils d'Agonglo, accède au pouvoir alors qu'il est encore très jeune. Son règne est marqué par la pression continue d'Oyo, l'effondrement progressif du commerce des captifs sous l'effet des premières mesures abolitionnistes britanniques, et de violentes querelles dynastiques.",
      "Accusé de cruauté envers les notables, de désordre dans l'administration et de manque de respect envers les ancêtres, il est renversé en 1818 par un complot mené par son demi-frère Guézo et par le riche marchand brésilien Francisco Félix de Souza. La cour dahoméenne effacera officiellement son nom de la liste des rois — il n'aura ni récade, ni statue, ni cérémonie funéraire officielle.",
      "L'historiographie moderne réhabilite peu à peu sa figure : ses choix, souvent jugés brutaux, répondent à une crise géopolitique réelle.",
    ],
    legacy:
      "Roi maudit par la tradition, redécouvert par l'histoire critique contemporaine.",
  },
  {
    slug: "guezo",
    name: "Guézo",
    reign: "1818 – 1858",
    epithet: "Le libérateur du Dahomey",
    summary:
      "Guézo brise le tribut à Oyo, modernise l'armée, transforme les Mino en corps des Amazones et reconstruit un royaume puissant et prospère.",
    paragraphs: [
      "Le coup d'État de 1818 porte Guézo sur le trône. Sa première grande décision est politique : refuser, après plus d'un siècle, le tribut annuel à l'empire Oyo. La rupture est totale. Guézo prépare patiemment la confrontation militaire en réorganisant l'armée et en s'appuyant sur les transformations internes d'Oyo, alors miné par les conflits avec le califat de Sokoto.",
      "Vers 1823, les armées dahoméennes, appuyées par les Mino devenues un véritable corps d'élite, infligent à Oyo une défaite décisive. Le Dahomey, pour la première fois depuis Agaja, est totalement souverain.",
      "Mais Guézo est bien plus qu'un libérateur militaire. C'est un réformateur global. Il modernise les compagnies, introduit massivement les fusils à pierre, codifie le service des Amazones — recrutées parmi les jeunes filles libres, célibataires à vie, casernées au palais, dotées d'un statut juridique distinct. Sous son règne, les Amazones deviennent l'une des forces militaires les plus redoutables de toute l'Afrique de l'Ouest, avec plusieurs milliers de combattantes entraînées au tir, à la lance, au combat rapproché.",
      "Économiquement, Guézo affronte un défi inédit : l'abolition progressive de la traite atlantique. Les Britanniques bloquent les côtes, les marchés s'effondrent. Le roi réoriente l'économie vers l'huile de palme, dont la demande européenne explose pour la fabrication du savon et la lubrification industrielle. Les plantations royales se multiplient autour d'Abomey ; Ouidah devient un grand port d'exportation d'huile.",
      "Sur le plan culturel, le règne de Guézo est un sommet : développement des bas-reliefs des palais, floraison des récades, codification des récits dynastiques, accueil régulier d'explorateurs européens — Forbes, Burton, Duncan — dont les récits feront connaître le Dahomey dans toute l'Europe du XIXᵉ siècle.",
      "Diplomatiquement, Guézo maintient une politique d'équilibre entre puissances : Anglais à Lagos, Français à Ouidah, Brésiliens à Agoué, marchands haoussa au nord. Il négocie, joue les uns contre les autres, défend pied à pied l'indépendance du royaume.",
      "Quand il meurt en 1858, après quarante années de règne, Guézo laisse l'un des États africains les plus structurés et les plus respectés de son siècle. Son fils Glélé poursuivra son œuvre.",
    ],
    legacy:
      "Indépendance vis-à-vis d'Oyo, Amazones institutionnalisées, économie de l'huile de palme, rayonnement diplomatique.",
  },
  {
    slug: "glele",
    name: "Glélé",
    reign: "1858 – 1889",
    epithet: "Le lion du Dahomey",
    summary:
      "Glélé prolonge l'œuvre de son père, mène de grandes campagnes contre les Yoruba et résiste aux premières pressions coloniales françaises.",
    paragraphs: [
      "Glélé hérite d'un royaume puissant mais déjà encerclé. Au sud, la France s'installe progressivement à Cotonou et signe en 1868 un traité contesté qui lui cède le port. Au nord, les chefferies yoruba résistent à l'expansion dahoméenne. À l'est, Porto-Novo bascule sous protectorat français.",
      "Le roi mène des campagnes incessantes contre Abeokuta, Ketou, Save. Les Amazones et l'armée régulière sont mobilisées chaque saison sèche. Le butin de guerre — captifs, marchandises, tributs — alimente la cour et les cérémonies annuelles.",
      "Glélé est un roi profondément attaché à la tradition. Il commande aux artistes d'Abomey les plus extraordinaires œuvres royales : trônes monumentaux, statues anthropomorphes, tentures appliquées aux scènes guerrières. La cour devient un atelier d'art permanent.",
      "Mais la pression française devient insoutenable. En 1889, à la veille de sa mort, Glélé refuse les ultimatums du résident français Jean Bayol et désigne son fils Kondo — futur Béhanzin — comme régent. Glélé meurt symboliquement à l'instant où l'indépendance du Dahomey est mise en jeu.",
    ],
    legacy:
      "Apogée artistique des palais d'Abomey, dernières grandes campagnes militaires, opposition diplomatique à la France.",
  },
  {
    slug: "behanzin",
    name: "Béhanzin",
    reign: "1889 – 1894",
    epithet: "Le roi-requin, dernier souverain libre",
    summary:
      "Béhanzin incarne la résistance africaine à la colonisation française. Vaincu militairement, déporté en Martinique puis en Algérie, il devient l'un des plus grands symboles de la dignité africaine du XIXᵉ siècle.",
    paragraphs: [
      "Né vers 1845 sous le nom de Kondo, fils du roi Glélé et de la reine Zonjedji, Béhanzin grandit dans la cour d'Abomey à l'apogée du royaume. Initié très tôt aux affaires militaires et diplomatiques, il accompagne son père dans les campagnes, observe les négociations avec les Européens et se forge la conviction que le Dahomey doit, à tout prix, préserver son indépendance.",
      "Lorsqu'il monte sur le trône en 1889 sous le nom de règne Béhanzin — \"l'œuf du monde, que rien ne peut briser\" — il choisit pour totem le requin, animal des grandes profondeurs, signe d'une royauté qui ne cédera pas. Son premier acte est de rejeter le traité signé sous Glélé qui cédait Cotonou à la France.",
      "La guerre devient inévitable. En 1890, une première campagne oppose les armées dahoméennes au corps expéditionnaire français de Sébastien Terrillon. Les Amazones, les compagnies royales et les troupes auxiliaires infligent des pertes sévères aux Français mais sont contenues par l'artillerie moderne. Un fragile compromis est signé : Béhanzin reconnaît du bout des lèvres certaines prétentions françaises sur Cotonou et Porto-Novo, sans renoncer à l'indépendance du royaume.",
      "Pendant deux ans, le roi prépare la confrontation décisive. Il achète massivement des fusils à tir rapide à des trafiquants allemands, fait venir des instructeurs militaires européens, renforce les fortifications d'Abomey et de Cana, mobilise jusqu'à 12 000 combattants, dont près de 4 000 Amazones. C'est l'armée la plus puissante jamais alignée par un royaume d'Afrique de l'Ouest face à une puissance européenne.",
      "En 1892, la deuxième guerre du Dahomey éclate. Le colonel Alfred-Amédée Dodds, métis sénégalais au service de la France, débarque à la tête de 4 000 soldats — légionnaires, tirailleurs sénégalais, infanterie de marine — armés de fusils Lebel, de mitrailleuses Hotchkiss et d'artillerie de campagne. Pendant trois mois, du fleuve Ouémé jusqu'aux portes d'Abomey, se déroule l'une des campagnes les plus meurtrières de la conquête coloniale française. Les batailles de Dogba, Poguessa, Adégon, Akpa s'enchaînent. Les Amazones chargent à découvert contre des positions retranchées et tombent par centaines. Les forêts deviennent des cimetières.",
      "Béhanzin, refusant la capitulation, met le feu à son palais d'Abomey le 17 novembre 1892 pour qu'il ne tombe pas intact aux mains des Français. Il se replie vers le nord avec sa cour, ses femmes, ses Amazones survivantes et continue la guerre pendant plus d'un an, harcelant les colonnes françaises depuis la brousse. Aucun roi africain face à la colonisation française n'a tenu aussi longtemps.",
      "Le 25 janvier 1894, épuisé, trahi par certains de ses proches, conscient que toute résistance ouverte est désormais impossible sans condamner son peuple, Béhanzin se rend au général Dodds dans le village de Yego. Le récit de sa reddition est resté célèbre : le roi se présente vêtu de blanc, calme, accompagné de ses femmes et de ses derniers Amazones, et déclare ne se rendre que pour épargner son peuple.",
      "Déporté avec sa famille, il embarque sur le \"Ségond\" pour la Martinique, où il vivra douze ans à Fort-de-France, dans une villa modeste appelée Les Tamarins. Sa dignité dans l'exil bouleverse les Martiniquais. Il refuse de se renier, continue de porter les insignes royaux, reçoit avec une courtoisie hautaine les administrateurs coloniaux qui viennent le visiter. En 1906, sur intervention de Clemenceau, il est transféré à Blida, en Algérie, où il meurt le 10 décembre 1906.",
      "Son corps sera rapatrié à Abomey en 1928. Sa mémoire, déjà vive de son vivant, n'a cessé depuis de grandir. Pour les générations béninoises, africaines et afro-descendantes, Béhanzin est devenu l'archétype du résistant : un roi qui choisit la défaite plutôt que la soumission, qui sait perdre une guerre sans perdre son honneur, qui transforme une débâcle militaire en victoire morale durable.",
      "Aujourd'hui encore, le 25 janvier — date de sa reddition — est devenu un moment de recueillement au Bénin. Sa statue veille sur la place Goho à Abomey. Ses récades sont exposées au musée historique. Son nom est porté par des écoles, des avenues, des navires. Sa figure inspire artistes, historiens, écrivains de toute l'Afrique. Béhanzin n'a pas seulement été le dernier roi indépendant du Dahomey : il est l'un des plus grands résistants africains du XIXᵉ siècle, à l'égal de Samori Touré, de Ménélik ou de Lat-Dior.",
    ],
    legacy:
      "Symbole universel de la résistance africaine à la colonisation. Le retour de son trône, dérobé en 1892, a marqué la restitution historique de 26 œuvres royales par la France en 2021.",
  },
  {
    slug: "agoli-agbo",
    name: "Agoli-Agbo",
    reign: "1894 – 1900",
    epithet: "Le dernier roi",
    summary:
      "Frère de Béhanzin, intronisé par les Français, Agoli-Agbo règne sous protectorat avant d'être à son tour déporté.",
    paragraphs: [
      "Après la déportation de Béhanzin, les autorités françaises cherchent un interlocuteur royal qui légitime leur protectorat. Elles choisissent Goutchili, frère cadet du roi vaincu, qui prend le nom d'Agoli-Agbo — \"le trône en attendant\". L'intitulé est explicite : il règne en sursis, dans un royaume vidé de sa souveraineté.",
      "Son règne consiste à amortir le choc colonial : préserver les coutumes, maintenir les palais, organiser malgré tout les funérailles royales de son frère. Il tente de freiner les abus des résidents français, défend ses notables, refuse certaines réquisitions.",
      "En 1900, accusé d'avoir voulu raviver la résistance, Agoli-Agbo est à son tour déporté au Gabon. Le royaume du Dahomey cesse officiellement d'exister comme entité politique. Il sera autorisé à rentrer à Abomey en 1910 comme simple chef coutumier, sans pouvoir réel. Il mourra en 1940, gardien d'une mémoire devenue patrimoine.",
    ],
    legacy:
      "Dernier souverain d'une dynastie qui aura régné près de trois siècles sur le plateau d'Abomey.",
  },
];

export type OtherKingdom = {
  slug: string;
  name: string;
  summary: string;
  rulers?: string[];
};

export const OTHER_KINGDOMS: OtherKingdom[] = [
  {
    slug: "houeda",
    name: "Royaume houéda / Xwéda (Savi puis Ouidah)",
    summary:
      "Fondé vers 1580 par le peuple adja-xwéda près du lac Ahémé, capitale d'abord à Savi. Le royaume atteint son apogée sous le roi Houffon grâce au commerce avec les comptoirs européens installés à ses portes. Conquis le 9 mars 1727 par Agaja, qui en fait la façade maritime du Dahomey.",
    rulers: ["Ahoho (fondateur)", "Houffon (r. ~1708–1727)"],
  },
  {
    slug: "porto-novo",
    name: "Royaume de Porto-Novo (Hogbonou)",
    summary:
      "Fondé vers 1688 par Tè-Agbanlin, prince d'Allada. Appelé Hogbonou en langue goun, il devient un grand carrefour commercial sur la côte atlantique. La dynastie règne jusqu'à l'instauration du protectorat français en 1882. La royauté est officiellement restaurée en 1997.",
    rulers: [
      "Tè-Agbanlin (r. 1688–1729)",
      "Hiakpon (r. 1729–1739)",
      "Lokpon (r. 1739–1746)",
      "Hudé (reine, r. 1746–1752)",
      "Mèssè I (r. 1752–1757)",
      "Huyi (r. 1757–1761)",
      "Gbéyon (r. 1761–1765)",
      "Ayikpé (r. 1775–1783)",
      "Ayiton (r. 1783–1794)",
      "Houffon (r. 1794–1807)",
      "Ajohan (r. 1807–1816)",
      "Toyi (r. 1816–1818)",
      "Huézé (r. 1818–1828)",
      "Toyon (r. 1828–1836)",
      "Méyi (r. 1836–1848)",
      "Sodji (r. 1848–1864)",
      "Mikpon (r. 1864–1872)",
      "Mèssè II (r. 1872–1874)",
      "Toffa Ier (r. 1874–1908)",
      "Dè Kpotozounme Hakpon III (depuis 1997)",
    ],
  },
  {
    slug: "toffa-ier",
    name: "Toffa Ier, roi de Porto-Novo (1874–1908)",
    summary:
      "Fils de Sodji, il accède au trône en 1874 après un exil à Lagos et des tribulations dynastiques. Choisissant de s'allier à la France plutôt qu'au Dahomey pour préserver l'indépendance de son royaume, il signe le traité de protectorat de 1882 (confirmé en 1883), puis fournit des porteurs et un soutien logistique aux troupes françaises lors des guerres contre Béhanzin — geste qui vaudra à Porto-Novo le trône doré d'Abomey en cadeau et à Toffa le titre officieux de \"maître de Béhanzin\". Sa rivalité avec Béhanzin symbolise, dans la mémoire béninoise, la tension entre résistance armée et alliance pragmatique face à la colonisation. Malgré ses protestations répétées contre l'empiètement administratif français dans les années 1900, Porto-Novo perd son autonomie et est purement annexé à sa mort en 1908, intégrée à la colonie du Dahomey comme simple chefferie supérieure.",
    rulers: [],
  },
  {
    slug: "allada",
    name: "Royaume d'Allada",
    summary:
      "Berceau des Aja-Fon, Allada est le royaume-mère d'où sont issues les dynasties d'Abomey et de Porto-Novo selon la légende des trois frères. Conquis par Agaja en 1724, la dynastie se maintient comme monarchie tributaire puis chefferie non souveraine. Le titre royal est rétabli en 1992 : le roi actuel, Kpodégbé Toyi Djigla, est président du Haut Conseil des Rois du Bénin. Fait notable : Toussaint Louverture, héros de l'indépendance haïtienne, était fils d'un prince d'Allada, Gahou Deguénon.",
    rulers: [
      "Adjahouto (fondateur, selon la tradition)",
      "Kpodégbé Toyi Djigla (depuis 1992)",
    ],
  },
  {
    slug: "nikki",
    name: "Royaume de Nikki et confédération bariba (Borgou)",
    summary:
      "Fondé entre le XVᵉ et le XVIᵉ siècle par les Wassangari sous la conduite du chef Séro Kpéra, aristocratie de cavaliers venue s'imposer pacifiquement sur les Baatombu déjà installés. Titre royal : Sinaboko. Une quarantaine de souverains se sont succédés selon la tradition orale, mais les sources écrites ne permettent pas d'établir une liste nominative fiable et continue au-delà du fondateur. Nikki fédère les territoires de Kandi, Kouandé, Parakou, Bembéréké, Kalalé et Ségbana. Grande fête annuelle de la Gaani, cavalcade royale toujours célébrée aujourd'hui.",
    rulers: ["Séro Kpéra (fondateur)"],
  },
  {
    slug: "ketou",
    name: "Royaume de Kétou (Alaketu)",
    summary:
      "Cité yoruba rattachée aux origines mythiques d'Ilé-Ifé et d'Oduduwa. Le premier souverain nommé par la tradition est Itcha-Ikpatchan ; le septième, le roi Edé, fonde la ville de Kétou elle-même (datation très disputée entre le Xe et le XIVe siècle). Titre royal : Alaketu. D'autres rois nommément attestés : Sa (bâtisseur des fortifications), Arogbo, Adégbédé (r. 1853–1858). Le royaume est détruit par les campagnes de Glélé en 1883-1886, puis renaît en 1894 sous le roi Oyingin. La lignée se poursuit jusqu'à aujourd'hui : le roi actuel, 51e Alaketu, est Adédun Loyé, intronisé en 2018. Berceau du masque Guèlèdè, patrimoine culturel immatériel de l'UNESCO.",
    rulers: [
      "Itcha-Ikpatchan (premier souverain)",
      "Shopashan (premier Alaketu, bâtisseur du palais)",
      "Edé (fondateur de Kétou)",
      "Sa (14e Alaketu)",
      "Arogbo (20e Alaketu)",
      "Adégbédé (43e Alaketu, r. 1853–1858)",
      "Oyingin (r. à partir de 1894)",
      "Adédun Loyé (51e Alaketu, depuis 2018)",
    ],
  },
  {
    slug: "sakete",
    name: "Royaume de Sakété",
    summary:
      "Royaume yoruba-nago du sud-est, lié historiquement à Porto-Novo et Kétou, zone de contact entre mondes goun et yoruba.",
  },
  {
    slug: "parakou",
    name: "Royaume de Parakou",
    summary:
      "Fondé au XVIᵉ siècle par des commerçants wassangari, structuré comme les autres royaumes du Borgou avec un chef politique (Akpaki) et un chef de terre distinct.",
  },
  {
    slug: "dassa-zoume",
    name: "Royaume de Dassa-Zoumè",
    summary:
      "Royaume mahi des Collines, distinct de Savalou, connu pour son relief de collines sacrées et ses cultes de la terre.",
  },
  {
    slug: "savalou",
    name: "Royaume de Savalou",
    summary:
      "Royaume mahi des Collines, célèbre pour la pierre sacrée de Dankoli et pour la longue dynastie des Gbaguidi. Savalou résiste durablement à l'expansion dahoméenne et conserve sa propre cour royale jusqu'à aujourd'hui.",
  },
  {
    slug: "kouande",
    name: "Royaume de Kouandé",
    summary:
      "Royaume bariba de l'Atacora, fondé au XVIIIᵉ siècle. Kouandé est connu pour son palais en banco, son armée de cavaliers et ses liens avec les chefferies de Djougou et Nikki.",
  },
  {
    slug: "djougou",
    name: "Royaume de Djougou",
    summary:
      "Chefferie du nord-ouest peuplée notamment de Yom et de Lokpa, carrefour commercial entre le Borgou et l'Atacora, influencé par les circuits caravaniers haoussa.",
  },
];

export type People = {
  slug: string;
  name: string;
  note: string;
};

export const PEOPLES_AND_CHIEFDOMS: People[] = [
  {
    slug: "otammari-betamaribe-som",
    name: "Peuples otammari / Betamaribè (Somba)",
    note: "Atacora (Natitingou, Boukombé). Pas de royaume centralisé : organisation en chefferies familiales autour du tata somba, l'habitation-forteresse en terre. Réfugiés historiques dans les montagnes pour échapper aux razzias bariba et dahoméennes.",
  },
  {
    slug: "dendi",
    name: "Peuples dendi",
    note: "Nord (Karimama, Malanville), héritiers de l'influence de l'empire Songhaï, organisés en chefferies locales islamisées.",
  },
  {
    slug: "xwla-hula",
    name: "Peuples xwla / peuples hula",
    note: "Communautés côtières et lacustres (lac Ahémé, région de Grand-Popo), antérieures à l'installation des Xwéda, vie tournée vers la pêche.",
  },
  {
    slug: "yom-lokpa",
    name: "Peuples yom et lokpa",
    note: "Région de Djougou et Copargo, chefferies locales.",
  },
  {
    slug: "anii",
    name: "Peuples anii",
    note: "Région de Bassila, chefferies locales.",
  },
  {
    slug: "waama-gourmantche",
    name: "Peuples waama et gourmantché",
    note: "Nord-Atacora, sociétés acéphales ou à chefferies claniques.",
  },
];