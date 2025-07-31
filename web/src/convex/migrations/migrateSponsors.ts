import { mutation } from './_generated/server';

// Migration function for sponsors
export const migrateSponsors = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for sponsors...');

		const data = [
			{
				_strapiId: 95,
				name: 'Thinslices',
				url: 'https://www.thinslices.com/',
				logoId: 'file_4826',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/Thinslices'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/thinslices'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/thinslices'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/thinslicestech/'
					}
				]
			},
			{
				_strapiId: 97,
				name: 'German-Philippine Chamber of Commerce and Industry (GPCCI)',
				url: 'https://philippinen.ahk.de/en/',
				logoId: 'file_4840',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/gpcci/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/GPCCI.org'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/@ahkphilippinen2135/videos'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/AHK_Philippinen'
					}
				]
			},
			{
				_strapiId: 99,
				name: 'Metalog Training Tools',
				url: 'https://metalogtools.asia/',
				logoId: 'file_4845',
				socialNetworks: []
			},
			{
				_strapiId: 8,
				name: 'The Serious Games Podcast',
				url: 'http://seriousgamespodcast.com/',
				logoId: 'file_3571',
				socialNetworks: []
			},
			{
				_strapiId: 61,
				name: 'Dark Horse',
				url: 'https://www.thedarkhorse.de/',
				logoId: 'file_4848',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/thedarkhorse.de'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/darkhorseberlin'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/dark-horse-gmbh/?originalSubdomain=de'
					},
					{
						type: 'Xing',
						url: 'https://www.xing.com/companies/darkhorsegmbh%26co.kg'
					}
				]
			},
			{
				_strapiId: 101,
				name: 'Hanei Kibin',
				url: 'https://haneikibin.com/',
				logoId: 'file_4883',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/profile.php?id=100087826063674&_rdc=2&_rdr'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/haneikibin/'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/hanei-kibin/'
					}
				]
			},
			{
				_strapiId: 15,
				name: 'Agile Classrooms',
				url: 'https://agileclassrooms.org/',
				logoId: 'file_3561',
				socialNetworks: []
			},
			{
				_strapiId: 103,
				name: 'Socragile',
				url: 'https://www.socraagile.ch',
				logoId: 'file_4887',
				socialNetworks: []
			},
			{
				_strapiId: 105,
				name: 'People Excellence',
				url: 'https://www.peoplexcellence.com/index.html#1',
				logoId: 'file_5018',
				socialNetworks: []
			},
			{
				_strapiId: 55,
				name: 'Angler Film',
				url: 'https://vimeo.com/anglerfilm',
				logoId: 'file_3533',
				socialNetworks: [
					{
						type: 'Vimeo',
						url: 'https://vimeo.com/anglerfilm'
					}
				]
			},
			{
				_strapiId: 4,
				name: 'The Debriefing Cube',
				url: 'http://thedebriefingcube.com/',
				logoId: 'file_3570',
				socialNetworks: []
			},
			{
				_strapiId: 81,
				name: 'Meeting Spicers',
				url: 'https://www.indiegogo.com/projects/the-meeting-spicer#/',
				logoId: 'file_3525',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/MeetingSpicer'
					}
				]
			},
			{
				_strapiId: 25,
				name: 'Agile Reloaded',
				url: 'http://www.agilereloaded.it/',
				logoId: 'file_3498',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:info@agilereloaded.it'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/agilereloaded'
					}
				]
			},
			{
				_strapiId: 46,
				name: 'Lavazza',
				url: 'http://www.lavazza.lu/',
				logoId: 'file_4637',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/europoint.lu/'
					}
				]
			},
			{
				_strapiId: 74,
				name: 'Yunikon Academy',
				url: 'https://yunikon.academy/',
				logoId: 'file_3586',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:info@yunikon.academy'
					}
				]
			},
			{
				_strapiId: 43,
				name: 'emetriq',
				url: 'https://www.emetriq.com/en/',
				logoId: 'file_3584',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/emetriq'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/emetriq'
					}
				]
			},
			{
				_strapiId: 18,
				name: 'Agile Azteca',
				url: null,
				logoId: 'file_3562',
				socialNetworks: []
			},
			{
				_strapiId: 53,
				name: 'digital.mente//',
				url: 'http://digitalmente.es/',
				logoId: 'file_3511',
				socialNetworks: [
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/digitalmentefotovideo/'
					},
					{
						type: 'Vimeo',
						url: 'https://vimeo.com/user434261'
					}
				]
			},
			{
				_strapiId: 17,
				name: 'Bubbling Mind',
				url: null,
				logoId: 'file_4638',
				socialNetworks: []
			},
			{
				_strapiId: 36,
				name: '7Pixel',
				url: 'http://www.7pixel.it/',
				logoId: 'file_3564',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/361906/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/hashtag/7pixel?src=hash'
					}
				]
			},
			{
				_strapiId: 54,
				name: 'Utopic School',
				url: 'https://www.utopicus.es/es/events/index/205126922/formacion',
				logoId: 'file_3518',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/utopic_us'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/UtopicUsTV'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/utopic_us/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/utopicschool/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/utopic_us/'
					}
				]
			},
			{
				_strapiId: 3,
				name: 'Catering Anmama',
				url: 'https://www.anmamacatering.com/',
				logoId: 'file_3590',
				socialNetworks: []
			},
			{
				_strapiId: 33,
				name: 'TEAMLABS/',
				url: 'http://www.teamlabs.es/es',
				logoId: 'file_3512',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/school/3321408/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/teamlabs'
					}
				]
			},
			{
				_strapiId: 87,
				name: 'ABN-Amro',
				url: 'https://www.abnamro.com',
				logoId: 'file_3588',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/abnamro'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/abn-amro'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/abnamro'
					}
				]
			},
			{
				_strapiId: 31,
				name: 'Nokia Romania',
				url: 'http://www.nokia.com/ro_ro',
				logoId: 'file_3501',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/nokia'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/1070/'
					}
				]
			},
			{
				_strapiId: 62,
				name: 'Xing Porto',
				url: 'http://www.xing.careers/helloporto',
				logoId: 'file_3540',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/XING_pt'
					}
				]
			},
			{
				_strapiId: 70,
				name: 'Markhof',
				url: 'https://markhof.wien/',
				logoId: 'file_3553',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/markhof.wien'
					}
				]
			},
			{
				_strapiId: 63,
				name: 'MicroMarche',
				url: 'http://www.micromarche.com',
				logoId: 'file_3513',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/micromarche/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/micromarche/'
					}
				]
			},
			{
				_strapiId: 68,
				name: 'TheWorkshopper',
				url: 'https://theworkshopper.com/',
				logoId: 'file_3585',
				socialNetworks: [
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/the_workshopper/'
					}
				]
			},
			{
				_strapiId: 56,
				name: 'Detuatu Formacion',
				url: 'http://www.detuatuformacion.es/',
				logoId: 'file_3519',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/detuatuform'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/detuatuformacion'
					}
				]
			},
			{
				_strapiId: 19,
				name: 'AIGLU',
				url: 'http://aiglu.org/',
				logoId: 'file_3514',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:info@aiglu.org'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/aiglu'
					}
				]
			},
			{
				_strapiId: 69,
				name: 'DIUS',
				url: 'https://dius.com.au/',
				logoId: 'file_3528',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/dius-computing/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/dius_au'
					}
				]
			},
			{
				_strapiId: 48,
				name: 'Vichy Catalan',
				url: 'http://www.vichy-catalan.com/',
				logoId: 'file_3574',
				socialNetworks: [
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/VichyCatalan'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/pages/Vichy-Catalan/461772270556544?fref=ts'
					}
				]
			},
			{
				_strapiId: 76,
				name: 'More Shiny Eyes',
				url: 'https://www.kickstarter.com/projects/wondercards/wondercards-amazing-workshops-trainings-and-sessio',
				logoId: 'file_3560',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/in/petranovskaja/'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/c/more-shiny-eyes'
					}
				]
			},
			{
				_strapiId: 80,
				name: 'Altitude Software',
				url: 'https://www.altitude.com/',
				logoId: 'file_3587',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/altitudesoftware?fref=ts'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/AltitudeSoft'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/user/AltitudeSoftware'
					}
				]
			},
			{
				_strapiId: 42,
				name: 'Herman Miller',
				url: 'http://www.hermanmiller.com/',
				logoId: 'file_3538',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/hermanmillerltd'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/hermanmiller.europe'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/showcase/15217829/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/hermanmillerltd/'
					}
				]
			},
			{
				_strapiId: 10,
				name: 'Agile Women',
				url: null,
				logoId: 'file_3557',
				socialNetworks: []
			},
			{
				_strapiId: 44,
				name: 'Launchlabs',
				url: 'http://launchlabs.ch/',
				logoId: 'file_3499',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/launchlabsbasel'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/launchlabs.ch'
					}
				]
			},
			{
				_strapiId: 75,
				name: 'Business Agility Mexico',
				url: 'https://twitter.com/Agil_BAMEX',
				logoId: 'file_3520',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/pages/category/Community/Business-Agility-M%C3%A9xico-2534210283471312/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Agil_BAMEX'
					}
				]
			},
			{
				_strapiId: 45,
				name: 'Foyer',
				url: 'http://www.foyer.lu/',
				logoId: 'file_3527',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/foyer-assurances'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/foyer.luxembourg/'
					}
				]
			},
			{
				_strapiId: 89,
				name: 'Fab Lab Iași',
				url: 'https://fablabiasi.spaces.nexudus.com/',
				logoId: 'file_3556',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/fablabiasi'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/fablabiasi'
					}
				]
			},
			{
				_strapiId: 82,
				name: 'La Cuina',
				url: 'http://www.lacuinarestaurante.es/',
				logoId: 'file_3532',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/la.restaurante'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/lacuinamadrid'
					}
				]
			},
			{
				_strapiId: 35,
				name: 'PlanetExpat',
				url: 'http://planetexpat.org/',
				logoId: 'file_3497',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:info@planetexpat.org'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/PlanetExpat'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/2949016'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/PlanetExpat'
					}
				]
			},
			{
				_strapiId: 58,
				name: 'Critical Software',
				url: 'https://www.criticalsoftware.com',
				logoId: 'file_3510',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/CriticalSftware'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/criticalsoftware'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/critical-software'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/criticalsoftware'
					}
				]
			},
			{
				_strapiId: 30,
				name: 'Stattys',
				url: 'http://www.stattys.com',
				logoId: 'file_3544',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/stattys_world'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/Stattys'
					}
				]
			},
			{
				_strapiId: 27,
				name: 'Nokia',
				url: 'https://www.nokia.com',
				logoId: 'file_3495',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/nokia'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/nokia/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/nokia/'
					}
				]
			},
			{
				_strapiId: 41,
				name: 'Artefact',
				url: 'https://artefactshop.com/',
				logoId: 'file_3530',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/Artefact_Cards'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/ArtefactCards'
					}
				]
			},
			{
				_strapiId: 72,
				name: 'SessionLab',
				url: 'https://www.sessionlab.com/',
				logoId: 'file_3550',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/SessionLab'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/SessionLab'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/trainedon/'
					}
				]
			},
			{
				_strapiId: 64,
				name: 'Farfetch',
				url: 'http://www.farfetch.com/careers',
				logoId: 'file_3541',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/farfetch.com/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/farfetchpeople'
					}
				]
			},
			{
				_strapiId: 14,
				name: 'Academio',
				url: null,
				logoId: 'file_3552',
				socialNetworks: []
			},
			{
				_strapiId: 5,
				name: 'Kaffee Form',
				url: 'http://www.kaffeeform.com',
				logoId: 'file_3547',
				socialNetworks: []
			},
			{
				_strapiId: 73,
				name: 'Talkdesk',
				url: 'https://www.talkdesk.com',
				logoId: 'file_3543',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/talkdesk'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/talkdesk/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/talkdesk'
					}
				]
			},
			{
				_strapiId: 66,
				name: 'INS',
				url: 'https://inscm.com.au/',
				logoId: null,
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:enquiry@inscm.com.au'
					}
				]
			},
			{
				_strapiId: 79,
				name: 'Wemanity',
				url: 'https://wemanity.com/',
				logoId: 'file_3551',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/Wemanity'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/wemanity'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/wemanity'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/channel/UC6OtUOYvbMIjs1RX0sXhffg'
					}
				]
			},
			{
				_strapiId: 83,
				name: 'loco-motiv',
				url: 'http://www.loco-motiv.ch',
				logoId: 'file_3529',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/hoststarhosting'
					}
				]
			},
			{
				_strapiId: 77,
				name: 'Palo IT',
				url: 'https://www.palo-it.com/',
				logoId: 'file_3521',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/Palo_IT'
					}
				]
			},
			{
				_strapiId: 71,
				name: 'Proyectum',
				url: 'https://www.proyectum.com/mx/',
				logoId: 'file_3589',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/proyectummx'
					}
				]
			},
			{
				_strapiId: 86,
				name: 'brainspire GbR',
				url: 'https://brainspire.de/',
				logoId: 'file_3554',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/brainspire-gbr'
					}
				]
			},
			{
				_strapiId: 22,
				name: 'Marmelab',
				url: 'http://marmelab.com/',
				logoId: 'file_3494',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:info@marmelab.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/marmelab'
					}
				]
			},
			{
				_strapiId: 9,
				name: 'Agile Coach Camp Canada',
				url: 'http://agilecoachcampcanada.ca/',
				logoId: 'file_3569',
				socialNetworks: []
			},
			{
				_strapiId: 32,
				name: 'Nokia France',
				url: 'https://www.nokia.com/fr_int',
				logoId: 'file_3501',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/nokia'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/1070/'
					}
				]
			},
			{
				_strapiId: 34,
				name: 'DaWanda Snuggery',
				url: 'https://de.dawanda.com/mkt/dawanda-snuggery',
				logoId: 'file_3548',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:snuggery@dawanda.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/dawanda_de'
					}
				]
			},
			{
				_strapiId: 37,
				name: 'Neuland',
				url: 'http://www.neuland.com/',
				logoId: 'file_3503',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:info@neuland.com'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/neuland'
					}
				]
			},
			{
				_strapiId: 23,
				name: 'Agile Partner',
				url: 'http://agilepartner.net/',
				logoId: 'file_3500',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:contact@agilepartner.net'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/AgilePartner'
					}
				]
			},
			{
				_strapiId: 24,
				name: 'Technoport',
				url: 'http://www.technoport.lu',
				logoId: 'file_3493',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:incubator@technoport.lu'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/Technoport_Lux'
					}
				]
			},
			{
				_strapiId: 50,
				name: 'Xebia',
				url: 'https://xebia.com',
				logoId: 'file_3546',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/xebia'
					},
					{
						type: 'Email',
						url: 'mailto:info@xebia.com'
					}
				]
			},
			{
				_strapiId: 28,
				name: 'Legamaster',
				url: 'http://www.legamaster.com/home/',
				logoId: 'file_3502',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/hashtag/legamaster'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/LegamasterBV'
					}
				]
			},
			{
				_strapiId: 78,
				name: 'oose',
				url: 'http://www.oose.de',
				logoId: 'file_3563',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:info@oose.de'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/ooseNews'
					}
				]
			},
			{
				_strapiId: 20,
				name: 'Miro',
				url: 'https://miro.com/?utm_source=play14.org&utm_medium=referral&utm_campaign=play14',
				logoId: 'file_3531',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/mirohq'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/mirohq/'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/RealtimeBoardEng/'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/TryMiro/'
					}
				]
			},
			{
				_strapiId: 52,
				name: 'Everis LivingLab',
				url: 'https://www.everis.com/spain/es/everis-living-lab',
				logoId: 'file_3539',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/everis'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/everisgroup'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/everis'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/everis'
					}
				]
			},
			{
				_strapiId: 85,
				name: 'Strategiefabriek',
				url: 'https://www.strategiefabriek.nl/',
				logoId: 'file_3535',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/strategiefab'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/strategiefabriek'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/strategiefabriek'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/strategiefabriek'
					}
				]
			},
			{
				_strapiId: 21,
				name: 'Mural',
				url: 'https://www.mural.co/',
				logoId: 'file_3536',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/mural/'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/mural.co'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/channel/UCUcf9nFefdwgOoKMQ6qiHeA'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/mural.co'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/mural_app/'
					}
				]
			},
			{
				_strapiId: 49,
				name: 'BBVA Open Space',
				url: 'https://openspace.bbva.com/madrid/en/',
				logoId: 'file_3537',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/bbvainnovation'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/bbva'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/centrodeinnovacionbbva'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/centroinnovacionbbva'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/cibbva/'
					}
				]
			},
			{
				_strapiId: 12,
				name: 'Yorkshire Building Society',
				url: 'https://www.ybs.co.uk/',
				logoId: 'file_3526',
				socialNetworks: []
			},
			{
				_strapiId: 7,
				name: 'Strempel Beratung+Coaching',
				url: 'https://www.strempel.info',
				logoId: 'file_3549',
				socialNetworks: []
			},
			{
				_strapiId: 6,
				name: 'AgentEx',
				url: 'https://www.agentex.at/',
				logoId: 'file_3524',
				socialNetworks: []
			},
			{
				_strapiId: 96,
				name: 'Cepsa',
				url: 'https://www.cepsa.es',
				logoId: 'file_4829',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/cepsa_es?lang=en'
					},
					{
						type: 'LinkedIn',
						url: 'https://es.linkedin.com/company/cepsa'
					},
					{
						type: 'Facebook',
						url: 'https://es-es.facebook.com/CEPSAespana/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/cepsa/'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/CEPSAofficial'
					}
				]
			},
			{
				_strapiId: 98,
				name: 'Surfeando el cambio',
				url: 'https://www.surfeandoelcambio.com/',
				logoId: 'file_4844',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/surfeando-el-cambio/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/surfeandocambio'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/channel/UC38JScVSTO_GGxOqEXg2iGg'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/surfeandoelcambio/'
					}
				]
			},
			{
				_strapiId: 100,
				name: 'The Learning Gym',
				url: 'https://thelearninggym.co/',
				logoId: 'file_4846',
				socialNetworks: []
			},
			{
				_strapiId: 102,
				name: 'Palladio Trusted Advisers',
				url: 'https://www.palladio.net',
				logoId: 'file_4886',
				socialNetworks: []
			},
			{
				_strapiId: 104,
				name: 'Nicole Helmerich',
				url: 'https://nicole-helmerich.com',
				logoId: 'file_4888',
				socialNetworks: []
			},
			{
				_strapiId: 106,
				name: 'Menschgeist GmbH',
				url: 'https://agilesqr.com',
				logoId: 'file_5035',
				socialNetworks: []
			},
			{
				_strapiId: 107,
				name: 'Memox',
				url: 'https://www.memox.com/',
				logoId: 'file_5061',
				socialNetworks: []
			},
			{
				_strapiId: 110,
				name: 'Movimiento Actitud Emprendedora',
				url: 'https://www.patreon.com/jesushijas?l=es',
				logoId: 'file_5191',
				socialNetworks: []
			},
			{
				_strapiId: 111,
				name: 'Underground Clubhouse',
				url: 'https://www.ufer.com/',
				logoId: 'file_5238',
				socialNetworks: [
					{
						type: 'Website',
						url: 'https://www.ufer.com/'
					}
				]
			},
			{
				_strapiId: 112,
				name: 'De tu a tu',
				url: 'https://www.detuatuformacion.es/',
				logoId: 'file_5251',
				socialNetworks: []
			},
			{
				_strapiId: 113,
				name: "Fancy Donuts (F'hain)",
				url: 'https://fancy-donuts.com/stores/friedrichshain/',
				logoId: 'file_5252',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/fancy-donuts-gmbh/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/fancydonuts_berlin_fh/'
					}
				]
			},
			{
				_strapiId: 114,
				name: 'UST',
				url: 'https://www.ust.com/es',
				logoId: 'file_5253',
				socialNetworks: []
			},
			{
				_strapiId: 115,
				name: 'vlyfoods',
				url: 'https://www.linkedin.com/company/vlyfoods/',
				logoId: 'file_5256',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/vlyfoods/'
					},
					{
						type: 'Instagram',
						url: 'https://www.linkedin.com/company/vlyfoods/'
					}
				]
			},
			{
				_strapiId: 117,
				name: 'PIXO Events',
				url: 'https://pixo.sg/',
				logoId: 'file_5289',
				socialNetworks: []
			},
			{
				_strapiId: 2,
				name: 'Agile²',
				url: 'https://agilesqr.com/',
				logoId: 'file_3572',
				socialNetworks: []
			},
			{
				_strapiId: 1,
				name: 'We&Co',
				url: 'https://wecompany.me/',
				logoId: 'file_3496',
				socialNetworks: []
			},
			{
				_strapiId: 11,
				name: 'Playful Insights',
				url: 'https://www.playful-insights.de',
				logoId: 'file_3573',
				socialNetworks: []
			},
			{
				_strapiId: 16,
				name: 'Scrum Mexico',
				url: null,
				logoId: 'file_3565',
				socialNetworks: []
			},
			{
				_strapiId: 13,
				name: 'Globant',
				url: null,
				logoId: 'file_3555',
				socialNetworks: []
			},
			{
				_strapiId: 84,
				name: 'Elbuna',
				url: 'http://www.elbuna.ch/',
				logoId: 'file_3523',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/elbunawerk'
					}
				]
			},
			{
				_strapiId: 88,
				name: 'The Sam Loyd Company',
				url: 'http://samloyd.com/',
				logoId: 'file_3559',
				socialNetworks: [
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/samloydco/'
					}
				]
			},
			{
				_strapiId: 93,
				name: 'Kaufland',
				url: null,
				logoId: 'file_4698',
				socialNetworks: []
			},
			{
				_strapiId: 47,
				name: 'Adventure With Agile',
				url: 'https://www.adventureswithagile.com/',
				logoId: null,
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/agileadventures'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/10490967/'
					}
				]
			},
			{
				_strapiId: 26,
				name: '[ki:]®Learning',
				url: 'http://www.kilearning.net',
				logoId: 'file_3505',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:frageE@kilearning.net'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/kiLearning'
					}
				]
			},
			{
				_strapiId: 116,
				name: 'National Library Board',
				url: 'https://www.nlb.gov.sg/main/home',
				logoId: 'file_5294',
				socialNetworks: []
			},
			{
				_strapiId: 118,
				name: 'Enova',
				url: 'https://www.enova-group.ch',
				logoId: 'file_5303',
				socialNetworks: []
			},
			{
				_strapiId: 119,
				name: 'Agile Suisse',
				url: 'https://www.agilesuisse.ch',
				logoId: 'file_5304',
				socialNetworks: []
			},
			{
				_strapiId: 109,
				name: 'Kairos',
				url: 'https://www.kairosds.com/',
				logoId: 'file_5405',
				socialNetworks: []
			},
			{
				_strapiId: 120,
				name: 'Yes to Play',
				url: 'www.yestoplay.com',
				logoId: 'file_5415',
				socialNetworks: []
			},
			{
				_strapiId: 29,
				name: 'The Extraordinaires',
				url: 'https://www.extraordinaires.com',
				logoId: 'file_3567',
				socialNetworks: [
					{
						type: 'Email',
						url: 'mailto:hello@extraordinaires.com'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/extraordinaires'
					}
				]
			},
			{
				_strapiId: 40,
				name: 'Societal Entrepreneurship',
				url: 'http://www.entrepreneurship-escpeurope.com/',
				logoId: 'file_3508',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/OptionEMadrid'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/OptionEMadrid'
					}
				]
			},
			{
				_strapiId: 38,
				name: 'Linda',
				url: 'http://lindalimon.com/',
				logoId: 'file_3566',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/tomalindalimon'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/tomalindalimon'
					}
				]
			},
			{
				_strapiId: 39,
				name: 'The Robot Museum',
				url: 'http://www.therobotmuseum.eu/',
				logoId: 'file_3504',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/therobotmuseum.eu'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/therobotmuseum'
					}
				]
			},
			{
				_strapiId: 90,
				name: 'Hindawi',
				url: 'https://hindawi.ro/',
				logoId: 'file_3568',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/HindawiIasi'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/hindawilimited/'
					}
				]
			},
			{
				_strapiId: 51,
				name: 'theventure.city',
				url: 'https://theventure.city/',
				logoId: 'file_3534',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/TheVentureCity'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/theventurecity/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/theventurecity/'
					}
				]
			},
			{
				_strapiId: 59,
				name: 'Agile Taste',
				url: 'http://agiletaste.com/',
				logoId: 'file_3517',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/AgileTaste'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/agile-taste/?originalSubdomain=es'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/agile.taste/'
					}
				]
			},
			{
				_strapiId: 60,
				name: 'Scopphu',
				url: 'https://scopphu.com/',
				logoId: 'file_3516',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/scopphu'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/c/Scopphupeopleandprojects'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/scopphu'
					}
				]
			},
			{
				_strapiId: 57,
				name: 'Jugacetamol',
				url: 'http://juegacetamol.es/',
				logoId: 'file_3509',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/juegacetamol'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/juegacetamol/'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/juegacetamol/'
					}
				]
			},
			{
				_strapiId: 65,
				name: 'EqualExperts',
				url: 'https://www.equalexperts.com/',
				logoId: 'file_3515',
				socialNetworks: [
					{
						type: 'Twitter',
						url: 'https://twitter.com/equalexperts'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/equal-experts?originalSubdomain=pt'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/EqualExperts'
					}
				]
			},
			{
				_strapiId: 67,
				name: 'Tyro',
				url: 'https://www.tyro.com/',
				logoId: 'file_3522',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/tyro-payments/'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/tyro'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/tyrolimited'
					}
				]
			},
			{
				_strapiId: 94,
				name: 'Prismo',
				url: null,
				logoId: 'file_4699',
				socialNetworks: []
			},
			{
				_strapiId: 91,
				name: 'Netmind',
				url: 'https://netmind.net/',
				logoId: 'file_3558',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/netmind'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/netmind_es'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/netmindtraining'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/netmind_group'
					}
				]
			},
			{
				_strapiId: 92,
				name: 'Netokracija',
				url: 'https://www.netokracija.com/',
				logoId: 'file_4697',
				socialNetworks: [
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/netokracija'
					},
					{
						type: 'Twitter',
						url: 'https://twitter.com/netokracija'
					},
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/netokracija'
					},
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/netokracija'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/user/netokracijatv'
					}
				]
			},
			{
				_strapiId: 121,
				name: 'Agile Spain',
				url: 'https://agile-spain.org/',
				logoId: 'file_5417',
				socialNetworks: []
			},
			{
				_strapiId: 122,
				name: 'Kasetsart University',
				url: 'https://www.ku.ac.th/th',
				logoId: 'file_5453',
				socialNetworks: []
			},
			{
				_strapiId: 123,
				name: 'Growing Centuries',
				url: 'https://growingcenturies.pt',
				logoId: 'file_5487',
				socialNetworks: [
					{
						type: 'Instagram',
						url: 'https://www.instagram.com/growing_centuries/'
					},
					{
						type: 'Youtube',
						url: 'https://www.youtube.com/@GrowingCenturies'
					},
					{
						type: 'Facebook',
						url: 'https://www.facebook.com/share/15Ubq6o8gy/?mibextid=LQQJ4d'
					}
				]
			},
			{
				_strapiId: 124,
				name: 'Fábrica da Ciência Viva - Aveiro',
				url: 'https://www.ua.pt/pt/fabrica/',
				logoId: 'file_5509',
				socialNetworks: []
			},
			{
				_strapiId: 108,
				name: 'Mercedes-Benz.io',
				url: 'https://www.mercedes-benz.io',
				logoId: 'file_5118',
				socialNetworks: [
					{
						type: 'LinkedIn',
						url: 'https://www.linkedin.com/company/mercedes-benz.io'
					}
				]
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('sponsors', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated sponsors ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate sponsors ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for sponsors: ${results.length}/${data.length} records`);
		return results;
	}
});
