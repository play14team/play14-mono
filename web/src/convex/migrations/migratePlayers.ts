import { mutation } from './_generated/server';

// Migration function for players
export const migratePlayers = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for players...');

		const data = [
			{
				_strapiId: 1399,
				name: 'Alan Álvarez',
				slug: 'alan-alvarez',
				position: 'Host',
				company: 'Globant',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4314',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/erik-alan-%C3%A1lvarez-aguirre-84087950/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/AlanRoko'
					}
				]
			},
			{
				_strapiId: 1620,
				name: 'Franziska Wiebel',
				slug: 'franziska-wiebel',
				position: 'Host',
				company: null,
				tagline:
					'Scrum Meets Resilience - sharing goals, joining forces Resilience for People & Organizations: healthier, happier, better',
				bio: null,
				website: null,
				avatarId: 'file_4339',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/franziska-wiebel/'
					}
				]
			},
			{
				_strapiId: 1410,
				name: 'Alin Grecu',
				slug: 'alin-grecu',
				position: 'Player',
				company: 'Organic Consulting',
				tagline: 'Training Expert',
				bio: null,
				website: null,
				avatarId: 'file_4321',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alin-grecu-30a83629/'
					}
				]
			},
			{
				_strapiId: 1384,
				name: 'Abigail Bangser',
				slug: 'abigail-bangser',
				position: 'Player',
				company: 'ThoughtWorks',
				tagline: 'Quality Analyst Consultant ',
				bio: null,
				website: null,
				avatarId: 'file_4304',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/abbybangser/'
					}
				]
			},
			{
				_strapiId: 2090,
				name: 'Patricia Sanabria',
				slug: 'patricia-sanabria',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4889',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/patriciasanabria/'
					}
				]
			},
			{
				_strapiId: 2331,
				name: 'René Bohrenfeldt',
				slug: 'rene-bohrenfeldt',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5335',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rene-bohrenfeldt/'
					}
				]
			},
			{
				_strapiId: 1398,
				name: 'Alberto Gómez',
				slug: 'alberto-gomez',
				position: 'Player',
				company: 'TUI Group',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4315',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/albertogfuster/'
					}
				]
			},
			{
				_strapiId: 1374,
				name: 'Kreingkarn (Mork) Kanjanapokin',
				slug: 'kreingkarn-mork-kanjanapokin',
				position: 'Player',
				company: 'Index Creative Village',
				tagline: 'CEO',
				bio: null,
				website: null,
				avatarId: 'file_3988',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1373,
				name: 'Kreingkrai (Mek) Kanjanapokin',
				slug: 'kreingkrai-mek-kanjanapokin',
				position: 'Player',
				company: 'Index Creative Village',
				tagline: 'CEO',
				bio: null,
				website: null,
				avatarId: 'file_3872',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1407,
				name: 'Alexandra Ramusga',
				slug: 'alexandra-ramusga',
				position: 'Player',
				company: 'Nokia',
				tagline: 'Engineer',
				bio: null,
				website: null,
				avatarId: 'file_4336',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexandra-ramusga-3b3a1666/'
					}
				]
			},
			{
				_strapiId: 1401,
				name: 'Alan McCoy',
				slug: 'alan-mccoy',
				position: 'Player',
				company: 'Met Office',
				tagline: 'Service Transition Manager',
				bio: null,
				website: null,
				avatarId: 'file_4313',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alan-mccoy-0a255b1/'
					}
				]
			},
			{
				_strapiId: 2132,
				name: 'Ana Adán',
				slug: 'ana-adan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5047',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anaadan/'
					}
				]
			},
			{
				_strapiId: 1397,
				name: 'Alberto Brandolini',
				slug: 'alberto-brandolini',
				position: 'Player',
				company: 'Avanscoperta',
				tagline:
					"I like to solve problems and to write software that does that. I'll flood you with sticky notes and call it #EventStorming",
				bio: null,
				website: null,
				avatarId: 'file_4312',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/ziobrando'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/brando/'
					}
				]
			},
			{
				_strapiId: 1370,
				name: 'Dana Jane Bonney',
				slug: 'dana-jane-bonney',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3807',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2379,
				name: 'Jannatun Naeem',
				slug: 'jannatun-naeem',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5462',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jannatun-naeem-8298ab1ba/'
					}
				]
			},
			{
				_strapiId: 1371,
				name: 'David Armstrong',
				slug: 'david-armstrong',
				position: 'Player',
				company: 'Cursosidiomas.co',
				tagline: 'Esl Teacher Trainer',
				bio: null,
				website: null,
				avatarId: 'file_4294',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1405,
				name: 'Alexandre Eber',
				slug: 'alexandre-eber',
				position: 'Player',
				company: 'One to Team',
				tagline: 'Chef de projet - Facilitateur en intelligence collective',
				bio: null,
				website: null,
				avatarId: 'file_4324',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexandre-eber-4a284020/'
					}
				]
			},
			{
				_strapiId: 1413,
				name: 'Amaranatho Robey',
				slug: 'amaranatho-robey',
				position: 'Player',
				company: 'Mindfulness out of the box',
				tagline:
					'I support executives to awaken to their true potential. So they can stay calm and connected in complex situtations',
				bio: null,
				website: null,
				avatarId: 'file_4326',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/amaranatho/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/PlayfulMonk'
					}
				]
			},
			{
				_strapiId: 1375,
				name: 'Lenke Melman',
				slug: 'lenke-melman',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3886',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2188,
				name: 'Jane Tweedy',
				slug: 'jane-tweedy',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5126',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'Https://LinkedIn.com/in/janetweedy'
					}
				]
			},
			{
				_strapiId: 1376,
				name: 'Markus Lüger',
				slug: 'markus-luger',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3904',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1377,
				name: 'Miguel Moro Alvarez',
				slug: 'miguel-moro-alvarez',
				position: 'Player',
				company: null,
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3763',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1378,
				name: 'Sander Melman',
				slug: 'sander-melman',
				position: 'Player',
				company: 'Meant-to-be Consultancy B.V.',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4393',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1379,
				name: 'Simone Schmidt',
				slug: 'simone-schmidt',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4099',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1415,
				name: 'Anastasia Grecu',
				slug: 'anastasia-grecu',
				position: 'Player',
				company: 'AIMS International Romania',
				tagline: 'HR consultant',
				bio: null,
				website: null,
				avatarId: 'file_4329',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/natashagrecu9/'
					}
				]
			},
			{
				_strapiId: 1380,
				name: 'Ute Hamelmann',
				slug: 'ute-hamelmann',
				position: 'Player',
				company: 'Embodied Dynamics',
				tagline: 'Systems Innovation Manager',
				bio: null,
				website: null,
				avatarId: 'file_4115',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1381,
				name: 'Volker Stahl',
				slug: 'volker-stahl',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4422',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1653,
				name: 'Jamie Carter',
				slug: 'jamie-carter',
				position: 'Player',
				company: 'Belron® International',
				tagline: 'Service Delivery Lead',
				bio: null,
				website: null,
				avatarId: 'file_3868',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jamie-carter-9724b39a/'
					}
				]
			},
			{
				_strapiId: 1409,
				name: 'Alexander Schaaf',
				slug: 'alexander-schaaf',
				position: 'Player',
				company: 'key2know',
				tagline: 'Agile & Learning - Beratung, PM und Training',
				bio: null,
				website: null,
				avatarId: 'file_4319',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/key2knowalexanderschaaf/'
					}
				]
			},
			{
				_strapiId: 1400,
				name: 'Alessandro Trentin',
				slug: 'alessandro-trentin',
				position: 'Player',
				company: 'Graffiti 2000',
				tagline: 'Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_4318',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alessandrotrentin/'
					}
				]
			},
			{
				_strapiId: 1406,
				name: 'Alexandre Claus',
				slug: 'alexandre-claus',
				position: 'Player',
				company: null,
				tagline: 'Solution designer/System analyst',
				bio: null,
				website: null,
				avatarId: 'file_4332',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexandreclaus/'
					}
				]
			},
			{
				_strapiId: 2098,
				name: 'Bárbara Casares',
				slug: 'barbara-casares',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4898',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/barbaracasares/'
					}
				]
			},
			{
				_strapiId: 2119,
				name: 'Eva Astorga',
				slug: 'eva-astorga',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5027',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/eastorga/'
					}
				]
			},
			{
				_strapiId: 2097,
				name: 'Luis Peña',
				slug: 'luis-pena',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4897',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/luis-pe%C3%B1a-b66a8218'
					}
				]
			},
			{
				_strapiId: 1383,
				name: 'Adiya Mohr',
				slug: 'adiya-mohr',
				position: 'Player',
				company: 'Number26 GmbH',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4301',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adiya-mohr-93965ba6/'
					}
				]
			},
			{
				_strapiId: 1390,
				name: 'Abraham Larrazolo Barrera',
				slug: 'abraham-larrazolo-barrera',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'Software Enginner',
				bio: null,
				website: null,
				avatarId: 'file_4302',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/abraham-larrazolo-barrera/'
					}
				]
			},
			{
				_strapiId: 1408,
				name: 'Alexandra Rattay',
				slug: 'alexandra-rattay',
				position: 'Player',
				company: 'e&Co. AG',
				tagline: 'Senior Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4322',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexandra-maria-rattay-a905ab2a'
					}
				]
			},
			{
				_strapiId: 1386,
				name: 'Adriana Hazulea',
				slug: 'adriana-hazulea',
				position: 'Player',
				company: 'Worth Internet Systems',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4300',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adrianahazulea/'
					}
				]
			},
			{
				_strapiId: 1404,
				name: 'Alex Moseley',
				slug: 'alex-moseley',
				position: 'Player',
				company: 'University of Leicester',
				tagline: 'National Teaching Fellow, Educational Designer',
				bio: null,
				website: null,
				avatarId: 'file_4320',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexmoseley/'
					}
				]
			},
			{
				_strapiId: 1641,
				name: 'Hoang C. Huynh',
				slug: 'hoang-c-huynh',
				position: 'Player',
				company: 'PRSD',
				tagline: 'Experience Strategist, Advisor, CSPO® and Partner PRSD',
				bio: null,
				website: null,
				avatarId: 'file_4011',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hchuynh/'
					}
				]
			},
			{
				_strapiId: 1736,
				name: 'Luca Vettorello',
				slug: 'luca-vettorello',
				position: 'Player',
				company: null,
				tagline: 'CEO @ Dalet, cofounder Impact Hub Reggio Emilia, Hurricane Start member',
				bio: null,
				website: null,
				avatarId: 'file_3796',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/luca-vettorello-5158b960/'
					}
				]
			},
			{
				_strapiId: 1599,
				name: 'Fabio Gariboldi',
				slug: 'fabio-gariboldi',
				position: 'Host',
				company: 'Ingegneria Relazionale',
				tagline: 'Change & Improvement Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3801',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fabiogariboldi/'
					}
				]
			},
			{
				_strapiId: 1631,
				name: 'Giuseppe "Pino" Decandia',
				slug: 'giuseppe-pino-decandia',
				position: 'Host',
				company: 'Agile Reloaded',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3864',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pdecandia/'
					}
				]
			},
			{
				_strapiId: 1772,
				name: 'Marco Calzolari',
				slug: 'marco-calzolari',
				position: 'Host',
				company: 'Agile Reloaded',
				tagline: 'Conversation Designer, Organization Philosopher, Agile Coach · CSM® CSPO®',
				bio: null,
				website: null,
				avatarId: 'file_3848',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcocalzolari/'
					}
				]
			},
			{
				_strapiId: 1701,
				name: 'Julia Rathmann',
				slug: 'julia-rathmann',
				position: 'Player',
				company: 'BCG BrightHouse',
				tagline: 'Associate Strategy Director',
				bio: null,
				website: null,
				avatarId: 'file_3992',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/julia-rathmann-98690b138'
					}
				]
			},
			{
				_strapiId: 1804,
				name: 'Matthew Murphy',
				slug: 'matthew-murphy',
				position: 'Player',
				company: 'Talan',
				tagline: 'Agile Facilitator',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-MatthewMurphy.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_3909',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/matthew-murphy-937b718/'
					}
				]
			},
			{
				_strapiId: 1835,
				name: 'Mioara Petre',
				slug: 'mioara-petre',
				position: 'Host',
				company: null,
				tagline: 'Looking for a new challenge',
				bio: null,
				website: null,
				avatarId: 'file_3830',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mioara-petre-2a903932/'
					}
				]
			},
			{
				_strapiId: 1680,
				name: 'John Park',
				slug: 'john-park',
				position: 'Player',
				company: 'European Investment Fund (EIF)',
				tagline: 'Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_3933',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/parkjohn/'
					}
				]
			},
			{
				_strapiId: 1813,
				name: 'Meriam Bouchir',
				slug: 'meriam-bouchir',
				position: 'Player',
				company: null,
				tagline: 'Team Manager',
				bio: null,
				website: null,
				avatarId: 'file_3760',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/meriam-bouchir-b855aa167/'
					}
				]
			},
			{
				_strapiId: 1878,
				name: 'Patrik Brähler',
				slug: 'patrik-brahler',
				position: 'Player',
				company: 'T-Systems International GmbH',
				tagline: 'Innovation Manager & passionate facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3725',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/patrik-br%C3%A4hler-2a435927'
					}
				]
			},
			{
				_strapiId: 1888,
				name: 'Pedro Oliveira da Silva',
				slug: 'pedro-oliveira-da-silva',
				position: 'Player',
				company: 'Mercedes-Benz.io',
				tagline: 'Scrum Master at Mercedes-Benz.io | PSM II, SAFe® 5 Agilist, PMP®',
				bio: null,
				website: null,
				avatarId: 'file_4146',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pedromosilva'
					}
				]
			},
			{
				_strapiId: 1474,
				name: 'Benoît Abribat',
				slug: 'benoit-abribat',
				position: 'Player',
				company: 'Société Générale Bank & Trust',
				tagline: 'Agile learder',
				bio: null,
				website: null,
				avatarId: 'file_3662',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/benoit-abribat-54423b57/'
					}
				]
			},
			{
				_strapiId: 1651,
				name: 'Inês Almeida Santos',
				slug: 'ines-almeida-santos',
				position: 'Player',
				company: 'Talkdesk',
				tagline: 'Senior Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3919',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/in%C3%AAs-almeida-santos-ab08982/'
					}
				]
			},
			{
				_strapiId: 1516,
				name: 'Christoph Lefkes',
				slug: 'christoph-lefkes',
				position: 'Player',
				company: 'Lefkes Unternehmensberatung GmbH',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3693',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christoph-lefkes-15675385/'
					}
				]
			},
			{
				_strapiId: 2314,
				name: 'Bharti Maru',
				slug: 'bharti-maru',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5308',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bharti-maru/'
					}
				]
			},
			{
				_strapiId: 1794,
				name: 'Mario Méndez López',
				slug: 'mario-mendez-lopez',
				position: 'Host',
				company: null,
				tagline: 'Agile Coach & Co-Founder',
				bio: null,
				website: null,
				avatarId: 'file_3800',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mario-m%C3%A9ndez-l%C3%B3pez-24044978/'
					}
				]
			},
			{
				_strapiId: 1435,
				name: 'Anja Ebers',
				slug: 'anja-ebers',
				position: 'Player',
				company: 'Akanto',
				tagline: 'Enabling people to be great',
				bio: null,
				website: null,
				avatarId: 'file_3647',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anja-ebers/'
					}
				]
			},
			{
				_strapiId: 1900,
				name: 'Petra Sedlmeier',
				slug: 'petra-sedlmeier',
				position: 'Player',
				company: 'T-Systems International GmbH',
				tagline: 'ECM Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3901',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/petra-sedlmeier-b7826b12b'
					}
				]
			},
			{
				_strapiId: 2332,
				name: 'Sascha Wechsung',
				slug: 'sascha-wechsung',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5336',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sascha-wechsung/'
					}
				]
			},
			{
				_strapiId: 1484,
				name: 'Bogdan Vaida',
				slug: 'bogdan-vaida',
				position: 'Player',
				company: 'SELLification.org',
				tagline: 'Experiential trainer',
				bio: null,
				website: null,
				avatarId: 'file_3818',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/vaidabogdanofficial'
					}
				]
			},
			{
				_strapiId: 1388,
				name: 'Achim Schmidt',
				slug: 'achim-schmidt',
				position: 'Player',
				company: 'conplement AG',
				tagline: 'Design Thinking Coach / Agile Innovation Coach / Innovation Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4298',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/achim-schmidt-2aa0654/'
					}
				]
			},
			{
				_strapiId: 1720,
				name: 'Kristijan Zimmer',
				slug: 'kristijan-zimmer',
				position: 'Host',
				company: 'Croatian Information Technology Association',
				tagline: 'IT, E-learning & Gamification Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3978',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kristijanzimmer'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/kzimmer'
					}
				]
			},
			{
				_strapiId: 1863,
				name: 'Oana Juncu',
				slug: 'oana-juncu',
				position: 'Player',
				company: 'cOemerge',
				tagline: 'Agile Business DJ',
				bio: null,
				website: null,
				avatarId: 'file_3900',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/oanajuncu/'
					}
				]
			},
			{
				_strapiId: 1912,
				name: 'Raquel Silva',
				slug: 'raquel-silva',
				position: 'Player',
				company: 'Zapper App',
				tagline: 'CSP | CSM | CSPO | Partner Solutions Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4089',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/raquel-silva/'
					}
				]
			},
			{
				_strapiId: 1841,
				name: 'Munir Remahl',
				slug: 'munir-remahl',
				position: 'Player',
				company: 'Outbound',
				tagline: 'CRM Solutions Architect',
				bio: null,
				website: null,
				avatarId: 'file_3879',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/munirremahl/'
					}
				]
			},
			{
				_strapiId: 1559,
				name: 'Diana Muñoz Leira',
				slug: 'diana-munoz-leira',
				position: 'Player',
				company: null,
				tagline:
					'Psicóloga Social. Coach. Docente. Inteligencia emocional I Orientación laboral & Tics I Igualdad',
				bio: null,
				website: null,
				avatarId: 'file_3731',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dianaleira/'
					}
				]
			},
			{
				_strapiId: 1918,
				name: 'Rob Aston',
				slug: 'rob-aston',
				position: 'Player',
				company: 'Bookatable',
				tagline:
					'Agile Coach at Bookatable, Certified LeSS Practitioner, Certified SAFe Agilist, Personal Coach, Happy Work Coach',
				bio: null,
				website: null,
				avatarId: 'file_4088',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/robaston/'
					}
				]
			},
			{
				_strapiId: 1730,
				name: 'Laurent Vergnol',
				slug: 'laurent-vergnol',
				position: 'Player',
				company: 'Data Confidence',
				tagline: 'Co Founder, CTO',
				bio: null,
				website: null,
				avatarId: 'file_3797',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/laurentvergnol/'
					}
				]
			},
			{
				_strapiId: 2380,
				name: 'Stefan Nüsperling',
				slug: 'stefan-nusperling',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5463',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nuesperling/'
					}
				]
			},
			{
				_strapiId: 1444,
				name: 'Anne Gabrillagues',
				slug: 'anne-gabrillagues',
				position: 'Player',
				company: 'Ippon Technologies',
				tagline: 'Agile Coach & Product Owner',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-AnneGabrillagues.mp3" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_4284',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/agabrillagues/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/agabrillagues'
					}
				]
			},
			{
				_strapiId: 1525,
				name: 'Cristian Peña Serrano',
				slug: 'cristian-pena-serrano',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3708',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cristian-pe%C3%B1a-serrano-456578147/'
					}
				]
			},
			{
				_strapiId: 1669,
				name: 'Javier Ortega Santos',
				slug: 'javier-ortega-santos',
				position: 'Player',
				company: 'Grupo GFT',
				tagline: 'Working as a consultant for BBVA',
				bio: null,
				website: null,
				avatarId: 'file_3867',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/javier-ortega-santos-87801211/'
					}
				]
			},
			{
				_strapiId: 1710,
				name: 'Juliette Dubois',
				slug: 'juliette-dubois',
				position: 'Player',
				company: 'Swipe',
				tagline: 'UX/UI Designer',
				bio: null,
				website: null,
				avatarId: 'file_3808',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/juliettedubois/'
					}
				]
			},
			{
				_strapiId: 1762,
				name: 'Manuel Wegener',
				slug: 'manuel-wegener',
				position: 'Player',
				company: 'Berliner Verkehrsbetriebe (BVG)',
				tagline: 'Kanban Coach',
				bio: null,
				website: null,
				avatarId: 'file_4139',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/manuel-wegener-812409163/'
					}
				]
			},
			{
				_strapiId: 2056,
				name: 'Marta Ghislandi',
				slug: 'marta-ghislandi',
				position: 'Host',
				company: 'AgileReloaded',
				tagline: 'Communication | Corporate event planner',
				bio: null,
				website: null,
				avatarId: 'file_4640',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marta-ghislandi/'
					}
				]
			},
			{
				_strapiId: 1856,
				name: 'Nora Dietrich',
				slug: 'nora-dietrich',
				position: 'Player',
				company: 'TOMINO GbR',
				tagline:
					'Trainer and Coach for organizational change & prospective behavioral psychotherapist for youth and adults',
				bio: null,
				website: null,
				avatarId: 'file_3935',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nora-dietrich-83a25412a'
					}
				]
			},
			{
				_strapiId: 1549,
				name: 'David Alburquerque',
				slug: 'david-alburquerque',
				position: 'Player',
				company: 'Marketingcom',
				tagline: 'Director Creativo',
				bio: null,
				website: null,
				avatarId: 'file_4296',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/david-alburquerque-91714a67/'
					}
				]
			},
			{
				_strapiId: 1589,
				name: 'Erik Alan Álvarez Aguirre',
				slug: 'erik-alan-alvarez-aguirre',
				position: 'Player',
				company: 'Globant',
				tagline: 'Agile Coach Whisperer. CAL, CSM',
				bio: null,
				website: null,
				avatarId: 'file_3903',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/erik-alan-%C3%A1lvarez-aguirre-84087950/'
					}
				]
			},
			{
				_strapiId: 1568,
				name: 'Ed Scott',
				slug: 'ed-scott',
				position: 'Host',
				company: 'River Island',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4340',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/edmscott/'
					}
				]
			},
			{
				_strapiId: 1536,
				name: 'Csilla Groza',
				slug: 'csilla-groza',
				position: 'Player',
				company: 'Nokia',
				tagline: 'R&D Line Manager',
				bio: null,
				website: null,
				avatarId: 'file_3712',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/csilla-groza-5a529293/'
					}
				]
			},
			{
				_strapiId: 1621,
				name: 'Gabriella Morra',
				slug: 'gabriella-morra',
				position: 'Player',
				company: 'MIP Politecnico di Milano',
				tagline: 'HR Director - Executive MBA',
				bio: null,
				website: null,
				avatarId: 'file_3844',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gabriella-morra-482ab53/'
					}
				]
			},
			{
				_strapiId: 1824,
				name: "Michael O'Donnell",
				slug: 'michael-odonnell',
				position: 'Player',
				company: 'Optum Global',
				tagline: 'Scrum Master, Dublin Machine Learning',
				bio: null,
				website: null,
				avatarId: 'file_3936',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mikejodonnell/'
					}
				]
			},
			{
				_strapiId: 1579,
				name: 'Ellen Hermens',
				slug: 'ellen-hermens',
				position: 'Player',
				company: 'iteratec',
				tagline: 'Senior Agile Coach | Design Thinking Coach | Agile Games Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4132',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ellenhermens'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Ellen_Hermens'
					}
				]
			},
			{
				_strapiId: 1454,
				name: 'Arvind Mishra',
				slug: 'arvind-mishra',
				position: 'Player',
				company: 'Capgemini',
				tagline: 'Agile Coach, SAFe SPC,Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3644',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/arvmishra/'
					}
				]
			},
			{
				_strapiId: 2083,
				name: 'Carmen Frey',
				slug: 'carmen-frey',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4851',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/carmen-frey-573690147/'
					}
				]
			},
			{
				_strapiId: 2133,
				name: 'Laura Portilla',
				slug: 'laura-portilla',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5048',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/laura-portilla-8b31b45/'
					}
				]
			},
			{
				_strapiId: 1545,
				name: 'Dave Woertman',
				slug: 'dave-woertman',
				position: 'Player',
				company: 'Davewoertman.com',
				tagline: 'Freelance Agile coach • Scrum Master • (web/app) development • Training',
				bio: null,
				website: null,
				avatarId: 'file_3895',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/davewoertman/'
					}
				]
			},
			{
				_strapiId: 1520,
				name: 'Cindy Beer',
				slug: 'cindy-beer',
				position: 'Player',
				company: 'GK Software SE',
				tagline: 'Senior Solution Manager',
				bio: null,
				website: null,
				avatarId: 'file_3694',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cindybeer'
					}
				]
			},
			{
				_strapiId: 1514,
				name: 'Christoph Reinicke',
				slug: 'christoph-reinicke',
				position: 'Host',
				company: 'Robert Bosch GmbH',
				tagline: 'Scrum Master in der Hardware Entwicklung',
				bio: null,
				website: null,
				avatarId: 'file_3975',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Christoph_Reinicke3'
					}
				]
			},
			{
				_strapiId: 1603,
				name: 'Ferdinando Santacroce',
				slug: 'ferdinando-santacroce',
				position: 'Host',
				company: 'Mokabyte',
				tagline: 'Dev, author, speaker, learner',
				bio: null,
				website: null,
				avatarId: 'file_3730',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ferdinandosantacroce/'
					}
				]
			},
			{
				_strapiId: 1655,
				name: 'Iratxe Kaltzakorta Zendagortagalartza',
				slug: 'iratxe-kaltzakorta-zendagortagalartza',
				position: 'Host',
				company: 'Netmind',
				tagline: 'Change Agent',
				bio: null,
				website: null,
				avatarId: 'file_4346',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/iratxe-kaltzakorta/'
					}
				]
			},
			{
				_strapiId: 1554,
				name: 'Delia Estebaranz Barahona',
				slug: 'delia-estebaranz-barahona',
				position: 'Player',
				company: 'Dlia Design',
				tagline:
					'Diseñadora Agile de Productos, Servicios, Experiencias y Modelos de Negocio | Formadora',
				bio: null,
				website: null,
				avatarId: 'file_4008',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/delia-estebaranz-barahona-947646a/'
					}
				]
			},
			{
				_strapiId: 1449,
				name: 'Anne Lehmann',
				slug: 'anne-lehmann',
				position: 'Player',
				company: 'Otto GmbH & Co KG',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3622',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anne-lehmann-a5778a93'
					}
				]
			},
			{
				_strapiId: 2381,
				name: 'Sven Olaf Nix',
				slug: 'sven-olaf-nix',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5464',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sven-olaf-nix/'
					}
				]
			},
			{
				_strapiId: 1403,
				name: 'Alcina Monteiro',
				slug: 'alcina-monteiro',
				position: 'Player',
				company: null,
				tagline: 'CEO na Alcina Monteiro - Consultoria de Imagem e comunicação',
				bio: null,
				website: null,
				avatarId: 'file_4311',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alcinamonteiro/'
					}
				]
			},
			{
				_strapiId: 1643,
				name: 'Heidi Hautopp',
				slug: 'heidi-hautopp',
				position: 'Player',
				company: 'Aalborg University Copenhagen',
				tagline: 'Videnskabelig assistent',
				bio: null,
				website: null,
				avatarId: 'file_3878',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/heidi-hautopp-95943b63/'
					}
				]
			},
			{
				_strapiId: 1592,
				name: 'Fabien Cimbaluria',
				slug: 'fabien-cimbaluria',
				position: 'Player',
				company: 'Crédit Agricole Life Insurance Europe',
				tagline: 'Responsable Middle Office Finance',
				bio: null,
				website: null,
				avatarId: 'file_3845',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fabiencimbauria/'
					}
				]
			},
			{
				_strapiId: 1392,
				name: 'Adriano Gasparri',
				slug: 'adriano-gasparri',
				position: 'Player',
				company: null,
				tagline: 'Strategic Consultant & Trainer',
				bio: null,
				website: null,
				avatarId: 'file_4309',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adrianogasparri/'
					}
				]
			},
			{
				_strapiId: 1527,
				name: 'Cornelia Vonhof',
				slug: 'cornelia-vonhof',
				position: 'Player',
				company: 'Hochschule der Medien Stuttgart',
				tagline: 'Prodekanin Fakultät Information & Kommunikation',
				bio: null,
				website: null,
				avatarId: 'file_3787',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Cornelia_Vonhof'
					}
				]
			},
			{
				_strapiId: 1411,
				name: 'Amit Maheshwari',
				slug: 'amit-maheshwari',
				position: 'Player',
				company: 'Motability Operations',
				tagline: 'Senior Scrum Master (CSP, CSM, CSD, CSPO)',
				bio: null,
				website: null,
				avatarId: 'file_4325',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/akmaheshwari/'
					}
				]
			},
			{
				_strapiId: 1459,
				name: 'Aurelien Marando',
				slug: 'aurelien-marando',
				position: 'Player',
				company: 'PALO IT',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4282',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/aurelien-marando/'
					}
				]
			},
			{
				_strapiId: 1552,
				name: 'David Ruiz Villanueva',
				slug: 'david-ruiz-villanueva',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'UX Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3893',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/davidruizv1/'
					}
				]
			},
			{
				_strapiId: 1633,
				name: 'Gustavo Fouce',
				slug: 'gustavo-fouce',
				position: 'Player',
				company: 'Kalamburu',
				tagline: 'Advertising, events and performing arts',
				bio: null,
				website: null,
				avatarId: 'file_3951',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gustavo-f-7b3931154/'
					}
				]
			},
			{
				_strapiId: 1596,
				name: 'Fabio Fabbrucci',
				slug: 'fabio-fabbrucci',
				position: 'Player',
				company: 'Fazland',
				tagline: 'Product Manager',
				bio: null,
				website: null,
				avatarId: 'file_4344',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fabiofabbrucci/'
					}
				]
			},
			{
				_strapiId: 1393,
				name: 'Alban Gicquel',
				slug: 'alban-gicquel',
				position: 'Player',
				company: 'Thomson Reuters',
				tagline: 'Development Team Lead',
				bio: null,
				website: null,
				avatarId: 'file_4305',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alban-gicquel-546a1932/'
					}
				]
			},
			{
				_strapiId: 1518,
				name: 'Christine Scherer',
				slug: 'christine-scherer',
				position: 'Player',
				company: 'Société Générale Bank & Trust',
				tagline: 'Business Analyst Manager, PMP Certified',
				bio: null,
				website: null,
				avatarId: 'file_3704',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christine-scherer-a8132846/'
					}
				]
			},
			{
				_strapiId: 1613,
				name: 'Fred Madrigal',
				slug: 'fred-madrigal',
				position: 'Player',
				company: 'sINNplify',
				tagline: 'Organizational Coach',
				bio: null,
				website: null,
				avatarId: 'file_3898',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fredmadrigal/'
					}
				]
			},
			{
				_strapiId: 1487,
				name: 'Carlos Reis',
				slug: 'carlos-reis',
				position: 'Player',
				company: null,
				tagline: 'Project Manager (PMI, LeSS Certified, Scrum Master, Product Owner)',
				bio: null,
				website: null,
				avatarId: 'file_3703',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/carlosgreis/'
					}
				]
			},
			{
				_strapiId: 1572,
				name: 'Eduardo Ribeiro',
				slug: 'eduardo-ribeiro',
				position: 'Player',
				company: 'Enterprise Agile Coach',
				tagline: 'Critical Software',
				bio: null,
				website: null,
				avatarId: 'file_4351',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joseeduardoribeiro'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/edu_f_ribeiro'
					},
					{
						type: 'Website',
						url: 'https://beyondleanagile.com/'
					}
				]
			},
			{
				_strapiId: 1645,
				name: 'Huib Schoots',
				slug: 'huib-schoots',
				position: 'Player',
				company: 'Océ - A Canon Company',
				tagline:
					'Software Tester – Agile Enthusiast - Trainer – Coach – Writer – Speaker – Leader – Storyteller - Human',
				bio: null,
				website: null,
				avatarId: 'file_3882',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/huibschoots'
					}
				]
			},
			{
				_strapiId: 1663,
				name: 'Jérémy Rousset',
				slug: 'jeremy-rousset',
				position: 'Player',
				company: 'Pictet Technologies',
				tagline: 'Agile Coach',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-JeremyRousset.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_3869',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/roussetjeremy/'
					}
				]
			},
			{
				_strapiId: 2099,
				name: 'Alessandra Rivolta ',
				slug: 'alessandra-rivolta',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4899',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alessandrarivolta/'
					}
				]
			},
			{
				_strapiId: 1419,
				name: 'Andrea Coven',
				slug: 'andrea-coven',
				position: 'Player',
				company: '7Pixel',
				tagline: 'Content Specialist',
				bio: null,
				website: null,
				avatarId: 'file_3618',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andrea-coven-7ba430159/'
					}
				]
			},
			{
				_strapiId: 1531,
				name: 'Cristiano Nordio',
				slug: 'cristiano-nordio',
				position: 'Player',
				company: "ain't a GAME*",
				tagline:
					'I help entrepreneurs, managers and companies to build business models and marketing strategies',
				bio: null,
				website: null,
				avatarId: 'file_3603',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/cristiano-nordio'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/cristianonordio'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/cristianonordio'
					}
				]
			},
			{
				_strapiId: 1542,
				name: 'Dani Diéguez',
				slug: 'dani-dieguez',
				position: 'Player',
				company: 'Apoio.coop',
				tagline: 'Falicitator & Mentor',
				bio: null,
				website: null,
				avatarId: 'file_4295',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/danidieguez/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/danidieguez'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/danidieguez'
					}
				]
			},
			{
				_strapiId: 1479,
				name: 'Bettina Niessen',
				slug: 'bettina-niessen',
				position: 'Player',
				company: 'Cegeka',
				tagline: 'Back Office/Sales Assistant',
				bio: null,
				website: null,
				avatarId: 'file_3711',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bettina-niessen-869b65169/'
					}
				]
			},
			{
				_strapiId: 1429,
				name: 'Andrew Hall',
				slug: 'andrew-hall',
				position: 'Player',
				company: 'Foyer',
				tagline: 'Chief Quality Officer ',
				bio: null,
				website: null,
				avatarId: 'file_3625',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andrewhall1012/'
					}
				]
			},
			{
				_strapiId: 1470,
				name: 'Beatrice Behnisch',
				slug: 'beatrice-behnisch',
				position: 'Player',
				company: 'Software AG',
				tagline: 'User Experience Designer',
				bio: null,
				website: null,
				avatarId: 'file_3706',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/beabe'
					}
				]
			},
			{
				_strapiId: 1497,
				name: 'Celia René-Corail',
				slug: 'celia-rene-corail',
				position: 'Player',
				company: null,
				tagline: 'Enthusiastic spark, I love People, Ideas, and exploring new ways to connect both',
				bio: null,
				website: null,
				avatarId: 'file_4287',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/celiarenecorail/'
					}
				]
			},
			{
				_strapiId: 1509,
				name: 'Christine Mattl',
				slug: 'christine-mattl',
				position: 'Player',
				company: null,
				tagline: 'Wirtschafts mediation, Konflikt coaching, Team supervision, Haltung & Struktur',
				bio: null,
				website: null,
				avatarId: 'file_3699',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christine-mattl-65b94446/'
					}
				]
			},
			{
				_strapiId: 1604,
				name: 'Fernando Pérez Guajardo',
				slug: 'fernando-perez-guajardo',
				position: 'Player',
				company: 'Thinktero',
				tagline: 'Visual thinker, strategist, graphic facilitator/recordist, sketchnoter',
				bio: null,
				website: null,
				avatarId: 'file_3857',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/perezguajardofernando/'
					}
				]
			},
			{
				_strapiId: 2084,
				name: 'Paolo Santoro',
				slug: 'paolo-santoro',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4852',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paolasantoro/'
					}
				]
			},
			{
				_strapiId: 1562,
				name: 'Diego Virgolini',
				slug: 'diego-virgolini',
				position: 'Player',
				company: 'Particular',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4365',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dvirgolini/'
					}
				]
			},
			{
				_strapiId: 1623,
				name: 'Geetha Ramachandran',
				slug: 'geetha-ramachandran',
				position: 'Player',
				company: 'Telegraph Media Group',
				tagline: 'Scrum Master | Agile Transformation Coach ',
				bio: null,
				website: null,
				avatarId: 'file_3765',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/geetharamachandran/'
					}
				]
			},
			{
				_strapiId: 1535,
				name: 'Dabraj Sing',
				slug: 'dabraj-sing',
				position: 'Player',
				company: 'AirAsia',
				tagline:
					'Regional Head of Transformation | Change Management | Business Turnaround | Agile and Lean Practitioner',
				bio: null,
				website: null,
				avatarId: 'file_3685',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dabraj/'
					}
				]
			},
			{
				_strapiId: 1564,
				name: 'Dirk Radtke',
				slug: 'dirk-radtke',
				position: 'Player',
				company: 'Otto',
				tagline: 'Head of Organizational Development and Agile Project Management',
				bio: null,
				website: null,
				avatarId: 'file_3921',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dirkradtke/'
					}
				]
			},
			{
				_strapiId: 1439,
				name: 'Angela Kea',
				slug: 'angela-kea',
				position: 'Player',
				company: 'Deutsche Welle',
				tagline: 'Freelance reporter and social media editor',
				bio: null,
				website: null,
				avatarId: 'file_3606',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ankea/'
					}
				]
			},
			{
				_strapiId: 1575,
				name: 'Edwin Trujillo Betancur',
				slug: 'edwin-trujillo-betancur',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3888',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/edwin-trujillob/'
					}
				]
			},
			{
				_strapiId: 2134,
				name: 'Raquel Carrera',
				slug: 'raquel-carrera',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5049',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/raquelcarrera/'
					}
				]
			},
			{
				_strapiId: 1468,
				name: 'Béatrix Charlier',
				slug: 'beatrix-charlier',
				position: 'Player',
				company: "P'OP",
				tagline:
					"Founder & CEO at P'OP - Talent testing-Recruitment-Team Coaching-Career Transition Support-Animatrice APM-Club Schuman",
				bio: null,
				website: null,
				avatarId: 'file_3709',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/b%C3%A9atrix-charlier-3ba1962a/'
					}
				]
			},
			{
				_strapiId: 1722,
				name: 'Koen van der Pasch',
				slug: 'koen-van-der-pasch',
				position: 'Mentor',
				company: 'Agilista.me',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3849',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/agilista/'
					}
				]
			},
			{
				_strapiId: 1703,
				name: 'Jyothi Kavukuntla',
				slug: 'jyothi-kavukuntla',
				position: 'Player',
				company: 'Medidata Solutions',
				tagline: 'Senior Lead, SQA',
				bio: null,
				website: null,
				avatarId: 'file_3964',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jyothi-kavukuntla-06a55211/'
					}
				]
			},
			{
				_strapiId: 2100,
				name: 'María Mira ',
				slug: 'maria-mira',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4900',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/miramaria/'
					}
				]
			},
			{
				_strapiId: 1485,
				name: 'Brahim Bendali',
				slug: 'brahim-bendali',
				position: 'Player',
				company: 'Société Générale Securities Services',
				tagline: 'Agile enthusiast',
				bio: null,
				website: null,
				avatarId: 'file_3670',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/brahim-bendali-515a3658/'
					}
				]
			},
			{
				_strapiId: 1493,
				name: 'Catherine Boudlal',
				slug: 'catherine-boudlal',
				position: 'Player',
				company: 'PALO IT',
				tagline: 'Fircosoft - Live Service - Coach',
				bio: null,
				website: null,
				avatarId: 'file_3688',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/catherine-boudlal-35b0a511/'
					}
				]
			},
			{
				_strapiId: 1797,
				name: 'Martin Appelt',
				slug: 'martin-appelt',
				position: 'Player',
				company: 'Hamburg Wasser',
				tagline: 'SAP Anwendungsberater',
				bio: null,
				website: null,
				avatarId: 'file_4364',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martin-appelt-aa4501a9'
					}
				]
			},
			{
				_strapiId: 1837,
				name: 'Mila P',
				slug: 'mila-p',
				position: 'Player',
				company: 'Freelance',
				tagline: 'Agile Coach | Nomad Coach',
				bio: null,
				website: null,
				avatarId: 'file_4140',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/milamo'
					}
				]
			},
			{
				_strapiId: 1861,
				name: 'Nuno Mateiro',
				slug: 'nuno-mateiro',
				position: 'Mentor',
				company: null,
				tagline: 'Freelance trainer and facilitator',
				bio: null,
				website: null,
				avatarId: 'file_5083',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nmateiro/'
					}
				]
			},
			{
				_strapiId: 1539,
				name: 'Daniele Cursi',
				slug: 'daniele-cursi',
				position: 'Player',
				company: 'YOOX NET-A-PORTER',
				tagline: 'Learning & Development Advisor',
				bio: null,
				website: null,
				avatarId: 'file_4286',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/daniele-cursi-09b18b64/'
					}
				]
			},
			{
				_strapiId: 1522,
				name: 'Christophe Keromen',
				slug: 'christophe-keromen',
				position: 'Player',
				company: 'Goood!',
				tagline: 'Agile Transformation Coach',
				bio: null,
				website: null,
				avatarId: 'file_3700',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christophekeromen/'
					}
				]
			},
			{
				_strapiId: 1855,
				name: 'Nicolas Denis',
				slug: 'nicolas-denis',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3940',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nicolas-denis-8a26219/'
					}
				]
			},
			{
				_strapiId: 1768,
				name: 'Marcela Fernandez',
				slug: 'marcela-fernandez',
				position: 'Player',
				company: 'Liderarte',
				tagline: 'Coach Organizacional',
				bio: null,
				website: null,
				avatarId: 'file_4355',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcela-fernandez-liderarte/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/marcela.fernandez.9883739'
					}
				]
			},
			{
				_strapiId: 1759,
				name: 'Lydia Grawunder',
				slug: 'lydia-grawunder',
				position: 'Player',
				company: 'TUI',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3783',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lydiagrawunder/'
					}
				]
			},
			{
				_strapiId: 1871,
				name: 'Oswald De Riemaecker',
				slug: 'oswald-de-riemaecker',
				position: 'Player',
				company: 'continuous.lu',
				tagline: 'CEO/Co-Founder Continuous S.A.',
				bio: null,
				website: null,
				avatarId: 'file_3748',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/oswaldderiemaecker/'
					}
				]
			},
			{
				_strapiId: 1827,
				name: 'Michelle Kabel',
				slug: 'michelle-kabel',
				position: 'Player',
				company: 'Vacanceselect',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4359',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michelle-kabel-91aa50b0/'
					}
				]
			},
			{
				_strapiId: 1817,
				name: 'Maxine Razavi',
				slug: 'maxine-razavi',
				position: 'Player',
				company: null,
				tagline: 'Agile Team Coach',
				bio: null,
				website: null,
				avatarId: 'file_3915',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/maxinerazavi/'
					}
				]
			},
			{
				_strapiId: 1546,
				name: 'David McCreary',
				slug: 'david-mccreary',
				position: 'Player',
				company: 'ExaMotive',
				tagline: 'Head of Product Development',
				bio: null,
				website: null,
				avatarId: 'file_3827',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dvdmmc/'
					}
				]
			},
			{
				_strapiId: 1847,
				name: 'Nadja Petranovskaja',
				slug: 'nadja-petranovskaja',
				position: 'Player',
				company: 'Nadja Petranovskaja',
				tagline: 'More Shiny Eyes',
				bio: null,
				website: null,
				avatarId: 'file_3881',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/petranovskaja/'
					}
				]
			},
			{
				_strapiId: 1881,
				name: 'Paula Pescar',
				slug: 'paula-pescar',
				position: 'Player',
				company: 'Department for International Trade London',
				tagline: 'Delivery Manager',
				bio: null,
				website: null,
				avatarId: 'file_4370',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paulapescar/'
					}
				]
			},
			{
				_strapiId: 1467,
				name: 'Barbara Graf-Detert',
				slug: 'barbara-graf-detert',
				position: 'Player',
				company: 'CULTURE IN COMPANY ROCKS',
				tagline: 'Co-Owner',
				bio: null,
				website: null,
				avatarId: 'file_4129',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/barbara-graf-detert-a8ba381/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Barbara_GrafDetert/portfolio'
					}
				]
			},
			{
				_strapiId: 1732,
				name: 'Laurent Vincent',
				slug: 'laurent-vincent',
				position: 'Player',
				company: 'Swipe',
				tagline: 'UX specialist',
				bio: null,
				website: null,
				avatarId: 'file_3719',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/laurentvcnt/'
					}
				]
			},
			{
				_strapiId: 1600,
				name: 'Fernando Bartolo Espiritu',
				slug: 'fernando-bartolo-espiritu',
				position: 'Player',
				company: 'Palo IT',
				tagline:
					'M.S. in Computer Science - Tech Lead - Senior Software Engineer Java - Scrum Master (Certified)',
				bio: null,
				website: null,
				avatarId: 'file_4343',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fernando-bartolo-espiritu-9355b985/'
					}
				]
			},
			{
				_strapiId: 1752,
				name: 'Lynn Runnels-Moss',
				slug: 'lynn-runnels-moss',
				position: 'Player',
				company: 'Green Leopard Ltd',
				tagline: 'I focus on Agile coaching and Agile project management',
				bio: null,
				website: null,
				avatarId: 'file_3945',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lynn-runnels-moss-9485767/'
					}
				]
			},
			{
				_strapiId: 1612,
				name: 'Frank Amankwah',
				slug: 'frank-amankwah',
				position: 'Player',
				company: 'Gamesys',
				tagline: 'Software Development Manager and Agile Leadership Evangelist',
				bio: null,
				website: null,
				avatarId: 'file_3965',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/agilefrankie/'
					}
				]
			},
			{
				_strapiId: 1787,
				name: 'Maria Steinberg',
				slug: 'maria-steinberg',
				position: 'Player',
				company: 'www.du-bist-grossartig.de',
				tagline: 'Agiles Mgmt & Partner Mgmt & Effectuation & Lebenslanges Lernen',
				bio: null,
				website: null,
				avatarId: 'file_4137',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/maria-steinberg/'
					}
				]
			},
			{
				_strapiId: 1513,
				name: 'Christian den Hartigh',
				slug: 'christian-den-hartigh',
				position: 'Player',
				company: 'pedagogieagile.com',
				tagline:
					'Artisan pédagogue constructiviste autotélique - Complexité - Agilité - Biomimétisme',
				bio: null,
				website: null,
				avatarId: 'file_3705',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/cdenhartigh'
					}
				]
			},
			{
				_strapiId: 1642,
				name: 'Hugo Melim',
				slug: 'hugo-melim',
				position: 'Player',
				company: 'Mercedes-Benz.io',
				tagline: 'Scrum Master | CSPO® | CSM®',
				bio: null,
				website: null,
				avatarId: 'file_3865',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hugomelim/'
					}
				]
			},
			{
				_strapiId: 1593,
				name: 'Eugenio Bancaro',
				slug: 'eugenio-bancaro',
				position: 'Player',
				company: 'Graffiti 2000',
				tagline: 'Frontend Developer',
				bio: null,
				website: null,
				avatarId: 'file_3846',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/eugenio-bancaro-a63a8b49/'
					}
				]
			},
			{
				_strapiId: 1890,
				name: 'Per Molsing Beining',
				slug: 'per-molsing-beining',
				position: 'Player',
				company: null,
				tagline: 'Senior Consultant Brand Strategy',
				bio: null,
				website: null,
				avatarId: 'file_4092',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/permolsingbeining/'
					}
				]
			},
			{
				_strapiId: 1652,
				name: 'Jan-Sake Kruis',
				slug: 'jan-sake-kruis',
				position: 'Player',
				company: null,
				tagline: 'Common Sense Management consultant and trainer',
				bio: null,
				website: null,
				avatarId: 'file_3996',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jansakekruis/'
					}
				]
			},
			{
				_strapiId: 1668,
				name: 'Javier Carbajal Cruz',
				slug: 'javier-carbajal-cruz',
				position: 'Player',
				company: 'EPAM Systems',
				tagline: 'Cloud Architect/DevOps',
				bio: null,
				website: null,
				avatarId: 'file_4437',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/j-carbajal/'
					}
				]
			},
			{
				_strapiId: 1686,
				name: 'Jorg van Gaal',
				slug: 'jorg-van-gaal',
				position: 'Player',
				company: 'Sam Media',
				tagline: 'General Manager',
				bio: null,
				website: null,
				avatarId: 'file_3771',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jorgvangaal/'
					}
				]
			},
			{
				_strapiId: 1678,
				name: 'João Proença',
				slug: 'joao-proenca',
				position: 'Player',
				company: 'OutSystems',
				tagline: 'Quality Owner / Lead Software Engineer',
				bio: null,
				website: null,
				avatarId: 'file_3981',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jo%C3%A3o-proen%C3%A7a-ba864357/'
					}
				]
			},
			{
				_strapiId: 1447,
				name: 'Arnaud Lamouller',
				slug: 'arnaud-lamouller',
				position: 'Player',
				company: null,
				tagline: 'Agile Coach/Trainer, Executive Coach',
				bio: null,
				website: null,
				avatarId: 'file_3649',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/arnaudlamouller/'
					}
				]
			},
			{
				_strapiId: 1576,
				name: 'Elisa Zingano',
				slug: 'elisa-zingano',
				position: 'Player',
				company: null,
				tagline: 'HR Specialist',
				bio: null,
				website: null,
				avatarId: 'file_3785',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elisa-zingano-a0448a29/'
					}
				]
			},
			{
				_strapiId: 1477,
				name: 'Beatriz Hierro Alonso',
				slug: 'beatriz-hierro-alonso',
				position: 'Player',
				company: 'INECO',
				tagline: 'Gestor de proyectos / Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3677',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/beatrizhierroalonso/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Bettalonso'
					}
				]
			},
			{
				_strapiId: 1418,
				name: 'Ana Diaz Gonzalez',
				slug: 'ana-diaz-gonzalez',
				position: 'Player',
				company: 'BBVA',
				tagline: 'Technico',
				bio: null,
				website: null,
				avatarId: 'file_4328',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ana-d%C3%ADaz-gonzalez-48b764b7/'
					}
				]
			},
			{
				_strapiId: 1742,
				name: 'Lisa Francis-Jennings',
				slug: 'lisa-francis-jennings',
				position: 'Player',
				company: 'StratAffect S.A.',
				tagline: 'OCM Consulting/Team Building/Kitchen Table Conversations',
				bio: null,
				website: null,
				avatarId: 'file_3739',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/LFranJenn'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/francisjenningslisa'
					}
				]
			},
			{
				_strapiId: 1566,
				name: 'Edward Konings',
				slug: 'edward-konings',
				position: 'Player',
				company: 'Freelance',
				tagline: 'Gamestorm Trooper ✯ Scrummaster ✯ Coach ✯ LEGO® SERIOUS PLAY® ✯ Gamification',
				bio: null,
				website: null,
				avatarId: 'file_3738',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/edwardkonings/'
					}
				]
			},
			{
				_strapiId: 1807,
				name: 'Massimo Azzolini',
				slug: 'massimo-azzolini',
				position: 'Player',
				company: 'giallocobalto.it',
				tagline: 'Entrepreneur / Service Designer / Agile PO',
				bio: null,
				website: null,
				avatarId: 'file_3941',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/massimoazzolini/'
					}
				]
			},
			{
				_strapiId: 1622,
				name: 'Gioel Assecondi',
				slug: 'gioel-assecondi',
				position: 'Player',
				company: 'BTicino S.p.A.',
				tagline: 'Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_3851',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gioel-assecondi-76042725/'
					}
				]
			},
			{
				_strapiId: 2085,
				name: 'Akzen Ozer',
				slug: 'akzen-ozer',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4853',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/aksenozer/'
					}
				]
			},
			{
				_strapiId: 1658,
				name: 'Javier Castillo',
				slug: 'javier-castillo',
				position: 'Player',
				company: 'Codurance',
				tagline: 'Engagement Manager',
				bio: null,
				website: null,
				avatarId: 'file_4012',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hjaviercs/'
					}
				]
			},
			{
				_strapiId: 1530,
				name: 'Corinna Drißner',
				slug: 'corinna-drissner',
				position: 'Player',
				company: 'Beaufort 8 GmbH',
				tagline: 'Beraterin, Strategin, Coach, Kinesiologin',
				bio: null,
				website: null,
				avatarId: 'file_3917',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Corinna_Drissner'
					}
				]
			},
			{
				_strapiId: 2135,
				name: 'Mónica Domingo',
				slug: 'monica-domingo',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5050',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/monicadomingo/'
					}
				]
			},
			{
				_strapiId: 1431,
				name: 'Andreea Visanoiu',
				slug: 'andreea-visanoiu',
				position: 'Player',
				company: 'Seek Asia',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3994',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andreeavisanoiu/'
					}
				]
			},
			{
				_strapiId: 2052,
				name: 'Jeng Lamug',
				slug: 'jeng-lamug',
				position: 'Host',
				company: 'AXA',
				tagline: 'Technology Management and Strategy Executive',
				bio: null,
				website: null,
				avatarId: 'file_3790',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jenglamug/'
					}
				]
			},
			{
				_strapiId: 1896,
				name: 'Peter Stevens',
				slug: 'peter-stevens',
				position: 'Host',
				company: 'Saat Network GmbH',
				tagline: 'Mr. Do More That Matters',
				bio: null,
				website: null,
				avatarId: 'file_4367',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/peterstev'
					}
				]
			},
			{
				_strapiId: 1805,
				name: 'Martin Jarcik',
				slug: 'martin-jarcik',
				position: 'Player',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4042',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martinjarcik/'
					}
				]
			},
			{
				_strapiId: 1607,
				name: 'Fernando Nobre Lopes',
				slug: 'fernando-nobre-lopes',
				position: 'Player',
				company: null,
				tagline:
					'Country Sales Manager | Business Unit Director | Commercial Director | Business Development Manager',
				bio: null,
				website: null,
				avatarId: 'file_3745',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fernandonobrelopes/'
					}
				]
			},
			{
				_strapiId: 1776,
				name: 'Marco Zbinden',
				slug: 'marco-zbinden',
				position: 'Player',
				company: null,
				tagline: 'Standup Consultant, business theater developer, communication coach, actor',
				bio: null,
				website: null,
				avatarId: 'file_3769',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marco-zbinden-7848409/'
					}
				]
			},
			{
				_strapiId: 1565,
				name: 'Elena Moreno Ramirez',
				slug: 'elena-moreno-ramirez',
				position: 'Player',
				company: 'Autónomo',
				tagline: 'Agile project manager | Agile coach | Scrum Master & Product Owner',
				bio: null,
				website: null,
				avatarId: 'file_3958',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elenamorenoramirez/'
					}
				]
			},
			{
				_strapiId: 1846,
				name: 'Miriana Precup',
				slug: 'miriana-precup',
				position: 'Player',
				company: 'Nokia',
				tagline: 'University Relations Intern',
				bio: null,
				website: null,
				avatarId: 'file_3828',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/miriana-precup-a91709aa/'
					}
				]
			},
			{
				_strapiId: 2136,
				name: 'María Cruz Muerza ',
				slug: 'maria-cruz-muerza',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5051',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mariacruzmuerza/'
					}
				]
			},
			{
				_strapiId: 1854,
				name: 'Nathalie Aladenise',
				slug: 'nathalie-aladenise',
				position: 'Player',
				company: 'Nokia',
				tagline: 'Innovation Officier',
				bio: null,
				website: null,
				avatarId: 'file_3826',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nathalie-aladenise-29bb4961/'
					}
				]
			},
			{
				_strapiId: 1617,
				name: 'Gabriele Denk',
				slug: 'gabriele-denk',
				position: 'Player',
				company: 'T-Systems International GmbH',
				tagline: 'Global Head of Digital Working Practices',
				bio: null,
				website: null,
				avatarId: 'file_4342',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gabriele-denk-5b378612b'
					}
				]
			},
			{
				_strapiId: 1442,
				name: 'Anne Betting',
				slug: 'anne-betting',
				position: 'Player',
				company: 'Kiron Open Higher Education',
				tagline: 'Tech aficionado & digital humanist creating winning experiences and products',
				bio: null,
				website: null,
				avatarId: 'file_3654',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anne-betting'
					}
				]
			},
			{
				_strapiId: 1711,
				name: 'Karen Fugle',
				slug: 'karen-fugle',
				position: 'Player',
				company: 'SleepingGiant Consulting',
				tagline:
					'Executive Coaching for Architects, Designers | Certified facilitator of LEGO® SERIOUS PLAY® method and materials',
				bio: null,
				website: null,
				avatarId: 'file_3850',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/karenfugle/'
					}
				]
			},
			{
				_strapiId: 1648,
				name: 'Inge Gorgon',
				slug: 'inge-gorgon',
				position: 'Player',
				company: null,
				tagline: 'Agile Coach at Swift at Cegeka',
				bio: null,
				website: null,
				avatarId: 'file_3887',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/inge-gorgon-9189658/'
					}
				]
			},
			{
				_strapiId: 1482,
				name: 'Boris Sclauzero',
				slug: 'boris-sclauzero',
				position: 'Player',
				company: 'XPeppers',
				tagline: 'Software Developer',
				bio: null,
				website: null,
				avatarId: 'file_3682',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/borissclauzero/'
					}
				]
			},
			{
				_strapiId: 1929,
				name: 'Roberto Buono',
				slug: 'roberto-buono',
				position: 'Player',
				company: 'Belron® International',
				tagline: 'Digital Solutions Innovation Manager',
				bio: null,
				website: null,
				avatarId: 'file_4085',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/roberto-buono-31964721/'
					}
				]
			},
			{
				_strapiId: 1523,
				name: 'Corrado De Sanctis',
				slug: 'corrado-de-sanctis',
				position: 'Player',
				company: null,
				tagline:
					'Agile coach, Certified Scrum Master, Certified Atlassian Professional, Certified SAFe 4.5 Program Consultat',
				bio: null,
				website: null,
				avatarId: 'file_3707',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cdesanctis/'
					}
				]
			},
			{
				_strapiId: 1382,
				name: 'Abisola Fatokun',
				slug: 'abisola-fatokun',
				position: 'Player',
				company: 'Dahlia Systems',
				tagline: 'Founder/CEO',
				bio: null,
				website: null,
				avatarId: 'file_4308',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/abisola/'
					}
				]
			},
			{
				_strapiId: 1462,
				name: 'Aymen Zehra',
				slug: 'aymen-zehra',
				position: 'Player',
				company: 'SAITOW AG',
				tagline: 'Lead Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4285',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/aymenzehra/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Aymen_Zehra'
					}
				]
			},
			{
				_strapiId: 1831,
				name: 'Michael Rösch',
				slug: 'michael-rosch',
				position: 'Player',
				company: 'wirDesign',
				tagline: 'Vorstand, Berater, Partner',
				bio: null,
				website: null,
				avatarId: 'file_4145',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/null'
					}
				]
			},
			{
				_strapiId: 1638,
				name: 'Helen King',
				slug: 'helen-king',
				position: 'Player',
				company: 'BMJ',
				tagline: 'Digital Strategy Lead',
				bio: null,
				website: null,
				avatarId: 'file_3892',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/helenkinguk/'
					}
				]
			},
			{
				_strapiId: 1731,
				name: 'Lesley Price',
				slug: 'lesley-price',
				position: 'Player',
				company: 'RBC Investor & Treasury Services',
				tagline: 'Director, IT Business Analysts',
				bio: null,
				website: null,
				avatarId: 'file_3820',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lesley-price-1b899432/'
					}
				]
			},
			{
				_strapiId: 1587,
				name: 'Emna Ayadi',
				slug: 'emna-ayadi',
				position: 'Player',
				company: 'Primatec',
				tagline: 'QA Automation Engineer',
				bio: null,
				website: null,
				avatarId: 'file_3804',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/emnaayadi/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/emna__ayadi'
					}
				]
			},
			{
				_strapiId: 1452,
				name: 'Atilim Siegmund',
				slug: 'atilim-siegmund',
				position: 'Player',
				company: 'msg systems ag',
				tagline: 'Agile Coach, Lead Business Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3977',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/atilim-siegmund-bbb685134/'
					}
				]
			},
			{
				_strapiId: 1876,
				name: 'Paco Prieto',
				slug: 'paco-prieto',
				position: 'Player',
				company: 'Talento Corporativo',
				tagline:
					'Consultor Creatividad e Innovación. Facilitador LEGO®Serious Play®. Cultura de la Innovación. Coach Deportivo',
				bio: null,
				website: null,
				avatarId: 'file_3938',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pacoprieto/'
					}
				]
			},
			{
				_strapiId: 1512,
				name: 'Christian Sextl',
				slug: 'christian-sextl',
				position: 'Player',
				company: 'Co-Inspiration.com & SayHi.to',
				tagline: 'Founder | Knowmad | Facilitator | Psychologist | Consultant | Idea Generator',
				bio: null,
				website: null,
				avatarId: 'file_3663',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christiansextl/'
					}
				]
			},
			{
				_strapiId: 1534,
				name: 'Cristina Pop',
				slug: 'cristina-pop',
				position: 'Player',
				company: null,
				tagline: 'Psychologist helping persons and communities heal and grow',
				bio: null,
				website: null,
				avatarId: 'file_3695',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cristinaalexandrapop/'
					}
				]
			},
			{
				_strapiId: 1492,
				name: 'Cécile Roquain',
				slug: 'cecile-roquain',
				position: 'Player',
				company: 'Saint Charles Sixth Form College',
				tagline: 'Head of Biology',
				bio: null,
				website: null,
				avatarId: 'file_3691',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cecile-roquain-318978124/'
					}
				]
			},
			{
				_strapiId: 1595,
				name: 'Fabio Armani',
				slug: 'fabio-armani',
				position: 'Player',
				company: 'Open Ware',
				tagline: 'CEO & Owner OpenWare',
				bio: null,
				website: null,
				avatarId: 'file_3930',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/armani/'
					}
				]
			},
			{
				_strapiId: 1660,
				name: 'Jane Schek',
				slug: 'jane-schek',
				position: 'Player',
				company: null,
				tagline: 'Bilingual Qualitative Researcher and Design Thinking Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3766',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/janeschek/'
					}
				]
			},
			{
				_strapiId: 1796,
				name: 'Markus Mattern',
				slug: 'markus-mattern',
				position: 'Player',
				company: 'GMS Global Media Services GmbH',
				tagline: 'Teamlead in Services',
				bio: null,
				website: null,
				avatarId: 'file_3944',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/markusmattern'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Markus_Mattern3/cv'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Mattes1682'
					}
				]
			},
			{
				_strapiId: 1885,
				name: 'Paul Wijntjes',
				slug: 'paul-wijntjes',
				position: 'Player',
				company: 'Agile Advies',
				tagline: 'Agile Coach, Trainer & Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3718',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paulwijntjes'
					}
				]
			},
			{
				_strapiId: 1544,
				name: 'Danièle Picard',
				slug: 'daniele-picard',
				position: 'Player',
				company: 'PYXIS Management',
				tagline: 'Business Coach - Trainer - Team Coach',
				bio: null,
				website: null,
				avatarId: 'file_3727',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/danielepicard/'
					}
				]
			},
			{
				_strapiId: 1670,
				name: 'Jean-Michel Didier',
				slug: 'jean-michel-didier',
				position: 'Player',
				company: 'Société Générale Bank & Trust',
				tagline: "Leader of the Feature Team 'Corporate Systems'",
				bio: null,
				website: null,
				avatarId: 'file_3924',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jean-michel-didier-29156528/'
					}
				]
			},
			{
				_strapiId: 1555,
				name: 'Davide Bellettini',
				slug: 'davide-bellettini',
				position: 'Player',
				company: 'Onebip',
				tagline: 'Agile Developer',
				bio: null,
				website: null,
				avatarId: 'file_4136',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/davidebellettini/'
					}
				]
			},
			{
				_strapiId: 1741,
				name: 'Ljubow Chaikevitch',
				slug: 'ljubow-chaikevitch',
				position: 'Player',
				company: null,
				tagline:
					'Coach, Trainer & Facilitator for Innovation Development and HR-Marketing with Design Thinking and LEGO® SERIOUS PLAY®',
				bio: null,
				website: null,
				avatarId: 'file_3843',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ljubowchaikevitch'
					}
				]
			},
			{
				_strapiId: 1911,
				name: 'Rachel Martz',
				slug: 'rachel-martz',
				position: 'Player',
				company: null,
				tagline: 'Certified Business Agility Coach',
				bio: null,
				website: null,
				avatarId: 'file_4033',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rachel-martz-a3a3083/'
					}
				]
			},
			{
				_strapiId: 1721,
				name: 'Kent Beck',
				slug: 'kent-beck',
				position: 'Player',
				company: null,
				tagline: 'Programmer, Co-author of the Agile Manifesto',
				bio: null,
				website: null,
				avatarId: 'file_3979',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kentbeck/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/KentBeck'
					},
					{
						type: 'Wikipedia',
						url: 'https://www.wikipedia.org/Kent_Beck'
					}
				]
			},
			{
				_strapiId: 1756,
				name: 'Maéva Pitou',
				slug: 'maeva-pitou',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Marketing Officer',
				bio: null,
				website: null,
				avatarId: 'file_3840',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ma%C3%A9va-pitou-34305211b/'
					}
				]
			},
			{
				_strapiId: 1919,
				name: 'Riccardo Porrini',
				slug: 'riccardo-porrini',
				position: 'Player',
				company: 'SMALLFISH.COM',
				tagline: 'Software Developer ',
				bio: null,
				website: null,
				avatarId: 'file_4380',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/riccardoporrini/'
					}
				]
			},
			{
				_strapiId: 1866,
				name: 'Nina Neef',
				slug: 'nina-neef',
				position: 'Player',
				company: 'ACT e.V.',
				tagline: 'Management of the Resonanz Lab',
				bio: null,
				website: null,
				avatarId: 'file_3855',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nina-neef-8313043/'
					}
				]
			},
			{
				_strapiId: 1766,
				name: 'Marcelo Lujan',
				slug: 'marcelo-lujan',
				position: 'Player',
				company: 'Tata Consultancy Services',
				tagline: 'Agilist ',
				bio: null,
				website: null,
				avatarId: 'file_4347',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lujanmarcelo/'
					}
				]
			},
			{
				_strapiId: 1786,
				name: 'Marisa Olmedo',
				slug: 'marisa-olmedo',
				position: 'Player',
				company: null,
				tagline: 'Scrum Máster',
				bio: null,
				website: null,
				avatarId: 'file_3812',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marisa-olmedo-91a44237/'
					}
				]
			},
			{
				_strapiId: 1573,
				name: 'Elisângela Preto',
				slug: 'elisangela-preto',
				position: 'Player',
				company: 'Natixis',
				tagline: 'Project & Program Manager | Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4003',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elisangelapreto/'
					}
				]
			},
			{
				_strapiId: 2086,
				name: 'Manuela Rebocho',
				slug: 'manuela-rebocho',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4855',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/manuela-castimrebocho/'
					}
				]
			},
			{
				_strapiId: 1387,
				name: 'Adrian Cireasa',
				slug: 'adrian-cireasa',
				position: 'Player',
				company: 'Nokia',
				tagline: 'Software Developer',
				bio: null,
				website: null,
				avatarId: 'file_4307',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adrian-cireasa-13139893/'
					}
				]
			},
			{
				_strapiId: 1453,
				name: 'Arie van Bennekum',
				slug: 'arie-van-bennekum',
				position: 'Player',
				company: 'Wemanity',
				tagline: 'Thoughtleader, Co-author of the Agile Manifesto',
				bio: null,
				website: null,
				avatarId: 'file_3636',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ariev3/'
					}
				]
			},
			{
				_strapiId: 1517,
				name: 'Christoph Moser',
				slug: 'christoph-moser',
				position: 'Mentor',
				company: 'vividbreeze.com',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3702',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:chris@vividbreeze.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/vividbreeze'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christophmoser'
					}
				]
			},
			{
				_strapiId: 1727,
				name: 'Lena Johanna Schmitt',
				slug: 'lena-johanna-schmitt',
				position: 'Player',
				company: 'DaWanda GmbH',
				tagline: 'People & Innovations',
				bio: null,
				website: null,
				avatarId: 'file_3764',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lena-johanna-schmitt-30a29849/'
					}
				]
			},
			{
				_strapiId: 1761,
				name: 'Maike Thuy',
				slug: 'maike-thuy',
				position: 'Player',
				company: 'oose innovative Informatik eG',
				tagline: 'Veranstaltungsfachwirtin',
				bio: null,
				website: null,
				avatarId: 'file_4147',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Maike_Thuy'
					}
				]
			},
			{
				_strapiId: 1672,
				name: 'Jef Cozza',
				slug: 'jef-cozza',
				position: 'Player',
				company: 'InglesParaFrikis.com',
				tagline: 'Business development consultant, writer, sci-fi geek. Consultor, escritor, friki',
				bio: null,
				website: null,
				avatarId: 'file_4433',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jef-cozza-917315/'
					}
				]
			},
			{
				_strapiId: 1834,
				name: 'Michiel de Jong',
				slug: 'michiel-de-jong',
				position: 'Player',
				company: 'TU Delft',
				tagline: 'Open Science & Open Education Expert',
				bio: null,
				website: null,
				avatarId: 'file_3874',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/michieldejo'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/woardgamegeeks'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michieljong1986/'
					}
				]
			},
			{
				_strapiId: 1580,
				name: 'Elia Miraldi',
				slug: 'elia-miraldi',
				position: 'Player',
				company: '7Pixel',
				tagline: 'Lead Link di Cerchia / Chief Information Officer',
				bio: null,
				website: null,
				avatarId: 'file_3805',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elia-miraldi-3b4974124/'
					}
				]
			},
			{
				_strapiId: 1823,
				name: 'Michael Litschauer',
				slug: 'michael-litschauer',
				position: 'Player',
				company: null,
				tagline: 'Scrum Master & Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3911',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michael-litschauer-79382689/'
					}
				]
			},
			{
				_strapiId: 1850,
				name: 'Natalia Gredina',
				slug: 'natalia-gredina',
				position: 'Player',
				company: null,
				tagline: 'UX Expert',
				bio: null,
				website: null,
				avatarId: 'file_4100',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1815,
				name: 'Matthias Kuchem',
				slug: 'matthias-kuchem',
				position: 'Player',
				company: 'TU-Dortmund',
				tagline: 'Leadership, Agilität und Informatik. Gastdozent IT-Management TU-Dortmund',
				bio: null,
				website: null,
				avatarId: 'file_3733',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/matthiaskuchem'
					}
				]
			},
			{
				_strapiId: 1463,
				name: 'Barbara Didier',
				slug: 'barbara-didier',
				position: 'Player',
				company: 'Barbara Didier Consulting',
				tagline: 'Independant Consultant in Strategy & Business Development',
				bio: null,
				website: null,
				avatarId: 'file_3646',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/barbaradidier/'
					}
				]
			},
			{
				_strapiId: 1860,
				name: 'Netteke Koster',
				slug: 'netteke-koster',
				position: 'Player',
				company: 'Morgens',
				tagline: 'Consultant / basisarts (M.D.)',
				bio: null,
				website: null,
				avatarId: 'file_4090',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nettekekoster/'
					}
				]
			},
			{
				_strapiId: 1737,
				name: 'Linda van der Pasch',
				slug: 'linda-van-der-pasch',
				position: 'Player',
				company: '_Senzer',
				tagline: 'Senior Application Manager',
				bio: null,
				website: null,
				avatarId: 'file_3722',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/julynell/'
					}
				]
			},
			{
				_strapiId: 1770,
				name: 'Marco Santonocito',
				slug: 'marco-santonocito',
				position: 'Player',
				company: 'Graffiti 2000',
				tagline: 'Digital Product Designer',
				bio: null,
				website: null,
				avatarId: 'file_4027',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcosantonocito/'
					}
				]
			},
			{
				_strapiId: 2102,
				name: 'Pablo Osorio ',
				slug: 'pablo-osorio',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4903',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pabloosoriodieguez'
					}
				]
			},
			{
				_strapiId: 1483,
				name: 'Borja Santos Bergasa',
				slug: 'borja-santos-bergasa',
				position: 'Player',
				company: 'Bultaco Motors',
				tagline: 'Civil Engineer',
				bio: null,
				website: null,
				avatarId: 'file_3710',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/borja-santos-bergasa-7bb8463b/'
					}
				]
			},
			{
				_strapiId: 1445,
				name: 'Annachiara Bigatello',
				slug: 'annachiara-bigatello',
				position: 'Player',
				company: 'Business Integration Partners',
				tagline: 'Manager',
				bio: null,
				website: null,
				avatarId: 'file_3656',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/annachiara-bigatello-23b0295/'
					}
				]
			},
			{
				_strapiId: 1840,
				name: 'Mohamad Mahdi Afshar Azad',
				slug: 'mohamad-mahdi-afshar-azad',
				position: 'Player',
				company: 'Admiral Group of Companies',
				tagline: 'HR Director',
				bio: null,
				website: null,
				avatarId: 'file_3899',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mohamad-mahdi-afshar-azad-a8943895/'
					}
				]
			},
			{
				_strapiId: 1812,
				name: 'Mathieu Dietrich',
				slug: 'mathieu-dietrich',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4348',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mathieu-dietrich-62baa7145/'
					}
				]
			},
			{
				_strapiId: 1684,
				name: 'Jordan Solt',
				slug: 'jordan-solt',
				position: 'Player',
				company: 'Swipe',
				tagline: 'Docteur en ergonomie UX designer',
				bio: null,
				website: null,
				avatarId: 'file_3768',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jordan-solt-b20a30b2/'
					}
				]
			},
			{
				_strapiId: 1504,
				name: 'Christian Baumann',
				slug: 'christian-baumann',
				position: 'Player',
				company: 'Finologee',
				tagline: 'Senior Software Tester',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-ChristianBaumann.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_3674',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christianbaumann/'
					}
				]
			},
			{
				_strapiId: 2204,
				name: 'Paru Madhavan',
				slug: 'paru-madhavan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5159',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1716,
				name: 'Kathrin Bischoff',
				slug: 'kathrin-bischoff',
				position: 'Host',
				company: 'Werner-von-Siemens Centre for Industry and Science e.V.',
				tagline:
					'Executive Consultant: FutureTech, Strategy, Innovation || Werner-von-Siemens Centre for Industry and Science e.V. || Initiator of https://www.linkedin.com/redir/phishing-page?url=VRExplorer%2espace',
				bio: null,
				website: null,
				avatarId: 'file_4445',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kathrin-bischoff-6b45b8154'
					}
				]
			},
			{
				_strapiId: 1870,
				name: 'Orlando Rangel Compeán',
				slug: 'orlando-rangel-compean',
				position: 'Player',
				company: 'Integra IT',
				tagline: 'SMC™, SPOC™, SDC™, SCT™, SAMC™, Certified Facilitator LEGO® SERIOUS PLAY®',
				bio: null,
				website: null,
				avatarId: 'file_3918',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/orangelc/'
					}
				]
			},
			{
				_strapiId: 1610,
				name: 'Fodil Benrabia',
				slug: 'fodil-benrabia',
				position: 'Player',
				company: null,
				tagline: 'Coach',
				bio: null,
				website: null,
				avatarId: 'file_3931',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fodil-benrabia-5290bb93/'
					}
				]
			},
			{
				_strapiId: 1696,
				name: 'Juan Castillo',
				slug: 'juan-castillo',
				position: 'Player',
				company: 'Impraise',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3902',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/juancastillo79/'
					}
				]
			},
			{
				_strapiId: 1558,
				name: 'Diana Kirkova',
				slug: 'diana-kirkova',
				position: 'Player',
				company: 'Komfo',
				tagline: 'IT Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_3736',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dianakirkova/'
					}
				]
			},
			{
				_strapiId: 1650,
				name: 'Ingo Hampe',
				slug: 'ingo-hampe',
				position: 'Player',
				company: 'NTT Germany AG & Co. KG',
				tagline:
					'passionate people photographer | casual cycling enthusiast | employee experience practitioner | ProSci change practitioner | citizen developer | Microsoft 365',
				bio: null,
				website: null,
				avatarId: 'file_3861',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ingo-hampe-photography'
					}
				]
			},
			{
				_strapiId: 1749,
				name: 'Lydia Knörle',
				slug: 'lydia-knorle',
				position: 'Player',
				company: 'Haufe-Lexware',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3803',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lydia-kn%C3%B6rle-8982a0108/'
					}
				]
			},
			{
				_strapiId: 2087,
				name: 'Bartek Kreblewski',
				slug: 'bartek-kreblewski',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4856',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bartek-kreblewski/'
					}
				]
			},
			{
				_strapiId: 1806,
				name: 'Massimo Lavelli',
				slug: 'massimo-lavelli',
				position: 'Player',
				company: 'Legrand Bticino',
				tagline: 'Computer Science Engineer, Software Architect',
				bio: null,
				website: null,
				avatarId: 'file_3772',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mlavelli/'
					}
				]
			},
			{
				_strapiId: 1661,
				name: 'Iulia Tabacu',
				slug: 'iulia-tabacu',
				position: 'Player',
				company: '3Pillar Global',
				tagline: 'iOS Software Developer',
				bio: null,
				website: null,
				avatarId: 'file_3759',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/iuliatabacu/'
					}
				]
			},
			{
				_strapiId: 1540,
				name: 'Daniel Keizer',
				slug: 'daniel-keizer',
				position: 'Player',
				company: 'Betty Blocks',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4025',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/danielkeizer/'
					}
				]
			},
			{
				_strapiId: 1639,
				name: 'Hannes Kropf',
				slug: 'hannes-kropf',
				position: 'Player',
				company: 'ITERGO',
				tagline: 'Agiler Coach, PMP, PMI-ACP',
				bio: null,
				website: null,
				avatarId: 'file_3870',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hanneskropf/'
					}
				]
			},
			{
				_strapiId: 1515,
				name: 'Christophe Bodelet',
				slug: 'christophe-bodelet',
				position: 'Player',
				company: 'Kodama',
				tagline: 'Professional coach',
				bio: null,
				website: null,
				avatarId: 'file_3697',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christophe-bodelet-2921765/'
					}
				]
			},
			{
				_strapiId: 1590,
				name: 'Estelle Vantillard',
				slug: 'estelle-vantillard',
				position: 'Player',
				company: 'PALO IT',
				tagline: 'Product Owner, Coach Agile & Formateur',
				bio: null,
				website: null,
				avatarId: 'file_3995',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/estelle-vantillard/'
					}
				]
			},
			{
				_strapiId: 1550,
				name: 'Daniella Cunha Teichert',
				slug: 'daniella-cunha-teichert',
				position: 'Player',
				company: 'Bosch',
				tagline:
					'Supporting individuals and groups to unleash their full potential | WOL-Mentor | Coaching | facilitation | VUCArockers',
				bio: null,
				website: null,
				avatarId: 'file_4291',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/daniella-cunha-teichert/'
					}
				]
			},
			{
				_strapiId: 1707,
				name: 'Karen Gallagher',
				slug: 'karen-gallagher',
				position: 'Player',
				company: 'Terra Incognita Engagement',
				tagline: 'Terra Incognita Leadership & Employee Engagement Consultancy',
				bio: null,
				website: null,
				avatarId: 'file_3875',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gallagherkaren/'
					}
				]
			},
			{
				_strapiId: 1709,
				name: 'Julio Cesar Ramirez Gonzalez',
				slug: 'julio-cesar-ramirez-gonzalez',
				position: 'Host',
				company: 'Grupo Salinas',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3847',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/julio-cesar-ramirez-gonzalez-733163153/'
					}
				]
			},
			{
				_strapiId: 1654,
				name: 'Ionut Grecu',
				slug: 'ionut-grecu',
				position: 'Host',
				company: 'Hindawi Publishing',
				tagline: 'Agile Coach | Professional Kanban Trainer',
				bio: null,
				website: null,
				avatarId: 'file_3974',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ionutgrecu1/'
					}
				]
			},
			{
				_strapiId: 1909,
				name: 'Razvan Ogircin',
				slug: 'razvan-ogircin',
				position: 'Player',
				company: 'AIMS International Romania',
				tagline: 'Managing Partner',
				bio: null,
				website: null,
				avatarId: 'file_4039',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/razvan-ogircin-590469/'
					}
				]
			},
			{
				_strapiId: 1719,
				name: 'Kirsten Hagedorn',
				slug: 'kirsten-hagedorn',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3947',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/khgdrn'
					}
				]
			},
			{
				_strapiId: 1506,
				name: 'Chris Selby',
				slug: 'chris-selby',
				position: 'Host',
				company: 'Large UK Government Department',
				tagline: 'ScrumMaster / Delivery Lead',
				bio: null,
				website: null,
				avatarId: 'file_3664',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/chrisselby/'
					}
				]
			},
			{
				_strapiId: 1754,
				name: 'Manolo Lopez',
				slug: 'manolo-lopez',
				position: 'Mentor',
				company: 'TECNOFOR',
				tagline: 'Agile coach and trainer',
				bio: null,
				website: null,
				avatarId: 'file_4079',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/manololopez/'
					}
				]
			},
			{
				_strapiId: 1858,
				name: 'Nick Poursadigh',
				slug: 'nick-poursadigh',
				position: 'Player',
				company: 'Press Association',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3914',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/npoursadigh/'
					}
				]
			},
			{
				_strapiId: 1872,
				name: 'Paolo Balzarotti',
				slug: 'paolo-balzarotti',
				position: 'Player',
				company: 'Allianz',
				tagline: 'I hate job titles',
				bio: null,
				website: null,
				avatarId: 'file_4021',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/balza/'
					}
				]
			},
			{
				_strapiId: 1451,
				name: 'Arev Hakobyan',
				slug: 'arev-hakobyan',
				position: 'Host',
				company: 'Angus Systems',
				tagline: 'Agile Coach PSM, PSPO, ICP-ACC, ICP-ATF',
				bio: null,
				website: null,
				avatarId: 'file_3651',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/arevhakobyan/'
					}
				]
			},
			{
				_strapiId: 1461,
				name: 'Barbara Maas',
				slug: 'barbara-maas',
				position: 'Player',
				company: 'mh:n Medien / NOZ Medien',
				tagline: 'No mud, no lotus',
				bio: null,
				website: null,
				avatarId: 'file_3643',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/barbara-maas-70b5636b/'
					}
				]
			},
			{
				_strapiId: 1745,
				name: 'Lucija Pilić',
				slug: 'lucija-pilic',
				position: 'Host',
				company: 'Gamechuck',
				tagline: 'Public Relations / Business Development / Level Design',
				bio: null,
				website: null,
				avatarId: 'file_3798',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lucijapilic'
					}
				]
			},
			{
				_strapiId: 1848,
				name: 'Nathalia Morales Jaramillo',
				slug: 'nathalia-morales-jaramillo',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'UI/UX Designer',
				bio: null,
				website: null,
				avatarId: 'file_3884',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nathaliamoralesjaramillo'
					}
				]
			},
			{
				_strapiId: 1491,
				name: 'Carolin Goydke',
				slug: 'carolin-goydke',
				position: 'Player',
				company: 'Caritas Hamburg',
				tagline: 'Leitung Freiwilligen Zentrum Hamburg',
				bio: null,
				website: null,
				avatarId: 'file_4125',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Carolin_Goydke/cv'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/CaGoy'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/carolin.goydke.7'
					}
				]
			},
			{
				_strapiId: 1892,
				name: 'Peter Quinlan',
				slug: 'peter-quinlan',
				position: 'Player',
				company: null,
				tagline: 'IT Service Management Trainer',
				bio: null,
				website: null,
				avatarId: 'file_4054',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/peter-quinlan-b06a802'
					}
				]
			},
			{
				_strapiId: 1543,
				name: 'Daniela Piatkowski',
				slug: 'daniela-piatkowski',
				position: 'Player',
				company: null,
				tagline: 'ScrumMaster',
				bio: null,
				website: null,
				avatarId: 'file_3969',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1496,
				name: 'Cátia Fernandes',
				slug: 'catia-fernandes',
				position: 'Player',
				company: 'Philips',
				tagline: 'BCD Communications Specialist',
				bio: null,
				website: null,
				avatarId: 'file_3659',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/catiacrista/'
					}
				]
			},
			{
				_strapiId: 2205,
				name: 'Diane Sexton',
				slug: 'diane-sexton',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1902,
				name: 'Piero Tagliapietra',
				slug: 'piero-tagliapietra',
				position: 'Player',
				company: 'CUOA Business School',
				tagline: '(Digital) Strategist, Agile PM (CSM®, ACP-PMI®)',
				bio: null,
				website: null,
				avatarId: 'file_4371',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pierotaglia/'
					}
				]
			},
			{
				_strapiId: 1764,
				name: 'Manuela Guderian',
				slug: 'manuela-guderian',
				position: 'Player',
				company: 'Berliner Verkehrsbetriebe (BVG)',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3729',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/manuela-guderian-201515158/'
					}
				]
			},
			{
				_strapiId: 1533,
				name: 'Dan Vidoni',
				slug: 'dan-vidoni',
				position: 'Player',
				company: 'IBM',
				tagline: 'Java Software Developer',
				bio: null,
				website: null,
				avatarId: 'file_3859',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dan-vidoni-06632086/'
					}
				]
			},
			{
				_strapiId: 1828,
				name: 'Michael Tarnowski',
				slug: 'michael-tarnowski',
				position: 'Player',
				company: 'Plays-in-Business',
				tagline: 'Agile coach | Process Improvement Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3926',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:Michael.Tarnowski@gmx.de'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/M_Tarnowski'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michaeltarnowski'
					}
				]
			},
			{
				_strapiId: 1481,
				name: 'Bruno Cacho',
				slug: 'bruno-cacho',
				position: 'Player',
				company: 'Talkdesk',
				tagline: 'Principal Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3692',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/brunocacho/'
					}
				]
			},
			{
				_strapiId: 1917,
				name: 'Ricardo Mestre',
				slug: 'ricardo-mestre',
				position: 'Player',
				company: null,
				tagline: 'Co-Founder, Managing Partner, Agile Coach, Trainer, Consultant and Speaker',
				bio: null,
				website: null,
				avatarId: 'file_4377',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ricardomestre/'
					}
				]
			},
			{
				_strapiId: 1774,
				name: 'Marcos Pacheco',
				slug: 'marcos-pacheco',
				position: 'Player',
				company: 'Trivago',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3715',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcos-pacheco-a7760728/'
					}
				]
			},
			{
				_strapiId: 1524,
				name: 'Claudio Bertolotto',
				slug: 'claudio-bertolotto',
				position: 'Player',
				company: 'Reply',
				tagline: 'Consulente informatico',
				bio: null,
				website: null,
				avatarId: 'file_3683',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/claudio-bertolotto-6a64a524/'
					}
				]
			},
			{
				_strapiId: 1735,
				name: 'Liesbeth Molenaar',
				slug: 'liesbeth-molenaar',
				position: 'Player',
				company: null,
				tagline: 'youth, culture, art, cultural exchange, projectmanagement, global education',
				bio: null,
				website: null,
				avatarId: 'file_4127',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/liesbeth-molenaar-484a1918/'
					}
				]
			},
			{
				_strapiId: 1441,
				name: 'Anna Hellwing',
				slug: 'anna-hellwing',
				position: 'Player',
				company: 'Just Eat Takeaway.com',
				tagline: 'Scrum Master w Just Eat Takeaway.com',
				bio: null,
				website: null,
				avatarId: 'file_3613',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anna-hellwing-8106016a'
					}
				]
			},
			{
				_strapiId: 1553,
				name: 'Delfina Coelho',
				slug: 'delfina-coelho',
				position: 'Player',
				company: 'InnovSky',
				tagline: 'CEO',
				bio: null,
				website: null,
				avatarId: 'file_3896',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/delfinacoelho/'
					}
				]
			},
			{
				_strapiId: 1726,
				name: 'Laura Hermann',
				slug: 'laura-hermann',
				position: 'Host',
				company: 'BrearingPoint',
				tagline: 'Agile Coach * Scrum Master * Consultant * Facilitator * Systemic Coach',
				bio: null,
				website: null,
				avatarId: 'file_3835',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/laura-hermann-9402b730/'
					}
				]
			},
			{
				_strapiId: 1583,
				name: 'Ellen Johannsen',
				slug: 'ellen-johannsen',
				position: 'Player',
				company: 'Leadership Campus GbR',
				tagline: 'Unternehmensberaterin',
				bio: null,
				website: null,
				avatarId: 'file_3952',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ellen-johannsen-34403310/'
					}
				]
			},
			{
				_strapiId: 1591,
				name: 'Eva Sánchez',
				slug: 'eva-sanchez',
				position: 'Player',
				company: 'Lider-haz-GO',
				tagline:
					'Coach Ejecutiva Senior por AECOP/EMCC Coach PCC por ICF Global, Consultora de Formación y Desarrollo Free Lance',
				bio: null,
				website: null,
				avatarId: 'file_4004',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mevasanchez/'
					}
				]
			},
			{
				_strapiId: 1601,
				name: 'Federico Giolli',
				slug: 'federico-giolli',
				position: 'Player',
				company: null,
				tagline:
					'Project Manager | People Manager | Facilitatore LEGO® SERIOUS PLAY® | Extended DISC®',
				bio: null,
				website: null,
				avatarId: 'file_3987',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/giolli/'
					}
				]
			},
			{
				_strapiId: 1644,
				name: 'Holger Tewis',
				slug: 'holger-tewis',
				position: 'Player',
				company: 'Goodgame Studios',
				tagline: 'Consultant for Agile Transitions',
				bio: null,
				website: null,
				avatarId: 'file_3834',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/htewis/'
					}
				]
			},
			{
				_strapiId: 1664,
				name: 'Jean-Michaël Lopez',
				slug: 'jean-michael-lopez',
				position: 'Player',
				company: 'Intech',
				tagline: 'Senior Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4009',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jean-micha%C3%ABl-lopez-04715419/'
					}
				]
			},
			{
				_strapiId: 1700,
				name: 'Jürgen Rambo',
				slug: 'jurgen-rambo',
				position: 'Host',
				company: 'Mercedes Benz AG',
				tagline: 'coachING',
				bio: null,
				website: null,
				avatarId: 'file_3723',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/juergenrambo'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Juergen_Rambo2'
					}
				]
			},
			{
				_strapiId: 1681,
				name: 'João Gonçalo Peixe Ribeiro',
				slug: 'joao-goncalo-peixe-ribeiro',
				position: 'Player',
				company: 'Bosch',
				tagline: 'Software Engineer',
				bio: null,
				website: null,
				avatarId: 'file_3777',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joao-peixe-ribeiro/'
					}
				]
			},
			{
				_strapiId: 1808,
				name: 'Matthias Hochschulz',
				slug: 'matthias-hochschulz',
				position: 'Player',
				company: 'Agile Coach Matthias',
				tagline: 'Experienced Information Technology Specialist',
				bio: null,
				website: null,
				avatarId: 'file_4360',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/matthias-hochschulz-026b615/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Matthias_Hochschulz/cv'
					}
				]
			},
			{
				_strapiId: 2103,
				name: 'Sara de Pablos',
				slug: 'sara-de-pablos',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4904',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/saradepablos/'
					}
				]
			},
			{
				_strapiId: 1671,
				name: 'Jesús Hijas',
				slug: 'jesus-hijas',
				position: 'Player',
				company: 'essence',
				tagline: 'Founder',
				bio: null,
				website: null,
				avatarId: 'file_3873',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jesushijas/'
					}
				]
			},
			{
				_strapiId: 1784,
				name: 'Maria Friedrich',
				slug: 'maria-friedrich',
				position: 'Player',
				company: 'Belron® International',
				tagline: 'Agile Business Analyst',
				bio: null,
				website: null,
				avatarId: 'file_3841',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mariafriedrich/'
					}
				]
			},
			{
				_strapiId: 1788,
				name: 'Marta Gomáriz González',
				slug: 'marta-gomariz-gonzalez',
				position: 'Player',
				company: 'Making Ideas Business',
				tagline: 'Transformación Digital | Analytics | #MIBer',
				bio: null,
				website: null,
				avatarId: 'file_3810',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martagomariz/'
					}
				]
			},
			{
				_strapiId: 1798,
				name: 'Markus Reinhold',
				slug: 'markus-reinhold',
				position: 'Player',
				company: 'CoCOO GmbH',
				tagline: 'CEO at CoCOO GmbH',
				bio: null,
				website: null,
				avatarId: 'file_3908',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/markus-reinhold-7743912'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/COCOO_MR'
					}
				]
			},
			{
				_strapiId: 1619,
				name: 'Gábor Kőhalmi',
				slug: 'gabor-kohalmi',
				position: 'Player',
				company: null,
				tagline: 'Senior strategic designer',
				bio: null,
				website: null,
				avatarId: 'file_4341',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gbrkhlm/'
					}
				]
			},
			{
				_strapiId: 1838,
				name: 'Mimma Lucchelli',
				slug: 'mimma-lucchelli',
				position: 'Player',
				company: 'Subito.it',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3912',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mimma-lucchelli-95a8b945'
					}
				]
			},
			{
				_strapiId: 1433,
				name: 'Angela Sanger',
				slug: 'angela-sanger',
				position: 'Player',
				company: 'Connexxo',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3619',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/angelasanger/'
					}
				]
			},
			{
				_strapiId: 1690,
				name: 'José Soutelinho',
				slug: 'jose-soutelinho',
				position: 'Player',
				company: 'Despertutor',
				tagline: 'CWholeO',
				bio: null,
				website: null,
				avatarId: 'file_3984',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jsoutelinho/'
					}
				]
			},
			{
				_strapiId: 1507,
				name: 'Christian Weinert',
				slug: 'christian-weinert',
				position: 'Player',
				company: 'holisticon AG',
				tagline: 'Chief Networking Officer Holisticon',
				bio: null,
				website: null,
				avatarId: 'file_3679',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/christian-weinert-4a953b142/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Christian_Weinert2/cv'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/robotroxx'
					}
				]
			},
			{
				_strapiId: 1560,
				name: 'Diego De Biasio',
				slug: 'diego-de-biasio',
				position: 'Founder',
				company: 'Technoport',
				tagline:
					'Support in the creation and development of technology-based and innovative companies in Luxembourg',
				bio: null,
				website: null,
				avatarId: 'file_3993',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:diego.debiasio@technoport.lu'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/tortorman'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/diegodebiasio'
					}
				]
			},
			{
				_strapiId: 2206,
				name: 'Greg Lourey',
				slug: 'greg-lourey',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1714,
				name: 'Karla Vázquez',
				slug: 'karla-vazquez',
				position: 'Host',
				company: null,
				tagline: 'PMP, Thinker y Diseñadora de experiencias de aprendizaje',
				bio: null,
				website: null,
				avatarId: 'file_3985',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/karla-v%C3%A1zquez-experiencias-aprendizaje/'
					}
				]
			},
			{
				_strapiId: 1941,
				name: 'Salim Gomri',
				slug: 'salim-gomri',
				position: 'Player',
				company: null,
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4388',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/salimgomri/'
					}
				]
			},
			{
				_strapiId: 1877,
				name: 'Paolo Sammicheli',
				slug: 'paolo-sammicheli',
				position: 'Player',
				company: 'Klimsoft',
				tagline: 'Agile and Business Coach',
				bio: null,
				website: null,
				avatarId: 'file_4002',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paolosammicheli/'
					}
				]
			},
			{
				_strapiId: 1836,
				name: 'Miikka Niemelä',
				slug: 'miikka-niemela',
				position: 'Player',
				company: 'Siili Solutions',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3740',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/miikkaniemela'
					}
				]
			},
			{
				_strapiId: 1908,
				name: 'Ralph van Roosmalen',
				slug: 'ralph-van-roosmalen',
				position: 'Host',
				company: 'Happy Melly',
				tagline:
					'Innovative Agile Enabler | Management 3.0 Facilitator | Management Coach | Agile Coach | Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4034',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ralphvanroosmalen/'
					}
				]
			},
			{
				_strapiId: 1511,
				name: 'Christiane Sauer',
				slug: 'christiane-sauer',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3676',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:reception-krefeld@aoe.com'
					}
				]
			},
			{
				_strapiId: 1816,
				name: 'Maximilian Bauer',
				slug: 'maximilian-bauer',
				position: 'Player',
				company: 'Space Ape Games',
				tagline: 'Community & Customer Service Lead',
				bio: null,
				website: null,
				avatarId: 'file_3786',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/maximilianbauer/'
					}
				]
			},
			{
				_strapiId: 1887,
				name: 'Paula Rayén Snyder',
				slug: 'paula-rayen-snyder',
				position: 'Player',
				company: 'Zalando SE',
				tagline: 'Producer',
				bio: null,
				website: null,
				avatarId: 'file_4037',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/Paula-snyder'
					}
				]
			},
			{
				_strapiId: 1950,
				name: 'Saskia Winter',
				slug: 'saskia-winter',
				position: 'Player',
				company: 'MARKENCOACH Brand Planning',
				tagline: 'Brand Planning | Brandes Stories',
				bio: null,
				website: null,
				avatarId: 'file_4067',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/saskia-winter-7123a596/'
					}
				]
			},
			{
				_strapiId: 1673,
				name: 'Joana Pais Afonso',
				slug: 'joana-pais-afonso',
				position: 'Player',
				company: null,
				tagline:
					'Marketing Manager | Communications | Digital | Employer Branding | Talent Brand | Consultant | Speaker',
				bio: null,
				website: null,
				avatarId: 'file_4029',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joanapais/'
					}
				]
			},
			{
				_strapiId: 1845,
				name: 'Mònica Valcárcel',
				slug: 'monica-valcarcel',
				position: 'Host',
				company: 'HIPS [Human Inspiring People]',
				tagline: 'CEO & Partner',
				bio: null,
				website: null,
				avatarId: 'file_4128',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/monicavalcarcel/'
					}
				]
			},
			{
				_strapiId: 1541,
				name: 'Daniela D. Rinaldi',
				slug: 'daniela-d-rinaldi',
				position: 'Player',
				company: "Laboratorio d'impresa 3.0",
				tagline: 'Consulente in project management e innovazione di processi aziendali',
				bio: null,
				website: null,
				avatarId: 'file_3959',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/daniela-d-rinaldi-22506425/'
					}
				]
			},
			{
				_strapiId: 1446,
				name: 'Arjen de Vries',
				slug: 'arjen-de-vries',
				position: 'Player',
				company: 'PublishOne',
				tagline: 'PublishOne',
				bio: null,
				website: null,
				avatarId: 'file_3642',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/arjen-de-vries-748aa0110/'
					}
				]
			},
			{
				_strapiId: 1802,
				name: 'Martin Gordon',
				slug: 'martin-gordon',
				position: 'Player',
				company: 'MundoNovus',
				tagline: 'Innovation and Strategy Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3937',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/NovusMundo'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/NovusMundo'
					}
				]
			},
			{
				_strapiId: 1521,
				name: 'Cihangir Deniz Ozdemir',
				slug: 'cihangir-deniz-ozdemir',
				position: 'Player',
				company: 'Ozco Gerenciamento e Treinamento Ltda',
				tagline: 'Agile Management Trainer | Coach | Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3678',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cihangirdenizozdemir/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Agilefiction'
					}
				]
			},
			{
				_strapiId: 1436,
				name: 'Annabelle Buffart',
				slug: 'annabelle-buffart',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Communication Manager',
				bio: null,
				website: null,
				avatarId: 'file_3655',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/annabuffart/'
					}
				]
			},
			{
				_strapiId: 1775,
				name: 'Marcos Fargas',
				slug: 'marcos-fargas',
				position: 'Host',
				company: 'Parclick, the Leading European Online Parking Network',
				tagline: 'CMO',
				bio: null,
				website: null,
				avatarId: 'file_3953',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mfargas/'
					}
				]
			},
			{
				_strapiId: 1563,
				name: 'Diana Grilo Silva',
				slug: 'diana-grilo-silva',
				position: 'Player',
				company: 'Critical TechWorks',
				tagline: 'Head of Interactions',
				bio: null,
				website: null,
				avatarId: 'file_3728',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dianagrilosilva/'
					}
				]
			},
			{
				_strapiId: 1724,
				name: 'Laurence Lebreton',
				slug: 'laurence-lebreton',
				position: 'Player',
				company: 'Société Générale',
				tagline: "Responsable de l'animation de la Filière RH",
				bio: null,
				website: null,
				avatarId: 'file_3754',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/laurence-lebreton-96894613/'
					}
				]
			},
			{
				_strapiId: 1629,
				name: 'Greg Mulligan',
				slug: 'greg-mulligan',
				position: 'Player',
				company: 'Nuix',
				tagline: 'Head of Agility',
				bio: null,
				website: null,
				avatarId: 'file_3863',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/greg-mulligan-4183902/'
					}
				]
			},
			{
				_strapiId: 1704,
				name: 'Karin Vrij',
				slug: 'karin-vrij',
				position: 'Player',
				company: 'InContext Consultancy Group',
				tagline: 'Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4007',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/karinvrij'
					}
				]
			},
			{
				_strapiId: 1822,
				name: 'Michael Eckolt',
				slug: 'michael-eckolt',
				position: 'Player',
				company: null,
				tagline: 'Trainer, Coach & Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_3932',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/eckolt/'
					}
				]
			},
			{
				_strapiId: 1795,
				name: 'Markus Boerstling',
				slug: 'markus-boerstling',
				position: 'Player',
				company: 'Otto Group',
				tagline: 'If your only tool is a hammer, then every problem looks like a nail',
				bio: null,
				website: null,
				avatarId: 'file_3928',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/markus-boerstling-196ba992/'
					}
				]
			},
			{
				_strapiId: 1475,
				name: 'Bernard Muller',
				slug: 'bernard-muller',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Project Director',
				bio: null,
				website: null,
				avatarId: 'file_3672',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bernard-muller-68bb8137'
					}
				]
			},
			{
				_strapiId: 1597,
				name: 'Fadi Achkar',
				slug: 'fadi-achkar',
				position: 'Player',
				company: 'Belron® International',
				tagline: 'Technology Best Practice Manager',
				bio: null,
				website: null,
				avatarId: 'file_3753',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fadi-achkar-87899837/'
					}
				]
			},
			{
				_strapiId: 1486,
				name: 'Brando Preda',
				slug: 'brando-preda',
				position: 'Player',
				company: '7pixel',
				tagline: 'Software Developer',
				bio: null,
				website: null,
				avatarId: 'file_3799',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/brandopreda'
					}
				]
			},
			{
				_strapiId: 1455,
				name: 'Astrid Varchmin',
				slug: 'astrid-varchmin',
				position: 'Player',
				company: 'Varchmin Consulting',
				tagline: 'Success Needs Diversity',
				bio: null,
				website: null,
				avatarId: 'file_3645',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/astrid-varchmin-88042946/'
					}
				]
			},
			{
				_strapiId: 1551,
				name: 'Davide Aldrovandi',
				slug: 'davide-aldrovandi',
				position: 'Player',
				company: 'Zuhlke Engineering Ltd',
				tagline: 'Agile Project Manager, Agile Coach, Scrum Master, CSM®',
				bio: null,
				website: null,
				avatarId: 'file_3891',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/daldrovandi/'
					}
				]
			},
			{
				_strapiId: 1574,
				name: 'Eduardo Toledo Inclán',
				slug: 'eduardo-toledo-inclan',
				position: 'Player',
				company: '9Brains.es',
				tagline: 'Founder, Agile Coach & Trainer',
				bio: null,
				website: null,
				avatarId: 'file_3838',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/eduardotoledoinclan/'
					}
				]
			},
			{
				_strapiId: 1734,
				name: 'Leokadija Sviridova',
				slug: 'leokadija-sviridova',
				position: 'Player',
				company: 'kreuzwerker',
				tagline:
					'Senior Agile Coach & Consultant @ kreuzwerker | Innovation & Creativity Trainer | Sustainability coordinator',
				bio: null,
				website: null,
				avatarId: 'file_3742',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/leokadija-sviridova-1995a0'
					}
				]
			},
			{
				_strapiId: 1532,
				name: 'Cristina Nogueira da Fonseca',
				slug: 'cristina-nogueira-da-fonseca',
				position: 'Player',
				company: 'Corporate Happiness',
				tagline: 'Happyologist',
				bio: null,
				website: null,
				avatarId: 'file_3954',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cristinanogueiradafonseca/'
					}
				]
			},
			{
				_strapiId: 1867,
				name: 'Nicole Herzlieb',
				slug: 'nicole-herzlieb',
				position: 'Player',
				company: null,
				tagline: 'Master of Science',
				bio: null,
				website: null,
				avatarId: 'file_4149',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Nicole_Herzlieb'
					}
				]
			},
			{
				_strapiId: 1615,
				name: 'Franziska Kerwien',
				slug: 'franziska-kerwien',
				position: 'Player',
				company: 'Chimera Entertainment',
				tagline: 'Game Designer',
				bio: null,
				website: null,
				avatarId: 'file_3749',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/franziskakerwien/'
					}
				]
			},
			{
				_strapiId: 1649,
				name: 'Imma Arjona Lara',
				slug: 'imma-arjona-lara',
				position: 'Player',
				company:
					'Attittud Recursos Humanos Headhunting Selección Coaching Formación Desarrollo Outplacement',
				tagline: 'Socia Directora',
				bio: null,
				website: null,
				avatarId: 'file_4345',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/imma-arjona-lara-22524813/'
					}
				]
			},
			{
				_strapiId: 1744,
				name: 'Lucio Bresciani',
				slug: 'lucio-bresciani',
				position: 'Player',
				company: 'LENDSUM',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3839',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/luciobresciani/'
					}
				]
			},
			{
				_strapiId: 1901,
				name: 'Phil Bowker',
				slug: 'phil-bowker',
				position: 'Player',
				company: 'Royal Bank of Canada',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4032',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/philbowker/'
					}
				]
			},
			{
				_strapiId: 1605,
				name: 'Florian Ferbach',
				slug: 'florian-ferbach',
				position: 'Player',
				company: 'Marmelab',
				tagline: 'Web maker',
				bio: null,
				website: null,
				avatarId: 'file_3817',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/florian-ferbach-8b35841a/'
					}
				]
			},
			{
				_strapiId: 1765,
				name: 'Marcello Vercesi',
				slug: 'marcello-vercesi',
				position: 'Player',
				company: 'Business Integration Partners',
				tagline: 'Service Design & Design Thinking Lead | Management Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3927',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcellovercesi/'
					}
				]
			},
			{
				_strapiId: 1695,
				name: 'Juan Manuel Gómez Ramos',
				slug: 'juan-manuel-gomez-ramos',
				position: 'Player',
				company: 'Enciende la Luz',
				tagline: 'Freelance Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3792',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/juanmagomezr/'
					}
				]
			},
			{
				_strapiId: 1683,
				name: 'Jörg Leupold',
				slug: 'jorg-leupold',
				position: 'Player',
				company: 'Carmeq GmbH',
				tagline: 'Senior Digital Transformation Manager',
				bio: null,
				website: null,
				avatarId: 'file_3920',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joergleupold/'
					}
				]
			},
			{
				_strapiId: 1528,
				name: 'Cristina Borghi',
				slug: 'cristina-borghi',
				position: 'Player',
				company: 'YOOX NET-A-PORTER',
				tagline: 'HR Professional',
				bio: null,
				website: null,
				avatarId: 'file_4289',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cristina-borghi-249762a/'
					}
				]
			},
			{
				_strapiId: 1715,
				name: 'Kasper Myram',
				slug: 'kasper-myram',
				position: 'Player',
				company: 'X-Team',
				tagline: 'Tech Lead / PM',
				bio: null,
				website: null,
				avatarId: 'file_3957',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/myram'
					}
				]
			},
			{
				_strapiId: 1547,
				name: 'Daniel Bartschat',
				slug: 'daniel-bartschat',
				position: 'Player',
				company: 'Playful Insights GbR',
				tagline: 'Geschäftsführer',
				bio: null,
				website: null,
				avatarId: 'file_4000',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/daniel-bartschat-4909241a0'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Daniel_Bartschat'
					}
				]
			},
			{
				_strapiId: 1675,
				name: 'Jérôme Bourgeon',
				slug: 'jerome-bourgeon',
				position: 'Host',
				company: 'Zenika Singapore',
				tagline: 'Agile Coach & Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3824',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bourgeon-0904433/'
					}
				]
			},
			{
				_strapiId: 1706,
				name: 'Juliane Pilster',
				slug: 'juliane-pilster',
				position: 'Player',
				company: 'TRUMPF GmbH + Co. KG',
				tagline: 'Agile Führungskraft',
				bio: null,
				website: null,
				avatarId: 'file_3989',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Juliane_Pilster'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/1077c43n'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/juliane-pilster'
					}
				]
			},
			{
				_strapiId: 1676,
				name: 'João Ayalla E Costa',
				slug: 'joao-ayalla-e-costa',
				position: 'Player',
				company: 'Critical TechWorks - A BMW Group and Critical Software Company',
				tagline: 'Head of Interactions',
				bio: null,
				website: null,
				avatarId: 'file_3816',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joaoayallacosta'
					}
				]
			},
			{
				_strapiId: 1849,
				name: 'Natasha Hill',
				slug: 'natasha-hill',
				position: 'Host',
				company: null,
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3916',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:natasha_hill@hotmail.com'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/natasha-hill-9b2278b4'
					}
				]
			},
			{
				_strapiId: 1801,
				name: 'Martin Kuchař',
				slug: 'martin-kuchar',
				position: 'Player',
				company: 'Deutsche Börse',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3905',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martin-kucha%C5%99-30903327/'
					}
				]
			},
			{
				_strapiId: 1584,
				name: 'Enrico Dario',
				slug: 'enrico-dario',
				position: 'Player',
				company: 'Generali Business Solutions',
				tagline: 'Process Architect',
				bio: null,
				website: null,
				avatarId: 'file_3819',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/enricodario/'
					}
				]
			},
			{
				_strapiId: 1811,
				name: 'Mary Sue Jiménez Duarte',
				slug: 'mary-sue-jimenez-duarte',
				position: 'Player',
				company: 'Walmart',
				tagline: 'Agile Transformation Coach',
				bio: null,
				website: null,
				avatarId: 'file_3811',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mary-sue-jim%C3%A9nez-duarte-856419102/'
					}
				]
			},
			{
				_strapiId: 1538,
				name: 'Damien Bencivenni',
				slug: 'damien-bencivenni',
				position: 'Player',
				company: 'Société Générale Bank & Trust',
				tagline: 'Agile enthusiast',
				bio: null,
				website: null,
				avatarId: 'file_4288',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/damien-bencivenni-85790785/'
					}
				]
			},
			{
				_strapiId: 1839,
				name: 'Mo-Ling Chui',
				slug: 'mo-ling-chui',
				position: 'Player',
				company: 'Current.Works and University of the Arts London',
				tagline:
					'Strategist, Creative Director, Facilitator, Senior Lecturer for Design Management & Cultures at LCC, UAL, cultural intelligence, coach',
				bio: null,
				website: null,
				avatarId: 'file_4358',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mo-ling-chui/'
					}
				]
			},
			{
				_strapiId: 1627,
				name: 'Gema Ruiz Díaz-Mariblanca',
				slug: 'gema-ruiz-diaz-mariblanca',
				position: 'Player',
				company: 'Vector ITC Group',
				tagline: 'Agile Coach & Scrum Master | Product Owner | R&D&I Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3724',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gemaruizdiazmariblanca/'
					}
				]
			},
			{
				_strapiId: 1748,
				name: 'Luciano Correa',
				slug: 'luciano-correa',
				position: 'Player',
				company: 'reed.co.uk',
				tagline: 'Scrum Master - CSM',
				bio: null,
				website: null,
				avatarId: 'file_3842',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/luciano-correa-a7a14125/'
					}
				]
			},
			{
				_strapiId: 1687,
				name: 'Jorge Luis Castro Toribio',
				slug: 'jorge-luis-castro-toribio',
				position: 'Player',
				company: 'Everis',
				tagline: 'Test Manager, DevOps Program Manager & Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3998',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jorgeluiscastrotoribio/'
					}
				]
			},
			{
				_strapiId: 1898,
				name: 'Philippe Guldner',
				slug: 'philippe-guldner',
				position: 'Player',
				company: 'OMOIKANE FACILITATION',
				tagline:
					"Facilitateur - Formateur // Stratégie d'entreprise et d'équipe // Certifié facilitateur LEGO® SERIOUS PLAY®",
				bio: null,
				website: null,
				avatarId: 'file_4376',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/philippeguldner/'
					}
				]
			},
			{
				_strapiId: 1879,
				name: 'Patrice Silvant',
				slug: 'patrice-silvant',
				position: 'Player',
				company: 'Opera TV',
				tagline: 'Key Account Manager, EMEA',
				bio: null,
				website: null,
				avatarId: 'file_3976',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/patricesilvant/'
					}
				]
			},
			{
				_strapiId: 1434,
				name: 'Andy Nguyen',
				slug: 'andy-nguyen',
				position: 'Host',
				company: 'Intel',
				tagline: 'PMP, CSM, SA, SASM, ICP-ACC, ICP-TAL',
				bio: null,
				website: null,
				avatarId: 'file_3605',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andy-nguyen-agile/'
					}
				]
			},
			{
				_strapiId: 1859,
				name: 'Noe Maxihelleen Montiel Hernandez',
				slug: 'noe-maxihelleen-montiel-hernandez',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'Innovation Lead & Enterprise Architect',
				bio: null,
				website: null,
				avatarId: 'file_4357',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nmontielh/'
					}
				]
			},
			{
				_strapiId: 1889,
				name: 'Pedro Almeida',
				slug: 'pedro-almeida',
				position: 'Player',
				company: 'kununu',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3716',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pfsalmeida/'
					}
				]
			},
			{
				_strapiId: 1907,
				name: 'Raffaele Recalcati',
				slug: 'raffaele-recalcati',
				position: 'Player',
				company: 'Bticino',
				tagline: 'Embedded Linux BSP Specialist',
				bio: null,
				website: null,
				avatarId: 'file_4120',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/raffaele-recalcati-3a907bb/'
					}
				]
			},
			{
				_strapiId: 1920,
				name: 'Reinhard Ematinger',
				slug: 'reinhard-ematinger',
				position: 'Player',
				company: 'Ematinger von Gesseln Advisors',
				tagline: 'Berater für Geschäftsmodellinnovation ',
				bio: null,
				website: null,
				avatarId: 'file_4375',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Reinhard_Ematinger'
					}
				]
			},
			{
				_strapiId: 1698,
				name: 'Julia Silva',
				slug: 'julia-silva',
				position: 'Player',
				company: 'Yorkshire Building Society',
				tagline: 'Senior UX Manager & Certified Workshop Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3737',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/julia-silva-1b537434/'
					}
				]
			},
			{
				_strapiId: 2207,
				name: 'Geoffrey Dunn',
				slug: 'geoffrey-dunn',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1577,
				name: 'Elisabetta Calzà',
				slug: 'elisabetta-calza',
				position: 'Player',
				company: 'Graffiti 2000',
				tagline: 'Project Manager, Web Marketing',
				bio: null,
				website: null,
				avatarId: 'file_3750',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elisabettacalza/'
					}
				]
			},
			{
				_strapiId: 1666,
				name: 'Jantine Berkelaar',
				slug: 'jantine-berkelaar',
				position: 'Host',
				company: 'Heroes - Think Digital',
				tagline: 'Agile Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_4130',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jantine-berkelaar-946342b'
					}
				]
			},
			{
				_strapiId: 1465,
				name: 'Bart Van Mulders',
				slug: 'bart-van-mulders',
				position: 'Player',
				company: 'Sublime Delivery',
				tagline: 'Implementation expert of core banking systems',
				bio: null,
				website: null,
				avatarId: 'file_4283',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bartvanmulders/'
					}
				]
			},
			{
				_strapiId: 1567,
				name: 'Dirk Hofmann',
				slug: 'dirk-hofmann',
				position: 'Player',
				company: 'EOS Technology Solutions',
				tagline: 'Agile Coach / Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3889',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Dirk_Hofmann28'
					}
				]
			},
			{
				_strapiId: 1501,
				name: 'Catherine Miller',
				slug: 'catherine-miller',
				position: 'Player',
				company: null,
				tagline: 'Agile Service Center Manager & Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3684',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/catherine-miller-35120222/'
					}
				]
			},
			{
				_strapiId: 1869,
				name: 'Oliver Kruth',
				slug: 'oliver-kruth',
				position: 'Player',
				company: 'the nutshell',
				tagline: 'Visual Facilitator, Graphic Recorder and Sketchnoter',
				bio: null,
				website: null,
				avatarId: 'file_4031',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:oliver.kruth@the-nutshell.de'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/oliver-kruth-9a0059152'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Oliver_Kruth/cv'
					}
				]
			},
			{
				_strapiId: 1728,
				name: 'Lars Wagner',
				slug: 'lars-wagner',
				position: 'Player',
				company: 'RBC Investor & Treasury Services',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3982',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/larswagner/'
					}
				]
			},
			{
				_strapiId: 1758,
				name: 'Magdalena Kimmich',
				slug: 'magdalena-kimmich',
				position: 'Player',
				company: 'Clínica Dental Knobel',
				tagline: 'PhD, DDS, MSc',
				bio: null,
				website: null,
				avatarId: 'file_3734',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/magdalenakimmich/'
					}
				]
			},
			{
				_strapiId: 1771,
				name: 'Marco Albanese',
				slug: 'marco-albanese',
				position: 'Player',
				company: '7Pixel',
				tagline:
					'Recent Graduated | Professional in the field of Information Technology and Services',
				bio: null,
				website: null,
				avatarId: 'file_3791',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/albanesemarco/'
					}
				]
			},
			{
				_strapiId: 1789,
				name: 'María Sierra Arce',
				slug: 'maria-sierra-arce',
				position: 'Player',
				company: 'Agilar',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3815',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mariasierraarce/'
					}
				]
			},
			{
				_strapiId: 1821,
				name: 'Michael Hoebig',
				slug: 'michael-hoebig',
				position: 'Player',
				company: 'MOIIN GmbH',
				tagline:
					'Founder & Managing Partner MOIIN / Professor / Head of Digital Innovation Lab / Co-Head MSc DTS & Head MBA Corporate Mgt',
				bio: null,
				website: null,
				avatarId: 'file_3856',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michael-hoebig-2966b614'
					}
				]
			},
			{
				_strapiId: 1829,
				name: 'Michael Schreier',
				slug: 'michael-schreier',
				position: 'Player',
				company: 'Institute for Innovation and Change Methodologies (IICM)',
				tagline: 'Organizational developer, expert for agile working and vital teams',
				bio: null,
				website: null,
				avatarId: 'file_4439',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/schreiermichael/'
					}
				]
			},
			{
				_strapiId: 1456,
				name: 'Antonia Jennewein',
				slug: 'antonia-jennewein',
				position: 'Player',
				company: 'in motion CONSULTING',
				tagline: 'Grow through conflicts and achieve new insights for your business success',
				bio: null,
				website: null,
				avatarId: 'file_3632',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/antonia-jennewein-67084613/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/null'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/solvesconflicts'
					}
				]
			},
			{
				_strapiId: 1489,
				name: 'Britta Strempel',
				slug: 'britta-strempel',
				position: 'Player',
				company: 'Strempel Beratung + Coaching',
				tagline: 'Agile Coach und Organisationsentwicklerin',
				bio: null,
				website: null,
				avatarId: 'file_3673',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/britta-strempel-8156a591'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Britta_Strempel'
					}
				]
			},
			{
				_strapiId: 1519,
				name: 'Claudia Laschalt',
				slug: 'claudia-laschalt',
				position: 'Player',
				company: 'Hutchison Drei Austria GmbH',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3972',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/claudia-laschalt-6aab9b5/'
					}
				]
			},
			{
				_strapiId: 1657,
				name: 'Iulian Paduraru',
				slug: 'iulian-paduraru',
				position: 'Player',
				company: 'iSoftBet Ro',
				tagline: 'Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_4015',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paduraruiulian/'
					}
				]
			},
			{
				_strapiId: 1740,
				name: 'Lindsay Uittenbogaard',
				slug: 'lindsay-uittenbogaard',
				position: 'Player',
				company: 'Mirror Mirror Hub',
				tagline: 'Founder and CEO',
				bio: null,
				website: null,
				avatarId: 'file_3806',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lindsay-uittenbogaard-1a653b/'
					}
				]
			},
			{
				_strapiId: 2105,
				name: 'Gabi Monreal',
				slug: 'gabi-monreal',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4906',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gabriel-monreal-transformaci%C3%B3n-digital-integraci%C3%B3n-api-mulesoft/'
					}
				]
			},
			{
				_strapiId: 1616,
				name: 'Francois Zaninotto',
				slug: 'francois-zaninotto',
				position: 'Player',
				company: 'Marmelab',
				tagline:
					'Marmelab CEO, entrepreneur, manager, agile & lean startup coach, Web architect, open-source enthusiast',
				bio: null,
				website: null,
				avatarId: 'file_3973',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fzaninotto/'
					}
				]
			},
			{
				_strapiId: 1647,
				name: 'Hilda Cheung',
				slug: 'hilda-cheung',
				position: 'Player',
				company: 'WDHB',
				tagline: 'Program Manager',
				bio: null,
				website: null,
				avatarId: 'file_3720',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hildacheunghl/'
					}
				]
			},
			{
				_strapiId: 1957,
				name: 'Sebastian Schwaegele',
				slug: 'sebastian-schwaegele',
				position: 'Player',
				company: 'Playful Insights GbR',
				tagline: 'Gründer und Inhaber',
				bio: null,
				website: null,
				avatarId: 'file_4122',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Sebastian_Schwaegele2'
					}
				]
			},
			{
				_strapiId: 1729,
				name: 'Kristina Melsova',
				slug: 'kristina-melsova',
				position: 'Player',
				company: 'Česká spořitelna',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3990',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kristinamelsova/'
					}
				]
			},
			{
				_strapiId: 1842,
				name: 'Mon Teodoro',
				slug: 'mon-teodoro',
				position: 'Player',
				company: 'CTS',
				tagline: 'Cultivating a culture of learning for Europe’s largest dedicated Google partner',
				bio: null,
				website: null,
				avatarId: 'file_4141',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/monteodoro'
					}
				]
			},
			{
				_strapiId: 1968,
				name: 'Silvia Toth',
				slug: 'silvia-toth',
				position: 'Player',
				company: 'EDUCATIVA',
				tagline: 'Senior Study Abroad Counsellor',
				bio: null,
				website: null,
				avatarId: 'file_4098',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/silvia-toth-94352215/'
					}
				]
			},
			{
				_strapiId: 1895,
				name: 'Peter Gfader',
				slug: 'peter-gfader',
				position: 'Player',
				company: 'Beyond Agility',
				tagline: 'Silo Thinking Breaker and Guest Lecturer',
				bio: null,
				website: null,
				avatarId: 'file_3757',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/petergfader/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/peitor'
					}
				]
			},
			{
				_strapiId: 1905,
				name: 'Quinto Bellini',
				slug: 'quinto-bellini',
				position: 'Player',
				company: 'Sme.Up SPA',
				tagline: 'Consulenza ICT - Formazione - Sviluppo Organizzativo',
				bio: null,
				website: null,
				avatarId: 'file_4082',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/quinto-bellini-26333584/'
					}
				]
			},
			{
				_strapiId: 1738,
				name: 'Letícia Azevedo',
				slug: 'leticia-azevedo',
				position: 'Player',
				company: 'Talkdesk',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4349',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/leticiagazevedo/'
					}
				]
			},
			{
				_strapiId: 1915,
				name: 'Rendy Fajrin',
				slug: 'rendy-fajrin',
				position: 'Player',
				company: 'Alterra',
				tagline:
					'Leader in People Operations (HR) team to help the company becomes the best workplace to grow with a high performing culture',
				bio: null,
				website: null,
				avatarId: 'file_4353',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rendyfajrin/'
					}
				]
			},
			{
				_strapiId: 1925,
				name: 'Roberto Estrella',
				slug: 'roberto-estrella',
				position: 'Player',
				company: 'enepuntocero',
				tagline:
					'Consultor de estrategias y comunicación Web 2.0 y en Redes Sociales para empresas y asociaciones',
				bio: null,
				website: null,
				avatarId: 'file_4045',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/robertoestrella/'
					}
				]
			},
			{
				_strapiId: 1988,
				name: 'Stéphanie Bourgeois',
				slug: 'stephanie-bourgeois',
				position: 'Player',
				company: 'Team Enhancer Formation',
				tagline: 'Team Enhancer',
				bio: null,
				website: null,
				avatarId: 'file_4126',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/st%C3%A9phanie-bourgeois-82904774/'
					}
				]
			},
			{
				_strapiId: 1667,
				name: 'James Jennings',
				slug: 'james-jennings',
				position: 'Player',
				company: 'StratAffect S.A.',
				tagline: 'Independent Advisor',
				bio: null,
				website: null,
				avatarId: 'file_3866',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:j.jennings@strataffect.com'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/james-jennings-7b25b1/'
					}
				]
			},
			{
				_strapiId: 1830,
				name: 'Mike Sousa',
				slug: 'mike-sousa',
				position: 'Player',
				company: 'Aroundhome',
				tagline: 'Head of Agile Ways of Working',
				bio: null,
				website: null,
				avatarId: 'file_3829',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mikemsesousa/'
					}
				]
			},
			{
				_strapiId: 1865,
				name: 'Nuno Silva Pereira',
				slug: 'nuno-silva-pereira',
				position: 'Player',
				company: 'Equal Experts',
				tagline: 'Delivery Lead / Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4356',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nunosilvapereira/'
					}
				]
			},
			{
				_strapiId: 1875,
				name: 'Patricia Garcia',
				slug: 'patricia-garcia',
				position: 'Player',
				company: 'CRITICAL Software',
				tagline: 'Human Resources Senior',
				bio: null,
				website: null,
				avatarId: 'file_3885',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/patriciarodrigues/'
					}
				]
			},
			{
				_strapiId: 1757,
				name: 'Mara Ruiz',
				slug: 'mara-ruiz',
				position: 'Player',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4361',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mara-ruiz-kunz-87904214a'
					}
				]
			},
			{
				_strapiId: 1677,
				name: 'Jimmy Fischer',
				slug: 'jimmy-fischer',
				position: 'Player',
				company: '3WG',
				tagline: 'Founder',
				bio: null,
				website: null,
				avatarId: 'file_4030',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jimmyfischer/'
					}
				]
			},
			{
				_strapiId: 1936,
				name: 'Sabine Canditt',
				slug: 'sabine-canditt',
				position: 'Player',
				company: 'Improuv GmbH',
				tagline: 'Certified Agile Coach and Certified Scrum Trainer',
				bio: null,
				website: null,
				avatarId: 'file_4394',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sabine-canditt-40862715/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Sabine_Canditt/cv'
					}
				]
			},
			{
				_strapiId: 1977,
				name: 'Stanislava Potupchik',
				slug: 'stanislava-potupchik',
				position: 'Host',
				company: 'Quby',
				tagline: 'Scrum master | Soft skills Serious Games',
				bio: null,
				website: null,
				avatarId: 'file_4421',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stanika/'
					}
				]
			},
			{
				_strapiId: 2008,
				name: 'Tiago Olim',
				slug: 'tiago-olim',
				position: 'Player',
				company: 'Maracujá Experiences',
				tagline: 'Host | Experiences Creator | Event Designer | Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4080',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tiagoolim/'
					}
				]
			},
			{
				_strapiId: 1769,
				name: 'Marco Dussin',
				slug: 'marco-dussin',
				position: 'Player',
				company: null,
				tagline: 'Lifelong Kindergartener - Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3789',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcodussin/'
					}
				]
			},
			{
				_strapiId: 2032,
				name: 'Vincent Lafargue',
				slug: 'vincent-lafargue',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Software Craftsman',
				bio: null,
				website: null,
				avatarId: 'file_4416',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lafarguevincent/'
					}
				]
			},
			{
				_strapiId: 1793,
				name: 'Mariana Podestá',
				slug: 'mariana-podesta',
				position: 'Host',
				company: 'Robert Bosch GmbH',
				tagline: 'Lean Management Director',
				bio: null,
				website: null,
				avatarId: 'file_3775',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mariana-podest%C3%A1-6332558'
					}
				]
			},
			{
				_strapiId: 1708,
				name: 'Karin Elsner',
				slug: 'karin-elsner',
				position: 'Player',
				company: 'DaWanda GmbH',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3971',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/karin-elsner-03954b50/'
					}
				]
			},
			{
				_strapiId: 2044,
				name: 'Wolf-Gideon Bleek',
				slug: 'wolf-gideon-bleek',
				position: 'Player',
				company: null,
				tagline: 'Agile Engineering Evangelist, Software Craftsman, Author',
				bio: null,
				website: null,
				avatarId: 'file_4436',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/VonWiedegong'
					}
				]
			},
			{
				_strapiId: 1947,
				name: 'Sara Ilyas',
				slug: 'sara-ilyas',
				position: 'Player',
				company: 'River Island',
				tagline: 'Scrum Master | Agile Coach | Delivery Manager',
				bio: null,
				website: null,
				avatarId: 'file_4391',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sk789/'
					}
				]
			},
			{
				_strapiId: 1717,
				name: 'Kelly Francis',
				slug: 'kelly-francis',
				position: 'Player',
				company: 'Belron® International',
				tagline: 'BCS and Computing U.K. IT Industry Awards; IT Manager 2016 - Winner',
				bio: null,
				website: null,
				avatarId: 'file_3913',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bournekelly/'
					}
				]
			},
			{
				_strapiId: 1420,
				name: 'Ana Escarpenter',
				slug: 'ana-escarpenter',
				position: 'Player',
				company: 'YouthStart Belgium',
				tagline: 'Trainer',
				bio: null,
				website: null,
				avatarId: 'file_4333',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anaescarpenter/'
					}
				]
			},
			{
				_strapiId: 1825,
				name: 'Michael Cramer',
				slug: 'michael-cramer',
				position: 'Player',
				company: 'Michael Cramer • Projektarbeit erfolgreich gestalten',
				tagline: 'Agile Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3762',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michael-cramer-5b24273/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/dimjon'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/escapetheboom'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/dimjon'
					}
				]
			},
			{
				_strapiId: 1782,
				name: 'Maria Ana Botelho Neves',
				slug: 'maria-ana-botelho-neves',
				position: 'Player',
				company: 'Business Transformation By Design - with The Thinking Hotel',
				tagline: 'Design Strategist',
				bio: null,
				website: null,
				avatarId: 'file_3950',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mbseven/'
					}
				]
			},
			{
				_strapiId: 2106,
				name: 'Andy Baraja',
				slug: 'andy-baraja',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4907',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andybaraja'
					}
				]
			},
			{
				_strapiId: 1803,
				name: 'Marta Martin',
				slug: 'marta-martin',
				position: 'Player',
				company: 'detuatuformacion',
				tagline: 'Directora de Desarrollo de Negocio',
				bio: null,
				website: null,
				avatarId: 'file_3852',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martamarting/'
					}
				]
			},
			{
				_strapiId: 1814,
				name: 'Mercedes Carenzo Rozas',
				slug: 'mercedes-carenzo-rozas',
				position: 'Player',
				company: null,
				tagline: 'Creative facilitator / food experiences / space holder / illustrations',
				bio: null,
				website: null,
				avatarId: 'file_3778',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mercedes-carenzo-rozas-803370106/'
					}
				]
			},
			{
				_strapiId: 1857,
				name: 'Nel Mathams',
				slug: 'nel-mathams',
				position: 'Host',
				company: null,
				tagline:
					'Service Designer, enterprise agile coach, user research practitioner and trainer, visual and serious play facilitator.',
				bio: null,
				website: null,
				avatarId: 'file_4084',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nel-mathams-1876448b/'
					}
				]
			},
			{
				_strapiId: 1884,
				name: 'Paul Krischer',
				slug: 'paul-krischer',
				position: 'Player',
				company: 'Drud Technology',
				tagline: 'Technical Account Manager',
				bio: null,
				website: null,
				avatarId: 'file_4446',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/SqyD'
					}
				]
			},
			{
				_strapiId: 1882,
				name: 'Paula Neves',
				slug: 'paula-neves',
				position: 'Player',
				company: 'Legacy Consulting',
				tagline: 'Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_3780',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paula-neves-3ba3575/'
					}
				]
			},
			{
				_strapiId: 1688,
				name: 'Johnathan Lucky',
				slug: 'johnathan-lucky',
				position: 'Player',
				company: 'Perform Group',
				tagline: 'Scrum Master | Product Manager | Product Marketer | Agile Product Development',
				bio: null,
				website: null,
				avatarId: 'file_3980',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/johnathanlucky/'
					}
				]
			},
			{
				_strapiId: 1697,
				name: 'Julia Olcoz',
				slug: 'julia-olcoz',
				position: 'Player',
				company: 'Adidas',
				tagline: 'Agile expert',
				bio: null,
				website: null,
				avatarId: 'file_3821',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jolcoz/'
					}
				]
			},
			{
				_strapiId: 1998,
				name: 'Talip Ozkeles',
				slug: 'talip-ozkeles',
				position: 'Player',
				company: 'GROUP9',
				tagline: 'Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4418',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/talip-ozkeles-b651382/'
					}
				]
			},
			{
				_strapiId: 1751,
				name: 'Luis Cordeiro',
				slug: 'luis-cordeiro',
				position: 'Player',
				company: null,
				tagline: 'Change Booster | Emotional Intelligence | Connecting & Engagement Optimizer',
				bio: null,
				website: null,
				avatarId: 'file_4038',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cordeiroluis/'
					}
				]
			},
			{
				_strapiId: 2019,
				name: 'Tony Sedgwick',
				slug: 'tony-sedgwick',
				position: 'Player',
				company: 'The corporate shaman',
				tagline: 'Value Creation through Innovative thinking .Enterprise Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4134',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tony-sedgwick-335b8a/'
					}
				]
			},
			{
				_strapiId: 1904,
				name: 'Pierre Hervouet',
				slug: 'pierre-hervouet',
				position: 'Host',
				company: 'Upward Consulting',
				tagline: 'Agile Catalyst',
				bio: null,
				website: null,
				avatarId: 'file_4035',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:pierre.hervouet@agilelebanon.org'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Pierre_Hervouet'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pierrehervouet'
					}
				]
			},
			{
				_strapiId: 1926,
				name: 'Rita Oliveira Pelica',
				slug: 'rita-oliveira-pelica',
				position: 'Host',
				company: 'ONYOU - Empowering & Learning Experiences',
				tagline:
					'CEO & Founder ONYOU | Curious mind | Networker | Business Model You®&LEGO® SERIOUS PLAY® Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4386',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ritaoliveirapelica/'
					}
				]
			},
			{
				_strapiId: 1723,
				name: 'Kirstie Mckenzie',
				slug: 'kirstie-mckenzie',
				position: 'Player',
				company: 'Touch Design',
				tagline: 'Financial, Management and Producing Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4019',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kirstie-mckenzie-200b0b7/'
					}
				]
			},
			{
				_strapiId: 1966,
				name: 'Sofia Peixoto',
				slug: 'sofia-peixoto',
				position: 'Player',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4423',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sofiapeixoto/'
					}
				]
			},
			{
				_strapiId: 1955,
				name: 'Sergio Ramazzina',
				slug: 'sergio-ramazzina',
				position: 'Player',
				company: 'Serasoft',
				tagline:
					"Happy to help customers gaining competitive advantage from their company's data | Pentaho Geek, Author, Trainer",
				bio: null,
				website: null,
				avatarId: 'file_4053',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sramazzina/'
					}
				]
			},
			{
				_strapiId: 1743,
				name: 'Lorena Cabanas',
				slug: 'lorena-cabanas',
				position: 'Player',
				company: 'GKN Driveline VIGO',
				tagline: 'Human Resources HRIS / Processess',
				bio: null,
				website: null,
				avatarId: 'file_3732',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lorena-cabanas-9a15334a/'
					}
				]
			},
			{
				_strapiId: 1946,
				name: 'Sandra Enqvist',
				slug: 'sandra-enqvist',
				position: 'Player',
				company: 'E.ON Sverige',
				tagline: 'Product Owner CRM B2C',
				bio: null,
				website: null,
				avatarId: 'file_4076',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sandra-enqvist/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/fluffig_IT'
					}
				]
			},
			{
				_strapiId: 1799,
				name: 'Marta Monteiro',
				slug: 'marta-monteiro',
				position: 'Player',
				company: null,
				tagline:
					'Coaching and Personal Image Consulting - 1st Points of You® Certified Trainer in Portugal',
				bio: null,
				website: null,
				avatarId: 'file_3929',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martapereiramonteiro/'
					}
				]
			},
			{
				_strapiId: 1886,
				name: 'Paulo Malta',
				slug: 'paulo-malta',
				position: 'Player',
				company: 'Innovsky',
				tagline: 'Innovation Management & Business Model Innovation | Managing Partner',
				bio: null,
				website: null,
				avatarId: 'file_3713',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pmalta/'
					}
				]
			},
			{
				_strapiId: 1864,
				name: 'Nicole Helmerich',
				slug: 'nicole-helmerich',
				position: 'Host',
				company: null,
				tagline: 'Consultant, trainer and coach / geek for conceptual and strategic planning',
				bio: null,
				website: null,
				avatarId: 'file_4880',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dr-nicole-helmerich-27430128'
					}
				]
			},
			{
				_strapiId: 1426,
				name: 'Andrea Broglia',
				slug: 'andrea-broglia',
				position: 'Player',
				company: '7Pixel',
				tagline: 'Computer Software Consultant and Contractor',
				bio: null,
				website: null,
				avatarId: 'file_3614',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andrea-broglia-0836b2/'
					}
				]
			},
			{
				_strapiId: 1832,
				name: 'Mike Leber',
				slug: 'mike-leber',
				position: 'Host',
				company: 'Agile Experts e.U.',
				tagline:
					'Executive Consultant | Enterprise Agile Coach | Trainer | Entrepreneur - Inspiring your Agile and Digital Transformation',
				bio: null,
				website: null,
				avatarId: 'file_3831',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michaelleber/'
					}
				]
			},
			{
				_strapiId: 1692,
				name: 'José Gomes Correia',
				slug: 'jose-gomes-correia',
				position: 'Player',
				company: 'Nokia',
				tagline: 'Technical Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_3781',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jos%C3%A9-gomes-correia-ba183245/'
					}
				]
			},
			{
				_strapiId: 1843,
				name: 'Moïra Degroote',
				slug: 'moira-degroote',
				position: 'Player',
				company: 'PerforSENS',
				tagline: 'Systemic coach for complexe organizations',
				bio: null,
				website: null,
				avatarId: 'file_4086',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/moira2g/'
					}
				]
			},
			{
				_strapiId: 1394,
				name: 'Adriano la Vopa',
				slug: 'adriano-la-vopa',
				position: 'Player',
				company: "ain't a GAME*",
				tagline:
					'Innovation Management | Strategic Innovation | Open Innovation | Innovation Design | LEGO® SERIOUS PLAY® | Gamification',
				bio: null,
				website: null,
				avatarId: 'file_4316',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adrianolavopa'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/adrianolavopa'
					}
				]
			},
			{
				_strapiId: 2006,
				name: 'Thirza van Dalen',
				slug: 'thirza-van-dalen',
				position: 'Player',
				company: 'Virtuagym',
				tagline: 'Junior Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4118',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/thirza-van-dalen/'
					}
				]
			},
			{
				_strapiId: 2208,
				name: 'Jody Weir',
				slug: 'jody-weir',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5160',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1773,
				name: 'Marco Broglia',
				slug: 'marco-broglia',
				position: 'Player',
				company: 'Business Integration Partners',
				tagline: 'Management Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3997',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marco-broglia-b2a70827/'
					}
				]
			},
			{
				_strapiId: 1421,
				name: 'Ana Morcillo',
				slug: 'ana-morcillo',
				position: 'Player',
				company: 'Prosegur Cash',
				tagline: 'Enterprise Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4335',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anamorcillo/'
					}
				]
			},
			{
				_strapiId: 1763,
				name: 'Marc Hotton',
				slug: 'marc-hotton',
				position: 'Player',
				company: 'Foyer',
				tagline: "Expert e-business & Internet. Chargé de promotion de l'Innovation",
				bio: null,
				website: null,
				avatarId: 'file_3922',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marchotton/'
					}
				]
			},
			{
				_strapiId: 1914,
				name: 'Regis Schneider',
				slug: 'regis-schneider',
				position: 'Player',
				company: 'Wemanity Group',
				tagline: 'Etre humain, Agiliste, Technophile, Papa',
				bio: null,
				website: null,
				avatarId: 'file_4050',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/regisbob/'
					}
				]
			},
			{
				_strapiId: 1810,
				name: 'Mat Hayes',
				slug: 'mat-hayes',
				position: 'Player',
				company: 'Sprift.com',
				tagline: 'Executive Coach - Human Architect',
				bio: null,
				website: null,
				avatarId: 'file_3761',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mat-hayes-62048a5b/'
					}
				]
			},
			{
				_strapiId: 2013,
				name: 'Tine Klancar',
				slug: 'tine-klancar',
				position: 'Player',
				company: 'zooplus A.G.',
				tagline: 'Agile Delivery Manager',
				bio: null,
				website: null,
				avatarId: 'file_4112',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tineklancar/'
					}
				]
			},
			{
				_strapiId: 2107,
				name: 'Ana  Buigues ',
				slug: 'ana-buigues',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4908',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anabuigues/'
					}
				]
			},
			{
				_strapiId: 1682,
				name: 'Johannes Schartau',
				slug: 'johannes-schartau',
				position: 'Player',
				company: 'Holisticon',
				tagline: 'Agile Coach | CSM | CSP | Integral Agile',
				bio: null,
				website: null,
				avatarId: 'file_4016',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/johannes-schartau/'
					}
				]
			},
			{
				_strapiId: 1646,
				name: 'Himadri Pathak',
				slug: 'himadri-pathak',
				position: 'Player',
				company: null,
				tagline: 'Student',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-HimadriPathak.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_3961',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/himadri-pathak-062004126/'
					}
				]
			},
			{
				_strapiId: 1820,
				name: 'Michael Daun',
				slug: 'michael-daun',
				position: 'Player',
				company: 'Wellevue',
				tagline: 'Company culture shaping app Wellevue. CEO/founder, speaker.',
				bio: null,
				website: null,
				avatarId: 'file_3925',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michaeldaun/'
					}
				]
			},
			{
				_strapiId: 1976,
				name: 'Sonja Tangermann',
				slug: 'sonja-tangermann',
				position: 'Player',
				company: 'Stiftung Haus der kleinen Forscher',
				tagline: 'Teamleiterin Netzwerke Service & Qualifizierung',
				bio: null,
				website: null,
				avatarId: 'file_4408',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sonja-tangermann-504870181/'
					}
				]
			},
			{
				_strapiId: 1443,
				name: 'Annick Colman',
				slug: 'annick-colman',
				position: 'Player',
				company: null,
				tagline: 'Brain based employee communication fan | Disruptive thinker | Storyteller',
				bio: null,
				website: null,
				avatarId: 'file_3608',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/annickcolman/'
					}
				]
			},
			{
				_strapiId: 1702,
				name: 'Julian Kücklich',
				slug: 'julian-kucklich',
				position: 'Player',
				company: 'playability.de',
				tagline: 'Founder and Chief Graphic Recorder at playability.de',
				bio: null,
				website: null,
				avatarId: 'file_3946',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kuecklich'
					}
				]
			},
			{
				_strapiId: 1792,
				name: 'Mark Webb',
				slug: 'mark-webb',
				position: 'Host',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4366',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:mawebb65@gmail.com'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/webby'
					}
				]
			},
			{
				_strapiId: 1783,
				name: 'Marilyn Kol',
				slug: 'marilyn-kol',
				position: 'Player',
				company: 'DxO',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3813',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marilyn-kol-933878b0/'
					}
				]
			},
			{
				_strapiId: 1873,
				name: 'Patricia Kronthaler',
				slug: 'patricia-kronthaler',
				position: 'Player',
				company: 'Patricia Kronthaler - Coaching',
				tagline: 'Business Coach',
				bio: null,
				website: null,
				avatarId: 'file_3894',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kronthaler-patricia-137a8b11a/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Patricia_Kronthaler'
					}
				]
			},
			{
				_strapiId: 1753,
				name: 'Lukas Wellauer',
				slug: 'lukas-wellauer',
				position: 'Player',
				company: 'Teamhumor',
				tagline: 'Bereichsleiter | Potentialentwickler | Sozialarbeiter FH',
				bio: null,
				website: null,
				avatarId: 'file_4444',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lukas-wellauer-698452117'
					}
				]
			},
			{
				_strapiId: 1894,
				name: 'Peter Lie',
				slug: 'peter-lie',
				position: 'Player',
				company: 'CGI',
				tagline: 'Director Consulting at CGI Deutschland & IC Agile Authorized Instructor',
				bio: null,
				website: null,
				avatarId: 'file_4143',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/peterlie/'
					}
				]
			},
			{
				_strapiId: 1986,
				name: 'Stefano Giacchè',
				slug: 'stefano-giacche',
				position: 'Player',
				company: 'O.S.L.',
				tagline: 'Project Coordinator, Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4427',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stefano-giacch%C3%A8-5467564a/'
					}
				]
			},
			{
				_strapiId: 1853,
				name: 'Narudee (Poom) Kristhanin',
				slug: 'narudee-poom-kristhanin',
				position: 'Host',
				company: 'Eureka International',
				tagline: 'Principal strategy & transformation facilitator with LEGO® SERIOUS PLAY®',
				bio: null,
				website: null,
				avatarId: 'file_4368',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/narudeekristhanin/'
					}
				]
			},
			{
				_strapiId: 1996,
				name: 'Sylvia Undreiner',
				slug: 'sylvia-undreiner',
				position: 'Player',
				company: null,
				tagline: 'Trainer and Operational Management Coach',
				bio: null,
				website: null,
				avatarId: 'file_4451',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sylviaundreiner/'
					}
				]
			},
			{
				_strapiId: 1937,
				name: 'Sabine Moldenhauer',
				slug: 'sabine-moldenhauer',
				position: 'Player',
				company: 'moldenhauer-partner.de',
				tagline: 'Partner, Business & Executive Coach / Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4048',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:sabine.moldenhauer@moldenhauer-partner.de'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sabine-moldenhauer-235bb681/'
					}
				]
			},
			{
				_strapiId: 2023,
				name: 'Véronique Olive',
				slug: 'veronique-olive',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Product Owner',
				bio: null,
				website: null,
				avatarId: 'file_4063',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/v%C3%A9ronique-olive-17a92511/'
					}
				]
			},
			{
				_strapiId: 2041,
				name: 'Virginia Anderson',
				slug: 'virginia-anderson',
				position: 'Player',
				company: 'Matrix Consulting',
				tagline: 'Organizational Performance Consultant, Performance Coach, PCC, CPCC, ORSCC',
				bio: null,
				website: null,
				avatarId: 'file_4107',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/virginia-anderson-acc-cpcc-68804811/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/MatrixConsultingSARL'
					}
				]
			},
			{
				_strapiId: 2033,
				name: 'Violaine Truck',
				slug: 'violaine-truck',
				position: 'Player',
				company: null,
				tagline: 'Tech-savvy consultant in a complex world',
				bio: null,
				website: null,
				avatarId: 'file_4413',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mediation20/'
					}
				]
			},
			{
				_strapiId: 1699,
				name: 'Judy Rees',
				slug: 'judy-rees',
				position: 'Player',
				company: null,
				tagline:
					'Transforming conversations, remotely. Co-creative, high-quality interaction, especially with distributed teams',
				bio: null,
				website: null,
				avatarId: 'file_3943',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/judyrees/'
					}
				]
			},
			{
				_strapiId: 1891,
				name: 'Pedro Coutinho',
				slug: 'pedro-coutinho',
				position: 'Player',
				company: 'Bosch',
				tagline: 'Road to Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4374',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pfpcoutinho/'
					}
				]
			},
			{
				_strapiId: 1942,
				name: 'Salvatore Rinaldo',
				slug: 'salvatore-rinaldo',
				position: 'Player',
				company: null,
				tagline: 'Scrum Master / Agilist ',
				bio: null,
				website: null,
				avatarId: 'file_4102',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/salvatorerinaldo'
					}
				]
			},
			{
				_strapiId: 1949,
				name: 'Sarah Banasiak',
				slug: 'sarah-banasiak',
				position: 'Player',
				company: 'Sarah Banasiak - Training | Facilitation | Mediation',
				tagline: 'Für erfolgreichere Unternehmen. Und mit Weltverbesserer-Gen',
				bio: null,
				website: null,
				avatarId: 'file_4402',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sarah-banasiak/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/empacom0'
					}
				]
			},
			{
				_strapiId: 1930,
				name: 'Sabina Lammert',
				slug: 'sabina-lammert',
				position: 'Player',
				company: 'Sabina Lammert Consulting',
				tagline: 'Consultant, Speaker, Trainer and Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4138',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sabina-lammert-14abb512b'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/SabinaLammert'
					}
				]
			},
			{
				_strapiId: 1959,
				name: 'Silvia Duarte',
				slug: 'silvia-duarte',
				position: 'Player',
				company: null,
				tagline:
					'Innovation | Entrepreneurship | Digital Transformation | Changing the World 1% at a Time',
				bio: null,
				website: null,
				avatarId: 'file_4390',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sloduarte/'
					}
				]
			},
			{
				_strapiId: 1982,
				name: 'Stefan Derwort',
				slug: 'stefan-derwort',
				position: 'Player',
				company: 'Projektforum Freiburg',
				tagline: 'Trainer, Berater',
				bio: null,
				website: null,
				avatarId: 'file_4412',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stefan-derwort-freiburg'
					}
				]
			},
			{
				_strapiId: 2014,
				name: 'Toby Sinclair',
				slug: 'toby-sinclair',
				position: 'Player',
				company: 'JPMorgan Chase & Co.',
				tagline: 'VP',
				bio: null,
				website: null,
				avatarId: 'file_4419',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tobysinclair/'
					}
				]
			},
			{
				_strapiId: 2025,
				name: 'Urszula Bossart',
				slug: 'urszula-bossart',
				position: 'Player',
				company: 'Moccu - Digitalagentur',
				tagline: 'Human Resources Manager',
				bio: null,
				website: null,
				avatarId: 'file_4398',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/urszula-bossart-13475374/'
					}
				]
			},
			{
				_strapiId: 2036,
				name: 'Vlad-Ionut Rautu',
				slug: 'vlad-ionut-rautu',
				position: 'Player',
				company: 'Nokia',
				tagline: 'SRAN I&V Test Engineer',
				bio: null,
				website: null,
				avatarId: 'file_4121',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rautuvladionut/'
					}
				]
			},
			{
				_strapiId: 1425,
				name: 'Dr. Andreas Volland',
				slug: 'dr-andreas-volland',
				position: 'Player',
				company: 'Dr. Andreas Volland Consulting',
				tagline: 'Trainer, Berater, Moderator',
				bio: null,
				website: null,
				avatarId: 'file_3648',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Andreas_Volland'
					}
				]
			},
			{
				_strapiId: 1969,
				name: 'Sol Pandiella-McLeod',
				slug: 'sol-pandiella-mcleod',
				position: 'Player',
				company: 'DiUS',
				tagline: 'Human Centred Designer . Design Strategist . Problem Solver . Service Designer',
				bio: null,
				website: null,
				avatarId: 'file_4123',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/solpandiellamcleod/'
					}
				]
			},
			{
				_strapiId: 1897,
				name: 'Phillippa Rose',
				slug: 'phillippa-rose',
				position: 'Host',
				company: 'University of the Arts London',
				tagline: 'User-centered Design & Innovation',
				bio: null,
				website: null,
				avatarId: 'file_4041',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/phillirose/'
					}
				]
			},
			{
				_strapiId: 2209,
				name: 'delete',
				slug: 'delete',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1899,
				name: 'Pierre Pelkes',
				slug: 'pierre-pelkes',
				position: 'Player',
				company: 'Société Generale Securities Services',
				tagline: 'Transfer Agency - Business Analyst',
				bio: null,
				website: null,
				avatarId: 'file_4372',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pierre-pelkes-15b01a32/'
					}
				]
			},
			{
				_strapiId: 1910,
				name: 'Ralph Warta',
				slug: 'ralph-warta',
				position: 'Host',
				company: 'nbn™ Australia',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4091',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ralphwarta/'
					}
				]
			},
			{
				_strapiId: 1965,
				name: 'Simon Jaillais',
				slug: 'simon-jaillais',
				position: 'Host',
				company: 'Palo IT',
				tagline: 'Culture, Change and Consciouness Hive Master',
				bio: null,
				website: null,
				avatarId: 'file_4101',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/simon-jaillais-44888353/'
					}
				]
			},
			{
				_strapiId: 1922,
				name: 'Roberta Trucco',
				slug: 'roberta-trucco',
				position: 'Player',
				company: 'Solunch',
				tagline:
					'ESL teacher, Cocoon Projects Contributor, Solunch, Certified Scrum master and product owner',
				bio: null,
				website: null,
				avatarId: 'file_4278',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/roberta-trucco-4145b031/'
					}
				]
			},
			{
				_strapiId: 2003,
				name: 'Tanja Osterloh',
				slug: 'tanja-osterloh',
				position: 'Player',
				company: 'Hochschule Fresenius',
				tagline: 'Agile Transformation Coach, ICAgile authorized Instructor, SAFe SPC, lecturer',
				bio: null,
				website: null,
				avatarId: 'file_4060',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tanja-osterloh-53816b12'
					}
				]
			},
			{
				_strapiId: 1995,
				name: 'Sylvia Taylor',
				slug: 'sylvia-taylor',
				position: 'Player',
				company: null,
				tagline:
					'Creating ecosystems for organizational agility. High Performance Teams & Leaders, Org Design, Process evolution',
				bio: null,
				website: null,
				avatarId: 'file_4059',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sylviataylor/'
					}
				]
			},
			{
				_strapiId: 1636,
				name: 'Gregory Nguyen',
				slug: 'gregory-nguyen',
				position: 'Host',
				company: 'Agile Partner',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3871',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gregory-nguyen-75a92a8/'
					}
				]
			},
			{
				_strapiId: 2108,
				name: 'Eva López',
				slug: 'eva-lopez',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4909',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/eva-lopez-lopez/'
					}
				]
			},
			{
				_strapiId: 2155,
				name: 'Ana Rita Almeida',
				slug: 'ana-rita-almeida',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5071',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ana-rita-almeida-37885438'
					}
				]
			},
			{
				_strapiId: 2167,
				name: 'Eduardo Martins',
				slug: 'eduardo-martins',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5085',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2137,
				name: 'Ricardo Lemos',
				slug: 'ricardo-lemos',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5052',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ricardo-lemos-3588b654/'
					}
				]
			},
			{
				_strapiId: 2148,
				name: 'Kazimierz Oksza-Orzechowski ',
				slug: 'kazimierz-oksza-orzechowski',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5062',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kazimierz-oksza-orzechowski/'
					}
				]
			},
			{
				_strapiId: 2027,
				name: 'Vanessa Amaya Uribe',
				slug: 'vanessa-amaya-uribe',
				position: 'Host',
				company: 'Banana Soluciones Creativas',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4405',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vanessaamayauribe/'
					}
				]
			},
			{
				_strapiId: 1954,
				name: 'Sarinporn (Rin) Jivanun',
				slug: 'sarinporn-rin-jivanun',
				position: 'Player',
				company: 'Enviro Thailand',
				tagline: 'Managing director',
				bio: null,
				website: null,
				avatarId: 'file_4071',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sarinporn-jivanun-84b51577/'
					}
				]
			},
			{
				_strapiId: 2210,
				name: 'Lina Mbirkou',
				slug: 'lina-mbirkou',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2192,
				name: 'Kavitha Talreja',
				slug: 'kavitha-talreja',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5140',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kavithatalreja/'
					}
				]
			},
			{
				_strapiId: 1916,
				name: 'Remi-Armand Collaris',
				slug: 'remi-armand-collaris',
				position: 'Player',
				company: null,
				tagline: 'Team- en organisatiecoach',
				bio: null,
				website: null,
				avatarId: 'file_4036',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/racollaris/'
					}
				]
			},
			{
				_strapiId: 1924,
				name: 'Rita Fernandes',
				slug: 'rita-fernandes',
				position: 'Player',
				company: 'kununu',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4362',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rita-fernandes-64914168/'
					}
				]
			},
			{
				_strapiId: 1975,
				name: 'Sophie Vurpillot',
				slug: 'sophie-vurpillot',
				position: 'Host',
				company: 'Planet Expat',
				tagline: 'Executive Director',
				bio: null,
				website: null,
				avatarId: 'file_4417',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:sophie@planetexpat.org'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sophievurpillot'
					}
				]
			},
			{
				_strapiId: 1423,
				name: 'Andrea Foà',
				slug: 'andrea-foa',
				position: 'Player',
				company: 'BeautifulMess',
				tagline: 'Performing Artist and a few other things',
				bio: null,
				website: null,
				avatarId: 'file_3624',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/opossum/'
					}
				]
			},
			{
				_strapiId: 2109,
				name: 'Nuria Lopez Pascua',
				slug: 'nuria-lopez-pascua',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4910',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nurialopezpascua/'
					}
				]
			},
			{
				_strapiId: 1944,
				name: 'Sanna Koivu',
				slug: 'sanna-koivu',
				position: 'Player',
				company: 'viesure innovation center GmbH',
				tagline: 'Scrum Master, Agile Coach, Facilitator + Coach',
				bio: null,
				website: null,
				avatarId: 'file_4142',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/snnakoivu'
					}
				]
			},
			{
				_strapiId: 1906,
				name: 'Raquel Pedrouso',
				slug: 'raquel-pedrouso',
				position: 'Host',
				company: 'Evolutia Consulting',
				tagline: 'Facilitadora de procesos de aprendizaje. Coaching & Gamificacion & Linkedin',
				bio: null,
				website: null,
				avatarId: 'file_4369',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/raquelpedrousocoachejecutivo/'
					}
				]
			},
			{
				_strapiId: 1391,
				name: 'Adilson Simões',
				slug: 'adilson-simoes',
				position: 'Player',
				company: 'Fidelidade',
				tagline: 'Head Of IT Transformation Office',
				bio: null,
				website: null,
				avatarId: 'file_4297',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adilsonsimoes/'
					}
				]
			},
			{
				_strapiId: 1964,
				name: 'Simon Claes',
				slug: 'simon-claes',
				position: 'Player',
				company: 'EDF Lumius',
				tagline: 'Agile Coach & Transformation consultant',
				bio: null,
				website: null,
				avatarId: 'file_4097',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/simon-claes-98189654/'
					}
				]
			},
			{
				_strapiId: 2169,
				name: 'Cristi Graunte',
				slug: 'cristi-graunte',
				position: 'Player',
				company: null,
				tagline: 'Founder',
				bio: null,
				website: null,
				avatarId: 'file_5087',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cristigraunte'
					}
				]
			},
			{
				_strapiId: 2149,
				name: 'Vasanta Rapaka',
				slug: 'vasanta-rapaka',
				position: 'Player',
				company: 'Cognizant Digital Solutions',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5063',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vasanta-rapaka-34a6201/'
					}
				]
			},
			{
				_strapiId: 1984,
				name: 'Stefania Marinelli',
				slug: 'stefania-marinelli',
				position: 'Player',
				company: null,
				tagline: 'Agile Lead',
				bio: null,
				website: null,
				avatarId: 'file_4401',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stefania-marinelli-3706685/'
					}
				]
			},
			{
				_strapiId: 1985,
				name: 'Stefan Elbs',
				slug: 'stefan-elbs',
				position: 'Player',
				company: 'Zerustra Beteiligungsgesellschaft mbH',
				tagline: 'Interim Manager, Berater und Coach',
				bio: null,
				website: null,
				avatarId: 'file_4452',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stefan-elbs/'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Stefan_Elbs'
					}
				]
			},
			{
				_strapiId: 1992,
				name: 'Susann-Christin Entrich',
				slug: 'susann-christin-entrich',
				position: 'Player',
				company: 'Fraam Services GmbH',
				tagline: 'Business Analyst',
				bio: null,
				website: null,
				avatarId: 'file_4443',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/SusannChristin_Entrich/cv'
					}
				]
			},
			{
				_strapiId: 2001,
				name: 'Tania Guido',
				slug: 'tania-guido',
				position: 'Player',
				company: null,
				tagline: 'Business and Personal Coach',
				bio: null,
				website: null,
				avatarId: 'file_4399',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tania-guido-34b1a520/'
					}
				]
			},
			{
				_strapiId: 2012,
				name: 'Thorsten Ohler',
				slug: 'thorsten-ohler',
				position: 'Player',
				company: 'chartflipper.de',
				tagline: 'Pointed Visual Communication expert',
				bio: null,
				website: null,
				avatarId: 'file_4105',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/thorsten-ohler-24b391113/'
					}
				]
			},
			{
				_strapiId: 2018,
				name: 'Uli Morgenstern',
				slug: 'uli-morgenstern',
				position: 'Host',
				company: 'KNV Zeitfracht',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4397',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Ulrike_Morgenstern5'
					}
				]
			},
			{
				_strapiId: 2035,
				name: 'Vladimir Eske',
				slug: 'vladimir-eske',
				position: 'Player',
				company: 'LogicalDesign',
				tagline: 'Software architect',
				bio: null,
				website: null,
				avatarId: 'file_4113',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vladimir-eske-465a663/'
					}
				]
			},
			{
				_strapiId: 1561,
				name: 'Don Ewart',
				slug: 'don-ewart',
				position: 'Player',
				company: 'Santander UK',
				tagline: 'Scrum master and Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3948',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/donaldewart/'
					}
				]
			},
			{
				_strapiId: 1868,
				name: 'Olga Molenaar',
				slug: 'olga-molenaar',
				position: 'Player',
				company: 'Olganize IT',
				tagline: 'Scrum Master / Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4438',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/olganizeit/'
					}
				]
			},
			{
				_strapiId: 2045,
				name: 'Yann Gensollen',
				slug: 'yann-gensollen',
				position: 'Founder',
				company: '+Simple',
				tagline: 'Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4109',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:yann.gensollen@gmail.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Yann_G'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/yanngensollen'
					}
				]
			},
			{
				_strapiId: 1993,
				name: 'Sylvain Chery',
				slug: 'sylvain-chery',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Co-founder, Director',
				bio: null,
				website: null,
				avatarId: 'file_4435',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:schery@agilepartner.net'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/sylchery'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/schery'
					}
				]
			},
			{
				_strapiId: 2002,
				name: 'Thierry Burrig',
				slug: 'thierry-burrig',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Product Owner',
				bio: null,
				website: null,
				avatarId: 'file_4068',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/thierryburrig/'
					}
				]
			},
			{
				_strapiId: 2011,
				name: 'Tim Goydke',
				slug: 'tim-goydke',
				position: 'Player',
				company: 'International Graduate Center - Hochschule Bremen',
				tagline: 'Vorstandsmitglied, Wissenschaftlicher Direktor',
				bio: null,
				website: null,
				avatarId: 'file_4442',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Tim_Goydke/cv'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/tim.goydke'
					}
				]
			},
			{
				_strapiId: 2120,
				name: 'Fernando Cardoso',
				slug: 'fernando-cardoso',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5029',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fernandocardoso/'
					}
				]
			},
			{
				_strapiId: 2029,
				name: 'Vincent Bosmans',
				slug: 'vincent-bosmans',
				position: 'Player',
				company: null,
				tagline: 'Trainer - Coach - Business Developer',
				bio: null,
				website: null,
				avatarId: 'file_4428',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vincent-bosmans-57767a/'
					}
				]
			},
			{
				_strapiId: 2039,
				name: 'Wiebke Dahl',
				slug: 'wiebke-dahl',
				position: 'Player',
				company: 'Holisticon AG',
				tagline: 'Business Development',
				bio: null,
				website: null,
				avatarId: 'file_4093',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/wiebke-dahl-314ba7131/'
					}
				]
			},
			{
				_strapiId: 2046,
				name: 'Yoan Thirion',
				slug: 'yoan-thirion',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4431',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/yoanthirion/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/yot88'
					}
				]
			},
			{
				_strapiId: 1974,
				name: 'Sonja Uittenboogaard',
				slug: 'sonja-uittenboogaard',
				position: 'Mentor',
				company: 'Capgemini',
				tagline: 'Change Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4425',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sonjauittenboogaard/'
					}
				]
			},
			{
				_strapiId: 1505,
				name: 'Chris Caswell',
				slug: 'chris-caswell',
				position: 'Mentor',
				company: null,
				tagline: 'Agile Coach | LEGO® SERIOUS PLAY facilitator',
				bio: null,
				website: null,
				avatarId: 'file_5281',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cscaswell/'
					}
				]
			},
			{
				_strapiId: 1611,
				name: 'Florent Bennani',
				slug: 'florent-bennani',
				position: 'Host',
				company: 'TadaWeb',
				tagline: 'Software developer',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-FlorentBenneni.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_3966',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/florent-bennani-36277873/'
					}
				]
			},
			{
				_strapiId: 1424,
				name: 'Andreas Erbe',
				slug: 'andreas-erbe',
				position: 'Host',
				company: 'Launchlabs',
				tagline: 'Design Thinker, Workspace Designer, Founder and Owner',
				bio: null,
				website: null,
				avatarId: 'file_3601',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andreas-erbe-4b9a2434/'
					}
				]
			},
			{
				_strapiId: 2021,
				name: 'Ute Nitschke',
				slug: 'ute-nitschke',
				position: 'Player',
				company: 'nitschke consulting',
				tagline: 'Consultant, facilitator, coach',
				bio: null,
				website: null,
				avatarId: 'file_4429',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ute-nitschke-297a132'
					}
				]
			},
			{
				_strapiId: 2211,
				name: 'Elisabeth Ellis',
				slug: 'elisabeth-ellis',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2170,
				name: 'Sónia Cristina',
				slug: 'sonia-cristina',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5088',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 1935,
				name: 'Rui Couto',
				slug: 'rui-couto',
				position: 'Player',
				company: 'ROFF',
				tagline: 'Senior SAP Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4383',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rui-couto-9a299a1/'
					}
				]
			},
			{
				_strapiId: 1945,
				name: 'Sandy Lam',
				slug: 'sandy-lam',
				position: 'Player',
				company: 'Software AG',
				tagline:
					'Product & Design System Designer | Virtual Design Sprint Facilitator | Workshop Designer',
				bio: null,
				website: null,
				avatarId: 'file_4051',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/thesandylam'
					}
				]
			},
			{
				_strapiId: 1956,
				name: 'Serban Mrejeriu',
				slug: 'serban-mrejeriu',
				position: 'Player',
				company: 'AIMS International Romania',
				tagline: 'HR consultant',
				bio: null,
				website: null,
				avatarId: 'file_4389',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/serbanmrejeriu/'
					}
				]
			},
			{
				_strapiId: 2030,
				name: 'Vincent Marqué',
				slug: 'vincent-marque',
				position: 'Player',
				company: 'Quakecorp',
				tagline: 'Coach et Formateur ITIL, DevOps, Agile',
				bio: null,
				website: null,
				avatarId: 'file_4430',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vincent-marqu%C3%A9-3152701a/'
					}
				]
			},
			{
				_strapiId: 2040,
				name: 'Wilmer Meneses',
				slug: 'wilmer-meneses',
				position: 'Player',
				company: 'Juegacetamol',
				tagline: 'Socio Fundador',
				bio: null,
				website: null,
				avatarId: 'file_4432',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/wilmer-meneses-a415b521/'
					}
				]
			},
			{
				_strapiId: 2048,
				name: 'Yuval Sidney Barak Azagury',
				slug: 'yuval-sidney-barak-azagury',
				position: 'Host',
				company: 'Self-employed',
				tagline: 'Management consultant. Paramedic, B.Sc. in Emergency Medicine',
				bio: null,
				website: null,
				avatarId: 'file_4081',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/yuval-sidney-barak-azagury-028620111/'
					}
				]
			},
			{
				_strapiId: 1428,
				name: 'Andrey Tolmachev',
				slug: 'andrey-tolmachev',
				position: 'Player',
				company: 'Unusual Concepts',
				tagline: 'PSM, CSM, Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3970',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/atolmachev/'
					}
				]
			},
			{
				_strapiId: 1440,
				name: 'Anna Royzman',
				slug: 'anna-royzman',
				position: 'Player',
				company: null,
				tagline: 'Test Leadership Congress founder',
				bio: null,
				website: null,
				avatarId: 'file_3639',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/anna-royzman-2676b63/'
					}
				]
			},
			{
				_strapiId: 2057,
				name: 'Josipa Borić-Novosel',
				slug: 'josipa-boric-novosel',
				position: 'Player',
				company: 'Astyre · Freelance',
				tagline: 'Agile team coach | Scrum Master | Executive Coach | Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4806',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/josipab/'
					}
				]
			},
			{
				_strapiId: 1940,
				name: 'Samuel Leroy',
				slug: 'samuel-leroy',
				position: 'Player',
				company: 'Pictet Technologies',
				tagline: 'Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4046',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/samuel-leroy-541838ba/'
					}
				]
			},
			{
				_strapiId: 2078,
				name: 'Răzvan Sbîngu',
				slug: 'razvan-sbingu',
				position: 'Player',
				company: null,
				tagline: 'Front-end Developer',
				bio: null,
				website: null,
				avatarId: 'file_4837',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/razsbg/'
					}
				]
			},
			{
				_strapiId: 2066,
				name: 'Ivan Zorić',
				slug: 'ivan-zoric',
				position: 'Player',
				company: 'LOOMI Studio',
				tagline: 'Founder and Business Owner',
				bio: null,
				website: null,
				avatarId: 'file_4794',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ivan-zori%C4%87-5284b2256/'
					}
				]
			},
			{
				_strapiId: 2053,
				name: 'Laxman Murugappan',
				slug: 'laxman-murugappan',
				position: 'Mentor',
				company: 'PlayThinkTransform',
				tagline:
					'Helping to Solve Problems, Change Perspectives, Transcend Experiences & Empower Business using LSP & Custom Board Games',
				bio: null,
				website: null,
				avatarId: 'file_3721',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/laxmanmurugappan/'
					}
				]
			},
			{
				_strapiId: 1880,
				name: 'Patrik Kämpf',
				slug: 'patrik-kampf',
				position: 'Host',
				company: 'www.loco-motiv.ch',
				tagline: 'Social worker FH, mediator SDM, systemic experiential educator iA',
				bio: '<p>Patrik Kämpf has many years of experience in working with children and adolescents, as well as job supervisor and field trainer. He tries to lead his team to the best of his knowledge and belief in accordance with the principles he passes on.</p>\n<p>He brings new things to the world with enthusiasm and drive. Creative, careful and with a good sense of humor in the company. </p>',
				website: null,
				avatarId: 'file_3717',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/patrik-k%C3%A4mpf-1b8a764b/'
					}
				]
			},
			{
				_strapiId: 1928,
				name: 'Ruben Klerkx',
				slug: 'ruben-klerkx',
				position: 'Player',
				company: 'Bizar Bijzonder',
				tagline:
					'Master of Engagement & Creativity | Empowering people by engaging and involving everyone | Facilitator & Moderator using Liberating Structures, LEGO Serious Play & Gamification : Create big change while having BIG FUN!',
				bio: null,
				website: null,
				avatarId: 'file_4395',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rubenklerkx/'
					}
				]
			},
			{
				_strapiId: 2212,
				name: 'Myles Tankle',
				slug: 'myles-tankle',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1952,
				name: 'Sarah Le-Fevre',
				slug: 'sarah-le-fevre',
				position: 'Player',
				company: null,
				tagline: 'Games-based learning design and delivery - Lego Serious Play facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4069',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sarahlefevre/'
					}
				]
			},
			{
				_strapiId: 1960,
				name: 'Sebastian Sanitz',
				slug: 'sebastian-sanitz',
				position: 'Player',
				company: 'Fielmann AG',
				tagline: 'Agile Coach and Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4420',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sanitz/'
					}
				]
			},
			{
				_strapiId: 1679,
				name: 'João David Farinha Ferreira',
				slug: 'joao-david-farinha-ferreira',
				position: 'Player',
				company: 'Fidelidade',
				tagline: 'Lean Agile business transformation expert',
				bio: null,
				website: null,
				avatarId: 'file_3956',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jo%C3%A3o-david-farinha-ferreira-7845956/'
					}
				]
			},
			{
				_strapiId: 1970,
				name: 'Sofia Alexe Flores Galván',
				slug: 'sofia-alexe-flores-galvan',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'UX/UI Designer',
				bio: null,
				website: null,
				avatarId: 'file_4070',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexefsg/'
					}
				]
			},
			{
				_strapiId: 1979,
				name: 'Stanley Wylenzek',
				slug: 'stanley-wylenzek',
				position: 'Player',
				company: 'InContext Consultancy Group',
				tagline: 'Strategic Change Leadership Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4124',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stanley-wylenzek-7166a411/'
					}
				]
			},
			{
				_strapiId: 1989,
				name: 'Susan J. Behnke',
				slug: 'susan-j-behnke',
				position: 'Player',
				company: '4free AG',
				tagline: 'Sales Manager, Coach, Speaker',
				bio: null,
				website: null,
				avatarId: 'file_4426',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/susan-j-behnke-aa9a83a9/'
					}
				]
			},
			{
				_strapiId: 2020,
				name: 'Ulises Aguila',
				slug: 'ulises-aguila',
				position: 'Host',
				company: null,
				tagline: 'Agile coach',
				bio: null,
				website: null,
				avatarId: 'file_4103',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ulisesaguila/'
					}
				]
			},
			{
				_strapiId: 2088,
				name: 'Pablo Salvador',
				slug: 'pablo-salvador',
				position: 'Player',
				company: 'Paradigma Digital',
				tagline:
					'Agile Practitioner, Scrum Master, Product Owner focused on helping building digital products',
				bio: null,
				website: null,
				avatarId: 'file_4891',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jpablosalvador/'
					}
				]
			},
			{
				_strapiId: 2009,
				name: 'Till Hasbach',
				slug: 'till-hasbach',
				position: 'Host',
				company: 'Till Hasbach, Playful Business',
				tagline: 'Talks about #moonshot, #innovation, #playfulness, and #gamedevelopment',
				bio: null,
				website: null,
				avatarId: 'file_4403',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/till-hasbach'
					}
				]
			},
			{
				_strapiId: 2111,
				name: 'Alexander Menzinsky',
				slug: 'alexander-menzinsky',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5019',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/amenzinsky/'
					}
				]
			},
			{
				_strapiId: 2121,
				name: 'Tatiana (Tati) Rocha',
				slug: 'tatiana-tati-rocha',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5030',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tatianadsrocha/'
					}
				]
			},
			{
				_strapiId: 1556,
				name: 'Dianna Verlaan',
				slug: 'dianna-verlaan',
				position: 'Host',
				company: null,
				tagline: 'Instructional Designer | Facilitator | Training Wizard',
				bio: null,
				website: null,
				avatarId: 'file_4010',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/diannaverlaan/'
					}
				]
			},
			{
				_strapiId: 1785,
				name: 'María Gertrudis López',
				slug: 'maria-gertrudis-lopez',
				position: 'Player',
				company: null,
				tagline:
					'Agile Coach/Trainer - SAFe® Agilist - Scrum Master (CSM) - Project Manager (PMP)® - Functional Analyst - Info Arch.',
				bio: null,
				website: null,
				avatarId: 'file_3822',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gertrudislopez/'
					}
				]
			},
			{
				_strapiId: 2125,
				name: 'Heide Stollberg',
				slug: 'heide-stollberg',
				position: 'Player',
				company: 'Safran Vectronix',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5033',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://ch.linkedin.com/in/heidestollberg?original_referer=https%3A%2F%2Fwww.google.com%2F'
					}
				]
			},
			{
				_strapiId: 2089,
				name: 'Alan McShane',
				slug: 'alan-mc-shane',
				position: 'Host',
				company: 'considiom',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4885',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alanmcshane/'
					}
				]
			},
			{
				_strapiId: 2004,
				name: 'Theo Geelen',
				slug: 'theo-geelen',
				position: 'Host',
				company: 'Yellow Intelligent BV',
				tagline:
					'Trainer Agility Health Coach Agile / Scrum Master / Kanban / SAFe / AgilityHealth',
				bio: null,
				website: null,
				avatarId: 'file_4414',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/theogeelen/'
					}
				]
			},
			{
				_strapiId: 2038,
				name: 'Wan Fadzil Adlan Wan Sidik',
				slug: 'wan-fadzil-adlan-wan-sidik',
				position: 'Mentor',
				company: 'Plasticity PLT / TNB Integrated Learning Solution Bhd',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4117',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/wan-fadzil-adlan-wan-sidik-5774bb1/'
					}
				]
			},
			{
				_strapiId: 1994,
				name: 'Syahrul Azmi',
				slug: 'syahrul-azmi',
				position: 'Host',
				company: 'Allegro Rocks!',
				tagline: 'Innovation, Change & Performance',
				bio: null,
				website: null,
				avatarId: 'file_4072',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/syahrulazmi/'
					}
				]
			},
			{
				_strapiId: 1606,
				name: 'Federico Casabianca',
				slug: 'federico-casabianca',
				position: 'Player',
				company: 'GFT Group',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4026',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/casabiancafederico/'
					}
				]
			},
			{
				_strapiId: 1972,
				name: 'Sophie Le Dorner-Debout',
				slug: 'sophie-le-dorner-debout',
				position: 'Player',
				company: 'Mindgility',
				tagline: 'Pedagogical Designer',
				bio: null,
				website: null,
				avatarId: 'file_4111',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sophiedebout/'
					}
				]
			},
			{
				_strapiId: 2213,
				name: 'Nick Coster',
				slug: 'nick-coster',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2054,
				name: 'Michael Marcel Santos',
				slug: 'michael-marcel-santos',
				position: 'Host',
				company: 'Brick Management Consulting',
				tagline:
					'Helps individuals & organisations shift perspectives to build positive change. Strategy Consulting. Executive Coaching. Organizational Change. LEGO SERIOUS PLAY.',
				bio: null,
				website: null,
				avatarId: 'file_4040',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michael-marcel-santos-21694514/'
					}
				]
			},
			{
				_strapiId: 1931,
				name: 'Rui Catalao',
				slug: 'rui-catalao',
				position: 'Player',
				company: 'Figtree',
				tagline: 'Founder & Brand Strategist at BÁ Studio, Entrepreneur, Associate Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4043',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ruicatalao/'
					}
				]
			},
			{
				_strapiId: 1939,
				name: 'Samuel Santos Caldeirinha',
				slug: 'samuel-santos-caldeirinha',
				position: 'Player',
				company: 'Fidelidade',
				tagline:
					'Agile Coach | Agile Thinker | Scrum | TKP | XP | Lean Agile Coach Professional | CAL-E | ICP-ACC | ICP-ATF',
				bio: null,
				website: null,
				avatarId: 'file_4384',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/samuel-santos-caldeirinha/'
					}
				]
			},
			{
				_strapiId: 2015,
				name: 'Tony Bruce',
				slug: 'tony-bruce',
				position: 'Host',
				company: 'Ada Health',
				tagline: 'Headline',
				bio: null,
				website: null,
				avatarId: 'file_4409',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tonybruce/'
					}
				]
			},
			{
				_strapiId: 1963,
				name: 'Sherry Li',
				slug: 'sherry-li',
				position: 'Player',
				company: 'Endgame',
				tagline: 'Product Owner',
				bio: null,
				website: null,
				avatarId: 'file_4434',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sherry-shuoyu-li/'
					}
				]
			},
			{
				_strapiId: 1981,
				name: 'Stanislas Rech',
				slug: 'stanislas-rech',
				position: 'Player',
				company: 'Le Chainon Digital',
				tagline: 'Agile et Executive Coach, consultant et formateur',
				bio: null,
				website: null,
				avatarId: 'file_4061',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stanislas-rech/'
					}
				]
			},
			{
				_strapiId: 1951,
				name: 'Sara Santos',
				slug: 'sara-santos',
				position: 'Player',
				company: 'kununu',
				tagline: 'Agile Coach || Geek Girls Portugal',
				bio: null,
				website: null,
				avatarId: 'file_4385',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sara-santos-11379111/'
					}
				]
			},
			{
				_strapiId: 2112,
				name: 'José Alonso-Villalobos ',
				slug: 'jose-alonso-villalobos',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5020',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/josevillalobosfarma/'
					}
				]
			},
			{
				_strapiId: 2122,
				name: 'Sofia Soares',
				slug: 'sofia-soares',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5031',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sofia-soares-a25770201/'
					}
				]
			},
			{
				_strapiId: 2139,
				name: 'Zita Assunção',
				slug: 'zita-assuncao',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5054',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/zita-assunção-30783233?originalSubdomain=pt'
					}
				]
			},
			{
				_strapiId: 2028,
				name: 'Vasco Lopes',
				slug: 'vasco-lopes',
				position: 'Player',
				company: null,
				tagline:
					'Executive Coach, Leadership+Sales & Communication Specialist, Quality Systems & Innovation Consultant, Agile Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4062',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vascolopes-thoughtpartner/'
					}
				]
			},
			{
				_strapiId: 2060,
				name: 'Ante Miočić',
				slug: 'ante-miocic',
				position: 'Player',
				company: 'Idiligo - better and predictable online meetings',
				tagline: 'Sales Partner',
				bio: null,
				website: null,
				avatarId: 'file_4788',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ante-mio%C4%8Di%C4%87-4bb67a213/'
					}
				]
			},
			{
				_strapiId: 2058,
				name: 'Lidija Kralj',
				slug: 'lidija-kralj',
				position: 'Player',
				company: 'European Digital Education Hub',
				tagline:
					'Education Analyst & Adviser, EC, CoE, UNESCO expert in data & AI in education, Project leader for reforms in education, Mathematics and Computer Science teacher happy to share knowledge and learn more',
				bio: null,
				website: null,
				avatarId: 'file_4807',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lidijakralj'
					}
				]
			},
			{
				_strapiId: 2113,
				name: 'Marta Parrilla',
				slug: 'marta-parrilla',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5021',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martaparrilla/'
					}
				]
			},
			{
				_strapiId: 1962,
				name: 'Sharon Ní Cheallaigh',
				slug: 'sharon-ni-cheallaigh',
				position: 'Player',
				company: 'Optum Global',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4119',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sharon-n%C3%AD-cheallaigh-4a161212/'
					}
				]
			},
			{
				_strapiId: 1973,
				name: 'Sonja Bausch',
				slug: 'sonja-bausch',
				position: 'Player',
				company: 'Dr. Sonja Bausch LDI',
				tagline: 'catalyzing development & innovation',
				bio: null,
				website: null,
				avatarId: 'file_4148',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dr-sonja-bausch-73813111'
					}
				]
			},
			{
				_strapiId: 1983,
				name: 'Stefan Wolpers',
				slug: 'stefan-wolpers',
				position: 'Player',
				company: 'Berlin Product People',
				tagline: 'Professional Scrum Trainer (PST), Agile Coach, Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4410',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stefanwolpers'
					}
				]
			},
			{
				_strapiId: 1991,
				name: 'Susana Cabrero',
				slug: 'susana-cabrero',
				position: 'Player',
				company: null,
				tagline: 'Trainer and Consultant:Leadership/Mindfulness/Talent',
				bio: null,
				website: null,
				avatarId: 'file_4057',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/susanacabrero/'
					}
				]
			},
			{
				_strapiId: 1571,
				name: 'Eddy Bruin',
				slug: 'eddy-bruin',
				position: 'Mentor',
				company: 'Rabobank',
				tagline: 'Quality engineer, Agile - Test coach, Trainer, Speaker',
				bio: null,
				website: null,
				avatarId: 'file_3758',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/eddybruin/'
					}
				]
			},
			{
				_strapiId: 2016,
				name: 'Tobias Wolf',
				slug: 'tobias-wolf',
				position: 'Player',
				company: 'Mediaan Deutschland GmbH',
				tagline: 'Senior Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4450',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/towolf00/'
					}
				]
			},
			{
				_strapiId: 2024,
				name: 'Vânia Mota e Silva',
				slug: 'vania-mota-e-silva',
				position: 'Player',
				company: 'FABAMAQ',
				tagline: 'Process Manager',
				bio: null,
				website: null,
				avatarId: 'file_4114',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vania-mota-silva/'
					}
				]
			},
			{
				_strapiId: 2034,
				name: 'Virginia Beer',
				slug: 'virginia-beer',
				position: 'Player',
				company: 'Freelance',
				tagline: 'Senior Project Manager, Interims Manager & Organization Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4108',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/virginia-beer-b73a3721/'
					}
				]
			},
			{
				_strapiId: 2043,
				name: 'Wolfram Gewohn',
				slug: 'wolfram-gewohn',
				position: 'Player',
				company: 'Freelancer',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4074',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Wolfram_Gewohn'
					}
				]
			},
			{
				_strapiId: 2059,
				name: 'Ana Sović Kržić',
				slug: 'ana-sovic-krzic',
				position: 'Player',
				company: 'Croatian Robotic Association',
				tagline: 'President of the Croatian Robotic ssociation',
				bio: null,
				website: null,
				avatarId: 'file_4787',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ana-sovi%C4%87-kr%C5%BEi%C4%87-0a33a46/'
					}
				]
			},
			{
				_strapiId: 2138,
				name: 'Carina Mano',
				slug: 'carina-mano',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5516',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/carinamano/'
					}
				]
			},
			{
				_strapiId: 2214,
				name: 'Marcel Elfouani',
				slug: 'marcel-elfouani',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1953,
				name: 'Sara Gomes Santos',
				slug: 'sara-gomes-santos',
				position: 'Player',
				company: 'Smith Micro Software, Inc.',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4387',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/saragomessantos/'
					}
				]
			},
			{
				_strapiId: 2140,
				name: 'Awa Bernard',
				slug: 'awa-bernard',
				position: 'Player',
				company: 'Orion Engineered Carbons',
				tagline: 'Learning & Development, Coaching',
				bio: null,
				website: null,
				avatarId: 'file_5055',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/awa-bernard-0194983/?originalSubdomain=be'
					}
				]
			},
			{
				_strapiId: 2150,
				name: 'Raquel Costa',
				slug: 'raquel-costa',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5066',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anaraquelcosta/'
					}
				]
			},
			{
				_strapiId: 1750,
				name: 'Malte Sussdorff',
				slug: 'malte-sussdorff',
				position: 'Player',
				company: 'cognovis GmbH',
				tagline: 'Agiler Berater und Trainer für Product Ownership',
				bio: null,
				website: null,
				avatarId: 'file_4441',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Malte_Sussdorff'
					}
				]
			},
			{
				_strapiId: 1933,
				name: 'Rui Cardoso Esteves',
				slug: 'rui-cardoso-esteves',
				position: 'Player',
				company: 'FABAMAQ',
				tagline: 'Software Developer | Talent Developer | Human Resources',
				bio: null,
				website: null,
				avatarId: 'file_4055',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ruicardosoesteves/'
					}
				]
			},
			{
				_strapiId: 1943,
				name: 'Samuel Eustachi',
				slug: 'samuel-eustachi',
				position: 'Player',
				company: 'Popwork',
				tagline: 'CTO, Co-Founder',
				bio: null,
				website: null,
				avatarId: 'file_4075',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/samuel-eustachi-4784692/'
					}
				]
			},
			{
				_strapiId: 2081,
				name: 'Alexandre Cuva',
				slug: 'alexandre-cuva',
				position: 'Host',
				company: 'Socragile',
				tagline: null,
				bio: null,
				website: 'https://www.socraagile.ch',
				avatarId: 'file_4839',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cuvaalex'
					}
				]
			},
			{
				_strapiId: 2091,
				name: 'Paz Sánchez-Vallejo',
				slug: 'paz-sanchez-vallejo',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4890',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paz-s%C3%A1nchez-vallejo-bey-0a417325/'
					}
				]
			},
			{
				_strapiId: 2215,
				name: 'Michael Rizzuto',
				slug: 'michael-rizzuto',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2151,
				name: 'Pedro Mota',
				slug: 'pedro-mota',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5067',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pedro-mouta-091a831a/'
					}
				]
			},
			{
				_strapiId: 1958,
				name: 'Sergiy Nemchenko',
				slug: 'sergiy-nemchenko',
				position: 'Player',
				company: null,
				tagline: 'Scrum Master / Project Manager',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-SergiyNemchenko.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_4392',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sergiy-nemchenko/'
					}
				]
			},
			{
				_strapiId: 2123,
				name: 'Maria Barata Fernandes',
				slug: 'maria-barata-fernandes',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5032',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2114,
				name: 'Andrea Betancur',
				slug: 'andrea-betancur',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5022',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andrea-betancur-81454165/'
					}
				]
			},
			{
				_strapiId: 2141,
				name: 'Daniela Schmitt',
				slug: 'daniela-schmitt',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1778,
				name: 'Margot van Brakel',
				slug: 'margot-van-brakel',
				position: 'Player',
				company: 'Vereniging Verpleegkundigen & Verzorgenden',
				tagline: 'Vooruitganger & change maker',
				bio: null,
				website: null,
				avatarId: 'file_3794',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/margotvanbrakel/'
					}
				]
			},
			{
				_strapiId: 1938,
				name: 'Sameer Baheti',
				slug: 'sameer-baheti',
				position: 'Player',
				company: 'Lloyds Banking group via Wipro',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4379',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sameerbaheti/'
					}
				]
			},
			{
				_strapiId: 1948,
				name: 'Sandra Téllez',
				slug: 'sandra-tellez',
				position: 'Player',
				company: 'Santander Technologia',
				tagline: 'Certified Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4049',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sandra-t%C3%A9llez-4b822a4a/'
					}
				]
			},
			{
				_strapiId: 1967,
				name: 'Sirintra Jittrawong',
				slug: 'sirintra-jittrawong',
				position: 'Player',
				company: 'www.kidnokkrob360.com',
				tagline: 'Branding and Marketing strategy expert',
				bio: null,
				website: null,
				avatarId: 'file_4066',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ms-sirintra-jittrawong-2b249a30/'
					}
				]
			},
			{
				_strapiId: 1978,
				name: 'Soraia Sequeira',
				slug: 'soraia-sequeira',
				position: 'Player',
				company: null,
				tagline: 'Services Business Manager <> Astrology Lover <> Personal Development Student',
				bio: null,
				website: null,
				avatarId: 'file_4400',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/soraiasequeira/'
					}
				]
			},
			{
				_strapiId: 1997,
				name: 'Sven Röpstorff',
				slug: 'sven-ropstorff',
				position: 'Player',
				company: 'Transparent Management',
				tagline: 'Agile & Co-Active Coach',
				bio: null,
				website: null,
				avatarId: 'file_4106',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/svenroepstorff/'
					}
				]
			},
			{
				_strapiId: 1987,
				name: 'Steffen Moldenhauer',
				slug: 'steffen-moldenhauer',
				position: 'Player',
				company: 'moldenhauer-partner.de',
				tagline: 'Partner, Business & Executive Coach / Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4058',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/steffen-moldenhauer-82481211/'
					}
				]
			},
			{
				_strapiId: 2007,
				name: 'Thomas Staub',
				slug: 'thomas-staub',
				position: 'Player',
				company: 'Credit Suisse',
				tagline: 'Agility and Innovation, Certified Scrum Product Owner , Prozess and API Design',
				bio: null,
				website: null,
				avatarId: 'file_4064',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/thomas-staub-0b26245/'
					}
				]
			},
			{
				_strapiId: 2017,
				name: 'Tim Roelse',
				slug: 'tim-roelse',
				position: 'Player',
				company: 'Sentia',
				tagline: 'Jedi Master',
				bio: null,
				website: null,
				avatarId: 'file_4078',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/timroelse'
					}
				]
			},
			{
				_strapiId: 2026,
				name: 'Véronique Laisne',
				slug: 'veronique-laisne',
				position: 'Player',
				company: 'Exoplanete, innovation consulting firm',
				tagline: 'Co-founder',
				bio: null,
				website: null,
				avatarId: 'file_4424',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/veroniquelaisne/'
					}
				]
			},
			{
				_strapiId: 2037,
				name: 'Vito Franco',
				slug: 'vito-franco',
				position: 'Player',
				company: 'Critical TechWorks - A BMW Group and Critical Software Company',
				tagline: 'Head of Interactions',
				bio: null,
				website: null,
				avatarId: 'file_4440',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vitor-hugo-franco-21194955'
					}
				]
			},
			{
				_strapiId: 1494,
				name: 'Catarina Cabanelas Pereira',
				slug: 'catarina-cabanelas-pereira',
				position: 'Player',
				company: null,
				tagline:
					'Psychologist -HR - Training and Development specialist | Educational, Vocational and Career Counselling | free lancer',
				bio: null,
				website: null,
				avatarId: 'file_3696',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/catarina-cabanelas-pereira-753b453/'
					}
				]
			},
			{
				_strapiId: 2077,
				name: 'Snjezana Merdzan Cuic',
				slug: 'snjezana-merdzan-cuic',
				position: 'Player',
				company: null,
				tagline: 'Just Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4805',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/snjezana-merdzan-cuic-0173014b/'
					}
				]
			},
			{
				_strapiId: 1844,
				name: 'Mónica Abdurehaman',
				slug: 'monica-abdurehaman',
				position: 'Player',
				company: 'Freelance',
				tagline:
					"Workshop Designer and Facilitator for busy business owners and teams. I help you get things done 🤓 Check monicaabdurehaman.com if you'd like to know more",
				bio: null,
				website: null,
				avatarId: 'file_4350',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/monica-abdurehaman'
					}
				]
			},
			{
				_strapiId: 1526,
				name: 'Claudia Palmeiro',
				slug: 'claudia-palmeiro',
				position: 'Player',
				company: 'José Avillez Group',
				tagline: 'Training & Communication',
				bio: null,
				website: null,
				avatarId: 'file_3681',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/claudiapalmeiro/'
					}
				]
			},
			{
				_strapiId: 1581,
				name: 'Elsa Wormeck',
				slug: 'elsa-wormeck',
				position: 'Host',
				company: 'www.corecreate.de',
				tagline: 'corecreate | communications',
				bio: null,
				website: null,
				avatarId: 'file_4001',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elsawormeck/'
					}
				]
			},
			{
				_strapiId: 2216,
				name: 'Aimee Sics',
				slug: 'aimee-sics',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5161',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2092,
				name: 'Helena Perez',
				slug: 'helena-perez',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4892',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/helena-perez-vazquez-909b4ba/'
					}
				]
			},
			{
				_strapiId: 1990,
				name: 'Sufiz Mohd Suffian',
				slug: 'sufiz-mohd-suffian',
				position: 'Mentor',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4407',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sufizsuffian/'
					}
				]
			},
			{
				_strapiId: 2156,
				name: 'Marcel Lahaije',
				slug: 'marcel-lahaije',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5073',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcellahaije/'
					}
				]
			},
			{
				_strapiId: 2127,
				name: 'Sandra Matos',
				slug: 'sandra-matos',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5037',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sandramatos/'
					}
				]
			},
			{
				_strapiId: 2142,
				name: 'Sophie Frey',
				slug: 'sophie-frey',
				position: 'Player',
				company: 'SOBAJ Consulting',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5056',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sophie-frey/'
					}
				]
			},
			{
				_strapiId: 2152,
				name: 'Susana Santos',
				slug: 'susana-santos',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5068',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://pt.linkedin.com/in/susana-santos-4016787'
					}
				]
			},
			{
				_strapiId: 2061,
				name: 'Davor Kovač',
				slug: 'davor-kovac',
				position: 'Player',
				company: null,
				tagline: 'Agile leader®, Professional Scrum Master® & Program/Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_4789',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/davorkovac/'
					}
				]
			},
			{
				_strapiId: 2067,
				name: 'Kristina Soric',
				slug: 'kristina-soric',
				position: 'Player',
				company: 'Luyouma',
				tagline:
					'PhD, Professor at Rochester Institute of Technology Croatia/Owner at Luyouma Business Advisory Service/Supply Chain Management',
				bio: null,
				website: null,
				avatarId: 'file_4795',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kristina-soric-0369bb79/'
					}
				]
			},
			{
				_strapiId: 2068,
				name: 'Maja Uršić Staraj',
				slug: 'maja-ursic-staraj',
				position: 'Player',
				company: 'RECEPT - Regional Competence Center',
				tagline: 'Innovation coordinator & Coach',
				bio: null,
				website: null,
				avatarId: 'file_4796',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/maja-ur%C5%A1i%C4%87-staraj-47979b94/'
					}
				]
			},
			{
				_strapiId: 1971,
				name: 'Sónia Won',
				slug: 'sonia-won',
				position: 'Player',
				company: 'EDP',
				tagline: 'Agile Coach & Agile Competence Centre Responsible',
				bio: null,
				website: null,
				avatarId: 'file_4396',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sonia-won/'
					}
				]
			},
			{
				_strapiId: 1980,
				name: 'Stefan Stahl',
				slug: 'stefan-stahl',
				position: 'Player',
				company: 'Future Now Consultants',
				tagline:
					'Standup Consultant, Mood Strategist, Liberating Structures Practitioner, Change Booster, Business Chart Rebel',
				bio: null,
				website: null,
				avatarId: 'file_4404',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/stefan-stahl-a6b24b83/'
					}
				]
			},
			{
				_strapiId: 2000,
				name: 'Suleander Zahn',
				slug: 'suleander-zahn',
				position: 'Player',
				company: null,
				tagline: 'Agile Coach & Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4116',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/suleander/'
					}
				]
			},
			{
				_strapiId: 2010,
				name: 'Thorsten Sturm',
				slug: 'thorsten-sturm',
				position: 'Player',
				company: 'Thorsten Sturm IT Consulting',
				tagline: 'Agile and Lean Coach, Project Manager, PMP',
				bio: null,
				website: null,
				avatarId: 'file_4110',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/thorsten-sturm-agixp/'
					}
				]
			},
			{
				_strapiId: 2022,
				name: 'Ursula Simo',
				slug: 'ursula-simo',
				position: 'Host',
				company: 'twinformatics GmbH',
				tagline:
					'Empowering People, Promoting Potential, Sharing Knowledge, Constantly changing the world!',
				bio: null,
				website: null,
				avatarId: 'file_4065',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ursulasimo/'
					}
				]
			},
			{
				_strapiId: 2031,
				name: 'Vincent Masson Deblaize',
				slug: 'vincent-masson-deblaize',
				position: 'Player',
				company: 'Microsoft',
				tagline: 'Training & Talent Development Manager',
				bio: null,
				website: null,
				avatarId: 'file_4073',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vincent-masson-deblaize-5595358b/'
					}
				]
			},
			{
				_strapiId: 2042,
				name: 'Wout van der Weijden',
				slug: 'wout-van-der-weijden',
				position: 'Player',
				company: 'ING',
				tagline: 'Design Strategist',
				bio: null,
				website: null,
				avatarId: 'file_4094',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/woutvanderweijden/'
					}
				]
			},
			{
				_strapiId: 2199,
				name: 'Atul Jain ',
				slug: 'atul-jain',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5149',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/atul-jain-918b978'
					}
				]
			},
			{
				_strapiId: 2082,
				name: 'Sylvia Schuster',
				slug: 'sylvia-schuster',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4849',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sylvia-schuster/'
					}
				]
			},
			{
				_strapiId: 1437,
				name: 'Angela Barroso',
				slug: 'angela-barroso',
				position: 'Player',
				company: null,
				tagline: 'Creative Empower/ Team Leader - helping teams to learn, grow, and develop',
				bio: null,
				website: null,
				avatarId: 'file_4854',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/angelabarroso/'
					}
				]
			},
			{
				_strapiId: 1625,
				name: 'Gemma Barrera',
				slug: 'gemma-barrera',
				position: 'Player',
				company: 'KUDOS México',
				tagline: 'Corporate Training Manager and Coach',
				bio: null,
				website: null,
				avatarId: 'file_3776',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gemmabarrera/'
					}
				]
			},
			{
				_strapiId: 1372,
				name: 'Elvira Bühlmann',
				slug: 'elvira-buhlmann',
				position: 'Host',
				company: 'www.loco-motiv.ch',
				tagline: 'Socio-cultural animator FH, organization developer WILOP iA',
				bio: '<p>Elvira Bühlmann worked for over 8 years in open child and youth work. She is a specialist in the promotion of mental health and prevention of bullying, depression / suicide and addiction. </p>\n<p>As part of her job at Berner Gesundheit, she supports parents and other caregivers in making children and adolescents mentally strong. </p>\n<p>She is a presenter with passion, has an eagle look for the big picture and the details as well as fine antennas for the needs of the other person .</p>',
				website: null,
				avatarId: 'file_3876',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2179,
				name: 'Sunny (JY) L',
				slug: 'sunny-jy-l',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5112',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sunnysardine/'
					}
				]
			},
			{
				_strapiId: 1689,
				name: 'Jorge Bicho',
				slug: 'jorge-bicho',
				position: 'Player',
				company: 'Upturn - Coaching and Development Consultant',
				tagline: 'Facilitator, Trainer and Coach ACC(ICF)',
				bio: null,
				website: null,
				avatarId: 'file_3962',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jorgebicho/'
					}
				]
			},
			{
				_strapiId: 2128,
				name: 'Gio Montaniel Buenvenida',
				slug: 'gio-buenvenida',
				position: 'Player',
				company: 'CYPHER Learning',
				tagline: 'Sales Development/ Partner Engagement Manager',
				bio: '<p>Gio is a versatile Multimedia Arts professional. He was part of the pioneering batch of the Multimedia Program at CPU and has been exploring the tech world for the past two years. Gio assists organizations by managing and solving problems related to upskilling, reskilling, and cross-skilling their employees and students. He takes a consultative approach and emphasizes the value of our e-learning platform in this digital age transition. Gio is highly active and constantly explores various aspects of professional growth without fear of trying new things.</p>',
				website: null,
				avatarId: 'file_5038',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gio-buenvenida/'
					}
				]
			},
			{
				_strapiId: 1791,
				name: 'Maria João Pereira',
				slug: 'maria-joao-pereira',
				position: 'Player',
				company: 'Fidelidade',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4095',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/maria-jo%C3%A3o-pereira-35260487/'
					}
				]
			},
			{
				_strapiId: 2049,
				name: 'Aleksandar Gavrilović',
				slug: 'aleksandar-gavrilovic',
				position: 'Host',
				company: 'Croatian Game Developers Alliance',
				tagline: 'Secretary of CGDA (Cluster of Croatian Game Developers)',
				bio: null,
				website: null,
				avatarId: 'file_4808',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/agavrilovic'
					}
				]
			},
			{
				_strapiId: 2163,
				name: 'Hugo Santos',
				slug: 'hugo-santos',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5080',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hugofsantos/'
					}
				]
			},
			{
				_strapiId: 2093,
				name: 'Julio Mecerreyes',
				slug: 'julio-mecerreyes',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4893',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/julio-mecerreyes-a66a22100/'
					}
				]
			},
			{
				_strapiId: 2143,
				name: 'Li Fang',
				slug: 'li-fang',
				position: 'Player',
				company: 'Cognizant',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5057',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/li-fang-b18581a2/'
					}
				]
			},
			{
				_strapiId: 2062,
				name: 'Djurdja Arsic',
				slug: 'djurdja-arsic',
				position: 'Player',
				company: 'Growit Agile',
				tagline: 'Building the Unique Agile Path for Your Organisation | Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4790',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/djurdja-arsic/'
					}
				]
			},
			{
				_strapiId: 2063,
				name: 'Hans de Raad',
				slug: 'hans-de-raad',
				position: 'Player',
				company: 'OpenNovations',
				tagline: 'Owner',
				bio: null,
				website: null,
				avatarId: 'file_4791',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hansderaad/'
					}
				]
			},
			{
				_strapiId: 2064,
				name: 'Irma Giling',
				slug: 'irma-giling',
				position: 'Player',
				company: null,
				tagline: 'I build more vital healthcare organizations with the power of Serious Play',
				bio: null,
				website: null,
				avatarId: 'file_4792',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/irmagiling/'
					}
				]
			},
			{
				_strapiId: 2065,
				name: 'Ivana Mikleuš Stojnić',
				slug: 'ivana-mikleus-stojnic',
				position: 'Player',
				company: 'Part Wolf',
				tagline: 'Digital Manager',
				bio: null,
				website: null,
				avatarId: 'file_4793',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ivana-mikleus-stojnic/'
					}
				]
			},
			{
				_strapiId: 1777,
				name: 'Maria García Baptista',
				slug: 'maria-garcia-baptista',
				position: 'Player',
				company: 'Enciende la Luz',
				tagline: 'Organizational development cosultant and talent management',
				bio: null,
				website: null,
				avatarId: 'file_3755',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mcgarciabaptista/'
					}
				]
			},
			{
				_strapiId: 2069,
				name: 'Maria Christina Cleary',
				slug: 'maria-christina-cleary',
				position: 'Player',
				company: null,
				tagline: 'Musician, harpist, teacher, coach, researcher',
				bio: null,
				website: null,
				avatarId: 'file_4797',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/MariaChristinaCleary/'
					}
				]
			},
			{
				_strapiId: 2070,
				name: 'Matija Šaler',
				slug: 'matija-saler',
				position: 'Player',
				company: 'Devōt',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_4798',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/schallermatija/'
					}
				]
			},
			{
				_strapiId: 2073,
				name: 'Nora P. Buklevska',
				slug: 'nora-p-buklevska',
				position: 'Player',
				company: null,
				tagline: 'Agilist | Mentor | Larper',
				bio: null,
				website: null,
				avatarId: 'file_4801',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/norabukle/'
					}
				]
			},
			{
				_strapiId: 2165,
				name: 'Diane Gombart ',
				slug: 'diane-gombart',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5082',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dianegombart/'
					}
				]
			},
			{
				_strapiId: 1417,
				name: 'Andrada Tepei',
				slug: 'andrada-tepei',
				position: 'Player',
				company: '3Pillar Global',
				tagline: 'Talent Engagement Partner',
				bio: null,
				website: null,
				avatarId: 'file_4334',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andradatepei/'
					}
				]
			},
			{
				_strapiId: 1457,
				name: 'Arthur Micoulet',
				slug: 'arthur-micoulet',
				position: 'Player',
				company: 'PALO IT',
				tagline: 'Product Owner',
				bio: null,
				website: null,
				avatarId: 'file_3653',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/arthur-micoulet-16a11a35/'
					}
				]
			},
			{
				_strapiId: 2153,
				name: 'Jéssica Barraso',
				slug: 'jessica-barraso',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5069',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jessicasqbarroso'
					}
				]
			},
			{
				_strapiId: 2144,
				name: 'Annette Behrendt',
				slug: 'annette-behrendt',
				position: 'Player',
				company: null,
				tagline: 'Liberating Structures',
				bio: null,
				website: null,
				avatarId: 'file_5058',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/annettebehrendt/'
					}
				]
			},
			{
				_strapiId: 2184,
				name: 'Ferzeen Anis',
				slug: 'ferzeen-anis',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5122',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ferzeen/'
					}
				]
			},
			{
				_strapiId: 2129,
				name: 'Hugo Gonçalves ',
				slug: 'hugo-goncalves',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5039',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hgoncalves'
					}
				]
			},
			{
				_strapiId: 2154,
				name: 'Joana Mirradinho',
				slug: 'joana-mirradinho',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5070',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joana-mirradinho'
					}
				]
			},
			{
				_strapiId: 2116,
				name: 'Sonsoles Morales',
				slug: 'sonsoles-morales',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5024',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sonsoles-morales-48a1682/'
					}
				]
			},
			{
				_strapiId: 2173,
				name: 'Leo Davenne',
				slug: 'leo-davenne',
				position: 'Player',
				company: 'Swisscom',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5096',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/leodavesne/'
					},
					{
						type: '',
						url: ''
					}
				]
			},
			{
				_strapiId: 1498,
				name: 'Cédric Boyer',
				slug: 'cedric-boyer',
				position: 'Player',
				company: 'efront Luxembourg',
				tagline: 'Project manager',
				bio: null,
				website: null,
				avatarId: 'file_4083',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/c%C3%A9dric-boyer-0272405a/'
					}
				]
			},
			{
				_strapiId: 1367,
				name: 'Astrid Perellón',
				slug: 'astrid-perellon',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_3641',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1585,
				name: 'Eric Ferrot',
				slug: 'eric-ferrot',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Agile Coach',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-EricFerrot.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_3907',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/eferrot/'
					}
				]
			},
			{
				_strapiId: 2071,
				name: 'Milos Blagojevic',
				slug: 'milos-blagojevic',
				position: 'Player',
				company: 'Agencija za razvoj i saradnju CEREBRA Banja Luka',
				tagline:
					'NLP Trainer | Educator | Blogger | Organizer | Facilitator | Youth (information) worker',
				bio: null,
				website: null,
				avatarId: 'file_4799',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/milos-blagojevic/'
					}
				]
			},
			{
				_strapiId: 2095,
				name: 'Marisa Rey',
				slug: 'marisa-rey',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4895',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marisareymartin/'
					}
				]
			},
			{
				_strapiId: 2221,
				name: 'Jeganathan Palanisamy',
				slug: 'jeganathan-palanisamy',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2104,
				name: 'Ana María Gozalbo',
				slug: 'ana-maria-gozalbo',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4905',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anagozalbo/'
					}
				]
			},
			{
				_strapiId: 1747,
				name: 'Luisa Cruz',
				slug: 'luisa-cruz',
				position: 'Player',
				company: 'Fidelidade',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4354',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/luisa-cruz-8a308814/'
					}
				]
			},
			{
				_strapiId: 2392,
				name: 'Filipa Lacerda',
				slug: 'filipa-lacerda',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5512',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/filipabesteirolacerda/'
					}
				]
			},
			{
				_strapiId: 2117,
				name: 'Iván Cima García',
				slug: 'ivan-cima-garcia',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5025',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/iv%C3%A1n-cima-garc%C3%ADa-35463b59/'
					}
				]
			},
			{
				_strapiId: 2130,
				name: 'Jordi Martin',
				slug: 'jordi-martin',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5040',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jordimartinsimon/'
					}
				]
			},
			{
				_strapiId: 1819,
				name: 'Mercedes Hoss',
				slug: 'mercedes-hoss',
				position: 'Player',
				company: 'Off-time GmbH',
				tagline: 'Business Model Coach + LEGO® SERIOUS PLAY® Facilitator + Workshop designer',
				bio: null,
				website: null,
				avatarId: 'file_3934',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mercedeshossweis/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Offtimeeu'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Mercedes_Hoss'
					}
				]
			},
			{
				_strapiId: 1685,
				name: 'Johannes Starke',
				slug: 'johannes-starke',
				position: 'Player',
				company: 'Johannes Starke',
				tagline: 'Product Manager Learning / E-Learning Expert',
				bio: null,
				website: null,
				avatarId: 'file_3747',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/johannes-starke/'
					}
				]
			},
			{
				_strapiId: 1913,
				name: 'Regina Keßler',
				slug: 'regina-kessler',
				position: 'Player',
				company: 'KMS Mobility Solutions GmbH',
				tagline: 'Communication | Mediation | Coaching',
				bio: null,
				website: null,
				avatarId: 'file_4363',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/regina-kessler'
					}
				]
			},
			{
				_strapiId: 1508,
				name: 'Cédric Tamavond',
				slug: 'cedric-tamavond',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Agile Coach / Product Owner / Trainer',
				bio: null,
				website: null,
				avatarId: 'file_3687',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cedric-tamavond-b30ab917/'
					}
				]
			},
			{
				_strapiId: 2185,
				name: 'Chris Morgan',
				slug: 'chris-morgan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5123',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/chris-morgan-olympian/'
					}
				]
			},
			{
				_strapiId: 2200,
				name: 'Ravindran K',
				slug: 'ravindran-k',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5150',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ravindran-k-a75496108'
					}
				]
			},
			{
				_strapiId: 2174,
				name: 'Arul John Peter',
				slug: 'arul-john-peter',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5107',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/arul-john-peter/'
					}
				]
			},
			{
				_strapiId: 2145,
				name: 'Tanja Fischer',
				slug: 'tanja-fischer',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5095',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tanja-fischer-099ab71b3/'
					}
				]
			},
			{
				_strapiId: 2166,
				name: 'Leila Simpson',
				slug: 'leila-simpson',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5084',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/leila-simpson/overlay/photo/'
					}
				]
			},
			{
				_strapiId: 1640,
				name: 'Hector Coutino',
				slug: 'hector-coutino',
				position: 'Player',
				company: 'Playful',
				tagline: 'Design Thinker, CXer & Business Innovation Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3883',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hectorcoutino/'
					}
				]
			},
			{
				_strapiId: 1755,
				name: 'Marc Wijnberg',
				slug: 'marc-wijnberg',
				position: 'Player',
				company: null,
				tagline: '► Agile BI Project Manager ►BI Program Manager ►BI Advisor ► Trainer',
				bio: null,
				website: null,
				avatarId: 'file_4056',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mwijnberg/'
					}
				]
			},
			{
				_strapiId: 2072,
				name: 'Miroslav Wranka',
				slug: 'miroslav-wranka',
				position: 'Player',
				company: 'Terrible Creations',
				tagline: 'Lead Game Designer',
				bio: null,
				website: null,
				avatarId: 'file_4800',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mwranka/'
					}
				]
			},
			{
				_strapiId: 2074,
				name: 'Ozren Crnogorac',
				slug: 'ozren-crnogorac',
				position: 'Player',
				company: 'One Backlog',
				tagline: 'Agile Coach / Scrum master',
				bio: null,
				website: null,
				avatarId: 'file_4802',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ozrenc/'
					}
				]
			},
			{
				_strapiId: 2075,
				name: 'Patricia Verploegh Chassé',
				slug: 'patricia-verploegh-chasse',
				position: 'Player',
				company: 'CIBG',
				tagline: 'ICAgile Coach | Trainer | SAFe SPC | Facilitator LEGO® SERIOUS PLAY®methode',
				bio: null,
				website: null,
				avatarId: 'file_4803',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/patriciaverploeghchasse/'
					}
				]
			},
			{
				_strapiId: 2076,
				name: 'Petar Belavic',
				slug: 'petar-belavic',
				position: 'Player',
				company: 'iOLAP',
				tagline: 'Advanced Certified Scrum Master | Developer Whisperer',
				bio: null,
				website: null,
				avatarId: 'file_4804',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/petar-belavic/'
					}
				]
			},
			{
				_strapiId: 1416,
				name: 'Ana Kyra Bekš',
				slug: 'ana-kyra-beks',
				position: 'Player',
				company: 'Servis 8',
				tagline:
					'Putting design thinking into design doing. Design researcher, facilitator, customer experience designer, game designer',
				bio: null,
				website: null,
				avatarId: 'file_4331',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ana-kyra-bek%C5%A1-6b70b65b/'
					}
				]
			},
			{
				_strapiId: 1422,
				name: 'Andrea Grijalba',
				slug: 'andrea-grijalba',
				position: 'Player',
				company: 'Neomobile',
				tagline: 'Head of Business Development/MBA',
				bio: null,
				website: null,
				avatarId: 'file_3611',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andrea-grijalba-a2514b9/'
					}
				]
			},
			{
				_strapiId: 1472,
				name: 'Beata Padlo',
				slug: 'beata-padlo',
				position: 'Player',
				company: 'self-employed',
				tagline:
					'I guide you through the complexity of teamwork ✨Agile Coach✨ Organizations ✨Teams ✨ Leadership✨',
				bio: null,
				website: null,
				avatarId: 'file_4131',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/beatapadlo'
					}
				]
			},
			{
				_strapiId: 1961,
				name: 'Shadaitul Intan',
				slug: 'shadaitul-intan',
				position: 'Host',
				company: 'Profound Learning Solutions',
				tagline: 'Communication Coach | NLP Practitioner | Founding Member Top Voices Malaysia',
				bio: null,
				website: null,
				avatarId: 'file_4052',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/shadaitulintan/'
					}
				]
			},
			{
				_strapiId: 2096,
				name: 'María Belén de Gracia Campa',
				slug: 'maria-belen-de-gracia-campa',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4896',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mar%C3%ADa-bel%C3%A9n-de-gracia-campa/'
					}
				]
			},
			{
				_strapiId: 1718,
				name: 'Kerstin Biedermann',
				slug: 'kerstin-biedermann',
				position: 'Player',
				company: 'Robert Bosch GmbH',
				tagline: 'Quality Key Account Manager',
				bio: null,
				website: null,
				avatarId: 'file_3741',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Kerstin_Biedermann2'
					}
				]
			},
			{
				_strapiId: 2186,
				name: 'Suzanne Rose',
				slug: 'suzanne-rose',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5124',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/suzanne-rose-facilitate-with-flair'
					}
				]
			},
			{
				_strapiId: 2245,
				name: 'Gisele García',
				slug: 'gisele-garcia',
				position: 'Player',
				company: 'masDdos',
				tagline: null,
				bio: null,
				website: 'https://masddos.com/',
				avatarId: 'file_5210',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gis%C3%A8le-garcia-749b647/'
					}
				]
			},
			{
				_strapiId: 1608,
				name: 'Filippo Colombo Barzaghini',
				slug: 'filippo-colombo-barzaghini',
				position: 'Player',
				company: 'Business Integration Partners',
				tagline: 'Enterprise Architect',
				bio: null,
				website: null,
				avatarId: 'file_3963',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/filippo-colombo-barzaghini-0115b521/'
					}
				]
			},
			{
				_strapiId: 1725,
				name: 'Laurent Favre',
				slug: 'laurent-favre',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Agile Promoter',
				bio: null,
				website: null,
				avatarId: 'file_3726',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/i4claurentfavre/'
					}
				]
			},
			{
				_strapiId: 1448,
				name: 'Ant Gardiner',
				slug: 'ant-gardiner',
				position: 'Host',
				company: null,
				tagline: 'Agile Coach | LEGO® SERIOUS PLAY facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3640',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ant-gardiner-9521796/'
					}
				]
			},
			{
				_strapiId: 2333,
				name: 'Andrea Sacco',
				slug: 'andrea-sacco',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5372',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andrea-sacco-lifeinsight/'
					}
				]
			},
			{
				_strapiId: 1557,
				name: 'Diana González Bermejo',
				slug: 'diana-gonzalez-bermejo',
				position: 'Player',
				company: 'Spanish Agency of Medicines (AEMPS)',
				tagline: 'Clinical Assessor. Spanish Agency of Medicines (AEMPS)',
				bio: null,
				website: null,
				avatarId: 'file_3890',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/diana-gonz%C3%A1lez-bermejo-01015250/'
					}
				]
			},
			{
				_strapiId: 1656,
				name: 'Isabel Bueno',
				slug: 'isabel-bueno',
				position: 'Player',
				company: 'Grupo GFT',
				tagline: 'Profesional de Consultoría de estrategia y operaciones',
				bio: null,
				website: null,
				avatarId: 'file_4022',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/isabel-bueno-17115b78/'
					}
				]
			},
			{
				_strapiId: 1490,
				name: 'Carla Carvalho',
				slug: 'carla-carvalho',
				position: 'Player',
				company: null,
				tagline: 'Senior Interaction Designer',
				bio: null,
				website: null,
				avatarId: 'file_3955',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cmcarvalho/'
					}
				]
			},
			{
				_strapiId: 1537,
				name: 'Damien Hick',
				slug: 'damien-hick',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Consultant ',
				bio: null,
				website: null,
				avatarId: 'file_3802',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hickdamien/'
					}
				]
			},
			{
				_strapiId: 1694,
				name: 'Juan Campos',
				slug: 'juan-campos',
				position: 'Player',
				company: 'Stigmergy',
				tagline: 'Co-Founder',
				bio: null,
				website: null,
				avatarId: 'file_3897',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/juanrcampos/'
					}
				]
			},
			{
				_strapiId: 1833,
				name: 'Mickaël Gandecki',
				slug: 'mickael-gandecki',
				position: 'Player',
				company: 'myfood.eu',
				tagline: 'Managing Partner',
				bio: null,
				website: null,
				avatarId: 'file_3744',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mickaelgandecki/'
					}
				]
			},
			{
				_strapiId: 1469,
				name: 'Barbara Hallama',
				slug: 'barbara-hallama',
				position: 'Player',
				company: 'https://barbara.hallama.org',
				tagline: 'ScrumMaster for the people',
				bio: null,
				website: null,
				avatarId: 'file_3652',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hallama/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Barbnerdy'
					}
				]
			},
			{
				_strapiId: 1883,
				name: 'Paulo Nunes de Abreu',
				slug: 'paulo-nunes-de-abreu',
				position: 'Player',
				company: null,
				tagline: 'Get the collaborative touch',
				bio: null,
				website: null,
				avatarId: 'file_3784',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nunesdea/'
					}
				]
			},
			{
				_strapiId: 1499,
				name: 'Cedric Rochet',
				slug: 'cedric-rochet',
				position: 'Player',
				company: 'Bâloise Assurances Luxembourg',
				tagline: 'Chief Innovation Officer',
				bio: null,
				website: null,
				avatarId: 'file_3667',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rochet/'
					}
				]
			},
			{
				_strapiId: 1458,
				name: 'Aude Itting',
				slug: 'aude-itting',
				position: 'Player',
				company: 'Aude Itting - Culture & Communication',
				tagline: 'Consultant in communication and training',
				bio: null,
				website: null,
				avatarId: 'file_3858',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/aude-itting-580b015'
					}
				]
			},
			{
				_strapiId: 1569,
				name: 'Dörte Müller',
				slug: 'dorte-muller',
				position: 'Player',
				company: '55BirchStreet.com',
				tagline: 'Managerin & Agile Transition Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4006',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/d%C3%B6rte-m%C3%BCller-200442138/'
					}
				]
			},
			{
				_strapiId: 1760,
				name: 'Macri Torres',
				slug: 'macri-torres',
				position: 'Player',
				company: 'Palo IT',
				tagline: 'Head of UX and innovation by design',
				bio: null,
				website: null,
				avatarId: 'file_3991',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/macri-torres-b72ba689/'
					}
				]
			},
			{
				_strapiId: 1598,
				name: 'Fabio Asnicar',
				slug: 'fabio-asnicar',
				position: 'Player',
				company: 'ESTECO',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4337',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fabioasnicar/'
					}
				]
			},
			{
				_strapiId: 1578,
				name: 'Elvira López Rubio',
				slug: 'elvira-lopez-rubio',
				position: 'Player',
				company: 'UST-GLOBAL',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3795',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elvira-l%C3%B3pez-rubio-b5963912a/'
					}
				]
			},
			{
				_strapiId: 1851,
				name: 'Neha Thaker',
				slug: 'neha-thaker',
				position: 'Host',
				company: 'CIBC',
				tagline:
					'Agile Lean Practitioner | ICP-ACC | PMI-ACP | CSM | SAFe 4. SSM | Lean Yellow Belt',
				bio: null,
				website: null,
				avatarId: 'file_3756',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/neha-thaker/'
					}
				]
			},
			{
				_strapiId: 1739,
				name: 'Louis Tinant',
				slug: 'louis-tinant',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3837',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/louis-tinant-5a24a288/'
					}
				]
			},
			{
				_strapiId: 1635,
				name: 'Gonçalo Valverde',
				slug: 'goncalo-valverde',
				position: 'Player',
				company: 'VAKT',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4013',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/goncalovalverde/'
					}
				]
			},
			{
				_strapiId: 1746,
				name: 'Lloyd Jones',
				slug: 'lloyd-jones',
				position: 'Host',
				company: 'Motability Operations',
				tagline: 'An agile coach and team lead with 11 years industry experience',
				bio: null,
				website: null,
				avatarId: 'file_3788',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/l0p3zj0n3s'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/l0p3zj0n3s'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lloyd-jones-a82ab721'
					}
				]
			},
			{
				_strapiId: 1767,
				name: 'Marcel Makkai',
				slug: 'marcel-makkai',
				position: 'Player',
				company: 'iteratec GmbH',
				tagline: 'Student, IT-Management und -Consulting, Universität Hamburg',
				bio: null,
				website: null,
				avatarId: 'file_3782',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Marcel_Makkai/cv'
					}
				]
			},
			{
				_strapiId: 1893,
				name: 'Peggy Tarillon',
				slug: 'peggy-tarillon',
				position: 'Player',
				company: 'Intech',
				tagline: 'Consultant Expert',
				bio: null,
				website: null,
				avatarId: 'file_3779',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ptarillon/'
					}
				]
			},
			{
				_strapiId: 1781,
				name: 'Marco Matera',
				slug: 'marco-matera',
				position: 'Player',
				company: null,
				tagline: 'Systemic Solution Focus Coach',
				bio: null,
				website: null,
				avatarId: 'file_3949',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marcomatera/'
					}
				]
			},
			{
				_strapiId: 1923,
				name: 'Robert Misch',
				slug: 'robert-misch',
				position: 'Player',
				company: 'gutefrage.net',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4047',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/robertmisch/'
					}
				]
			},
			{
				_strapiId: 1874,
				name: 'Ohyoon Kwon',
				slug: 'ohyoon-kwon',
				position: 'Player',
				company: 'www.weq.io',
				tagline: 'Founder WeQ',
				bio: null,
				website: null,
				avatarId: 'file_4373',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ohyoonkwon/'
					}
				]
			},
			{
				_strapiId: 1588,
				name: 'Enrique Jiménez Blázquez',
				slug: 'enrique-jimenez-blazquez',
				position: 'Player',
				company: 'Grupo GFT',
				tagline: 'Junior Project Lead / Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3743',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/enrique-jim%C3%A9nez-bl%C3%A1zquez-35837918/'
					}
				]
			},
			{
				_strapiId: 1548,
				name: 'Daniela Ganea',
				slug: 'daniela-ganea',
				position: 'Player',
				company: 'Colors in Projects',
				tagline: 'Project Manager',
				bio: null,
				website: null,
				avatarId: 'file_3714',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/daniela-ganea-12426296/'
					}
				]
			},
			{
				_strapiId: 1800,
				name: 'Marta Marques Pereira',
				slug: 'marta-marques-pereira',
				position: 'Player',
				company: 'Elephant Answer',
				tagline: 'Optimizing collaboration',
				bio: null,
				website: null,
				avatarId: 'file_4044',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/martampereira/'
					}
				]
			},
			{
				_strapiId: 1809,
				name: 'Mauro Sarchi',
				slug: 'mauro-sarchi',
				position: 'Player',
				company: 'Bticino',
				tagline: 'Embedded Multimedia Applications Project Leader',
				bio: null,
				website: null,
				avatarId: 'file_3906',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/maurosarchi/'
					}
				]
			},
			{
				_strapiId: 1862,
				name: 'Nicola Ratti',
				slug: 'nicola-ratti',
				position: 'Player',
				company: 'Ri-Connect',
				tagline: 'Happiness Coach',
				bio: null,
				website: null,
				avatarId: 'file_4144',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/nikita.lila.77'
					}
				]
			},
			{
				_strapiId: 1674,
				name: 'João Cerdeira',
				slug: 'joao-cerdeira',
				position: 'Player',
				company: 'Farfetch',
				tagline: 'Head of Agile Coaches',
				bio: null,
				website: null,
				avatarId: 'file_4014',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jcerdeira/'
					}
				]
			},
			{
				_strapiId: 2146,
				name: 'Tetiana Petrukha',
				slug: 'tetiana-petrukha',
				position: 'Host',
				company: null,
				tagline:
					'Master Trainer, Corporate, Business, Customer Service Excellence, Customer Experience Expert, Speaker, Lecturer, Growing Client-Focusted Teams, Customer Experiences, Premium Brands',
				bio: null,
				website: null,
				avatarId: 'file_5059',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tetianapetrukha/'
					}
				]
			},
			{
				_strapiId: 2118,
				name: 'Luis Hernández',
				slug: 'luis-hernandez',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5026',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/iv%C3%A1n-cima-garc%C3%ADa-35463b59/'
					}
				]
			},
			{
				_strapiId: 2131,
				name: 'Rita Bey',
				slug: 'rita-bey',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5046',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mentor-coach-rita-bey-cabrera-0307b3a6/'
					}
				]
			},
			{
				_strapiId: 1921,
				name: 'Ricardo Fernandes',
				slug: 'ricardo-fernandes',
				position: 'Mentor',
				company: 'Mercedes io',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4381',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ricardo-fernandes-agile/'
					}
				]
			},
			{
				_strapiId: 1586,
				name: 'Emilie Jacquetton',
				slug: 'emilie-jacquetton',
				position: 'Host',
				company: 'ouiwin',
				tagline: 'Founder',
				bio: null,
				website: null,
				avatarId: 'file_4338',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/emiliejacquetton/'
					}
				]
			},
			{
				_strapiId: 1488,
				name: 'Catalina Vrabie',
				slug: 'catalina-vrabie',
				position: 'Host',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3767',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/catalinavrabie/'
					}
				]
			},
			{
				_strapiId: 2160,
				name: 'Lavinia Hritcu',
				slug: 'Lavinia-Hritcu',
				position: 'Player',
				company: null,
				tagline: 'Learning & Development Coordinator',
				bio: null,
				website: null,
				avatarId: 'file_5077',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lavinia-hritcu-10318631/'
					}
				]
			},
			{
				_strapiId: 2187,
				name: 'Trudi Boatwright',
				slug: 'trudi-boatwright',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5125',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'http://linkedin.com/in/trudi-boatwright'
					}
				]
			},
			{
				_strapiId: 2159,
				name: 'Julia Vidile',
				slug: 'julia-vidile',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5076',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/juliavidile/'
					}
				]
			},
			{
				_strapiId: 2161,
				name: 'Chris "Howo" Howard',
				slug: 'chris-howo-howard',
				position: 'Host',
				company: 'ABC',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5078',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cjhowardau/'
					}
				]
			},
			{
				_strapiId: 2162,
				name: 'Kathleen "KK" Karauna',
				slug: 'kathleen-kk-karauna',
				position: 'Host',
				company: 'ABC',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5079',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kathleen-karauna/'
					}
				]
			},
			{
				_strapiId: 2168,
				name: 'Decebal Antohi',
				slug: 'decebal-antohi',
				position: 'Player',
				company: null,
				tagline: 'Product Manager',
				bio: null,
				website: null,
				avatarId: 'file_5086',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/decebalantohi/'
					}
				]
			},
			{
				_strapiId: 2079,
				name: 'Andrei Gheorghiescu',
				slug: 'andrei-gheorghiescu',
				position: 'Player',
				company: null,
				tagline: 'Systemic Business Consultant',
				bio: null,
				website: null,
				avatarId: 'file_4836',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andreigheorghiescu/'
					}
				]
			},
			{
				_strapiId: 1594,
				name: 'Esther Balmaña',
				slug: 'esther-balmana',
				position: 'Host',
				company: 'TraiCo Projects',
				tagline: 'Co-Founder, Consultant and Trainer',
				bio: null,
				website: null,
				avatarId: 'file_4005',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:ebalmanag@gmail.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/estherbalmana'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/estherbalmana'
					}
				]
			},
			{
				_strapiId: 2172,
				name: 'Ionut Andrei Sandu',
				slug: 'ionut-andrei-sandu',
				position: 'Player',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_5091',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ionut-andrei-sandu-14a676147/'
					}
				]
			},
			{
				_strapiId: 1637,
				name: 'Hayley Bell',
				slug: 'hayley-bell',
				position: 'Host',
				company: null,
				tagline: 'Coach (Organisations, Teams, Individuals)',
				bio: null,
				website: null,
				avatarId: 'file_3809',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hayleybell/'
					}
				]
			},
			{
				_strapiId: 2334,
				name: 'Alexandra Götzfried',
				slug: 'alexandra-gotzfried',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5373',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexandra-g%C3%B6tzfried-0abb35175/'
					}
				]
			},
			{
				_strapiId: 2171,
				name: 'Cornelia Salciuc',
				slug: 'cornelia-salciuc',
				position: 'Player',
				company: null,
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_5094',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cornelia-salciuc-7171b910a/'
					}
				]
			},
			{
				_strapiId: 1903,
				name: 'Pierre Neis',
				slug: 'pierre-neis',
				position: 'Founder',
				company: 'Cognizant Digital Solutions - Open Eyes Consulting - Menschgeist',
				tagline: 'Agile Org Designer',
				bio: null,
				website: 'www.menschgeist.com',
				avatarId: 'file_5097',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:pierreneis@gmail.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/elPedroMajor'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pierreneis'
					}
				]
			},
			{
				_strapiId: 1659,
				name: 'Inmaculada Ramírez Manzano',
				slug: 'inmaculada-ramirez-manzano',
				position: 'Host',
				company: 'UST',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3751',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/inmaculadaramirezmanzano/'
					}
				]
			},
			{
				_strapiId: 2335,
				name: 'Antonia Bartning',
				slug: 'antonia-bartning',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5374',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'www.linkedin.com/in/antonia-bartning'
					}
				]
			},
			{
				_strapiId: 2178,
				name: 'Mui Han Koh',
				slug: 'mui-han-koh',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5111',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mui-han-koh/'
					}
				]
			},
			{
				_strapiId: 2177,
				name: 'Mallory Loone',
				slug: 'mallory-loone',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5110',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mallory-loone/'
					}
				]
			},
			{
				_strapiId: 2047,
				name: 'Yannic Langlois',
				slug: 'yannic-langlois',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Scrum Master/Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4411',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:ylanglois@agilepartner.net'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/yanniclanglois/'
					}
				]
			},
			{
				_strapiId: 2182,
				name: 'Carmen Teodorescu',
				slug: 'carmen-teodorescu',
				position: 'Player',
				company: null,
				tagline: 'Trainer & Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_5119',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/carmen-teodorescu/'
					}
				]
			},
			{
				_strapiId: 2183,
				name: 'Iosefina Bordas',
				slug: 'iosefina-bordas',
				position: 'Player',
				company: null,
				tagline: 'Entrepreneur',
				bio: null,
				website: null,
				avatarId: 'file_5120',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/iosefina-bordas-22a77561/'
					}
				]
			},
			{
				_strapiId: 2190,
				name: 'Wai Ling Yeong',
				slug: 'wai-ling-yeong',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5147',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/wailingy/'
					}
				]
			},
			{
				_strapiId: 2193,
				name: 'Grace John',
				slug: 'grace-john',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5141',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gracejohn/'
					}
				]
			},
			{
				_strapiId: 2175,
				name: 'Chee Thoe Loh',
				slug: 'chee-thoe-loh',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5108',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/samuellohteamplayer/'
					}
				]
			},
			{
				_strapiId: 2336,
				name: 'Samuel Mann',
				slug: 'samuel-mann',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5375',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/samuel-mann/'
					}
				]
			},
			{
				_strapiId: 1609,
				name: 'Francesc Mas',
				slug: 'francesc-mas',
				position: 'Host',
				company: 'TraiCo Projects',
				tagline: 'Consultant, Coach & Speaker',
				bio: null,
				website: null,
				avatarId: 'file_3823',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:fmas@traico.es'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/masfrancesc'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/francescmas'
					}
				]
			},
			{
				_strapiId: 1628,
				name: 'Giovanni Puliti',
				slug: 'giovanni-puliti',
				position: 'Mentor',
				company: 'AgileReloaded',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3832',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:giovanni@agilereloaded.it'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/giovannipuliti'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/giovannipuliti'
					}
				]
			},
			{
				_strapiId: 2304,
				name: 'Si Yu Lai',
				slug: 'si-yu-lai',
				position: 'Host',
				company: 'Ubuntu Space',
				tagline: 'Bridge between organisations and social impact | Co-founder | Behavioural change',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">I believe doing good and doing well are not mutually exclusive, and that humans are at the center of all organisations and societies.</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">What if we could achieve personal and organisational goals using play?🪄</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Am currently curating and facilitating intra-personal and inter-personal growth through experiential methodologies such as LEGO SERIOUS PLAY methodology (LSP), applied drama, and mindfulness tea rituals @The Ubuntu Space.</span><span class="white-space-pre" style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contrast:;--tw-drop-shadow:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;background-attachment:;background-clip:;background-image:;background-origin:;background-position-x:;background-position-y:;background-repeat:;background-size:;border-color:var(--artdeco-reset-base-border-zero);box-sizing:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--artdeco-reset-base-margin-zero);orphans:2;outline:var(--artdeco-reset-base-outline-zero);padding:var(--artdeco-reset-base-padding-zero);text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;vertical-align:var(--artdeco-reset-base-vertical-align-baseline);white-space:pre !important;widows:2;word-spacing:0px;">&nbsp;</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Why do we not do things that are good for us as individuals and as a society?</span><span class="white-space-pre" style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contrast:;--tw-drop-shadow:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;background-attachment:;background-clip:;background-image:;background-origin:;background-position-x:;background-position-y:;background-repeat:;background-size:;border-color:var(--artdeco-reset-base-border-zero);box-sizing:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--artdeco-reset-base-margin-zero);orphans:2;outline:var(--artdeco-reset-base-outline-zero);padding:var(--artdeco-reset-base-padding-zero);text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;vertical-align:var(--artdeco-reset-base-vertical-align-baseline);white-space:pre !important;widows:2;word-spacing:0px;">&nbsp;</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Worked with clients across 3P sectors on changing behaviours and improving effectiveness of organisations to better achieve social impact.</span><span class="white-space-pre" style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contrast:;--tw-drop-shadow:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;background-attachment:;background-clip:;background-image:;background-origin:;background-position-x:;background-position-y:;background-repeat:;background-size:;border-color:var(--artdeco-reset-base-border-zero);box-sizing:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--artdeco-reset-base-margin-zero);orphans:2;outline:var(--artdeco-reset-base-outline-zero);padding:var(--artdeco-reset-base-padding-zero);text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;vertical-align:var(--artdeco-reset-base-vertical-align-baseline);white-space:pre !important;widows:2;word-spacing:0px;">&nbsp;</span></span></p>',
				website: 'https://theubuntuplayspace.com/',
				avatarId: 'file_5266',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/siyulai/'
					},
					{
						type: '',
						url: ''
					}
				]
			},
			{
				_strapiId: 1826,
				name: 'Michael Laussegger',
				slug: 'michael-laussegger',
				position: 'Host',
				company: 'Silicon.Garden',
				tagline: 'Chief Enablement Officer @ Silicon.Garden',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgba(0, 0, 0, 0.9);display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">Founder and Chief Enablement Officer @ Silicon.Garden, Digital Product Person, Agile Native, User Happiness Champion, People and Problem Lover, BFF with UX, Design &amp; Arts, Dad, Occasional Speaker, Writer; Bar Camp and Open Space lover; Dolce-Vita Practitioner, 25+ Years in digital business #design #agile #remote #play</span></span></p>',
				website: 'http://Silicon.Garden',
				avatarId: 'file_5129',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/michaellaussegger/'
					}
				]
			},
			{
				_strapiId: 2194,
				name: 'Senthil Kumar G',
				slug: 'senthil-kumar-g',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5143',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/madieesenthil/'
					}
				]
			},
			{
				_strapiId: 2197,
				name: 'Dr. Khairul Anuar Abdullah',
				slug: 'dr-khairul-anuar-abdullah',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5146',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/drkhairulanuarabdullah/'
					}
				]
			},
			{
				_strapiId: 2189,
				name: 'Alvin Ananthan',
				slug: 'alvin-ananthan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5138',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alvinananthan/?originalSubdomain=sg'
					}
				]
			},
			{
				_strapiId: 2337,
				name: 'Maren Müller',
				slug: 'maren-muller',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5376',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'http://linkedin.com/in/maren-mueller'
					}
				]
			},
			{
				_strapiId: 2158,
				name: 'Eric Bourgault',
				slug: 'eric-bourgault',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5075',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ericbourgault/'
					}
				]
			},
			{
				_strapiId: 1632,
				name: 'Hanna Karlsson',
				slug: 'hanna-karlsson',
				position: 'Mentor',
				company: null,
				tagline: 'Agilista and Skillseeker',
				bio: null,
				website: null,
				avatarId: 'file_3836',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hanna-karlsson/'
					}
				]
			},
			{
				_strapiId: 2147,
				name: 'Isatu S Barrie',
				slug: 'isatu-s-barrie',
				position: 'Host',
				company: null,
				tagline:
					'Virtual Events, PMI, Project Coordinator, Marketing Assistant, B2B /Business Administrative Support',
				bio: null,
				website: null,
				avatarId: 'file_5060',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/isatubarrie/'
					}
				]
			},
			{
				_strapiId: 1927,
				name: 'Robyn Backhouse',
				slug: 'robyn-backhouse',
				position: 'Host',
				company: 'DAZN',
				tagline: 'Scrum master and Agile coach',
				bio: null,
				website: null,
				avatarId: 'file_4378',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/robynbackhouse/'
					}
				]
			},
			{
				_strapiId: 1665,
				name: 'Jimmy Adams',
				slug: 'jimmy-adams',
				position: 'Player',
				company: 'SPARCK',
				tagline: 'Digital Consultant',
				bio: null,
				website: null,
				avatarId: 'file_3968',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jimmy-adams-575a5268/'
					}
				]
			},
			{
				_strapiId: 2176,
				name: 'Fathiyah Muen',
				slug: 'fathiyah-muen',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5109',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fathiyahmuen/'
					}
				]
			},
			{
				_strapiId: 2157,
				name: 'Rui carvalho',
				slug: 'rui-carvalho',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5074',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ruifr/'
					}
				]
			},
			{
				_strapiId: 1570,
				name: 'Dragos Marius Jumanca',
				slug: 'dragos-marius-jumanca',
				position: 'Mentor',
				company: 'Nokia',
				tagline: 'R&D Agile Manager',
				bio: null,
				website: null,
				avatarId: 'file_3983',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:jumanca_dragos_marius@yahoo.com'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dragos-marius-jumanca-7076b29'
					}
				]
			},
			{
				_strapiId: 1389,
				name: 'Adriana Molina',
				slug: 'adriana-molina',
				position: 'Host',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4303',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adri-molina-85700b25/'
					}
				]
			},
			{
				_strapiId: 1432,
				name: 'Andrew Lau',
				slug: 'andrew-lau',
				position: 'Mentor',
				company: 'Think Codex',
				tagline: 'Founder & CEO | Vice Chair - International Gamification Confederation (GamFed)',
				bio: null,
				website: null,
				avatarId: 'file_3635',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andrew-lau-bb416/'
					}
				]
			},
			{
				_strapiId: 2191,
				name: 'Namitha Vijayakumar',
				slug: 'namitha-vijayakumar',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5139',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/namitha-v/'
					}
				]
			},
			{
				_strapiId: 1395,
				name: 'Alan Jennings',
				slug: 'alan-jennings',
				position: 'Host',
				company: 'Blue Jay Agility',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4310',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alan-jennings-820a1624/'
					}
				]
			},
			{
				_strapiId: 1402,
				name: 'Alex Canizales Castro',
				slug: 'alex-canizales-castro',
				position: 'Host',
				company: null,
				tagline: 'Agile Coach, SPC, CAL I, CSP-SM, CSP-PO | Trainer | Speaker',
				bio: null,
				website: null,
				avatarId: 'file_4323',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alcaniza/'
					}
				]
			},
			{
				_strapiId: 1430,
				name: 'Andrei Onofrei',
				slug: 'andrei-onofrei',
				position: 'Host',
				company: 'Pentalog',
				tagline: 'Scrum master',
				bio: null,
				website: null,
				avatarId: 'file_3628',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/onofreiandrei/'
					}
				]
			},
			{
				_strapiId: 1450,
				name: 'Anton Jessner',
				slug: 'anton-jessner',
				position: 'Host',
				company: null,
				tagline: 'OpenOrganisations®️ e.U.',
				bio: '<p>Agile organisational development and transformation.<br>Makes organisations talk and leads change to success!</p>',
				website: null,
				avatarId: 'file_5127',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anton-jessner-2b814b82/'
					}
				]
			},
			{
				_strapiId: 1626,
				name: 'Gabriel Musteata',
				slug: 'gabriel-musteata',
				position: 'Host',
				company: 'Hindawi Publishing',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4018',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gabriel-musteata-2481b756/'
					}
				]
			},
			{
				_strapiId: 2250,
				name: 'Laura Bueno',
				slug: 'laura-bueno',
				position: 'Player',
				company: 'Karismatia',
				tagline: null,
				bio: null,
				website: 'https://www.karismatia.com/',
				avatarId: 'file_5212',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/laurabuenorubiales/'
					}
				]
			},
			{
				_strapiId: 2338,
				name: 'Henriette Signer',
				slug: 'henriette-signer',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5377',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/henriette-signer-b6ab5bb2/'
					}
				]
			},
			{
				_strapiId: 1466,
				name: 'Barbara Kühnelt',
				slug: 'barbara-kuhnelt',
				position: 'Host',
				company: 'Hutchison Drei Austria GmbH',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3665',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/barbara-k%C3%BChnelt-7aa303112/'
					}
				]
			},
			{
				_strapiId: 1476,
				name: 'Benjamin Sung Ho Wenzel',
				slug: 'benjamin-sung-ho-wenzel',
				position: 'Host',
				company: 'Horváth & Partners Management Consultants',
				tagline: 'Managing Consultant Change Management',
				bio: null,
				website: null,
				avatarId: 'file_3666',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/benjamin-sung-ho-wenzel'
					}
				]
			},
			{
				_strapiId: 1478,
				name: 'Birgit Rüdesheim',
				slug: 'birgit-rudesheim',
				position: 'Host',
				company: 'RÜDESHEIM|Personalentwicklung',
				tagline: 'Change Management und Personalentwicklung',
				bio: null,
				website: null,
				avatarId: 'file_3689',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/birgit-r%C3%BCdesheim-b22b39113/'
					}
				]
			},
			{
				_strapiId: 1471,
				name: 'Benoit Fortemps',
				slug: 'benoit-fortemps',
				position: 'Player',
				company: 'Lycée des Arts et Métiers',
				tagline: 'Enseignant',
				bio: null,
				website: null,
				avatarId: 'file_3671',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/benoitfortemps/'
					}
				]
			},
			{
				_strapiId: 2251,
				name: 'Sonia García',
				slug: 'sonia-garcia',
				position: 'Player',
				company: 'Senet Consultores',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5213',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sonia-garcia-fari%C3%B1a/'
					}
				]
			},
			{
				_strapiId: 1691,
				name: 'Jordann Gross',
				slug: 'jordann-gross',
				position: 'Mentor',
				company: 'The Serious Gamers / The Cultivators',
				tagline: 'Agile Transformation & Self-organization Coach',
				bio: null,
				website: 'http://theseriousgamers.com',
				avatarId: 'file_5299',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jordanngross/'
					}
				]
			},
			{
				_strapiId: 2339,
				name: 'Antje Holst',
				slug: 'antje-holst',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5378',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/antje-holst/'
					}
				]
			},
			{
				_strapiId: 2051,
				name: 'Brent Byron Que',
				slug: 'brent-byron-que',
				position: 'Host',
				company: 'PALO IT',
				tagline: 'Scrum Master | Agile Coach | Learning Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_3701',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/brque/'
					}
				]
			},
			{
				_strapiId: 2055,
				name: 'Giorgia Lattanzio',
				slug: 'giorgia-lattanzio',
				position: 'Host',
				company: 'AgileReloaded',
				tagline: 'Content Creator | Social Media & Communication Specialist',
				bio: null,
				website: null,
				avatarId: 'file_4639',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/giorgia-lattanzio-36a83b192/'
					}
				]
			},
			{
				_strapiId: 1712,
				name: 'Karsten Mueller',
				slug: 'karsten-mueller',
				position: 'Mentor',
				company: 'emetriq GmbH',
				tagline: 'Agilist & Overhead of everything ;)',
				bio: null,
				website: null,
				avatarId: 'file_3967',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:hhkarsten@gmail.com'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/karsten-mueller-269b186b'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/profile/Karsten_Mueller36'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/HHKarsten'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/hhkarsten'
					}
				]
			},
			{
				_strapiId: 1693,
				name: 'Joseángel Domínguez',
				slug: 'joseangel-dominguez',
				position: 'Host',
				company: 'Narratrix Consulting',
				tagline: 'Academic & Cultural Advisor',
				bio: null,
				website: null,
				avatarId: 'file_3910',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jose2angel/'
					}
				]
			},
			{
				_strapiId: 1733,
				name: 'Leon-Cosmin Lupu',
				slug: 'leon-cosmin-lupu',
				position: 'Mentor',
				company: 'Nokia',
				tagline: 'Innovation Program Manager',
				bio: null,
				website: null,
				avatarId: 'file_4415',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:leoncosmin.lupu@gmail.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/cozminelu'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/leoncosminlupu'
					}
				]
			},
			{
				_strapiId: 2252,
				name: 'Julio Abdala  ',
				slug: 'julio-abdala',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5214',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/julio-abdala-9b053a56/'
					}
				]
			},
			{
				_strapiId: 1818,
				name: 'Meryl His',
				slug: 'meryl-his',
				position: 'Host',
				company: 'Planet Expat',
				tagline: 'Project Coordinator',
				bio: null,
				website: null,
				avatarId: 'file_3860',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:Meryl@planetexpat.org'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/meryl-his-18278359/'
					}
				]
			},
			{
				_strapiId: 2341,
				name: 'Kordelia Goertz',
				slug: 'kordelia-goertz',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5393',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kordelia-goertz-83161b323/'
					}
				]
			},
			{
				_strapiId: 2342,
				name: 'Diana Vredenbregt',
				slug: 'diana-vredenbregt',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 1369,
				name: 'Brigitte Woodtli',
				slug: 'brigitte-woodtli',
				position: 'Host',
				company: 'www.loco-motiv.ch',
				tagline: 'Playful, authentic, pleasurable and with humor she sets things in motion',
				bio: '<p>Brigitte Woodtli has been working in the field of theater for more than 15 years and accompanies various schools in this field. Since 2011, she has been dedicated to dealing with conflict situations through authentic play and founds the Forum Theater "Meeting Point of Conflicts" with Luc Müller.</p>',
				website: null,
				avatarId: 'file_3752',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 1460,
				name: 'Bárbara Dias',
				slug: 'barbara-dias',
				position: 'Host',
				company: null,
				tagline: 'Talent Development Manager',
				bio: null,
				website: null,
				avatarId: 'file_3880',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/b%C3%A1rbaramariadias/'
					}
				]
			},
			{
				_strapiId: 1495,
				name: 'Catherine Hyams',
				slug: 'catherine-hyams',
				position: 'Host',
				company: null,
				tagline: 'Certified Scrum Master : CSM: PSM 1: PSPO 1: CSP',
				bio: null,
				website: null,
				avatarId: 'file_4020',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/catherinehyams/'
					}
				]
			},
			{
				_strapiId: 1780,
				name: 'Mari Luz Garcia',
				slug: 'mari-luz-garcia',
				position: 'Mentor',
				company: null,
				tagline:
					'Trouble maker, Design - Visual Thinker, Creative (Lego® Serious Play®, Human Centered Innovation) facilitator/trainer/coach',
				bio: null,
				website: null,
				avatarId: 'file_3735',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:mgarcia@escpeurope.eu'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/LumiereMarie'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mariluzgarcia'
					}
				]
			},
			{
				_strapiId: 1529,
				name: 'Cori Moore',
				slug: 'cori-moore',
				position: 'Mentor',
				company: 'The School of Life',
				tagline: 'Freelance Innovation Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_4293',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/coraliemoore'
					}
				]
			},
			{
				_strapiId: 1502,
				name: 'Charlotte Bian',
				slug: 'charlotte-bian',
				position: 'Player',
				company: 'Cover-More Group',
				tagline: 'Product Delivery | Agile Coaching | Team Building',
				bio: null,
				website: null,
				avatarId: 'file_3661',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/charlottebian/'
					}
				]
			},
			{
				_strapiId: 2181,
				name: 'Raziah (Raz) Md Razak ',
				slug: 'raziah-raz-md-razak',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5114',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/raziahmdrazak/'
					}
				]
			},
			{
				_strapiId: 1412,
				name: 'Ana Marta Moreira',
				slug: 'ana-marta-moreira',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4327',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ana-marta-moreira/'
					}
				]
			},
			{
				_strapiId: 2110,
				name: 'Pedro Figueiredo',
				slug: 'pedro-figueiredo',
				position: 'Host',
				company: 'Briosa e Gala',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4918',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pedro-figueiredo-8179171'
					}
				]
			},
			{
				_strapiId: 2094,
				name: 'Aurora García Alcalde',
				slug: 'aurora-garcia-alcalde',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4894',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/aurora-garcia-alcalde/'
					}
				]
			},
			{
				_strapiId: 2180,
				name: 'Amiza Inting',
				slug: 'amiza-inting',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5113',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/amiza-inting-3740a4119/'
					}
				]
			},
			{
				_strapiId: 1852,
				name: 'Nancy Beers',
				slug: 'nancy-beers',
				position: 'Mentor',
				company: 'Happy Scrum Master',
				tagline: 'Happy Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3825',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nancybeers/'
					}
				]
			},
			{
				_strapiId: 1480,
				name: 'Bernhard Sterchi',
				slug: 'bernhard-sterchi',
				position: 'Mentor',
				company: 'Palladio Trusted Advisers',
				tagline: 'Chief Brainwave Oscillator',
				bio: null,
				website: null,
				avatarId: 'file_3680',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bernhard-sterchi-91167316/'
					}
				]
			},
			{
				_strapiId: 1438,
				name: 'Anko Tijman',
				slug: 'anko-tijman',
				position: 'Mentor',
				company: null,
				tagline:
					'Delivering Agile results ✪ Empowering digital teams ✪ DevOps visionary ✪ Seasoned Agile trainer',
				bio: null,
				website: null,
				avatarId: 'file_3634',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ankotijman/'
					}
				]
			},
			{
				_strapiId: 1630,
				name: 'Giulio Roggero',
				slug: 'giulio-roggero',
				position: 'Mentor',
				company: 'AgileReloaded',
				tagline: 'Entrepreneur focused on IoT, Serverless and Software Development',
				bio: null,
				website: null,
				avatarId: 'file_3877',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:giulio@agilereloaded.it'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/giulioroggero'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/giulioroggero'
					}
				]
			},
			{
				_strapiId: 1624,
				name: 'Gema López',
				slug: 'gema-lopez',
				position: 'Host',
				company: 'Coach Inspire Act',
				tagline: 'Executive Coach y Design Thinker',
				bio: null,
				website: null,
				avatarId: 'file_3854',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gema-lopez-lopez/'
					}
				]
			},
			{
				_strapiId: 1713,
				name: 'Karina Herman',
				slug: 'karina-herman',
				position: 'Host',
				company: 'Haufe-Lexware',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3986',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:karina.herman@nokia.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/karinahk07'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/karinaherman'
					}
				]
			},
			{
				_strapiId: 1602,
				name: 'Fabio Ghislandi',
				slug: 'fabio-ghislandi',
				position: 'Mentor',
				company: 'AgileReloaded',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3999',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:fabio@agilereloaded.it'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/FGhislandi'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fabio-ghislandi-74b736a'
					}
				]
			},
			{
				_strapiId: 1510,
				name: 'Christina Ohanian',
				slug: 'christina-ohanian',
				position: 'Mentor',
				company: null,
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_3686',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:ohaniant@gmail.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/ctohanian'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ctohanian'
					}
				]
			},
			{
				_strapiId: 1385,
				name: 'Adriana Rusu',
				slug: 'adriana-rusu',
				position: 'Host',
				company: '3Pillar Global Romania',
				tagline: 'Senior Engineering Manager',
				bio: null,
				website: null,
				avatarId: 'file_4299',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adriana-rusu-0034139a/'
					}
				]
			},
			{
				_strapiId: 1614,
				name: 'Frederic Ducros',
				slug: 'frederic-ducros',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_4028',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fredericducros/'
					}
				]
			},
			{
				_strapiId: 1662,
				name: 'Javier Pecci Jimenez',
				slug: 'javier-pecci-jimenez',
				position: 'Host',
				company: 'Agile Classrooms',
				tagline: 'CEO',
				bio: null,
				website: null,
				avatarId: 'file_4833',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/fco-javier-pecci-jimenez-02b99b4b/'
					}
				]
			},
			{
				_strapiId: 1427,
				name: 'Andreas Fechner',
				slug: 'andreas-fechner',
				position: 'Host',
				company: 'operational services GmbH & Co. KG',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_4281',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andreasfechner/'
					}
				]
			},
			{
				_strapiId: 1934,
				name: 'Rudi Bringtown',
				slug: 'rudi-bringtown',
				position: 'Player',
				company: 'cx-first.com',
				tagline:
					'Customer Experience and Co-innovation specialist with 10+ years experience leading and working among international teams globally.',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-RudiBringtown.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_4382',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:rudi.bringtown@cx-first.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/RudiBringtown'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rudibringtown/'
					}
				]
			},
			{
				_strapiId: 1368,
				name: 'Barbara Pauer-Faulmann',
				slug: 'barbara-pauer-faulmann',
				position: 'Host',
				company: 'Hutchison Drei Austria',
				tagline: 'Coach & Scrum Master',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:16px;"><span style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgba(0, 0, 0, 0.9);display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">“Be the change that you wish to see in the world."</span></span></p>',
				website: null,
				avatarId: 'file_4096',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pauerfaulmann/'
					}
				]
			},
			{
				_strapiId: 1618,
				name: 'Frederik Vannieuwenhuyse',
				slug: 'frederik-vannieuwenhuyse',
				position: 'Player',
				company: null,
				tagline: 'Multi-disciplinary generalizing specialist transforming your world of work ',
				bio: null,
				website: null,
				avatarId: 'file_3862',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/frederikvannieuwenhuyse/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/vfrederik'
					}
				]
			},
			{
				_strapiId: 1396,
				name: 'Adrien Muller',
				slug: 'adrien-muller',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'Agile Coach',
				bio: '<audio controls>\n  <source src="/files/soundbites/2017-03/170324-AdrienMuller.m4a" type="audio/mpeg">\n  Your browser does not support the audio tag.\n</audio>',
				website: null,
				avatarId: 'file_4306',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/adrien-muller-566373a/'
					}
				]
			},
			{
				_strapiId: 1932,
				name: 'Rotem Fingelay',
				slug: 'rotem-fingelay',
				position: 'Player',
				company: 'Agile Partner',
				tagline: 'UX and Graphic designer',
				bio: null,
				website: null,
				avatarId: 'file_4087',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rotem-fingelay-253991131/'
					}
				]
			},
			{
				_strapiId: 2203,
				name: 'Fanny Jousselin',
				slug: 'fanny-jousselin',
				position: 'Host',
				company: 'Agile Partner',
				tagline: 'Agile Coach, Scrum Master and Facilitator',
				bio: null,
				website: null,
				avatarId: 'file_5151',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 1790,
				name: 'Marjorie Bringtown',
				slug: 'marjorie-bringtown',
				position: 'Player',
				company: 'Innovative projects',
				tagline: 'Learning to source kids talents/Volunteering',
				bio: null,
				website: null,
				avatarId: 'file_3793',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marjorie-bringtown-9915b0b6/'
					}
				]
			},
			{
				_strapiId: 2198,
				name: 'Sumit Sethi',
				slug: 'sumit-sethi',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5148',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sumitsethi'
					}
				]
			},
			{
				_strapiId: 1414,
				name: 'Ana Umbelino',
				slug: 'ana-umbelino',
				position: 'Mentor',
				company: 'Mindsurfing - Consultoria, Formação e Eventos',
				tagline: 'CEO',
				bio: null,
				website: null,
				avatarId: 'file_4330',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anaumbelino/'
					}
				]
			},
			{
				_strapiId: 2080,
				name: 'Dan Tudorache',
				slug: 'dan-tudorache',
				position: 'Player',
				company: null,
				tagline: 'Coach | Trainer | Solution Architect',
				bio: null,
				website: null,
				avatarId: 'file_5171',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dantudorache/'
					},
					{
						type: '',
						url: ''
					}
				]
			},
			{
				_strapiId: 2217,
				name: 'Monica C. Cruz',
				slug: 'monica-c-cruz',
				position: 'Player',
				company: 'Third World Improv and Fearless, Inc.',
				tagline: 'Co-Founder, Partner',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgb(31,31,31);font-family:&quot;Google Sans&quot;, Roboto, sans-serif;font-size:12px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">Monica C. Cruz has been performing with SPIT Manila, Asia’s premier improvisational group, since 2006. She is a founding member of Third World Improv, the largest institution dedicated to the art and practice of improvisational theater in Southeast Asia. She has experience in both performance and Applied Improvisation in various key cities in the Philippines, and all around the world. Monica is also a trainer and partner at Fearless Inc., a consultancy firm that brings humanity and innovation to high-performing organizations. Outside all these, Monica is a mom to 2 humans and an orange cat.</span></span></p>',
				website: 'https://thirdworldimprov.com/',
				avatarId: 'file_5174',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/monicacoruz'
					}
				]
			},
			{
				_strapiId: 2218,
				name: 'Vina Vidal Vicente',
				slug: 'vina-vidal-vicente',
				position: 'Player',
				company: 'BV&S PPL BIZ CORP',
				tagline: 'Co-founder, partner, Chief Learning Officer',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgb(31,31,31);font-family:&quot;Google Sans&quot;, Roboto, sans-serif;font-size:12px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">Vina is an author, learning experience designer, “play”-cilitator, change management practitioner, stakeholder engagement specialist, communications and public affairs strategist, certified English grammar instructor, and a blues singer. Vina has worked in expert and leadership roles in various industries, including print media, government, non- government / advocacy, education, and, most recently, energy and shared services. In her 20+ years in the workforce, Vina has cultivated a skill in connecting with various roles in an organization, ranging from senior executives to junior professionals, helping them determine choices that are sensible for them and exercise accountability for the decisions that they make.</span></span></p>',
				website: 'www.bvsppl.com',
				avatarId: 'file_5175',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://ph.linkedin.com/in/vina-vidal-vicente-mpm-3049895'
					}
				]
			},
			{
				_strapiId: 2253,
				name: 'Marta Silva',
				slug: 'marta-silva',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5216',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marta-silva-5a093024/'
					}
				]
			},
			{
				_strapiId: 2050,
				name: 'Darwin Antipolo',
				slug: 'darwin-antipolo',
				position: 'Mentor',
				company: 'PXD LABS',
				tagline:
					'Empowering Teams Thrive in Uncertain Times With PLAY, DESIGN, & FORESIGHT| Facilitator, Designer, and Strategist',
				bio: '<p>Darwin is a designpreneur with almost two decades of experience in corporate technology and marketing. He applies a distinct transdisciplinary approach involving service innovation design, serious play, visual thinking, and corporate foresight domain to help individuals, teams, and businesses with their wicked problems.</p><p>A self-identifying philomath, this itinerant curiosity has helped him deliver nuanced insights into his work as a facilitator, trainer, consultant, and artist.</p><p>Whilst in corporate for 20 years, his domain was marketing, particularly digital and technology. He has straddled both agency and client sides across the year and has advised top MNCs and regional players on their strategy &amp; marketing challenges.</p><p>{ GEO LOCATION: normally based in Singapore 🇸🇬 but now in the Philippines 🇵🇭 till end 2023}</p><p>Excellent team/ meeting facilitation skills, outstanding verbal and written communication skills with strong presentation and negotiation abilities.</p><p>Familiarity with multi-cultural business environment. Organized. Facilitative, Detail-oriented. Creative. Numerate.</p><p>Capabilities: Business and Service Design Transformation, Applied Serious Play at Work, Corporate and Service Innovation, Strategic and Scenario Planning,</p>',
				website: 'www.pxdlabs.com',
				avatarId: 'file_3923',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dantipolo/'
					},
					{
						type: 'Email',
						url: 'dantipolo@pxdlabs.com'
					}
				]
			},
			{
				_strapiId: 2344,
				name: 'Rosa Villa',
				slug: 'rosa-villa',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5419',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rosa-villa-65344453/'
					}
				]
			},
			{
				_strapiId: 2219,
				name: 'Vasudevan Alasingachar ',
				slug: 'vasudevan-alasingachar',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5184',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vasudevan-alasingachar-19117112/'
					}
				]
			},
			{
				_strapiId: 2220,
				name: 'Phalgun Polepalli',
				slug: 'phalgun-polepalli',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5185',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/phalgun/'
					}
				]
			},
			{
				_strapiId: 2222,
				name: 'Hari Iyer',
				slug: 'hari-iyer',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5186',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hiyer403/'
					}
				]
			},
			{
				_strapiId: 2224,
				name: 'Ajay Parasrampuria',
				slug: 'ajay-parasrampuria',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5188',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ajayparasrampuria/'
					}
				]
			},
			{
				_strapiId: 2254,
				name: 'António Baptista',
				slug: 'antonio-baptista',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5217',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/antoniosergiobaptista/'
					}
				]
			},
			{
				_strapiId: 1634,
				name: 'Gloria Muñoz Chueca',
				slug: 'gloria-munoz-chueca',
				position: 'Host',
				company: 'Alliance Healthcare',
				tagline: 'Web, Mobile and UX manager Digital & ICE - Zaragoza',
				bio: null,
				website: null,
				avatarId: 'file_3853',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gloriamunozc/'
					}
				]
			},
			{
				_strapiId: 2223,
				name: "Francis D'Costa ",
				slug: 'francis-dcosta',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5187',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/francisdcosta/'
					}
				]
			},
			{
				_strapiId: 2225,
				name: 'Pankkti Shhah',
				slug: 'pankkti-shhah',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5189',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pankkti-shhah-3512a41a/'
					}
				]
			},
			{
				_strapiId: 2226,
				name: 'Manoj MM',
				slug: 'manoj-mm',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5193',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mmmanoj/'
					}
				]
			},
			{
				_strapiId: 2227,
				name: 'Skanda Nayan',
				slug: 'skanda-nayan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5194',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/skandanayan-s-73aa2b301/'
					}
				]
			},
			{
				_strapiId: 2228,
				name: 'Raiva Rohini ',
				slug: 'raiva-rohini',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5195',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/raiva-rohini-aa3a2b301/'
					}
				]
			},
			{
				_strapiId: 2229,
				name: 'Veera Raghavulu Ganugapenta',
				slug: 'veera-raghavulu-ganugapenta',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5196',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/veerag/'
					}
				]
			},
			{
				_strapiId: 2345,
				name: 'Karen Mancini',
				slug: 'karen-mancini',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5420',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/karen-mancini/'
					}
				]
			},
			{
				_strapiId: 2230,
				name: 'Prajwal G manu',
				slug: 'prajwal-g-manu',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/prajwal-m-536598116/'
					}
				]
			},
			{
				_strapiId: 2231,
				name: 'T K Chandra Mouli',
				slug: 't-k-chandra-mouli',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5197',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tkchandramouli-bangalore/'
					}
				]
			},
			{
				_strapiId: 2232,
				name: 'Roopshree Surana ',
				slug: 'roopshree-surana',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5198',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/roop-leadership-facilitator/'
					}
				]
			},
			{
				_strapiId: 2233,
				name: 'Subramanian Kalpathi ',
				slug: 'subramanian-kalpathi',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5199',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/subuks/'
					}
				]
			},
			{
				_strapiId: 2235,
				name: 'Anussha Gupta',
				slug: 'anussha-gupta',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5201',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anussha-g-8661b4bb/'
					}
				]
			},
			{
				_strapiId: 2256,
				name: 'Angela Ruiz',
				slug: 'angela-ruiz',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5219',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/angela-ruiz-plaza-346a5245/'
					}
				]
			},
			{
				_strapiId: 2236,
				name: 'Ramalingam V.M',
				slug: 'ramalingam-vm',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5202',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ramalingamvm/'
					}
				]
			},
			{
				_strapiId: 2237,
				name: 'Midhun Manmadhan',
				slug: 'midhun-manmadhan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5203',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/midhunmanmadhan/'
					}
				]
			},
			{
				_strapiId: 2238,
				name: 'Mohammed imran ahmed SHAIKH',
				slug: 'mohammed-imran-ahmed-shaikh',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5204',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/shaikhimran786/'
					}
				]
			},
			{
				_strapiId: 2239,
				name: 'Mehul Goyal',
				slug: 'mehul-goyal',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5205',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mehul-goyal-44a228301/'
					}
				]
			},
			{
				_strapiId: 2240,
				name: 'Nimisha Goyal',
				slug: 'nimisha-goyal',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5206',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nimisha-goyal-774a30301/'
					}
				]
			},
			{
				_strapiId: 2241,
				name: 'JASMINE SURI',
				slug: 'jasmine-suri',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5207',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jasminesuri/'
					}
				]
			},
			{
				_strapiId: 2242,
				name: 'SRINIVAS GHANAGAM',
				slug: 'srinivas-ghanagam',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5208',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/srinivas-ghanagam-2683888/'
					}
				]
			},
			{
				_strapiId: 2243,
				name: 'Bhaskar Natarajan',
				slug: 'bhaskar-natarajan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5209',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bhaskarnatarajan/'
					}
				]
			},
			{
				_strapiId: 2244,
				name: 'Karthik Chokkaraman',
				slug: 'karthik-chokkaraman',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kcrkarthik/'
					}
				]
			},
			{
				_strapiId: 2264,
				name: 'Joan Paula Feliciano',
				slug: 'joan-paula-feliciano',
				position: 'Player',
				company: 'Cooee Inc.',
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2258,
				name: 'Francis Laleman',
				slug: 'francis-laleman',
				position: 'Player',
				company: 'Agile Facilitation Beyond Borders Pte Ltd (Singapore)',
				tagline: 'Experience Designer and Facilitator',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgb(31,31,31);font-family:&quot;Google Sans&quot;, Roboto, sans-serif;font-size:12px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">i am one who tries. For many years, I have been training to be a husband and a father. The path is tough though, and I realize that I am not anywhere near to being in a position that I can claim to have found the golden recipe to earning stripes in either field. My secret hope is that playfulness and reflection will turn out to be among the coveted keys to excellence – although it is getting the look of it that letting go might be the better way. Sadly, play and reflection are what I think I am rather good at, while letting go is a much, much harder task.</span></span></p>',
				website: null,
				avatarId: 'file_5221',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/flaleman/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/francismuktibodh/'
					},
					{
						type: 'Other',
						url: 'https://medium.com/@francis-laleman'
					}
				]
			},
			{
				_strapiId: 2383,
				name: 'Tim Hamons',
				slug: 'tim-hamons',
				position: 'Host',
				company: null,
				tagline:
					'Visual Thinking Pioneer in Asia, Speaker, Scribe, Co-editor of "The World of Visual Facilitation',
				bio: null,
				website: null,
				avatarId: 'file_5494',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/timhamons/'
					}
				]
			},
			{
				_strapiId: 2259,
				name: 'Michael Angelo Adriatico',
				slug: 'michael-angelo-adriatico',
				position: 'Player',
				company: 'Cooee Inc',
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2260,
				name: 'Arlynne Awayan',
				slug: 'arlynne-awayan',
				position: 'Player',
				company: 'CYPHER LEARNING',
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2261,
				name: 'Shermon Cruz',
				slug: 'shermon-cruz',
				position: 'Player',
				company: 'Center for Engaged Foresight',
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2262,
				name: 'Ramil Cueto',
				slug: 'ramil-cueto',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2263,
				name: 'Elson Dacanay',
				slug: 'elson-dacanay',
				position: 'Player',
				company: 'Ingo Manufacturing Phils. Inc. ',
				tagline: 'Quality Manager',
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2265,
				name: 'Julia Feng',
				slug: 'julia-feng',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2266,
				name: 'Catrice Hidalgo',
				slug: 'catrice-hidalgo',
				position: 'Player',
				company: 'TDG - SG Global Academy',
				tagline: 'Manager',
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2349,
				name: 'Maravillas Carazo',
				slug: 'maravillas-carazo',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5422',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/maravillascarazo/'
					}
				]
			},
			{
				_strapiId: 2267,
				name: 'Jose Antonio Jimenez',
				slug: 'jose-antonio-jimenez',
				position: 'Player',
				company: 'Asalus - Intellicare',
				tagline: 'Workplace Learning and Performance ',
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2268,
				name: 'Christopher Lim ',
				slug: 'christopher-lim',
				position: 'Player',
				company: 'Transnational Uyeno Safety Academy',
				tagline: 'General Manager',
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2269,
				name: 'Bryll Christian Mendoza',
				slug: 'bryll-christian-mendoza',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2270,
				name: 'Maria Edlyn Palma',
				slug: 'maria-edlyn-palma',
				position: 'Player',
				company: 'Intellicare',
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2271,
				name: 'Carla Noelle Perfecto',
				slug: 'carla-noelle-perfecto',
				position: 'Player',
				company: 'Boost Premium Dog Food',
				tagline: 'HROD Practitioner/ Distributor',
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2274,
				name: 'Anthony Seumal',
				slug: 'anthony-seumal',
				position: 'Player',
				company: 'Cambridge Univesity Press and Assessment',
				tagline: 'Head of Software Quality',
				bio: null,
				website: null,
				avatarId: 'file_5296',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2273,
				name: 'Dingdong Rosales',
				slug: 'dingdong-rosales',
				position: 'Player',
				company: 'Thirf World Improv',
				tagline: 'Senior Faculty',
				bio: null,
				website: null,
				avatarId: 'file_5297',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2350,
				name: 'Faustino (Vikingo Agilista) Hermo ',
				slug: 'faustino-vikingo-agilista-hermo',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5423',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/faustinohermo/'
					}
				]
			},
			{
				_strapiId: 2276,
				name: 'Rodrigo Francisco',
				slug: 'rodrigo-francisco',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5222',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rjfrancisco/'
					}
				]
			},
			{
				_strapiId: 2277,
				name: 'Gabriela Madureira',
				slug: 'gabriela-madureira',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5223',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/gabrielamadureira/'
					}
				]
			},
			{
				_strapiId: 2275,
				name: 'Bibay de Larrazabal',
				slug: 'bibay-de-larrazabal',
				position: 'Player',
				company: 'Third World Improv',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5298',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2279,
				name: 'Pedro Carvalho',
				slug: 'pedro-carvalho',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5225',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/poaktree/'
					}
				]
			},
			{
				_strapiId: 2280,
				name: 'Ana Branco',
				slug: 'ana-branco',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5226',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ana-branco-6ba97b/'
					}
				]
			},
			{
				_strapiId: 2287,
				name: 'Jorge Ramos',
				slug: 'jorge-ramos',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5233',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jorge-miguel-ramos/'
					}
				]
			},
			{
				_strapiId: 2351,
				name: 'María (merybere) Berenguer',
				slug: 'maria-merybere-berenguer',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5425',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mariaberenguer/'
					}
				]
			},
			{
				_strapiId: 2281,
				name: 'Mafalda Sanches',
				slug: 'mafalda-sanches',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5227',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mafaldasanches/'
					}
				]
			},
			{
				_strapiId: 2282,
				name: 'Vera Figueiredo',
				slug: 'vera-figueiredo',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5228',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vera-figueiredo-5b857423/'
					}
				]
			},
			{
				_strapiId: 2283,
				name: 'Tiago Machado',
				slug: 'tiago-machado',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5229',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tmfmachado/'
					}
				]
			},
			{
				_strapiId: 2284,
				name: 'Joana Medinas Fernandes',
				slug: 'joana-medinas-fernandes',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5230',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/joanamfernandes-77673060/'
					}
				]
			},
			{
				_strapiId: 2285,
				name: 'Raquel Nédio',
				slug: 'raquel-nedio',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5231',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/raquel-nédio-191820125/'
					}
				]
			},
			{
				_strapiId: 2286,
				name: 'Marina Mota',
				slug: 'marina-mota',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5232',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mmota/'
					}
				]
			},
			{
				_strapiId: 2352,
				name: 'Avelino Correa',
				slug: 'avelino-correa',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5426',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/avelinocorrea/'
					}
				]
			},
			{
				_strapiId: 2288,
				name: 'Diogo Rocha',
				slug: 'diogo-rocha',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5234',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/diogomprocha/'
					}
				]
			},
			{
				_strapiId: 2115,
				name: 'Fernando Lopes',
				slug: 'fernando-lopes',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: 'https://www.linkedin.com/in/fernandonobrelopes/',
				avatarId: null,
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: '',
						url: ''
					}
				]
			},
			{
				_strapiId: 2289,
				name: 'Filipe Neves ',
				slug: 'filipe-neves',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5235',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/filipemaneves/'
					}
				]
			},
			{
				_strapiId: 2290,
				name: 'Inge Godts',
				slug: 'inge-godts',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5236',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ingegodts/'
					}
				]
			},
			{
				_strapiId: 2291,
				name: 'Paulo Esgaio',
				slug: 'paulo-esgaio',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5237',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paulo-esgaio/'
					}
				]
			},
			{
				_strapiId: 1705,
				name: 'Julian Kea',
				slug: 'julian-kea',
				position: 'Mentor',
				company: '[ki:]®Learning',
				tagline:
					'Serious Games Facilitator. Host of the Serious Games Podcast. Co-creator of #TheDebriefingCube.',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">With over 15 years of experience as a serious games facilitator, consultant, and coach, I help individuals and organizations develop their capacities and achieve their goals.</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">As an experiential learning enthusiast, I design and deliver interactive and engaging learning solutions that foster co-creation, collaboration, and feedback. I use a range of minds-on facilitation techniques, such as LEGO® SERIOUS PLAY®, Training from the BACK of the Room!, and #TheDebriefingCube, to create activating learning environments where participants can exchange ideas authentically, develop mutual understanding, and commit to change. I am excited to announce that my book on Agile Games Facilitation was published in Fall 2023. My mantra is "Rediscover Learning. Work Smarter."</span></span></p>',
				website: 'http://kiLearning.net',
				avatarId: 'file_4023',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:frage@kilearning.net'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kilearning'
					}
				]
			},
			{
				_strapiId: 2353,
				name: 'Vanessa Fernández',
				slug: 'vanessa-fernandez',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5427',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vanessa-fern%C3%A1ndez-berm%C3%BAdez-5b30784b/'
					}
				]
			},
			{
				_strapiId: 2292,
				name: 'Michael Martens',
				slug: 'michael-martens',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5246',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://LinkedIn.com/in/michaelmartensconsultant'
					}
				]
			},
			{
				_strapiId: 2293,
				name: 'Jessica Breitenfeld',
				slug: 'jessica-breitenfeld',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5247',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jessica-breitenfeld/'
					}
				]
			},
			{
				_strapiId: 2294,
				name: 'Ariane Hecker',
				slug: 'ariane-hecker',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5248',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'www.linkedin.com/in/ariane-hecker-a5a535135'
					}
				]
			},
			{
				_strapiId: 2295,
				name: 'Luisa Girola',
				slug: 'luisa-girola',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5249',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/girolaluisa/'
					}
				]
			},
			{
				_strapiId: 2296,
				name: 'Elisabeth\tSinner',
				slug: 'elisabeth-sinner',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5250',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elisabeth-sinner/'
					}
				]
			},
			{
				_strapiId: 2297,
				name: 'Manuela Almeida',
				slug: 'manuela-almeida',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5254',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/marianafariaalmeida/'
					}
				]
			},
			{
				_strapiId: 2300,
				name: 'Ana María Adán',
				slug: 'ana-maria-adan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5258',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anaadan/'
					}
				]
			},
			{
				_strapiId: 2354,
				name: 'Ana Patricio Cal',
				slug: 'ana-patricio-cal',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5428',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ana-patricio-80a9b91b8/'
					}
				]
			},
			{
				_strapiId: 2298,
				name: 'André Ribeiro',
				slug: 'andre-ribeiro',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5255',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/revezribeiro/'
					}
				]
			},
			{
				_strapiId: 2301,
				name: 'Felipa Cunha',
				slug: 'felipa-cunha',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5259',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/felipa-cunha-24708a39/'
					}
				]
			},
			{
				_strapiId: 2278,
				name: 'Anthony Simões',
				slug: 'anthony-simoes',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5224',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anthonysimoes/'
					}
				]
			},
			{
				_strapiId: 2307,
				name: 'Yin Mei Ho',
				slug: 'yin-mei-ho',
				position: 'Host',
				company: null,
				tagline: 'Service Design | Design Thinking Facilitator | Live graphic illustrator',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Meet Yin Mei, a design thinking enthusiast dedicated to igniting innovation through empathy and collaboration in the corporate and education space.</span><span class="white-space-pre" style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contrast:;--tw-drop-shadow:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;background-attachment:;background-clip:;background-image:;background-origin:;background-position-x:;background-position-y:;background-repeat:;background-size:;border-color:var(--artdeco-reset-base-border-zero);box-sizing:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--artdeco-reset-base-margin-zero);orphans:2;outline:var(--artdeco-reset-base-outline-zero);padding:var(--artdeco-reset-base-padding-zero);text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;vertical-align:var(--artdeco-reset-base-vertical-align-baseline);white-space:pre !important;widows:2;word-spacing:0px;">&nbsp;</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">As an advocate for meaningful communication, her superpower lies in graphic recording, where she seamlessly transforms the narratives of leaders, speeches, and discussions into captivating visuals. Her ability to distill complexity into simplicity not only enhances understanding but also sparks inspiration for action.</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">With a penchant for challenging the status quo, Yin Mei thrives in environments where experimentation and creativity flourish. Her thoughtful approach to problem-solving coupled with her knack for pushing boundaries fosters an atmosphere of continual growth and innovation.</span></span></p>',
				website: null,
				avatarId: 'file_5269',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'http://www.linkedin.com/in/yinmeiho'
					}
				]
			},
			{
				_strapiId: 2196,
				name: 'Azfarazie Amirolzakri  ',
				slug: 'azfarazie-amirolzakri',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5145',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/azfarazie-amirolzakri/'
					}
				]
			},
			{
				_strapiId: 2355,
				name: 'Elina Bauzá',
				slug: 'elina-bauza',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5429',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/elinabauza/'
					}
				]
			},
			{
				_strapiId: 2302,
				name: 'Carol Lim',
				slug: 'carol-lim',
				position: 'Host',
				company: 'Teach the future',
				tagline:
					'B2B Storytelling & Pitching Coach | Future-Fit Leadership & High Performance Team Coach through Game-Based Learning | #play14 Singapore Founder | Teach the Future Singapore Co-Founder',
				bio: '<p>I bring passion, energy and dynamism into every engagement and interaction. I thrive in adaptive ‘white spaces’, envisioning new possibilities, connecting the dots to problem-solve, connecting people through community building, influencing stakeholders, and finding common ground to make great conversations, changemaking impact and breakthrough results happen.&nbsp;<br><br>Colleagues value me as a rainmaker; a decisive, analytical and strategic thinker; a meticulous doer; and one who constantly challenges the status quo and pushes the envelope to deliver results and achieve better, innovative outcomes.&nbsp;<br><br>As a leader, I set high standards for my teams, and demand no less from myself. I empower and coach my teams to bring their A game to their work, but also enjoy rolling up my sleeves to get things done together with them - no task is beneath me. They know that I always have their back as nothing fulfills me more than supporting them to flourish as the best versions of themselves.<br><br>As a coach, facilitator, consultant and adviser, my clients appreciate that I hold their trust in me delicately, care deeply about their success and well-being like my own, listen to them intently, challenge them appropriately, and pay attention to even the quietest voice in the room.<br><br>On the personal front, I am an agile lifelong learner, with an insatiable curiosity about the world, people, cultures and languages. I embrace an always beta mindset and practise disrupting myself before getting disrupted. I believe in always doing the right thing, even when no one is watching, no one knows or no one cares.</p>',
				website: null,
				avatarId: 'file_5264',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/carol-lim/'
					}
				]
			},
			{
				_strapiId: 2303,
				name: 'Rajasekhar Tatavarthi',
				slug: 'rajasekhar-tatavarthi',
				position: 'Host',
				company: null,
				tagline: 'Project Manager | Scrum Master | Certified Agile Practitioner',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">IT professional with over 15 years of expertise in Agile and Waterfall project management, delivering solutions for global clients in banking, supply chain, manufacturing, and policing. Certified SAFe® 6 Scrum Master and Agile Certified Practitioner adept at leading cross-functional and remote teams, driving agile transitions, and coaching best practices.</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Proven ability to prepare comprehensive MIS reports, providing actionable insights for senior management. Demonstrated success in managing complex projects, improving operational effectiveness, and fostering a culture of continuous improvement through effective leadership and collaboration.</span></span></p>',
				website: null,
				avatarId: 'file_5265',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rajasekhar-tatavarthi/'
					},
					{
						type: '',
						url: ''
					}
				]
			},
			{
				_strapiId: 2305,
				name: 'Jodie Loi',
				slug: 'jodie-loi',
				position: 'Host',
				company: 'Zoco Collective',
				tagline: 'going loco @ zoco | ux design, research & workshop facilitation',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">🇬🇧 EN 🇯🇵JP 🇨🇳CN 🇰🇷KR</span></span><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">Experience designer and researcher. I engineer human-centric solutions in a digital world, and fight wicked problems with the power of empathy, collaboration, cross-cultural dexterity and lateral thinking.</span><span class="white-space-pre" style="--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:;--tw-blur:;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-brightness:;--tw-contrast:;--tw-drop-shadow:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-numeric-figure:;--tw-numeric-fraction:;--tw-numeric-spacing:;--tw-ordinal:;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-inset:;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-shadow:0 0 #0000;--tw-rotate:0;--tw-saturate:;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-sepia:;--tw-shadow-colored:0 0 #0000;--tw-shadow:0 0 #0000;--tw-skew-x:0;--tw-skew-y:0;--tw-slashed-zero:;--tw-translate-x:0;--tw-translate-y:0;-webkit-text-stroke-width:0px;background-attachment:;background-clip:;background-image:;background-origin:;background-position-x:;background-position-y:;background-repeat:;background-size:;border-color:var(--artdeco-reset-base-border-zero);box-sizing:inherit;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:var(--artdeco-reset-base-margin-zero);orphans:2;outline:var(--artdeco-reset-base-outline-zero);padding:var(--artdeco-reset-base-padding-zero);text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;vertical-align:var(--artdeco-reset-base-vertical-align-baseline);white-space:pre !important;widows:2;word-spacing:0px;">&nbsp;</span></span><br><br><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:14px;"><span style="-webkit-text-stroke-width:0px;display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">For enquiries related to branding, marketing, UX design and research consulting services for your business, visit zococollective.com. Find out more about me on jodieloi.com ✌️</span></span></p>',
				website: 'https://www.zococollective.com/',
				avatarId: 'file_5267',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jodieloi/'
					}
				]
			},
			{
				_strapiId: 1464,
				name: 'Avi Liran',
				slug: 'avi-liran',
				position: 'Host',
				company: 'Delivering Delight',
				tagline: 'Global KeyNote Speaker | MD',
				bio: null,
				website: 'https://www.aviliran.com/',
				avatarId: 'file_3675',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/avizliran/'
					}
				]
			},
			{
				_strapiId: 2306,
				name: 'Ilamathi Selvarajoo',
				slug: 'ilamathi-selvarajoo',
				position: 'Host',
				company: null,
				tagline: 'Business Analyst | Scrum Master | Project Manager | Payments | SWIFT',
				bio: null,
				website: null,
				avatarId: 'file_5268',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ilamathi-selvarajoo-277177239/'
					},
					{
						type: '',
						url: ''
					}
				]
			},
			{
				_strapiId: 2308,
				name: 'Kylie Upton',
				slug: 'kylie-upton',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5280',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/kylie-upton/'
					}
				]
			},
			{
				_strapiId: 2195,
				name: 'Sripada Nema',
				slug: 'sripada-nema',
				position: 'Host',
				company: 'Autodesk',
				tagline: 'Agile Coach',
				bio: null,
				website: null,
				avatarId: 'file_5144',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nemasri/'
					}
				]
			},
			{
				_strapiId: 2356,
				name: 'Brenda Alonso',
				slug: 'brenda-alonso',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5430',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/brendalonso/'
					}
				]
			},
			{
				_strapiId: 1473,
				name: 'Beatriz Gortazar',
				slug: 'beatriz-gortazar',
				position: 'Host',
				company: 'Altitude Software',
				tagline: 'Marketing Manager',
				bio: null,
				website: null,
				avatarId: 'file_3668',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:beatriz.gortazar@hpe.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/bgortz'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bgortazar/'
					}
				]
			},
			{
				_strapiId: 2315,
				name: 'Anusha Sriramana',
				slug: 'anusha-sriramana',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5309',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/anusha-sriramana-7aaa7290/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
					}
				]
			},
			{
				_strapiId: 2309,
				name: 'Anna Ong',
				slug: 'anna-ong',
				position: 'Host',
				company: "What's Your Story, Huh?",
				tagline: 'Founder',
				bio: '<p>Anna Ong believes that the shortest distance between two people is a story.</p><p>She is an ex-banker turned storyteller. She is the creator, host and producer of "What\'s Your Story Slam", &nbsp;a storytelling show based in Singapore -- designed to promote the art and craft of live Storytelling.</p><p>She founded WYSH (What\'s Your Story, Huh?), a communications training company that uses Theatre, Storytelling, and Improvisation techniques.</p><p>She is an accredited and certified coach. She holds an MBA from INSEAD and a certificate in Social Impact Storytelling from Georgetown University.</p>',
				website: 'https://www.whatsyourstoryslam.com',
				avatarId: 'file_5290',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'Https://www.linkedin.com/in/anna-ong'
					}
				]
			},
			{
				_strapiId: 1582,
				name: 'Elle Gundersen',
				slug: 'elle-gundersen',
				position: 'Host',
				company: 'Talan',
				tagline: 'Change Management | Enablement | Transformation',
				bio: null,
				website: null,
				avatarId: 'file_3942',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ellegundersen/'
					}
				]
			},
			{
				_strapiId: 2272,
				name: 'Janna Romano',
				slug: 'janna-romano',
				position: 'Player',
				company: 'Sharesource',
				tagline: 'Digital Communication Specialist',
				bio: null,
				website: null,
				avatarId: 'file_5295',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2329,
				name: 'Varun Manoharan',
				slug: 'varun-manoharan',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5327',
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2312,
				name: 'Lisa Teo',
				slug: 'lisa-teo',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: null,
				userId: null,
				location: null,
				socialNetworks: []
			},
			{
				_strapiId: 2311,
				name: 'Andy van der Gugten',
				slug: 'andy-van-der-gugten',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5302',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/andreasvandergugten/'
					}
				]
			},
			{
				_strapiId: 2357,
				name: 'Sergio de la Casa',
				slug: 'sergio-de-la-casa',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5431',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sergiodelacasa/'
					}
				]
			},
			{
				_strapiId: 2313,
				name: 'Arvindh Sundar',
				slug: 'arvindh-sundar',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5307',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/arvindhsundar/'
					}
				]
			},
			{
				_strapiId: 2322,
				name: 'Vaishali Naik',
				slug: 'vaishali-naik',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5316',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vaishali-naik-a182516?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
					}
				]
			},
			{
				_strapiId: 2316,
				name: 'Roshni S',
				slug: 'roshni-s',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5310',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rsanto'
					}
				]
			},
			{
				_strapiId: 2317,
				name: 'Alka Chadha',
				slug: 'alka-chadha',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5311',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dr-alka-chadha-emotionalintelligence'
					}
				]
			},
			{
				_strapiId: 2318,
				name: 'Soumya K',
				slug: 'soumya-k',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5312',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/soumya-k-7a053058'
					}
				]
			},
			{
				_strapiId: 2319,
				name: 'Vidya GV',
				slug: 'vidya-gv',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5313',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'www.linkedin.com/in/vidyagv'
					}
				]
			},
			{
				_strapiId: 2358,
				name: 'Mabel Casares',
				slug: 'mabel-casares',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5432',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mabel-casares/'
					}
				]
			},
			{
				_strapiId: 2320,
				name: 'Diyanat Ali',
				slug: 'diyanat-ali',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5314',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://in.linkedin.com/in/diyanat'
					}
				]
			},
			{
				_strapiId: 2321,
				name: 'Aparajitha Murali',
				slug: 'aparajitha-murali',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5315',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/aparajitha-murali/'
					}
				]
			},
			{
				_strapiId: 2323,
				name: 'Shreya Govind',
				slug: 'shreya-govind',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5317',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/dr-shreyagovind/'
					}
				]
			},
			{
				_strapiId: 2324,
				name: 'Miriam Korula',
				slug: 'miriam-korula',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5318',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/miriamkorula/'
					}
				]
			},
			{
				_strapiId: 2325,
				name: 'Vivekanandan Ramasamy',
				slug: 'vivekanandan-ramasamy',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5321',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vivekanandan-ramasamy-076a127/'
					}
				]
			},
			{
				_strapiId: 2330,
				name: 'Nicole Molina Cárdenas',
				slug: 'nicole-molina-cardenas',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5334',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/nicole-molina-c%C3%A1rdenas-8a092275/'
					}
				]
			},
			{
				_strapiId: 2359,
				name: 'Tamara Cuevas',
				slug: 'tamara-cuevas',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5433',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/tamara-cuevas-merino-165125111/'
					}
				]
			},
			{
				_strapiId: 2326,
				name: 'Vignesh Jayaraman',
				slug: 'vignesh-jayaraman',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5322',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/hivignesh'
					}
				]
			},
			{
				_strapiId: 2310,
				name: 'Matteo Mazzeri',
				slug: 'matteo-mazzeri',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5301',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/mazzeri/'
					}
				]
			},
			{
				_strapiId: 2327,
				name: 'Neependra Khare',
				slug: 'neependra-khare',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5324',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'http://linkedin.com/in/neependra'
					}
				]
			},
			{
				_strapiId: 2328,
				name: 'Malleswari Nandiraju',
				slug: 'malleswari-nandiraju',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5326',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'www.linkedin.com/in/malleswari-nandiraju-7a55716'
					}
				]
			},
			{
				_strapiId: 2360,
				name: 'Begoña Pino',
				slug: 'begona-pino',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5434',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/begonapino/'
					}
				]
			},
			{
				_strapiId: 2164,
				name: 'Bruno Morais',
				slug: 'bruno-morais',
				position: 'Host',
				company: 'Mercedes-Benz.io',
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5081',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bpmorais/'
					}
				]
			},
			{
				_strapiId: 1503,
				name: 'Cédric Pontet',
				slug: 'cedric-pontet',
				position: 'Founder',
				company: 'Agile Partner',
				tagline:
					'CTO | Software architect | Agile coach | EventStormer | Sketchnoter | Happy Salmon guru',
				bio: "<p>I am very proud of being one of the founders of <strong>#play14</strong> .</p><p>Since it started, it has been nothing but joy and an extraordinary human adventure. I am so happy to see all the organizers and participants around the world getting so involved.</p><p>#play14 belongs to them now. It's out in the world and that's a great feeling.</p>",
				website: 'https://agilepartner.net',
				avatarId: 'file_5064',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:cedric@play14.org'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/cpontet'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/c%C3%A9dric-pontet-4025955'
					}
				]
			},
			{
				_strapiId: 2340,
				name: 'Johanna Amlacher',
				slug: 'johanna-amlacher',
				position: 'Host',
				company: 'Willhaben',
				tagline: 'Agile Coach',
				bio: '<p><span style="background-color:rgb(255,255,255);color:rgba(0,0,0,0.9);font-family:-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif;font-size:16px;"><span style="-webkit-text-stroke-width:0px;caret-color:rgba(0, 0, 0, 0.9);display:inline !important;float:none;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">Fragestellerin und Dialog-‚ Veränderungs- &amp; Prozessbegleiterin begeistert von Menschen, Serious Games und der Zukunft</span></span></p>',
				website: null,
				avatarId: 'file_5379',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/johanna-amlacher/'
					}
				]
			},
			{
				_strapiId: 2361,
				name: 'Alexandra Martin',
				slug: 'alexandra-martin',
				position: 'Player',
				company: 'Marmelab',
				tagline: 'Facilitatrice chez Marmelab',
				bio: null,
				website: null,
				avatarId: 'file_5437',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/alexandra-mart'
					}
				]
			},
			{
				_strapiId: 2384,
				name: 'Grant ‘Upbeat’ Bosnick',
				slug: 'grant-upbeat-bosnick',
				position: 'Host',
				company: null,
				tagline: 'Award-Winning Author / Keynote Speaker / Founder of Upbeat®',
				bio: null,
				website: null,
				avatarId: 'file_5515',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/grantbosnick/'
					}
				]
			},
			{
				_strapiId: 2234,
				name: 'Abhishek Behl',
				slug: 'abhishek-behl',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5200',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/prof-abhishek-behl-61a8b225/'
					}
				]
			},
			{
				_strapiId: 2362,
				name: 'Jonathan Arnault',
				slug: 'jonathan-arnault',
				position: 'Player',
				company: 'Marmelab',
				tagline: 'Senior Software Engineer | Distributed Systems & Event Driven Applications',
				bio: null,
				website: null,
				avatarId: 'file_5438',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/jonathanarnault/'
					}
				]
			},
			{
				_strapiId: 2343,
				name: 'Błażej Goraj',
				slug: 'blazej-goraj',
				position: 'Player',
				company: null,
				tagline: 'I deliver games that teach how to win as a team – in projects and in change',
				bio: null,
				website: null,
				avatarId: 'file_5439',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/bgoraj/'
					}
				]
			},
			{
				_strapiId: 2364,
				name: 'François Freund',
				slug: 'francois-freund',
				position: 'Player',
				company: null,
				tagline: 'Créateur de jeux de société pédagogiques & Formateur',
				bio: null,
				website: null,
				avatarId: 'file_5440',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/francois-freund/'
					}
				]
			},
			{
				_strapiId: 2365,
				name: 'Rachel Porté',
				slug: 'rachel-porte',
				position: 'Player',
				company: 'CSSF',
				tagline: 'Project Manager - Lean Expert - Excellence opérationnelle',
				bio: null,
				website: null,
				avatarId: 'file_5441',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rachel-port%C3%A9-99184779/'
					}
				]
			},
			{
				_strapiId: 2366,
				name: 'Francesco Di Martino',
				slug: 'francesco-di-martino',
				position: 'Player',
				company: 'CSSF',
				tagline: 'Project Manager - Excellence Opérationnelle',
				bio: null,
				website: null,
				avatarId: 'file_5442',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/francesco-di-martino-826b532/'
					}
				]
			},
			{
				_strapiId: 1500,
				name: 'Cédric Morin',
				slug: 'cedric-morin',
				position: 'Player',
				company: 'ING Luxembourg',
				tagline: 'Scrum Master',
				bio: null,
				website: null,
				avatarId: 'file_3669',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/cedricmorin/'
					}
				]
			},
			{
				_strapiId: 2367,
				name: 'Paul Cieslar',
				slug: 'paul-cieslar',
				position: 'Player',
				company: 'Extia',
				tagline: 'Consultant | Coach Professionnel Certifié',
				bio: null,
				website: null,
				avatarId: 'file_5443',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/paul-cieslar/'
					}
				]
			},
			{
				_strapiId: 2386,
				name: 'Ákos Ostadal-Szederjei',
				slug: 'akos-ostadal-szederjei',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5504',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/akos-ostadal-szederjei-61357b159/'
					}
				]
			},
			{
				_strapiId: 2368,
				name: 'Sarah Peculier',
				slug: 'sarah-peculier',
				position: 'Player',
				company: null,
				tagline: 'Étudiante en master 2 de psychologie clinique légale',
				bio: null,
				website: null,
				avatarId: 'file_5444',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sarah-peculier/'
					}
				]
			},
			{
				_strapiId: 2369,
				name: 'Pierre Connes',
				slug: 'pierre-connes',
				position: 'Player',
				company: 'Epitech',
				tagline: 'Etudiant',
				bio: null,
				website: null,
				avatarId: 'file_5445',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/pierre-connes/'
					}
				]
			},
			{
				_strapiId: 2374,
				name: 'Parichart Phootirat (Aom)',
				slug: 'parichart-phootirat-aom',
				position: 'Host',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5449',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2387,
				name: 'Lucy Chambers',
				slug: 'lucy-chambers',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5505',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/lucyfedia'
					}
				]
			},
			{
				_strapiId: 2377,
				name: 'Annegrit Schmitz',
				slug: 'annegrit-schmitz',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5460',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/annegrit-schmitz/'
					}
				]
			},
			{
				_strapiId: 2388,
				name: 'Daniel Carrilho',
				slug: 'daniel-carrilho',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5506',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/daniel-carrilho-1a82398'
					}
				]
			},
			{
				_strapiId: 2371,
				name: 'Pamas Limpiwatana  (Pam)',
				slug: 'pamas-limpiwatana-pam',
				position: 'Host',
				company: 'self-employed',
				tagline: null,
				bio: '<p>Coach | Facilitator | Connector | Player (and proud hooker 🧶)</p><p>Started as a pharmacist, grew through beauty retail, and found my purpose in helping people grow—from the inside out.</p><p>I design learning spaces that are playful, safe, and real. Where people feel seen, heard, and inspired to connect—with each other and with themselves.</p><p>I believe in the power of small moments, deep listening, and authentic relationships. And I carry yarn and curiosity wherever I go!</p>',
				website: null,
				avatarId: 'file_5452',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'http://linkedin.com/in/pamaslim'
					},
					{
						type: 'Other',
						url: 'https://www.tiktok.com/@we.think.do?_t=ZS-8wcgZacpZUl&_r=1'
					}
				]
			},
			{
				_strapiId: 2376,
				name: 'Poopha Teerachotpokin',
				slug: 'poopha-teerachotpokin',
				position: 'Host',
				company: 'We Think Do',
				tagline: null,
				bio: '<p>I am a freelance graphic designer with experience in a wide range of creative services, including logo design, banner creation, and promotional media. In addition to visual design, I also specialize in video editing and voice-over work. My voice-over services cover various formats such as commercials, public announcements, audiobooks, audio dramas, and dubbing for films and animations. With a strong commitment to quality and creativity, I strive to deliver professional results tailored to each client’s needs.</p>',
				website: null,
				avatarId: 'file_5450',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2372,
				name: 'Rachata Channoi  (Choop)',
				slug: 'rachata-channoi-choop',
				position: 'Host',
				company: null,
				tagline: null,
				bio: '<p>Tacit Knowledge Decoder, Signature Course Creator, Expert in Business and Transformative Learning Design. 20+ Years in Strategic Planning, Learning Design, and Knowledge Management. Certified Facilitator in AL, DiSC, and Innovative with CARE. Purpose-driven to enhance tacit knowledge and turn it into actionable impact.</p>',
				website: null,
				avatarId: 'file_5451',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2375,
				name: 'Tanawat Akharametawee (Top)',
				slug: 'tanawat-akharametawee-top',
				position: 'Host',
				company: 'We Think Do',
				tagline: null,
				bio: '<p>I am an online marketing who collaborates with clients to drive growth. I am capable of everything from developing marketing plans, analyzing backend data, running ad campaigns, producing video content, and creating artwork, to managing backend systems that enhance discoverability. I aspire to be a successful person and grow alongside my clients.</p>',
				website: null,
				avatarId: 'file_5448',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: []
			},
			{
				_strapiId: 2378,
				name: 'Dmitry Podkorytov',
				slug: 'dmitry-podkorytov',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5461',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/podkorytov/'
					}
				]
			},
			{
				_strapiId: 2389,
				name: 'Anna Herbst',
				slug: 'anna-herbst',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5507',
				userId: null,
				location: null,
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/the-1-anna-herbst/'
					}
				]
			},
			{
				_strapiId: 2370,
				name: 'Chompoonuch Tojaroen (Chompoo)',
				slug: 'chompoonuch-tojaroen-chompoo',
				position: 'Host',
				company: 'Inlight Consulting Co., LTD. ',
				tagline: null,
				bio: "<p>I’m all about turning “blah” training into “aha!” moments! With a toolkit full of fun and proven methods—like Lego® Serious Play®, brain-based learning, coaching magic (ICF-ACC), agile thinking (ICP-CAT &amp; ICP-ENT), Design Thinking, and even a dash of NLP—I turn dry, complicated content into lively, interactive learning that sticks. Whether it's sparking joy in a workshop or boosting performance through smarter learning design, I help teams connect, grow, and actually *enjoy* the process. Learning shouldn’t feel like a chore—it should feel like progress, with a smile. Let’s make that happen together!</p>",
				website: 'https://linktr.ee/coachchom',
				avatarId: 'file_5447',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/coachchom/'
					},
					{
						type: 'Website',
						url: 'https://coachchomcreativelearning.com/home'
					}
				]
			},
			{
				_strapiId: 2373,
				name: 'Panupan  Peasura (Jo)',
				slug: 'panupan-peasura-jo',
				position: 'Host',
				company: 'We Think Do',
				tagline: null,
				bio: '<p>I am an online marketer who believes in collaborating with clients to build sustainable growth. I don’t just create marketing plans, but also help analyze client identity and character, sharing knowledge and advertising strategies professionally. I also ensure backend systems are optimized so clients are easily found and noticed. My happiness comes from seeing my clients succeed and growing alongside them like a trusted friend. I am Joe. Together, we think and do."</p>',
				website: null,
				avatarId: 'file_5446',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/Digital.So.Good'
					}
				]
			},
			{
				_strapiId: 2385,
				name: 'Benjamin Aw',
				slug: 'benjamin-aw',
				position: 'Host',
				company: null,
				tagline:
					'Gamification Architect | Innovation Management & Organization Development Facilitator | Coach | Trainer',
				bio: null,
				website: null,
				avatarId: 'file_5503',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/benjaminawwx/'
					}
				]
			},
			{
				_strapiId: 2382,
				name: 'Charlotte Goh',
				slug: 'charlotte-goh',
				position: 'Host',
				company: null,
				tagline: 'Executive Director, Playeum',
				bio: null,
				website: null,
				avatarId: 'file_5467',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/charlotte-goh-269b086/'
					}
				]
			},
			{
				_strapiId: 2390,
				name: 'Patrícia Bispo',
				slug: 'patricia-bispo',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5510',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/patriciabispo/'
					}
				]
			},
			{
				_strapiId: 2126,
				name: 'Rita Cardoso',
				slug: 'rita-cardoso',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5036',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/rita-cardoso-18423a2/'
					}
				]
			},
			{
				_strapiId: 2299,
				name: 'Sara Madaleno',
				slug: 'sara-madaleno',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5257',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/sara-madaleno-347568/'
					}
				]
			},
			{
				_strapiId: 2391,
				name: 'Vanessa Sotano',
				slug: 'vanessa-sotano',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5511',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/vanessasotano/'
					}
				]
			},
			{
				_strapiId: 2393,
				name: 'Miguel Graça',
				slug: 'miguel-graca',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5513',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/miguelrussograca'
					}
				]
			},
			{
				_strapiId: 2394,
				name: 'Rui Neves',
				slug: 'rui-neves',
				position: 'Player',
				company: null,
				tagline: null,
				bio: null,
				website: null,
				avatarId: 'file_5514',
				userId: null,
				location: {
					lat: 0,
					lng: 0,
					address: null
				},
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/ruineves/'
					}
				]
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('players', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated players ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate players ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for players: ${results.length}/${data.length} records`);
		return results;
	}
});
