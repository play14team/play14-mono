import { mutation } from './_generated/server';

// Migration function for events
export const migrateEvents = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for events...');

		const data = [
			{
				_strapiId: 98,
				name: 'Zoetermeer 2024',
				slug: 'zoetermeer-2024-09',
				start: 1727366400000,
				end: 1727532000000,
				timezone: 'Europe/Amsterdam',
				status: 'Over',
				description:
					'<p>#play14 is een wereldwijde bijeenkomst van gelijkgestemde mensen die geloven dat spelen de beste manier is om te leren, te delen en creatief te zijn!</p><p>#play14 is een unconference, waar alle deelnemers ook bijdragers zijn. Het enige wat je hoeft te doen, is op te komen dagen, en je krijgt de kans om zelf spellen voor te stellen of de spellen te spelen die door anderen zijn voorgesteld. De meeste mensen komen met spellen en speelse werkvormen om toe te passen op het werk.</p><p>Door de jaren heen zijn er mensen geweest uit de zorg, IT, creatieve branch, Telecommunicatie, creative branch, publieke sector, financiele sector...oftewel er is voor ieder wat wils.<br>&nbsp;</p><p><strong>Donderdagavond (Optioneel)</strong>: - Speels kennismaken - informele spellen - Snacks zijn inbegrepen.</p><p><strong>Vrijdag:</strong> - Gezamenlijk ontbijt (inbegrepen) - Opening en uitleg open space - Vullen van het programma. Iedereen mag zelf spellen, vragen, uitdagingen pitchen en op de agenda zetten. &nbsp;- Sessies en spellen - gezamenlijke spellen - Lunch en Dinner zijn inbegrepen - In de avond zijn er informele spellen, drankjes en snacks</p><p><strong>Zaterdag </strong>- Gezamenlijk ontbijt (inbegrepen) - Vullen van het programma. Iedereen mag zelf spellen, vragen, uitdagingen pitchen en op de agenda zetten. &nbsp;- Sessies en spellen - Gezamenlijke spellen - Lunch is inbegrepen Om 15.00 sluiten we af en om 16 uur zijn we klaar.</p><p>&nbsp;</p>',
				contactEmail: 'netherlands@play14.org',
				tagline: null,
				publishedAt: 1720821652088,
				updatedAt: 1727560800293,
				defaultImageId: 'file_5277',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice time all together.',
						timeslots: [
							{
								time: '20:00:00',
								description: 'Drinks / Snacks / Mingle'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://my.weezevent.com/play-14-nl',
					widgetCode:
						'<a title="Online tickets"\n   href="https://weezevent.com/?c=sys_widget"\n   class="weezevent-widget-integration"\n   data-src="https://widget.weezevent.com/ticket/E1173174/?color_primary=000000&locale=en-gb&width_auto=1&code=55717&neo=1&o=minisite"\n   data-width="650"\n   data-height="600"\n   data-id="1005691"\n   data-resize="1"\n   data-width_auto="1"\n   data-noscroll="0"\n   data-use-container="yes"\n   data-type="neo"\n   target="_blank">Tickets</a>\n'
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 90,
				name: 'Caramulo 2024',
				slug: 'caramulo-2024-06',
				start: 1719496800000,
				end: 1719667800000,
				timezone: 'Portugal',
				status: 'Over',
				description: '',
				contactEmail: 'porto@play14.org',
				tagline: null,
				publishedAt: null,
				updatedAt: 1719698400141,
				defaultImageId: 'file_5158',
				imageIds: ['file_5099', 'file_5100', 'file_5101', 'file_5102'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '17:30:00',
								description: 'Welcome'
							},
							{
								time: '18:00:00',
								description: 'IceBreakers'
							},
							{
								time: '19:00:00',
								description: 'Game All Together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the Market '
							},
							{
								time: '20:30:00',
								description: 'Dinner'
							},
							{
								time: '21:00:00',
								description: 'Party'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:20:00',
								description: 'Markeplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious Game'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '20:00:00',
								description: 'Dinner/Pizza'
							},
							{
								time: '21:45:00',
								description: 'Party'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:20:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Game'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious Game'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Time To say goodbye'
							},
							{
								time: '18:00:00',
								description: 'The End'
							}
						]
					}
				],
				registration: null,
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 17,
				name: 'Bangkok 2020',
				slug: 'bangkok-2020-05',
				start: 1588350600000,
				end: 1588518000000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="whatmeasureshasthailandtakentoavoidthecoronavirusoutbreak">What measures has Thailand taken to avoid the Coronavirus outbreak ?</h2>\n<iframe width="960" height="540" src="https://www.youtube.com/embed/3IYUQ6VMDfw" \n  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>\n</iframe>',
				contactEmail: 'thailand@play14.org',
				tagline: null,
				publishedAt: 1588357800000,
				updatedAt: 1677370773852,
				defaultImageId: 'file_3335',
				imageIds: ['file_3335', 'file_3336', 'file_3333', 'file_3334'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '16:00:00',
								description: 'Ice breakers'
							},
							{
								time: '18:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '19:30:00',
								description: 'Meet at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 19,
				name: 'Vienna 2019',
				slug: 'vienna-2019-09',
				start: 1567699200000,
				end: 1567868400000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'austria@play14.org',
				tagline: null,
				publishedAt: 1567706400000,
				updatedAt: 1678736637565,
				defaultImageId: 'file_3301',
				imageIds: ['file_3301', 'file_3297', 'file_3298', 'file_3300', 'file_3296', 'file_3299'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle / Beer at the venue'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:30:00',
								description: 'Start of Vienna City Game'
							},
							{
								time: '19:00:00',
								description: 'Dinner back at the venue'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":59989656678}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 12,
				name: 'Brussels 2019',
				slug: 'brussels-2019-09',
				start: 1569513600000,
				end: 1569682800000,
				timezone: 'UTC',
				status: 'Cancelled',
				description: '',
				contactEmail: 'brussels@play14.org',
				tagline: null,
				publishedAt: 1569520800000,
				updatedAt: 1692709413877,
				defaultImageId: 'file_3295',
				imageIds: ['file_3295'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 24,
				name: 'Hamburg 2020',
				slug: 'hamburg-2020-04',
				start: 1587745800000,
				end: 1587913200000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h1 id="unfortunatelythiseventiscancelledduetocoronawehopetobeabletohaveaneventlaterin2020">Unfortunately this event is cancelled due to Corona. We hope to be able to have an event later in 2020</h1>\n<h2 id="wehaveinitiatedtherefundofyourregistrationfees">We have initiated the refund of your registration fees.</h2>',
				contactEmail: 'hamburg@play14.org',
				tagline: null,
				publishedAt: 1587753000000,
				updatedAt: 1678736639398,
				defaultImageId: 'file_3340',
				imageIds: ['file_3340', 'file_3342', 'file_3344', 'file_3341', 'file_3487'],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Our local sponsors',
						sponsorIds: []
					},
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 4,
				name: 'Paris-Saclay 2018',
				slug: 'paris-saclay-2018-06',
				start: 1528387200000,
				end: 1528556400000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<p><a id="EventCancelled"></a></p>\n<h1 id="eventcancelled">EVENT CANCELLED</h1>\n<p>It is with great regret that we announce that due to a lack of participants, we had to cancel this event.</p>',
				contactEmail: 'paris@play14.org',
				tagline: null,
				publishedAt: 1528394400000,
				updatedAt: 1678736619406,
				defaultImageId: 'file_3211',
				imageIds: ['file_3211', 'file_3209', 'file_3210', 'file_3212'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening at Innovation City Nokia Campus, in Nozay City, belonging to Paris-Saclay’s Area.',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Welcome @ the welcome desk'
							},
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:30:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:30:00',
								description: 'Shuttle to Massy - Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'After play'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane or a train can leave earlier.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Gold Partner',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 3,
				name: 'Barcelona 2017',
				slug: 'barcelona-2017-10',
				start: 1508430600000,
				end: 1508598000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h1 id="articles">Articles</h1>\n<ul>\n<li><a href="https://francescmas.com/2017/08/16/top-5-benefits-of-to-play-in-the-workplace/"><em>Top 5 Benefits of to Play in the Workplace</em> by Francesc Mas</a></li>\n<li><a href="https://www.linkedin.com/pulse/do-you-play-work-natalia-martínez-lópez"><em>Do you play at work?</em> by Natalia Martínez López</a></li>\n</ul>\n<h1 id="teaser">Teaser</h1>\n<iframe width="1120" height="630" src="https://www.youtube.com/embed/vNK-LYqu-6Q" frameborder="0" allowfullscreen></iframe>\n<p>For the very first time, <strong>&#x23;play14</strong> will reach Barcelona for a great event.</p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1508437800000,
				updatedAt: 1678736625398,
				defaultImageId: 'file_3191',
				imageIds: ['file_3192', 'file_3191', 'file_3220', 'file_3216', 'file_3207'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":36409873913}'
				},
				sponsorships: [
					{
						category: 'Drinks',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/MTHLXBoejzY3k5xq2',
						type: 'Photos'
					},
					{
						url: 'https://www.linkedin.com/feed/update/urn:li:activity:6328871546194657280',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 8,
				name: 'Bari 2018',
				slug: 'bari-2018-12',
				start: 1544806800000,
				end: 1544889600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<p><strong>Check our site <a href="http://www.play14.it/">in Italian</a></strong></p>',
				contactEmail: 'milano@play14.org',
				tagline: null,
				publishedAt: 1544810400000,
				updatedAt: 1678736626703,
				defaultImageId: 'file_3250',
				imageIds: ['file_3250'],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Our global sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 10,
				name: 'Barcelona 2018',
				slug: 'barcelona-2018-10',
				start: 1539966600000,
				end: 1540134000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h3 id="forthesecondtimex23play14willreachbarcelonaforagreatevent">For the second time, <strong>&#x23;play14</strong> will reach Barcelona for a great event.</h3>\n<h2 id="watchx23play14barcelona2017video">Watch &#x23;play14 Barcelona 2017 video</h2>\n<video width="1024" controls>\n  <source src="/images/events/barcelona/1479932728445-v0ch3x.mp4" type="video/mp4">\nYour browser does not support the video tag.\n</video>',
				contactEmail: 'barcelona@play14.org',
				tagline: null,
				publishedAt: 1539973800000,
				updatedAt: 1678736629264,
				defaultImageId: 'file_3256',
				imageIds: ['file_3256', 'file_3254', 'file_3255'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":365021,"code":57774}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/qfZqy2nEFaVDJtGs5',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 5,
				name: 'Brussels 2018',
				slug: 'brussels-2018-10',
				start: 1538668800000,
				end: 1538838000000,
				timezone: 'UTC',
				status: 'Cancelled',
				description: '',
				contactEmail: 'brussels@play14.org',
				tagline: null,
				publishedAt: 1538676000000,
				updatedAt: 1678736629846,
				defaultImageId: 'file_3248',
				imageIds: ['file_3248', 'file_3247'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 13,
				name: 'Luxembourg 2020',
				slug: 'luxembourg-2020-03',
				start: 1584725400000,
				end: 1584892800000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="thefirsteditionoftheworldwideseriousgameeventorganizedinluxembourgforfamilies">The first edition of the worldwide serious game event organized in Luxembourg for Families</h2>\n<h3 id="thex23play14withfamiliesteamhasthepleasuretoinviteyoutotheirinternationalevent">The &#x23;play14 with Families Team has the pleasure to invite you to their international event!</h3>\n<p>This event has been designed to allow participants to use games as metaphors in a family or professional context. The purpose is to exchange good practices and knowledge amongst players. It is also a unique occasion to discover playful activities in a facilitation context.</p>\n<p>You are welcome in this new edition of &#x23;play14 with families regardless of your age or your professional activity. You will get the opportunity to be part and decide of our own agenda and propose activities during the weekend.</p>\n<p>Our objective this year is to open &#x23;play14 to families. This is because we have had the chance to have younger participants for the last 6 years and have discovered that not only do they enjoy participating but they are also keen to facilitate. This approach empowers younger participants as well as parents and adults playing amongst them. We could no longer ignore this trend hence we are launching this concept.</p>\n<h3 id="whatisaseriousgame">What is a Serious Game?</h3>\n<p>Serious Games are activities suggested by facilitators and their teams. The aim is to address organisational challenges such as : company culture, learning, collaboration or any other organisational changes. Serious Games include not only innovation games but also learning skills which ultimately lead to further creativity and collaboration. These games are conducted in a disruptive and unconventional approach. What is true for a corporate context is also true within the family context.</p>\n<h3 id="whatkindofgamesandactivitiesareyoureferringto">What kind of games and activities are you referring to?</h3>\n<p>We focus on non-digital activities which imply direct interactions amongst people. We use various media such as metaphors, stories, competition and games, simple tools such as LEGOs, sticky notes, ropes, paper, drawings and any other form of communication which unleash creativity such as improv theatre, mindfulness, laughter yoga, etc.</p>\n<h3 id="andhowwilltheweekendunfold">And how will the weekend unfold ?</h3>\n<p>&#x23;play14 uses the Open Space Technology format, a tool to enhance collaboration. Participants take charge and organise their weekend schedule. It is a very simple format which allow anyone to participate to any offered activity or even to propose activities to other people.</p>\n<h3 id="whyx23play14withfamilies">Why &#x23;play14 with families?</h3>\n<p>Along the years, we have had the opportunities to welcome young adults and children during our regular events. Thereby, we have realized they are very attentive and enthusiastic participants and they even sometimes try themselves into facilitation.</p>\n<p>We could no longer ignore this trend. Children and young adults bring a dimension to events which is incredibly interesting: They quickly adapt, they are not scared to join along, they are kind and playful. Parents, on the other hand, enjoy discovering or re-discovering their children’s behaviour in terms of collaboration, participation, communication, and leadership.</p>\n<p>We want to give families the opportunities to interact with each other in an unconventional, yet creative and playful environment.\nMoreover, we wish to open our event to a larger audience. Kids are very adaptable and we have a lot to learn from them!</p>\n<h3 id="isthereanagelimit">Is there an age limit?</h3>\n<p>We had to take into consideration mobility, cognitive and autonomy competencies. Young players need to feel confident they understand, can participate and are autonomous as any other participant, to choose their activities. This is why, we have decided that children need to be <strong>at least 7 years old</strong> to participate.</p>\n<h3 id="whoisresponsibleformychildren">Who is responsible for my children?</h3>\n<p><strong>You are</strong>. Parents are the best expert when it comes to their own children. Only parents can be confident whether their children are able to take part in the event. Only them can know when their kids need to take a break or when it\'s time to go home.</p>\n<h3 id="arethereanyadaptationstotheusualx23play14format">Are there any adaptation(s) to the usual &#x23;play14 format?</h3>\n<p>The vision is to offer the same event to families to what has been a success so far: We focus on playful, non-digital activities which imply direct interactions between people.</p>\n<p>We will adapt the logistics of the event: We will propose meals that are young adults and kids friendly. We will also offer t-shirts in smaller sizes.</p>\n<p>We will also have a quiet space for our young players to rest from the crowd, noise and agitation.</p>\n<h3 id="isenglishgoingtobethetransactionallanguage">Is English going to be the transactional language?</h3>\n<p>Yes. English is going to be the main transactional language and we have participants from all over Europe whose main language is not English. This has never been a concern because we trust the format and the energy so much!</p>\n<h3 id="whatifmykidsdonotspeakenglish">What if my kids do not speak English?</h3>\n<p>We expect our young players to know how to adapt and seek support when needed. We are confident that they will ask if necessary, to translate for them. We assume it will also be learning point as for any other player.</p>\n<p>Games and activities do not require elaborate explanations nor do they require eloquence during the activity. Some games even require silence!</p>\n<h2 id="howtogetthere">How to get there?</h2>\n<h3 id="reachluxembourgcity">Reach Luxembourg city</h3>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane : <a href="https://www.lux-airport.lu/">Luxembourg Airport</a> is well connected and <a href="http://www.vdl.lu/autobus_ligne16.html">buses</a> can bring you directly to Train Station (15 min)</li>\n<li><i class=\'fa fa-train fa-2x fa-fw\'></i>\nBy <a href="http://www.cfl.lu/espaces/voyageurs/en/billets-et-abonnements/billets-internationaux">international train</a> : It\'s easy, 2 hours from Paris, 2:30-to 3:00 from Brussels (no High Speed), 50 min from Trier</li>\n</ul>\n<h3 id="gettoeschbelval">Get to Esch/Belval</h3>\n<ul>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car :</li>\n<li>You can come by car from Luxembourg City by <a href="https://www.google.lu/maps/dir/\'\'/TECHNOPORT+SA+%E2%80%93+BELVAL,+Avenue+des+Hauts-Fourneaux,+Esch-sur-Alzette/@49.5515498,5.9620006,12z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d6.1172444!2d49.5998931!1m5!1m1!1s0x47eacad49ef04f7d:0x8599a1646a7921b9!2m2!1d5.9491669!2d49.5024377!3e0">taking the A4</a>.</li>\n<li>You can also share a car through <a href="https://www.covievent.org/covoiturage/play14/f6ce8e69c30b951ecb53dce1465f9846">Covievent</a>.</li>\n<li><i class=\'fa fa-taxi fa-2x fa-fw\'></i>\nBy taxi : You can take a taxi from the airport, but it is not going to be cheap. You need to count between 60 € and 100 €.</li>\n<li><a href="https://www.taxi2airport.com">Taxi2airport</a></li>\n<li><a href="https://kiwitaxi.com/Luxembourg/to/Esch-sur-Alzette">Kiwi</a></li>\n<li><a href="http://www.colux.lu/">Colux</a></li>\n<li><a href="https://www.webtaxi.lu/">Webtaxi</a></li>\n<li><i class=\'fa fa-subway fa-2x fa-fw\'></i>\nBy local train : From Luxembourg city Central Station take the train to Esch/Alzette, <a href="http://www.cfl.lu/espaces/voyageurs/en/gares-et-services/nos-gares/belval-universit%C3%A9">Belval-Université</a>, Gare</li>\n<li><i class=\'fa fa-map fa-2x fa-fw\'></i>\nDownload <a href="http://www.technoport.lu/online/www/function/accessmap/54/contentContainer/236/4365/ENG/AccessMapEsch2016_visitors.pdf">this map</a> to find a parking and reach the venue by foot.</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay ?</h2>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\nHotel : <strong>IBIS Hotel</strong> is just around the corner.\nHere is a <a href="http://www.ibis.com/gb/hotel-7071-ibis-esch-belval/index.shtml">link to their website</a></li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Belval--Esch~sur~Alzette--Luxembourg?guests=1&adults=1&children=0&infants=0&place_id=ChIJpygLQys1lUcRXDbg1jsK758&checkin=03%2F23%2F2017&checkout=03%2F25%2F2017&source=bb&page=1&allow_override%5B%5D=&ne_lat=49.52023719137509&ne_lng=5.986106374065116&sw_lat=49.477525649778855&sw_lng=5.923621632854179&zoom=14&search_by_map=true&ss_id=r4n1bpzj&s_tag=pxTV1cYO">some rooms</a></li>\n</ul>\n<div class=\'two spacing\'></div>',
				contactEmail: 'luxembourg@play14.org',
				tagline: null,
				publishedAt: 1584729000000,
				updatedAt: 1678736640626,
				defaultImageId: 'file_3327',
				imageIds: [
					'file_3327',
					'file_3325',
					'file_3326',
					'file_3485',
					'file_3332',
					'file_3330',
					'file_3328'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":575565,"code":38561}'
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 66,
				name: 'Emmental 2019',
				slug: 'emmental-2019-10',
				start: 1570809600000,
				end: 1570978800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="whatisspecialaboutplay14outdoor">What is special about Play14 "Outdoor"?</h2>\n<ul>\n<li>you are outdoor all day</li>\n<li>we will be building our own camp</li>\n<li>we will be cooking our delicious menus at the fire</li>\n<li>there is a shelter in case of heavy rain</li>\n<li>you can camp onsite, it\'s included in the price</li>\n</ul>\n<p>Real development happens outside the comfort zone!</p>\n<h3 id="campingonsite">Camping on site</h3>\n<p>It is possible, even recommended, to camp on site. You will need to <strong>bring your own tent</strong> for that. Alternatively, you can <strong>rent a tent</strong> on site, for a 20 CHF per night. If you are interested, please contact us on [emmental@play14.org](mailto:emmental@play14.org?subject=Rent a tent).</p>\n<p>Your third option will be to sleep in the Teepee, witch can be heated inside with a cosy fire🔥. If you are interested, please contact us on [emmental@play14.org](mailto:emmental@play14.org?subject=Sleep in a tipi).</p>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/07_240a18f78f.jpg" alt="Tipi" /></p>\n<p>We also recommend that you <strong>bring warm clothes and blankets/sleeping bags</strong>. I can get pretty chilly in mid-October in Switzerland. So plan for that in advance.</p>\n<p>If you stay, you will also have access to the sauna. So don\'t hesitate to bring your spa kit.</p>\n<h3 id="findahotelnearby">Find a hotel nearby</h3>\n<p>If you are not into sleeping on the floor and chilling next to the wood fire, you can find a <a href="http://www.thurm-signau.ch/de/hotel">hotel nearby</a></p>',
				contactEmail: 'emmental@play14.org',
				tagline: null,
				publishedAt: 1570816800000,
				updatedAt: 1678736641012,
				defaultImageId: 'file_3304',
				imageIds: ['file_3304', 'file_3305', 'file_3307', 'file_3306', 'file_3303', 'file_3302'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Camp Construction'
							},
							{
								time: '20:00:00',
								description: 'Outdoor Cooking / Dinner'
							},
							{
								time: '21:30:00',
								description: 'Bonfire get together'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Barbecue'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":500652,"code":71977}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Organization',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 14,
				name: 'Amsterdam 2019',
				slug: 'amsterdam-2019-11',
				start: 1574359200000,
				end: 1574524800000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1574362800000,
				updatedAt: 1678736644562,
				defaultImageId: 'file_3331',
				imageIds: ['file_3331'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice time all together.',
						timeslots: [
							{
								time: '19:00:00',
								description: 'Ice breakers & warmups'
							},
							{
								time: '20:00:00',
								description: 'Drinks / Snacks / Mingle'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":68665627741}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/1pTah3x9HHoxsa4K7',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 9,
				name: 'Mexico 2019',
				slug: 'mexico-2019-05',
				start: 1559320200000,
				end: 1559487600000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'mexico@play14.org',
				tagline: null,
				publishedAt: 1559327400000,
				updatedAt: 1683630815259,
				defaultImageId: 'file_4967',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":57356050491}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/TrKjCeseBewBxiS9A',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 6,
				name: 'Luxembourg 2019',
				slug: 'luxembourg-2019-03',
				start: 1553189400000,
				end: 1553356800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="howtogetthere">How to get there ?</h2>\n<h3 id="reachluxembourgcity">Reach Luxembourg city</h3>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane : <a href="https://www.lux-airport.lu/">Luxembourg Airport</a> is well connected and <a href="http://www.vdl.lu/autobus_ligne16.html">buses</a> can bring you directly to Train Station (15 min)</li>\n<li><i class=\'fa fa-train fa-2x fa-fw\'></i>\nBy <a href="http://www.cfl.lu/espaces/voyageurs/en/billets-et-abonnements/billets-internationaux">international train</a> : It\'s easy, 2 hours from Paris, 2:30-to 3:00 from Brussels (no High Speed), 50 min from Trier</li>\n</ul>\n<h3 id="gettoeschbelval">Get to Esch/Belval</h3>\n<ul>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car :</li>\n<li>You can come by car from Luxembourg City by <a href="https://www.google.lu/maps/dir/\'\'/TECHNOPORT+SA+%E2%80%93+BELVAL,+Avenue+des+Hauts-Fourneaux,+Esch-sur-Alzette/@49.5515498,5.9620006,12z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d6.1172444!2d49.5998931!1m5!1m1!1s0x47eacad49ef04f7d:0x8599a1646a7921b9!2m2!1d5.9491669!2d49.5024377!3e0">taking the A4</a>.</li>\n<li>You can also share a car through <a href="https://www.covievent.org/covoiturage/play14/f6ce8e69c30b951ecb53dce1465f9846">Covievent</a>.</li>\n<li><i class=\'fa fa-taxi fa-2x fa-fw\'></i>\nBy taxi : You can take a taxi from the airport, but it is not going to be cheap. You need to count between 60 € and 100 €.</li>\n<li><a href="https://www.taxi2airport.com">Taxi2airport</a></li>\n<li><a href="https://kiwitaxi.com/Luxembourg/to/Esch-sur-Alzette">Kiwi</a></li>\n<li><a href="http://www.colux.lu/">Colux</a></li>\n<li><a href="https://www.webtaxi.lu/">Webtaxi</a></li>\n<li><i class=\'fa fa-subway fa-2x fa-fw\'></i>\nBy local train : From Luxembourg city Central Station take the train to Esch/Alzette, <a href="http://www.cfl.lu/espaces/voyageurs/en/gares-et-services/nos-gares/belval-universit%C3%A9">Belval-Université</a>, Gare</li>\n<li><i class=\'fa fa-map fa-2x fa-fw\'></i>\nDownload <a href="http://www.technoport.lu/online/www/function/accessmap/54/contentContainer/236/4365/ENG/AccessMapEsch2016_visitors.pdf">this map</a> to find a parking and reach the venue by foot.</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay ?</h2>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\nHotel : <strong>IBIS Hotel</strong> is just around the corner.\nHere is a <a href="http://www.ibis.com/gb/hotel-7071-ibis-esch-belval/index.shtml">link to their website</a></li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Belval--Esch~sur~Alzette--Luxembourg?guests=1&adults=1&children=0&infants=0&place_id=ChIJpygLQys1lUcRXDbg1jsK758&checkin=03%2F23%2F2017&checkout=03%2F25%2F2017&source=bb&page=1&allow_override%5B%5D=&ne_lat=49.52023719137509&ne_lng=5.986106374065116&sw_lat=49.477525649778855&sw_lng=5.923621632854179&zoom=14&search_by_map=true&ss_id=r4n1bpzj&s_tag=pxTV1cYO">some rooms</a></li>\n</ul>\n<div class=\'two spacing\'></div>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1553193000000,
				updatedAt: 1712551229105,
				defaultImageId: 'file_3236',
				imageIds: ['file_3236', 'file_3238', 'file_3239', 'file_3237'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":405635,"code":67180}'
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/Af8XiDLFu8NXs6uL7',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV1aA7OcP135kF-mu-feKCTA',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 18,
				name: 'Kuala Lumpur 2019',
				slug: 'kuala-lumpur-2019-10',
				start: 1572019200000,
				end: 1572192000000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'malaysia@play14.org',
				tagline: null,
				publishedAt: 1572026400000,
				updatedAt: 1683630149449,
				defaultImageId: 'file_4948',
				imageIds: [
					'file_4959',
					'file_4958',
					'file_4957',
					'file_4956',
					'file_4955',
					'file_4954',
					'file_4952',
					'file_4953',
					'file_4951',
					'file_4950',
					'file_4946',
					'file_4949',
					'file_4947'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":64806410719}'
				},
				sponsorships: [],
				media: [
					{
						url: 'https://photos.app.goo.gl/1Do6971EAnQ9kA4U9',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 69,
				name: 'Online May 2020',
				slug: 'online-may-2020-05',
				start: 1589007600000,
				end: 1589036400000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>The event will be held on Zoom</h2><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/zoom_logo_1a0d669b4b.png" alt="Zoom"></p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1589014800000,
				updatedAt: 1683630221488,
				defaultImageId: 'file_4945',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Saturday',
						description: 'First online event',
						timeslots: [
							{
								time: '08:15:00',
								description: 'Opening doors'
							},
							{
								time: '08:30:00',
								description: 'Tools warm-up'
							},
							{
								time: '09:00:00',
								description: 'Opening Plenary'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Session'
							},
							{
								time: '11:20:00',
								description: 'Break'
							},
							{
								time: '11:30:00',
								description: 'Session'
							},
							{
								time: '12:50:00',
								description: 'Break'
							},
							{
								time: '13:00:00',
								description: 'Session'
							},
							{
								time: '14:20:00',
								description: 'Break'
							},
							{
								time: '14:30:00',
								description: 'Session'
							},
							{
								time: '15:50:00',
								description: 'Break'
							},
							{
								time: '16:00:00',
								description: 'Session'
							},
							{
								time: '17:20:00',
								description: 'Break'
							},
							{
								time: '17:30:00',
								description: 'Closing Plenary'
							},
							{
								time: '18:30:00',
								description: 'End of day'
							}
						]
					}
				],
				registration: {
					link: 'https://www.eventbrite.de/e/online-play14-tickets-103040139832',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organizer',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 45,
				name: 'Luxembourg 2017',
				slug: 'luxembourg-2017-03',
				start: 1490290200000,
				end: 1490457600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="videos">Videos</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/UJgiffXkYNc" frameborder="0" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h2 id="pictures">Pictures</h2>\n<p>Take a look at some of the <a href="https://goo.gl/photos/JqoPMvCufSdsxFv17">pictures</a>{:target="_blank"}</p>\n<p><a href=\'https://goo.gl/photos/JqoPMvCufSdsxFv17\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/rxh9fEZUM4cqbxvM8qUZLxL-4301AA0XTfFfb7-vFY8MiFcauojxPzlU435a-POEkGjkfP30an9DLgrg1KnYGEbUYaB1ZvGAFFZdQwrYxyg-xu3rUiFE6nhz9Qb7ShqE-nI5pq4YEm9njhJB139xNI_RXzUoHuFazRFYPfIn_Bf7as703Glpqt5gEzSrsyHqJ_xj9XAqXvi3I4bEVozzW7hUzaOfPZ5N4krPz6_u4lmMQDHpYrUe502tDjrVe6vhg_o_O_vbETmbVR-MYryp9UqGwTyna57w07OAvSCw7TIO0gA95nUFIXMT68aECdcU20jd92vkiyWB1dcnqm6qo5MWf95PHKCEcdQFGsfHZ63L-ttATPLpE1Ia4qojFANMdFqyHk77Do4Sbe5fY6RDld5JBGhwtXyBoQ2KOUveChao6UVFA13-1hG59JBrvjb0Oazqd5h9Z-CHtN69Dz5Ye9MKKzOY90JcopaQEqC9_JLDrVzQpk59dpWYmOPvIhd-WHTkzTwUyF9lxR7iHgAj318IfmZgBFyZOAoyzR4FmG5Mv80jNs_6DPOS2o8ZAJLtY4NZf75s1YGZ9NBFNOFnFFzdlsherEYIl2ezk2Z2cHCsM8Z5DZTCsgmmi8pRMnsvhg-xeAa2TO0lqvxuQY_5OCFfjT8zJcGbkcV2_I4bfg=w1490-h839-no\' />\n</a></p>\n<h2 id="blogsarticles">Blogs &amp; articles</h2>\n<h3 id="beforetheevent">Before the event</h3>\n<ul>\n<li><a href="https://www.linkedin.com/pulse/play14-bilan-de-trois-ann%C3%A9es-extraordinaires-yann-gensollen">Yann Gensollen on LinkedIn - Bilan de trois années extraordinaires !</a></li>\n<li><a href="https://www.infoq.com/fr/news/2017/03/play14-interview-yann-gensollen">Yann Gensollen on InfoQ - Le format Open Space et Play14</a></li>\n<li><a href="http://www.itnation.lu/apprendre-comprendre-grace-aux-serious-games-play14/">&#x23;play14 on ITNation</a></li>\n<li><a href="http://www.itnation.lu/agile-partner-offre-deux-entrees-levenement-play14/">Agile Partner on ITNation</a></li>\n</ul>\n<h3 id="aftertheevent">After the event</h3>\n<ul>\n<li><a href="https://marmelab.com/blog/2017/03/27/play-14.html">François Zaninotto on Marmelab\'s blog - Practicing Serious Games with Talented People Is a Great Way to Learn</a></li>\n<li><a href="https://www.linkedin.com/feed/update/urn:li:activity:6252147335506202624/">Sonja Uittenboogaard on LinkedIn</a></li>\n<li><a href="https://blog.intech.lu/index.php/2017/04/27/play14-luxembourg/">Intech (in french)</a></li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="howtogetthere">How to get there ?</h2>\n<h3 id="reachluxembourgcity">Reach Luxembourg city</h3>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane : <a href="https://www.lux-airport.lu/">Luxembourg Airport</a> is well connected and <a href="http://www.vdl.lu/autobus_ligne16.html">buses</a> can bring you directly to Train Station (15 min)</li>\n<li><i class=\'fa fa-train fa-2x fa-fw\'></i>\nBy <a href="http://www.cfl.lu/espaces/voyageurs/en/billets-et-abonnements/billets-internationaux">international train</a> : It\'s easy, 2 hours from Paris, 2:30-to 3:00 from Brussels (no High Speed), 50 min from Trier</li>\n</ul>\n<h3 id="gettoeschbelval">Get to Esch/Belval</h3>\n<ul>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car :</li>\n<li>You can come by car from Luxembourg City by <a href="https://www.google.lu/maps/dir/\'\'/TECHNOPORT+SA+%E2%80%93+BELVAL,+Avenue+des+Hauts-Fourneaux,+Esch-sur-Alzette/@49.5515498,5.9620006,12z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d6.1172444!2d49.5998931!1m5!1m1!1s0x47eacad49ef04f7d:0x8599a1646a7921b9!2m2!1d5.9491669!2d49.5024377!3e0">taking the A4</a>.</li>\n<li>You can also share a car through <a href="https://www.covievent.org/covoiturage/play14/f6ce8e69c30b951ecb53dce1465f9846">Covievent</a>.</li>\n<li><i class=\'fa fa-taxi fa-2x fa-fw\'></i>\nBy taxi : You can take a taxi from the airport, but it is not going to be cheap. You need to count between 60 € and 100 €.</li>\n<li><a href="https://www.taxi2airport.com">Taxi2airport</a></li>\n<li><a href="https://kiwitaxi.com/Luxembourg/to/Esch-sur-Alzette">Kiwi</a></li>\n<li><a href="http://www.colux.lu/">Colux</a></li>\n<li><a href="https://www.webtaxi.lu/">Webtaxi</a></li>\n<li><i class=\'fa fa-subway fa-2x fa-fw\'></i>\nBy local train : From Luxembourg city Central Station take the train to Esch/Alzette, <a href="http://www.cfl.lu/espaces/voyageurs/en/gares-et-services/nos-gares/belval-universit%C3%A9">Belval-Université</a>, Gare</li>\n<li><i class=\'fa fa-map fa-2x fa-fw\'></i>\nDownload <a href="http://www.technoport.lu/online/www/function/accessmap/54/contentContainer/236/4365/ENG/AccessMapEsch2016_visitors.pdf">this map</a> to find a parking and reach the venue by foot.</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay ?</h2>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\nHotel : <strong>IBIS Hotel</strong> is just around the corner.\nHere is a <a href="http://www.ibis.com/gb/hotel-7071-ibis-esch-belval/index.shtml">link to their website</a></li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Belval--Esch~sur~Alzette--Luxembourg?guests=1&adults=1&children=0&infants=0&place_id=ChIJpygLQys1lUcRXDbg1jsK758&checkin=03%2F23%2F2017&checkout=03%2F25%2F2017&source=bb&page=1&allow_override%5B%5D=&ne_lat=49.52023719137509&ne_lng=5.986106374065116&sw_lat=49.477525649778855&sw_lng=5.923621632854179&zoom=14&search_by_map=true&ss_id=r4n1bpzj&s_tag=pxTV1cYO">some rooms</a></li>\n</ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1490293800000,
				updatedAt: 1678736617549,
				defaultImageId: 'file_3170',
				imageIds: ['file_3170', 'file_3166', 'file_3167', 'file_3168', 'file_3169'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'Thursday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":28083088273}'
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/JqoPMvCufSdsxFv17',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/watch?v=id9ioj6f4e8&list=PL6VQoC829PV0LlvCJWE_l6jzHNDMxqQpX',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 80,
				name: 'Iasi 2023',
				slug: 'iasi-2023-10',
				start: 1696599000000,
				end: 1696766400000,
				timezone: 'Europe/Bucharest',
				status: 'Over',
				description:
					'<p>#play14 is a global community of coaches, facilitators, educators, consultants, researchers, workers and artists gathering during two and a half day to unleash creativity with serious games. Cause we realy share the common idea that playing is the best way to learn.</p><h2><strong>Who is this event for?</strong></h2><p>● For those who are passionate about learning<br>● For those attracted by the latest serious gaming techniques<br>● For those who value learning through experimenting and are open to new interactions and communities<br>● For those who value the practical abilities of facilitation and who are looking for new ideas and methods to enhance these competencies<br>● For those who want to make a change, get rid of the formal/protocolar environment and try one where creativity and game appreciation are valued</p><h2><strong>What will you learn?</strong></h2><p>● Facilitation techniques<br>● How to innovate<br>● Change management<br>● Organizational happiness<br>● ... and much more</p><h2><strong>What would be your financial contribution?</strong></h2><p>The participation fee is <strong>155 EUR/person.</strong></p><p><strong>Note:</strong>&nbsp;</p><p>● This fee covers the cost of the event with some meals included, which are listed in the agenda. This cost <strong>doesn\'t</strong> include transport and accommodation.<br>● #play14 is a non-profit event. All earnings from ticket sales will be used to sustain the event.</p><h2><strong>How can you register?</strong></h2><p>To reserve your place in the event you’ll need to register first (Book Now) and fill in the registration form until the <strong>16th of September 2023</strong>. We’ll review your registration and come back to you with the payment details and next steps. Please notice that this year\'s edition <u>has a limit of 35 places</u>, so make sure you book before the event is full!</p><p>If you have any practical questions regarding this event, please send us an email us <a href="mailto:iasi@play14.org">iasi@play14.org</a></p>',
				contactEmail: 'iasi@play14.org',
				tagline: null,
				publishedAt: 1685124000000,
				updatedAt: 1700757359324,
				defaultImageId: 'file_4920',
				imageIds: [
					'file_4928',
					'file_4927',
					'file_4926',
					'file_4925',
					'file_4924',
					'file_4923',
					'file_4922',
					'file_4921'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening, to get to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Meeting at Starting point'
							},
							{
								time: '18:30:00',
								description: 'Icebreakers'
							},
							{
								time: '19:30:00',
								description: 'Sample of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Go for Dinner and Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Intro of'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Go out for dinner'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace and add the new ideas on the board for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:15:00',
								description: 'Serious games'
							},
							{
								time: '13:15:00',
								description: 'Retrospective'
							},
							{
								time: '14:00:00',
								description: 'Cleanup & Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://docs.google.com/forms/d/e/1FAIpQLSeWBqeaFV6DJv8_6V_asD3aQJ1WJYVe-nehZFyzdqVbjuWyQw/viewform',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/xbAebq3dkQ8F6NydA',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 52,
				name: 'Luxembourg 2018',
				slug: 'luxembourg-2018-03',
				start: 1521739800000,
				end: 1521907200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="5yearsanniversaryparty">5 years anniversary party</h2>\n<p>Yes it\'s true. 2018 will host the <strong>5th &#x23;play14 event</strong> in Luxembourg.<br />\nTo celebrate this achievement, we have decided to organize a special evening for all attendees on Friday night.</p>\n<p>Instead of spending the Friday evening at Technoport with the usual Pizza &amp; Beer dinner, we will <strong>take you to Luxembourg city</strong>.\nThere, we will make you visit the city in a playful way, by participating to a <strong>great quest</strong>, where you will have to answer questions, solve puzzles or complete challenges to find your way to the ultimate goal, where we will have a dinner party.</p>\n<p><a href="/events/quest">\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/treasure_map_153425_640_99bf4b9744.png" alt="Quest" />\n</a></p>\n<p>After the quest, we will gather in a <strong>special location for dinner & drink</strong>. There will definitely be some surprises and probably more games, and maybe some dancing, for the more adventurous.<br />\nBecause we will finish late, we will start a bit later on Saturday so you can still get some rest.</p>\n<p>Don\'t miss this opportunity and make sure you buy the <a href="#register">Full event + Friday night 5 years anniversary party</a>.</p>\n<div class=\'two spacing\'></div>\n<h2 id="photosvideos">Photos &amp; videos</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/gOYAtjejma4?start=180" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n<p><a href=\'https://photos.app.goo.gl/3kSD7rpMRGDHUtcx1\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/7jdzr9dk8M83mLQRon2Uifp3-TmTKiRaIc4-TOQcjus2l_Azf4VvGAL4sVUytdGYL0h34aRpWWMYlFRj5tiC2dJlrqghE-JJVr1mzS578e8i2nBqtfCJssFbqjkJbDQJh4wBcWaotU7_2pqVh8maGJX7g1h_dtIyoNneGUHQrsE5h9EYOi0R2-W58rTWXcFzu2Id0ZMocQVYua8IJGb1X5Cw-5tyLfmH2lL2jTh_T4DYUz3hosuVClpK4JyJhdnRByPfhAO4Auz3KBo8BVNgUn_KmuLL59YLPapffdshPxPYB6FDSHh6ka-TdkdxHu8_7HV_9QPzvohy_kopncYu7BYit3WjWXj5OuU1MV9UsFhb5_dR03P84SLbIy5JP1ZghSkzCpO-C3uTbiXoctu7cs2qFpNi-o-_cyM4iEjMKAvNsSZC_QtUs3g5wY6-5XP9ntai-vPQACyNTFXtNrvJfvtQjBtkfiikqJNPnLzk8QKz2xnuQy9JSZ6oIqRqJVAEPJHf_3lx1lrcxTuiUBcEbR2GwKJdb8UkHcC2tEG3i7ejydJmg9gMsvu-GFif6DwoAWfdvJ5yhP07YlC3UJuNIC6oQVcWErZzxTmKdmeT4WM5FJNUCsB1Ty6qA6Ea8I9F_eiUEZ5TKBHkjW9rZ_lW7QoRLYlexu2R=w3357-h1888-no\' \n  width="560" />\n</a></p>\n<h2 id="howtogetthere">How to get there ?</h2>\n<h3 id="reachluxembourgcity">Reach Luxembourg city</h3>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane : <a href="https://www.lux-airport.lu/">Luxembourg Airport</a> is well connected and <a href="http://www.vdl.lu/autobus_ligne16.html">buses</a> can bring you directly to Train Station (15 min)</li>\n<li><i class=\'fa fa-train fa-2x fa-fw\'></i>\nBy <a href="http://www.cfl.lu/espaces/voyageurs/en/billets-et-abonnements/billets-internationaux">international train</a> : It\'s easy, 2 hours from Paris, 2:30-to 3:00 from Brussels (no High Speed), 50 min from Trier</li>\n</ul>\n<h3 id="gettoeschbelval">Get to Esch/Belval</h3>\n<ul>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car :</li>\n<li>You can come by car from Luxembourg City by <a href="https://www.google.lu/maps/dir/\'\'/TECHNOPORT+SA+%E2%80%93+BELVAL,+Avenue+des+Hauts-Fourneaux,+Esch-sur-Alzette/@49.5515498,5.9620006,12z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d6.1172444!2d49.5998931!1m5!1m1!1s0x47eacad49ef04f7d:0x8599a1646a7921b9!2m2!1d5.9491669!2d49.5024377!3e0">taking the A4</a>.</li>\n<li>You can also share a car through <a href="https://www.covievent.org/covoiturage/play14/f6ce8e69c30b951ecb53dce1465f9846">Covievent</a>.</li>\n<li><i class=\'fa fa-taxi fa-2x fa-fw\'></i>\nBy taxi : You can take a taxi from the airport, but it is not going to be cheap. You need to count between 60 € and 100 €.</li>\n<li><a href="https://www.taxi2airport.com">Taxi2airport</a></li>\n<li><a href="https://kiwitaxi.com/Luxembourg/to/Esch-sur-Alzette">Kiwi</a></li>\n<li><a href="http://www.colux.lu/">Colux</a></li>\n<li><a href="https://www.webtaxi.lu/">Webtaxi</a></li>\n<li><i class=\'fa fa-subway fa-2x fa-fw\'></i>\nBy local train : From Luxembourg city Central Station take the train to Esch/Alzette, <a href="http://www.cfl.lu/espaces/voyageurs/en/gares-et-services/nos-gares/belval-universit%C3%A9">Belval-Université</a>, Gare</li>\n<li><i class=\'fa fa-map fa-2x fa-fw\'></i>\nDownload <a href="http://www.technoport.lu/online/www/function/accessmap/54/contentContainer/236/4365/ENG/AccessMapEsch2016_visitors.pdf">this map</a> to find a parking and reach the venue by foot.</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay ?</h2>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\nHotel : <strong>IBIS Hotel</strong> is just around the corner.\nHere is a <a href="http://www.ibis.com/gb/hotel-7071-ibis-esch-belval/index.shtml">link to their website</a></li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Belval--Esch~sur~Alzette--Luxembourg?guests=1&adults=1&children=0&infants=0&place_id=ChIJpygLQys1lUcRXDbg1jsK758&checkin=03%2F23%2F2017&checkout=03%2F25%2F2017&source=bb&page=1&allow_override%5B%5D=&ne_lat=49.52023719137509&ne_lng=5.986106374065116&sw_lat=49.477525649778855&sw_lng=5.923621632854179&zoom=14&search_by_map=true&ss_id=r4n1bpzj&s_tag=pxTV1cYO">some rooms</a></li>\n</ul>\n<div class=\'two spacing\'></div>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1521743400000,
				updatedAt: 1678736623714,
				defaultImageId: 'file_3196',
				imageIds: ['file_3196', 'file_3197', 'file_3198', 'file_3200'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:30:00',
								description: '5 years anniversary party'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"form"}'
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					},
					{
						category: 'Silver sponsor',
						sponsorIds: []
					},
					{
						category: 'Global sponsor',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/3kSD7rpMRGDHUtcx1',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV1vTm9OCLi2DSShswvv3yAC',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 11,
				name: 'Amsterdam 2018',
				slug: 'amsterdam-2018-11',
				start: 1541095200000,
				end: 1541260800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="wheretostay">Where to stay</h2>\n<ul>\n<li><p><i class=\'fa fa-hotel fa-2x fa-fw\'></i> <a href="https://www.volkshotel.nl/en">Volks Hotel</a></p></li>\n<li><p><i class=\'fa fa-hotel fa-2x fa-fw\'></i> <a href="https://www.thestudenthotel.com/amsterdam-city/">The Student Hotel</a></p></li>\n<li><p><i class=\'fa fa-hotel fa-2x fa-fw\'></i> <a href="https://www.google.nl/maps/search/hotels/@52.3540208,4.9035749,15z/data=!3m1!4b1">Other hotels nearby</a></p></li>\n<li><p><i class=\'fa fa-globe fa-2x fa-fw\'></i> <a href="https://www.airbnb.nl/s/Amsterdam/homes">Airbnb</a></p></li>\n</ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1541098800000,
				updatedAt: 1678736630588,
				defaultImageId: 'file_3253',
				imageIds: ['file_3253'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice time all together.',
						timeslots: [
							{
								time: '19:00:00',
								description: 'Ice breakers & warmups'
							},
							{
								time: '20:00:00',
								description: 'Drinks / Snacks / Mingle'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":374193,"code":16876}'
				},
				sponsorships: [
					{
						category: 'Venue & catering',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/kiZdNf8EakNGT6BYA',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV1OLtPucg6SgJyp-GuVev20',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 33,
				name: 'Basel 2021',
				slug: 'basel-2021-09',
				start: 1630686600000,
				end: 1630854000000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="informationrelatedtocovid">Information related to COVID</h2>\n<p>&#x23;play14 Basell is a Covid 21 certified event. Participants need to present <strong>a Swiss or EU Covid certificate</strong> to be allowed access. Under these conditions the event can take place <strong>without masks</strong>.</p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1630693800000,
				updatedAt: 1678736648125,
				defaultImageId: 'file_3402',
				imageIds: [
					'file_3402',
					'file_3399',
					'file_3396',
					'file_3397',
					'file_3400',
					'file_3401',
					'file_3398'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://www.palladio.net/events/play14-basel-2021/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 97,
				name: 'Kuala Lumpur 2024',
				slug: 'kuala-lumpur-2024-08',
				start: 1724400000000,
				end: 1724580000000,
				timezone: 'Asia/Kuala_Lumpur',
				status: 'Over',
				description: '',
				contactEmail: 'malaysia@play14.org',
				tagline: null,
				publishedAt: 1720075266313,
				updatedAt: 1724623200160,
				defaultImageId: 'file_5072',
				imageIds: ['file_5271', 'file_5272', 'file_5273', 'file_5274'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers / Rules of the Marketplace'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together , Drinks'
							},
							{
								time: '22:00:00',
								description: 'End of welcome'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warm-ups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game Sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game Sessions'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							},
							{
								time: '21:00:00',
								description: 'Retrospective'
							},
							{
								time: '22:00:00',
								description: 'End of First day'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warm-ups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game Sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game Sessions'
							},
							{
								time: '19:30:00',
								description: 'Retrospective, Good bye & See you next time'
							},
							{
								time: '20:00:00',
								description: 'End of event - Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14kl2024.peatix.com/',
					widgetCode:
						'go <a href="https://play14kl2024\n.peatix.com">here</a> to register! See you soon!'
				},
				sponsorships: [
					{
						category: 'Mentor Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/1Do6971EAnQ9kA4U9',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 93,
				name: 'Berlin 2024',
				slug: 'berlin-2024-06',
				start: 1718373600000,
				end: 1718542800000,
				timezone: 'Europe/Berlin',
				status: 'Over',
				description: '',
				contactEmail: 'berlin@play14.org',
				tagline: null,
				publishedAt: 1707842799708,
				updatedAt: 1719993451635,
				defaultImageId: 'file_3442',
				imageIds: [
					'file_5239',
					'file_5241',
					'file_5240',
					'file_5242',
					'file_5243',
					'file_5244',
					'file_5245',
					'file_4873',
					'file_4874',
					'file_4875',
					'file_4876',
					'file_4877',
					'file_4878',
					'file_4879',
					'file_4860',
					'file_4861',
					'file_4862',
					'file_4863',
					'file_4864',
					'file_4865',
					'file_4866',
					'file_4867',
					'file_4868',
					'file_4869',
					'file_4870',
					'file_4871',
					'file_4872'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Setting up & getting to know each other'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '15:00:00',
								description: 'Retrospective'
							},
							{
								time: '16:00:00',
								description: 'Clean up time'
							},
							{
								time: '16:30:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14-ber24.eventbrite.de',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 102,
				name: 'Berlin 2025',
				slug: 'berlin-2025-06',
				start: 1749823200000,
				end: 1749992400000,
				timezone: 'Europe/Berlin',
				status: 'Over',
				description: '',
				contactEmail: 'berlin@play14.org',
				tagline: null,
				publishedAt: 1737397068028,
				updatedAt: 1750024800275,
				defaultImageId: 'file_3343',
				imageIds: ['file_5239'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Setting up & getting to know each other'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Doors open / Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:00:00',
								description: 'Lunch'
							},
							{
								time: '13:00:00',
								description: 'Sessions'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:30:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Doors open / Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '15:00:00',
								description: 'Retrospective'
							},
							{
								time: '16:30:00',
								description: 'Clean up time'
							},
							{
								time: '16:30:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14-ber2025.eventbrite.de/?aff=play14',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Location ❤️',
						sponsorIds: []
					},
					{
						category: 'Puzzles',
						sponsorIds: []
					},
					{
						category: 'Support',
						sponsorIds: []
					},
					{
						category: 'Give-away',
						sponsorIds: []
					},
					{
						category: 'Shakes',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/DH7axbStS6jjeL9u6',
						type: 'Photos'
					},
					{
						url: 'https://photos.google.com/share/AF1QipOqx_b-eKBpwBK5DA2MUmsWY-s2Qd4Yk5Qf70Z6xDM1EbcLO-IC5LDW7PQgoOnYhQ?key=YW5oMkdacWhmcHRoOHV5VWRMaHFfd010d2pRZTJR',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 112,
				name: 'Pune 2025',
				slug: 'pune-2025-10',
				start: 1760079600000,
				end: 1760252400000,
				timezone: 'Indian/Chagos',
				status: 'Announced',
				description:
					'<p>Coming soon! Watch this space as #Play14 arrives in Pune India for the very first time!</p>',
				contactEmail: 'play14india2025@gmail.com',
				tagline: null,
				publishedAt: 1750683579332,
				updatedAt: 1750683579343,
				defaultImageId: 'file_5508',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: null,
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 107,
				name: 'Vinkeveen 2025',
				slug: 'vinkeveen-2025-07',
				start: 1751558400000,
				end: 1751724000000,
				timezone: 'Europe/Amsterdam',
				status: 'Over',
				description:
					'<h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">ENGLISH BELOW</h2><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">🎲 <i><strong>#Play14 Vinkeveen 2025 – De Ultieme Speelse Ervaring!</strong></i> 🎲</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">Maak je klaar voor een epische editie van #Play14 op het prachtige Tuinhotel Tralala, gelegen aan de oevers van de schitterende Vinkeveense Plassen! Sluit je aan bij dit bruisende Open Space event waarin <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>Serious games</strong></b>, Leren, Creativiteit, Samenwerking en Ontspanning centraal staan. Duik in een uniek weekend waar serious play en ultiem genieten samenkomen!</p><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">✨ <i><strong>Waarom je dit niet wilt missen</strong></i> ✨</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">Ontdek serious games en speelse werkvormen die organisatieontwikkeling, innovatie, leiderschap, teamwerk en samenwerking op een frisse manier benaderen. Tijdens #Play14 Vinkeveen verbind je je met andere enthousiaste professionals en facilitators uit diverse vakgebieden. Leer al spelend en sta open voor verrassende nieuwe ervaringen!</p><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">🍵 <i><strong>Een event voor en door deelnemers</strong></i> 🍵</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">#Play14 wordt als een <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>Open Space</strong></b> georganiseerd. Open Space is een dynamische en interactieve manier om samen te leren, creëren en innoveren, zonder vooraf strak vastgelegde agenda. De deelnemers bepalen zelf de onderwerpen, wisselen ideeën uit en ontdekken samen nieuwe inzichten in een inspirerende en vrije setting. Dit zorgt voor een energieke en spontane ervaring waarin iedereen actief bijdraagt en precies datgene haalt wat voor hen waardevol is! Of je nu zelf een <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>prototype</strong></b> hebt van een serious game, een <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>nieuwe werkvorm</strong></b> wil uitproberen of voor het eerst <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>kennis maakt met games op de werkvloer</strong></b>, alles mag.&nbsp;</p><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">🏞️ <i><strong>Meer dan alleen spelen</strong></i> 🏞️</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">Op de magische locatie van <a style="border:0px solid var(--border);box-sizing:inherit;color:rgb(0, 0, 0);margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-decoration-color:inherit;text-decoration-line:inherit;text-decoration-style:inherit;text-decoration:inherit;" target="_blank" rel="noreferrer noopener">Tuinhotel Tralala</a> kun je volledig tot rust komen en opladen in een natuurlijke omgeving. Wij zorgen ervoor dat het aan niks ontbreekt. <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>Het festival is dan ook inclusief drinken en eten.</strong></b> Verken het water met een <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>SUP of kajak</strong></b>, of neem een verfrissende duik. Na een dag vol creativiteit geniet je van magische avonden onder de sterren met&nbsp;<b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>(bord)spellen,&nbsp;kampvuren, DJ-sets en dans</strong></b>. En we hebben nog meer voor je in peto (maar is nog niet helemaal zeker). Wat dacht je bijvoorbeeld van een nieuw uit te brengen (Kickstarter) spel wat je in grote groepen kunt spelen. Of een bordspellenwinkel op locatie zodat je meteen de (serious) games hebt die je de volgende dag kunt inzetten op je werk?<br><br>Heb je een vraag of wil je weten of jij of jouw bedrijf iets kunnen bijdragen of sponsorren stuur dan een mail naar <a class="" data-start="106" data-end="128" rel="noopener">netherlands@play14.org</a>.</p><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;"><br><b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>-------------------------------------------</strong></b><br><b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>ENGLISH</strong></b><br><b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>-------------------------------------------</strong></b></p><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">🎲 <i><strong>#Play14 Vinkeveen 2025 – The Ultimate Playful Experience!</strong></i> 🎲</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">Get ready for an epic edition of #Play14 at the beautiful Tuinhotel Tralala, located on the shores of the stunning Vinkeveense Plassen! Join this vibrant Open Space event where Serious Games, Learning, Creativity, Collaboration, and Relaxation take center stage. Dive into a unique weekend where serious play and pure enjoyment come together!</p><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">✨ <i><strong>Why You Don’t Want to Miss This</strong></i> ✨</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">Discover playful methods that offer fresh approaches to organizational development, innovation, leadership, teamwork, and collaboration. At #Play14 Vinkeveen, you\'ll connect with other passionate professionals and facilitators from various fields. Participate in serious games, interactive workshops, and exciting new experiences!</p><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">🍵 <i><strong>An Event for and by the Participants</strong></i> 🍵</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">#Play14 is organized as an Open Space. Open Space is a dynamic and interactive way to learn, create, and innovate together, without a pre-set agenda. Participants decide on the topics, exchange ideas, and discover new insights together in an inspiring and open setting. This creates an energetic and spontaneous experience where everyone actively contributes and takes away exactly what is valuable to them!&nbsp;Whether you have a <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>prototype of a serious game</strong></b>, want to <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>try out</strong></b> a new working method, or are <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>exploring games</strong></b> in the workplace for the first time, everything is welcome.</p><h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:inherit;font-style:normal;font-variant-caps:normal;font-weight:inherit;letter-spacing:normal;margin:20px 0px 5px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">🏞️ <i><strong>More Than Just Play</strong></i> 🏞️</h2><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;border:0px solid var(--border);box-sizing:inherit;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-family:Inter, sans-serif;font-size:16px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:8px 0px 12px;orphans:auto;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-break:break-word;word-spacing:0px;">At the magical location of Tuinhotel Tralala, you can fully relax and recharge in a natural setting. We ensure that nothing is missing. <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>The festival includes food and drinks</strong></b>. Explore the water with a <b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>SUP or kayak</strong></b>, or take a refreshing dip. After a day full of creativity, enjoy magical evenings under the stars with&nbsp;<b style="border:0px solid var(--border);box-sizing:inherit;margin:0px;outline-color:color-mix(in oklab,var(--ring)50%,transparent);padding:0px;"><strong>(board) games,&nbsp;campfires, DJ sets and dancing.&nbsp;</strong></b>And we have even more in store for you (though it’s not entirely certain yet). How about a brand-new (Kickstarter) game designed for large groups? Or a board game shop on-site, so you can immediately get the (serious) games you want to use at work the next day?<br><br><br>Do you have a question or want to know if you or your company can contribute or sponsor? Send an email to <a class="" data-start="106" data-end="128" rel="noopener">netherlands@play14.org</a>.</p>',
				contactEmail: 'netherlands@play14.org',
				tagline: 'We turned #play14 into a festival playground!',
				publishedAt: 1743026855054,
				updatedAt: 1751752800036,
				defaultImageId: 'file_5412',
				imageIds: [
					'file_5411',
					'file_5412',
					'file_5413',
					'file_5398',
					'file_5399',
					'file_5400',
					'file_5401',
					'file_5402',
					'file_5403',
					'file_5404',
					'file_5396',
					'file_5397'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							"Opening evening; let's get to know each other and open the festival ground together!",
						timeslots: [
							{
								time: '19:00:00',
								description: 'Check-in to your caravan'
							},
							{
								time: '20:00:00',
								description: 'Opening'
							},
							{
								time: '20:15:00',
								description: 'Drinks, talks, games & mingle'
							}
						]
					},
					{
						day: 'Friday',
						description:
							"First Open Space day; start with the marketplace and explore serious games all day long and we'll close the day with a theme party!",
						timeslots: [
							{
								time: '08:15:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warming up / Icebreakers'
							},
							{
								time: '09:15:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Open Space / Serious Games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Open Space / Serious Games'
							},
							{
								time: '18:00:00',
								description: 'Dinner'
							},
							{
								time: '20:00:00',
								description: 'Evening activities, games, chill, theme party'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Second Open Space day; start with the marketplace and explore serious games all day long!',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warming up / Icebreakers'
							},
							{
								time: '09:15:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Open Space / Serious Games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Open Space / Serious Games'
							},
							{
								time: '15:00:00',
								description: 'Closing & retro of the festival space'
							},
							{
								time: '16:00:00',
								description: 'Official end of the festival'
							},
							{
								time: '18:00:00',
								description: 'Check-out of caravan'
							}
						]
					}
				],
				registration: {
					link: 'https://play14.weticket.io/play-14-nl',
					widgetCode:
						'<iframe src="https://play14.weticket.io/play-14-nl/shop" width="100%" height="600px" style="border:none;"></iframe>'
				},
				sponsorships: [],
				media: [
					{
						url: 'https://youtu.be/Pwhjr0Y82f4?si=xVlgPOK88noIccG7&t=28',
						type: 'Videos'
					},
					{
						url: 'https://www.youtube.com/watch?v=DHl-HKMcdD4',
						type: 'Videos'
					},
					{
						url: 'https://www.youtube.com/watch?v=EcpTuqSg3Ow',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 68,
				name: 'Berlin 2020',
				slug: 'berlin-2020-06',
				start: 1591977600000,
				end: 1592146800000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h3 id="thiseventiscarbonneutral">This event is Carbon Neutral</h3>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/climate_neutral_007eaf2c97.png" alt="carbon neutral" width="300"/></p>',
				contactEmail: 'germany@play14.org',
				tagline: null,
				publishedAt: 1591984800000,
				updatedAt: 1678736644741,
				defaultImageId: 'file_3343',
				imageIds: ['file_3343'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":74081049413}'
				},
				sponsorships: [
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 91,
				name: 'Vienna 2024',
				slug: 'vienna-2024-04',
				start: 1714136400000,
				end: 1714298400000,
				timezone: 'Europe/Amsterdam',
				status: 'Over',
				description:
					'<h2 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">#Play14 is back in Vienna, Austria. Part of the global community, the second time in Austria.</span></h2><h3 style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">An Open Space for Gamification, Creativity and Collaboration. A Weekend packed with Experimentation, Learning and Fun.</span></h3><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">Playful approaches are highly relevant for any topic related to organizational development, innovation, leadership, collaboration, team development and much more. The #Play14 community has been organizing open space events for sharing, learning and co-creating around the globe.</span></p><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">For 2024 one of these events is back in Vienna, Austria!</span></p><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">Want to sponsor? Please contact the organizers!</span></p><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">#Play14 is an international gathering of like-minded people who share the common idea that playing is the best way to learn and understand !</span></p><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">For two days, people with </span><a target="_blank" rel="nofollow noopener noreferrer"><span style="color:#ffebee;">many different profiles and experiences</span></a><span style="color:#ffebee;"> are invited to share </span><a target="_blank" rel="nofollow noopener noreferrer"><span style="color:#ffebee;">serious games &amp; fun activities</span></a><span style="color:#ffebee;">, experiences &amp; tips, knowledge &amp; insights, laughter &amp; smiles. Everyone is welcome to join.</span></p><ul style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><li value="1"><span style="color:#ffebee;">Friday 26.4.: Event Kickoff at 17:00 (Open Space, Dinner and Fun until 22:00)</span></li><li value="2"><span style="color:#ffebee;">Saturday 27.4.: Open Space 9:00 - 18:00, Dinner 18:00 - 19:30, DJ &amp; Music &amp; Dance -22:00</span></li><li value="3"><span style="color:#ffebee;">Sunday 28.4.: Open Space 9:00 - 14:00</span></li></ul><p style="-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span style="color:#ffebee;">Learn more about #play14 and the #play14 community here: </span><a target="_blank" rel="nofollow noopener noreferrer"><span style="color:#ffebee;">https://play14.org</span></a></p>',
				contactEmail: 'austria@play14.org',
				tagline: null,
				publishedAt: 1697695957023,
				updatedAt: 1720823364992,
				defaultImageId: 'file_5136',
				imageIds: [
					'file_5137',
					'file_5135',
					'file_5136',
					'file_5134',
					'file_5133',
					'file_5132',
					'file_5131',
					'file_5130'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Event Kickoff at 17:00 (Open Space, Dinner and Fun until 22:00)',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Kickoff'
							},
							{
								time: '18:00:00',
								description: 'Dinner & Fun'
							},
							{
								time: '22:00:00',
								description: 'End'
							}
						]
					},
					{
						day: 'Saturday',
						description: 'Open Space 9:00 - 18:00, Dinner 18:00 - 19:30, DJ & Music & Dance -22:00',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Open Space'
							},
							{
								time: '18:00:00',
								description: 'Dinner'
							},
							{
								time: '19:30:00',
								description: 'DJ Music and Dance'
							},
							{
								time: '22:00:00',
								description: 'End'
							}
						]
					},
					{
						day: 'Sunday',
						description: 'Sunday 28.4.: Open Space 9:00 - 14:00',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Open Space'
							},
							{
								time: '14:00:00',
								description: 'End'
							}
						]
					}
				],
				registration: {
					link: 'https://www.eventbrite.com/e/play14-vienna-2024-tickets-111618624310',
					widgetCode:
						'<a href="https://www.eventbrite.com/e/play14-vienna-2024-tickets-111618624310" target="_blank" rel="noopener noreferrer">Registration is handled via Eventbrite. Click here to book now!</a>'
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 99,
				name: 'London 2024',
				slug: 'london-2024-10',
				start: 1729870200000,
				end: 1730044800000,
				timezone: 'GMT',
				status: 'Over',
				description:
					'<figure class="image"><img alt="image.png" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/image_36ea2e097d.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/image_36ea2e097d.png 245w, https://play14-cdn.azureedge.net/strapi-uploads/assets/image_36ea2e097d.png 500w, https://play14-cdn.azureedge.net/strapi-uploads/assets/image_36ea2e097d.png 750w, https://play14-cdn.azureedge.net/strapi-uploads/assets/image_36ea2e097d.png 1000w" sizes="100vw" width="1000"></figure>',
				contactEmail: 'london@play14.org',
				tagline: null,
				publishedAt: 1721810050962,
				updatedAt: 1730070000185,
				defaultImageId: 'file_5282',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://ti.to/play14/play14-london-2024',
					widgetCode:
						'    <script src="https://js.tito.io/v2/with/inline" async></script>\n    <tito-widget\n      event="play14/play14-london-2024"\n    ></tito-widget>'
				},
				sponsorships: [],
				media: [
					{
						url: 'https://photos.app.goo.gl/bJUqa9SCNk5XZ7FB6',
						type: 'Photos'
					},
					{
						url: 'https://photos.app.goo.gl/bJUqa9SCNk5XZ7FB6',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 22,
				name: 'Leeds 2020',
				slug: 'leeds-2020-07',
				start: 1593792000000,
				end: 1593961200000,
				timezone: 'UTC',
				status: 'Cancelled',
				description: '',
				contactEmail: 'leeds@play14.org',
				tagline: null,
				publishedAt: 1593799200000,
				updatedAt: 1683630310162,
				defaultImageId: 'file_4960',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '17:30:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner at a local restaurant'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '15:30:00',
								description: 'Retrospective'
							},
							{
								time: '16:30:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 106,
				name: 'Madrid 2025',
				slug: 'madrid-2025-05',
				start: 1748613600000,
				end: 1748773800000,
				timezone: 'Europe/Madrid',
				status: 'Over',
				description:
					"<p>What we're about</p><p>#Play14 is an international gathering of like-minded people who share the common idea that playing is the best way to learn and understand.</p><p>For two and a half days, people with very different profiles and experiences are invited to share serious games and fun activities, experiences and advice, knowledge and insights, laughter and smiles. We propose a unique experience for:<br>• develop your facilitation skills<br>• increase your change management capacity in your organization,<br>• encourage your creativity<br>• and improve your ability to innovate.</p><p>#Play14 is an unconference, where all attendees are also contributors. All you need to do is show up, and you will be given the opportunity to propose some games, or play the games proposed by others.</p>",
				contactEmail: 'play14madrid@gmail.com',
				tagline: null,
				publishedAt: 1742382262878,
				updatedAt: 1748815200140,
				defaultImageId: 'file_5394',
				imageIds: ['file_5406'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Friday Warm welcome & mingle',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Official welcome & Ice breakers'
							},
							{
								time: '20:30:00',
								description: 'Tapas dinner'
							},
							{
								time: '22:30:00',
								description: 'Closing the Day'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Lunch'
							},
							{
								time: '15:00:00',
								description: 'Sessions'
							},
							{
								time: '17:30:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Preparation for Dinner'
							},
							{
								time: '19:30:00',
								description: 'Dinner'
							},
							{
								time: '21:30:00',
								description: 'Games'
							},
							{
								time: '23:45:00',
								description: 'End of the evening'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Breakfast + warm-up'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Retrospective'
							},
							{
								time: '14:30:00',
								description: 'Closing the event'
							}
						]
					}
				],
				registration: {
					link: 'https://play14madrid2025.eventbrite.es',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 38,
				name: 'Luxembourg 2015',
				slug: 'luxembourg-2015-03',
				start: 1427477400000,
				end: 1427641200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="description">Description</h2>\n<p>The second installment of <strong>&#x23;play14 Luxembourg</strong> was a big success.\nMany thanks to all the participants.</p>\n<h2 id="pictures">Pictures</h2>\n<p>Take a look at some of the <a href="https://goo.gl/photos/C5zy6EWd2pVx6BsQ9">pictures</a>{:target="_blank"}</p>\n<p><a href=\'https://goo.gl/photos/C5zy6EWd2pVx6BsQ9\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/d9T1oI030l4w5wnJ-ROhKw7rUA7HCR5HwUmhBVINO3UYaEV7UPjEoNWxC2RTZkNMEPIGq_WXoJ0UOKS-UCCvaHiWqlWhPS7oE0fIE2kiIfLbHHsgVk3BBL0Z52d3iYJjrFHFfQ\' />\n</a></p>\n<h2 id="videos">Videos</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL6VQoC829PV1j_aElHBzOmB5Ja6nY5NXy" frameborder="0" allowfullscreen></iframe>\n<h2 id="articlesblogs">Articles &amp; Blogs</h2>\n<ul>\n<li><a href="http://www.serious-game.fr/play-14-le-salon-international-sur-les-serious-games/">Clément Kolodziejczak on serious-game.fr</a></li>\n</ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1427481000000,
				updatedAt: 1678736609584,
				defaultImageId: 'file_3176',
				imageIds: ['file_3176', 'file_3174', 'file_3179', 'file_3175'],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/C5zy6EWd2pVx6BsQ9',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/watch?list=PL6VQoC829PV1j_aElHBzOmB5Ja6nY5NXy&v=MKAa8YrzvUk',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 53,
				name: 'Timisoara 2018',
				slug: 'timisoara-2018-06',
				start: 1529080200000,
				end: 1529247600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="howtogetthere">How to get there</h2>\n<p>Reach Timisoara city:</p>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane: Timisoara International Airport is well connected with many of the major cities around Europe and buses/taxis can bring you directly to the city center (15 min)\nCheck the <a href="http://aerotim.ro/">airport website</a></li>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car:</li>\n<li>3 hours drive <a href="https://www.google.lu/maps/dir/Budapest,+Hungary/Nokia+(ex-Alcatel+Lucent),+Bulevardul+Republicii,+Timi%C8%99oara,+Timi%C8%99+County,+Romania/@46.6228373,18.9450191,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4741c334d1d4cfc9:0x400c4290c1e1160!2m2!1d19.040235!2d47.497912!1m5!1m1!1s0x47455d7b2821e4ad:0x9eeb89884ab984db!2m2!1d21.21106!2d45.750903!3e0?hl=en">from Budapest</a></li>\n<li>2:30 hours drive <a href="https://www.google.lu/maps/dir/Belgrade,+Serbia/Nokia+(ex-Alcatel+Lucent),+Bulevardul+Republicii,+Timi%C8%99oara,+Timi%C8%99+County,+Romania/@45.268278,20.1049334,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x475a7aa3d7b53fbd:0x1db8645cf2177ee4!2m2!1d20.4489216!2d44.786568!1m5!1m1!1s0x47455d7b2821e4ad:0x9eeb89884ab984db!2m2!1d21.21106!2d45.750903?hl=en">from Belgrade</a> (no High Speed)</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay</h2>\n<p>Here are some hotels or places to stay close to the venue:</p>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\n<a href="http://iosefinresidence.ro/">Iosefin Residence Timisoara</a></li>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\n<a href="http://hoteltimisoara.ro/ro/">Casa Palace Hotel Timisoara</a> is located in the city center and just around the corner.\nYou can book through <a href="http://www.booking.com">Booking</a> or calling them directly.</li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Timi%C8%99oara--Timi%C8%99-County--Romania?guests=1&adults=1&children=0&infants=0&place_id=ChIJp7UPy31nRUcRSWeTc2Svf1M&checkin=07%2F14%2F2018&source=bb&page=1&allow_override%5B%5D=&checkout=07%2F16%2F2018&ss_id=u7iwpyhm&s_tag=-4PtH6fC">some rooms</a></li>\n</ul>\n<h2 id="register">Register</h2>\n<p><a title="Registration" href="https://www.weezevent.com/?c=sys_widget" class="weezevent-widget-integration" target="_blank" data-src="https://www.weezevent.com/widget_billeterie.php?id_evenement=323358&lg_billetterie=2&code=42627&resize=1&width_auto=1&color_primary=00AEEF" data-width="650" data-height="600" data-id="323358" data-resize="1" data-width_auto="1" data-noscroll="0" data-nopb="0">Registration</a><script type="text/javascript" src="https://www.weezevent.com/js/widget/min/widget.min.js"></script></p>\n<h2 id="photos">Photos</h2>\n<p><a href=\'https://photos.app.goo.gl/AicYVwdLoNZJ3hjv6\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/NE8xDI3ROu4d3so07nY09abGM5emRbFyV-tqkQLM52J9aE7NPtlr8_bHwttq5Aqeq9Z_KXWWcroXWQzTEeg4n8HqY456CvudeQ1Rj3uk7Q6kBW2H8lBS3KnasF2keNnu5Z2IfFK-4tkIj-nZ3G4VIc4KBw3ztFOkf7wTLPO43sXjKtwCk0gYyC5-fe6FO2tIJkAqbZGyxIas_fDRDjWFHrM55B40PP0eL0PJV66cWGnKKmEv5b-9MjiroREdGhS57u73wAdng8xFWlxDJSVVrCXbjcos_BNbwhS1KBpr0nHlO0nvQHJeVh4wNeLg656xq3eT0qcSYrtcwVJWsVhCIT-5a8rl_h9wO_O_6OkI_fzBTaIDU0NPf_iAfDiAmBtsDdE0yyNG3BVxsVdPcvLdtaKEX4JVtMcMRFjNfHe4YMq9isdavh4Kla7cG9mObGxH_3hZzXBQGM_lycUG0pohHnHWYQElnlju3i0MP4IQWlheELdsK3ZNHYq9eYE8rCi2VsH6Wg0G4X-KB7wGC-n-LKiOw4a5M0XGPkyhcJyUaHN6nfWwqD4FSBKJGYjdjaMeNblYJU4jWsND56_EgI7mGLouDPA4v6fCSCHvLsZrQMi403l6K_2NX4nsYia6gEwKEgzJzqS6ZJFJnAEPEZ4rdShIIxo5AiBhMXG6LNIqkTFweeTPFKGFfQVoRA=w496-h331-no\' width="560" />\n</a></p>',
				contactEmail: 'timisoara@play14.org',
				tagline: null,
				publishedAt: 1529087400000,
				updatedAt: 1678736626006,
				defaultImageId: 'file_3225',
				imageIds: [
					'file_3225',
					'file_3224',
					'file_3222',
					'file_3229',
					'file_3223',
					'file_3221',
					'file_3226',
					'file_3228'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'Friday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'Sunday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"form"}'
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/AicYVwdLoNZJ3hjv6',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 83,
				name: 'Madrid 2023',
				slug: 'madrid-2023-06',
				start: 1686924000000,
				end: 1687084200000,
				timezone: 'Europe/Madrid',
				status: 'Over',
				description:
					'<h2>Videos&nbsp;</h2><ul style="list-style-type:disc;"><li><a href="https://www.youtube.com/watch?v=p6T-0k59L6Y&amp;list=PL6VQoC829PV1JqCxlNB6TnPkrd9BX5ILQ&amp;t=1s">Play14 Madrid 2018</a></li><li><a href="https://www.youtube.com/watch?v=Pwhjr0Y82f4">Play14 Madrid 2018 - Interviews</a></li></ul><h3>Articles in English</h3><ul><li><a href="https://www.linkedin.com/feed/update/activity:6409872598234128385/">Jesus Hijas</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409292460110991360/">Alan McShane</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409172561493663744">Marcos Fargas</a></li><li><a href="https://www.linkedin.com/feed/update/urn:li:activity:6408917761933799424">Ricardo Fernandes</a></li></ul><h3>Articles in Spanish</h3><ul><li><a href="https://www.linkedin.com/comm/feed/update/activity:6409152518819053568">Marta Gomáriz González</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409113417772261376">Raquel Pedrouso</a></li></ul>',
				contactEmail: 'play14madrid@gmail.com',
				tagline: null,
				publishedAt: 1683099687574,
				updatedAt: 1687783646043,
				defaultImageId: 'file_4929',
				imageIds: ['file_4930', 'file_4929'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Friday Warm welcome & mingle',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Official welcome + Ice Breakers'
							},
							{
								time: '20:30:00',
								description: 'Tapas Dinner '
							},
							{
								time: '22:30:00',
								description: 'Closing the day'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Lunch'
							},
							{
								time: '15:00:00',
								description: 'Sessions'
							},
							{
								time: '17:30:00',
								description: 'Retrospective+ closing'
							},
							{
								time: '18:00:00',
								description: 'Preparation for Dinner'
							},
							{
								time: '19:30:00',
								description: 'Dinner'
							},
							{
								time: '21:30:00',
								description: 'End of evening'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Coffe + warm-up'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Restrospective'
							},
							{
								time: '14:30:00',
								description: 'Closing'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode:
						'<a href="https://widget.weezevent.com/ticket/E975426/?code=50194&locale=es-ES&width_auto=1&color_primary=00AEEF" onclick="var w=window.open(\'https://widget.weezevent.com/ticket/E975426/?code=50194&locale=es-ES&width_auto=1&color_primary=00AEEF\', \'Billetterie_weezevent\', \'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no\'); w.focus(); return false;" style="text-decoration: none;color: #FFFFFF;background: #00AEEF;padding: .4em 1em;">Comprar entradas</a>'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 21,
				name: 'Porto 2020',
				slug: 'porto-2020-07',
				start: 1593792000000,
				end: 1593961200000,
				timezone: 'UTC',
				status: 'Cancelled',
				description: '',
				contactEmail: 'porto@play14.org',
				tagline: null,
				publishedAt: 1593799200000,
				updatedAt: 1692709160759,
				defaultImageId: 'file_3363',
				imageIds: ['file_3363'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 55,
				name: 'Madrid 2018',
				slug: 'madrid-2018-06',
				start: 1527870600000,
				end: 1528038000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Friday afternoon</h2><p>On Friday afternoon, we will start at 4PM at <strong>BBVA Open Space</strong> with ice breakers and explanations about #play14 rhythm and the marketplace.<br>The rest of the event on Saturday and Sunday will be held at <strong>TheVenture.city</strong></p><p><!-- Images -->&nbsp;</p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/01_98268df749.jpg" alt=""></p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/02_e1e56e025d.jpg" alt=""></p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/03_71c907549b.jpg" alt=""></p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/04_d66252a5ff.jpg" alt=""></p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/05_3503903c07.jpg" alt=""></p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/06_0c7da52546.jpg" alt=""></p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/07_10e7ecbf2c.jpg" alt=""></p><p><img class="image_resized" style="width:auto;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/08_a62dad4203.jpg" alt=""></p><p>&nbsp;</p><h3><a href="https://openspace.bbva.com/madrid/en/">BBVA OPEN SPACE&nbsp;</a><br>ALMAGRO</h3><ul><li><strong>Address</strong></li><li>Plaza Sta. Bárbara 2, 28004 Madrid</li><li><strong>Start</strong></li><li>Friday, June 1 2018</li><li>16:00</li><li><strong>Finish</strong></li><li>Friday, June 1 2018</li><li>19:30</li></ul><h2>Videos</h2><h2>Photos</h2><h3>Official photos from Morgan Marinoni (professional photographer)</h3><p>Many thanks to <a href="https://twitter.com/MorganMarinoni">Morgan Marinoni</a> for these wonderful pictures.</p><p><a href="https://photos.app.goo.gl/6lv0sVrDAJJKXo2m2"><img src="https://lh3.googleusercontent.com/LkjMrE6-HeviXMWE5gg6WcvlmMd-RJvyT5hejpZ8pu0SExMcwqNA_w3o9msvf4Iqw6nf8tqamqq5VSyDFrJrPOGnNNpoI3LFsuVHDR2lekpS7Lo4_A6Lxk89o88lY48FO86aRiHgowqzZjp8x1ytHh4Qj67ybadfhds8WM0ZAfbWn5EqXmky7GfE2jYaN-aXkrOcLfqssnfzIDL1uoTaa8c3dM_EzmL_XK__2yfifCTe3pV-fDAwmi-q6YhxK1jUrWZCzhdAa_es-8qzeB8bSrsQo9i0xDIzGlwuZGUqm9mvwEgDThVtpPIhumcc6OUeMl9rFcGaZoPgDmgZsEzvfLWZtwDiySv09AZhzZ8PWq1IGGinyKlhoUY4VrzwD3KFV3vclT7M2myAoTW2FOrhmtvuhc0idCnA_TI6zytYD5F9EUrIu2mF8JjBKyp9ydp7sv8UMSjvA-JKy2Qn_PbxDq7XtWyWvd23XxXn-VooAhS4JG4XOD2y9qc1bR7qcySENgPrinQx3MbhBQ4MMi89KE2mLTYxuhx0JhusLnvxFgYHyIWJV1Bg_Az0181UPZQLszBxSlQqQQa9aLuOMVa8gMabTqrxA-CF0aAl6ZCvQus6gi0RAKgoK3y7cF1kk18N3Ip2jEUgK0dMJ70IZVFnkRU3k1XK4Bhs=w2826-h1884-no"></a></p><h3>Photos from attendees</h3><p><a href="https://photos.app.goo.gl/EHn2WtvID3UVlOyM2"><img src="https://lh3.googleusercontent.com/P00ieX-z3I-mcB71zW_LOU3iIA4_YbUC4AqHG7qk4MkEoRRfYvoFoffCIKp7PVx4INOiJLDdtmRuFqaoDCuWY10MZXLoxSAB1jp8ELX9689grtyP8kzs5SSy5qwkROgQ3TKa64dX0PikwKZMk2J6TyDQu_Q8djIU7YBym4PRwcQ30bZ5TN6TPfdPUUgQGkVgz4WARa4AiBehHG_rkYeGt22sM7HJg4sOQHVccTyGGj9Twdg3BZwQmlxQaUS4Y76vng52s8fr-QpCXn4g2SVQuhbChbmQK8oviwJSAMdMWBBRMhBbZn-mWRWVmOzdi8MMWsY6hy56Ve1E5zR25Prv8uhgQrKXjNGBWhBKQSrpv4lRydKek2SGcK6nEtwlYqqhS1N947JrUquDHuJ5c4HV3UBoaVmZZr_Z0KgzWe4dComhzCw6YMJDldhAN-9GNCYPHEU7fuvkHl9Mfn3hIVPPXOQePiGJh5Q48ixD0-JyZb3O5JaueVjaC76Mbe62zKGZfF700WCdbFZuMJYqe38P0pYwbRfRlAm8TV5PNSbkx0mk9UaAUhJ0I-4dhL-MHrA3OWm1rrUxRalniE5IG3dorMDpMHCrkAUhyeu18eJDHLnc2aq9UQB7RBUffd29eFr20Ccg6CEo1l9YvVCOlXt6EQ2s9UuAy52p=w3841-h1868-no"></a></p><h2>Articles</h2><h3>Articles in English</h3><ul><li><a href="https://www.linkedin.com/feed/update/activity:6409872598234128385/">Jesus Hijas</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409292460110991360/">Alan McShane</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409172561493663744">Marcos Fargas</a></li><li><a href="https://www.linkedin.com/feed/update/urn:li:activity:6408917761933799424">Ricardo Fernandes</a></li></ul><h3>Articles in Spanish</h3><ul><li><a href="https://www.linkedin.com/comm/feed/update/activity:6409152518819053568">Marta Gomáriz González</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409113417772261376">Raquel Pedrouso</a></li></ul>',
				contactEmail: 'madrid@play14.org',
				tagline: null,
				publishedAt: 1527877800000,
				updatedAt: 1683632336675,
				defaultImageId: 'file_4991',
				imageIds: ['file_4993', 'file_4992', 'file_4991', 'file_4989', 'file_4990'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'We will start in the evening at the BBVA OPEN SPACE MADRID.',
						timeslots: [
							{
								time: '16:00:00',
								description: 'Welcome + ice breakers'
							},
							{
								time: '19:30:00',
								description: 'End of the evening'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-ups'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Game sessions'
							},
							{
								time: '13:30:00',
								description: 'Lunch'
							},
							{
								time: '14:30:00',
								description: 'Game sessions'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'After play'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Brunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '14:30:00',
								description: 'Retrospective & farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":333151,"code":32121}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local sponsor',
						sponsorIds: []
					},
					{
						category: 'Local provider',
						sponsorIds: []
					},
					{
						category: 'Goodies',
						sponsorIds: []
					},
					{
						category: 'Global sponsor',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/EHn2WtvID3UVlOyM2',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV1JqCxlNB6TnPkrd9BX5ILQ',
						type: 'Videos'
					},
					{
						url: 'https://photos.app.goo.gl/6lv0sVrDAJJKXo2m2',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 63,
				name: 'Berlin 2019',
				slug: 'berlin-2019-06',
				start: 1561132800000,
				end: 1561302000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h3 id="thiseventiscarbonneutral">This event is Carbon Neutral</h3>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/climate_neutral_55de2f9e15.png" alt="carbon neutral" width="300"/></p>',
				contactEmail: 'germany@play14.org',
				tagline: null,
				publishedAt: 1561140000000,
				updatedAt: 1678736636324,
				defaultImageId: 'file_3271',
				imageIds: ['file_3271'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":53722657916}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/Ee3vTQ4MST6LKeoL9',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 25,
				name: 'The Big One 2020',
				slug: 'the-big-one-2020-07',
				start: 1595628000000,
				end: 1595714340000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1595635200000,
				updatedAt: 1678736650320,
				defaultImageId: 'file_3364',
				imageIds: ['file_3364'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Saturday',
						description: 'We will play in different all around the world for 24 hours',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Sydney starts (AEST)'
							},
							{
								time: '16:00:00',
								description: 'Sydney ends (AEST)'
							},
							{
								time: '09:00:00',
								description: 'Kuala Lumpur / Singapore starts (GMT+7)'
							},
							{
								time: '16:00:00',
								description: 'Kuala Lumpur / Singapore ends (GMT+7)'
							},
							{
								time: '09:00:00',
								description: 'Beirut starts (EEST)'
							},
							{
								time: '16:00:00',
								description: 'Beirut ends (EEST)'
							},
							{
								time: '09:00:00',
								description: 'Europe starts (CEST)'
							},
							{
								time: '16:00:00',
								description: 'Europe ends (CEST)'
							},
							{
								time: '09:00:00',
								description: 'Montreal / Toronto / NYC starts (EDT)'
							},
							{
								time: '16:00:00',
								description: 'Montreal / Toronto / NYC ends (EDT)'
							},
							{
								time: '09:00:00',
								description: 'Mexico / Los Angeles starts (PDT)'
							},
							{
								time: '16:00:00',
								description: 'Mexico / Los Angeles ends (PDT)'
							}
						]
					}
				],
				registration: {
					link: 'https://www.eventbrite.de/e/iplay24h-the-big-one-tickets-111974352302',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 31,
				name: 'Utrecht 2020',
				slug: 'utrecht-2020-11',
				start: 1605204000000,
				end: 1605369600000,
				timezone: 'UTC',
				status: 'Cancelled',
				description: '',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1605207600000,
				updatedAt: 1677370777827,
				defaultImageId: 'file_3395',
				imageIds: ['file_3395'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice time all together.',
						timeslots: [
							{
								time: '19:00:00',
								description: 'Ice breakers & warmups'
							},
							{
								time: '20:00:00',
								description: 'Drinks / Snacks / Mingle'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":118441659191}'
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 57,
				name: 'Milano 2017',
				slug: 'milano-2017-05',
				start: 1493910000000,
				end: 1494082800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<p><strong>Check our site </strong><a href="http://www.play14.it/"><strong>in Italian</strong></a></p><h2>Description</h2><p>For the second time, <strong>#play14</strong> will reach Milano for a great event.</p><p>If you are interested in having more detail, you can find a reportage (in italian) of the <a href="http://www.mokabyte.it/2014/04/play14/">2014 edition in Luxembourg</a> and of the <a href="http://www.mokabyte.it/2015/04/play14-2015/">2015 edition in Luxembourg</a>.<br>You can also find a <a href="http://www.mokabyte.it/2016/05/play14milano/">reportage</a> of the 2016 edition in Milano.</p><p>Check out the summary video of <a href="/events/milano/2016-05">#play14 Milano 2016</a> by <a href="/players/christina-ohanian">Christina Ohanian</a></p><h2>Friends of #play14</h2><p>#play14 is an unconference: the programme will be defined by the participants who are free to sumbmit contents and to decide the schedule. While remaining faithful to the unconference format, again for the Milan 2017 edition we will be emphasising the <strong>“cultural contamination”</strong> concept. Therefore, we have invited people with different backgrounds and skills, who share a strong interest in gaming as a business tool. We created the <strong>#play14 Friends programme</strong> in order to involve trainers, coaches, agile coaches, scrum masters and all kinds of agilists, psychotherapists, UX experts, improvisational theatre actors, musician and so on.</p><ul><li><a href="#">All</a></li><li><a href="#">{{yearGroup.name}}</a></li><li><a href="{{friend.url}}"><img src="{{friend.avatar | default:\'/images/players/default.png\'}}" alt="">&nbsp;</a><!--h3>{{friend.name}}</h3--></li></ul><h2>How to get there ?</h2><ul><li>Metro (subway) Line 1 stop at <a href="https://www.google.it/maps/place/Sesto+Marelli/@45.5283826,9.2222941,16z/data=!4m2!3m1!1s0x4786c767a3e194b1:0xfe7e468eccd173f5?shorturl=1">Sesto Marelli station</a> (500m from the venue).</li></ul><h2>where to stay ?</h2><ul><li><a href="https://www.google.it/maps/place/Hotel+Bert/@45.5290543,9.2232798,16z/data=!4m5!3m4!1s0x0000000000000000:0xca6b6b056d322025!8m2!3d45.5286152!4d9.2280774">Hotel Bert</a></li><li><a href="https://www.google.it/maps/place/Hotel+St+John/@45.5290543,9.2232798,16z/data=!4m5!3m4!1s0x0000000000000000:0x53b0a3f44d201cbe!8m2!3d45.529835!4d9.2288922">Hotel St. John</a></li><li><a href="https://www.google.it/maps/place/B%26B+Hotel+Milano+Sesto/@45.5289732,9.2238135,16z/data=!4m5!3m4!1s0x0000000000000000:0x6d779e1a4fe1874c!8m2!3d45.5269907!4d9.2294967">B&amp;B Hotel Milano - Sesto</a></li></ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1493917200000,
				updatedAt: 1683633608523,
				defaultImageId: 'file_5017',
				imageIds: [
					'file_5016',
					'file_5015',
					'file_5014',
					'file_5013',
					'file_5012',
					'file_5010',
					'file_5011',
					'file_5008',
					'file_5009'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'Thursday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://tickets.agilereloaded.it/event/play14',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Our local sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 28,
				name: 'Vienna 2020',
				slug: 'vienna-2020-09',
				start: 1600358400000,
				end: 1600527600000,
				timezone: 'UTC',
				status: 'Cancelled',
				description: '',
				contactEmail: 'austria@play14.org',
				tagline: null,
				publishedAt: 1600365600000,
				updatedAt: 1678736603362,
				defaultImageId: 'file_3376',
				imageIds: ['file_3372', 'file_3376', 'file_3373', 'file_3374', 'file_3377', 'file_3375'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle / Beer at the venue'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:30:00',
								description: 'Start of Vienna City Game'
							},
							{
								time: '19:00:00',
								description: 'Dinner back at the venue'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://www.eventbrite.com/e/play14-vienna-2020-tickets-111618624310',
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 46,
				name: 'Hamburg 2016',
				slug: 'hamburg-2016-06',
				start: 1466785800000,
				end: 1466953200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="description">Description</h2>\n<p>The first installment of <strong>&#x23;play14 Hamburg</strong> was a big success.\nMany thanks to all the participants.</p>\n<h2 id="pictures">Pictures</h2>\n<p>Take a look at some of the <a href="https://goo.gl/photos/FUAwyhgbhDs93SEm6">pictures</a>{:target="_blank"}</p>\n<p><a href=\'https://goo.gl/photos/FUAwyhgbhDs93SEm6\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/Od4BVQ_rSAL4_6vIiptrll41ubf6DReUxeBaprwUm2tShRcxvrvEQUTRvORoYr6vzLTOLf_qywV3QpkZSa89cnDEPwH8ic3UujavBC0jgauH_CNC8tbMP7dEM4HgHIjKMPCQAQ\' />\n</a></p>\n<h2 id="videos">Videos</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL6VQoC829PV20jQOssa4L6_jWeXzqOekg" frameborder="0" allowfullscreen></iframe>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1466793000000,
				updatedAt: 1678736611584,
				defaultImageId: 'file_3171',
				imageIds: ['file_3171'],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/FUAwyhgbhDs93SEm6',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/watch?list=PL6VQoC829PV20jQOssa4L6_jWeXzqOekg&v=N2quY1ZPF50',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 51,
				name: 'Amsterdam 2017',
				slug: 'amsterdam-2017-11',
				start: 1509642000000,
				end: 1509811200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="important">Important</h2>\n<p>Due to some unforeseen events, <strong>we have changed location</strong>.<br />\n&#x23;play14 Netherlands will now be hosted by <strong>Xebia in Amsterdam</strong>.</p>\n<h2 id="thursdayevening">Thursday evening</h2>\n<p>We will have a <strong>get together</strong> event on Thusday evening.\nHowever, it will not be at Xebia like the rest of the event.</p>\n<p>We will gather at the <a href="https://www.volkshotel.nl/en/">Volks Hotel</a> at 6 PM for some ice breakers and games.</p>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Volkshotel_01_bd19af7bf1.jpg" alt="Volks Hotel" />\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Volkshotel_02_0a84309a15.jpg" alt="Volks Hotel" /></p>\n<p>Then we will be served snacks and drinks, while mingling.</p>\n<h2 id="wheretostay">Where to stay</h2>\n<ul>\n<li><p><i class=\'fa fa-hotel fa-2x fa-fw\'></i> <a href="https://www.volkshotel.nl/en">Volks Hotel</a></p></li>\n<li><p><i class=\'fa fa-hotel fa-2x fa-fw\'></i> <a href="https://www.thestudenthotel.com/amsterdam-city/">The Student Hotel</a></p></li>\n<li><p><i class=\'fa fa-hotel fa-2x fa-fw\'></i> <a href="https://www.google.nl/maps/search/hotels/@52.3540208,4.9035749,15z/data=!3m1!4b1">Other hotels nearby</a></p></li>\n<li><p><i class=\'fa fa-globe fa-2x fa-fw\'></i> <a href="https://www.airbnb.nl/s/Amsterdam/homes">Aidbnb</a></p></li>\n</ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1509645600000,
				updatedAt: 1678736622106,
				defaultImageId: 'file_3483',
				imageIds: ['file_3483'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice time all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Games'
							},
							{
								time: '20:00:00',
								description: 'Drinks / Snacks / Mingle'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":36837977382}'
				},
				sponsorships: [
					{
						category: 'Venue & catering',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/N9oqBY7VsuWNiAl33',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 96,
				name: 'Singapore 2024',
				slug: 'singapore-2024-10',
				start: 1729843200000,
				end: 1730019600000,
				timezone: 'Singapore',
				status: 'Over',
				description:
					'<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Play14_SG_logo_for_white_backgrd_12c93e5040.PNG" alt="Play14 SG logo for white backgrd.PNG" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_Play14_SG_logo_for_white_backgrd_12c93e5040.PNG 208w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_Play14_SG_logo_for_white_backgrd_12c93e5040.PNG 500w,https://play14-cdn.azureedge.net/strapi-uploads/assets/medium_Play14_SG_logo_for_white_backgrd_12c93e5040.PNG 750w,https://play14-cdn.azureedge.net/strapi-uploads/assets/large_Play14_SG_logo_for_white_backgrd_12c93e5040.PNG 1000w," sizes="100vw" width="2155" height="1614"><strong>About this event</strong><br><br>Want to build connections, foster collaboration, spark creativity and accelerate learning at your workplace?<br><br>Or looking to incorporate serious games and fun, meaningful activities into your meetings, brainstorming sessions, training and team-building?<br><br><strong>Welcome to the inaugural #Play14 Singapore!</strong></p><p><strong>W﻿hat is #play14?</strong><br>We are a global non-profit movement of play enthusiasts who believe play(fulness) is the best way to learn, share and create! Since starting in Luxembourg in 2014, #play14 has engaged 2,500 players in 35 cities across 20 countries. Celebrating its 10-year anniversary this year, #play14 is coming to Singapore for the first time in October!&nbsp;</p><p><strong>How is #play14 different from other events?</strong><br>#play14 is an unconference based on open space technology. Participants (players) are also contributors, pitching games, questions or challenges to claim a time slot in the day’s schedule. The schedule is created every morning on the spot, encouraging spontaneous and dynamic interactions.&nbsp;</p><p><strong>Who’s #play14 for?</strong><br>Players come from diverse backgrounds and industries: games designers, trainers, facilitators, agile coaches, teachers, HR, L&amp;D professionals, and more. Whether you aim to inspire or be inspired, there’s something for everyone!&nbsp;</p><p><strong>What can I expect at #play14 Singapore?&nbsp;</strong><br><strong>*</strong> <strong>Physical Games &amp; Play Experience: </strong>Learn, share and understand through play.&nbsp;</p><p><strong>* New Ideas: </strong>Discover new activities and variations to try with your teams.&nbsp;</p><p><strong>* Conversations:</strong> Connect with interesting people from various backgrounds.&nbsp;</p><p><strong>* Experimentation: </strong>Test ideas and new games in a safe place with open-minded people who will be happy to provide feedback. Or come up with something you want to teach, and find people to help you design a game for it.&nbsp;</p><p>See the schedule above for what\'s in store. Join us for a whole new level of play(fulness) in our Little Red Dot this October!&nbsp;</p><p>***</p><p><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>For more information, find us on:&nbsp;</strong></span></span><br><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Global site -<u> </u></span></span><a target="_blank" rel="noopener noreferrer" href="https://play14.org"><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><u>https://play14.org</u></span></span></a><br><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Singapore site - </span></span><a target="_blank" rel="noopener noreferrer" href="https://play14.org/events/singapore-2024-10"><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><u>https://play14.org/events/singapore-2024-10</u></span></span></a><br><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">#play14 Singapore LinkedIn page - </span></span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/play14-singapore"><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><u>https://www.linkedin.com/company/play14-singapore</u></span></span></a><u>&nbsp;</u></p><p>Email - <a href="mailto: singapore@play14.org" target="_blank" rel="noopener noreferrer">singapore@play14.org</a></p><p><span style="background-color:transparent;color:#000000;font-family:Arial,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Limited tickets on sale now. Book early for attractive savings!&nbsp;</span></span></p><p>***</p><p><i><strong>Kindly supported by National Library Board, Singapore (venue partner) and Pixo Events Asia (onsite communications partner)</strong></i></p><p><i><strong>In support of Playeum (registered charity partner)</strong></i></p><hr><figure class="image image_resized" style="width:74.46%;"><img style="aspect-ratio:2567/1939;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Logo_Playeum_Pink_0d1b193cc9.png" alt="playeum" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_Logo_Playeum_Pink_0d1b193cc9.png 207w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_Logo_Playeum_Pink_0d1b193cc9.png 500w,https://play14-cdn.azureedge.net/strapi-uploads/assets/medium_Logo_Playeum_Pink_0d1b193cc9.png 750w,https://play14-cdn.azureedge.net/strapi-uploads/assets/large_Logo_Playeum_Pink_0d1b193cc9.png 1000w," sizes="100vw" width="2567" height="1939"></figure><p>Founded in 2009, Playeum was established in 2013 as a registered charity dedicated to using play and the arts to create equitable opportunities for learning, voice, and agency for every child in Singapore. Its vision is that one day, all children in Singapore, regardless of their differences and backgrounds, will be able to thrive as the best versions of themselves. It collaborates with partners with a shared vision, and connect with various sectors in society to create structural change for equitable outcomes through community- and family-centric programmes, teacher training, research, and advocacy.</p><hr><p>&nbsp;</p>',
				contactEmail: 'singapore@play14.org',
				tagline: null,
				publishedAt: 1719411345843,
				updatedAt: 1730070000262,
				defaultImageId: 'file_5275',
				imageIds: ['file_5285', 'file_5286', 'file_5287', 'file_5288', 'file_5262', 'file_5263'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'We are welcoming all participants with a dinner at (tba). ',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Welcome & Ice - Breakers'
							},
							{
								time: '18:30:00',
								description: 'Dinner, Drinks  & Mingle'
							},
							{
								time: '19:30:00',
								description: 'Introduction : The Marketplace'
							},
							{
								time: '20:00:00',
								description: "Orientation: Let's Play!"
							},
							{
								time: '21:00:00',
								description: 'End of Day 1'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with The Marketplace, and from then, we will play all day long!',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm ups'
							},
							{
								time: '10:00:00',
								description: 'The Marketplace'
							},
							{
								time: '10:30:00',
								description: "Let's Play!"
							},
							{
								time: '13:00:00',
								description: 'Lunch '
							},
							{
								time: '14:00:00',
								description: "Let's Play!"
							},
							{
								time: '17:30:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Chill & Chat Networking Dinner'
							},
							{
								time: '20:00:00',
								description: 'End of Day2'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We start again with the marketplace before we commence with a full day of play and games. If you need to catch a plane, can leave early. But we encourage everyone to stay until the end of the session. ',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm ups'
							},
							{
								time: '10:00:00',
								description: 'The Marketplace'
							},
							{
								time: '10:30:00',
								description: "Let's Play!"
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: "Let's Play!"
							},
							{
								time: '17:30:00',
								description: 'Final Retrospective'
							},
							{
								time: '18:00:00',
								description: 'End of Day 3 & Clean-Up'
							}
						]
					}
				],
				registration: {
					link: 'https://www.eventbrite.sg/e/play14-tickets-951464735637',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 48,
				name: 'Madrid 2017',
				slug: 'madrid-2017-06',
				start: 1497024000000,
				end: 1497186000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Videos</h2><h2>Blogs &amp; articles</h2><ul><li><a href="https://www.linkedin.com/pulse/power-playfulness-play14-madrid-mari-luz-garcia">Mari Luz Garcia on LinkedIn</a></li><li><a href="http://www.pacoprieto.com/play14-juegos-serios-y-generosidad-en-el-aprendizaje-de-adultos.html">Paco Prieto</a></li></ul><h2>Robot Museum</h2>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1497031200000,
				updatedAt: 1683632941969,
				defaultImageId: 'file_4996',
				imageIds: [
					'file_5007',
					'file_5006',
					'file_5005',
					'file_5004',
					'file_5002',
					'file_5001',
					'file_4999',
					'file_5000',
					'file_5003',
					'file_4998'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening with a special guided visit to the robot museum. We will learn to know each other and share a nice wine tasting all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Welcome & guided visit robot museum + ice breakers'
							},
							{
								time: '21:00:00',
								description: 'Wine tasting/ Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-ups'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Game sessions'
							},
							{
								time: '13:30:00',
								description: 'Lunch'
							},
							{
								time: '14:30:00',
								description: 'Game sessions'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'After play'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Brunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '14:30:00',
								description: 'Retrospective & farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":33357175209}'
				},
				sponsorships: [
					{
						category: 'Our local sponsors',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/q984XWGwe2aqtWRcA',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/watch?v=mZQDZFqWU5s&list=PL6VQoC829PV0ea3b-v14ysEYhtxU__uoE',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 60,
				name: 'Bologna 2019',
				slug: 'bologna-2019-06',
				start: 1560441600000,
				end: 1560610800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<p><strong>Check our site <a href="http://www.play14.it/">in Italian</a></strong></p>\n<h2 id="agilerelaodedscarpoolkaraoke">Agile Relaoded\'s carpool karaoke</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/KzBBDAQMWKA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h2 id="description">Description</h2>\n<p>If you are interested in having more detail, you can find a reportage (in italian) of the <a href="http://www.mokabyte.it/2014/04/play14/">2014 edition in Luxembourg</a>\nand of the <a href="http://www.mokabyte.it/2015/04/play14-2015/">2015 edition in Luxembourg</a>.<br />\nYou can also find a <a href="http://www.mokabyte.it/2016/05/play14milano/">reportage</a> of the 2016 edition in Milano.</p>\n<p>Check out the summary video of <a href="/events/milano/2016-05">&#x23;play14 Milano 2016</a> by <a href="/players/christina-ohanian">Christina Ohanian</a></p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/7bRJPQMY-R0" frameborder="0" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h2 id="friendsofx23play14">Friends of &#x23;play14</h2>\n<p>&#x23;play14 is an unconference: the programme will be defined by the participants who are free to sumbmit contents and to decide the schedule.\nWhile remaining faithful to the unconference format, again for the Milan 2017 edition we will be emphasising the <strong>“cultural contamination”</strong> concept. Therefore, we have invited people with different backgrounds and skills, who share a strong interest in gaming as a business tool.\nWe created the <strong>&#x23;play14 Friends programme</strong> in order to involve trainers, coaches, agile coaches, scrum masters and all kinds of agilists, psychotherapists, UX experts, improvisational theatre actors, musician and so on.</p>\n<div class=\'full\'>\n  <div class=\'row\'>\n    <div class=\'mod modMasonryGallery\'>\n      <div class=\'gallery-nav\'>\n        <ul>\n          <li class=\'current\'>\n            <a data-cat=\'all\' href=\'#\'>All</a>\n          </li>\n          {% assign yearGroups = page.friends | group_by:\'year\' %}\n          {% for yearGroup in yearGroups %}\n            <li>\n              <a data-cat=\'{{yearGroup.name}}\' href=\'#\'>{{yearGroup.name}}</a>\n            </li>\n          {% endfor %}\n        </ul>\n      </div>\n\n      <ul class=\'gallery large-block-grid-4 medium-block-grid-3 seperated small-block-grid-2\'>\n        {% for friend in page.friends %}\n          <li class=\'{{friend.year}}\'>\n            <a href=\'{{friend.url}}\' target=\'_blank\'>\n              <img alt="" src="{{friend.avatar | default:\'/images/players/default.png\'}}" height="200" width="200" />\n            </a>\n            <!--h3>{{friend.name}}</h3-->\n          </li>\n        {% endfor %}\n      </ul>\n\n    </div>\n\n  </div>\n</div>',
				contactEmail: 'italy@play14.org',
				tagline: null,
				publishedAt: 1560448800000,
				updatedAt: 1678736636789,
				defaultImageId: 'file_3279',
				imageIds: ['file_3283', 'file_3279', 'file_3280', 'file_3281', 'file_3282'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'Thursday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://tickets.agilereloaded.it/event/play14-2019/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/ys9CzguaHgyDRm4m7',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 27,
				name: 'Mexico 2020',
				slug: 'mexico-2020-08',
				start: 1596812400000,
				end: 1596898800000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'mexico@play14.org',
				tagline: null,
				publishedAt: 1596819600000,
				updatedAt: 1683629975998,
				defaultImageId: 'file_4945',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Only 2 hours',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Games'
							}
						]
					},
					{
						day: 'Saturday',
						description: 'Full day',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Games'
							}
						]
					}
				],
				registration: {
					link: 'https://www.eventbrite.com.mx/e/play14-mexico-congreso-virtual-de-juegos-tickets-112141809170?aff=eand',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 86,
				name: 'Curia 2023',
				slug: 'curia-2023-09',
				start: 1694700000000,
				end: 1694871000000,
				timezone: 'Europe/Lisbon',
				status: 'Over',
				description:
					"<p>#play14 is a global community of coaches, facilitators, educators, consultants, researchers, workers and artists gathering during two and a half day to unleash creativity with serious games. Cause we realy share the common idea that playing is the best way to learn.</p><h1>Who is this event for?</h1><ul><li>For those who are passionate about learning</li><li>For those attracted by the latest serious gaming techniques</li><li>For those who value learning through experimenting and are open to new interactions and communities</li><li>For those who value the practical abilities of facilitation and who are looking for new ideas and methods to enhance these competencies</li><li>For those who want to make a change, get rid of the formal/protocolar environment and try one where creativity and game appreciation are valued</li></ul><h1>What will you learn?</h1><ul><li>&nbsp;Facilitation techniques</li><li>How to innovate</li><li>Change management</li><li>Organizational happiness</li><li>&nbsp;... and much more</li></ul><h1>What would be your financial contribution?</h1><p><br>The participation fee is between 290-310 EUR/person (all including, excepted the transportation's).</p><p>Note:</p><ul><li>This fee covers the cost of the event with all meals included, which are listed in the agenda. This year we include the accommodation . This cost doesn't include transport.</li><li>#play14 is a non-profit event. All earnings from ticket sales will be used to sustain the event.</li></ul><h1>How can you register?</h1><p>To reserve your place in the event you’ll need to register first (Book Now) and fill in the registration form until the 5st of September 2023. Please notice that this year's edition has a limit of 40 slots, so make sure you book before the event is full!</p><p>If you have any practical questions regarding this event, please send us an email us porto@play14.org</p><h1>How can I go?&nbsp;</h1><p>See the directions here: <a href=\"https://www.termasdacuria.com/en/hotel-directions.html\">https://www.termasdacuria.com/en/hotel-directions.html</a>&nbsp;</p>",
				contactEmail: 'porto@play14.org',
				tagline: null,
				publishedAt: 1683299374478,
				updatedAt: 1705582434000,
				defaultImageId: 'file_4917',
				imageIds: [
					'file_4916',
					'file_4915',
					'file_4914',
					'file_4911',
					'file_4912',
					'file_4913',
					'file_4917'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:30:00',
								description: 'Dinner'
							},
							{
								time: '22:00:00',
								description: 'Bar party'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Game'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious Games'
							},
							{
								time: '18:30:00',
								description: 'Retrospective'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Pizza'
							},
							{
								time: '22:00:00',
								description: 'Bar'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warmups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Game'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious Game'
							},
							{
								time: '16:00:00',
								description: 'Retrospective '
							},
							{
								time: '17:00:00',
								description: 'Time to say goodbye'
							}
						]
					}
				],
				registration: {
					link: 'https://widget.weezevent.com/ticket/E982732/?code=43742&locale=en-GB&width_auto=1&color_primary=ff5200',
					widgetCode:
						'<a title="Online ticketing"\n   href="https://weezevent.com/?c=sys_widget"\n   class="weezevent-widget-integration"\n   data-src="https://widget.weezevent.com/ticket/E982732/?code=43742&locale=en-GB&width_auto=1&color_primary=ff5200"\n   data-width="650"\n   data-height="600"\n   data-id="E982732"\n   data-resize="1"\n   data-width_auto="1"\n   data-noscroll="0"\n   data-use-container="yes"\n   data-type="neo"\n   target="_blank">Tickets</a>\n'
				},
				sponsorships: [
					{
						category: 'Host Support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 81,
				name: 'Manila 2023',
				slug: 'manila-2023-05',
				start: 1684915200000,
				end: 1685084400000,
				timezone: 'Asia/Manila',
				status: 'Over',
				description:
					'<p>Mabuhay! Welcome, everyone!&nbsp;</p><p>For the first time post the pandemic, #play14 heads back to Asia via the tropical shores of The Philippines. Your volunteer hosting team is excited to roll out the mat and bring play(fulness) to this part of the world.&nbsp;</p><p>~~</p><p>If you are new to #play14 and have landed directly on this page, please spend some time here, and.&nbsp;</p><ul><li>Discover the rich history of this global movement</li><li>Check out the many cities #play14 has been</li><li>Dive into what to expect for 2.5 days of play</li><li>Appreciate the <i>unconference </i>format of #play14</li><li>Read up on the sample games/ play experience</li><li>Relate with players who have joined in the past</li></ul><p>~~</p><p>Once you are done, and maybe have more questions about the tickets, please click on the <a href="https://www.eventbrite.com/e/play14-manila-tickets-600018299887">BOOK NOW</a> link. &nbsp;We have a bit more details there about #play14-Manila and a more extensive FAQs section.&nbsp;</p><p>We look forward to having you at the Asian Institute of Management Conference Centre (AIM CC)! &nbsp;&nbsp;</p><p>~~</p><p style="margin-left:40px;">CANCELLATION POLICY<br>We understand that individual circumstances change we desire to be as flexible as possible should you need to change or cancel your place on #play14 - Manila. Due to the demand for #play14 -Manila to prepay event space, food &amp; beverage requirements, and other operational expenses, we do need to put in place a cancellation policy to cover our costs, details of which can be found below:<br>• 6 weeks in advance of start date (April 3 - April 12): We are happy to fully refund your ticket or transfer your ticket to another delegate free of charge.<br>• Between 4–6 weeks in advance of start date (April 13 - April 26): We are happy to transfer your ticket to another delegate, but if you wish to cancel there will be a cancellation charge of 30% to cover we will have paid and fees to the ticketing system.<br>• Between 2–4 weeks in advance of start date (April 27 - May 10): We are happy to transfer your ticket to another delegate. If you wish to cancel, we will refund 50% of your ticket cost.<br>• 2 weeks in advance of start date (May 11 onwards): We are happy to transfer your ticket to another delegate, but cannot offer a ticket refund.</p>',
				contactEmail: 'manila@play14.org',
				tagline: null,
				publishedAt: 1683309600000,
				updatedAt: 1687783695734,
				defaultImageId: 'file_4810',
				imageIds: ['file_3441'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Wednesday',
						description:
							'We are welcoming all participants with a dinner at AIM Conference Centre.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Meeting at Starting point'
							},
							{
								time: '18:30:00',
								description: 'Icebreakers'
							},
							{
								time: '19:30:00',
								description: 'Sample of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Go for Dinner and Mingle'
							}
						]
					},
					{
						day: 'Thursday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Intro of #play14'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '16:30:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'End of Day'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will also start with the marketplace and add the new ideas on the board for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:15:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '16:30:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Cleanup & Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://www.eventbrite.com/e/play14-manila-tickets-600018299887',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Community Partner',
						sponsorIds: []
					},
					{
						category: 'Event Patron',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/UKSkxFkvsa3qZyPi7',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 108,
				name: 'Kuala Lumpur 2025',
				slug: 'kuala-lumpur-2025-08',
				start: 1754035200000,
				end: 1754215200000,
				timezone: 'Asia/Kuala_Lumpur',
				status: 'Open',
				description: '',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1747370865890,
				updatedAt: 1747370865983,
				defaultImageId: 'file_5435',
				imageIds: ['file_5436'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							"We'll begin the evening by getting to know each other and enjoying a lovely dinner together",
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice Breakers & About #play14'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game Session'
							},
							{
								time: '22:00:00',
								description: 'End of Day 1'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							"We'll begin the day with the marketplace, followed by a full day of games",
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast and Mingle'
							},
							{
								time: '10:30:00',
								description: 'Energizer'
							},
							{
								time: '11:00:00',
								description: 'Opening of Marketplace'
							},
							{
								time: '12:00:00',
								description: 'Game Session'
							},
							{
								time: '13:30:00',
								description: 'Lunch & Mingle'
							},
							{
								time: '14:30:00',
								description: 'Game Session'
							},
							{
								time: '19:00:00',
								description: 'Dinner & Mingle'
							},
							{
								time: '20:15:00',
								description: 'Retrospective'
							},
							{
								time: '22:00:00',
								description: 'End of Day 2'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							"We'll start the day with the marketplace and spend the rest of it playing games. Those with flights to catch are welcome to leave earlier.",
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast and Mingle'
							},
							{
								time: '10:30:00',
								description: 'Energizer Session'
							},
							{
								time: '11:00:00',
								description: 'Opening of Marketplace'
							},
							{
								time: '12:00:00',
								description: 'Game Session'
							},
							{
								time: '01:30:00',
								description: 'Lunch and Mingle'
							},
							{
								time: '14:30:00',
								description: 'Game Session'
							},
							{
								time: '16:30:00',
								description: 'Silent Retrospective'
							},
							{
								time: '18:30:00',
								description: 'Dinner and Mingle'
							},
							{
								time: '20:00:00',
								description: 'End of event - farewell and see you in #play14 2026'
							}
						]
					}
				],
				registration: {
					link: 'https://play14kl.peatix.com/',
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 76,
				name: 'Basel 2019',
				slug: 'basel-2019-08',
				start: 1566576000000,
				end: 1566745200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="sharethegoodnews">Share the good news</h2>\n<p>Share this on\n<a target="_blank" href="https://twitter.com/home?status=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20August%2023%20to%2025%202019%0A%0Ahttp%3A//play14.org/events/basel/2019-08%0A%0A%23playfulness%20%23seriousgames%20%23facilitation%20%23change%20%23agile%20%23fun">\n<i class=\'fa fa-twitter fa-2x fa-fw\'></i>\n</a>\n<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//play14.org/events/basel/2019-08">\n<i class=\'fa fa-facebook fa-2x fa-fw\'></i>\n</a>\n<a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//play14.org/events/basel/2019-08&title=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20August%2023%20to%2025%202019&summary=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20August%2023%20to%2025%202019%0A%0A%23playfulness%20%23seriousgames%20%23facilitation%20%23change%20%23agile%20%23fun&source=">\n<i class=\'fa fa-linkedin fa-2x fa-fw\'></i>\n</a></p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1566583200000,
				updatedAt: 1678736637899,
				defaultImageId: 'file_3292',
				imageIds: [
					'file_3292',
					'file_3289',
					'file_3287',
					'file_3291',
					'file_3290',
					'file_3288',
					'file_3286'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'http://www.palladio.net/events/play14-basel-august-23-25-2019/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 88,
				name: 'Kuala Lumpur 2023',
				slug: 'kuala-lumpur-2023-11',
				start: 1700211600000,
				end: 1700391600000,
				timezone: 'Asia/Kuala_Lumpur',
				status: 'Over',
				description: '',
				contactEmail: 'malaysia@play14.org',
				tagline: null,
				publishedAt: 1692940680517,
				updatedAt: 1700903170143,
				defaultImageId: 'file_5072',
				imageIds: ['file_5116', 'file_5117', 'file_5115'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers / Rules of the Marketplace'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together , Drinks'
							},
							{
								time: '22:00:00',
								description: 'End of welcome'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warm-ups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game Sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game Sessions'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							},
							{
								time: '21:00:00',
								description: 'Retrospective'
							},
							{
								time: '22:00:00',
								description: 'End of First day'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warm-ups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game Sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game Sessions'
							},
							{
								time: '19:30:00',
								description: 'Retrospective, Good bye & See you next time'
							},
							{
								time: '20:00:00',
								description: 'End of event - Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14kl2023.peatix.com',
					widgetCode:
						'go <a href="https://play14kl2023.peatix.com">here</a> to register! See you soon!'
				},
				sponsorships: [
					{
						category: 'Mentor Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/1Do6971EAnQ9kA4U9',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 49,
				name: 'Timisoara 2017',
				slug: 'timisoara-2017-07',
				start: 1500652800000,
				end: 1500825600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="photos">Photos</h2>\n<p><a href="https://photos.app.goo.gl/KIbWD4aIRgFGCQ8l1" target="_blank">\n  <img src="https://lh3.googleusercontent.com/bnFFclkW4-qxNn3werCnEozHhH8bY2-eIGgHJSYjad02Bl2kZ-VoV77FnN3GYm2Gkz4qL6J0A0F-K-Z-JjnKJlSgxFunJuBgiKlJdCw29kstn8ZjmLtdsBec6dcyYGFAS1YSfH9j7WaeVcU7r8zTuxZvD8VWsPez5N1QIeVLmdWoovdHsELdQxrsQTaNdimA_g7AlroHb_5yWOfs4f9rstblju9-G7ZVJaKSmur-aMIJQ5wu03YXxJHIfPIMSggtLDyXbSHD-pJKYixcuMNB7NupTbmbbxe6g959EHE39Fui7XNC2dna-_WEwMaFumP2EcTuDmJtQtzGeMinG3qYm-aEIRCiVYi0RzpQZxOjqXE0saj0eSd5wIJw83eoybKpxUgXR_Zk3_FDZ4n3_sC9VzgxiE3bvrSmPl1j6E1g-ub-ZvwIJEIcwVQmquRtem5AiLjaaArj1cnnLgRCw-W7mQxrH6QN3d_Gr_vMxds6dRTD5CbDD_yZsJy3obT900SHGxk6SeX00LqlY0JuRXyPMnhqkCSzBfnTOP9hmKOMCwn0-4Xzvg94ZRk9Xg23aybox9bBSxg4qGWcdFu68_P1IYlgFUBEK1Y-3pLx-66Zdg3sy4Rf_Ny-Kz6XAlDRZ8-__3E38tldLzqV5k3cxZM-Uo9V3vVWMs7aRZSRmZPMNrq2Og=w1835-h1032-no">\n</a></p>\n<h2 id="sketchnotesbycdriccpontet">Sketchnotes by Cédric (@cpontet)</h2>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/01_58f4bf23c9.jpg" alt="Sketchnote 1" /></p>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/02_0de24f2e44.jpg" alt="Sketchnote 2" /></p>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/03_70e5fc2b28.jpg" alt="Sketchnote 3" /></p>\n<h2 id="howtogetthere">How to get there</h2>\n<p>Reach Timisoara city:</p>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane: Timisoara International Airport is well connected with many of the major cities around Europe and buses/taxis can bring you directly to the city center (15 min)\nCheck the <a href="http://aerotim.ro/">airport website</a></li>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car:</li>\n<li>3 hours drive <a href="https://www.google.lu/maps/dir/Budapest,+Hungary/Nokia+(ex-Alcatel+Lucent),+Bulevardul+Republicii,+Timi%C8%99oara,+Timi%C8%99+County,+Romania/@46.6228373,18.9450191,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4741c334d1d4cfc9:0x400c4290c1e1160!2m2!1d19.040235!2d47.497912!1m5!1m1!1s0x47455d7b2821e4ad:0x9eeb89884ab984db!2m2!1d21.21106!2d45.750903!3e0?hl=en">from Budapest</a></li>\n<li>2:30 hours drive <a href="https://www.google.lu/maps/dir/Belgrade,+Serbia/Nokia+(ex-Alcatel+Lucent),+Bulevardul+Republicii,+Timi%C8%99oara,+Timi%C8%99+County,+Romania/@45.268278,20.1049334,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x475a7aa3d7b53fbd:0x1db8645cf2177ee4!2m2!1d20.4489216!2d44.786568!1m5!1m1!1s0x47455d7b2821e4ad:0x9eeb89884ab984db!2m2!1d21.21106!2d45.750903?hl=en">from Belgrade</a> (no High Speed)</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay</h2>\n<p>Here are some hotels or places to stay close to the venue:</p>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\n<a href="http://iosefinresidence.ro/">Iosefin Residence Timisoara</a></li>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\n<a href="http://hoteltimisoara.ro/ro/">Casa Palace Hotel Timisoara</a> is located in the city center and just around the corner.\nYou can book through <a href="http://www.booking.com">Booking</a> or calling them directly.</li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Timi%C8%99oara--Timi%C8%99-County--Romania?guests=1&adults=1&children=0&infants=0&place_id=ChIJp7UPy31nRUcRSWeTc2Svf1M&checkin=07%2F14%2F2017&source=bb&page=1&allow_override%5B%5D=&checkout=07%2F16%2F2017&ss_id=u7iwpyhm&s_tag=-4PtH6fC">some rooms</a></li>\n</ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1500660000000,
				updatedAt: 1678736616200,
				defaultImageId: 'file_3182',
				imageIds: [
					'file_3188',
					'file_3182',
					'file_3184',
					'file_3185',
					'file_3183',
					'file_3186',
					'file_3190'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'Friday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'Sunday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":32201422321}'
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/KIbWD4aIRgFGCQ8l1',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 70,
				name: 'Sydney 2020',
				slug: 'sydney-2020-10',
				start: 1604073600000,
				end: 1604246400000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="fridayafternoon">Friday afternoon</h2>\n<p>\n  On Friday afternoon, we will start at 5:30PM at <strong>DiUS - Level 2/50 York St, Sydney NSW 2000</strong> with ice breakers and explanations about &#x23;play14 rhythm and the marketplace.<br>\n  The rest of the event on Saturday and Sunday will be held at <strong>The Podium Building</strong>\n</p>\n<div class=\'row\'>\n  <div class=\'two spacing\'></div>\n  <!-- Images -->\n  <div class=\'large-5 columns\'>\n    <div class=\'mod modBoxedSlider\'>\n      <div class=\'slides\'>\n          <div class="slide">\n            <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Di_US_943996f577.jpg" alt="" style="display:block; max-height:500px; width: auto;">\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\'large-3 columns\'>\n    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13251.104384857585!2d151.2062828!3d-33.8696608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7f6d660b480fb39!2sDiUS!5e0!3m2!1sen!2slu!4v1576777675215!5m2!1sen!2slu" width="350" height="370" frameborder="0" style="border:0" allowfullscreen></iframe>\n  </div>\n  <div class=\'large-3 columns\'>\n    <ul class=\'info\'>\n      <li>\n        <h3>\n          <a href="https://www.dius.com.au/" target="_blank">\n            DiUS\n          </a>\n          <br>\n          Level 2\n        </h3>\n      </li>\n        <li>\n          <div class=\'spacing\'></div>\n          <strong>Address</strong>\n        </li>\n        <li>\n          50 York St, Sydney NSW 2000\n        </li>\n        <li>\n          <div class=\'spacing\'></div>\n          <strong>Start</strong>\n        </li>\n        <li>\n          Friday, April 17 2020\n        </li>\n        <li>\n          17:30\n        </li>\n        <li>\n          <div class=\'spacing\'></div>\n          <strong>Finish</strong>\n        </li>\n        <li>\n          Friday, April 17 2020\n        </li>\n        <li>\n          21:30\n        </li>\n    </ul>\n  </div>\n</div>',
				contactEmail: 'sydney@play14.org',
				tagline: null,
				publishedAt: 1604077200000,
				updatedAt: 1678736645850,
				defaultImageId: 'file_3367',
				imageIds: ['file_3367', 'file_3370', 'file_3369', 'file_3366', 'file_3368'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will get to know each other over a bit of food and drinks, and a few games.',
						timeslots: [
							{
								time: '17:30:00',
								description: 'Get together'
							},
							{
								time: '21:30:00',
								description: 'End of the first evening'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '22:30:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game sessions'
							},
							{
								time: '17:30:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'End of day'
							}
						]
					},
					{
						day: 'Sunday',
						description: 'We will also start with the marketplace for a day of games.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '22:30:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '16:30:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://www.trybooking.com/book/event?embed&eid=584743',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 64,
				name: 'Milano 2018',
				slug: 'milano-2018-06',
				start: 1529596800000,
				end: 1529766000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<p><strong>Check our site </strong><a href="http://www.play14.it/"><strong>in Italian</strong></a></p><h2>Agile Relaoded\'s carpool karaoke</h2><h2>Description</h2><p>If you are interested in having more detail, you can find a reportage (in italian) of the <a href="http://www.mokabyte.it/2014/04/play14/">2014 edition in Luxembourg</a> and of the <a href="http://www.mokabyte.it/2015/04/play14-2015/">2015 edition in Luxembourg</a>.<br>You can also find a <a href="http://www.mokabyte.it/2016/05/play14milano/">reportage</a> of the 2016 edition in Milano.</p><p>Check out the summary video of <a href="/events/milano/2016-05">#play14 Milano 2016</a> by <a href="/players/christina-ohanian">Christina Ohanian</a></p><h2>Friends of #play14</h2><p>#play14 is an unconference: the programme will be defined by the participants who are free to sumbmit contents and to decide the schedule. While remaining faithful to the unconference format, again for the Milan 2017 edition we will be emphasising the <strong>“cultural contamination”</strong> concept. Therefore, we have invited people with different backgrounds and skills, who share a strong interest in gaming as a business tool. We created the <strong>#play14 Friends programme</strong> in order to involve trainers, coaches, agile coaches, scrum masters and all kinds of agilists, psychotherapists, UX experts, improvisational theatre actors, musician and so on.</p><ul><li><a href="#">All</a></li><li><a href="#">{{yearGroup.name}}</a></li><li><a href="{{friend.url}}"><img src="{{friend.avatar | default:\'/images/players/default.png\'}}" alt="">&nbsp;</a><!--h3>{{friend.name}}</h3--></li></ul><h2>How to get there ?</h2><ul><li>Metro (subway) Line 1 stop at <a href="https://www.google.it/maps/place/Sesto+Marelli/@45.5283826,9.2222941,16z/data=!4m2!3m1!1s0x4786c767a3e194b1:0xfe7e468eccd173f5?shorturl=1">Sesto Marelli station</a> (500m from the venue).</li></ul><h2>where to stay ?</h2><ul><li><a href="https://www.google.it/maps/place/Hotel+Bert/@45.5290543,9.2232798,16z/data=!4m5!3m4!1s0x0000000000000000:0xca6b6b056d322025!8m2!3d45.5286152!4d9.2280774">Hotel Bert</a></li><li><a href="https://www.google.it/maps/place/Hotel+St+John/@45.5290543,9.2232798,16z/data=!4m5!3m4!1s0x0000000000000000:0x53b0a3f44d201cbe!8m2!3d45.529835!4d9.2288922">Hotel St. John</a></li><li><a href="https://www.google.it/maps/place/B%26B+Hotel+Milano+Sesto/@45.5289732,9.2238135,16z/data=!4m5!3m4!1s0x0000000000000000:0x6d779e1a4fe1874c!8m2!3d45.5269907!4d9.2294967">B&amp;B Hotel Milano - Sesto</a></li></ul>',
				contactEmail: 'milano@play14.org',
				tagline: null,
				publishedAt: 1529604000000,
				updatedAt: 1683632095752,
				defaultImageId: 'file_4978',
				imageIds: [
					'file_4972',
					'file_4973',
					'file_4974',
					'file_4975',
					'file_4976',
					'file_4977',
					'file_4978'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'Thursday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://tickets.agilereloaded.it/event/play14-2018/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Our global sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 94,
				name: 'Curia 2024',
				slug: 'curia-2024-06',
				start: 1719496800000,
				end: 1719667800000,
				timezone: 'Europe/Lisbon',
				status: 'Over',
				description:
					'<p>#play14 is a global community of coaches, facilitators, educators, consultants, researchers, workers and artists gathering during two and a half day to unleash creativity with serious games. Cause we realy share the common idea that playing is the best way to learn. :)</p><h1>Who is this event for?</h1><ul><li>For those who are passionate about learning</li><li>For those attracted by the latest serious gaming techniques</li><li>For those who value learning through experimenting and are open to new interactions and communities</li><li>For those who value the practical abilities of facilitation and who are looking for new ideas and methods to enhance these competencies</li><li>For those who want to make a change, get rid of the formal/protocolar environment and try one where creativity and game appreciation are valued</li></ul><h1>What will you learn?</h1><ul><li>&nbsp;Facilitation techniques</li><li>How to innovate</li><li>Change management</li><li>Organizational happiness</li><li>&nbsp;... and much more</li></ul><h1>What would be your financial contribution?</h1><p><br>The participation fee is between 299-369 EUR/person(VAT including).</p><p>Note:</p><ul><li>This fee covers the cost of the event with all meals included, which are listed in the agenda. This year we include again the accommodation . This cost doesn\'t include transport.</li><li>#play14 is a non-profit event. All earnings from ticket sales will be used to sustain the event.</li></ul><h1>How can you register?</h1><p>To reserve your place in the event you’ll need to register first (Book Now) and fill in the registration form until the 16st of June 2024. Please notice that this year\'s edition has a limit of 43 slots, so make sure you book before the event is full!</p><p>If you have any practical questions regarding this event, please send us an email us porto@play14.org</p><h1>How can I go?&nbsp;</h1><p>See the directions here: <a target="_blank" rel="noopener noreferrer" href="https://www.termasdacuria.com/en/hotel-directions.html">https://www.termasdacuria.com/en/hotel-directions.html</a>&nbsp;</p>',
				contactEmail: 'porto@play14.org',
				tagline: null,
				publishedAt: 1710746813645,
				updatedAt: 1748844641379,
				defaultImageId: 'file_4917',
				imageIds: [
					'file_4916',
					'file_4915',
					'file_4914',
					'file_4911',
					'file_4912',
					'file_4913',
					'file_4917'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:30:00',
								description: 'Dinner'
							},
							{
								time: '22:00:00',
								description: 'Bar party'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Game'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious Games'
							},
							{
								time: '18:30:00',
								description: 'Retrospective'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Pizza'
							},
							{
								time: '22:00:00',
								description: 'Bar'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warmups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Game'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious Game'
							},
							{
								time: '16:00:00',
								description: 'Retrospective '
							},
							{
								time: '17:00:00',
								description: 'Time to say goodbye'
							}
						]
					}
				],
				registration: {
					link: 'https://www.weezevent.com/widget_billeterie.php?id_evenement=1094575&widget_key=E1094575&locale=en_GB&color_primary=00AE&code=3695&width_auto=1',
					widgetCode:
						'<a title="Online ticketing"\n   href="https://weezevent.com/?c=sys_widget"\n   class="weezevent-widget-integration"\n   data-src="https://widget.weezevent.com/ticket/E1094575/?code=3695&locale=en-GB&width_auto=1&color_primary=00AEEF"\n   data-width="650"\n   data-height="600"\n   data-id="1094575"\n   data-resize="1"\n   data-width_auto="1"\n   data-noscroll="0"\n   data-use-container="yes"\n   data-type="neo"\n   target="_blank">Tickets</a>\n'
				},
				sponsorships: [
					{
						category: 'Host Support',
						sponsorIds: []
					},
					{
						category: 'Time',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 32,
				name: 'Utrecht 2021',
				slug: 'utrecht-2021-11',
				start: 1636653600000,
				end: 1636819200000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1636657200000,
				updatedAt: 1677370779108,
				defaultImageId: 'file_3403',
				imageIds: ['file_3403'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice time all together.',
						timeslots: [
							{
								time: '19:00:00',
								description: 'Ice breakers & warmups'
							},
							{
								time: '20:00:00',
								description: 'Drinks / Snacks / Mingle'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":118441659191}'
				},
				sponsorships: [],
				media: [
					{
						url: 'https://photos.app.goo.gl/BJyrLa6VjwRXN2ct8',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 100,
				name: 'Bangalore Nov 2024',
				slug: 'bangalore-nov-2024-11',
				start: 1731067200000,
				end: 1731240000000,
				timezone: 'Asia/Kolkata',
				status: 'Over',
				description:
					'<p>#play14 is a global community of coaches, facilitators, educators, consultants, researchers, workers and artists gathering during two and a half day to unleash creativity with serious games. Cause we realy share the common idea that playing is the best way to learn.</p><h1>Who is this event for?</h1><ul><li>For those who are passionate about learning</li><li>For those attracted by the latest serious gaming techniques</li><li>For those who value learning through experimenting and are open to new interactions and communities</li><li>For those who value the practical abilities of facilitation and who are looking for new ideas and methods to enhance these competencies</li><li>For those who want to make a change, get rid of the formal/protocolar environment and try one where creativity and game appreciation are valued</li></ul><h1>What will you learn?</h1><ul><li>Facilitation techniques</li><li>How to innovate</li><li>Change management</li><li>Organizational happiness</li><li>... and much more</li></ul><h1>What would be your financial contribution?</h1><p><br>The participation fee is between <strong>10,999-14,999/person + GST + payment gateway</strong> (including materials, food and fun).</p><p>Note:</p><ul><li>This fee covers the cost of the event with all meals included, which are listed in the agenda. &nbsp;This cost doesn\'t include transport and accommodation.</li><li>#play14 is a non-profit event. All earnings from ticket sales will be used to sustain the event.</li></ul><h1>How can you register?</h1><p>To reserve your place in the event you’ll need to register first (Book Now) and fill in the registration form until the 1st Nov 2024. Please notice that this year\'s edition has a limit of 40 slots, so make sure you book before the event is full!</p><p><br>If you have any practical questions regarding this event, please send us an email us <a href="mailto:india@play14.org">india@play14.org</a></p><p>&nbsp;</p><p>&nbsp;</p>',
				contactEmail: 'india@play14.org',
				tagline: null,
				publishedAt: 1723707812204,
				updatedAt: 1731413206297,
				defaultImageId: 'file_5162',
				imageIds: ['file_5162'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '17:30:00',
								description: 'Welcome'
							},
							{
								time: '18:00:00',
								description: 'Starting - IceBreakers'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							},
							{
								time: '20:00:00',
								description: 'Games Together'
							},
							{
								time: '20:30:00',
								description: 'Rules of the marketplace '
							},
							{
								time: '21:00:00',
								description: 'End of welcome Evening '
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warmups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game sessions'
							},
							{
								time: '19:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:30:00',
								description: 'Dinner'
							},
							{
								time: '22:00:00',
								description: 'End of first day'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warmups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game session'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game session'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Final retrospective event'
							},
							{
								time: '18:30:00',
								description: 'Evening team with snacks and networking'
							}
						]
					}
				],
				registration: {
					link: 'https://www.townscript.com/e/play14-bangalore-2nd-edition-134213',
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 71,
				name: 'Berlin 2021',
				slug: 'berlin-2021-06',
				start: 1622822400000,
				end: 1622991600000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="watchourvideo">Watch our video</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/Qx5jkvcm93c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h3 id="thiseventiscarbonneutral">This event is Carbon Neutral</h3>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/climate_neutral_1fc4debb1d.png" alt="carbon neutral" width="300"/></p>',
				contactEmail: 'germany@play14.org',
				tagline: null,
				publishedAt: 1622829600000,
				updatedAt: 1678736647637,
				defaultImageId: 'file_3394',
				imageIds: ['file_3394'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14-berlin-2021.eventbrite.de/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 41,
				name: 'Iasi 2022',
				slug: 'iasi-2022-09',
				start: 1662739200000,
				end: 1662908400000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Fee &amp; Registration</h2><p>Participation fee is 155 EUR/person.</p><p>Note: This fee covers the cost of the event with some meals included, where they are listed in the agenda. This cost doesn\'t include transport and accomodation.</p><p>To reserve your place in the event you’ll need to register first and fill in the registration form till 30th of July. We’ll review your registration and come back to you in about 48 hours with the payment details and next steps.</p><p>If you have any practical questions regarding this event, please send us an email to <a href="mailto:{{page.contact}}">{{page.contact}}</a></p><p><a href="{{page.registration.url}}">Register</a></p>',
				contactEmail: 'iasi@play14.org',
				tagline: null,
				publishedAt: 1662746400000,
				updatedAt: 1683629621202,
				defaultImageId: 'file_4939',
				imageIds: ['file_4944', 'file_4943', 'file_4942', 'file_4941', 'file_4940'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening, to get to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Meeting at Starting point'
							},
							{
								time: '18:30:00',
								description: 'Icebreakers'
							},
							{
								time: '19:30:00',
								description: 'Sample of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Go for Dinner and Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Intro of'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Go out for dinner'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace and add the new ideas on the board for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:15:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Cleanup & Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://forms.gle/bQhTVGeAE1vVGqEK8',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/cBWi43KbW37s2xWp6',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PLtkNf4ui682iXQMC78ezwllPs2KhYdVBk',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 95,
				name: 'Madrid 2024',
				slug: 'madrid-2024-06',
				start: 1718373600000,
				end: 1718533800000,
				timezone: 'Europe/Madrid',
				status: 'Over',
				description:
					"<p><strong>What we're about</strong></p><p><strong>#Play14</strong> is an international gathering of like-minded people who share the common idea that playing is the best way to learn and understand.</p><p>For two and a half days, people with very different profiles and experiences are invited to share serious games and fun activities, experiences and advice, knowledge and insights, laughter and smiles. We propose a unique experience for:<br>• develop your facilitation skills<br>• increase your change management capacity in your organization,<br>• encourage your creativity<br>• and improve your ability to innovate.</p><p><strong>#Play14</strong> is an unconference, where all attendees are also contributors. All you need to do is show up, and you will be given the opportunity to propose some games, or play the games proposed by others.</p>",
				contactEmail: 'play14madrid@gmail.com',
				tagline: null,
				publishedAt: 1712382069478,
				updatedAt: 1718575200207,
				defaultImageId: 'file_5182',
				imageIds: ['file_5179'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Friday Warm welcome & mingle',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Official welcome + Ice breakers'
							},
							{
								time: '20:30:00',
								description: 'Tapas Dinner'
							},
							{
								time: '22:30:00',
								description: 'Closing the Day'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Lunch'
							},
							{
								time: '15:00:00',
								description: 'Sessions'
							},
							{
								time: '17:30:00',
								description: 'Retrospective '
							},
							{
								time: '18:00:00',
								description: 'Preparation for Dinner '
							},
							{
								time: '19:30:00',
								description: 'Dinner'
							},
							{
								time: '21:30:00',
								description: 'Games'
							},
							{
								time: '23:45:00',
								description: 'End of evening'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Breakfast + Warm-up'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Retrospective'
							},
							{
								time: '14:30:00',
								description: 'Closing the event'
							}
						]
					}
				],
				registration: {
					link: 'https://www.weezevent.com/widget_billeterie.php?id_evenement=77150&widget_key=E1123151&locale=es_ES&color_primary=ff5200&code=76369&width_auto=1',
					widgetCode:
						'<a title="Logiciel billetterie en ligne"\n   href="https://weezevent.com/?c=sys_widget"\n   class="weezevent-widget-integration"\n   data-src="https://widget.weezevent.com/ticket/E1123151/?code=77150&locale=es-ES&width_auto=1&color_primary=00AEEF"\n   data-width="650"\n   data-height="600"\n   data-id="1123151"\n   data-resize="1"\n   data-width_auto="1"\n   data-noscroll="0"\n   data-use-container="yes"\n   data-type="neo"\n   target="_blank">Billetterie Weezevent</a>\n<script type="text/javascript" src="https://widget.weezevent.com/weez.js"></script>'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 89,
				name: 'Sydney 2024',
				slug: 'sydney-2024-02',
				start: 1708056000000,
				end: 1708221600000,
				timezone: 'Australia/Sydney',
				status: 'Over',
				description: '',
				contactEmail: 'hanna@theworkshopper.com',
				tagline: null,
				publishedAt: 1693974531588,
				updatedAt: 1708297200221,
				defaultImageId: 'file_3231',
				imageIds: ['file_3367', 'file_3370', 'file_3369', 'file_3366', 'file_3368'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will get to know each other over a bit of food and drinks, and a few games.',
						timeslots: [
							{
								time: '16:00:00',
								description: 'Get together'
							},
							{
								time: '19:00:00',
								description: 'End of the first evening'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Play sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Play sessions'
							},
							{
								time: '18:00:00',
								description: 'End of day'
							}
						]
					},
					{
						day: 'Sunday',
						description: 'We will also start with the marketplace for a day of games.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace & play sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Event over '
							}
						]
					}
				],
				registration: {
					link: 'https://www.trybooking.com/CLHHK',
					widgetCode:
						'<script async defer src="https://www.trybooking.com/widget.js"></script>\n\n<div class="tryb-widget" data-type="buttonWidget" data-eid="1112212" data-showlogo="False" data-text="Book"></div>'
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 74,
				name: 'Berlin 2023',
				slug: 'berlin-2023-06',
				start: 1685714400000,
				end: 1685883600000,
				timezone: 'Europe/Berlin',
				status: 'Over',
				description: '',
				contactEmail: 'berlin@play14.org',
				tagline: null,
				publishedAt: 1685728800000,
				updatedAt: 1719993472847,
				defaultImageId: 'file_3442',
				imageIds: [
					'file_4873',
					'file_4874',
					'file_4875',
					'file_4876',
					'file_4877',
					'file_4878',
					'file_4879',
					'file_4860',
					'file_4861',
					'file_4862',
					'file_4863',
					'file_4864',
					'file_4865',
					'file_4866',
					'file_4867',
					'file_4868',
					'file_4869',
					'file_4870',
					'file_4871',
					'file_4872'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Setting up & getting to know each other'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza & Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '15:00:00',
								description: 'Retrospective'
							},
							{
								time: '16:00:00',
								description: 'Clean up time'
							},
							{
								time: '16:30:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14-ber2023.eventbrite.de/?aff=play14',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 44,
				name: 'Viseu 2022',
				slug: 'viseu-2022-06',
				start: 1656604800000,
				end: 1656774000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Registration</h2><p>&nbsp;</p><p><a href="https://weezevent.com/?c=sys_widget">Ticketing Weezevent</a></p>',
				contactEmail: 'porto@play14.org',
				tagline: null,
				publishedAt: 1656612000000,
				updatedAt: 1705582450647,
				defaultImageId: 'file_3416',
				imageIds: ['file_3412', 'file_3422', 'file_3416', 'file_3432', 'file_3417', 'file_3424'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":608129,"code":42796}'
				},
				sponsorships: [
					{
						category: 'Host support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 67,
				name: 'London 2019',
				slug: 'london-2019-09',
				start: 1569601800000,
				end: 1569769200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/play14_london_2019_c92984fc52.png" alt="play14-london-2019.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_play14_london_2019_c92984fc52.png 245w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_play14_london_2019_c92984fc52.png 500w,https://play14-cdn.azureedge.net/strapi-uploads/assets/medium_play14_london_2019_c92984fc52.png 750w,https://play14-cdn.azureedge.net/strapi-uploads/assets/large_play14_london_2019_c92984fc52.png 1000w," sizes="100vw"></p>',
				contactEmail: 'london@play14.org',
				tagline: null,
				publishedAt: 1569609000000,
				updatedAt: 1683630580069,
				defaultImageId: 'file_4963',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://ti.to/play14/play14-london-2019',
					widgetCode: null
				},
				sponsorships: [],
				media: [
					{
						url: 'https://photos.app.goo.gl/bJUqa9SCNk5XZ7FB6',
						type: 'Photos'
					},
					{
						url: 'https://photos.app.goo.gl/bJUqa9SCNk5XZ7FB6',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 58,
				name: 'London 2017',
				slug: 'london-2017-09',
				start: 1505493000000,
				end: 1505660400000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Photos</h2><p><a href="https://photos.app.goo.gl/uwcaPqykk9ne7DZt1"><img src="https://lh3.googleusercontent.com/-YML87Sl8tBRKJGBk6FzZN28fo1bViURo33B3_hwpF4osI2EwkOAOLlNJONip5DKbTe3dY4JKWU_JQJ4Rk9XEDTSO7BOjqHZzCQcSGBzKEEbisaAFJHLyfxZO7o1zyZ2LkiGqFvIupzXBLtqPNoG47L0nNOsU5QI3YIxrhVGu-Ew4K-RfqW1Fpl75LNPKwG7Lx5_uggrdBg3-jk5JMOmW_gp-0iVkOv6j0SsL25w3xPijSxv7bItRdL1OXgpsFIq7XNOJHBnTwPne-sIuq5XghPjvw-13lOJSfyIIg0VCmXkcP0IAOd3iud2i1Dc501s-Dxs6-1KsFn8dXeTEVaJGFkw3TqcCrfHGNPU8HWHlaZTDhQCS1sXhZen5hnfHWoV9qh9lR6LtInFQJm_C72sdFUT092o97ZdAKWFtUyYbDiKy-AnkuzEasb8S5A24nfV9FEmYVsBnFMu-Dmtgib2HoVB9uNMRvUirWwZAV7k4b5yc5oJ9rfQzontp3oiQ0ND3eL8UwUE3qnSQzTIH_f6UlyVKWoR342uqvG9z7ZV0kkHo--vEhKGV1i7PcP6cN7fdJqasriFvmJnobZLYqgB6hZfimu1c8wBgMh-eysKwD_qRh4ZhPcx6dEh0pw7fqu3_DHpOdOc5Q8tx6za0LBR8ym3vG0YW5GmMNY=w1835-h1032-no"></a></p><p><a href="https://photos.app.goo.gl/uwcaPqykk9ne7DZt1"><img src="https://lh3.googleusercontent.com/DXPejovkrDoO_mw4KNFlqlm_hZBD4EIMYXJARtAt4nNRZ2GFX7L3EhjxS1EwctEF6XYDCjXk3vyPn0xjFE9u4riIG3SmWFAh-L8NgBhbr-EbfybFWbMBFshoJQKV1qR8rRLF55GKCMxOKK8D8hKonxBrIjAuFnptysmUT49BAgJgvlQWK7sdr0pNf8FhR2IXhDtxJqgM5wdoqLvd1nBZ8ekZBfsP07388dIVcZXWK7PjkLqDHKCWH1Zzfw_9JdWYcMNsUJilCXmBIFXIBlUrrQbtQTV-CSx9aYsEhCUipBCxJHEoM6UdWK6preGNLg434jmk9uIElfKuecLanY0lWRkkboEAN7MUUtmLaSYRzK3rw9H3MqIhcvcKRaK_gLWCEs1z_LKLuoGGeN9ssjyLWwBxjXXOVCbmdOLBdnDnYjx52hKuTQzoXlVFIaEs93rTbL-QfF15xqmUFcfB9exTpdC66oRYt_QcExSxyq7yfnrYUFgsc7UtTEztcc-uDJHdBepqVkjq2ZxHKFr7bmeu0q0yymoGhgz7M0dolWFaJnq2XrpPROkm3Irnx4kGoiY1OlZMAg9ues4p6Yv5__IooShP8hKLP848LmZ871obdoXltRxtD_ShrRjQRHXsEvYmVPDTes3FIOV44MqE5kwYjk4F3hkcn0WIJ4wy=w1835-h1032-no"></a></p><p><a href="https://photos.app.goo.gl/uwcaPqykk9ne7DZt1"><img src="https://lh3.googleusercontent.com/OZbSVIsdbs4YKVuACy5xg8gBVgSoYoAoNC760wu_ZIA9-64i922HxNuBzi-imbuy6j98B0M05mgBfTSmoRXW97QMnpsFVQX4D-HpHmJOI-eFwOu08l0j5Xdb2E6wqN7gekUoIlKUDUGJEMN6hD4wIeTVLqrpC7x2vcIK2QNqhBmPNMpKgF8q0qjq4SYvhySeTg7tu3f3z7iBqtBUAjncNEqh3M41wj4CWbtEo3xgLZ2Km_oM9YcFLaEdUTEqqfXnQT51LvOABl-M63CXfKhUUCy1ZRC1r9QuIjaH8I1JLMBu73eJkqS3dJ8AlozsfOUKgA9QpyWCSLcSyzOnctsLsx-_IKuxeUvalOCzb68kOmdg9SChSHiPSbVUmvEukk0y_75vY88MJ_ipbBzN43vnhaLz27nfFx6LNpUU_yc3hapimwO9FWI2qawzw8VZMq9Rpgx1f9_W0jkxWVECAHtOUpv5bkPHNbf4b5L8dwKaJFjbMF8s7v-S_N7PGCdVLpaeYwtI0CwgVyFUHzoZfPCKQyr1_JtzytdkIgUSiY0-9SOahSOlB7mr_THWNBNkNmi3d-WxEPtep-kfNd2qUEblejmgrO2VXka4OMa9o2huA4pGT1FPudmUy0rY1qKfT-4-iXKkT4Sgu5CW3swceXNxM1aO7XaTaU0RhvA=w1835-h1032-no"></a></p><h2>Video teaser</h2><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/infographic_fe49e2e3a5.png" alt="London 2017"></p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1505500200000,
				updatedAt: 1683632393206,
				defaultImageId: 'file_4963',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":35652364181}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/uwcaPqykk9ne7DZt1',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV2oBYOWhCyfSB-0r0rAPAIU',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 34,
				name: 'Luxembourg 2022',
				slug: 'luxembourg-2022-05',
				start: 1651766400000,
				end: 1651935600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="registration">Registration</h2>\n<p><a id="register"></a></p>\n<p><a title="Registration"\n   href="https://weezevent.com/?c=sys_widget"\n   class="weezevent-widget-integration"\n   data-src="https://widget.weezevent.com/ticket/E812051/?code=76352&locale=en-GB&width_auto=1&color_primary=ff5200"\n   data-width="650"\n   data-height="600"\n   data-id="812051"\n   data-resize="1"\n   data-width_auto="1"\n   data-noscroll="0"\n   data-use-container="yes"\n   data-type="neo"\n   target="_blank">Registration Weezevent</a></p>\n<script type="text/javascript" src="https://widget.weezevent.com/weez.js"></script>\n<h2 id="healthsafety">Health &amp; Safety</h2>\n<p>The current regulation in Luxembourg regarding COVID-19 authorizes to organize an event without restrictions. </p>\n<p>Therefore, there will be no COVID-Check, and wearing the mask will not be required.</p>\n<p>Nevertheless, in order to limit the risks associated with the spread of the virus and to make sure everyone is safe, it is essential to continue to respect the protective measures. Hence, we will ask everyone to pay attention to social distancing and will provide gel and soap to wash hands.</p>\n<h2 id="howtogetthere">How to get there ?</h2>\n<h3 id="reachluxembourgcity">Reach Luxembourg city</h3>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane : <a href="https://www.lux-airport.lu/">Luxembourg Airport</a> is well connected and <a href="http://www.vdl.lu/autobus_ligne16.html">buses</a> can bring you directly to Train Station (15 min)</li>\n<li><i class=\'fa fa-train fa-2x fa-fw\'></i>\nBy <a href="http://www.cfl.lu/espaces/voyageurs/en/billets-et-abonnements/billets-internationaux">international train</a> : It\'s easy, 2 hours from Paris, 2:30-to 3:00 from Brussels (no High Speed), 50 min from Trier</li>\n</ul>\n<h3 id="gettoeschbelval">Get to Esch/Belval</h3>\n<ul>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car :</li>\n<li>You can come by car from Luxembourg City by <a href="https://www.google.lu/maps/dir/\'\'/TECHNOPORT+SA+%E2%80%93+BELVAL,+Avenue+des+Hauts-Fourneaux,+Esch-sur-Alzette/@49.5515498,5.9620006,12z/data=!3m1!4b1!4m12!4m11!1m3!2m2!1d6.1172444!2d49.5998931!1m5!1m1!1s0x47eacad49ef04f7d:0x8599a1646a7921b9!2m2!1d5.9491669!2d49.5024377!3e0">taking the A4</a>.</li>\n<li>You can also share a car through <a href="https://www.covievent.org/covoiturage/play14/f6ce8e69c30b951ecb53dce1465f9846">Covievent</a>.</li>\n<li><i class=\'fa fa-taxi fa-2x fa-fw\'></i>\nBy taxi : You can take a taxi from the airport, but it is not going to be cheap. You need to count between 60 € and 100 €.</li>\n<li><a href="https://www.taxi2airport.com">Taxi2airport</a></li>\n<li><a href="https://kiwitaxi.com/Luxembourg/to/Esch-sur-Alzette">Kiwi</a></li>\n<li><a href="http://www.colux.lu/">Colux</a></li>\n<li><a href="https://www.webtaxi.lu/">Webtaxi</a></li>\n<li><i class=\'fa fa-subway fa-2x fa-fw\'></i>\nBy local train : From Luxembourg city Central Station take the train to Esch/Alzette, <a href="http://www.cfl.lu/espaces/voyageurs/en/gares-et-services/nos-gares/belval-universit%C3%A9">Belval-Université</a>, Gare</li>\n<li><i class=\'fa fa-map fa-2x fa-fw\'></i>\nDownload <a href="http://www.technoport.lu/online/www/function/accessmap/54/contentContainer/236/4365/ENG/AccessMapEsch2016_visitors.pdf">this map</a> to find a parking and reach the venue by foot.</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay ?</h2>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\nHotel : <strong>IBIS Hotel</strong> is just around the corner.\nHere is a <a href="http://www.ibis.com/gb/hotel-7071-ibis-esch-belval/index.shtml">link to their website</a></li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Belval--Esch~sur~Alzette--Luxembourg?guests=1&adults=1&children=0&infants=0&place_id=ChIJpygLQys1lUcRXDbg1jsK758&checkin=03%2F23%2F2017&checkout=03%2F25%2F2017&source=bb&page=1&allow_override%5B%5D=&ne_lat=49.52023719137509&ne_lng=5.986106374065116&sw_lat=49.477525649778855&sw_lng=5.923621632854179&zoom=14&search_by_map=true&ss_id=r4n1bpzj&s_tag=pxTV1cYO">some rooms</a></li>\n</ul>\n<div class=\'two spacing\'></div>',
				contactEmail: 'luxembourg@play14.org',
				tagline: null,
				publishedAt: 1651773600000,
				updatedAt: 1678736647472,
				defaultImageId: 'file_3410',
				imageIds: ['file_3410', 'file_3406', 'file_3408', 'file_3409', 'file_3407'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":812051,"code":76352}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/NcaTbLHAVeJa5uxZ6',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 82,
				name: 'Bologna 2023',
				slug: 'bologna-2023-06',
				start: 1686232800000,
				end: 1686402000000,
				timezone: 'Europe/Rome',
				status: 'Over',
				description:
					"<p>After enjoying increasing success over the last 5 events, we are ready to pick up and run with the sixth #play14 Italy. This year we want it to be an <strong>international</strong> event, held both <strong>in Italian and English</strong>. Let's make it happen!</p><p><strong>Check our official website </strong><a href=\"http://www.play14.it/\"><strong>play14.it</strong></a><strong> </strong>(English version)</p><p>&nbsp;</p><h2>Tickets include</h2><ul><li>Access to all the activities of the event, starting from Thursday 8th of June at 5.00 pm, until Saturday 10th of June 4.00 pm</li><li>A Welcome happy hour on Thursday evening</li><li>Food and coffee on Friday and Saturday</li><li>Parking at DumBO Space</li></ul><h2>Tickets don't include</h2><ul><li>Accommodation</li><li>Transport&nbsp;</li><li>The dinner on Friday 9th of June&nbsp;&nbsp;<br>(DumBO Space will offer a variety of alternatives, with food and music)</li></ul><p>&nbsp;</p><p>#play14 is completely <strong>no-profit</strong>. We want to give everyone the chance to join. However, the organization requires a non-trivial logistical and economic effort. This is why we have set up different price ranges, to stimulate a quick tickets' purchase and ensure better expenses management.&nbsp;</p>",
				contactEmail: 'info@agilereloaded.it',
				tagline: null,
				publishedAt: 1686243600000,
				updatedAt: 1687783662650,
				defaultImageId: 'file_4811',
				imageIds: ['file_3448', 'file_3451', 'file_3449', 'file_3450'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will meet on Thursday afternoon. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Opening meeting'
							},
							{
								time: '17:30:00',
								description: 'Icebreakers'
							},
							{
								time: '19:00:00',
								description: 'Welcome Happy Hour offered by Agile Reloaded'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will meet on Friday morning for the marketplace, and then we will play serious games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Marketplace and start of serious games'
							},
							{
								time: '11:00:00',
								description: 'Coffe break offered by Agile Reloaded '
							},
							{
								time: '12:30:00',
								description: 'Lunch offered by Agile Reloaded '
							},
							{
								time: '19:00:00',
								description: 'End of activities '
							},
							{
								time: '20:00:00',
								description:
									'Free Dinner. DumBO Space will offer a variety of alternatives, with food and music.'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will meet on Saturday morning for the marketplace, for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Marketplace and start of serious games'
							},
							{
								time: '11:00:00',
								description: 'Coffe break offered by Agile Reloaded'
							},
							{
								time: '12:30:00',
								description: 'Lunch offered by Agile Reloaded'
							},
							{
								time: '16:00:00',
								description: 'End of activities and greetings'
							}
						]
					}
				],
				registration: {
					link: 'https://tickets.agilereloaded.it/event/play142023',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 72,
				name: 'Bologna 2022',
				slug: 'bologna-2022-09',
				start: 1663257600000,
				end: 1663426800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<p><strong>Check our site <a href="http://www.play14.it/">in Italian</a></strong></p>\n<h2 id="agilerelaodedscarpoolkaraoke">Agile Relaoded\'s carpool karaoke</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/KzBBDAQMWKA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h2 id="description">Description</h2>\n<p>If you are interested in having more detail, you can find a reportage (in italian) of the <a href="http://www.mokabyte.it/2014/04/play14/">2014 edition in Luxembourg</a>\nand of the <a href="http://www.mokabyte.it/2015/04/play14-2015/">2015 edition in Luxembourg</a>.<br />\nYou can also find a <a href="http://www.mokabyte.it/2016/05/play14milano/">reportage</a> of the 2016 edition in Milano.</p>\n<p>Check out the summary video of <a href="/events/milano/2016-05">&#x23;play14 Milano 2016</a> by <a href="/players/christina-ohanian">Christina Ohanian</a></p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/7bRJPQMY-R0" frameborder="0" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h2 id="friendsofx23play14">Friends of &#x23;play14</h2>\n<p>&#x23;play14 is an unconference: the programme will be defined by the participants who are free to sumbmit contents and to decide the schedule.\nWhile remaining faithful to the unconference format, again for the Milan 2017 edition we will be emphasising the <strong>“cultural contamination”</strong> concept. Therefore, we have invited people with different backgrounds and skills, who share a strong interest in gaming as a business tool.\nWe created the <strong>&#x23;play14 Friends programme</strong> in order to involve trainers, coaches, agile coaches, scrum masters and all kinds of agilists, psychotherapists, UX experts, improvisational theatre actors, musician and so on.</p>\n<div class=\'full\'>\n  <div class=\'row\'>\n    <div class=\'mod modMasonryGallery\'>\n      <div class=\'gallery-nav\'>\n        <ul>\n          <li class=\'current\'>\n            <a data-cat=\'all\' href=\'#\'>All</a>\n          </li>\n          {% assign yearGroups = page.friends | group_by:\'year\' %}\n          {% for yearGroup in yearGroups %}\n            <li>\n              <a data-cat=\'{{yearGroup.name}}\' href=\'#\'>{{yearGroup.name}}</a>\n            </li>\n          {% endfor %}\n        </ul>\n      </div>\n\n      <ul class=\'gallery large-block-grid-4 medium-block-grid-3 seperated small-block-grid-2\'>\n        {% for friend in page.friends %}\n          <li class=\'{{friend.year}}\'>\n            <a href=\'{{friend.url}}\' target=\'_blank\'>\n              <img alt="" src="{{friend.avatar | default:\'/images/players/default.png\'}}" height="200" width="200" />\n            </a>\n            <!--h3>{{friend.name}}</h3-->\n          </li>\n        {% endfor %}\n      </ul>\n\n    </div>\n\n  </div>\n</div>',
				contactEmail: 'italy@play14.org',
				tagline: null,
				publishedAt: 1663264800000,
				updatedAt: 1678736648793,
				defaultImageId: 'file_3486',
				imageIds: ['file_3486', 'file_3437', 'file_3435', 'file_3436', 'file_3434'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'Thursday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://tickets.agilereloaded.it/event/play14-2022',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 92,
				name: 'Bangalore 2024',
				slug: 'bangalore-2024-04',
				start: 1713524400000,
				end: 1713697200000,
				timezone: 'Asia/Calcutta',
				status: 'Over',
				description:
					'<p>#play14 is a global community of coaches, facilitators, educators, consultants, researchers, workers and artists gathering during two and a half day to unleash creativity with serious games. Cause we realy share the common idea that playing is the best way to learn.</p><h1>Who is this event for?</h1><ul><li>For those who are passionate about learning</li><li>For those attracted by the latest serious gaming techniques</li><li>For those who value learning through experimenting and are open to new interactions and communities</li><li>For those who value the practical abilities of facilitation and who are looking for new ideas and methods to enhance these competencies</li><li>For those who want to make a change, get rid of the formal/protocolar environment and try one where creativity and game appreciation are valued</li></ul><h1>What will you learn?</h1><ul><li>Facilitation techniques</li><li>How to innovate</li><li>Change management</li><li>Organizational happiness</li><li>&nbsp;... and much more</li></ul><h1>What would be your financial contribution?</h1><p><br>The participation fee is between 8,999-13,999 /person + GST + paymenty gateway (including materials, food and fun).</p><p>Note:</p><ul><li>This fee covers the cost of the event with all meals included, which are listed in the agenda. &nbsp;This cost doesn\'t include transport and accommodation.</li><li>#play14 is a non-profit event. All earnings from ticket sales will be used to sustain the event.</li></ul><h1>How can you register?</h1><p>To reserve your place in the event you’ll need to register first (Book Now) and fill in the registration form until the 11th April 2024. Please notice that this year\'s edition has a limit of 45 slots, so make sure you book before the event is full!</p><p>If you have any practical questions regarding this event, please send us an email us <a href="mailto:team@play14.org">team@play14.org</a></p><p>&nbsp;</p><p><a target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DAF59GZT5k8/Lm26q3-hOsqqfuDV4OFzVg/view?utm_content=DAF59GZT5k8&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">https://www.canva.com/design/DAF59GZT5k8/Lm26q3-hOsqqfuDV4OFzVg/view?utm_content=DAF59GZT5k8&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor</a>&nbsp;</p><p>&nbsp;</p>',
				contactEmail: 'india@play14.org',
				tagline: null,
				publishedAt: 1705581228660,
				updatedAt: 1713736800141,
				defaultImageId: 'file_5162',
				imageIds: ['file_5164', 'file_5163', 'file_5162'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '17:30:00',
								description: 'Welcome'
							},
							{
								time: '18:00:00',
								description: 'Starting - IceBreakers'
							},
							{
								time: '19:00:00',
								description: 'Dinner'
							},
							{
								time: '20:00:00',
								description: 'Games Together'
							},
							{
								time: '20:30:00',
								description: 'Rules of the marketplace '
							},
							{
								time: '21:00:00',
								description: 'End of welcome Evening '
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warmups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game sessions'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game sessions'
							},
							{
								time: '19:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:30:00',
								description: 'Dinner'
							},
							{
								time: '22:00:00',
								description: 'End of first day'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '10:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '10:30:00',
								description: 'Warmups'
							},
							{
								time: '11:00:00',
								description: 'Marketplace'
							},
							{
								time: '11:30:00',
								description: 'Game session'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game session'
							},
							{
								time: '17:00:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Final retrospective event'
							},
							{
								time: '18:30:00',
								description: 'Evening team with snacks and networking'
							}
						]
					}
				],
				registration: {
					link: 'https://rzp.io/l/play14Blr',
					widgetCode: null
				},
				sponsorships: [],
				media: [
					{
						url: 'https://www.canva.com/design/DAF59GZT5k8/Lm26q3-hOsqqfuDV4OFzVg/view?utm_content=DAF59GZT5k8&utm_campaign=designshare&utm_medium=link&utm_source=editor',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 54,
				name: 'Hamburg 2018',
				slug: 'hamburg-2018-06',
				start: 1530289800000,
				end: 1530457200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="photos">Photos</h2>\n<p><a href=\'https://photos.app.goo.gl/3YRsYkFqHLuBSRyMA\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/Go8tsH2g1rZ4lss6CxDKCrxRz67WQDUFLqfSVDd2TrOqcMmLsghyFpyXqtywMtymRkjiYRwFXI9HNoNaqr5lGkpP6300TMRDCswvlN8uPI8hWh_dJuOvLMvuyhwCjSmeZba8-K5OK1BqlJyK8NJCZOCKQBccTDbng89VeUPxifH_SizhihXCfGN4UFXYrhT4iWDANc363ofneBo49kczJp_ThLGmK8N4n3uMtDyMybrZTsr99YYBnurKQoLLrvsNZm92-7OgAoTKN4_GUoG_2c7BnJqiEgjtV08SrB3-FPcgn42qJnyVPnb4B3HrLPE2Vlpn105LiREFfXfJMs_jzN1dDCISDgTbmw-h5nHGwy-uLagzRd5G8ZMSjMjznzV1lOuOd9DHfi7zAAAbgr41iok2pqDQdX6nuK9FeK9hdS6N44tZ4Pqvcx2n3WwIUir9MT6iTznFqwkKaA9LyXiqZkvF__Ir_01b8Yd9EJa_DDojINnhAlFnn-hQeE2okNtKqlLdfQSnSwpRtAzA9whH0pIs6MPwyrSjFSstZFj9WUMdeI3xtDOGeWjeV_RFVFDWaDqibmZLp6gITeduSyM6p4iBgcqyM7j42H-tbNQxZyrjHpcDd7-sMVVsqbgwlrKeXWVJXiA3NCW1b9dpjIn5eeLEysu4BtJsk9Bd7wmHiUL5zeEJ0VAq2SW_=w2500-h1875-no\' width="560" />\n</a></p>',
				contactEmail: 'hamburg@play14.org',
				tagline: null,
				publishedAt: 1530297000000,
				updatedAt: 1678736627993,
				defaultImageId: 'file_3230',
				imageIds: ['file_3230', 'file_3233', 'file_3227', 'file_3234'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together. All times are approximated.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Get together / Rules of the marketplace'
							},
							{
								time: '19:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Ending the first day'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Buffet'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":317388,"code":22152}'
				},
				sponsorships: [
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/3YRsYkFqHLuBSRyMA',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV1_urAr7DntPqyRxjqDyCmF',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 37,
				name: 'Basel 2022',
				slug: 'basel-2022-08',
				start: 1661531400000,
				end: 1661698800000,
				timezone: 'UTC',
				status: 'Cancelled',
				description: '',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1661538600000,
				updatedAt: 1678736647854,
				defaultImageId: 'file_3418',
				imageIds: [
					'file_3423',
					'file_3418',
					'file_3413',
					'file_3415',
					'file_3419',
					'file_3421',
					'file_3414'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://www.palladio.net/events/play14-basel-2022/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 1,
				name: 'Milano 2016',
				slug: 'milano-2016-05',
				start: 1462465800000,
				end: 1462633200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Description</h2><p>The first installment of <strong>#play14 Milano</strong> was a big success. Many thanks to all the participants.</p><h2>Video</h2><p>Check out the summary video by <a href="/players/christina-ohanian">Christina Ohanian</a></p><h2>Pictures</h2><p>Take a look at some of the <a href="http://agilereloaded.500px.com/-play14-2016">pictures</a>&nbsp;<br>&nbsp;</p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1462473000000,
				updatedAt: 1683633396389,
				defaultImageId: 'file_4972',
				imageIds: [
					'file_4978',
					'file_4977',
					'file_4975',
					'file_4976',
					'file_4974',
					'file_4973',
					'file_4972'
				],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'http://agilereloaded.500px.com/-play14-2016---milano',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 84,
				name: 'Zürich 2023',
				slug: 'zurich-2023-09',
				start: 1695304800000,
				end: 1695474000000,
				timezone: 'Europe/Zurich',
				status: 'Over',
				description: '',
				contactEmail: 'zurich@play14.org',
				tagline: null,
				publishedAt: 1680162251771,
				updatedAt: 1700757338801,
				defaultImageId: 'file_4830',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: 'https://www.eventbrite.com/e/play14-zurich-tickets-622372451757',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://www.youtube.com/watch?v=3qV1dyTEik8',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 73,
				name: 'Berlin 2022',
				slug: 'berlin-2022-06',
				start: 1654876800000,
				end: 1655046000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="watchourvideo">Watch our video</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/Qx5jkvcm93c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h3 id="thiseventiscarbonneutral">This event is Carbon Neutral</h3>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/climate_neutral_8259983eaf.png" alt="carbon neutral" width="300"/></p>',
				contactEmail: 'germany@play14.org',
				tagline: null,
				publishedAt: 1654884000000,
				updatedAt: 1677370773684,
				defaultImageId: 'file_3404',
				imageIds: ['file_3404'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14berlin2022.eventbrite.de/?aff=play14',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://drive.google.com/drive/folders/1knIY8YT_WWhfW2pRv2VI5sDnTfBzjbhe',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 2,
				name: 'Beirut 2015',
				slug: 'beirut-2015-11',
				start: 1448006400000,
				end: 1448035200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="description">Description</h2>\n<p>The very first installment of &#x23;play14 Beirut was a big success.</p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1448010000000,
				updatedAt: 1678736609655,
				defaultImageId: 'file_3180',
				imageIds: ['file_3180'],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 47,
				name: 'Berlin 2017',
				slug: 'berlin-2017-06',
				start: 1498149000000,
				end: 1498316400000,
				timezone: 'UTC',
				status: 'Over',
				description:
					"<h2 id=\"pictures\">Pictures</h2>\n<p>Take a look at some of the <a href=\"https://goo.gl/photos/bXmjikpJ3cTnWBzZ8\">pictures</a>{:target=\"_blank\"}</p>\n<p><a href='https://goo.gl/photos/bXmjikpJ3cTnWBzZ8' target=\"_blank\">\n  <img src='https://lh3.googleusercontent.com/B1one5Syf151NgJ1_zYGEZWJADlycLsi5Yg-NG9OQSoPF7v_w1uE20-6pTkOuXVdHLPTKrVKxTNAJqUmHeHVmnFwVtgyW88Zt1F9wdzXV76_vlGcw6TBaNVixKTm88IbMQD7lw4nG9iXVWeh60g5LQQ0cmE-1BzD3Wl4cmejB9TVe1dt1uYwAslyv-iTWsYgUdxUCUovLmiu7393I7hE19IGKabOR7G-k7_M5Q1ZJbxsCmi4vUxI3oySW_kfZEAdaAkvY5uzI_-NvrRKKRMhmjyvz9EA8hB5RQxhtOykywM0eXkpyJeK2H5H_qgwLrW7Bngsa_h_bOpjG-o42mHtdyLWoWCkud3Gs8Diis4hAm_S3CfA6m7jdgXiDOijetsjJK75qtusxXCo_N8GV3eqH_tUakGfgi9ReA_yG4sSO2QH4h5eG_bnh0AuwLyU_8zwJ5IR603YWxilZIwxis4r-hpiNkR_q8DPfNgMd0MDawBFt_eitxOObgm8GX7zloX0LRYBQ8Fl9xa27CrWaEXeZLmweFixcrXxSSnsSH6QnzCcsfMWZ91KETQWCVvLdBL0fUwbsu0x-CZiwdGr4eXDGn8BKkOgq-055W33d9XKu-NYvr7HWGCe6x2HQq_AmfK-OvkGSI8rmhjJfGoo17SWqHtB58pZAcT8caoQrJwz6w=w1408-h1056-no' />\n  <img src='https://lh3.googleusercontent.com/ApFX50kyIJUsyUjhC0P8lovGtKbfNVBoooakEVbspIOHCdG3Jnbow541nqhdkL2prvYC3ErM_vyNtT0x3buvl3KjWcm_vsT1hSmo_Zp9dn4KZ1UpDVSxT06OCU1OfWXrtOrF2IxcvN69AvDW4dVzuVsl0TisXFMcebfO77GBQg7zR84LzEicpN1Ga51RODs3TG6TkAQAC_GlN0Qq1ZB2J1ON_LtuSyDlHwr8oG7Z2MEqQtMkVFyDuzk0S0O6zMCszc0Zrw_IV8oH4taI7YFYcS9ATQieEA1Qz_uZvzRCup8QTzbgSgXAFj902jyQWkGZl6Fw3MkQlpNpORCOPxHZVp2nG2bKlLEy57eqEouiDuKXml_n-_k-s2tqbrl00CYtJQZJqV5ex3zuYb9UJXoOrEVF1baPD90vazbDFFbXseOXxARKFcR7VCAA9rhWR-DlTAthytf8zRQURuUGSZd-GCiDKZ_aBKfh0DBnqVbIUMR0EzANy2bUQn_5TRXQQIqgFcQ102Hs8MOCZNiMAZJ1PgU6L1wYOwUGU7EZ8jpS0iw9HAPc_EXkuL7AGgEEAOAwfhQacYNKq7i2D6U9OY_ptYsZTXAb0iro5Zc-HZchzCWKUQhO1M798lSWr55zLEU3SnMJBTR9Lf-279Y2POtBhlJTNFcm6RFRaMIHibmhhg=s1056-no' />\n  <img src='https://lh3.googleusercontent.com/bhS_yhuyT8Oaw5uJKe80wAxSTg_y2EVyElqq08VjJ4fnqjfSWoDevRZKV4-xI0P-48XdRliWL4y62BoR8iLLL1Op5hVut8Gy9EvZJMUR_H-PvX-0rbOJ9KrjouDMXm8aA9VAZ3jHF5wwMBgfi7BeHpQlTsyOT8iVtm2kT8EPv89LjmCv9FcZID4sOQKMIJXW9pTg1o-Cku8rxNY1QWnwqeoqCRs1DhRApKpZkNnZJE_W8zgbv9crgO37DvplC9fZ5zu1lMfiU-1VuD7r9KisD00s61c2UJpBeqzL68aQ5Fr54manpv-Tv-XTaUTzBZ0looVaN4ZFIaa5WgVl7o4RCt24Je6Pdsfd6pOnl1jhYOoNsAmC59JJ4c80rVtrQjMBXi8D9XGP8dOfAgLIco4ULvZ_Moft3QoXYgi3A_rloGSaG-cT0hJHSltfjNiPgXsplUxa-7i0WJfHqeAUFmyXJaDcJYi38e3M2QQftJJOb7EbSKMiYgXtxufxdljKafUR__WjfVips3mKsILOekR-rOJjn9N8C4PiMykcPa-kOIgWa4q5XMYWeih1HFhPwxWFZdXJ9Ki88HRQ1R8TNlKDOmJlK1DOiqACkukM34RltX69ihzphGzoU9GmKogSZc6noMdoAksUKzTV3f2up7MUXwZcKAFwyIJKSl0zJm7ctsa3Yg=w1343-h1007-no\n' />\n  <img src='https://lh3.googleusercontent.com/rmE9O7-C6Ow2UGhsAuWL2UTUAeDTcCUYPOv42T30nPngFlicA3_ualP-pyics9PUQT9TJCf1pr8zt7spjtbji-M3_t2ACnIRh4mQil38kkPnIC3D6YBkm2LziOmmDWRcjjZhauXU85tLIznbIvjkn-bLCGr7-8kzo1Rl-GOsldiW4u-nhySeVYsvVD46Yjst_TpZNWnKmltAKBZVFypsu1rgtl7J6fUF3ax2jIXs_KOVZJ1uNczBqpYL5iVupoGkfirrKAXEIcCNDulmhxCTdPyknE0uI6XO0JUTtmWKt-XS3W7hObqq1M64RYL9ITXsOGHQkyiNAe491D0qIAi-4tIGkWSRAIFQ0w8jODqEQYS4UkdphEmMC-lxm3S1MQu3cc3RT3Xh9sVLyl59DlOjxNYPq7IWUFrJSvw_YUQFh8FcH8XUYKB5oHEUVxuvUZcmOC61WEcRYoOvIUcGBSajegc_enElH5kxTksvn1PgCfwInV7NGJySenE2CJd15xvd29cvHTmerhHhUN8iCVZGEjMw57xMHmvh1wbjIrHKdadWJaRAs4p8v_M3hsjWUVQMeg8zcYrle05IBK_8xtQdXiHXSyFlda1lZ-wjnTkOZPAvk6Qzmox-OL6w6o_Fkst0_Le7J4eYW6f5SlldXa4MdoMB36HmD2RVacGjBi8hx4sR1A=w1000-h932-no' />\n  <img src='https://lh3.googleusercontent.com/ux94PDdYl1SLUPFyuxBEDlryANGShzlB7Rb7lUW67AxdXXfpxBMN2wS3dsAW6W7NpQriFVMcJ-Cjd69uLRb4fIe5QYM2V85bhfGz_Z4rdnzXFbYdcnhYCScPWQIagRrOJOiweAEZfee8Z2aIEOb44-sb_ZmMmdzHnGFRw1AquXR0sRQh-tPhq8y5Otvdpom515J6jq49_OXdQflbEVICCEI7JVSB6FFEHWLUh4uWm29TL2xQqTWnNJLg6wfGGTmyfzX-w7hxidBRN7eekYlx3-zqkAOHsui6u2H7_DijnEQ_QCz2NTHlksLMqXSAFFAVu2ozrrzdAWt6mFAkyujPCnkZAYeQCzaMpPK7iyTNqmlbjJL6V57L3oIkYqeWiWMdRXy62yZYF9mEtS_mwmrASuqLebWADDZ7dvZFEx9vAd5YgbQ3LZw2fDCpt2eWzbiO3W7nuUo1bdqI5oqqMXKu3tqct2MsO2uCOBHHLH4FCBO55uJhi85EGVihNGBXmP3EkmHuTphVgptEesJlhqKozXyk8yyh_zHYYixkJB2LmqfJzZYxyJo66lZ8opF_pDjMWP6GCdYSKeO-IY2WjbLj5StRdkC26Z9gEZZrlKmRB8H_p4OGZ9FtPf3VLUld949m_z53ITwAi6KST8a__Cz-qen_CC5JaF2OUfZftbg49qqaPYw=w2048-h469-no' />\n  <img src='https://lh3.googleusercontent.com/L9pKT_ksFh6_s8G9-oC6SvvFEKz18RvmwWKgxfbPUQYtN9zdC-UtUiuRNiYWabMGgNDLeioUj-z7hW7P9wOMVKF_mKWRh6rVQGRktkmm_eihQ3bu3p8LmUwYi0ViArcVHq_jbHA4YTBo7BXe-SEe16hnoAlBGElE0WC7T3N_RPyffd3g0viVqlsJxtGIBHPKhQ-7x8NA32TyQCWKzcW4m21og4ixwplChUoirJ737AxMQUfwBwUg7zh8KsyWB7BHb6n-h1OqOCzGHelUE3XZrPxbGLHwSnI1NbdruWMGyJBZXGT1hG-TyFggIbehvhxoGtjmEAF_fMc6S_0oFVDl5oPBrooXAt9afc1ilCJnycZuXtXgK6DDbF8MIH7Ae3EeHa1rtJukrX6LlR21C8rcbF2g9AQMJewTNosebAzfMco-mtIAJt2kwgEXKWdZ6SeEoQ77K1B0ViBhiccvjq-Wg8nQPwbXC1IDLsoA7Cv1PWgfRpnxkXCW9_TmuqX3Ig-kgOWC5hlX6Hl1h5gz_U-APCRohmY36Eg99y_HgSUDfYUYFkizKY5_l26RHmv1ZxN34GZRXNQig0UtKy2HFHd_CMB5WFN7Bnfo5QExeSzs66D-g3IB4b-c9KVb-fnHteGGBUWSw7xvU849T-Y701op3sUrGON9WPUakcLeRRDyyA=w792-h1056-no' />\n  <img src='https://lh3.googleusercontent.com/XGM5z9eBroV6ddaFTY9ZKRCRdeFFsFT1XBDWDr4N6HEictXVSC59lKexWKcoB9Z1Xg2K7dZ15S08IaiK9s2fK4ZaYGt3m34ZGOjDaU6SFYWXYnWhj9L1jXAOF9t0g1_Y6YAxeQzCBYHvgIFNJVcWFvIM9g-soEVekcY6O4zOyqU27JCniGHcYqg2D5piRj8hlM-iyw93lO7OhwwjbpZ3v3ICz4ZEVTVW4YWb5fQwPJkmRVXayNgQ0TRF3-YJ6MLVUYpXe8it7r24Cb_HAD2n0zozqrkIh8qQ4WbbHC4JTgMBl3VAPeqaWZbMH76oZLGgRe4sLP1gHIUzlRHSdArQiLh_qgd5FrBiBMoUSwG9VOvdu_bGxoS52bOR3vmqpqSp6KTOkjCbtm0GKpbVpPexCkAp53m-UdKqBxMcHOWyXAF1hJ2axMQQsmQZrezQHwuD3OmAQQXf00arg47Qz6N6c4pjnpg9Jre1I-2PPnfE9EspR42ceqKDkHgzdtLG928pw7o1HzHq-UE1Qj-I9Zdh7qTBks4G1oPf3MDhVD5dvMV8JqEeZv4STrdUeOniqb0HpYxT3NPcJQWLLd51LGUzjmWRkbJCeitpGMZnsjUvGXX0lPDTl50abC5B20J_7FPqusobdBWbzKoo37fIhld0kQLhK7N04cImcXamth-xP1oAYg=w1343-h1007-no' />\n  <img src='https://lh3.googleusercontent.com/edwmiNkNbwOKXq1H3dG9-blo953AWsH19vV5Ni7TxAMFV6atOjT_0I69yTGa6cLH2cpWgn33FWPNl3x7rn4Fr0lrla_oYEB2YLr4QJ2J6kw2ZDf8uFfGhwGir23KD0qD3FQVtaITfl0kFl9fxxuomUr-5RnY8Di3uwBQOt4nO_ECiicz-RZHqLfQ6Ei6rQ4_KEnob9y4_nIcY-DLpF0FEpMB2dbXAArYCMbiaxiQznpCt-TwnD3dAqPCmPXtrw9I9FIBCtEEAiH8ouUbscIGEuTF0XgqR8NkTsOuSGIMRh63EZLwgtvyKRZvgdv7qdd5v53o5Gx0Y5IuUBDBdQqoBo2ZB00Xc9YUxdcvf6jPayLBb_e71lDKS4cU9jWRPlBDcu_AADxxhAIY0a-QHXyLrCqKytuDVkRobiK5hHPcm3PDJs0wcBB4GSAJepJsd3VvBzSLa0TL4HxfI1Z9H-kTFOPm3CSBbItnpKBROTgx3I190O3QaYFc8gHzcRd2M7RtdQh4IK4SFts9qv0jnmwrsvsnJrA_YhdTkgFiL8L3_953aCI3wo_VNgGs8MYIYMkcIY-ZidlXaXeGLBwMk5ma6W0BEwwCjZmnmYHQNt5jNvi-QAeygse1Y6Gv7yH8xw4pF_zqTQ3vX6GhK7rq2zkO-KvVSSw8wZ4yuICQzG9Bn7npZw=w1000-h750-no' />\n</a></p>",
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1498156200000,
				updatedAt: 1678736618511,
				defaultImageId: 'file_3189',
				imageIds: ['file_3189', 'file_3187', 'file_3181'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'Thursday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Game sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":33143290474}'
				},
				sponsorships: [
					{
						category: 'Our local sponsors',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/bXmjikpJ3cTnWBzZ8',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 59,
				name: 'Porto 2018',
				slug: 'porto-2018-09',
				start: 1538150400000,
				end: 1538319600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="photos">Photos</h2>\n<p><a href=\'https://photos.app.goo.gl/nVPvXAvp2oUv8UuM7\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/FxKHJVoB4owdIO1ntYNxee-5ITOsNgW9rD6fj8RoioHN1pGC475SNK-o1GdEgTMwVblts2ZBPFeccL-A_lMwcvdN8iZtVUX3YWbFIL1gq5_Ohc1YMYFF-mIvt5GdVfNb0iqrwOiNBarAZFflqFBwHsH3VqS66l6bZUKUMect8C0vvYNorwLbIp1BW_K3kCmUDHv6_pxpA99lSqPYeZlusTu6Darx8xIv_zSnpLUGl8JtZn3d-zgCqMaOXYWUcKA8qdWiBDXyg5v9obgqenQ7Q8i47e780HE00zAhQiKrBeFs0NiBI8zcO9M4RipOIHBUqZrllvfwpNRG64fkMNy3uGAJtxeYRVfLbvakuTgZ3dSAce6CyXasvnY4SBa2UAWFsR9O3tU5ZHi94Plig0AjvQpfpBqDvyyyNxHLKz5XBzrV2cnwdvt5_Sceu2_ZVbGFu7yL1Tj58rQ3cuCCdyLawxB89BVAg45Vr7MgWPZuJ1Qx6V0hwBNKzw9gfd8IFM29XnDS8cRbpDMdDU8w24iV-Rp6hRguyEg_0VVh_1AGY_p_oZdFnJwgsawpsBCSZUYv23vnFMGuJYDJYTrW5NslRd9NPRVpQu-1Dl_YaYWdkuefO4W53nSGiDQkSGuBUPJD9FruzWyJOcc0mfa0wJzGNPcseTMAdSvW1AiweTpmcAIKCQ5-Zb24zZFh=w3607-h1753-no\' width="560" />\n</a></p>',
				contactEmail: 'porto@play14.org',
				tagline: null,
				publishedAt: 1538157600000,
				updatedAt: 1678736629548,
				defaultImageId: 'file_3241',
				imageIds: ['file_3241', 'file_3249', 'file_3488', 'file_3240', 'file_3246', 'file_3242'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":359552,"code":31180}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/nVPvXAvp2oUv8UuM7',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV0aTTCCL0CVHg29mSnJ3m6y',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 75,
				name: 'Lisbon 2019',
				slug: 'lisbon-2019-06',
				start: 1561737600000,
				end: 1561906800000,
				timezone: 'UTC',
				status: 'Over',
				description: '',
				contactEmail: 'portugal@play14.org',
				tagline: null,
				publishedAt: 1561744800000,
				updatedAt: 1692709143088,
				defaultImageId: 'file_4966',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":425904,"code":46231}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local sponsors',
						sponsorIds: []
					},
					{
						category: 'Local Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 61,
				name: 'Sydney 2019',
				slug: 'sydney-2019-03',
				start: 1551456000000,
				end: 1551628800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="fridayafternoon">Friday afternoon</h2>\n<p>\n  On Friday afternoon, we will start at 5PM in the <strong>Fairmont Room on Level 1 of the Occidental Hotel</strong> with ice breakers and explanations about &#x23;play14 rhythm and the marketplace.<br>\n  The rest of the event on Saturday and Sunday will be held at <strong>INS</strong>\n</p>\n<div class=\'row\'>\n  <div class=\'two spacing\'></div>\n  <!-- Images -->\n  <div class=\'large-5 columns\'>\n    <div class=\'mod modBoxedSlider\'>\n      <div class=\'slides\'>\n          <div class="slide">\n            <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/occidental_hotel_c30bc9d0cd.jpg" alt="" style="display:block; max-height:500px; width: auto;">\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\'large-3 columns\'>\n    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13251.559650127318!2d151.205624!3d-33.8667279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d0ebd99670aed86!2sThe+Occidental+Hotel!5e0!3m2!1sen!2sau!4v1550569291884" width="350" height="370" frameborder="0" style="border:0" allowfullscreen></iframe>\n  </div>\n  <div class=\'large-3 columns\'>\n    <ul class=\'info\'>\n      <li>\n        <h3>\n          <a href="http://theoccidental.com/" target="_blank">\n            THE OCCIDENTAL HOTEL\n          </a>\n          <br>\n          Level 1 - Fairmont Room\n        </h3>\n      </li>\n        <li>\n          <div class=\'spacing\'></div>\n          <strong>Address</strong>\n        </li>\n        <li>\n          43 York St, Sydney NSW 2000\n        </li>\n        <li>\n          <div class=\'spacing\'></div>\n          <strong>Start</strong>\n        </li>\n        <li>\n          Friday, March 1 2019\n        </li>\n        <li>\n          17:00\n        </li>\n        <li>\n          <div class=\'spacing\'></div>\n          <strong>Finish</strong>\n        </li>\n        <li>\n          Friday, March 1 2019\n        </li>\n        <li>\n          21:00\n        </li>\n    </ul>\n  </div>\n</div>',
				contactEmail: 'sydney@play14.org',
				tagline: null,
				publishedAt: 1551459600000,
				updatedAt: 1678736633139,
				defaultImageId: 'file_3231',
				imageIds: ['file_3231'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will get to know each other over a bit of food and drinks, and a few games.',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Get together'
							},
							{
								time: '21:00:00',
								description: 'End of the first evening'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '22:30:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game sessions'
							},
							{
								time: '17:30:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'End of day'
							}
						]
					},
					{
						day: 'Sunday',
						description: 'We will also start with the marketplace for a day of games.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm-ups'
							},
							{
								time: '10:00:00',
								description: 'Marketplace'
							},
							{
								time: '22:30:00',
								description: 'Game sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Game sessions'
							},
							{
								time: '16:30:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://www.trybooking.com/book/event?eid=449968',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/5sbSFbnvzmw3GNbC9',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV1EbfkU9fUKmRQxCHLhtEZd',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 30,
				name: 'Prague 2021',
				slug: 'prague-2021-04',
				start: 1619195400000,
				end: 1619362800000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="description">DESCRIPTION</h2>\n<p>&#x23;play14 is an informal, serious games gathering following Open Space unconference format.\nTogether we’ll explore games and playful approaches to coach teams, organizations… or just to have fun.</p>\n<p>&#x23;play14 is playful with a purpose: Coaches, facilitators, trainers, game and innovation experts find an open playground to inspire each other and co-create transformative experiences. We gather to grow individually and as a community.</p>\n<p>Never heard about Serious games? They are gamified simulations of real-life problems, and playing them is a great way to learn and understand. Good and widespread examples of such games are Lego Scrum and Kanban pizza. Common themes are people motivation, self-organization or process inefficiency.</p>\n<p>2020 is going to be the first time this event is being organized in the Czech Republic.</p>\n<p>Have a quick glance at previous events (10min)</p>\n<ul>\n<li><a href="https://youtu.be/Pwhjr0Y82f4">&#x23;play14 Madrid Interviews</a></li>\n<li><a href="https://youtu.be/86DrKsf6uvk">&#x23;play14 London highlights</a></li>\n</ul>\n<p>Or explore the Play14 website for even more info.</p>',
				contactEmail: 'prague@play14.org',
				tagline: null,
				publishedAt: 1619202600000,
				updatedAt: 1678736648471,
				defaultImageId: 'file_3386',
				imageIds: ['file_3386', 'file_3385'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 40,
				name: 'London 2015',
				slug: 'london-2015-09',
				start: 1441989000000,
				end: 1505314800000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Description</h2><p>The first installment of <strong>#play14 London</strong> was a big success.</p><h2>Pictures</h2><p>Take a look at some of the <a href="https://goo.gl/photos/WWUhVBR3q8AuPw9V6">pictures</a>{:target="_blank"}</p><p><a href="https://goo.gl/photos/WWUhVBR3q8AuPw9V6"><img src="https://lh3.googleusercontent.com/uxqbVmcjLeD9w7dVnKi_454kKo9pS5iVAtR7xTDZommb4n90G_4Ue1YtZ__aim4rngiH3B9KeahCWjaEDLyQXvu3cUoIFnxFr9R9b1VzQIEI0gGwFNfc7Q8x26X5jpdX4hupcg"></a></p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1441996200000,
				updatedAt: 1683633835302,
				defaultImageId: 'file_4961',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/WWUhVBR3q8AuPw9V6',
						type: 'Photos'
					},
					{
						url: 'https://vimeo.com/172251112',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 50,
				name: 'Basel 2018',
				slug: 'basel-2018-04',
				start: 1523637000000,
				end: 1523804400000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="photos">Photos</h2>\n<p><a href=\'https://photos.app.goo.gl/9fPzpslzRCUBEggN2\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/Mt06nG2AqLYEesbWx5-C3sSjOQQ7_tgADNWCmPb2Wbfx1odtNR5aXZ_XjP3EDk71-buFvZQWrS8U8-jU8oFq46CXeyWOH7v8-MPckqXwRi5FYzPysTmjgzf2JI4RMAZzFhmOZoRf1x2LJlvsiw0-Iu0Lo0D7i3XFNAoXHST-d496ySXbScFt7JIULedIRaKsCgm2_SDcnHE7mTwciiyzNbTnI-NlYr-BXiqe2Sda6diR9KlEvseIuxfWsLeBFgmP_2W3ijtqs5zHBHwl3e8fswV6CU0TItwMmMpfehKHib8cJMvyVKmlgNIOTPFORBc49lsP15p06H-XgRTO3dEXr3ilLUDkn7x9M5LywpCkLPSWi013cYUb4YdTnDyaRhTqw8uvWDVwktM0--b3OpHouN8EtjhKSagQ-886hsoNpk_0NnT6IqNmVNYt-gfkfLErpFL69Gw2FzJC9DB07nMCSJZjNPpQ35WyTbHLd7RVgFh5RsNiAMkGL78Yw3md5EzvqimAp8Yj9UYE6SFgrTv0STLyCsqMRv-U3TfCKi_FG7ka2DDZUVe4VX26ns0IL8TXMg07YFTUPngFBRqhbxsQcKBmsYSe7BBj84N-CeEbbwHOh0LN1baJl7W4XYY2D3QPPGTyd0LeDca1s48ngWA2oRNoH8TuUDj0=w718-h404-no\' width="560" />\n</a></p>\n<h2 id="sharethegoodnews">Share the good news</h2>\n<p>Share this on\n<a target="_blank" href="https://twitter.com/home?status=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20April%2013%20to%2015%202018%0A%0Ahttp%3A//play14.org/events/basel/2018-04%0A%0A%23playfulness%20%23seriousgames%20%23facilitation%20%23change%20%23agile%20%23fun">\n<i class=\'fa fa-twitter fa-2x fa-fw\'></i>\n</a>\n<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//play14.org/events/basel/2018-04">\n<i class=\'fa fa-facebook fa-2x fa-fw\'></i>\n</a>\n<a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//play14.org/events/basel/2018-04&title=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20April%2013%20to%2015%202018&summary=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20April%2013%20to%2015%202018%0A%0A%23playfulness%20%23seriousgames%20%23facilitation%20%23change%20%23agile%20%23fun&source=">\n<i class=\'fa fa-linkedin fa-2x fa-fw\'></i>\n</a></p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1523644200000,
				updatedAt: 1678736624236,
				defaultImageId: 'file_3214',
				imageIds: ['file_3218', 'file_3214', 'file_3213', 'file_3219', 'file_3217'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '21:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Coffee & Croissants'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Coffee & Croissants'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":309482,"code":4802}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/9fPzpslzRCUBEggN2',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV03kg2MkMdQOaGY5Oz_YfC8',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 43,
				name: 'Luxembourg 2016',
				slug: 'luxembourg-2016-03',
				start: 1458322200000,
				end: 1458489600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="description">Description</h2>\n<p>The third installment of <strong>&#x23;play14 Luxembourg</strong> was a big success.\nMany thanks to all the participants.</p>\n<h2 id="pictures">Pictures</h2>\n<p>Take a look at some of the <a href="https://goo.gl/photos/XchFrWVz3C47BgD3A">pictures</a>{:target="_blank"}</p>\n<p><a href=\'https://goo.gl/photos/XchFrWVz3C47BgD3A\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/f4t0-f3FyarG2pKvfffPmKYSN0SDq9LlpA0pTgmG2z0RKynM6mSieiIOd4Et7UKUQOFQUNcpB3Sw1_idFHJJ_BjdlzPS1Rf69NRBOH-CREDUwgA8kTLFB1No7gZPSNtV--Qczw\' />\n</a></p>\n<h2 id="videos">Videos</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL6VQoC829PV1CY0-csEDYiaT-2pnsMzeU" frameborder="0" allowfullscreen></iframe>\n<h2 id="articlesblogs">Articles &amp; Blogs</h2>\n<ul>\n<li><a href="http://www.itnation.lu/play14-luxembourg-are-you-ready-to-play/">&#x23;play14 on ITNation</a></li>\n<li><a href="https://marmelab.com/blog/2016/05/04/play14.html">Yann Gensollen on Marmelab\'s blog</a></li>\n</ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1458325800000,
				updatedAt: 1678736608482,
				defaultImageId: 'file_3157',
				imageIds: ['file_3157', 'file_3156', 'file_3158', 'file_3159'],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/XchFrWVz3C47BgD3A',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/watch?list=PL6VQoC829PV1CY0-csEDYiaT-2pnsMzeU&v=P1L7bCBQ5Ys',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 39,
				name: 'London 2016',
				slug: 'london-2016-09',
				start: 1474648200000,
				end: 1474815600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Description</h2><p>The second installment of <strong>#play14 London</strong> was a big success. Many thanks to all the participants.</p><h2>Articles &amp; Blogs</h2><ul><li><a href="https://www.adventureswithagile.com/2016/08/03/play14-review/">AdventuresWithAgile</a></li></ul>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1474655400000,
				updatedAt: 1683633102282,
				defaultImageId: 'file_4962',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/Ts27UBPi53uxf6k79',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/watch?list=PL6VQoC829PV1OeuRClBIrqdrvQ9f-StG2&v=IMhLQyOexjg',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 101,
				name: 'Geneva 2024',
				slug: 'geneva-2024-11',
				start: 1732806000000,
				end: 1732980600000,
				timezone: 'Europe/Brussels',
				status: 'Cancelled',
				description:
					'<div class="css-12r38kx e1nkw0yb0" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 247, 246);border-radius:8px;box-sizing:border-box;caret-color:rgb(57, 54, 79);color:rgb(57, 54, 79);font-family:&quot;Neue Plak&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Tahoma, Arial, sans-serif;font-size:14px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:16px auto;orphans:auto;padding:16px;position:relative;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-testid="SlotPreview"><div class="css-8cghab e1nkw0yb2" style="border-left:2px solid rgb(250, 175, 160);box-sizing:border-box;margin:0px;padding:0px 0px 0px 24px;"><p class="css-121w9yc e1nkw0yb3" style="box-sizing:border-box;color:rgb(75, 77, 99);font-size:14px;line-height:20px;margin:0px 0px 4px;padding:0px;" data-testid="preview-slot__time"><strong>18:00 - 21:00</strong></p><p class="css-bh5t0l e1nkw0yb4" style="box-sizing:border-box;color:rgb(57, 54, 79);font-size:18px;letter-spacing:0.25px;line-height:24px;margin:0px;padding:0px;"><strong>28 Nov 2024 : Introduction, se connaître et préparer le lendemain</strong></p></div></div><div class="css-1hcum5r e1nkw0yb0" style="-webkit-text-stroke-width:0px;background-color:rgb(245, 246, 249);border-radius:8px;box-sizing:border-box;caret-color:rgb(57, 54, 79);color:rgb(57, 54, 79);font-family:&quot;Neue Plak&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Tahoma, Arial, sans-serif;font-size:14px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:16px auto;orphans:auto;padding:16px;position:relative;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-testid="SlotPreview"><div class="css-nlrmv2 e1nkw0yb2" style="border-left:2px solid rgb(50, 75, 140);box-sizing:border-box;margin:0px;padding:0px 0px 0px 24px;"><p class="css-121w9yc e1nkw0yb3" style="box-sizing:border-box;color:rgb(75, 77, 99);font-size:14px;line-height:20px;margin:0px 0px 4px;padding:0px;" data-testid="preview-slot__time"><strong>09:00 - 18:00</strong></p><p class="css-bh5t0l e1nkw0yb4" style="box-sizing:border-box;color:rgb(57, 54, 79);font-size:18px;letter-spacing:0.25px;line-height:24px;margin:0px;padding:0px;"><strong>29 Nov 2024 : Atelier</strong></p></div></div><div class="css-6pdkla e1nkw0yb0" style="-webkit-text-stroke-width:0px;background-color:rgb(245, 249, 247);border-radius:8px;box-sizing:border-box;caret-color:rgb(57, 54, 79);color:rgb(57, 54, 79);font-family:&quot;Neue Plak&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Tahoma, Arial, sans-serif;font-size:14px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:16px auto;orphans:auto;padding:16px;position:relative;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-testid="SlotPreview"><div class="css-18vl9lm e1nkw0yb2" style="border-left:2px solid rgb(205, 223, 214);box-sizing:border-box;margin:0px;padding:0px 0px 0px 24px;"><p class="css-121w9yc e1nkw0yb3" style="box-sizing:border-box;color:rgb(75, 77, 99);font-size:14px;line-height:20px;margin:0px 0px 4px;padding:0px;" data-testid="preview-slot__time"><strong>18:30 - 22:38</strong></p><p class="css-bh5t0l e1nkw0yb4" style="box-sizing:border-box;color:rgb(57, 54, 79);font-size:18px;letter-spacing:0.25px;line-height:24px;margin:0px;padding:0px;"><strong>29 Nov 2024 : dîner ensemble</strong></p></div></div><div class="css-8hxyr6 e1nkw0yb0" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 247, 250);border-radius:8px;box-sizing:border-box;caret-color:rgb(57, 54, 79);color:rgb(57, 54, 79);font-family:&quot;Neue Plak&quot;, -apple-system, BlinkMacSystemFont, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Tahoma, Arial, sans-serif;font-size:14px;font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;margin:16px auto;orphans:auto;padding:16px;position:relative;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-testid="SlotPreview"><div class="css-1dg3kds e1nkw0yb2" style="border-left:2px solid rgb(252, 134, 188);box-sizing:border-box;margin:0px;padding:0px 0px 0px 24px;"><p class="css-121w9yc e1nkw0yb3" style="box-sizing:border-box;color:rgb(75, 77, 99);font-size:14px;line-height:20px;margin:0px 0px 4px;padding:0px;" data-testid="preview-slot__time"><strong>09:00 - 17:00</strong></p><p class="css-bh5t0l e1nkw0yb4" style="box-sizing:border-box;color:rgb(57, 54, 79);font-size:18px;letter-spacing:0.25px;line-height:24px;margin:0px;padding:0px;"><strong>30 Nov 2024 : Atelier et apéro cloture</strong></p></div></div>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1727118429828,
				updatedAt: 1730657006317,
				defaultImageId: 'file_5300',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: 'https://www.eventbrite.com/e/play14-geneve-28-30-novembre-2024-tickets-1022266676147?aff=oddtdtcreator',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 26,
				name: 'Basel 2020',
				slug: 'basel-2020-09',
				start: 1599237000000,
				end: 1599404400000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="sharethegoodnews">Share the good news</h2>\n<p>Share this on\n<a target="_blank" href="https://twitter.com/home?status=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20August%2023%20to%2025%202019%0A%0Ahttp%3A//play14.org/events/basel/2019-08%0A%0A%23playfulness%20%23seriousgames%20%23facilitation%20%23change%20%23agile%20%23fun">\n<i class=\'fa fa-twitter fa-2x fa-fw\'></i>\n</a>\n<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//play14.org/events/basel/2019-08">\n<i class=\'fa fa-facebook fa-2x fa-fw\'></i>\n</a>\n<a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//play14.org/events/basel/2019-08&title=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20August%2023%20to%2025%202019&summary=Coming%20up%20%23play14%20Basel%20at%20LAUNCHLABS%20from%20August%2023%20to%2025%202019%0A%0A%23playfulness%20%23seriousgames%20%23facilitation%20%23change%20%23agile%20%23fun&source=">\n<i class=\'fa fa-linkedin fa-2x fa-fw\'></i>\n</a></p>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1599244200000,
				updatedAt: 1678736646627,
				defaultImageId: 'file_3390',
				imageIds: [
					'file_3392',
					'file_3390',
					'file_3389',
					'file_3391',
					'file_3387',
					'file_3388',
					'file_3393'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://www.palladio.net/events/play14-basel/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 109,
				name: 'Bangkok 2025',
				slug: 'bangkok-2025-11',
				start: 1763114400000,
				end: 1763283600000,
				timezone: 'Asia/Bangkok',
				status: 'Open',
				description:
					'<p><strong>About this event</strong></p><p>Want to build connections, foster collaboration, spark creativity, and accelerate learning at your workplace?</p><p>Or are you looking to incorporate serious games and fun, meaningful activities into your meetings, brainstorming sessions, training, or team-building?</p><p>Welcome to the inaugural #play14 Bangkok 2025!</p><p>&nbsp;</p><p><strong>What is #play14?</strong></p><p>#play14 is a global non-profit movement of play enthusiasts who believe play(fulness) is one of the best ways to learn, share, and create! Since it began in Luxembourg in 2014, #play14 has brought together more than 2,500 players across 35 cities in 20 countries. Now celebrating its 10th anniversary, #play14 is coming to Thailand for the first time!</p><p>&nbsp;</p><p><strong>How is #play14 different from other events?</strong></p><p>#play14 is an unconference based on open space technology. This means participants (called players) are also contributors. Every morning, anyone can pitch a game, question, or challenge to be added to the day’s schedule — which is created on the spot! This format encourages spontaneous, dynamic, and co-created experiences.</p><p>&nbsp;</p><p><strong>Who is #play14 for?</strong></p><p>#play14 is for anyone who believes in the power of play. Past participants have included:</p><p>&nbsp; &nbsp;• Game designers</p><p>&nbsp; &nbsp;• Trainers and facilitators</p><p>&nbsp; &nbsp;• Agile coaches</p><p>&nbsp; &nbsp;• Teachers and educators</p><p>&nbsp; &nbsp;• HR and L&amp;D professionals</p><p>&nbsp; &nbsp;• Team leads and managers</p><p>&nbsp; &nbsp;• Curious minds from all industries</p><p>Whether you want to inspire or be inspired, there’s something for you!</p><p>&nbsp;</p><p><strong>What can I expect at #play14 Bangkok?</strong></p><p>&nbsp; &nbsp;• 🎲 Play Experiences: Join physical, serious, and creative games that spark learning and connection.</p><p>&nbsp; &nbsp;• 💡 Fresh Ideas: Discover and share new games and facilitation techniques.</p><p>&nbsp; &nbsp;• 🤝 Meaningful Conversations: Meet interesting people from diverse industries.</p><p>&nbsp; &nbsp;• 🧪 Experiment Freely: Test new ideas in a supportive space. Bring a concept and find people to help turn it into a playable experience!</p><p>Join us this November in Thailand to experience a new level of play(fulness) and collaboration.</p>',
				contactEmail: 'inlightconsultingth@gmail.com',
				tagline: null,
				publishedAt: 1748326072712,
				updatedAt: 1753317712381,
				defaultImageId: 'file_5456',
				imageIds: ['file_5458'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'We are welcoming all participants with a dinner at (tba).',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Welcome & Ice-Breakers'
							},
							{
								time: '18:30:00',
								description: 'Dinner , Drinks and Mingle'
							},
							{
								time: '19:30:00',
								description: 'Introduction: The Markeplace'
							},
							{
								time: '20:00:00',
								description: "Orientation: Let's Play!"
							},
							{
								time: '21:00:00',
								description: 'End of Day1'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with The Marketplace, and from then, we will play all day long!',
						timeslots: [
							{
								time: '08:45:00',
								description: 'Light Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm ups'
							},
							{
								time: '10:00:00',
								description: 'The Marketplace'
							},
							{
								time: '10:30:00',
								description: "Let's Play!"
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: "Let's Play"
							},
							{
								time: '17:30:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Chill and Chat Networking Dinner'
							},
							{
								time: '20:00:00',
								description: 'End of Day 2'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We start again with the marketplace before we commence with a full day of play and games. If you need to catch a plane, can leave early. But we encourage everyone to stay until the end of the session.',
						timeslots: [
							{
								time: '08:45:00',
								description: 'Light Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Warm ups'
							},
							{
								time: '10:00:00',
								description: 'The Marketplace'
							},
							{
								time: '10:30:00',
								description: "Let's Play!"
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: "Let's Play!"
							},
							{
								time: '17:30:00',
								description: 'Final Retrospective'
							},
							{
								time: '18:00:00',
								description: 'End of Day 3 & Clean-Up'
							}
						]
					}
				],
				registration: {
					link: 'https://www.ticketmelon.com/play14bangkok/play14bangkok2025',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 7,
				name: 'Timisoara 2019',
				slug: 'timisoara-2019-05',
				start: 1558713600000,
				end: 1558882800000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="howtogetthere">How to get there</h2>\n<p>Reach Timisoara city:</p>\n<ul>\n<li><i class=\'fa fa-plane fa-2x fa-fw\'></i>\nBy plane: Timisoara International Airport is well connected with many of the major cities around Europe and buses/taxis can bring you directly to the city center (15 min)\nCheck the <a href="http://aerotim.ro/">airport website</a></li>\n<li><i class=\'fa fa-automobile fa-2x fa-fw\'></i>\nBy car:</li>\n<li>3 hours drive <a href="https://www.google.lu/maps/dir/Budapest,+Hungary/Nokia+(ex-Alcatel+Lucent),+Bulevardul+Republicii,+Timi%C8%99oara,+Timi%C8%99+County,+Romania/@46.6228373,18.9450191,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4741c334d1d4cfc9:0x400c4290c1e1160!2m2!1d19.040235!2d47.497912!1m5!1m1!1s0x47455d7b2821e4ad:0x9eeb89884ab984db!2m2!1d21.21106!2d45.750903!3e0?hl=en">from Budapest</a></li>\n<li>2:30 hours drive <a href="https://www.google.lu/maps/dir/Belgrade,+Serbia/Nokia+(ex-Alcatel+Lucent),+Bulevardul+Republicii,+Timi%C8%99oara,+Timi%C8%99+County,+Romania/@45.268278,20.1049334,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x475a7aa3d7b53fbd:0x1db8645cf2177ee4!2m2!1d20.4489216!2d44.786568!1m5!1m1!1s0x47455d7b2821e4ad:0x9eeb89884ab984db!2m2!1d21.21106!2d45.750903?hl=en">from Belgrade</a> (no High Speed)</li>\n</ul>\n<div class=\'two spacing\'></div>\n<h2 id="wheretostay">Where to stay</h2>\n<p>Here are some hotels or places to stay close to the venue:</p>\n<ul>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\n<a href="http://iosefinresidence.ro/">Iosefin Residence Timisoara</a></li>\n<li><i class=\'fa fa-hotel fa-2x fa-fw\'></i>\n<a href="http://hoteltimisoara.ro/ro/">Casa Palace Hotel Timisoara</a> is located in the city center and just around the corner.\nYou can book through <a href="http://www.booking.com">Booking</a> or calling them directly.</li>\n<li><i class=\'fa fa-globe fa-2x fa-fw\'></i>\nAirbnb also offers <a href="https://www.airbnb.com/s/Timi%C8%99oara--Timi%C8%99-County--Romania?guests=1&adults=1&children=0&infants=0&place_id=ChIJp7UPy31nRUcRSWeTc2Svf1M&checkin=07%2F14%2F2018&source=bb&page=1&allow_override%5B%5D=&checkout=07%2F16%2F2018&ss_id=u7iwpyhm&s_tag=-4PtH6fC">some rooms</a></li>\n</ul>',
				contactEmail: 'timisoara@play14.org',
				tagline: null,
				publishedAt: 1558720800000,
				updatedAt: 1678736632333,
				defaultImageId: 'file_3262',
				imageIds: [
					'file_3262',
					'file_3261',
					'file_3259',
					'file_3258',
					'file_3260',
					'file_3265',
					'file_3264',
					'file_3257'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 78,
				name: 'Munich 2020',
				slug: 'munich-2020-06',
				start: 1593189000000,
				end: 1593356400000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h3>Disclaimer</h3><h4>VAT</h4><p>At this point in time invoices may not include any German VAT, as we are still in the clarification process for the form of organisation of the event.</p><h4>Cancellation</h4><p>If for some reason, we have to cancel the event, participants will get a full refund. We need a minimum amount of people to make it feasible. We will not be liable for any travel costs incurred by participants if a course is cancelled. Please wait until 1 week before the event to book travel, or contact us to find out the status of a course.</p><p>If a participant wishes to cancel a place, they may do so and receive a full refund minus any transaction fees up until one calendar month before the event. We are able to offer a 50% refund up until 2 weeks before the event. After this period we are unable to offer a refund as we will have committed to costs for the participant’s place.</p><p>If however a participant finds someone else to take their place then we would offer a refund at any time, minus any costs incurred with the transaction.</p><h4>Photography and Video</h4><p>Certain sessions during the event are filmed and recorded. If you do not wish to be included in any footage or photography, please contact us and we will ensure that you are not included. If you do not contact the us, you consent to being filmed and recorded and (hence maybe) included in this and subsequent versions in any and all media, worldwide, without limitation of time. You can contact us: munich@play14.org</p><h4>Contact Details</h4><p>Contact details for participants will be kept strictly private and will be shared only with the organisers.</p><h4>Limitation of liability</h4><p>If we breach the terms of an agreement, or you seek compensation and damages for any claim or claims arising out of any contract between us for whatever reason, your remedy will be limited to damages. Our liability will not exceed the cost of the registration fee received, except in the case of injury or death or any person.</p><p>With the exception of the above paragraph, we shall not be liable to you, regardless of the form of action, whether in contract, tort (including negligence and breach of statutory duty), strict liability, or otherwise whatsoever:</p><ul><li>for any loss of profit, business, contracts or revenues</li><li>for failure to achieve anticipated savings in costs</li><li>for any special, indirect or consequential damage of any nature whatsoever arising directly or indirectly out of the services we offer, or of any error or defect caused by us, UNLESS you inform us in writing before you book a place on each event, of any particular circumstances covered above.</li></ul><p>Each of the foregoing points is to be construed as a separate limitation (applying and surviving even if for any reason one or other of these points is held inapplicable or unreasonable in any circumstances) and shall remain in force notwithstanding termination of any contract between us.</p>',
				contactEmail: 'munich@play14.org',
				tagline: null,
				publishedAt: 1593196200000,
				updatedAt: 1683620384351,
				defaultImageId: 'file_4931',
				imageIds: ['file_4937', 'file_4935', 'file_4936', 'file_4934', 'file_4933', 'file_4932'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together. All times are approximated.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Get together / Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Dinner together'
							},
							{
								time: '20:00:00',
								description: 'Icebreakers / Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Ending the first day'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Buffet'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":596622,"code":222839}'
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 77,
				name: 'Zagreb 2023',
				slug: 'zagreb-2023-03',
				start: 1677859200000,
				end: 1678028400000,
				timezone: 'Europe/Zagreb',
				status: 'Over',
				description: '',
				contactEmail: 'croatia@play14.org',
				tagline: null,
				publishedAt: 1677866400000,
				updatedAt: 1680153366982,
				defaultImageId: 'file_3438',
				imageIds: ['file_3438'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://www.entrio.hr/en/event/play14-zagreb-13209',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 79,
				name: 'Munich 2022',
				slug: 'munich-2022-10',
				start: 1665757800000,
				end: 1665925200000,
				timezone: 'Europe/Berlin',
				status: 'Over',
				description:
					'<h3>Disclaimer</h3><h4>VAT</h4><p>At this point in time invoices may not include any German VAT, as we are still in the clarification process for the form of organisation of the event.</p><h4>Cancellation</h4><p>If for some reason, we have to cancel the event, participants will get a full refund. We need a minimum amount of people to make it feasible. We will not be liable for any travel costs incurred by participants if a course is cancelled. Please wait until 1 week before the event to book travel, or contact us to find out the status of a course.</p><p>If a participant wishes to cancel a place, they may do so and receive a full refund minus any transaction fees up until one calendar month before the event. We are able to offer a 50% refund up until 2 weeks before the event. After this period we are unable to offer a refund as we will have committed to costs for the participant’s place.</p><p>If however a participant finds someone else to take their place then we would offer a refund at any time, minus any costs incurred with the transaction.</p><h4>Photography and Video</h4><p>Certain sessions during the event are filmed and recorded. If you do not wish to be included in any footage or photography, please contact us and we will ensure that you are not included. If you do not contact us, you consent to being filmed and recorded and (hence maybe) included in this and subsequent versions in any and all media, worldwide, without limitation of time. You can contact us: munich@play14.org</p><h4>Contact Details</h4><p>Contact details for participants will be kept strictly private and will be shared only with the organisers.</p><h4>Limitation of liability</h4><p>If we breach the terms of an agreement, or you seek compensation and damages for any claim or claims arising out of any contract between us for whatever reason, your remedy will be limited to damages. Our liability will not exceed the cost of the registration fee received, except in the case of injury or death or any person.</p><p>With the exception of the above paragraph, we shall not be liable to you, regardless of the form of action, whether in contract, tort (including negligence and breach of statutory duty), strict liability, or otherwise whatsoever:</p><ul><li>for any loss of profit, business, contracts or revenues</li><li>for failure to achieve anticipated savings in costs</li><li>for any special, indirect or consequential damage of any nature whatsoever arising directly or indirectly out of the services we offer, or of any error or defect caused by us, UNLESS you inform us in writing before you book a place on each event, of any particular circumstances covered above.</li></ul><p>Each of the foregoing points is to be construed as a separate limitation (applying and surviving even if for any reason one or other of these points is held inapplicable or unreasonable in any circumstances) and shall remain in force notwithstanding termination of any contract between us.</p>',
				contactEmail: 'munich@play14.org',
				tagline: null,
				publishedAt: 1665772200000,
				updatedAt: 1683620345347,
				defaultImageId: 'file_4937',
				imageIds: ['file_4935', 'file_4936', 'file_4934', 'file_4933', 'file_4932', 'file_4931'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together. All times are approximated.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Get together / Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Dinner together'
							},
							{
								time: '20:00:00',
								description: 'Icebreakers / Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Ending the first day'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Buffet'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":869722,"code":222839}'
				},
				sponsorships: [
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://drive.google.com/drive/folders/1HwRHp5Shg7oCdV45DemXy1x1sxIlTNRB',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 56,
				name: 'London 2018',
				slug: 'london-2018-09',
				start: 1536942600000,
				end: 1537110000000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Photos</h2><p><a href="https://photos.app.goo.gl/6KvQfJxXBMaTfhBy7"><img src="https://lh3.googleusercontent.com/DyNKnU7_HujZUBlc9uIQ7xkPQkYDCIGUDr69fBJ99I68R8iRhXgc1bmfa5KoLM5cmj4ocszG2mzRF0OsosRISxRx9s5QfRSsXT0-IWgP3yyh7IJrZ0CLjSA-y6cNtW1PlChd6VVCcRR_Nh82jR5RljL0671zQRvv6Djy-qi5sfaqU_k0heiS9NkkO5h6qKWWIGLsJp77cmyjHXHaGArN7HnzeyGg5Koroz1J04VDkvtI5Jh0WKtXxr57y6ImDD2T2v9-Y5z3hs2ef412HNOZz9a-bkJfKIIRSBnhzUaZVe7ETlI60Zq5fgu5WRE5kPx7W7sNYdGJ4_B5oLJZE6eaQ42NGTORDMwyWS_6DPReSufduLFRyEUwkL_bG4xDnryqEd96YtrWgMMquY1ldkAuF4l585j6dCsZIPni29WOgmdq5fOaEjqxq76X0mrtkD9zkT370MYwfaPApaLHpIkNvh0diNz8UNtXsEwUEx9Bu0esUIX0XwAKrz2zgx0RbF15AoF1wLyQ0Vflyu9VOCsx2ACtjMpKL8Ks4lT9K_mD5GolLy5wPGQPvRh0AHnzj4_RltjenDJ9DcsA3omAPBZe69u8A-YPb_GOatC0O0TmOg3e9Uo5hANBz7Ky9n58s7OmIrD2gkwkJSfaRDpZfN8SaLG9Wjbe_4UKriuxHK4Loz7hJj-J0jaOsM4oKA=w1920-h1080-no"></a></p>',
				contactEmail: 'london@play14.org',
				tagline: null,
				publishedAt: 1536949800000,
				updatedAt: 1683631319566,
				defaultImageId: 'file_4963',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":335769,"code":1386}'
				},
				sponsorships: [
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/6KvQfJxXBMaTfhBy7',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 16,
				name: 'Prague 2020',
				slug: 'prague-2020-03',
				start: 1585330200000,
				end: 1585494000000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="description">DESCRIPTION</h2>\n<p>&#x23;play14 is an informal, serious games gathering following Open Space unconference format.\nTogether we’ll explore games and playful approaches to coach teams, organizations… or just to have fun.</p>\n<p>&#x23;play14 is playful with a purpose: Coaches, facilitators, trainers, game and innovation experts find an open playground to inspire each other and co-create transformative experiences. We gather to grow individually and as a community.</p>\n<p>Never heard about Serious games? They are gamified simulations of real-life problems, and playing them is a great way to learn and understand. Good and widespread examples of such games are Lego Scrum and Kanban pizza. Common themes are people motivation, self-organization or process inefficiency.</p>\n<p>2020 is going to be the first time this event is being organized in the Czech Republic.</p>\n<p>Have a quick glance at previous events (10min)</p>\n<ul>\n<li><a href="https://youtu.be/Pwhjr0Y82f4">&#x23;play14 Madrid Interviews</a></li>\n<li><a href="https://youtu.be/86DrKsf6uvk">&#x23;play14 London highlights</a></li>\n</ul>\n<p>Or explore the Play14 website for even more info.</p>',
				contactEmail: 'prague@play14.org',
				tagline: null,
				publishedAt: 1585333800000,
				updatedAt: 1678736642289,
				defaultImageId: 'file_3347',
				imageIds: ['file_3347', 'file_3338'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":77626485909}'
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 35,
				name: 'Madrid 2022',
				slug: 'madrid-2022-06',
				start: 1654273800000,
				end: 1654432200000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2>Registration</h2><p>&nbsp;</p><p><a href="https://weezevent.com/?c=sys_widget">Weezevent</a></p><h2>Videos 2018</h2><h2>Articles 2018</h2><h3>Articles in English</h3><ul><li><a href="https://www.linkedin.com/feed/update/activity:6409872598234128385/">Jesus Hijas</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409292460110991360/">Alan McShane</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409172561493663744">Marcos Fargas</a></li><li><a href="https://www.linkedin.com/feed/update/urn:li:activity:6408917761933799424">Ricardo Fernandes</a></li></ul><h3>Articles in Spanish</h3><ul><li><a href="https://www.linkedin.com/comm/feed/update/activity:6409152518819053568">Marta Gomáriz González</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409113417772261376">Raquel Pedrouso</a></li></ul>',
				contactEmail: 'madrid@play14.org',
				tagline: null,
				publishedAt: 1654281000000,
				updatedAt: 1683629158650,
				defaultImageId: 'file_4938',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Warm welcome & mingle',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Official welcome + Ice Breakers'
							},
							{
								time: '22:30:00',
								description: 'Closing'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '13:30:00',
								description: 'Lunch + mini-siesta (optional)'
							},
							{
								time: '14:30:00',
								description: 'Sessions'
							},
							{
								time: '17:30:00',
								description: 'Silent retrospective'
							},
							{
								time: '18:00:00',
								description: 'Preparation Dinner Hunting'
							},
							{
								time: '19:30:00',
								description: 'Surprise Dinner'
							},
							{
								time: '21:30:00',
								description: 'End of evening'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '12:00:00',
								description: 'Brunch'
							},
							{
								time: '13:00:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Retrospective'
							},
							{
								time: '14:30:00',
								description: 'Cleanup & Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":"E829142","code":48713}'
				},
				sponsorships: [
					{
						category: 'Local sponsor',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 103,
				name: 'Aveiro 2025',
				slug: 'aveiro-2025-10',
				start: 1760623200000,
				end: 1760794200000,
				timezone: 'Europe/Lisbon',
				status: 'Open',
				description:
					'<p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="229" data-end="425">🎲 <strong data-start="232" data-end="278">#play14 Aveiro — Where Play Meets Purpose!</strong><br>📍 <em data-start="284" data-end="323"><i>Fábrica Centro Ciência Viva de Aveiro</i></em><br>📅 <em data-start="329" data-end="349"><i>16–18 October 2025</i></em><br>🧪 <em data-start="355" data-end="421"><i>This year’s theme? Let’s just say... science will be in the air.</i></em> 👀✨</p><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="427" data-end="708"><strong data-start="427" data-end="438">#play14</strong> is more than just an event — it\'s a <strong data-start="475" data-end="495">global community</strong> of coaches, facilitators, educators, consultants, researchers, makers, and artists. We gather for <strong data-start="594" data-end="633">two and a half days of serious play</strong> to share, learn, and co-create using serious games and playful techniques.</p><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="710" data-end="925">We’re cooking up something special this year — and yes, it involves a spark of science, a splash of surprise, and a whole lot of curiosity. 🚀🧬🔍</p><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="605" data-end="676">Why? Because we deeply believe:<br>🎉 <strong data-start="642" data-end="676">Play is the best way to learn.</strong></p><hr><h2 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="683" data-end="705">👀 Who is this for?</h2><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="707" data-end="772">If any of the following speaks to you, you\'re in the right place:</p><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="774" data-end="1092">✔️ You\'re passionate about learning and human development<br>✔️ You’re curious about serious games and playful facilitation<br>✔️ You want to connect with an open, vibrant community<br>✔️ You\'re a facilitator looking for new methods and fresh inspiration<br>✔️ You crave spaces where creativity and authenticity come first</p><hr><h2 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1099" data-end="1127">📚 What will you explore?</h2><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1129" data-end="1219">Expect hands-on sessions, co-created learning, and tons of creative sparks on topics like:</p><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1221" data-end="1433">🎯 Facilitation techniques<br>🌱 Innovation and creative problem-solving<br>🔁 Change management and transformation<br>😊 Organizational happiness and healthy team culture<br>... and whatever magic we build together!</p><hr><h2 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1440" data-end="1462">💸 What’s the cost?</h2><p class="p1">We have two ticket options:</p><ul><li><p class="p1"><strong>Full Ticket (with accommodation):</strong><span class="s1"> 433 EUR/person (VAT included)</span></p></li></ul><p class="p1" style="margin-left:40px;">Includes:<br>🍽️ All meals listed in the event agenda<br>🛏️ Accommodation (yes, that’s included too!)<br>⚙️ All event materials and resources</p><ul><li><p class="p1"><span class="s1"><strong>Ticket without accommodation:</strong></span> 320 EUR/person (VAT included)</p></li></ul><p class="p1"><em data-start="1675" data-end="1700"><i>Travel is not included.</i></em></p><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1702" data-end="1859"><strong data-start="1702" data-end="1711">Note:</strong> #play14 is a non-profit event. All ticket revenue goes directly into making the event happen — no fluff, just people-powered learning.</p><hr><h2 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1866" data-end="1888">📅 How to register?</h2><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1890" data-end="1976">👉 Click “Book Now” &nbsp;and fill in the <strong data-start="1926" data-end="1947">registration form</strong> until<strong> </strong>the<strong> 3rd</strong><strong data-start="1951" data-end="1975"> of October 2025</strong>.</p><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="1978" data-end="2055">⚠️ This edition is limited to just <strong data-start="2013" data-end="2032">40 participants</strong>, so don’t sleep on it!</p><hr><h2 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2062" data-end="2080">❓Got questions?</h2><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2082" data-end="2144">We’re happy to help — email us anytime at <a class="cursor-pointer" data-start="2126" data-end="2142" rel="noopener"><strong data-start="2124" data-end="2144">porto@play14.org</strong></a></p><hr><h2 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2151" data-end="2176">🧭 How do I get there?</h2><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2178" data-end="2368"><strong data-start="2178" data-end="2196">Venue Address:</strong><br>Fábrica Centro Ciência Viva de Aveiro<br>Rua dos Santos Mártires, 1A<br>3810-164 Aveiro, Portugal<br>📞 <a href="tel:+351 234 427 053">+351 234 427 053</a><br>🌐 <a class="cursor-pointer" data-start="2322" data-end="2368" rel="noopener" target="_new">www.ua.pt/fabrica</a></p><h3 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2370" data-end="2385">🚆 By Train</h3><ul style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2387" data-end="2981"><li data-start="2387" data-end="2512"><p data-start="2389" data-end="2406"><strong data-start="2389" data-end="2404">From Porto:</strong><br>Take a train from Porto\'s Campanhã Station to Aveiro Station. The journey takes approximately 1 hour.</p></li><li data-start="2513" data-end="2660"><p data-start="2515" data-end="2533"><strong data-start="2515" data-end="2531">From Lisbon:</strong><br>Take a train from Lisbon\'s Santa Apolónia or Oriente Station to Aveiro Station. The journey takes approximately 2.5 hours.</p></li><li data-start="2661" data-end="2981"><p data-start="2663" data-end="2702"><strong data-start="2663" data-end="2700">From Aveiro Station to the venue:</strong><br>Exit the station and head towards Rua da Liberdade. Turn left and walk straight until you reach the roundabout. Take the second exit onto Avenida Doutor Lourenço Peixinho. Continue for about 1 km, then turn right onto Rua dos Santos Mártires. The venue will be on your left.</p></li></ul><h3 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2983" data-end="2996">🚌 By Bus</h3><ul style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="2998" data-end="3363"><li data-start="2998" data-end="3115"><p data-start="3000" data-end="3027"><strong data-start="3000" data-end="3025">From Porto or Lisbon:</strong><br>Several bus companies operate routes to Aveiro. Check local listings for schedules.</p></li><li data-start="3116" data-end="3363"><p data-start="3118" data-end="3162"><strong data-start="3118" data-end="3160">From Aveiro Bus Terminal to the venue:</strong><br>The terminal is approximately 2 km from the venue. You can take a local bus (Lines 1 or 4) to the \'Santos Mártires\' stop, which is near the venue. Alternatively, a taxi ride takes about 5 minutes.</p></li></ul><h3 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="3365" data-end="3380">✈️ By Plane</h3><ul style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="3382" data-end="3608"><li data-start="3382" data-end="3497"><p data-start="3384" data-end="3433"><strong data-start="3384" data-end="3431">From Porto Airport (Francisco Sá Carneiro):</strong><br>Take the metro to Campanhã Station, then a train to Aveiro.</p></li><li data-start="3498" data-end="3608"><p data-start="3500" data-end="3545"><strong data-start="3500" data-end="3543">From Lisbon Airport (Humberto Delgado):</strong><br>Take the metro to Oriente Station, then a train to Aveiro.</p></li></ul><h3 style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="3610" data-end="3623">🚗 By Car</h3><ul style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="3625" data-end="3881"><li data-start="3625" data-end="3752"><p data-start="3627" data-end="3644"><strong data-start="3627" data-end="3642">From Porto:</strong><br>Drive south on the A1 motorway, then take the A25 exit towards Aveiro. Follow signs to the city center.</p></li><li data-start="3753" data-end="3881"><p data-start="3755" data-end="3773"><strong data-start="3755" data-end="3771">From Lisbon:</strong><br>Drive north on the A1 motorway, then take the A25 exit towards Aveiro. Follow signs to the city center.</p></li></ul><p style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;" data-start="3883" data-end="3946">Parking is available near the venue, but availability may vary.</p>',
				contactEmail: 'porto@play14.org',
				tagline: null,
				publishedAt: 1748610531809,
				updatedAt: 1753165259881,
				defaultImageId: 'file_5337',
				imageIds: [
					'file_5495',
					'file_5496',
					'file_5498',
					'file_5497',
					'file_5499',
					'file_5500',
					'file_5501'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '20:30:00',
								description: 'Dinner'
							},
							{
								time: '22:00:00',
								description: 'Bar party'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Game'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious Games'
							},
							{
								time: '18:30:00',
								description: 'Retrospective'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Pizza'
							},
							{
								time: '22:00:00',
								description: 'Bar'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Warmups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious Game'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious Game'
							},
							{
								time: '16:00:00',
								description: 'Retrospective '
							},
							{
								time: '17:00:00',
								description: 'Time to say goodbye'
							}
						]
					}
				],
				registration: {
					link: 'https://widget.weezevent.com/ticket/E1359387/?code=44525&locale=en-GB&width_auto=1&color_primary=00AEEF',
					widgetCode:
						'<a title="Online ticketing"\n   href="https://weezevent.com/?c=sys_widget"\n   class="weezevent-widget-integration"\n   data-src="https://widget.weezevent.com/ticket/E1359387/?code=44525&locale=en-GB&width_auto=1&color_primary=00AEEF"\n   data-width="650"\n   data-height="600"\n   data-id="1094575"\n   data-resize="1"\n   data-width_auto="1"\n   data-noscroll="0"\n   data-use-container="yes"\n   data-type="neo"\n   target="_blank">Tickets</a>\n'
				},
				sponsorships: [
					{
						category: 'Host Support',
						sponsorIds: []
					},
					{
						category: 'Logistic Supporting',
						sponsorIds: []
					},
					{
						category: 'Venue',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 36,
				name: 'Luxembourg 2014',
				slug: 'luxembourg-2014-03',
				start: 1394818200000,
				end: 1394985600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="description">Description</h2>\n<p>The very first installment of <strong>&#x23;play14 Luxembourg</strong> was a big success.<br />\nMany thanks to all the participants.</p>\n<h2 id="pictures">Pictures</h2>\n<p>Take a look at some of the <a href="https://goo.gl/photos/1oik1fXUA4JuywC46">pictures</a>{:target="_blank"}</p>\n<p><a href=\'https://goo.gl/photos/1oik1fXUA4JuywC46\' target="_blank">\n  <img src=\'https://lh3.googleusercontent.com/C2qitewYozeib_JP2Yqv4TQ_uLeT3JeV2TsqbOiNHug9G0p3nPioGe_sLYYYeOZIOUxFjqxsHv6XeaQRTGBuSCFGnLSiQaFf3JNhqpW8wSc_8Fw_wn96P17oOxIbBNqP5SI7GA\' />\n</a></p>\n<h2 id="videos">Videos</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL6VQoC829PV1Jt7perWHR0YaIGvcxzove" frameborder="0" allowfullscreen></iframe>',
				contactEmail: 'team@play14.org',
				tagline: null,
				publishedAt: 1394821800000,
				updatedAt: 1678736611188,
				defaultImageId: 'file_3482',
				imageIds: ['file_3482', 'file_3481', 'file_3489', 'file_3173'],
				locationId: null,
				venueId: null,
				timetable: [],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Gold Sponsor',
						sponsorIds: []
					},
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://goo.gl/photos/1oik1fXUA4JuywC46',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/watch?list=PL6VQoC829PV1Jt7perWHR0YaIGvcxzove&v=Cvuk3DlJtoQ',
						type: 'Videos'
					}
				],
				finance: null
			},
			{
				_strapiId: 15,
				name: 'Hamburg 2019',
				slug: 'hamburg-2019-09',
				start: 1568392200000,
				end: 1568559600000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<h2 id="wheretostay">Where to stay?</h2>\n<h3 id="thefollowinglinksareforyourconveniencewearenotaffiliatedwithbookingcomnorairbnbinanyway">The following links are for your convenience, we are not affiliated with Booking.com nor AirBnB in any way</h3>\n<ul>\n<li><i class=\'fa fa-fw\'></i>\nHotels in the area : <a href="http://bit.ly/2XPFpp0">via Booking.com</a></li>\n<li><i class=\'fa fa-fw\'></i>\nRooms/Appartements in the area <a href="http://bit.ly/2O3ZyTI">via AirBnB</a></li>\n</ul>',
				contactEmail: 'hamburg@play14.org',
				tagline: null,
				publishedAt: 1568399400000,
				updatedAt: 1678736640123,
				defaultImageId: 'file_3322',
				imageIds: ['file_3324', 'file_3329', 'file_3339', 'file_3322', 'file_3323'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together. All times are approximated.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Get together / Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Dinner together'
							},
							{
								time: '20:00:00',
								description: 'Icebreakers / Game(s) all together'
							},
							{
								time: '22:00:00',
								description: 'Ending the first day'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Dinner / Buffet'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier. All times are approximated.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"weezevent","eventid":457003,"code":172583}'
				},
				sponsorships: [
					{
						category: 'Venue',
						sponsorIds: []
					},
					{
						category: 'Our local sponsors',
						sponsorIds: []
					},
					{
						category: 'Our global sponsors',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/iyoNJUbYwdoHKPKMA',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 62,
				name: 'Madrid 2019',
				slug: 'madrid-2019-05',
				start: 1559311200000,
				end: 1559480400000,
				timezone: 'UTC',
				status: 'Over',
				description:
					'<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/podcast_658b83d581.jpg" alt="podcast.jpg" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_podcast_658b83d581.jpg 245w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_podcast_658b83d581.jpg 500w," sizes="100vw"></p><h2>Please note that the location is different on Friday at 16h30</h2><p>Meeting at <strong>Templo de Debod, Calle de Ferraz 1, 28008 Madrid</strong> for a warm welcome and some playful outdoor games!</p><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/templo_de_debod_3fb75dbac3.jpg" alt="Templo de Debod"></p><h2>Videos 2018</h2><h2>Articles 2018</h2><h3>Articles in English</h3><ul><li><a href="https://www.linkedin.com/feed/update/activity:6409872598234128385/">Jesus Hijas</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409292460110991360/">Alan McShane</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409172561493663744">Marcos Fargas</a></li><li><a href="https://www.linkedin.com/feed/update/urn:li:activity:6408917761933799424">Ricardo Fernandes</a></li></ul><h3>Articles in Spanish</h3><ul><li><a href="https://www.linkedin.com/comm/feed/update/activity:6409152518819053568">Marta Gomáriz González</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409113417772261376">Raquel Pedrouso</a></li></ul>',
				contactEmail: 'madrid@play14.org',
				tagline: null,
				publishedAt: 1559318400000,
				updatedAt: 1683631269820,
				defaultImageId: 'file_4971',
				imageIds: ['file_4971', 'file_4970', 'file_4969'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Warm welcome & mingle',
						timeslots: [
							{
								time: '16:30:00',
								description: 'Check-in / Register'
							},
							{
								time: '17:00:00',
								description: 'Official welcome + Ice Breakers'
							},
							{
								time: '17:30:00',
								description: 'Spreading playfulness'
							},
							{
								time: '18:30:00',
								description: 'Bus pick-up & activity debriefing'
							},
							{
								time: '19:00:00',
								description: 'Drop off & cocktail'
							},
							{
								time: '19:15:00',
								description: 'Play + Meet & Greet with Arie Van Bennekum'
							},
							{
								time: '20:30:00',
								description: 'Closing'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '13:30:00',
								description: 'Lunch + mini-siesta (optional)'
							},
							{
								time: '14:30:00',
								description: 'Sessions'
							},
							{
								time: '17:30:00',
								description: 'Silent retrospective'
							},
							{
								time: '18:00:00',
								description: 'Preparation Dinner Hunting'
							},
							{
								time: '19:30:00',
								description: 'Surprise Dinner'
							},
							{
								time: '21:30:00',
								description: 'End of evening'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '12:00:00',
								description: 'Brunch'
							},
							{
								time: '13:00:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Retrospective'
							},
							{
								time: '14:30:00',
								description: 'Cleanup & Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: '{"type":"eventbrite","eventid":60002844122}'
				},
				sponsorships: [
					{
						category: 'Local sponsor',
						sponsorIds: []
					},
					{
						category: 'Goodies',
						sponsorIds: []
					},
					{
						category: 'Catering',
						sponsorIds: []
					},
					{
						category: 'Video',
						sponsorIds: []
					}
				],
				media: [
					{
						url: 'https://photos.app.goo.gl/CBUkFJKnQSZPCTzj8',
						type: 'Photos'
					},
					{
						url: 'https://www.youtube.com/playlist?list=PL6VQoC829PV1uKzJNs66ozu5xuracC4c_',
						type: 'Videos'
					},
					{
						url: 'https://photos.app.goo.gl/PNLSQgCRcBFgJaLA8',
						type: 'Photos'
					}
				],
				finance: null
			},
			{
				_strapiId: 110,
				name: 'Singapore 2025',
				slug: 'singapore-2025-10',
				start: 1760688000000,
				end: 1760860800000,
				timezone: 'Singapore',
				status: 'Announced',
				description:
					'<figure class="image"><img style="aspect-ratio:2155/1614;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Play14_SG_logo_for_white_backgrd_12c93e5040.PNG" alt="Play14 SG logo for white backgrd.PNG" width="2155" height="1614"></figure><p class="p1">&nbsp;</p><p class="p1"><strong>#play14 Singapore 2025:</strong></p><p class="p1"><strong>Asia’s Go-To Unconference on Serious Games for Top Trainers, HR, L&amp;D Leaders, Agile Coaches &amp; Facilitators</strong></p><p class="p1">&nbsp;</p><p class="p3"><strong>Step Into the Power of Play</strong></p><p class="p3">After a phenomenal debut in 2024, #play14 Singapore returns, promising an even more exhilarating experience.</p><p class="p3">Last year, nearly <i><strong>100 professionals from nine APAC countries</strong></i> — including India, Maldives, Hong Kong, Japan, Thailand, Malaysia, the Philippines, Singapore, and Australia — gathered to explore and immerse in the transformative potential of serious play. Over 2.5 days, players facilitated and participated in <i><strong>more than 80 games</strong></i> across six concurrent breakout spaces, fostering a vibrant exchange of ideas and practices.</p><p class="p3"><strong>New to #play14?</strong><br>#play14 is a global non-profit movement of play practitioners, designers and enthusiasts who believe that <i><strong>play(fulness) is the best way to learn, share, collaborate and create</strong></i>.</p><p class="p3">Since its inception in Luxembourg in 2014, #play14 has engaged over 2,500 players in 35 cities across 20 countries. Celebrating its 11th year in 2025, #play14 continues to inspire professionals worldwide to harness the power of play in their work.</p><p class="p4">&nbsp;</p><p class="p3"><strong>Why Attend #play14 Singapore 2025?</strong></p><ul class="ul1"><li class="li3"><strong>Unconference Format</strong>: Embrace the open space technology where players co-create the agenda each morning, ensuring dynamic and spontaneous interactions.</li><li class="li3"><strong>Diverse Participation</strong>: Connect with professionals from various backgrounds — game designers, trainers, facilitators, agile coaches, educators, HR, and L&amp;D experts from across APAC, all in one place.</li><li class="li3"><strong>Immersive Learn-by-Playing</strong>: Engage in physical games and play experiences that you can adapt and apply in your professional context.</li><li class="li3"><strong>Innovative Ideas</strong>: Discover new activities and variations to invigorate your meetings, training sessions and team-building exercises.</li><li class="li3"><strong>Collaborative Learning</strong>: Test and refine your ideas and facilitation techniques in a safe environment with open-minded peers ready to provide constructive feedback.</li><li class="li3"><strong>Play with Purpose</strong>: Support playful childhoods through our adopted charity partner Playeum — every ticket helps “play it forward” in more ways than one, so you know you are doing good while learning and having fun.</li></ul><p class="p3"><strong>Who Should Join?</strong></p><ul class="ul1"><li class="li3"><strong>HR and L&amp;D Professionals</strong>: Seeking innovative methods to enhance engagement and learning within their organisations.</li><li class="li3"><strong>Educators and Trainers</strong>: Looking to incorporate playful techniques to enrich the learning experience.</li><li class="li3"><strong>Agile Coaches and Facilitators</strong>: Aiming to foster collaboration and creativity through serious games.</li><li class="li3"><strong>Anyone Serious/Curious/Enthusiastic About Play</strong>: Eager to explore the intersection of play and professional development.</li></ul><p class="p3"><br><strong>Be part of a community that\'s redefining the way we work, learn, and connect.</strong></p><p class="p3">Join us in Singapore this October 2025 for an unforgettable journey into the world of serious play.</p><p class="p3"><span class="s2">🎟️</span><strong> Limited tickets available. </strong>Join our LinkedIn community page to get first dibs when tickets go on sale!</p><p class="p6"><span class="s3">💼</span><span class="s4"> </span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/play14-singapore"><span class="s4 s5">#play14 Singapore LinkedIn page</span></a></p><p class="p6"><span class="s3">🌐</span><span class="s4"> </span><a target="_blank" rel="noopener noreferrer" href="https://play14.org"><span class="s4 s5">Global site</span></a></p><p class="p7"><span class="s3">🌐</span><span class="s4"> Singapore event page: </span><a target="_blank" rel="noopener noreferrer" href="https://play14.org/events/singapore-2025-10"><span class="s4">https://play14.org/events/singapore-2025-10</span></a><br>&nbsp;</p><p><i><strong>In support of Playeum (registered charity partner)</strong></i></p><hr><figure class="image image_resized" style="width:74.46%;"><img style="aspect-ratio:2567/1939;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Logo_Playeum_Pink_0d1b193cc9.png" alt="playeum" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_Logo_Playeum_Pink_0d1b193cc9.png 207w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_Logo_Playeum_Pink_0d1b193cc9.png 500w,https://play14-cdn.azureedge.net/strapi-uploads/assets/medium_Logo_Playeum_Pink_0d1b193cc9.png 750w,https://play14-cdn.azureedge.net/strapi-uploads/assets/large_Logo_Playeum_Pink_0d1b193cc9.png 1000w," sizes="100vw" width="2567" height="1939"></figure><p>Founded in 2009, Playeum was established in 2013 as a registered charity dedicated to using play and the arts to create equitable opportunities for learning, voice, and agency for every child in Singapore. Its vision is that one day, all children in Singapore, regardless of their differences and backgrounds, will be able to thrive as the best versions of themselves. It collaborates with partners with a shared vision, and connect with various sectors in society to create structural change for equitable outcomes through community- and family-centric programmes, teacher training, research, and advocacy.</p><hr><p>&nbsp;</p>',
				contactEmail: 'singapore@play14.org',
				tagline: null,
				publishedAt: 1748689184967,
				updatedAt: 1749448516643,
				defaultImageId: 'file_5486',
				imageIds: [
					'file_5484',
					'file_5481',
					'file_5474',
					'file_5482',
					'file_5472',
					'file_5479',
					'file_5473',
					'file_5470',
					'file_5480',
					'file_5485',
					'file_5478',
					'file_5471',
					'file_5475',
					'file_5477',
					'file_5483',
					'file_5476'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'The 2025 edition will open with reuniting with old friends and getting to know new ones over a sumptuous dinner and mass games.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Welcome & Ice-Breakers'
							},
							{
								time: '18:30:00',
								description: 'Dinner, Drinks & Mingle'
							},
							{
								time: '19:30:00',
								description: 'Introduction: The Marketplace'
							},
							{
								time: '20:00:00',
								description: "Orientation: Let's Play!"
							},
							{
								time: '21:00:00',
								description: 'End of Day 1'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with The Marketplace, and from then, we will play all day long!',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Energisers'
							},
							{
								time: '10:00:00',
								description: 'The Marketplace'
							},
							{
								time: '10:30:00',
								description: "Let's Play!"
							},
							{
								time: '13:00:00',
								description: 'Lunch '
							},
							{
								time: '14:00:00',
								description: "Let's Play!"
							},
							{
								time: '17:30:00',
								description: 'Retrospective'
							},
							{
								time: '18:00:00',
								description: 'Chill & Chat Networking Dinner'
							},
							{
								time: '20:00:00',
								description: 'End of Day 2'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							"We'll co-create the day's programme through the Marketplace again. For those who have a flight to catch, you may leave earlier. Otherwise, we encourage everyone to play till the event closes.",
						timeslots: [
							{
								time: '09:00:00',
								description: 'Light Breakfast'
							},
							{
								time: '09:30:00',
								description: 'Energisers'
							},
							{
								time: '10:00:00',
								description: 'The Marketplace'
							},
							{
								time: '10:30:00',
								description: "Let's Play!"
							},
							{
								time: '13:00:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: "Let's Play!"
							},
							{
								time: '17:30:00',
								description: 'Final Retrospective'
							},
							{
								time: '18:00:00',
								description: 'End of Day 3 & Clean-Up'
							}
						]
					}
				],
				registration: null,
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 105,
				name: 'Vienna 2025',
				slug: 'vienna-2025-09',
				start: 1758891600000,
				end: 1759053600000,
				timezone: 'Europe/Vienna',
				status: 'Open',
				description:
					'<p><video class="video" controls="" width="500px">\n                <source src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Play14_2024_Warming_Up_50281af191.mp4" type="video/mp4">\n            </video></p><p class="p1" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><strong>🎲 #Play14 Vienna 2025 – The Power of Play is Back! 🎲</strong></p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">The global <span class="s1"><strong>#Play14</strong></span> community returns to Vienna for the third time! Join us for a dynamic <span class="s1"><strong>Open Space</strong></span> event dedicated to <span class="s1"><strong>Gamification, Creativity, and Collaboration</strong></span>. Get ready for a weekend filled with <span class="s1"><strong>experimentation, learning, and fun!</strong></span></p><p class="p1" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><br><strong>Why Join?</strong></p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">Playful approaches are essential for topics like <span class="s1"><strong>organizational development, innovation, leadership, teamwork, and collaboration</strong></span>. #Play14 events bring together people from diverse backgrounds to share, learn, and co-create through <span class="s1"><strong>serious games and interactive experiences</strong></span>.</p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">Whether you’re a <span class="s1"><strong>facilitator, coach, educator, team leader, or just passionate about the power of play</strong></span>, you’re welcome to contribute and connect in this unique environment.</p><p class="p1" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><br><strong>📅 Event Schedule</strong></p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">🕔 <span class="s1"><strong>Friday, Sept 26</strong></span> – Kickoff at 17:00 (Open Space, Dinner &amp; Fun until 22:00)</p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">⏰ <span class="s1"><strong>Saturday, Sept 27</strong></span> – Open Space 9:00 - 18:00, Dinner 18:00 - 19:30, followed by DJ, Music &amp; Dance until 22:00</p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">⏳ <span class="s1"><strong>Sunday, Sept 28</strong></span> – Open Space 9:00 - 14:00</p><p class="p4" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span class="s2">📍 </span><strong>Vienna, Austria</strong></p><p class="p2" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">&nbsp;</p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">Want to <span class="s1"><strong>sponsor</strong></span> or get involved? Contact the organizers!</p><p class="p3" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;">🔗 Learn more about #Play14 and its global community: <a target="_blank" rel="noopener noreferrer" href="https://play14.org/">https://play14.org</a></p><p class="p4" style="-webkit-text-stroke-width:0px;caret-color:rgb(0, 0, 0);color:rgb(0, 0, 0);font-style:normal;font-variant-caps:normal;font-weight:400;letter-spacing:normal;orphans:auto;text-align:start;text-decoration:none;text-indent:0px;text-transform:none;white-space:normal;widows:auto;word-spacing:0px;"><span class="s2">Join us and experience how </span><strong>play transforms learning, collaboration, and innovation!</strong><span class="s2"> 🚀🎭</span></p>',
				contactEmail: 'hey@michaellaussegger.com',
				tagline: null,
				publishedAt: 1740520368476,
				updatedAt: 1742405933195,
				defaultImageId: 'file_5136',
				imageIds: [
					'file_5390',
					'file_5389',
					'file_5388',
					'file_5384',
					'file_5385',
					'file_5386',
					'file_5387',
					'file_5383',
					'file_5382',
					'file_5381',
					'file_5380',
					'file_5135',
					'file_5134',
					'file_5133',
					'file_5132'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Event Kickoff at 17:00 (Open Space, Dinner and Fun until 22:00)',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Kickoff'
							},
							{
								time: '18:00:00',
								description: 'Dinner & Fun'
							},
							{
								time: '22:00:00',
								description: 'End'
							}
						]
					},
					{
						day: 'Saturday',
						description: 'Open Space 9:00 - 18:00, Dinner 18:00 - 19:30, DJ & Music & Dance -22:00',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Open Space'
							},
							{
								time: '18:00:00',
								description: 'Dinner'
							},
							{
								time: '19:30:00',
								description: 'DJ Music & Dance'
							},
							{
								time: '22:00:00',
								description: 'End'
							}
						]
					},
					{
						day: 'Sunday',
						description: 'Open Space 9:00 - 14:00',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Open Space'
							},
							{
								time: '14:00:00',
								description: 'End'
							}
						]
					}
				],
				registration: {
					link: 'https://book.stripe.com/00g5lkene5zpeJidQR',
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 20,
				name: 'Madrid 2020',
				slug: 'madrid-2020-05',
				start: 1590933600000,
				end: 1591102800000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2>Videos 2018</h2><h2>Articles 2018</h2><h3>Articles in English</h3><ul><li><a href="https://www.linkedin.com/feed/update/activity:6409872598234128385/">Jesus Hijas</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409292460110991360/">Alan McShane</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409172561493663744">Marcos Fargas</a></li><li><a href="https://www.linkedin.com/feed/update/urn:li:activity:6408917761933799424">Ricardo Fernandes</a></li></ul><h3>Articles in Spanish</h3><ul><li><a href="https://www.linkedin.com/comm/feed/update/activity:6409152518819053568">Marta Gomáriz González</a></li><li><a href="https://www.linkedin.com/feed/update/activity:6409113417772261376">Raquel Pedrouso</a></li></ul>',
				contactEmail: 'madrid@play14.org',
				tagline: null,
				publishedAt: 1590940800000,
				updatedAt: 1683629196853,
				defaultImageId: 'file_4938',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description: 'Warm welcome & mingle',
						timeslots: [
							{
								time: '17:00:00',
								description: 'Official welcome + Ice Breakers'
							},
							{
								time: '20:30:00',
								description: 'Closing'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '09:00:00',
								description: 'Breakfast'
							},
							{
								time: '10:00:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '13:30:00',
								description: 'Lunch + mini-siesta (optional)'
							},
							{
								time: '14:30:00',
								description: 'Sessions'
							},
							{
								time: '17:30:00',
								description: 'Silent retrospective'
							},
							{
								time: '18:00:00',
								description: 'Preparation Dinner Hunting'
							},
							{
								time: '19:30:00',
								description: 'Surprise Dinner'
							},
							{
								time: '21:30:00',
								description: 'End of evening'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for more games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '09:30:00',
								description: 'Warm-up'
							},
							{
								time: '10:30:00',
								description: 'Marketplace'
							},
							{
								time: '11:00:00',
								description: 'Sessions'
							},
							{
								time: '12:00:00',
								description: 'Brunch'
							},
							{
								time: '13:00:00',
								description: 'Sessions'
							},
							{
								time: '14:00:00',
								description: 'Retrospective'
							},
							{
								time: '14:30:00',
								description: 'Cleanup & Farewell'
							}
						]
					}
				],
				registration: {
					link: null,
					widgetCode: null
				},
				sponsorships: [],
				media: [],
				finance: null
			},
			{
				_strapiId: 65,
				name: 'Bologna 2020',
				slug: 'bologna-2020-06',
				start: 1591286400000,
				end: 1591455600000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<p><strong>Check our site <a href="http://www.play14.it/">in Italian</a></strong></p>\n<h2 id="agilerelaodedscarpoolkaraoke">Agile Relaoded\'s carpool karaoke</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/KzBBDAQMWKA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h2 id="description">Description</h2>\n<p>If you are interested in having more detail, you can find a reportage (in italian) of the <a href="http://www.mokabyte.it/2014/04/play14/">2014 edition in Luxembourg</a>\nand of the <a href="http://www.mokabyte.it/2015/04/play14-2015/">2015 edition in Luxembourg</a>.<br />\nYou can also find a <a href="http://www.mokabyte.it/2016/05/play14milano/">reportage</a> of the 2016 edition in Milano.</p>\n<p>Check out the summary video of <a href="/events/milano/2016-05">&#x23;play14 Milano 2016</a> by <a href="/players/christina-ohanian">Christina Ohanian</a></p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/7bRJPQMY-R0" frameborder="0" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h2 id="friendsofx23play14">Friends of &#x23;play14</h2>\n<p>&#x23;play14 is an unconference: the programme will be defined by the participants who are free to sumbmit contents and to decide the schedule.\nWhile remaining faithful to the unconference format, again for the Milan 2017 edition we will be emphasising the <strong>“cultural contamination”</strong> concept. Therefore, we have invited people with different backgrounds and skills, who share a strong interest in gaming as a business tool.\nWe created the <strong>&#x23;play14 Friends programme</strong> in order to involve trainers, coaches, agile coaches, scrum masters and all kinds of agilists, psychotherapists, UX experts, improvisational theatre actors, musician and so on.</p>\n<div class=\'full\'>\n  <div class=\'row\'>\n    <div class=\'mod modMasonryGallery\'>\n      <div class=\'gallery-nav\'>\n        <ul>\n          <li class=\'current\'>\n            <a data-cat=\'all\' href=\'#\'>All</a>\n          </li>\n          {% assign yearGroups = page.friends | group_by:\'year\' %}\n          {% for yearGroup in yearGroups %}\n            <li>\n              <a data-cat=\'{{yearGroup.name}}\' href=\'#\'>{{yearGroup.name}}</a>\n            </li>\n          {% endfor %}\n        </ul>\n      </div>\n\n      <ul class=\'gallery large-block-grid-4 medium-block-grid-3 seperated small-block-grid-2\'>\n        {% for friend in page.friends %}\n          <li class=\'{{friend.year}}\'>\n            <a href=\'{{friend.url}}\' target=\'_blank\'>\n              <img alt="" src="{{friend.avatar | default:\'/images/players/default.png\'}}" height="200" width="200" />\n            </a>\n            <!--h3>{{friend.name}}</h3-->\n          </li>\n        {% endfor %}\n      </ul>\n\n    </div>\n\n  </div>\n</div>',
				contactEmail: 'italy@play14.org',
				tagline: null,
				publishedAt: 1591293600000,
				updatedAt: 1678736645034,
				defaultImageId: 'file_3348',
				imageIds: ['file_3348', 'file_3349', 'file_3350', 'file_3351', 'file_3352'],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Thursday',
						description:
							'Thursday will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:00:00',
								description: 'Ice breakers'
							},
							{
								time: '20:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Friday',
						description:
							'Friday will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'Saturday will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://tickets.agilereloaded.it/event/play14-2020/',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Organization & Support',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 29,
				name: 'Stuttgart 2020',
				slug: 'stuttgart-2020-11',
				start: 1604683800000,
				end: 1604851200000,
				timezone: 'UTC',
				status: 'Cancelled',
				description:
					'<h2 id="welcometostuttgartandwelcometoourfirstx23play14unconferenceinbadenwrttemberg">Welcome to Stuttgart and welcome to our first &#x23;play14 unconference in Baden-Württemberg!</h2>\n<p>&#x23;play14 is an informal, serious games gathering following Open Space unconference format. Together we will try out different games, tools and playful methods, which can be used in trainings, workshops, during coaching sessions or even for bringing teams together.</p>\n<p>This is your opportunity of giving a try to those approaches you always wanted to test out, and where you were not so sure they will work out. You will meet like-minded people, interested in playing together and trying out new things. It is a chance to network and to learn from each other.</p>\n<p>Looking forward to play with you :o)</p>\n<p><a href="https://www.xing.com/communities/groups/nummer-play14-stuttgart-1116901">Join us on Xing</a></p>\n<p>We are still looking for further sponsors to finance the event.\nWant to be a supporter of the worldwide growing community with your company? Please contact one of our team members if you are interested.</p>',
				contactEmail: 'stuttgart@play14.org',
				tagline: null,
				publishedAt: 1604687400000,
				updatedAt: 1678736646112,
				defaultImageId: 'file_3384',
				imageIds: [
					'file_3384',
					'file_3379',
					'file_3380',
					'file_3484',
					'file_3378',
					'file_3381',
					'file_3383',
					'file_3382'
				],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '20:30:00',
								description: 'Dinner / Mingle'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:30:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '14:00:00',
								description: 'Sessions'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-up'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Sessions'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Sessions'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Farewell'
							}
						]
					}
				],
				registration: {
					link: 'https://play14.org/events/stuttgart/2020-11#register',
					widgetCode: null
				},
				sponsorships: [
					{
						category: 'Local sponsors',
						sponsorIds: []
					}
				],
				media: [],
				finance: null
			},
			{
				_strapiId: 111,
				name: 'London 2025',
				slug: 'london-2025-10',
				start: 1760110200000,
				end: 1760277600000,
				timezone: 'GMT',
				status: 'Open',
				description:
					'<figure class="image"><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/play14_london_2025_0390116d81.png" alt="play14-london-2025.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/play14_london_2025_0390116d81.png 245w, https://play14-cdn.azureedge.net/strapi-uploads/assets/play14_london_2025_0390116d81.png 500w, https://play14-cdn.azureedge.net/strapi-uploads/assets/play14_london_2025_0390116d81.png 750w, https://play14-cdn.azureedge.net/strapi-uploads/assets/play14_london_2025_0390116d81.png 1000w" sizes="100vw" width="1000"></figure><figure class="image"><img></figure><div>Play14 is a community of people who believe that the very best way for people to learn is by doing. Be it a game or an interactive exercise, having fun and playing is essential to effective learning. <strong>Play14 - London</strong> is an opportunity for people who share this belief to connect, collaborate, learn, play and share together.</div><div><div>&nbsp;</div></div><div><strong>In 2025 we celebrate 10 years since the first Play14 London :)</strong></div><div>&nbsp;</div><div>Who comes to #play14?</div><div>Participants come from all over the world. Whether they’re a coach, a teacher, a facilitator, a developer, an agile coach - ANYONE! We welcome people from all flavours of industries, roles and communities to come along. Ultimately people who use or want to use experiential learning professionally or socially.</div><div><div>&nbsp;</div></div><div><div>&nbsp;</div></div><div>How does it work?</div><div>Play14 is an un-conference. This means there are no keynotes, no rock stars on pedestals and that we will create the agenda collaboratively each day. Many of our participants use games, exercises, workshops regularly and will bring them along to share. #play14 is also a great opportunity to test out new ideas and skills in a very safe and friendly space.</div><div><div>&nbsp;</div></div><div><div>&nbsp;</div></div><div>What\'s the Schedule?</div><ul><li><strong>Friday</strong> (18:30 onward) - We kick off the conference to connect, break the ice, share a meal and start to play</li><li><strong>Saturday</strong> (08:30-evening) - We resume in the morning for a full day of games, exercises and fun. In the evening we\'ll celebrate our 10 year Anniversary.</li><li><strong>Sunday</strong> (08:30-17:00) - We\'ll conclude the conference with a second day of play.</li></ul><div><div>&nbsp;</div></div><div>What sort of things do people share?</div><ul><li>Games they play professionally, with their teams or socially with their groups</li><li>Icebreakers and warm ups</li><li>Sessions to share exercises and techniques</li><li>Talks and discussions</li><li>Problems to pick apart</li><li>Idea\'s to evolve</li><li>Pretty much anything else (we’ve had sessions on dance, improv, singing, coaching, meditation, mindfulness, laughter yoga and Tai Chi)</li></ul><div><div>&nbsp;</div></div><div>Will you feed me?</div><div>Absolutely - Playing needs energy and we\'ve got you covered!</div><ul><li>Dinner on the Friday and Saturday night</li><li>Breakfast and Lunch of the Saturday and Sunday</li><li>Snacks and drinks through-out the conference</li></ul><div>For more information, please visit: <a target="_blank" rel="noopener noreferrer" href="http://play14.org"><b data-tomark-pass=""><strong>play14.org</strong></b></a></div>',
				contactEmail: 'london@play14.org',
				tagline: null,
				publishedAt: 1748933306630,
				updatedAt: 1749022285661,
				defaultImageId: 'file_5282',
				imageIds: [],
				locationId: null,
				venueId: null,
				timetable: [
					{
						day: 'Friday',
						description:
							'We will start in the evening. We will learn to know each other and share a nice dinner all together.',
						timeslots: [
							{
								time: '18:30:00',
								description: 'Ice breakers'
							},
							{
								time: '19:00:00',
								description: 'Game(s) all together'
							},
							{
								time: '20:00:00',
								description: 'Rules of the marketplace'
							},
							{
								time: '21:00:00',
								description: 'Dinner / Mingle'
							},
							{
								time: '22:00:00',
								description: 'Beer at the pub'
							}
						]
					},
					{
						day: 'Saturday',
						description:
							'We will start in the morning with the marketplace, and then we will play games all day long.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '18:00:00',
								description: 'Retrospective'
							},
							{
								time: '19:00:00',
								description: 'Pizza &amp; Beers'
							}
						]
					},
					{
						day: 'Sunday',
						description:
							'We will also start with the marketplace for a full day of games. Whoever needs to catch a plane can leave earlier.',
						timeslots: [
							{
								time: '08:30:00',
								description: 'Breakfast'
							},
							{
								time: '09:00:00',
								description: 'Warm-ups'
							},
							{
								time: '09:30:00',
								description: 'Marketplace'
							},
							{
								time: '10:00:00',
								description: 'Serious games'
							},
							{
								time: '12:30:00',
								description: 'Lunch'
							},
							{
								time: '13:30:00',
								description: 'Serious games'
							},
							{
								time: '16:00:00',
								description: 'Retrospective'
							},
							{
								time: '17:00:00',
								description: 'Goodbye &amp; see you next time'
							}
						]
					}
				],
				registration: {
					link: 'https://ti.to/play14/play14-london-2025',
					widgetCode:
						'    <script src="https://js.tito.io/v2/with/inline" async></script>\n    <tito-widget\n      event="play14/play14-london-2025"\n    ></tito-widget>'
				},
				sponsorships: [],
				media: [
					{
						url: 'https://photos.app.goo.gl/bJUqa9SCNk5XZ7FB6',
						type: 'Photos'
					},
					{
						url: 'https://photos.app.goo.gl/bJUqa9SCNk5XZ7FB6',
						type: 'Videos'
					}
				],
				finance: null
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('events', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated events ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate events ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for events: ${results.length}/${data.length} records`);
		return results;
	}
});
