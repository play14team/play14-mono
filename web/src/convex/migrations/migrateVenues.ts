import { mutation } from './_generated/server';

// Migration function for venues
export const migrateVenues = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for venues...');

		const data = [
			{
				_strapiId: 6,
				name: 'Spazio Mil',
				website: 'http://www.spaziomil.org/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 13,
				name: 'Herman Miller',
				website: 'http://www.hermanmiller.co.uk/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 10,
				name: 'Espacio Manhattan',
				website: 'http://www.studiomanhattan.es/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 8,
				name: 'TEAMLABS/',
				website: 'http://www.teamlabs.es',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 33,
				name: 'Connectory',
				website: 'https://www.stuttgartconnectory.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 42,
				name: 'De Stadstuin 20',
				website: 'https://www.destadstuin.nl/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 47,
				name: 'Dumbo Space',
				website: 'https://dumbospace.it/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 46,
				name: 'ZICER - Zagreb Innovation Centre',
				website: 'https://www.zicer.hr/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 43,
				name: 'Netmind',
				website: 'https://netmind.net/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 4,
				name: 'Nokia Campus',
				website: 'http://www.nokia.com/ro_ro',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 2,
				name: 'Headspace',
				website: 'http://www.headspacegroup.co.uk/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 16,
				name: 'theventure.city',
				website: 'https://theventure.city/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 3,
				name: 'The App Business',
				website: 'http://www.theappbusiness.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: 'The Spitfire Building'
			},
			{
				_strapiId: 24,
				name: 'INS',
				website: 'https://inscm.com.au/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 1,
				name: 'American University of Beirut',
				website: 'http://www.aub.edu.lb/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: 'American University of Beirut'
			},
			{
				_strapiId: 21,
				name: 'Micro Marché',
				website: 'http://www.micromarche.com',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 11,
				name: 'Oose Innovative Informatik eG',
				website: 'https://www.oose.de/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: 'Kontorhaus Montblanc, 1st Floor'
			},
			{
				_strapiId: 28,
				name: 'FutureLab',
				website: 'http://www.futurelab.red',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 17,
				name: 'Everis LivingLab',
				website: 'https://www.everis.com/spain/es/everis-living-lab',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 20,
				name: 'Critical Software',
				website: 'https://www.criticalsoftware.com',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 5,
				name: 'Goodgame Studios',
				website: 'https://www.goodgamestudios.com',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 19,
				name: 'Dark Horse',
				website: 'https://www.thedarkhorse.de/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: 'Backyard 2, Floor 4'
			},
			{
				_strapiId: 29,
				name: 'PaloIT Mexico',
				website: 'https://www.palo-it.com',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 15,
				name: 'Launchlabs',
				website: 'http://launchlabs.ch/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 34,
				name: 'The Podium Building',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 23,
				name: 'Spazio13',
				website: 'https://spazio13.org/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 30,
				name: 'Strategiefabriek',
				website: 'https://www.strategiefabriek.nl/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 25,
				name: 'Markhof',
				website: 'https://markhof.wien/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 12,
				name: 'DaWanda Snuggery',
				website: 'https://de.dawanda.com/mkt/dawanda-snuggery',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 9,
				name: 'Nokia Paris-Saclay',
				website: 'https://www.nokia.com/fr_int',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 7,
				name: 'Technoport',
				website: 'http://www.technoport.lu',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 31,
				name: 'Elbuna - Christian Baumgartner',
				website: 'http://www.elbuna.ch/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 41,
				name: 'Mexico Online',
				website: null,
				location: null,
				addressDetails: null
			},
			{
				_strapiId: 40,
				name: 'Online',
				website: null,
				location: null,
				addressDetails: null
			},
			{
				_strapiId: 14,
				name: 'Kapellerput',
				website: 'https://www.kapellerput.nl/en/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 44,
				name: 'Fab Lab Iași',
				website: 'https://fablabiasi.spaces.nexudus.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 32,
				name: 'Ministry Of Justice',
				website: 'https://www.justice.gov.uk/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 35,
				name: 'SocialBakers',
				website: 'https://www.socialbakers.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 27,
				name: 'Spaces',
				website: 'https://www.spacesworks.com/es/madrid/atocha/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: '2nd floor'
			},
			{
				_strapiId: 22,
				name: 'Talkdesk',
				website: 'https://www.talkdesk.com',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 26,
				name: 'The Sentral Residences',
				website: 'https://thesentralresidence.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 18,
				name: 'Xebia Academy',
				website: 'https://training.xebia.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 38,
				name: 'Broad Gate',
				website: 'https://www.broadgateleeds.co.uk/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 45,
				name: 'Mata do Fontelo',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 39,
				name: 'T-Systems Innovation Hub',
				website: 'https://www.t-systems.com/de/en',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 37,
				name: 'Index Creative Village',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 49,
				name: 'AIM Conference Center',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: 'Jesus V. del Rosario Foundation Building'
			},
			{
				_strapiId: 50,
				name: 'Thinslices',
				website: 'https://www.thinslices.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 51,
				name: 'Torre Cepsa',
				website: 'https://www.cepsa.es',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 53,
				name: 'Hotel Termas da Curia',
				website: 'https://www.termasdacuria.com',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5023'
			},
			{
				_strapiId: 55,
				name: 'Memox Zürich Albisrieden',
				website: 'https://www.memox.com/standorte/zurich/albisrieden/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5061'
			},
			{
				_strapiId: 56,
				name: 'Caramulo Experience Center',
				website: 'http://www.caramuloexperiencecenter.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5098'
			},
			{
				_strapiId: 57,
				name: 'ABC ',
				website: 'https://www.abc.net.au/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 58,
				name: 'Surian Condominium',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails:
					'Entrance Roudabout, Tower A, Jalan PJU 7/7, Mutiara Damansara, Petaling Jaya, Selangor, Malaysia'
			},
			{
				_strapiId: 60,
				name: 'Bangalore',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 61,
				name: 'OpenText',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 62,
				name: 'Underground ClubHouse',
				website: 'https://www.ufer.com',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5165'
			},
			{
				_strapiId: 63,
				name: 'Kairos DS',
				website: 'https://www.kairosds.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 64,
				name: 'National Library Board',
				website: 'https://www.nlb.gov.sg',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5260'
			},
			{
				_strapiId: 65,
				name: 'Sunway University',
				website: 'https://sunwayuniversity.edu.my/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: '200401015434 (653937-U) DU025(B)',
				logoId: 'file_5270'
			},
			{
				_strapiId: 66,
				name: 'Cegeka',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5276'
			},
			{
				_strapiId: 67,
				name: 'London Shambhala Meditation Centre',
				website:
					'https://www.tagvenue.com/rooms/london/40031/london-shambhala-meditation-centre/main-hall#map',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 68,
				name: 'The Pod, National Library Building',
				website: 'https://www.nlb.gov.sg/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 69,
				name: 'IndiQube Golf View',
				website: 'https://indiqube.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails:
					'Golf View Homes, 3rd Cross Rd, Rustam Bagh Layout, Bengaluru, Karnataka 560017'
			},
			{
				_strapiId: 70,
				name: 'Enova',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5303'
			},
			{
				_strapiId: 71,
				name: 'Epitech Nancy',
				website: 'https://www.epitech.eu/ecole-informatique-nancy',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5362'
			},
			{
				_strapiId: 72,
				name: 'ÖBB Open Innovation Factory',
				website: 'http://openinnovation.oebb.at/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 59,
				name: 'ÖBB Open Innovation Factory',
				website: 'https://openinnovation.oebb.at',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			},
			{
				_strapiId: 73,
				name: 'Tuinhotel Tralala',
				website: 'https://tuinhoteltralala.nl/en/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5396'
			},
			{
				_strapiId: 74,
				name: 'Museum Siam',
				website: 'https://www.facebook.com/museumsiamfan/about',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: ' 4 ถนนสนามไชย แขวงพระบรมมหาราชวัง, Phra Nakhon, Thailand, 10200',
				logoId: 'file_5454'
			},
			{
				_strapiId: 75,
				name: 'Fábrica da Ciência Aveiro',
				website: 'https://www.ua.pt/pt/fabrica/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null,
				logoId: 'file_5488'
			},
			{
				_strapiId: 76,
				name: '22 Bishopsgate',
				website: null,
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: '22 Bishopsgate, London EC2N 4BQ, UK'
			},
			{
				_strapiId: 77,
				name: 'Sandipani Hometel',
				website: 'https://www.sandipanihometel.com/',
				location: {
					lat: 0,
					lng: 0
				},
				addressDetails: null
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('venues', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated venues ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate venues ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for venues: ${results.length}/${data.length} records`);
		return results;
	}
});
