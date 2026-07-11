'use client';

import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';

function Section({ title, kicker, children, image }: { title: string; kicker: string; children: React.ReactNode; image?: string }) {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16 border-b border-white/10">
      <Reveal>
        <div className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-2">{kicker}</div>
        <h2 className="font-display text-3xl md:text-5xl mb-6">{title}</h2>
        {image && <img src={image} alt={title} className="w-full h-72 object-cover rounded-sm mb-8 opacity-80" />}
        <div className="text-white/75 leading-relaxed text-lg space-y-4">{children}</div>
      </Reveal>
    </section>
  );
}

export default function CultureClient() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Âme du Bénin"
        title="Culture"
        script="& arts"
        intro="Religion vodun, rythmes ancestraux, masques sacrés, bronzes d'Abomey, architecture Tata Somba, patrimoine afro-brésilien, fêtes traditionnelles et tradition orale : entrez dans l'âme vivante du Bénin, considéré comme le berceau mondial du vodun."
        image="/art.jpg"
      />

      <Section title="Vodun" kicker="Religion d'État">
        <p>
          Né dans le golfe du Bénin, le vodun est bien plus qu'une religion : c'est une cosmogonie
          complète. Il enseigne que toute force naturelle — la mer (Agbé), le tonnerre (Xevioso), la
          forêt, la terre, l'ancêtre — possède un esprit (vodun) avec lequel les humains entretiennent
          un dialogue constant à travers l'offrande, la danse et la transe. Chaque vodun possède ses
          propres rites, ses interdits, ses couleurs, ses tambours et ses jours sacrés.
        </p>
        <p>
          Reconnu religion officielle de la République du Bénin en 1996, célébré chaque 10 janvier lors
          d'une fête nationale à Ouidah — ville considérée comme la capitale spirituelle du culte — le
          vodun rayonne aujourd'hui bien au-delà des frontières béninoises : au Brésil sous le nom de
          candomblé, à Cuba sous celui de santería, en Haïti où il a nourri le vaudou haïtien, et
          jusqu'à La Nouvelle-Orléans. Cette diaspora spirituelle trouve son origine dans la traite
          négrière, les captifs ayant emporté leurs cultes avec eux vers les Amériques.
        </p>
        <p>
          Au Bénin, ses grands prêtres et prêtresses (vodunon et vodunsi) jouent un rôle spirituel,
          social et parfois politique majeur, consultés aussi bien pour des questions de santé, de
          justice coutumière que de vie communautaire. Le Fâ, système divinatoire lié au vodun et
          apparenté à l'Ifá yoruba, permet de consulter le destin à travers seize figures binaires
          interprétées par un devin (bokonon).
        </p>
      </Section>

      <Section title="Les Amazones du Dahomey" kicker="Mémoire guerrière">
        <p>
          Les Mino — « nos mères » en langue fon, aussi appelées Agojie — formaient l'élite militaire
          féminine du royaume du Dahomey, unique au monde par son ampleur et sa durée. Recrutées parmi
          les jeunes filles libres ou parfois offertes par leurs propres familles, casernées au palais
          royal d'Abomey, célibataires à vie et vouées corps et âme au roi, elles comptèrent jusqu'à
          4 000 combattantes sous le règne de Guézo au XIXᵉ siècle.
        </p>
        <p>
          Organisées en régiments spécialisés — chasseresses à l'éléphant (gbeto), archères, fusilières,
          artilleuses — elles suivaient un entraînement d'une dureté extrême, incluant des épreuves
          d'endurance à la douleur destinées à forger un courage absolu au combat. Leur bravoure frappa
          durablement les officiers français envoyés contre le roi Béhanzin lors des guerres franco-
          dahoméennes de 1890 et 1892, qui décrivirent des charges d'une férocité inégalée.
        </p>
        <p>
          Leur héritage, longtemps resté dans l'ombre de l'histoire officielle, inspire aujourd'hui de
          nombreuses œuvres à travers le monde, du roman au cinéma, contribuant à faire connaître cette
          page unique de l'histoire militaire africaine et mondiale.
        </p>
      </Section>

      <Section title="Fêtes et cérémonies" kicker="Le calendrier sacré">
        <ul className="grid md:grid-cols-2 gap-4 text-white/75">
          <li><strong className="text-white">Fête du Vodun (10 janvier)</strong> — jour férié national célébré à Ouidah, rassemblant prêtres, initiés et visiteurs autour de processions, danses de transe et offrandes.</li>
          <li><strong className="text-white">Guèlèdè</strong> — cérémonie yoruba-nagot rendant hommage au pouvoir des femmes et des mères à travers des masques sculptés et des danses satiriques, inscrite au patrimoine culturel immatériel de l'UNESCO.</li>
          <li><strong className="text-white">Fête des ignames</strong> — célébration agraire marquant la nouvelle récolte, ponctuée de rites de reconnaissance envers les ancêtres et la terre.</li>
          <li><strong className="text-white">Sorties de Zangbeto et d'Egungun</strong> — apparitions rituelles de génies protecteurs et de masques ancestraux dans les rues, mêlant spectacle, protection communautaire et mémoire des défunts.</li>
        </ul>
      </Section>

      <Section title="Musique et danse" kicker="Rythmes du sol">
        <ul className="grid md:grid-cols-2 gap-4 text-white/75">
          <li><strong className="text-white">Tchingounmè</strong> — rythme royal du Dahomey, joué lors des grandes cérémonies et intronisations.</li>
          <li><strong className="text-white">Zinli</strong> — chant funéraire et de mémoire, originaire d'Abomey, porté par des voix graves et des tambours parlants.</li>
          <li><strong className="text-white">Agbadja</strong> — rythme populaire des Mina et Ewé, dansé en cercle lors des fêtes communautaires.</li>
          <li><strong className="text-white">Sato</strong> — percussion et danse guerrière de la région de Savalou, exécutée pieds nus sur charbons ardents lors de certaines cérémonies initiatiques.</li>
          <li><strong className="text-white">Tchakpo et Kaka</strong> — rythmes du nord Bénin, liés aux fêtes de récolte et aux rites de passage chez les Bariba et Waama.</li>
          <li><strong className="text-white">Djembé et tambours parlants</strong> — instruments partagés avec toute l'Afrique de l'Ouest, ici déclinés dans des styles locaux propres à chaque ethnie.</li>
        </ul>
      </Section>

      <Section title="Artisanat et arts visuels" kicker="Mains d'or sans or" image="/ba.png">
        <p>
          Les bronzes d'Abomey, coulés selon la technique de la cire perdue héritée des fondeurs royaux,
          représentent scènes de cour, animaux totémiques et symboles de règne : chaque roi du Dahomey
          possédait son propre emblème animal, transmis par la sculpture et le bas-relief.
        </p>
        <p>
          La sculpture sur bois donne naissance aux statues bochio, figures de protection dressées aux
          entrées des villages, ainsi qu'aux masques Egungun et Guèlèdè, taillés et peints à la main
          pour incarner esprits ancestraux et forces protectrices. Les appliqués sur tissu d'Abomey,
          autrefois réservés aux familles royales, racontent en couleurs vives les exploits guerriers et
          les proverbes du royaume, un savoir-faire transmis de génération en génération dans les
          ateliers du quartier des tenturiers.
        </p>
        <p>
          Le tissage traditionnel des Pédah, le batik teint à la cire, la poterie des femmes bariba et
          la vannerie des régions du nord complètent un artisanat parmi les plus riches du continent,
          aujourd'hui valorisé aussi bien dans les marchés locaux que dans les galeries d'art
          contemporain à Cotonou et Porto-Novo.
        </p>
      </Section>

      <Section title="Architecture" kicker="Bâtir l'histoire" image="/somba.png">
        <p>
          Les Tata Somba de l'Atacora, châteaux-fortins en banco hérissés de tourelles et surmontés de
          greniers coniques, témoignent du génie défensif des Otammari face aux razzias esclavagistes
          des siècles passés. Chaque tata abrite une famille entière selon une organisation spatiale
          précise, entre étable, chambres, terrasse de séchage et sanctuaire des ancêtres.
        </p>
        <p>
          À Abomey, les palais royaux, classés au patrimoine mondial de l'UNESCO depuis 1985, alignent
          dix siècles de pouvoir dynastique à travers bas-reliefs peints, salles du trône et
          cimetières royaux. À Porto-Novo et Ouidah, le patrimoine afro-brésilien déploie ses façades
          colorées, balcons en fer forgé et frontons ouvragés, rapportés au XIXᵉ siècle par les anciens
          captifs revenus du Brésil après l'abolition de l'esclavage.
        </p>
        <p>
          Non loin de là, le village lacustre de Ganvié, bâti entièrement sur pilotis au milieu du lac
          Nokoué, illustre une autre forme d'ingéniosité architecturale née de la nécessité de fuir les
          razzias esclavagistes en s'installant sur l'eau, où la tradition guerrière fon ne pouvait pas
          les atteindre.
        </p>
      </Section>

      <Section title="Langues et tradition orale" kicker="La parole vivante">
        <p>
          Le Bénin compte plus d'une cinquantaine de langues et dialectes, parmi lesquels le fon, le
          yoruba, le bariba, le dendi, le fulfuldé et le waama, aux côtés du français, langue officielle
          héritée de la colonisation. Cette diversité linguistique reflète une mosaïque de royaumes,
          chefferies et peuples ayant coexisté et échangé bien avant les frontières actuelles.
        </p>
        <p>
          Les griots et conteurs perpétuent une tradition orale vivante : généalogies royales, proverbes,
          contes initiatiques et récits épiques se transmettent de bouche à oreille, souvent accompagnés
          de tambours ou de la kora. Ce patrimoine immatériel, longtemps sous-estimé, fait aujourd'hui
          l'objet d'efforts de collecte et de valorisation, notamment à travers les musées et centres
          culturels d'Abomey, de Porto-Novo et de Ouidah.
        </p>
      </Section>
    </SiteLayout>
  );
}
