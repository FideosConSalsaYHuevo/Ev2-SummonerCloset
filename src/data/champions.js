const KEY = 'champions';

const seedChampions = [
  { id: 1, name: 'Aatrox', role: 'top', image: '/imagenes/campeones/Aatrox/Aatrox.webp' },
  { id: 2, name: 'Ahri', role: 'middle', image: '/imagenes/campeones/Ahri/Ahri.webp' },
  { id: 3, name: 'Akali', role: 'middle', image: '/imagenes/campeones/Akali/Akali.webp' },
  { id: 4, name: 'Akshan', role: 'middle', image: '/imagenes/campeones/Akshan/Akshan.webp' },
  { id: 5, name: 'Alistar', role: 'support', image: '/imagenes/campeones/Alistar/Alistar.webp' },
  { id: 6, name: 'Ambessa', role: 'top', image: '/imagenes/campeones/Ambessa/Ambessa.webp' },
  { id: 7, name: 'Amumu', role: 'jungle', image: '/imagenes/campeones/Amumu/Amumu.webp' },
  { id: 8, name: 'Anivia', role: 'middle', image: '/imagenes/campeones/Anivia/Anivia.webp' },
  { id: 9, name: 'Annie', role: 'middle', image: '/imagenes/campeones/Annie/Annie.webp' },
  { id: 10, name: 'Aphelios', role: 'bottom', image: '/imagenes/campeones/Aphelios/Aphelios.webp' },
  { id: 11, name: 'Ashe', role: 'bottom', image: '/imagenes/campeones/Ashe/Ashe.webp' },
  { id: 12, name: 'Aurelion Sol', role: 'middle', image: '/imagenes/campeones/Aurelion_Sol/Aurelion_Sol.webp' },
  { id: 13, name: 'Aurora', role: 'middle', image: '/imagenes/campeones/Aurora/Aurora.webp' },
  { id: 14, name: 'Azir', role: 'middle', image: '/imagenes/campeones/Azir/Azir.webp' },
  { id: 15, name: 'Bard', role: 'support', image: '/imagenes/campeones/Bard/Bard.webp' },
  { id: 16, name: "Bel'Veth", role: 'jungle', image: '/imagenes/campeones/BelVeth/Belveth.webp' },
  { id: 17, name: 'Blitzcrank', role: 'support', image: '/imagenes/campeones/Blitzcrank/Blitzcrank.webp' },
  { id: 18, name: 'Brand', role: 'middle', image: '/imagenes/campeones/Brand/Brand.webp' },
  { id: 19, name: 'Braum', role: 'support', image: '/imagenes/campeones/Braum/Braum.webp' },
  { id: 20, name: 'Briar', role: 'jungle', image: '/imagenes/campeones/Briar/Briar.webp' },
  { id: 21, name: 'Caitlyn', role: 'bottom', image: '/imagenes/campeones/Caitlyn/Caitlyn.webp' },
  { id: 22, name: 'Camille', role: 'top', image: '/imagenes/campeones/Camille/Camille.webp' },
  { id: 23, name: 'Cassiopeia', role: 'middle', image: '/imagenes/campeones/Cassiopeia/Cassiopeia.webp' },
  { id: 24, name: "Cho'Gath", role: 'top', image: '/imagenes/campeones/ChoGath/ChoGath.webp' },
  { id: 25, name: 'Corki', role: 'bottom', image: '/imagenes/campeones/Corki/Corki.webp' },
  { id: 26, name: 'Darius', role: 'top', image: '/imagenes/campeones/Darius/Darius.webp' },
  { id: 27, name: 'Diana', role: 'jungle', image: '/imagenes/campeones/Diana/Diana.webp' },
  { id: 28, name: 'Dr. Mundo', role: 'top', image: '/imagenes/campeones/DrMundo/DrMundo.webp' },
  { id: 29, name: 'Draven', role: 'bottom', image: '/imagenes/campeones/Draven/Draven.webp' },
  { id: 30, name: 'Ekko', role: 'jungle', image: '/imagenes/campeones/Ekko/Ekko.webp' },
  { id: 31, name: 'Elise', role: 'jungle', image: '/imagenes/campeones/Elise/Elise.webp' },
  { id: 32, name: 'Evelynn', role: 'jungle', image: '/imagenes/campeones/Evelynn/Evelynn.webp' },
  { id: 33, name: 'Ezreal', role: 'bottom', image: '/imagenes/campeones/Ezreal/Ezreal.webp' },
  { id: 34, name: 'Fiddlesticks', role: 'jungle', image: '/imagenes/campeones/Fiddlesticks/Fiddlesticks.webp' },
  { id: 35, name: 'Fiora', role: 'top', image: '/imagenes/campeones/Fiora/Fiora.webp' },
  { id: 36, name: 'Fizz', role: 'middle', image: '/imagenes/campeones/Fizz/Fizz.webp' },
  { id: 37, name: 'Galio', role: 'middle', image: '/imagenes/campeones/Galio/Galio.webp' },
  { id: 38, name: 'Gangplank', role: 'top', image: '/imagenes/campeones/Gangplank/Gangplank.webp' },
  { id: 39, name: 'Garen', role: 'top', image: '/imagenes/campeones/Garen/Garen.webp' },
  { id: 40, name: 'Gnar', role: 'top', image: '/imagenes/campeones/Gnar/Gnar.webp' },
  { id: 41, name: 'Gragas', role: 'top', image: '/imagenes/campeones/Gragas/Gragas.webp' },
  { id: 42, name: 'Graves', role: 'jungle', image: '/imagenes/campeones/Graves/Graves.webp' },
  { id: 43, name: 'Gwen', role: 'top', image: '/imagenes/campeones/Gwen/Gwen.webp' },
  { id: 44, name: 'Hecarim', role: 'jungle', image: '/imagenes/campeones/Hecarim/Hecarim.webp' },
  { id: 45, name: 'Heimerdinger', role: 'middle', image: '/imagenes/campeones/Heimerdinger/Heimerdinger.webp' },
  { id: 46, name: 'Hwei', role: 'middle', image: '/imagenes/campeones/Hwei/Hwei.webp' },
  { id: 47, name: 'Illaoi', role: 'top', image: '/imagenes/campeones/Illaoi/Illaoi.webp' },
  { id: 48, name: 'Irelia', role: 'top', image: '/imagenes/campeones/Irelia/Irelia.webp' },
  { id: 49, name: 'Ivern', role: 'jungle', image: '/imagenes/campeones/Ivern/Ivern.webp' },
  { id: 50, name: 'Janna', role: 'support', image: '/imagenes/campeones/Janna/Janna.webp' },
  { id: 51, name: 'Jarvan IV', role: 'jungle', image: '/imagenes/campeones/JarvanIV/JarvanIV.webp' },
  { id: 52, name: 'Jax', role: 'top', image: '/imagenes/campeones/Jax/Jax.webp' },
  { id: 53, name: 'Jayce', role: 'top', image: '/imagenes/campeones/Jayce/Jayce.webp' },
  { id: 54, name: 'Jhin', role: 'bottom', image: '/imagenes/campeones/Jhin/Jhin.webp' },
  { id: 55, name: 'Jinx', role: 'bottom', image: '/imagenes/campeones/Jinx/Jinx.webp' },
  { id: 56, name: "K'Sante", role: 'top', image: '/imagenes/campeones/KSante/KSante.webp' },
  { id: 57, name: "Kai'Sa", role: 'bottom', image: '/imagenes/campeones/KaiSa/KaiSa.webp' },
  { id: 58, name: 'Kalista', role: 'bottom', image: '/imagenes/campeones/Kalista/Kalista.webp' },
  { id: 59, name: 'Karma', role: 'support', image: '/imagenes/campeones/Karma/Karma.webp' },
  { id: 60, name: 'Karthus', role: 'jungle', image: '/imagenes/campeones/Karthus/Karthus.webp' },
  { id: 61, name: 'Kassadin', role: 'middle', image: '/imagenes/campeones/Kassadin/Kassadin.webp' },
  { id: 62, name: 'Katarina', role: 'middle', image: '/imagenes/campeones/Katarina/Katarina.webp' },
  { id: 63, name: 'Kayle', role: 'top', image: '/imagenes/campeones/Kayle/Kayle.webp' },
  { id: 64, name: 'Kayn', role: 'jungle', image: '/imagenes/campeones/Kayn/Kayn.webp' },
  { id: 65, name: 'Kennen', role: 'top', image: '/imagenes/campeones/Kennen/Kennen.webp' },
  { id: 66, name: "Kha'Zix", role: 'jungle', image: '/imagenes/campeones/KhaZix/KhaZix.webp' },
  { id: 67, name: 'Kindred', role: 'jungle', image: '/imagenes/campeones/Kindred/Kindred.webp' },
  { id: 68, name: 'Kled', role: 'top', image: '/imagenes/campeones/Kled/Kled.webp' },
  { id: 69, name: "Kog'Maw", role: 'bottom', image: '/imagenes/campeones/KogMaw/KogMaw.webp' },
  { id: 70, name: 'LeBlanc', role: 'middle', image: '/imagenes/campeones/LeBlanc/LeBlanc.webp' },
  { id: 71, name: 'Lee Sin', role: 'jungle', image: '/imagenes/campeones/LeeSin/LeeSin.webp' },
  { id: 72, name: 'Leona', role: 'support', image: '/imagenes/campeones/Leona/Leona.webp' },
  { id: 73, name: 'Lillia', role: 'jungle', image: '/imagenes/campeones/Lillia/Lillia.webp' },
  { id: 74, name: 'Lissandra', role: 'middle', image: '/imagenes/campeones/Lissandra/Lissandra.webp' },
  { id: 75, name: 'Locke', role: 'top', image: '/imagenes/campeones/Locke/Locke.webp' },
  { id: 76, name: 'Lucian', role: 'bottom', image: '/imagenes/campeones/Lucian/Lucian.webp' },
  { id: 77, name: 'Lulu', role: 'support', image: '/imagenes/campeones/Lulu/Lulu.webp' },
  { id: 78, name: 'Lux', role: 'middle', image: '/imagenes/campeones/Lux/Lux.webp' },
  { id: 79, name: 'Malphite', role: 'top', image: '/imagenes/campeones/Malphite/Malphite.webp' },
  { id: 80, name: 'Malzahar', role: 'middle', image: '/imagenes/campeones/Malzahar/Malzahar.webp' },
  { id: 81, name: 'Maokai', role: 'support', image: '/imagenes/campeones/Maokai/Maokai.webp' },
  { id: 82, name: 'Master Yi', role: 'jungle', image: '/imagenes/campeones/MasterYi/MasterYi.webp' },
  { id: 83, name: 'Mel', role: 'middle', image: '/imagenes/campeones/Mel/Mel.webp' },
  { id: 84, name: 'Milio', role: 'support', image: '/imagenes/campeones/Milio/Milio.webp' },
  { id: 85, name: 'Miss Fortune', role: 'bottom', image: '/imagenes/campeones/MissFortune/MissFortune.webp' },
  { id: 86, name: 'Mordekaiser', role: 'top', image: '/imagenes/campeones/Mordekaiser/Mordekaiser.webp' },
  { id: 87, name: 'Morgana', role: 'support', image: '/imagenes/campeones/Morgana/Morgana.webp' },
  { id: 88, name: 'Naafiri', role: 'middle', image: '/imagenes/campeones/Naafiri/Naafiri.webp' },
  { id: 89, name: 'Nami', role: 'support', image: '/imagenes/campeones/Nami/Nami.webp' },
  { id: 90, name: 'Nasus', role: 'top', image: '/imagenes/campeones/Nasus/Nasus.webp' },
  { id: 91, name: 'Nautilus', role: 'support', image: '/imagenes/campeones/Nautilus/Nautilus.webp' },
  { id: 92, name: 'Neeko', role: 'middle', image: '/imagenes/campeones/Neeko/Neeko.webp' },
  { id: 93, name: 'Nidalee', role: 'jungle', image: '/imagenes/campeones/Nidalee/Nidalee.webp' },
  { id: 94, name: 'Nilah', role: 'bottom', image: '/imagenes/campeones/Nilah/Nilah.webp' },
  { id: 95, name: 'Nocturne', role: 'jungle', image: '/imagenes/campeones/Nocturne/Nocturne.webp' },
  { id: 96, name: 'Nunu & Willump', role: 'jungle', image: '/imagenes/campeones/Nunu/Nunu.webp' },
  { id: 97, name: 'Olaf', role: 'top', image: '/imagenes/campeones/Olaf/Olaf.webp' },
  { id: 98, name: 'Orianna', role: 'middle', image: '/imagenes/campeones/Orianna/Orianna.webp' },
  { id: 99, name: 'Ornn', role: 'top', image: '/imagenes/campeones/Ornn/Ornn.webp' },
  { id: 100, name: 'Pantheon', role: 'top', image: '/imagenes/campeones/Pantheon/Pantheon.webp' },
  { id: 101, name: 'Poppy', role: 'top', image: '/imagenes/campeones/Poppy/Poppy.webp' },
  { id: 102, name: 'Pyke', role: 'support', image: '/imagenes/campeones/Pyke/Pyke.webp' },
  { id: 103, name: 'Qiyana', role: 'middle', image: '/imagenes/campeones/Qiyana/Qiyana.webp' },
  { id: 104, name: 'Quinn', role: 'top', image: '/imagenes/campeones/Quinn/Quinn.webp' },
  { id: 105, name: 'Rakan', role: 'support', image: '/imagenes/campeones/Rakan/Rakan.webp' },
  { id: 106, name: 'Rammus', role: 'jungle', image: '/imagenes/campeones/Rammus/Rammus.webp' },
  { id: 107, name: "Rek'Sai", role: 'jungle', image: '/imagenes/campeones/RekSai/RekSai.webp' },
  { id: 108, name: 'Rell', role: 'support', image: '/imagenes/campeones/Rell/Rell.webp' },
  { id: 109, name: 'Renata Glasc', role: 'support', image: '/imagenes/campeones/RenataGlasc/RenataGlasc.webp' },
  { id: 110, name: 'Renekton', role: 'top', image: '/imagenes/campeones/Renekton/Renekton.webp' },
  { id: 111, name: 'Rengar', role: 'jungle', image: '/imagenes/campeones/Rengar/Rengar.webp' },
  { id: 112, name: 'Riven', role: 'top', image: '/imagenes/campeones/Riven/Riven.webp' },
  { id: 113, name: 'Rumble', role: 'top', image: '/imagenes/campeones/Rumble/Rumble.webp' },
  { id: 114, name: 'Ryze', role: 'middle', image: '/imagenes/campeones/Ryze/Ryze.webp' },
  { id: 115, name: 'Samira', role: 'bottom', image: '/imagenes/campeones/Samira/Samira.webp' },
  { id: 116, name: 'Sejuani', role: 'jungle', image: '/imagenes/campeones/Sejuani/Sejuani.webp' },
  { id: 117, name: 'Senna', role: 'support', image: '/imagenes/campeones/Senna/Senna.webp' },
  { id: 118, name: 'Seraphine', role: 'support', image: '/imagenes/campeones/Seraphine/Seraphine.webp' },
  { id: 119, name: 'Sett', role: 'top', image: '/imagenes/campeones/Sett/Sett.webp' },
  { id: 120, name: 'Shaco', role: 'jungle', image: '/imagenes/campeones/Shaco/Shaco.webp' },
  { id: 121, name: 'Shen', role: 'top', image: '/imagenes/campeones/Shen/Shen.webp' },
  { id: 122, name: 'Shyvana', role: 'jungle', image: '/imagenes/campeones/Shyvana/Shyvana.webp' },
  { id: 123, name: 'Singed', role: 'top', image: '/imagenes/campeones/Singed/Singed.webp' },
  { id: 124, name: 'Sion', role: 'top', image: '/imagenes/campeones/Sion/Sion.webp' },
  { id: 125, name: 'Sivir', role: 'bottom', image: '/imagenes/campeones/Sivir/Sivir.webp' },
  { id: 126, name: 'Skarner', role: 'jungle', image: '/imagenes/campeones/Skarner/Skarner.webp' },
  { id: 127, name: 'Smolder', role: 'bottom', image: '/imagenes/campeones/Smolder/Smolder.webp' },
  { id: 128, name: 'Sona', role: 'support', image: '/imagenes/campeones/Sona/Sona.webp' },
  { id: 129, name: 'Soraka', role: 'support', image: '/imagenes/campeones/Soraka/Soraka.webp' },
  { id: 130, name: 'Swain', role: 'middle', image: '/imagenes/campeones/Swain/Swain.webp' },
  { id: 131, name: 'Sylas', role: 'middle', image: '/imagenes/campeones/Sylas/Sylas.webp' },
  { id: 132, name: 'Syndra', role: 'middle', image: '/imagenes/campeones/Syndra/Syndra.webp' },
  { id: 133, name: 'Tahm Kench', role: 'support', image: '/imagenes/campeones/TahmKench/TahmKench.webp' },
  { id: 134, name: 'Taliyah', role: 'jungle', image: '/imagenes/campeones/Taliyah/Taliyah.webp' },
  { id: 135, name: 'Talon', role: 'middle', image: '/imagenes/campeones/Talon/Talon.webp' },
  { id: 136, name: 'Taric', role: 'support', image: '/imagenes/campeones/Taric/Taric.webp' },
  { id: 137, name: 'Teemo', role: 'top', image: '/imagenes/campeones/Teemo/Teemo.webp' },
  { id: 138, name: 'Thresh', role: 'support', image: '/imagenes/campeones/Thresh/Thresh.webp' },
  { id: 139, name: 'Tristana', role: 'bottom', image: '/imagenes/campeones/Tristana/Tristana.webp' },
  { id: 140, name: 'Trundle', role: 'top', image: '/imagenes/campeones/Trundle/Trundle.webp' },
  { id: 141, name: 'Tryndamere', role: 'top', image: '/imagenes/campeones/Tryndamere/Tryndamere.webp' },
  { id: 142, name: 'Twisted Fate', role: 'middle', image: '/imagenes/campeones/TwistedFate/TwistedFate.webp' },
  { id: 143, name: 'Twitch', role: 'bottom', image: '/imagenes/campeones/Twitch/Twitch.webp' },
  { id: 144, name: 'Udyr', role: 'jungle', image: '/imagenes/campeones/Udyr/Udyr.webp' },
  { id: 145, name: 'Urgot', role: 'top', image: '/imagenes/campeones/Urgot/Urgot.webp' },
  { id: 146, name: 'Varus', role: 'bottom', image: '/imagenes/campeones/Varus/Varus.webp' },
  { id: 147, name: 'Vayne', role: 'bottom', image: '/imagenes/campeones/Vayne/Vayne.webp' },
  { id: 148, name: 'Veigar', role: 'middle', image: '/imagenes/campeones/Veigar/Veigar.webp' },
  { id: 149, name: "Vel'Koz", role: 'middle', image: '/imagenes/campeones/VelKoz/VelKoz.webp' },
  { id: 150, name: 'Vex', role: 'middle', image: '/imagenes/campeones/Vex/Vex.webp' },
  { id: 151, name: 'Vi', role: 'jungle', image: '/imagenes/campeones/Vi/Vi.webp' },
  { id: 152, name: 'Viego', role: 'jungle', image: '/imagenes/campeones/Viego/Viego.webp' },
  { id: 153, name: 'Viktor', role: 'middle', image: '/imagenes/campeones/Viktor/Viktor.webp' },
  { id: 154, name: 'Vladimir', role: 'middle', image: '/imagenes/campeones/Vladimir/Vladimir.webp' },
  { id: 155, name: 'Volibear', role: 'top', image: '/imagenes/campeones/Volibear/Volibear.webp' },
  { id: 156, name: 'Warwick', role: 'jungle', image: '/imagenes/campeones/Warwick/Warwick.webp' },
  { id: 157, name: 'Wukong', role: 'top', image: '/imagenes/campeones/Wukong/Wukong.webp' },
  { id: 158, name: 'Xayah', role: 'bottom', image: '/imagenes/campeones/Xayah/Xayah.webp' },
  { id: 159, name: 'Xerath', role: 'middle', image: '/imagenes/campeones/Xerath/Xerath.webp' },
  { id: 160, name: 'Xin Zhao', role: 'jungle', image: '/imagenes/campeones/XinZhao/XinZhao.webp' },
  { id: 161, name: 'Yasuo', role: 'middle', image: '/imagenes/campeones/Yasuo/Yasuo.webp' },
  { id: 162, name: 'Yone', role: 'middle', image: '/imagenes/campeones/Yone/Yone.webp' },
  { id: 163, name: 'Yorick', role: 'top', image: '/imagenes/campeones/Yorick/Yorick.webp' },
  { id: 164, name: 'Yuumi', role: 'support', image: '/imagenes/campeones/Yuumi/Yuumi.webp' },
  { id: 165, name: 'Zac', role: 'jungle', image: '/imagenes/campeones/Zac/Zac.webp' },
  { id: 166, name: 'Zed', role: 'middle', image: '/imagenes/campeones/Zed/Zed.webp' },
  { id: 167, name: 'Zeri', role: 'bottom', image: '/imagenes/campeones/Zeri/Zeri.webp' },
  { id: 168, name: 'Ziggs', role: 'middle', image: '/imagenes/campeones/Ziggs/Ziggs.webp' },
  { id: 169, name: 'Zilean', role: 'support', image: '/imagenes/campeones/Zilean/Zilean.webp' },
  { id: 170, name: 'Zoe', role: 'middle', image: '/imagenes/campeones/Zoe/Zoe.webp' },
  { id: 171, name: 'Zyra', role: 'support', image: '/imagenes/campeones/Zyra/Zyra.webp' }
];

function cargar() {
  const data = localStorage.getItem(KEY);
  if (data) return JSON.parse(data);
  localStorage.setItem(KEY, JSON.stringify(seedChampions));
  return seedChampions;
}

function guardar(lista) {
  localStorage.setItem(KEY, JSON.stringify(lista));
}

//CRUD

export function getChampions() {
  return cargar();
}

export function getChampionById(id) {
  return cargar().find((c) => c.id === parseInt(id));
}

export function createChampion(champion) {
  const lista = cargar();
  const nuevoId = lista.length > 0 ? Math.max(...lista.map((c) => c.id)) + 1 : 1;
  const nuevo = { ...champion, id: nuevoId };
  const actualizada = [...lista, nuevo];
  guardar(actualizada);
  return nuevo;
}

export function updateChampion(id, cambios) {
  const lista = cargar();
  const actualizada = lista.map((c) => (c.id === id ? { ...c, ...cambios } : c));
  guardar(actualizada);
  return actualizada.find((c) => c.id === id);
}

export function deleteChampion(id) {
  const lista = cargar();
  const actualizada = lista.filter((c) => c.id !== id);
  guardar(actualizada);
}
