import { mutation } from './_generated/server';

// Migration function for games
export const migrateGames = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for games...');

		const data = [
			{
				_strapiId: 14,
				name: 'Corridor of trust',
				slug: 'corridor-of-trust',
				category: 'WarmUp',
				scale: 'Min 10, Max unlimited',
				timebox: '10 mnins',
				summary: 'Trusting others is not easy. This game will put you to the test.',
				description:
					'<h2 id="setup">SETUP</h2>\n<ul>\n<li>Have all participants for form two lines, facing each other.</li>\n<li>The lines should be about 1 meter apart, enough for people to have their arms and hands raised straight in from or them, parallel to the floor</li>\n</ul>\n<h2 id="runnigthrough">RUNNIG THROUGH</h2>\n<p>In turn, each participant should</p>\n<ul>\n<li>Get out of their line</li>\n<li>Take some distance</li>\n<li>Run as fast as they can through the corridor without closing their eyes</li>\n</ul>\n<p>Other participants should </p>\n<ul>\n<li>make some noise, encouraging the runner</li>\n<li>raise their arms in the air at the very last moment</li>\n</ul>\n<p>Once the runners is through</p>\n<ul>\n<li>The next runner should get ready</li>\n<li>The previous runner should join back in the shortest line</li>\n</ul>\n<h2 id="video">VIDEO</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/ayeoh811_S4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209180,
				defaultImageId: 'file_4473',
				imageIds: ['file_4473'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'trust'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 21,
				name: 'Follow the leader',
				slug: 'follow-the-leader',
				category: 'Game',
				scale: 'Min 15, Max 30',
				timebox: '10-15 mins',
				summary: 'Find out who is leading change in the circle.',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<ul>\n<li>Ask all the participants to form a circle</li>\n<li>Pick one volunteer who will be the first person who will have to guess who the leader is</li>\n<li>Ask that person to exit the room for a minute</li>\n<li>Elect a leader from the circle</li>\n<li>Everyone should mimic the leader\'s current physical posture</li>\n<li>Call the volunteer back in the room and have her/him stand in the middle of the circle</li>\n<li>The leader starts making small changes in her/his posture</li>\n<li>Everyone in the circle follows the leader changes</li>\n<li>The goal for the person in the middle is to find out who is the leader</li>\n<li>She/He can make as many guesses as necessary</li>\n<li>If it takes time, the leader should exaggerate the changes in posture so that it becomes more obvious to see</li>\n<li>Once the volunteer finds who the leader is, the leader exists the room and will be the next person to guess</li>\n<li>Elect a new leader and continue the game</li>\n</ul>\n<h2 id="debriefing">Debriefing</h2>\n<ul>\n<li>Ask the guessers what quality was needed to be able to find the leader</li>\n<li>Ask about what they felt while in the middle</li>\n<li>Ask the people how it felt to be the leader</li>\n<li>Ask them how it felt to become the guesser</li>\n<li>Ask the people around the circle about their empathy towards the one in the middle</li>\n</ul>\n<h2 id="takeaways">Take aways</h2>\n<ul>\n<li>You need to have a good sense of observation to spot who the leader is</li>\n<li>The circle becomes a system that is frequently changing and adapting, in a subtle manner</li>\n<li>It\'s hard to see everything at once when you stand in the middle of the circle</li>\n<li>In a system, it\'s a good thing to take some distance to observe how the system works</li>\n</ul>',
				credits: '',
				publishedAt: 1559433600000,
				updatedAt: 1677369212338,
				defaultImageId: 'file_4502',
				imageIds: ['file_4502'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'observation'
					},
					{
						value: 'change'
					},
					{
						value: 'empathy'
					},
					{
						value: 'system thinking'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 46,
				name: 'Stringly related',
				slug: 'stringly-related',
				category: 'IceBreaker',
				scale: 'Min 6, Max 20',
				timebox: '15 mnins',
				summary: 'Start telling a story about yourself, then pass the rope',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<ul>\n<li>Have everyone form a circle</li>\n<li>Have one person start telling a story about their life, their work, their family, their hobbies, …</li>\n<li>As soon as someone else in the group feels a relation with that story, they raise their hand</li>\n<li>The speaker then passes the rope string to the person who just raised their hand</li>\n<li>That person continues with their own story</li>\n</ul>\n<p>After a while, a large net of strings should have formed</p>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369212748,
				defaultImageId: 'file_4554',
				imageIds: ['file_4554'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'A long rope or wool ball'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'communication'
					},
					{
						value: 'relatedness'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 5,
				name: '3 cans',
				slug: '3-cans',
				category: 'WarmUp',
				scale: 'Min 6, Max 16',
				timebox: '5 – 15 mins',
				summary:
					'This simple game is a collaboration games. A team must collaborate to solve a physical enigma.',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Form into teams of 3 or 4 people.<br />\nProvide each team with 4 soda cans and 3 knifes.  </p>\n<h4 id="goal">GOAL</h4>\n<p>Suspend one can on top of the others.  </p>\n<h4 id="rules">RULES</h4>\n<p>The suspended can must be in the middle of the 3 others.<br />\nThe suspended can must be above of the other cans.   </p>\n<h3 id="facilitation">FACILITATION</h3>\n<p>Make teams compete against each other<br />\nTime each team\'s performance  </p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369214446,
				defaultImageId: 'file_4460',
				imageIds: ['file_4460'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: '4 soda cans per team'
					},
					{
						value: '3 flat knives per team'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'problem solving'
					},
					{
						value: 'competitive'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 2,
				name: "Abigail's Tale",
				slug: 'abigails-tale',
				category: 'Game',
				scale: 'Min 3, Max unlimited',
				timebox: '40-70 mnins',
				summary:
					"Abigail's Tale is a story that shows how people view the world from different perspectives, have different values and reach different conclusions based on the same information.",
				description:
					'<h2 id="aimsofthetool">Aims of the tool</h2>\n<p>When mixing with people from different cultures we should be aware that all their actions, values and attitudes are not necessarily defined by their culture. With this exercise you can show how similar people think differently, how they have different moral values and different ways of seeing reality.</p>\n<p>Description of the tool</p>\n<p>Abigail\'s Tale is a story that shows how people view the world from different perspectives, have different values and reach different conclusions out of the same information.</p>\n<ol>\n<li>Give them a printed version of the story or tell the story (maybe drawing the characters on a flipchart).</li>\n<li>Give them 3\' to establish the guilty parties from the guiltiest to the less guilty.</li>\n<li>(Optional) Split them in pairs and give them 5\' to make the list (guiltiest to less guilty).</li>\n<li>Put them in groups of 5 with the same goal (a common list). (15-25\')</li>\n<li>Do a group discussion (15\')</li>\n<li>Debrief (15\')</li>\n</ol>\n<h2 id="variations">Variations</h2>\n<ul>\n<li>Modify the story to have unisex names and ask at the end what would happen if that character was a woman (or a man); e.g.: Sinbad could be a woman and Abigail a boy. Or they could be gay.</li>\n<li>Modify the story to say "Abigail loved Tom" (instead of "they were in love") and ask the question: "what would you say if Abigail was actually a stalker?" &lt;-- we don\'t always have all the information and just reading some words on paper doesn\'t mean we have the whole picture</li>\n</ul>\n<h2 id="storybelow">Story below</h2>\n<p><em>Abigail’s Tale</em></p>\n<p>Once upon a time there was a pretty girl called Abigail who lived in a house with her mother. Everyday she would walk across her town, over the only bridge crossing the river to see her boyfriend, Tom. Abi thought Tom was lovely! She would skip and sing on her way to see her boyfriend, and they were very much in love.</p>\n<p>Of course Tom also thought Abi was lovely. He too would cross the town and the only bridge across the river to go and see Abi, but he didn’t skip and sing, at least when the other boys were looking he didn’t!</p>\n<p>They were so in love and would walk around holding hands to show everyone how much they loved each other. Aww</p>\n<p>One night a great storm flooded the river and swept away the bridge, the only bridge so the next morning they could only stand on opposite banks of the river and wave to each other, both very sad that they couldn’t hold hands.</p>\n<p>Abigail cried. She cried and cried and cried and wanted to see her Tom, but it would be months before a new bridge would be built, and there was no other way to cross the river. Then after a few days Abigail saw a little rowing boat tied up on the river, and went to speak to the man who owned it.</p>\n<p>“Please” Abi begged “Please row me across the river so I can see my Tom”. The man who owned the boat was called Sinbad. Not many people spoke to him, and very little was known about him. Sinbad thought about Abigail’s problem and offered to help. “I will row you across the river” Sinbad said, and Abi smiled, but she was happy to quickly. Sinbad continued “I will row you across the river, if you sleep with me.”</p>\n<p>Abigail\'s smile turned into a frightful scream and she ran off crying. She couldn’t decide what to do. She wanted to see Tom so badly, but didn’t want to sleep with Sinbad. She felt torn between seeing her boyfriend and cheating on him with Sinbad, and she felt she needed to ask someone for advice, so sat down with mother and explained the whole story.</p>\n<p>Abigail’s mother listened to her story and when Abi had finished she looked at her mother, waiting for her advice. “well” her mother started “you need to sort this one out for yourself”. Abigail’s mother offered no advice as she wanted Abi to make the decision for herself.</p>\n<p>Abi was now more confused than ever and sat in her park thinking over her options. She decided she wanted to see Tom more than ever… he would know what to do, so she jumped up and went to Sinbad.</p>\n<p>After she slept with him, Sinbad kept his word and took her on his boat across the river. Abi ran as soon as she arrived on shore to Tom. Tears running her face, she banged on his door and he was very shocked to see Abi, and to see that she was so upset. Abi explained everything that happened to her, and when she told Tom she had to sleep with Sinbad to see her, he went crazy.</p>\n<p>“WHAT!” he shouted “you cheated on me… with Sinbad!” Abi tried to explain why she did it, but Tom was so angry he slammed the door shut and didn’t want to speak to Abi again.</p>\n<p>Abi cried some more, and now was on the wrong side of the river to ask her mother for advice, but she knew where Tom’s best friend, Bob, lived.</p>\n<p>She went around to Bob’s house and explained everything to him. Bob let her into his house and gave her a nice cup of tea to try and help things. As Abi explained what had happened today, Bob was disgusted with how Tom had acted. So disgusted in fact that he went around to Toms house and beat him up for treating Abi so badly.</p>\n<p>And this is where our story ends.</p>\n<h4 id="exercise1">Exercise 1</h4>\n<p>List the characters (Abi, Abigail\'s Mother, Tom, Bob and Sinbad) in order of who you think acted the worst, with the worst behaved character at the bottom of your list, and the best behaved character at the top of the list. Do not talk to anyone when you are creating your list.</p>\n<h4 id="exercise2">Exercise 2</h4>\n<p>Pair up with someone of the other sex and discuss the differences and similarities of your lists. Attempt to compromise and create a new list that you both agree on.</p>\n<h4 id="exercise3">Exercise 3</h4>\n<p>As a group discuss your new lists and start towards trying to work out a list for the group. This should have a time limit as it is highly unlikely a group of 5+ people will come to a compromise.</p>\n<h2 id="facilitation">Facilitation</h2>\n<p>Sometimes not giving them the printed version helps as they presume things instead of checking with their group.</p>\n<p>You need to close the game properly or the participants will continue debating who is the guiltiest after.</p>\n<h2 id="debriefingthegame">Debriefing the game</h2>\n<p>Things you can do/observe:</p>\n<ul>\n<li>Ask lateral thinking questions like "would you reorder your list if Abigail was 13? How?"</li>\n<li>Sorting by Europe\'s legal system we get: Bob beating Tom (no mitigating circumstances), Tom hitting Abigail (mitigating circumstances) and Sinbad (economic monopoly).</li>\n<li>Fun fact: In Bulgaria one participant said Sinbad was the best business man ever. He found a need and offered fair services to fill the need. All demonstrated by the fact that Abigail accepted his offer.</li>\n<li>When splitting them into pairs you can try pairs of different sex</li>\n<li>In a training touching political subjects you can consider the story as a metaphor of how EU countries try to reach a common ground (though they have different values)</li>\n<li>Different views/perspectives to be explored: culture, family ties, violence, friendship, loyalty, attitudes towards sexual activities</li>\n<li>Some people will interpret the "Bob left with Abigail" part as if to mean that Abigail entered a relationship with Bob (but they could have just gone out for a drink). Interpretations vs facts.</li>\n</ul>\n<h2 id="maintakeaways">Main take-aways</h2>\n<p><em>Culture</em> is usually based on nationality but as this exercise shows, individuals within a culture all have separate thoughts and varying values on Family ties, the acceptance of violence, friendship, loyalty and attitudes towards sexual activities.</p>\n<p>When mixing with people from different cultures we should be aware that all their actions, values and attitudes are not necessarily purely from their national culture.</p>\n<p>We are always looking through our own “cultural glasses” for example as a Brit I will always see things through my “British Glasses”, seeing things like long queues at the bus stop as a norm. where as someone with a different cultural background can see this as weird and over polite. We both are looking at the same activity, the same queue and the same context, but we see it through our cultural glasses and compare it to our own culture, what we consider “normal”!</p>',
				credits: '',
				publishedAt: 1554508800000,
				updatedAt: 1677369217074,
				defaultImageId: 'file_4454',
				imageIds: ['file_4454'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: '1 pen and 1 piece of paper per participant'
					},
					{
						value: 'they need to sort a few names so it can also be done on their cellphones'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'empathy'
					},
					{
						value: 'perspectives'
					},
					{
						value: 'group-dynamics'
					},
					{
						value: 'conflict-management'
					},
					{
						value: 'gender-issues'
					},
					{
						value: 'social-inclusion'
					},
					{
						value: 'anti-racism'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 91,
				name: 'Yogi bear',
				slug: 'yogi-bear',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066113793,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 8,
				name: 'Airplane factory',
				slug: 'airplane-factory',
				category: 'Game',
				scale: 'Min 8, Max 16',
				timebox: '30 - 60 mins',
				summary:
					'In this game, a team must produce as many folded paper planes as possible. It is a competition between teams to be as productive as possible.',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Create groups of 4 people.  </p>\n<h4 id="play">PLAY</h4>\n<p>Line them up and have them fold paper planes in a chain, following this <a href="http://www.shmula.com/paper-airplane-game-pull-systems-push-systems/8280/">folding model</a>.</p>\n<p>Measure cycle time and lead time.</p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369217647,
				defaultImageId: 'file_4463',
				imageIds: ['file_4463'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Folding models'
					},
					{
						value: 'White paper sheets'
					}
				],
				preparationSteps: [
					{
						value: 'Print and cut out the folding models'
					}
				],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'cooperation'
					},
					{
						value: 'kanban'
					},
					{
						value: 'pull system'
					},
					{
						value: 'bottleneck'
					},
					{
						value: 'waste'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 4,
				name: "Ball Runner (AKA Lloyd's balls)",
				slug: 'ball-runner-aka-lloyds-balls',
				category: 'Game',
				scale: 'Min 4, Max 20',
				timebox: '30 - 45 mins',
				summary:
					'In this game teams are challenged to achieve a series of simple tasks as quickly as possible. The game will quickly introduce bottlenecks, which in turn will generate a high amount of work in progress. Teams are given the opportunity to make several attempts, each time taking the opportunity to inspect and adapt. This game was created during',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Divide the group into small equal teams, 4 - 5 ppl per team works best<br />\nIf you are playing with multiple teams, ask each team to name themselves<br />\nArrange the hoppers on the floor in a sequential line (workflow), leaving room between them for people to move<br />\nPut all of the balls into hopper 1</p>\n<h4 id="goal">GOAL</h4>\n<p>Get as many balls from hopper 1 to hopper 5 in 2 mins.</p>\n<h4 id="rules">RULES</h4>\n<p>Each ball must be thrown high and caught by the same person<br />\nHopper 2 can only contain balls that have been thrown high and caught<br />\nEach ball must be thrown between two people<br />\nHopper 3 can only contain balls that have been thrown between two people<br />\nEach ball must orbit the team in the hand of a person<br />\nHopper 4 can only contain balls that have orbited the team<br />\nEach ball can only be put into hopper 5 (“Done”) by a single designated person<br />\nDropped balls are considered defects and cannot be retrieved<br />\nWe will play 5 rounds<br />\nBetween each round you will have 2 minutes to improve</p>\n<h3 id="facilitation">FACILITATION</h3>\n<p>Set up the space and read out the rules</p>\n<p>Demonstrate the workflow</p>\n<ul>\n<li>Take a ball from hopper 1</li>\n<li>Throw the ball high,catch it and put it into hopper 2</li>\n<li>Take the ball from hopper 2, throw it to a person, ask them to throw it back and put it into hopper 3</li>\n<li>Take the ball from hopper 3, walk around one of the teams &amp; hoppers and put it into hopper 4</li>\n<li>State: “If I am the designated putter, I can..”</li>\n<li>Take the ball from hopper 4 and put into hopper 5</li>\n</ul>\n<p>Get ready to play</p>\n<ul>\n<li>Check the team understand and qualify any questions</li>\n<li>Give the team 2 mins to organise themselves</li>\n<li>Within that 2 mins, ask the team for an estimate of how many balls they can get through the system</li>\n</ul>\n<p>Round 1</p>\n<ul>\n<li>Begin the round, time 2 mins</li>\n<li>TIP: Watch for dropped balls and collect them (saves time)</li>\n<li>Count the balls delivered</li>\n<li>TIP: Even if they’ve counted already, count anyway - This gives the team a few moments of pause to catch their breath. Otherwise the improvement time will be less effective</li>\n<li>Record the time on the score sheet</li>\n<li>Record waste on the board - All balls removed from the starting hopper but not in the done hopper</li>\n<li>Challenge the team to do better! Give them 1 min to improve and to give you a new estimate</li>\n</ul>\n<p>Round 2 - 5</p>\n<ul>\n<li>These rounds are essentially the same as the first</li>\n<li>TIP: The interim hoppers are not required by the rules. It should become obvious that one or more are serving no purpose (essentially the WIP will already be 0. Ask the team why it’s still there?</li>\n<li>TIP: If playing with multiple teams, announce the leaders and their score - This generates and invigorates competition</li>\n</ul>\n<h3 id="reflection">REFLECTION</h3>\n<p>Ask the team how it felt to play.<br />\nReflect on the scores, what was interesting?, was there improvement?<br />\nDid anyone try things that didn’t work?<br />\nDid anyone innovate? how?</p>\n<h3 id="takeaways">TAKEAWAYS</h3>\n<p>Power of continuous improvement<br />\nPower of self organising teams<br />\nPull vs Push<br />\nHack the system! Don’t let the rules of the system constrain you without first qualifying and challenging them</p>\n<h3 id="videos">VIDEOS</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/DYssyqTkTIw" frameborder="0" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369218945,
				defaultImageId: 'file_4456',
				imageIds: ['file_4456', 'file_4457', 'file_4458'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: '100 balls'
					},
					{
						value: '5 Containers (Hoppers)'
					},
					{
						value: 'A board or flipchart and pens'
					},
					{
						value: 'A timer'
					}
				],
				preparationSteps: [
					{
						value: 'A flip chart / board with the rules'
					},
					{
						value: 'A flip chart / board with a score table (Round / Estimate / Actual)'
					}
				],
				safety: [],
				tags: [
					{
						value: 'continuous-improvement'
					},
					{
						value: 'self-organizing-teams'
					},
					{
						value: 'challenge-the-process'
					},
					{
						value: 'theory-of-constraints'
					},
					{
						value: 'kanban'
					},
					{
						value: 'competitive'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 6,
				name: 'Ball Point game',
				slug: 'ball-point-game',
				category: 'Game',
				scale: 'Min 5, No limit',
				timebox: '20 - 30 mins',
				summary:
					'The ball point game is one of the oldest games, but it is very efficient because most of the agile values and principles. It is perfect to illustrate how to work as a team and continuously improve.',
				description:
					'<h3 id="setup">Setup</h3>\n<p>You will need around 100 plastic or foam balls. and two baskets (or any kind of open container).\nYou will also need a whiteboard or paperboard to keep track of the team\'s realization.\nHave people stand up and group together while you explain the rules.</p>\n<h3 id="rules">Rules</h3>\n<p>The goal of the game is to put as many balls from one basket to the other, by respecting the following rules</p>\n<ul>\n<li>Everyone is part of one big team.</li>\n<li>The person who puts the ball in play is the only person who can put it out of play in the destination basket.</li>\n<li>Each ball must have air-time.</li>\n<li>Each ball must be touched by every team member.</li>\n<li>Balls cannot be passed to your direct neighbors (the people directly next to you left or right).</li>\n<li>Any ball that falls on the floor or does not respect the rules is a defect.</li>\n</ul>\n<p>There is a total of five iterations.\nOne iteration lasts 2 minutes.\nThe team has 1:30 minute to improve between two iterations.</p>\n<p>If people ask you any question regarding the rules, just tell them that all they need to know is written in the rules.</p>\n<h3 id="howtoplay">How to play</h3>\n<h4 id="firstiteration">First iteration</h4>\n<p>Give the team 2 mn to figure out the rules and self-organize. \nThen ask them for an estimation of the number of balls they think they will be able to process.</p>\n<p>Use a whiteboard or paperboard to write down the estimation for the first iteration.\nLaunch the game. \nMake sure the team respects the rules and be quite drastic about it.\nMake sure you announce time on a regular basis.\nCount down when there is only 10 seconds left.</p>\n<h4 id="endoffirstiteration">End of first iteration</h4>\n<p>Give the team 1 minute to retrospect and improve. \nIf you want to put less pressure and insist on continuous improvement, increase that time to 1:30.\nTell the team to focus on improving instead of counting the balls.</p>\n<p>While the team is talking, count the number of balls the team has processed and write it down on the board, next to the estimation.\nYou can also count the number of defects (balls that fell on the floor) and write it down on the board.\nIf you don\'t have time to count the defects, provide at least a trend (using emoj), to see if the number of defects have increased or decreased compared to the previous iteration.\nPut all the balls back into the start basket.</p>\n<p>A the end of the improvement period, don’t forget to ask for an estimation and write it down.</p>\n<h4 id="secondandnextiterations">Second and next iterations</h4>\n<p>When the timebox for improvement is over, start the iteration right away.\nTry to be drastic about time keeping. It\'s part of the learning objective.</p>\n<p>During the second and next iterations, try to put the team under pressure.\nIf the team is not trying so hard, make sure you raise their level of commitment by stating that the previous team you played with managed to process 2 buckets of balls, \nor that the world record if 159 balls in 2 minutes.</p>\n<p>Stop after 5 iterations.</p>\n<h3 id="debriefandtakeaway">Debrief and take away</h3>\n<p>Take your time to debrief with the team.</p>\n<p>Ask what happened during the game</p>\n<ul>\n<li>Ask how people communicated with each other.</li>\n<li>Ask about the kind of improvements the team did, during the improvement period and during the game.</li>\n<li>Ask how the person who was putting the balls in and out of play was feeling (he/she is a bottleneck).</li>\n<li>Ask about the rhythm, if it was sustainable</li>\n</ul>\n<p>Take a look at the numbers</p>\n<ul>\n<li>Check if the team improved</li>\n<li>Try to make the link between possibly disruptive improvements and performance decrease</li>\n<li>Check if the estimates are close to the realizations</li>\n<li>Take a look at the defects</li>\n</ul>\n<p>Almost all of the agile values and principles can be debriefed from this game </p>\n<ul>\n<li>delivering value with high quality</li>\n<li>working as a team</li>\n<li>self-organization</li>\n<li>inspect and adapt</li>\n<li>iterative work</li>\n<li>communication</li>\n<li>estimates vs realizations</li>\n<li>predictability</li>\n<li>sustainable pace</li>\n<li>bottlenecks (entry point = exit point)</li>\n<li>simplicity (the simplest solution often works best)</li>\n</ul>\n<p>It’s usually a load of fun to play, and to facilitate.</p>\n<h3 id="video">Video</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/7vnHeFs71hE" frameborder="0" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369218960,
				defaultImageId: 'file_4461',
				imageIds: ['file_4461'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: '100 balls'
					},
					{
						value: '5 Containers (Hoppers)'
					},
					{
						value: 'A board or flipchart and pens'
					},
					{
						value: 'A timer'
					}
				],
				preparationSteps: [
					{
						value: 'A flip chart / board with the rules'
					},
					{
						value: 'A flip chart / board with a score table (Round / Estimate / Actual)'
					}
				],
				safety: [],
				tags: [
					{
						value: 'agile-values'
					},
					{
						value: 'agile-principles'
					},
					{
						value: 'iterative'
					},
					{
						value: 'continuous-improvement'
					},
					{
						value: 'self-organizing-teams'
					},
					{
						value: 'challenge-the-process'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 114,
				name: 'Laughter yoga',
				slug: 'laughter-yoga',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067480456,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 11,
				name: 'Count to 33',
				slug: 'count-to-33',
				category: 'WarmUp',
				scale: 'Min 5, Max 25',
				timebox: 'Depends on the size of the group and the ability of the people',
				summary:
					'This game may be simple, but it is actually trickier than it seems. It is a very good game for fun, that you can use as an ice breaker, warm up or energizer.',
				description:
					'<h3 id="setup">Setup</h3>\n<p>Have people stand up in a circle.</p>\n<h3 id="howtoplay">How to play</h3>\n<p>The goal is to count to 33 as a group.\nHowever, you have to replace all numbers containing 3 or multiple of 3 by clapping your hands.</p>\n<ul>\n<li>The first person starts counting 1</li>\n<li>The second person, direct neighbor on the left or on the right, counts 2</li>\n<li>The third person, instead of counting to 3, claps his/her hands</li>\n<li>Next person counts 4</li>\n<li>Next person counts 5</li>\n<li>Next person claps</li>\n<li>And so forth…</li>\n</ul>\n<p>The person who makes a mistake should be the one starting over to 1.\nYou stop when the group reaches 33 without mistake.</p>\n<h3 id="variation">Variation</h3>\n<p>You can make the game even funnier by having the person who makes a mistake do something silly, like doing the walk of shame around the circle, or having everyone booing.</p>\n<h3 id="video">Video</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/pONzUdk-r1o" frameborder="0" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369209865,
				defaultImageId: 'file_4467',
				imageIds: ['file_4467'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Fun'
					},
					{
						value: 'Team building'
					}
				],
				ratings: {
					energy: 2,
					connection: 2,
					silliness: 2
				}
			},
			{
				_strapiId: 10,
				name: 'Brain Shock',
				slug: 'brain-shock',
				category: 'WarmUp',
				scale: 'Min 4, Max unlimited',
				timebox: '15 mins',
				summary: 'Wakes up your brain, shows that multitasking is not recommended.',
				description:
					'<h2 id="setup">SETUP</h2>\n<ul>\n<li>Ask people to get into groups of 4 people</li>\n<li>In each group, people should form a square</li>\n<li>Ask for one volunteer in each group</li>\n<li>The person on the right of the volunteer will have to ask simple mathematical questions, With numbers less than 100</li>\n<li>11 + 43</li>\n<li>4 * 7</li>\n<li>25 - 12</li>\n<li>The person on the left of the volunteer will have to ask non invasive personal questions</li>\n<li>What\'s your favourite color ?</li>\n<li>Have you ever been to Japan ?</li>\n<li>Do you have a pet ?</li>\n<li>The person in front of the volunteer will do some movements and the volunteer will have to mirror the movements</li>\n<li>When everyone is ready, say GO</li>\n<li>Switch roles clockwise every 1 or 2 minutes</li>\n</ul>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/VdUDsAbXIcE?rel=0" frameborder="0" allowfullscreen></iframe>\n<h2 id="debrief">Debrief</h2>\n<p>Whoever tells you that multitasking is a good think, just have them play that game and they\'ll understand.</p>',
				credits: '',
				publishedAt: 1517961600000,
				updatedAt: 1677369212516,
				defaultImageId: 'file_4466',
				imageIds: ['file_4466'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [
					{
						value: 'Large empty room'
					}
				],
				safety: [],
				tags: [
					{
						value: 'multitasking'
					},
					{
						value: 'cross-cultural-team'
					}
				],
				ratings: {
					energy: 5,
					connection: 3,
					silliness: 4
				}
			},
			{
				_strapiId: 31,
				name: 'Lean workflow design',
				slug: 'lean-workflow-design',
				category: 'Game',
				scale: 'Min 10 - Max 15',
				timebox: '45 - 60 mins',
				summary:
					'This game is a nice alternative to the ball point game, especially when you are travelling. The goal of this exercise is to create and improve a workflow using some of the well known agile techniques like Sprint Planning, Timeboxing, Retrospectives.',
				description:
					'<h3 id="howtoplay">How to play</h3>\n<p>The goal for the team is ordering the 104 cards as follows:</p>\n<ul>\n<li>8 stacks of cards sorted by the respective suits</li>\n<li>The Ace needs to be on the bottom and the King on top</li>\n<li>The intervening cards need to be in rank order</li>\n</ul>\n<p>Start a round by giving 2 minutes for discussing the strategy (“planning”). </p>\n<p>After this time</p>\n<ul>\n<li>ask for an estimate for achieving the goal (“How long will it take?”). In the first round you might not get a quick answer, just go ahead and start anyway.</li>\n<li>ask for a single person to give you the stop sign. You’re not supposed to listen to anyone else but this person.</li>\n</ul>\n<p>When you got the above answers</p>\n<ul>\n<li>drop the shuffled stack of cards face down on the table or the floor and start the time</li>\n<li>watch the participants use their strategy but don’t interfere</li>\n</ul>\n<p>As soon as the dedicated person tells you to do so</p>\n<ul>\n<li>stop the time and write it on the flipchart</li>\n<li>check the resulting stacks for mistakes (“review”). Each mistake in the ranking will result in a penalty of 5 seconds. Add these seconds to the time on the flipchart</li>\n</ul>\n<p>Get the team talking (“retrospective”) about how their approach worked by asking a couple of open questions like</p>\n<ul>\n<li>How did it work?</li>\n<li>Can you improve it? How?</li>\n<li>Do all of you see it the same way?</li>\n<li>…</li>\n</ul>\n<p>After that give the team 2 minutes for planning, ask for a new estimate and start the next round. Play the game for 3 to 5 rounds as long as the team thinks there’s improvement possbile (or you reach the end of your timebox).</p>\n<h3 id="credits">Credits</h3>\n<p><a href="https://www.linkedin.com/in/nancy-van-schooenderwoert-37882">Nancy Van Schooenderwoert</a> introduced and facilitated this interesting exercise at the <a href="http://p4a11.pbworks.com/w/page/29184741/Home">Play4Agile 2011</a> Conference in Rückersbach, Germany.</p>\n<p><a href="http://agiletransparency.com/lean-workflow-design-game/">Original blog post</a> by <a href="/players/sven-ropstorff">Sven Röpstorff</a></p>',
				credits: '',
				publishedAt: 1500163200000,
				updatedAt: 1677369217257,
				defaultImageId: 'file_4512',
				imageIds: ['file_4512'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value:
							'Two card decks of 52 cards that have identical backs (same colour, same pattern, etc.)'
					},
					{
						value: 'A stop watch'
					}
				],
				preparationSteps: [
					{
						value: 'Space for the team to gather (e.g. some tables or some space on the floor)'
					},
					{
						value:
							'A table on a flipchart or whiteboard with the following columns - estimated time - actual raw time - number of errors - actual time with penalties'
					}
				],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'self-organization'
					},
					{
						value: 'iterative'
					},
					{
						value: 'continuous-improvement'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 92,
				name: 'Horses and tigers',
				slug: 'horses-and-tigers',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066176759,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 124,
				name: 'Crevasse',
				slug: 'crevasse',
				category: 'Game',
				scale: '2 - 20',
				timebox: '',
				summary: 'Collaborate as a pair to avoid falling into the crevasse',
				description:
					'<p><a target="_blank" rel="noopener noreferrer" href="https://coach-agile.com/serious-game/la-crevasse/">LA CREVASSE - Coach agile (coach-agile.com)</a></p><p>&nbsp;</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-width:0px;color:rgb(119, 119, 119);font-family:&quot;Open Sans&quot;, Arial, Helvetica, sans-serif;font-feature-settings:inherit;font-kerning:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-size:13px;font-stretch:inherit;font-style:normal;font-variant-alternates:inherit;font-variant-caps:normal;font-variant-east-asian:inherit;font-variant-ligatures:normal;font-variant-numeric:inherit;font-variant-position:inherit;font-variation-settings:inherit;font-weight:400;letter-spacing:normal;line-height:inherit;margin-bottom:20px;margin-right:0px;margin-top:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;vertical-align:baseline;white-space:normal;widows:2;word-spacing:0px;">Répartissez-vous en binôme</p><p style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);border-width:0px;color:rgb(119, 119, 119);font-family:&quot;Open Sans&quot;, Arial, Helvetica, sans-serif;font-feature-settings:inherit;font-kerning:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-size:13px;font-stretch:inherit;font-style:normal;font-variant-alternates:inherit;font-variant-caps:normal;font-variant-east-asian:inherit;font-variant-ligatures:normal;font-variant-numeric:inherit;font-variant-position:inherit;font-variation-settings:inherit;font-weight:400;letter-spacing:normal;line-height:inherit;margin-bottom:20px;margin-right:0px;margin-top:0px;orphans:2;padding:0px;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;vertical-align:baseline;white-space:normal;widows:2;word-spacing:0px;">1ère itération : avancez le long de la crevasse en ayant vos mains en contact sans avoir les doigts lies…. et sans tomber dans la crevasse<br>2nde itération : affichage des objectifs : faîtes vos choix!!!!<br>3ème itération : un dernier défi!!!</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1729267282222,
				defaultImageId: 'file_5305',
				imageIds: ['file_5305'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Masking tape'
					},
					{
						value: 'Rope'
					}
				],
				preparationSteps: [
					{
						value: 'Remove all tables and chairs'
					},
					{
						value: 'Create the crevasse on the floor'
					}
				],
				safety: [
					{
						key: 'Injury',
						value: 'Can be pretty physical, so be careful'
					}
				],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'trust'
					},
					{
						value: 'fun'
					}
				],
				ratings: {
					energy: 5,
					connection: 2,
					silliness: 4
				}
			},
			{
				_strapiId: 115,
				name: 'Yoga stretching',
				slug: 'yoga-stretching',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067516699,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 116,
				name: 'River crossing',
				slug: 'river-crossing',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: 'With napkins',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067575847,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 12,
				name: 'Cheer leader',
				slug: 'cheer-leader',
				category: 'WarmUp',
				scale: 'Min 6, Max unlimited',
				timebox: '15 mnins',
				summary: 'Variation on rock, paper, scissors',
				description:
					'<h2 id="howtoplay">HOW TO PLAY</h2>\n<ul>\n<li><p>Have people walk around the room</p></li>\n<li><p>Have them pair-up and introduce themselves</p></li>\n<li><p>Then, they will play 1 round of rock-paper-scissors</p></li>\n<li><p>The winner will continue looking for another person to play with</p></li>\n<li><p>The looser will get behind the winner and start cheering their name</p></li>\n<li><p>At the end of the game, there should be 2 long lines of people cheering for the person in front</p></li>\n<li><p>When the two persons who are in front meet, they play rock-paper-scissors, 1 of them becomes the champion and the whole room cheers for them</p></li>\n</ul>',
				credits: '',
				publishedAt: 1538179200000,
				updatedAt: 1677369212304,
				defaultImageId: 'file_4472',
				imageIds: ['file_4472'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [
					{
						value: 'Large empty room'
					}
				],
				safety: [],
				tags: [
					{
						value: 'energy'
					},
					{
						value: 'fun'
					}
				],
				ratings: {
					energy: 5,
					connection: 2,
					silliness: 4
				}
			},
			{
				_strapiId: 44,
				name: 'Silent post',
				slug: 'silent-post',
				category: 'Game',
				scale: 'Min 6, Max unlimited',
				timebox: '15 mnins',
				summary: 'Write a sentence, pass to your neighbor, draw',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<ul>\n<li>All participant should to have in front of them a white A4 paper in portrait mode and a pen</li>\n<li>Ask everyone to write down at the top of the page a simple sentence, no more than one line</li>\n<li>Ask everyone to pass their sheet of paper to their left neighbor</li>\n<li>Ask everyone to draw the meaning of the sentence, right underneath it</li>\n<li>Ask everyone to fold the sentence on the back of the paper, so only the drawing is visible</li>\n<li>Ask everyone to pass their sheet of paper to their left neighbor</li>\n<li>Ask everyone to write down a sentence that corresponds to the drawing they see on the paper</li>\n<li>Ask everyone to fold the drawing on the back of the paper, so only the sentence is visible</li>\n<li>Ask everyone to pass their sheet of paper to their left neighbor</li>\n</ul>\n<p>… and so forth and so on, until there is no space on the sheet of paper, or until someone thinks they found their sentence back.<br />\nYou should always end the game with a sentence.  </p>\n<p>At the end, everyone can read their sheet of paper, reading all of the sentences, from the first to the last.</p>\n<h2 id="debrief">Debrief</h2>\n<p>Ask questions to the aucdience. People should come up with things like</p>\n<ul>\n<li>Loss of meaning goes very fast</li>\n<li>Simple physical things are easier to draw</li>\n<li>Complex feelings are better expressed in writing than in drawing</li>\n</ul>\n<p>In conclusion, say</p>\n<ul>\n<li>When expressing specifications, use both as many means of communication as necessary</li>\n<li>Some things are better expressed in writing<ul>\n<li>Abstract</li>\n<li>Feelings</li></ul></li>\n<li>Some things are better expressed in drawing<ul>\n<li>Architectures</li>\n<li>Concrete</li></ul></li>\n<li>Metaphors are a good way to express complex things</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369214633,
				defaultImageId: 'file_4548',
				imageIds: ['file_4548', 'file_4552', 'file_4551', 'file_4549', 'file_4547', 'file_4550'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'A long table where everyone can sit'
					},
					{
						value: 'pens'
					},
					{
						value: 'A4 paper sheets'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'communication'
					},
					{
						value: 'drawing'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 93,
				name: 'Step factory',
				slug: 'step-factory',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066233864,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 117,
				name: 'The chasm',
				slug: 'the-chasm',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067634527,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 50,
				name: 'Agile Battleships',
				slug: 'agile-battleships',
				category: 'Game',
				scale: 'Min 4, Max unlimited',
				timebox: '45 mins',
				summary:
					'Players will play a game of battleships with each other. Some players will experience restrictions to how responsive they can be, allowing us to explore the effects.',
				description:
					'<h2>OVERVIEW</h2><p>This game was created by <a href="https://www.linkedin.com/in/jamesscrimshire/">James Scrimshire</a></p><p><strong>Goal</strong></p><p>This game is designed to allow participants to experience and reflect on different on the importance of “Responding to change over following a plan”. They will feel the effects of different-sized feedback loops, from the big bang to the empirical.</p><p><strong>Learning objectives</strong></p><ul><li>Responsiveness is vital to success</li><li>Generally speaking, the tighter we make the learning feedback loop, the more successful we can be</li><li>Too fast a feedback loop (in this game being able to change strategy at will) is often worse than a small batch. This is because having a pause to consider what we’re going to focus on next and designing a short term strategy for it ensures that there actually is a strategy. Additionally, there is a lot of overhead (waste) in making a decision every turn when hunting for the next ship.</li><li>The time taken to plan the 40 shots in this game is almost entirely waste</li></ul><p>&nbsp;</p><h2>STRATEGY</h2><p><strong>MODE</strong>: Small groups of 1-6 players</p><p><strong>HANDOUT</strong>:</p><ul><li>Battleships sets with instruction inserts</li></ul><p><strong>FACILITATION</strong>:</p><ul><li><strong>Decide</strong>: how many team you want. This can be anywhere from 4 upward, depending on the group size and the amount of battleships kits you have.</li><li><strong>Instruct</strong>: Ask players to form into teams and sit appropriately.</li><li><strong>Handout</strong>: Give each team a battle ships kit</li><li><strong>Inquire</strong>: Check players are familiar with the game, and explain the rules if needed</li><li><strong>Instruct</strong>: Ask the teams to place their 5 ships onto the upper grid</li><li><strong>Handout</strong>: Give each team a bag of 40 blue pegs</li><li><strong>Instruct</strong>: Ask the teams to design their battle strategies by placing the 40 blue pegs onto the lower grid</li></ul><p><strong>TIMEBOX</strong>: 5-10 mins</p><p>&nbsp;</p><h2>THE BATTLE</h2><p><strong>MODE</strong>: Small groups of 1-6 players</p><p><strong>FACILITATION</strong>:</p><ul><li><strong>Handout</strong>: Allow each team to choose a mission parameter at random</li><li><strong>Instruct</strong>: Read your missing parameters, and keep them secret!</li><li><strong>Support</strong>: Visit each team, and endure they understand the parameters</li><li><strong>IMPORTANT</strong>: If playing with more than 4 teams: ensure each opposing teams have different mission parameters.</li><li><strong>Instruct</strong>: Begin the battle</li></ul><p><strong>TIMEBOX</strong>: 15-20 mins</p><p>&nbsp;</p><h2>DEBRIEF</h2><p><strong>MODE</strong>: All</p><p><strong>PREP</strong>:</p><p>Make this scoring chart while the game is playing:</p><figure class="table"><table><tbody><tr><td>Hits&nbsp;</td><td>Sinks&nbsp;</td></tr><tr><td>1</td><td>3</td></tr></tbody></table></figure>',
				credits: 'James Scrimshire',
				publishedAt: 1515801600000,
				updatedAt: 1677535891610,
				defaultImageId: 'file_4455',
				imageIds: ['file_4455'],
				resourceIds: ['file_4580', 'file_4581'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Battleships game set (4-12 players -> 2 sets, 6-18 players -> 3 sets, etc.)'
					},
					{
						value: '80 blue pegs per set (Use the excess white pegs, and spray them blue!)'
					}
				],
				preparationSteps: [
					{
						value:
							'Divide the participants into an even number of Navies (groups of 1 - 3 players).'
					},
					{
						value: 'Tables and chairs'
					},
					{
						value: 'It is best that team play opposite each other'
					},
					{
						value: 'Flip chart / whiteboard for the score board'
					}
				],
				safety: [],
				tags: [
					{
						value: 'leadership'
					},
					{
						value: 'planning'
					},
					{
						value: 'feedback'
					},
					{
						value: 'competitive'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 125,
				name: 'Bad Portraits',
				slug: 'bad-portraits',
				category: 'Game',
				scale: '',
				timebox: '20 min',
				summary:
					"Draw your team mate with your 'wrong' hand, and watch your inner abstract artist come to life.",
				description:
					'<p>Switching to our non-dominant hand takes us out of our comfort zone &nbsp;yet at the same time it may help us bypass the chatter of thoughts. The game is a way of &nbsp;trying something new and challenging and having fun along the way!<br>The facilitator starts a timer for 1 minute during which each person has to draw their partner with their non-dominant hand before the timer runs out. Participants share their experiences and show-off their art.<br>&nbsp;</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1731506172043,
				defaultImageId: 'file_5328',
				imageIds: ['file_5332', 'file_5331', 'file_5329', 'file_5330', 'file_5328'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Markers'
					},
					{
						value: 'Blank paper (A4)'
					},
					{
						value: 'Timer'
					}
				],
				preparationSteps: [
					{
						value:
							'The game is played sitting down. The participants are seated at a table, with pairs facing each other'
					},
					{
						value: 'Each participant is given a sheet of blank A4 paper and a marker each'
					},
					{
						value: 'Countdown timer is set for 1 minute'
					}
				],
				safety: [],
				tags: [
					{
						value: 'creative'
					},
					{
						value: 'art'
					},
					{
						value: 'drawing'
					},
					{
						value: 'mindful'
					},
					{
						value: 'empathy building'
					},
					{
						value: ''
					}
				],
				ratings: {
					energy: 2,
					connection: 3,
					silliness: 5
				}
			},
			{
				_strapiId: 15,
				name: 'Bunny bunny kitten kitten',
				slug: 'bunny-bunny-kitten-kitten',
				category: 'WarmUp',
				scale: 'Min 10, Max infinite',
				timebox: '10 mins',
				summary: 'This game has absolutely no value other than sheer fun',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<h4 id="round1">Round 1</h4>\n<ul>\n<li>Everyone forms a circle</li>\n<li>Everyone claps, twice in their hand, once on their lap (following the rhythm We will rock you)</li>\n<li>One person start chanting <code>Bunny bunny bunny bunny</code> while mimicking bunny ears by flapping with their hands on top of their head</li>\n<li>That person points to someone else and start clapping again</li>\n<li>The designated person starts chanting <code>Bunny bunny bunny bunny</code>…</li>\n</ul>\n<h4 id="round2">Round 2</h4>\n<ul>\n<li>Same setup</li>\n<li>Add a rule that the people on the left and right of the bunny are kittens</li>\n<li>Kittens should turn towards the bunny and chant <code>Kitten kitten kitten kitten</code> while scratching the air with their paws</li>\n</ul>\n<p>When everyone has had a good laugh, you can all move on to another game.</p>',
				credits: '',
				publishedAt: 1515974400000,
				updatedAt: 1677369209845,
				defaultImageId: 'file_4474',
				imageIds: ['file_4474'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'team-building'
					},
					{
						value: 'fun'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 16,
				name: 'Count to 7',
				slug: 'count-to-7',
				category: 'WarmUp',
				scale: 'Min 5, Max 25',
				timebox: '10-15 mins',
				summary:
					'This is a mix between a counting and gesturing the next move, with some nice tricks to it.',
				description:
					'<h3 id="setup">Setup</h3>\n<p>Have people stand up in a circle.</p>\n<h3 id="howtoplay">How to play</h3>\n<p>The goal is to count to 7 as a group.\nPeople will count, one after the other, following these rules:</p>\n<ul>\n<li>If you count 1 to 6, you should touch your right shoulder to indicate that the next person to count will be on your right</li>\n<li>If you count 1 to 6, you should touch your left shoulder to indicate that the next person to count will be on your left</li>\n<li>Instead of counting the number 7, you should cross your arms before you without pronouncing the number, the upper arm indicates the direction for the next person</li>\n</ul>\n<p>Go on as long as you wish.\nIf someone makes a mistake, they should take the walk of shame around the group.</p>\n<h3 id="variation">Variation</h3>\n<p>You can make the game even harder by replacing number 7 by picking a theme and having everyone saying a word belonging to this theme, i.e. colors, car brands, fruits, …</p>\n<h3 id="video">Video</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/wwzNHxB0Shw" frameborder="0" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1501113600000,
				updatedAt: 1677369209920,
				defaultImageId: 'file_4475',
				imageIds: ['file_4475'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Fun'
					},
					{
						value: 'Team building'
					}
				],
				ratings: {
					energy: 4,
					connection: 3,
					silliness: 4
				}
			},
			{
				_strapiId: 48,
				name: 'Walking dead',
				slug: 'walking-dead',
				category: 'WarmUp',
				scale: 'Min 10, Max unlimited',
				timebox: '5 mins',
				summary: 'The dead are walking',
				description:
					'<h2 id="howtoplay">HOW TO PLAY</h2>\n<ul>\n<li>A walking dead cannot run. </li>\n<li>A walking dead pursues the living.</li>\n<li>When a walking dead touches a living, the living becomes a walking dead.</li>\n</ul>\n<p>Start the game by designing one person as a walking dead.</p>',
				credits: '',
				publishedAt: 1538265600000,
				updatedAt: 1677369211949,
				defaultImageId: 'file_4568',
				imageIds: ['file_4568'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [
					{
						value: 'Large empty room'
					}
				],
				safety: [],
				tags: [
					{
						value: 'Fun'
					}
				],
				ratings: {
					energy: 3,
					connection: 2,
					silliness: 4
				}
			},
			{
				_strapiId: 56,
				name: 'Reaction',
				slug: 'reaction',
				category: 'Game',
				scale: '9 to 24',
				timebox: '40 mins',
				summary:
					"This game is designed to allow participants to experience and reflect on what it's like when two cultures merge.",
				description:
					'<h3 id="welcome">Welcome</h3>\n<p>As participants arrive, ask them to take a cup and 20 chips and to take a seat around one of the tables.</p>\n<h3 id="familiarise">FAMILIARISE</h3>\n<h4 id="instructions">INSTRUCTIONS</h4>\n<ul>\n<li>We’re going to play a simple game. </li>\n<li>One of you will be the dice roller </li>\n<li>When the dice land, everyone else must perform an appropriate action. The slowest to react and perform the action must give some chips to the dice roller.</li>\n<li>The number of chips due is defined by the number on the die</li>\n<li>The person to the left of the dice roller, is now the dice roller.</li>\n<li>If you are out of chips, you are out of the game until it’s your turn to be the dice roller.</li>\n</ul>\n<h4 id="handout">HANDOUT</h4>\n<ul>\n<li>Give each table their specific instructions</li>\n</ul>\n<h4 id="instructions-1">INSTRUCTIONS</h4>\n<ul>\n<li>In 8 or 9 minutes I will take back the instructions </li>\n<li>You have until then learn the actions and practice the game before we play it for real. Go!</li>\n</ul>\n<h4 id="timebox">TIMEBOX</h4>\n<ul>\n<li>10 mins</li>\n</ul>\n<h3 id="roundone">ROUND ONE</h3>\n<h4 id="facilitation">FACILITATION</h4>\n<ul>\n<li>Take the instructions back so that no one can see them anymore</li>\n</ul>\n<h4 id="instructions-2">INSTRUCTIONS</h4>\n<ul>\n<li>Ok reset your chips to 20 each</li>\n<li><strong>One last rule: from this point onwards, you may no longer talk!</strong></li>\n<li>You have 10 mins.</li>\n<li>Go</li>\n</ul>\n<h4 id="timebox-1">TIMEBOX</h4>\n<ul>\n<li>10 mins</li>\n</ul>\n<h3 id="roundtwo">ROUND TWO</h3>\n<h4 id="instructions-3">INSTRUCTIONS</h4>\n<ul>\n<li>O.K. Winners, move to the next table, clock wise</li>\n<li>Let’s play another round</li>\n</ul>\n<h4 id="timebox-2">TIMEBOX</h4>\n<ul>\n<li>10 mins</li>\n</ul>\n<h3 id="roundthree">ROUND THREE</h3>\n<h4 id="instructions-4">INSTRUCTIONS</h4>\n<ul>\n<li>O.K. Winners, move to the next table, clock wise</li>\n<li>Let’s play another round</li>\n</ul>\n<h4 id="timebox-3">TIMEBOX</h4>\n<ul>\n<li>10 mins</li>\n</ul>\n<h3 id="video">VIDEO</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/XhVWLSIiBhQ" frameborder="0" allowfullscreen></iframe>\n<div class=\'two spacing\'></div>\n<h3 id="reflection">REFLECTION</h3>\n<ul>\n<li>Who were the winners from round 1?<ul>\n<li>What was it like to join a new table in round 2?</li>\n<li>How welcome did you feel?</li>\n<li>In round 2, what was it like when a new player joined your tables?</li>\n<li>How did you feel about that person?</li></ul></li>\n<li>Who were the winners from round 2?<ul>\n<li>Did you approach changing teams in round 3 differently?</li>\n<li>When someone joined your table in round 3, did you do anything differently?</li>\n<li>What could you have done differently?</li></ul></li>\n</ul>\n<h3 id="debrief">DEBRIEF</h3>\n<ul>\n<li>Merging cultures is hard, requiring focused and dedicated effort</li>\n<li>People will naturally assume that elements of their previous culture are true for one that they are joining</li>\n<li>Some cultural rules will be common, whereas others will be completely different</li>\n<li>Culture, and the rule systems supporting it are often entirely implicit to those within the culture </li>\n<li>When we make elements of culture explicit and visual, the effort required to join is radically reduced</li>\n</ul>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369218644,
				defaultImageId: 'file_4541',
				imageIds: ['file_4541'],
				resourceIds: ['file_4599'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Large Dice, of two colours - 1 of each colour per table'
					},
					{
						value: 'Tokens or chips - 20 per player'
					},
					{
						value: 'Beakers / Cups to hold the cups - 1 per player'
					}
				],
				preparationSteps: [
					{
						value: 'Print copies of the handouts - one per table'
					},
					{
						value:
							'You need 3 - 4 tables depending on the amount of people. Tables should be separated enough so that the team can sit and move around them.'
					},
					{
						value: 'Place one of each dice on each table'
					},
					{
						value:
							'Place all of the chips in a bowl, or suitable accessible container along side the cups'
					}
				],
				safety: [],
				tags: [
					{
						value: 'culture'
					},
					{
						value: 'learning'
					},
					{
						value: 'attention'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 94,
				name: 'Specifiers and artits',
				slug: 'specifiers-and-artits',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066276237,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 118,
				name: 'Finger mirroring',
				slug: 'finger-mirroring',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '<p>One finger, one leader</p><p>Two fingers, two leaders</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685077165945,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 126,
				name: 'Career SUPERDRIVE(TM)',
				slug: 'career-superdrivetm',
				category: 'Game',
				scale: 'Min 3 - 6 players',
				timebox: '60 - 90 minutes',
				summary:
					'Career SUPERDRIVE™ frames careers as dynamic, long-term journeys, encouraging openness to new opportunities and potential reinventions. It helps individuals reflect on their career paths with clarity, confidence, and adaptability.',
				description:
					'<p class="sqsrte-large" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(0, 0, 0);font-family:Poppins;font-size:calc((var(--large-text-size-value) - 1) * 1.2vw + 1rem);font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:var(--body-font-line-height);margin:0px 0px 1rem;orphans:2;overflow-wrap:break-word;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">Think of it as <strong style="overflow-wrap:break-word;">Monopoly meets The Game of Life—but for career exploration.</strong> </p><p class="sqsrte-large" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(0, 0, 0);font-family:Poppins;font-size:calc((var(--large-text-size-value) - 1) * 1.2vw + 1rem);font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:var(--body-font-line-height);margin:1rem 0px 0px;orphans:2;overflow-wrap:break-word;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">Played in <strong style="overflow-wrap:break-word;">groups of 3-6</strong>, the game encourages <strong style="overflow-wrap:break-word;">open conversations and career clarity</strong>, breaks the taboos in lonesome career planning and helps individuals see career development as a mix of <strong style="overflow-wrap:break-word;">self-reflection, collaboration, and strategic planning.</strong></p><p class="sqsrte-large" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(0, 0, 0);font-family:Poppins;font-size:calc((var(--large-text-size-value) - 1) * 1.2vw + 1rem);font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:var(--body-font-line-height);margin:1rem 0px 0px;orphans:2;overflow-wrap:break-word;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;"><strong style="overflow-wrap:break-word;">Please email </strong><a href="mailto:hello@myworkingtitle.com"><strong style="overflow-wrap:break-word;">hello@myworkingtitle.com</strong></a><strong style="overflow-wrap:break-word;"> to purchase the game. </strong></p><p class="sqsrte-large" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(0, 0, 0);font-family:Poppins;font-size:calc((var(--large-text-size-value) - 1) * 1.2vw + 1rem);font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;line-height:var(--body-font-line-height);margin:1rem 0px 0px;orphans:2;overflow-wrap:break-word;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:pre-wrap;widows:2;word-spacing:0px;">&nbsp;</p>',
				credits: 'My Working Title Pte Ltd',
				publishedAt: 1742839359006,
				updatedAt: 1743569258722,
				defaultImageId: 'file_5392',
				imageIds: ['file_5392'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Career SUPERDRIVE Board Game'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'career development'
					},
					{
						value: 'career conversations'
					},
					{
						value: 'career insights'
					},
					{
						value: 'self reflection'
					}
				],
				ratings: null
			},
			{
				_strapiId: 28,
				name: 'High-Five',
				slug: 'high-five',
				category: 'IceBreaker',
				scale: 'Min 10, Max unlimited',
				timebox: '5 mins',
				summary: 'Simple and fast game to connect people',
				description:
					'<h2 id="howtoplay">HOW TO PLAY</h2>\n<p>Have people walk around the room and high-five when they meet one another.</p>',
				credits: '',
				publishedAt: 1538265600000,
				updatedAt: 1677369211807,
				defaultImageId: 'file_4509',
				imageIds: ['file_4509'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [
					{
						value: 'Large empty room'
					}
				],
				safety: [],
				tags: [
					{
						value: 'Fun'
					}
				],
				ratings: {
					energy: 3,
					connection: 3,
					silliness: 2
				}
			},
			{
				_strapiId: 42,
				name: 'Silent retrospective',
				slug: 'silent-retrospective',
				category: 'Facilitation',
				scale: 'Min 4, Max 10',
				timebox: '60 mnins',
				summary:
					'The silence retrospective allow your team to engage their energy and focus only for the meeting. If you have the problem on 80/20 meetings, you should try this technique. At the end of the meeting everyone will be suppressed on the result. ',
				description:
					'<h2>Before you start</h2><p>Write down the rules and agenda</p><p>Rules</p><ul><li>50 minutes of retrospective</li><li>No speaking</li><li>You can add a post-it on the parking lot any time</li></ul><p>Agenda</p><ul><li>Check-in</li><li>Icebreaker</li><li>What went well, not so well and improvements</li><li>Collaborative Drawing</li></ul><h2>Start the retrospective</h2><p>First, you need to prepare the room and put some music (10 minutes before start the meeting). The music is very important to the process, because you will capture the attention of the team. So you need to know a little about them to choose it wisely! Avoid to use music with lyrics.</p><p>When the team arrives, you show the rules and the agenda. Write on the post-it <i>"Welcome"</i>. Use the big post-its to communicate.</p><h4>Check in</h4><p>Write down on the post-it <i>"Write on a post-it what you are feeling right know"</i> and show to them. Be sure that everyone understand and see the post-it. Show with movements where to put the post-its on the wall and write <i>"Before you put on the wall, show to your colleges"</i>. Now everyone knows what they are feeling and as a team they will support each other.</p><p>Each time you finish a part on the agenda, go to the agenda paper and put a tick next to the topic that you just finished. For example, in this case tick "check in". It will help the team to understand the flow better.</p><h4>Strength</h4><p>This part is very important for the meeting, because it will show them how they will work on the rest of the meeting.</p><p>Write down on the post-it <i>"Draw the person on your right. Only the head."</i> Show them to put the post-its on the wall. Now, write on the post-it: <i>"Write down a strength of that person"</i>. When everyone has written and put on the wall, show another post-it <i>"Now, only draw a strength for the person on your left"</i>. Everyone will put the post-it over the big post-it with the faces. Next, write down <i>"Try to guess what strength it is"</i>. They will write on the post-it or on another post-it, do not worry, they are on the game… Finally write <i>"Write on the post-it that you draw, what strength it was"</i>. You start to feel good energy on the room, they are know ready for the next step. Do not forget to go to the agenda and update the progress.</p><h4>What went well, not so well and improvements</h4><p>This part will be the main goal of this meeting.</p><ol><li>Write on a post-it:<ul><li>"Write on post-its what things went well during the sprint"* and show them the flip-chart to put them on.</li><li>Tip: You can draw a smiley face on the paper.</li><li>After they put all post-its, "ask" them if it is ok. You can use a gesture as well. Be sure that you show it to everyone.</li><li>Write on a post-it <i>"Vote for the top 2 post-its that you find most important. Use 2 dot votes"</i>. You can choose more or less dots for the vote. It depends on how many post-its you have on the flip-chart.</li></ul></li><li>Now repeat the process (3.1) but for the <i>"Not so well"</i> flip-chart.</li><li>Now repeat the process (3.1) for the improvement.<ul><li>After you have the top 3 improvements, you will need some actions.</li><li>So write on a post-it <i>"For this 3 improvements, lets create real actions"</i>. Show them to put the actions near on the post-its of the improvements.</li><li>After, you must confirm that everyone accepts the actions, by writing down <i>"See what actions you as a team accept to do on the next sprint"</i>.</li><li>They will work as a self-organized team and they will find a way to communicate…</li><li>Be alert on this part, sometimes they need some guidance, like how to create a great actions (driver, time to review it, what value, …). Ask the some powerful questions to thing about it.</li></ul></li></ol><h4>Collaborative Drawing</h4><p>Finally this part will work like a check-out.</p><p>On the white flip-chart, you will put a post-it with the next challenge : <i>"Write a free line that represent the sprint"</i>, next show the next post-it <i>"The rule is simple, you are only allow to draw if your pen continuously touches the paper."</i> Show them what they can do and what they can\'t do on a post-it.</p><p>Let the magic begins…</p><p>Now show them a post-it <i>"Now you can speak"</i>. Be prepare to the their reaction…</p><h2>Facilitation</h2><p>Give the team some feedback during the meeting. For example, at the end of each big step.</p><h2>Main take-aways</h2><p>Silence is powerful. We can do so more with less.</p><h2>More</h2><p>Here a re some interesting links</p><ul><li><a href="https://engineering.talkdesk.com/silent-retrospective-36c83fff24">Silent retrospective blog post</a></li><li><a href="https://photos.app.goo.gl/nx6RFejT8UgNKvLG9">Short video</a></li><li><a href="https://photos.app.goo.gl/1P2YnwuSZeWVet2N9">Short video</a></li><li><a href="https://photos.app.goo.gl/FtonnFkDjny2J3Z36">Short video</a></li><li><a href="https://photos.app.goo.gl/SSDpLLzeYZtqg8Jw5">Short video</a></li></ul><p>Silent retrospective feedback</p>',
				credits: 'Klára Čmuchová',
				publishedAt: 1554508800000,
				updatedAt: 1700099461953,
				defaultImageId: 'file_4543',
				imageIds: ['file_4543', 'file_4544', 'file_4545'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Post-its notes'
					},
					{
						value: 'Markers'
					},
					{
						value: 'Pens'
					},
					{
						value: 'Flip-chart papers'
					},
					{
						value: 'Bluetooth sound with playlist music'
					},
					{
						value: 'Speaker'
					}
				],
				preparationSteps: [
					{
						value: 'You need on FlipChart paper on the wall to add the rules and the agenda.'
					},
					{
						value: 'You also need a Flipchart paper for the parking lot.'
					}
				],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'focus'
					},
					{
						value: 'engagement'
					},
					{
						value: 'better meetings'
					}
				],
				ratings: {
					energy: 3,
					connection: 4,
					silliness: 2
				}
			},
			{
				_strapiId: 20,
				name: 'Duel of knowledge',
				slug: 'duel-of-knowledge',
				category: 'WarmUp',
				scale: 'Min 6, Max unlimited',
				timebox: '20 mnins',
				summary:
					'For warming and helping attendees to remember the main topics of the previous day. It should be done at the beginning of the second day. The facilitator/trainer avoid to make a summary of the previous day, because is done by the attendees in a playful way',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<p>Have all participants for form two lines, facing each other.\nThe lines should be about 1 meter apart, enough for people to have a conversation.</p>\n<p>Each participant should have one participant to duel</p>\n<p>The original soundtrack of the film “The Good, the Bad and the Ugly” should be playing to create the atmosphere of western duel</p>\n<p>Each participant shall duel to his opponent (participant of the one line facing him/her) with the formula: “Could you tell me the most significant game/idea of yesterday session?”. Once the participant has answered, he takes the turn to duel his facing opponent with the same formula.</p>\n<p>Once both have answered, ONLY the participants of one of the lines move a position to the right. The last one of the line will move to the beginning of his line to occupied the position of the person that was there, because he moved to the right. The participants in the other line do not move.</p>\n<p>When each participant faces a different opponent, repeat the process of challenge the new opponent. When both have answered, repeat the process of moving the line.</p>\n<p>The game finish when each players of a line have had a duel with all players of the other line.</p>\n<h2 id="facilitation">Facilitation</h2>\n<p>Remember that the answer of each participant can change from a duel to another. In fact, as the same time participants are having duels they refresh their memory and change theirs answers.</p>\n<p>Remember to the group that in order to have different opponents,  only one line is moving.</p>\n<h2 id="debriefing">Debriefing</h2>\n<p>Asking the participants about what happened during the game:</p>\n<ul>\n<li>What did you feel during the game?</li>\n<li>Was it difficult to answer the first question?</li>\n<li>Have you changed your answer?</li>\n<li>Do you have a complete summary of the yesterday ´s session?</li>\n</ul>\n<h2 id="maintakeaways">Main take-aways</h2>\n<p>Participants have a complete summary of the previous day session done by themselves</p>',
				credits: '',
				publishedAt: 1554508800000,
				updatedAt: 1677369214526,
				defaultImageId: 'file_4500',
				imageIds: ['file_4500', 'file_4499'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Phone'
					},
					{
						value: 'Speaker'
					},
					{
						value: 'The original soundtrack of the film "The Good, the Bad and the Ugly"'
					},
					{
						value: 'Room without obstacles'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'remembering'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 19,
				name: 'Doodling together',
				slug: 'doodling-together',
				category: 'Facilitation',
				scale: 'Min 4, No limit',
				timebox: '20-30 mins',
				summary:
					'This game combines Chinese Whispers / Telephone with Doodling. It is including everyone and helps to loosen up as one cannot do any wrong.',
				description:
					'<h3 id="howtoplay">How to play</h3>\n<h4 id="round0">Round 0</h4>\n<p>Hand out pen &amp; paper to each participant; Tell them…</p>\n<ul>\n<li>that they\'ll fill it as instructed - together. </li>\n<li>after doing as instructed, they\'ll pass the paper on</li>\n<li>inform them to refrain from doing more as instructed which will be important in the last 3 steps.</li>\n<li>agree on a direction you want to pass the paper on to</li>\n</ul>\n<h4 id="round1">Round 1</h4>\n<p>Draw a form - pass  your paper </p>\n<h4 id="round2">Round 2</h4>\n<p>Make something out of the form you got from your neighbour (an object or a person, an animal) - pass your paper on</p>\n<h4 id="round3">Round 3</h4>\n<p>Add context to the paper you got from your neighbour - pass your paper on</p>\n<h4 id="round4">Round 4</h4>\n<p>Add action or drama to the paper you got  - pass on</p>\n<h4 id="round5">Round 5</h4>\n<p>Add text</p>\n<h4 id="round6">Round 6</h4>\n<p>Celebrate the weird &amp; wild creations!</p>\n<h3 id="facilitation">Facilitation</h3>\n<p>Make sure each of the player uses a decent pen in the same color; not too thick, not too thin</p>\n<p>Influence the creation by the kind of music you play during the doodling (e.g. add a seasonal twist with christmas songs)</p>\n<p>Use postcards &amp; have participants choose one at the end of your workshop; let them "beautify" w/ colors &amp; let them write their address on it &amp; pass the postcard w/ address to someone else; \nhave each of them write workshop greetings / things they want to share with each other on the postcard and play their postman so they get a little workshop souvenir afterwards.</p>\n<h3 id="debrief">Debrief</h3>\n<p>Reviewing/celebrating the creations and bringing home the key things it delivers: collaboration, creativity, building creative confidence, letting go of perfectionism, establish trust in the group, establish a jazz / jam-session mentality, including everyone</p>\n<p>A debriefing could follow the What / so What / Now what structure of liberatingstructures.com:</p>\n<p>What do you see/notice?\nAnswers could be: "a wild idea on every postcard / funny images"</p>\n<p>What does it say about us as a group? &amp; why does it matter? \nAnswers could be: "It was fun, I see that we can do wild things together"</p>\n<p>Now What? - What do we do w/ this insight?\nAnswers could be: "Continue in that spirit (inclusive, everyone contributes, work on the ideas of each other…)"</p>\n<h3 id="takeaways">Take aways</h3>\n<p>Creative confidence; Creation of objects to share; Trust in the group &amp; in collaboration</p>\n<h3 id="moredetails">More details</h3>\n<p><a href="http://akanto.de/post/103202054449/visual-improvisation-eva-lotta-lamm-hosted-an">Anja\'s blog</a></p>',
				credits: '',
				publishedAt: 1500076800000,
				updatedAt: 1677369218643,
				defaultImageId: 'file_4496',
				imageIds: ['file_4496', 'file_4497'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Paper or postcard'
					},
					{
						value: 'Pen for each participant'
					}
				],
				preparationSteps: [
					{
						value: 'sitting in a circle / circles helps but is not mandatory'
					}
				],
				safety: [
					{
						key: 'judgment',
						value:
							'Don\'t comment on the outcome in judgemental words - make it neutral / appreciative - "now let\'s see what you created! - anyone wants to share what they see here?"'
					}
				],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'creativity'
					},
					{
						value: 'building-creative-confidence'
					},
					{
						value: 'letting-go-of-perfectionism'
					},
					{
						value: 'establish-trust'
					},
					{
						value: 'inclusion'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 66,
				name: 'Constellations',
				slug: 'constellations',
				category: 'IceBreaker',
				scale: 'Infinite',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685064438854,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 95,
				name: 'Story cubes karaoke',
				slug: 'story-cubes-karaoke',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066328549,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 119,
				name: 'LEGO Serious Play',
				slug: 'lego-serious-play',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685081475884,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 23,
				name: 'Find your flock',
				slug: 'find-your-flock',
				category: 'WarmUp',
				scale: 'Min 15, Max unlimited',
				timebox: '10 mins',
				summary: 'Find you flock makes you use your ears. Careful, it can be pretty loud.',
				description:
					'<h2 id="setup">SETUP</h2>\n<p>Everyone in the room is secretly given an animal sound </p>\n<ul>\n<li><code>woof woof</code> for a dog </li>\n<li><code>meow</code> for a cat </li>\n<li><code>mooo</code> for a cow </li>\n<li><code>piu piu</code> for a bird</li>\n</ul>\n<p>Distribute the sounds evenly.</p>\n<h2 id="game">GAME</h2>\n<ul>\n<li>Have all participants close their eyes </li>\n<li>On the count of three (1,2,3) they should try to find their own kind just by using their ears</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209964,
				defaultImageId: 'file_4504',
				imageIds: ['file_4504'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'listening'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 22,
				name: 'Empathy',
				slug: 'empathy',
				category: 'Game',
				scale: 'Min 6, Max 20',
				timebox: '25 mins',
				summary:
					'Point out how important empathy is when creating any commercial offer for a customer',
				description:
					'<h3 id="setup">Setup</h3>\n<p>Each player writes on 3 or 4 different pieces of white paper names of celebrities.<br />\nThen each player writes on 3 or 4 different pieces of orange paper names of objects or usual things.  </p>\n<h3 id="howtoplay">How to play</h3>\n<p>Each player selects one white paper and one orange paper.<br />\nThen within one minute, each player has to create a slogan to sell the thing to the celebrity.</p>\n<p>Within the next minute, each player must incorporate to the slogan a distinguishing characteristic for the celebrity and the thing must not be named.</p>\n<p>The idea is to create a slogan based on the needs of the client and not on the description of the product, following Kotler\'s approach. </p>\n<h3 id="debrief">Debrief</h3>\n<p>Have every player read out their slogan before and after, then share ideas on how it improved.</p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369212758,
				defaultImageId: 'file_4503',
				imageIds: ['file_4503'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Post-it notes or pieces of paper in two different colors (white and orange)'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Empathy'
					},
					{
						value: 'Kotler-approach'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 67,
				name: 'Go',
				slug: 'go',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065775453,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 120,
				name: 'Marshmallow challenge',
				slug: 'marshmallow-challenge',
				category: 'Game',
				scale: 'Min 3, Max 50',
				timebox: '60 mins',
				summary:
					'The marshmallow challenge is a simple design exercise and team-building activity for small groups. The groups have to build the tallest free-standing structure from some spaghetti sticks, tape, and string and place one whole marshmallow on the top.',
				description: '',
				credits: 'https://www.marshmallowchallenge.com',
				publishedAt: null,
				updatedAt: 1713875268735,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 96,
				name: 'Folk tale improv',
				slug: 'folk-tale-improv',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description:
					'<p>Ask the participants to form groups.</p><p>Have them pick a folk tale that everyone in the group knows</p><ul><li>3 little pigs</li><li>Red riding hood</li><li>Hansel and Gretel</li><li>Cinderella</li></ul><p>Give them some time to prepare a 5-minute long storytelling. All members of the group should have a role.</p><p>Let each group perform their story in front of everyone.</p><p>Once all groups have performed, reduce the time they have to tell their story, and let them perform again.</p><ul><li>5 minutes</li><li>2 minutes</li><li>1 minute</li><li>30 seconds</li><li>10 seconds</li></ul>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685078024767,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Improv'
					}
				],
				ratings: null
			},
			{
				_strapiId: 33,
				name: 'Make a square',
				slug: 'make-a-square',
				category: 'WarmUp',
				scale: 'Min 10, Max unlimited',
				timebox: '10 mnins',
				summary: 'Make a square with your eyes closed',
				description:
					'<h2 id="setup">SETUP</h2>\n<ul>\n<li>Participants make a circle and then hold a closed piece of rope. </li>\n<li>With their eyes closed they have to make a square in 10 minutes.</li>\n<li>You have people blindfolded to make sure they do not see anything</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209749,
				defaultImageId: 'file_4514',
				imageIds: ['file_4514'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'listening'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 39,
				name: 'Opposites',
				slug: 'opposites',
				category: 'WarmUp',
				scale: 'Min 4, Max unlimited',
				timebox: '10 mnins',
				summary: 'Reprogram your wetware by following simple instructions',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<p>The facilitator gives instructions to participants.</p>\n<h4 id="level1">Level 1</h4>\n<p>Everyone walks around the room. </p>\n<ul>\n<li>When I say <code>stop</code> you stop</li>\n<li>When I say <code>walk</code> you walk</li>\n</ul>\n<p>You can ask people to <code>walk faster</code></p>\n<h4 id="level2">Level 2</h4>\n<p>Everyone walks around the room. </p>\n<ul>\n<li>When I say <code>stop</code> you walk</li>\n<li>When I say <code>walk</code>, you stop.</li>\n</ul>\n<p>PRO TIP : You can trick people by saying <code>stop faster</code></p>\n<h4 id="level3">Level 3</h4>\n<p>Everyone walks around the room. </p>\n<ul>\n<li>When I say <code>stop</code> you walk</li>\n<li>When I say <code>walk</code>, you stop.</li>\n<li>When I say <code>clap</code>, you clap.</li>\n<li>When I say <code>name</code>, you say your name.</li>\n</ul>\n<h4 id="level4">Level 4</h4>\n<p>Everyone walks around the room. </p>\n<ul>\n<li>When I say <code>stop</code> you walk</li>\n<li>When I say <code>walk</code>, you stop.</li>\n<li>When I say <code>clap</code>, you say your name.</li>\n<li>When I say <code>name</code>, you clap.</li>\n</ul>\n<h4 id="level5">Level 5</h4>\n<p>Everyone walks around the room. </p>\n<ul>\n<li>When I say <code>stop</code> you walk</li>\n<li>When I say <code>walk</code>, you stop.</li>\n<li>When I say <code>clap</code>, you say your name.</li>\n<li>When I say <code>name</code>, you clap.</li>\n<li>When I say <code>jump</code>, you jump.</li>\n<li>When I say <code>dance</code>, you dance.</li>\n</ul>\n<h4 id="level6">Level 6</h4>\n<p>Everyone walks around the room. </p>\n<ul>\n<li>When I say <code>stop</code> you walk</li>\n<li>When I say <code>walk</code>, you stop.</li>\n<li>When I say <code>clap</code>, you say your name.</li>\n<li>When I say <code>name</code>, you clap.</li>\n<li>When I say <code>jump</code>, you dance.</li>\n<li>When I say <code>dance</code>, you jump.</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369211640,
				defaultImageId: 'file_4532',
				imageIds: ['file_4532'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'synchronization'
					},
					{
						value: 'plasticity'
					},
					{
						value: 'multitasking'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 47,
				name: '20-20',
				slug: '20-20',
				category: 'Game',
				scale: 'Min 20, Max 35',
				timebox: '30 mins',
				summary: 'Let all participants paint 20 icons/symbols in 20 sec each.',
				description:
					'<h3 id="howtoplay">How to play</h3>\n<p>Tell a word the participants should draw/scribble (i.e. Internet).<br />\nThe participants have 20 sec to draw.\nAfter the 20 sec. have elapsed, tell the next word.</p>\n<p>Do that for 20 rounds.</p>\n<h3 id="debrief">Debrief</h3>\n<ol>\n<li>You can see the creative potential of "everybody".</li>\n<li>It proves everybody can draw/scribble.</li>\n<li>Depending on the words you chose, you can address a new topics or new subject matter.</li>\n</ol>\n<p>Easy to facilitate, great learning.</p>',
				credits: '',
				publishedAt: 1505779200000,
				updatedAt: 1677369215233,
				defaultImageId: 'file_4567',
				imageIds: ['file_4567', 'file_4564', 'file_4566', 'file_4565', 'file_4563'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Post-it notes'
					},
					{
						value: 'Markers (Sharpies)'
					}
				],
				preparationSteps: [
					{
						value: 'Free a wall so that you can display the results'
					}
				],
				safety: [],
				tags: [
					{
						value: 'Creativity'
					},
					{
						value: 'Ideation'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 40,
				name: 'Postcards',
				slug: 'postcards',
				category: 'Game',
				scale: 'Min 5, Max 60+',
				timebox: '45-60 mins',
				summary:
					'Technology has introduced to us many new forms of communication. Ultimately though none of them can replace the value of a simple face to face conversation, but still we seem to prefer them. It’s easier to write an email or send a text. I feel more conformable writing down my requirement and sending it over. This game is designed to demonstrate the value lost by avoiding face to face conversation.',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Ask the group to self organise into even teams (5-10 people).<br />\nAsk for one volunteer per team, someone creative with a good imagination.<br />\nGather the volunteers, tell the teams to pick table, sit down, make themselves comfortable and  introduce each other.  </p>\n<p>Meanwhile with the volunteers, brief them:</p>\n<ul>\n<li>In this game they are customers.</li>\n<li>They lack the ability to draw, but their teams are able to provide a drawing service. </li>\n<li>You goal is to work with your team to produce a picture on the A2 flip chart paper.</li>\n<li>Think of your favourite place in the world.</li>\n<li>I want you to collaborate with your team to produce a picture of this place.</li>\n<li>The picture should be completed in 10 mins.</li>\n<li>Be passionate, be emotive but also be inclusive. Listen to their ideas and try to incorporate them. If they make a mistake, go with it.</li>\n</ul>\n<p>Send the volunteers back to the teams.</p>\n<h4 id="concept">CONCEPT</h4>\n<p>This game has three rounds.</p>\n<ul>\n<li>In round 1, the teams will create a picture with complete collaboration.  </li>\n<li>In round 2, the teams will attempt to use words to describe how to re-draw that picture.  </li>\n<li>In round 3, the teams will attempt to use each other\'s words to draw pictures.  </li>\n</ul>\n<p>The teams will experience a wide variety of emotions as this game plays out.<br />\nThe teams will discover that the written language is very prohibitive when attempting to give instructions.<br />\nThe teams will discover that using written instructions to create something will involve large amounts of assumptions and interpretations, causing them to ultimately to fail.  </p>\n<h4 id="rules">RULES</h4>\n<p>In round 1, the customer cannot touch the pens.<br />\nTeams may not see what other teams are producing.<br />\nNo photographing! :)  </p>\n<h4 id="round1">Round 1</h4>\n<p>Announce:</p>\n<ul>\n<li>In this game, you all are artists.</li>\n<li>Your customers cannot draw.</li>\n<li>Your customers have a picture they’d like you help to produce. </li>\n<li>You have ten minutes to collaborate with your customer and make their picture.</li>\n<li>Any questions?</li>\n<li>Go!  </li>\n</ul>\n<p>Keep good time keeping, calling out remaining time every min or two<br />\nLook out for teams that haven’t put pen to paper after 3 or 4 mins, remind them that the goal is to have a complete picture by 10<br />\nLook out for people who are not drawing, remind them there’s more than one pen  </p>\n<h4 id="round1reflectionexamplequestions">Round 1 - Reflection (example questions)</h4>\n<p>Artists: How did that feel?<br />\nCustomers: How did you find that experience?<br />\nCustomers - do you like your pictures?<br />\nHow accurate are the results?  </p>\n<h4 id="round2">Round 2</h4>\n<p>Announce:</p>\n<ul>\n<li>Customers: Thank you for playing customers - For this round and the next, please just be team members.  </li>\n<li>We have a problem. The printing company we are going to use are in Edinburgh, and only have access to the most basic of email services. Unfortunately we can’t send images.  </li>\n<li>You’ve all received or written requirements before right?  </li>\n<li>In your teams, use the lined paper and construct an email that describes how to recreate your picture.  </li>\n<li>You have 10 minutes.  </li>\n<li>Questions?  </li>\n<li>Go!  </li>\n</ul>\n<p>Keep good time keeping, calling out remaining time every min or two.<br />\nKeep an eye out for teams who aren’t writing stuff yet. Remind them of the timebox.<br />\nKeep an eye out for teams who are making one person write. Suggest they could could share the load.  </p>\n<h4 id="round2reflectionexamplequestions">Round 2 - Reflection (example questions)</h4>\n<p>How did that feel? \nWhy was it hard?<br />\nWhy wasn’t it much fun?<br />\nHow accurate do you feel your emails are?  </p>\n<h4 id="round3">Round 3</h4>\n<p>Announce:  </p>\n<ul>\n<li>Ok, just for fun, lets see how accurate they were =D  </li>\n<li>Turnover (hide) your A2 pictures, and grab a fresh sheet.  </li>\n<li>Swap emails with another table.</li>\n<li>Ok, your challenge is to recreate that teams pictures from the email in front of you.  </li>\n<li>You have 10 mins.</li>\n<li>Questions?  </li>\n<li>Go!  </li>\n</ul>\n<p>Keep good time keeping, calling out remaining time every min or two.<br />\nLook out for teams that haven’t put pen to paper after 3 or 4 mins, remind them that the goal is to have a complete picture by 10.<br />\nLook out for people who are not drawing, remind them there’s more than one pen.  </p>\n<h4 id="round3reflectionexamplequestions">Round 3 - Reflection (example questions)</h4>\n<p>How did that feel?<br />\nWhy was it hard?<br />\nWhy wasn’t it much fun?<br />\nWhat was missing?<br />\nHow accurate do you feel your picture are?  </p>\n<h4 id="wrapup">Wrap up</h4>\n<p>Compare the before and after pictures  </p>\n<ul>\n<li>Make it a laugh  </li>\n<li>Applaud everyone\'s efforts  </li>\n</ul>\n<p>Reflection (example questions)  </p>\n<ul>\n<li>Ask people to point out the differences   </li>\n<li>Ask which of the experiences they preferred today?  </li>\n<li>Ask why they are different?  </li>\n<li>Ask who here uses email regularly?  </li>\n<li>Ask who here had ever received instruction in an email?  </li>\n<li>Ask who here has ever given instruction via email?  </li>\n</ul>\n<h3 id="takeaways">TAKEAWAYS</h3>\n<ul>\n<li>It’s impossible to accurately convey requirements, instruction, need via the written word.  </li>\n<li>Filling in the gaps<br />\nThe less words you use the more assumptions will happen<br />\nThe more words you use, the more interpretations will happen  </li>\n<li>Agile has the principle: The most efficient and effective method of conveying information to and within a team is face-to-face conversation.  </li>\n</ul>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369216569,
				defaultImageId: 'file_4535',
				imageIds: [
					'file_4533',
					'file_4534',
					'file_4535',
					'file_4536',
					'file_4537',
					'file_4538',
					'file_4539'
				],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Tables (1 per team)'
					},
					{
						value: 'A2 flip chart paper (2 sheets per team)'
					},
					{
						value: 'Packs of colouring pens (1 per team)'
					},
					{
						value: 'A4 paper (preferable lined)'
					},
					{
						value: 'Blue tack'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'face-to-face communication'
					},
					{
						value: 'collaboration'
					},
					{
						value: 'competitive'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 68,
				name: 'Biodancing',
				slug: 'biodancing',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065734363,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 97,
				name: 'Count to 20',
				slug: 'count-to-20',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066738129,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 121,
				name: 'Paper tower',
				slug: 'paper-tower',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685081922346,
				defaultImageId: null,
				imageIds: ['file_5028'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 26,
				name: 'Hello Johnny',
				slug: 'hello-johnny',
				category: 'WarmUp',
				scale: 'Min 6, Max unlimited',
				timebox: '15 mnins',
				summary:
					"Hello Johnny is a very fun, very dynamic warmup. It's also a brain teaser that will require you use your memory.",
				description:
					'<h2 id="howtoplay">How to play</h2>\n<h4 id="1johnny">1. Johnny</h4>\n<p>Everyone stands in a circle and everyone is named <em>Johnny</em>. </p>\n<ol>\n<li>First person to start can go to any other person and greets them: <ul>\n<li><code>Hello Johnny</code> says the first person  </li>\n<li><code>Hello Johnny</code> replies the person being greeted</li>\n<li><code>Please, say hello to Johnny, Johnny</code> says the first person while introducing a third person to the second (can point to anyone in the circle)</li></ul></li>\n<li>The second person moves toward the third person</li>\n<li>The second person introduces himself/herself --&gt; back to 1.</li>\n</ol>\n<h4 id="2pippa">2. Pippa</h4>\n<p>If someone makes a mistake, they become <em>Pippa</em>.</p>\n<ul>\n<li>Everyone else has to refer to them as <em>Pippa</em>.<ul>\n<li><code>Hello Pippa</code> </li>\n<li><code>Hello Johnny</code></li>\n<li><code>Please, say hello to Johnny, Pippa</code> </li></ul></li>\n<li>Then<ul>\n<li><code>Hello Johnny</code></li>\n<li><code>Hello Pippa</code></li>\n<li><code>Please, say hello to ...</code></li></ul></li>\n</ul>\n<h4 id="3flomo">3. Flomo</h4>\n<p>If someone make a mistake while being <em>Pippa</em>, they become <em>Flomo</em></p>\n<ul>\n<li>A <em>Flomo</em> can do and say anything. <ul>\n<li><code>Hey.... how is it going, dude</code> while jumping everywhere</li>\n<li><code>Hello Flomo</code></li>\n<li><code>Please, say hello to my butt</code> while spanking their butt</li></ul></li>\n<li>If someone makes a mistake because of <em>Flomo</em>, then <em>Flomo</em> becomes <em>Johnny</em> again, and the one who made the mistake become either <em>Pippa</em> or <em>Flomo</em>, depending on the number of mistakes they already did.</li>\n</ul>\n<h2 id="facilitation">Facilitation</h2>\n<p>As a facilitator</p>\n<ul>\n<li>Explain the <em>Johnny</em> rule at first</li>\n<li>Once people start to get the hang of it, ask them to go faster</li>\n<li>After a while, add the <em>Pippa</em> rule</li>\n<li>If people are too slow or hesitate, stop them and tell them they have become <em>Pippa</em></li>\n<li>People should use the exact words. No approximation should be allowed.</li>\n<li>Be very drastic about the rules and push people to go faster. It\'s funnier that way</li>\n<li>Make sure your remember who is <em>Johnny</em> and who is <em>Pippa</em></li>\n<li>If you don\'t remember, stop the game and ask who is who</li>\n<li>Once everyone is confused enough, add the <em>Flomo</em> rule</li>\n<li>There can be as many <em>Pippa</em> and <em>Flomo</em> as possible</li>\n<li>The goal of a <em>Flomo</em> should be to become <em>Johnny</em> again, so push them to do crazy things so that others make mistakes</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209250,
				defaultImageId: 'file_4507',
				imageIds: ['file_4507'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'brain-teaser'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 122,
				name: 'The Samurai shower',
				slug: 'game-1',
				category: 'WarmUp',
				scale: '',
				timebox: '15-20 min',
				summary:
					'Dynamic relaxation session with self-massages, in groups from 3 to 30+ people. \nThis session consists in an energetic shower (with movements that simulate water, soap, rinsing) that ends with a sword cut of the person’s obstacles.\n\nGoals:\nBody schema integration\nRecognition of yourself as a unique individual\nEnergizing the body\nEnergetic “cleansing”\nIncrease the power of concentration before carrying out a task\n',
				description:
					'<p style="margin-left:0cm;"><span lang="EN-US" dir="ltr"><strong>We start in a vertical posture:</strong> feet hip-width apart, well supported on the floor. Knees relaxed, hips slightly retroverted, arms relaxed, chest straight. Relax into the posture; feel the Earth’s gravity. Let go of the tensions with each breath out.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><i><span lang="EN-US" dir="ltr">The samurai bath is divided into 4 parts.</span></i></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr"><strong>1) The water</strong></span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Stimulate the body from head to toe with little touches with your fingertips. Massage your face gently.</span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Return to the starting position, relax and be aware of the sensations.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr"><strong>2) The soap (lathering)</strong></span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Rub the body from head to toe, with your fingertips or the palm of your hands. Don\'t touch your face anymore.</span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Return to the starting position, relax and be aware of the sensations.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr"><strong>3) The rinse</strong></span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Make firm movements with the palm of your hand, from the inside out, as if you were “dusting off” your body. Start at the top of the head and work your way down. Imagine that the tensions are leaving with the rinsing.</span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Return to the starting position, relax and be aware of the sensations.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr"><strong>4) The saber gesture</strong></span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Bring your hands together in front of your body. Inhale and raise your hands over your head. Hold your breath and think of an obstacle you want to eliminate.</span></p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">As you exhale, “cut” the air in front of you, releasing the air all at once.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr">Stay down for a few minutes, breathing. Gradually return to the starting position.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr"><strong>Final integration pause:&nbsp;</strong>awareness of the shape and presence of the body, awareness of sensations.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><span lang="EN-US" dir="ltr"><strong>Variation:</strong> If there are chairs available, the group can sit down in the end for a more profound, relaxing pause.</span></p><p style="margin-left:0cm;">&nbsp;</p><p style="margin-left:0cm;"><i><span lang="EN-US" dir="ltr">At the end, it’s possible to ask some of the participants (volunteers) to share their experience and impressions about the samurai bath, asking targeted questions: general impression, what was the best moment of this practice, why was it so positive, etc.&nbsp;</span></i></p><p style="margin-left:0cm;"><i><span lang="EN-US" dir="ltr">Encourage them to practice this technique in their everyday life.</span></i></p>',
				credits: '',
				publishedAt: 1695296031038,
				updatedAt: 1695617885999,
				defaultImageId: 'file_5103',
				imageIds: ['file_5105', 'file_5103'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value:
							'No extra materials are needed. Each participant must have enough space to move around without bumping into others.'
					}
				],
				preparationSteps: [
					{
						value:
							'Before beginning, the exercise is described to participants so they can relax and trust the process.'
					}
				],
				safety: [],
				tags: [
					{
						value: 'relaxation'
					},
					{
						value: ' sophrology'
					},
					{
						value: 'wellness'
					},
					{
						value: 'energy'
					},
					{
						value: ' concentration'
					},
					{
						value: ' visualization'
					}
				],
				ratings: {
					energy: 4,
					connection: 3,
					silliness: 2
				}
			},
			{
				_strapiId: 34,
				name: 'Marshmallow Suspension',
				slug: 'marshmallow-suspension',
				category: 'Game',
				scale: 'Min 2, Max 40 (at least two teams with 4-6 each is ideal)',
				timebox: '45 - 60 mins',
				summary:
					'This is a fun game that can be played with many teams in a competition. Teams build a structure with a limited array of materials and are challenged to make a number of decisions, measuring their success not by performance but rather by return on investment.',
				description:
					'<h4 id="materials">Materials</h4>\n<ul>\n<li>Building materials (lots of) <ul>\n<li>Paper clips</li>\n<li>Small rubber bands</li>\n<li>Ice-Cream sticks</li>\n<li>4x2 Lego bricks</li>\n<li>Post it notes (standard square)</li>\n<li>String (cut into 10 cm lengths)</li>\n<li>Tooth picks</li>\n<li>Straws</li></ul></li>\n<li>Marshmallows (lots of)</li>\n<li>Small envelopes (one per team)</li>\n<li>Flipchart or board and pens</li>\n</ul>\n<h4 id="preparations">Preparations</h4>\n<ul>\n<li>Create a game pack for each team with FOUR of each building material and an envelope </li>\n<li>Create a “market place” of materials laying out one of each, with a post it note for their cost<ul>\n<li>Paper clips - 1</li>\n<li>Small rubber bands - 1</li>\n<li>Lollipop sticks - 2</li>\n<li>4x2 Lego bricks - 2</li>\n<li>Post it notes (standard square) - 2</li>\n<li>String (cut into 10 cm lengths) - 3</li>\n<li>Tooth picks - 1</li>\n<li>Straws - 3</li></ul></li>\n<li>Create on a flipchart or board create a scoreboard of : <ul>\n<li>team </li>\n<li>marshmallows</li>\n<li>cost</li>\n<li>ROI  </li></ul></li>\n<li>Indicate on the scoreboard that ROI = (Marshmallows * 10) - cost / cost</li>\n</ul>\n<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Divide the group into teams of 3 or 4<br />\nAssign each team a table<br />\nGive each time a game pack  </p>\n<h4 id="rules">RULES</h4>\n<p>Only materials in the pack and those purchased may be used (The envelope may not be used)<br />\nMarshmallows may not be used as building material<br />\nThe marshmallow(s) must be suspended at least 10 cm above the table<br />\nThe structure, when measured, must stand freely for 10 seconds<br />\nTeams have 20 mins  </p>\n<h4 id="goal">GOAL</h4>\n<p>Score as many points possible, points are awarded for each marshmallow suspended 10 cm above your tables and are deducted for all materials used.</p>\n<h3 id="facilitation">FACILITATION</h3>\n<p>Set the scene: “In this engineering challenge you team\'s goal is to build a platform that can hold marshmallows. It must be 10 cm or more off of the table. You will lose points (with 1, 2 or 3) for each item of material you use, but you gain points for each marshmallow that your structure can support.”<br />\nClarify the rules<br />\nContinue: “I have giving you packs with a number of materials, if you need more ask me”<br />\nEnsure each team understands and start the timer<br />\nTeams can “buy” or “return” items with you. There is no currency in this game, simply a calculation for the materials consumed<br />\nWhen teams ask you to adjudicate their structure, first ask the team to calculate their costs, then measure that it is indeed 10 cm or higher. Lastly ask the team to step away and time for 10 seconds.<br />\nRecord the cost on the scoreboard and calculate the ROI<br />\n<strong>TIP</strong>: This is a great exercise to get photos.<br />\nWarn the teams as the time runs out<br />\n<strong>TIP</strong>: Inform teams how the other teams are doing (to encourage competition)<br />\n<strong>TIP</strong>: Inform how previous teams have done (to persuade teams to use more Marshmallows)<br />\nWarn the teams with 2 mins to go that it\'s their last chance to get measured<br />\nAt the end of the time stop all teams.<br />\nReview the scores, and celebrate the winners.  </p>\n<h3 id="reflection">REFLECTION</h3>\n<ul>\n<li>Team with the most marshmallows: what was your driver?  </li>\n<li>Team with the best ROI: what drove you?  </li>\n<li>How did you approach the task?<br /><ul>\n<li>Did anyone plan? </li>\n<li>Did anyone prototype?</li>\n<li>Did anyone calculate their return of investment?  </li></ul></li>\n<li>Was your team always in complete agreement about the construction or the strategy?</li>\n</ul>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369211156,
				defaultImageId: 'file_4515',
				imageIds: ['file_4515'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'valuable'
					},
					{
						value: 'simplicity'
					},
					{
						value: 'competitive'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 32,
				name: 'Magic Triangles',
				slug: 'magic-triangles',
				category: 'Game',
				scale: 'Min 14, Max 100',
				timebox: '15 mnins',
				summary:
					"Let's actually experience how complexity works, and what makes interventions in complex systems difficult. ",
				description:
					'<h2 id="howtoplay">How to play</h2>\n<h4 id="roundone">Round one</h4>\n<p>Setup:\nDefine a sufficiently large playing field without obstacles.</p>\n<ol>\n<li>Let the participants walk freely and randomly around in the empty space. If necessary indicate the limits of the playing field, e.g. furniture, plants.</li>\n<li>When the participants are fairly well distributed across the field:<ul>\n<li>„Stop. Do not turn. Memorize one other person that you can see in front of you. If there is no-one, turn a bit until you see one.“</li>\n<li>„Now turn by 180°. Memorize one other person you can see in front of you. If there is no-one, turn a bit until you see one. “</li>\n<li>„We are now creating a complex system with one simple rule: Without leaving the playing field, place yourself in such a way that both people you have memorized form a equidistant or isosceles triangle, i.e. they form a triangle with you where both of them are in equal distance to you.“</li></ul></li>\n<li>While they are rearranging themselves: „Observe what is happening. This is a complex self-organizing system based on a simple rule.“</li>\n<li>When they are settled, define 2-3 people as managers: <ul>\n<li>“Whatever the mangers do, the rule of the triangles still applies. If you don’t have the two people in your triangle, you correct your position accordingly. This instruction overrules everything else.”</li></ul></li>\n<li>Now you instruct the managers:<ul>\n<li>„Your job is to move everyone in such a way that they are all on one side of the invisible line (you indicate a line dividing the field in two equal halves). The way you can do this is to take them one by one by their shoulders and move them to the desired place. In order to do so, you no longer need to keep your own triangle. But everybody else who is connected to the manager and to everybody else, remains connected.”</li></ul></li>\n<li>If appropriate, you can interrupt the activity, and ask everyone to propose possible actions to the managers.</li>\n<li>When everybody has understood what is happening, stop the game – even if the objective has not been achieved yet.</li>\n<li>An alternative (but a bit tedious): The managers are to analyse the system, then make a plan, and then execute according to the plan.</li>\n</ol>\n<h4 id="roundtwo">Round two</h4>\n<p>Experience how complexity can form spontaneous order out of chaos</p>\n<ol>\n<li>Let everybody walk around again. Stop. <ul>\n<li>“Select one person. This person is your enemy.”</li>\n<li>“Turn around. Select another person. This person is your friend.”</li>\n<li>“Place yourself in such a way that the friend is between you and the enemy.”</li></ul></li>\n<li>What you can observe is spontaneous formation of order (people form a straight line, although nobody had that overall objective), and sometimes a homeostat: a dynamic balance of people running in a circle because they cannot find a position that fits them all.</li>\n<li>Once it has happened, change the rule:<ul>\n<li>“Now you will protect your friend: place yourself between your friend and the enemy.”</li></ul></li>\n<li>What happens is that immediately the system shrinks to a very close huddle of people.</li>\n</ol>\n<h2 id="debriefingthegame">Debriefing the game</h2>\n<p>Here are some questions for debriefing. They can be given to groups, or you let the plenary dictate to you:</p>\n<ol>\n<li>“You have behaved as a complex system. How did the complexity show?”</li>\n<li>“How difficult was it to set up something that governs a complex system?”</li>\n<li>“What has made the manager’s interventions difficult? “\nPossible responses – if necessary probe for them:<ol>\n<li>No full understanding of the system</li>\n<li>No co-ordination between managers</li>\n<li>No awareness that people are connected to managers: Side-effects of their interventions. They are not outside of the system.</li></ol></li>\n<li>“Does it make sense for the managers to try to understand all connections?”</li>\n<li>“Does it make sense for the managers to try to understand some of the connections?”</li>\n<li>“What helped the managers?”\nPossible responses – if necessary probe for them: <ol>\n<li>Trial and error</li>\n<li>Accept partial understanding of the system</li>\n<li>Co-ordinate</li>\n<li>Constant observation of what’s happening</li>\n<li>Delegation: Use the self-organizing capability of the system to deal with the complexity in the system. </li></ol></li>\n<li>“In the second round: What was different?”</li>\n<li>“What created order in the second round?”</li>\n<li>If appropriate: “What can we tell about the sub-groups that never came to rest?”</li>\n<li>“What is similar to situations in real professional life?”</li>\n</ol>\n<h2 id="maintakeaways">Main take-aways</h2>\n<ul>\n<li>Complexity is the intricate interdependency of elements.</li>\n<li>Simple rules can create complex systems.</li>\n<li>Linear interventions don\'t work well in complex systems. There are many unpredicted side-effects.</li>\n<li>If you let complexity manage complexity, i.e. through delegation and self-organization, this helps.</li>\n<li>Complex systems can spontaneously form order and stability.</li>\n<li>A homeostat is a sub-system which keeps in constant motion, but if you can close it off, it doesn\'t affect the rest of your system.</li>\n</ul>',
				credits: '',
				publishedAt: 1554508800000,
				updatedAt: 1677369214555,
				defaultImageId: 'file_4513',
				imageIds: ['file_4513'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Large empty room'
					}
				],
				preparationSteps: [],
				safety: [
					{
						key: 'Physical contact',
						value: 'There could be physical contact, so make sure people have enough room to play.'
					}
				],
				tags: [
					{
						value: 'complexity'
					},
					{
						value: 'system-thinking'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 27,
				name: 'Houses and tenants',
				slug: 'houses-and-tenants',
				category: 'WarmUp',
				scale: 'Min 10, Max 20',
				timebox: '15 mins',
				summary: 'Find a house to the little guy.',
				description:
					'<h3 id="howtoplay">How to play</h3>\n<p>Create a house by having two people facing each other and join their hands together in the air to for the left and right wall of the house.\nA tenant should stand in the house, in the middle of both other people.</p>\n<p>When the facilitator indicates</p>\n<ul>\n<li><code>left</code>, all the <em>left walls</em> of the house run around to find another house.</li>\n<li><code>right</code>, all <em>right walls</em> of the house run around to find another house.</li>\n<li><code>tenant</code>, all tenants of the house run around to find another house.</li>\n<li><code>full house</code>, all parts of the house run around to create a complete new house.</li>\n</ul>\n<p>Make sure people have enough space to run around.</p>\n<h3 id="video">Video</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/iNrzb5meATs" frameborder="0" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1498953600000,
				updatedAt: 1677369216518,
				defaultImageId: 'file_4508',
				imageIds: ['file_4508'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Large room with free space'
					}
				],
				preparationSteps: [
					{
						value: 'Free the room of all obstacles, table or chairs'
					}
				],
				safety: [
					{
						key: 'Physical contact',
						value: 'People will run around and should be careful not to bump into each other.'
					}
				],
				tags: [
					{
						value: 'Team-building'
					},
					{
						value: 'Fun'
					},
					{
						value: 'Cohesion'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 98,
				name: 'Speed dating',
				slug: 'speed-dating',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066758621,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 69,
				name: 'Back to back dancing',
				slug: 'back-to-back-dancing',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description:
					"<ul><li>Ask people to pair up</li><li>Tell them to stand back to back (there must be contact between the people's back)</li><li>Put on some music</li><li>Ask them to start slowly moving</li></ul>",
				credits: '',
				publishedAt: null,
				updatedAt: 1685077110244,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 79,
				name: 'Squiggly birds',
				slug: 'squiggly-birds',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description:
					'<ol style="list-style-type:decimal;"><li>On an A4 paper, have people draw 6 random shapes (more or less closed)</li><li>Pass the paper to their left</li><li>Have people draw birds from the shapes (add a beak, legs, wings if necessary)</li><li>Pass the paper to their left</li><li>Have people choose one of the birds. The must find a name and tell the story of why they picked that specific bird</li></ol><p>&nbsp;</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685083339754,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 37,
				name: '1,2,3... gesture',
				slug: '123-gesture',
				category: 'WarmUp',
				scale: 'Min 6, Max unlimited, you need an even number',
				timebox: '10-15 mins',
				summary: 'This is a nice warm up game. It’s fun and very simple to setup.',
				description:
					'<h3 id="setup">Setup</h3>\n<p>Have people pair up and face each other.</p>\n<h3 id="howtoplay">How to play</h3>\n<h4 id="phase1">Phase 1</h4>\n<ul>\n<li>First person counts 1</li>\n<li>Second person counts 2</li>\n<li>First person counts 3</li>\n<li>Second person counts 1</li>\n<li>First person counts 2</li>\n<li>Second person counts 3</li>\n<li>First person counts 1</li>\n<li>And so forth…</li>\n</ul>\n<h4 id="phase2">Phase 2</h4>\n<p>Start over on the same rhythm but replace the number 1 with a gesture, like clapping your hands, jumping or touching your nose.\nEach pair should come up with their own gesture. \nIt should be the same within the pair, but different among pairs.</p>\n<h4 id="phase3">Phase 3</h4>\n<p>Start over on the same rhythm, keep the gesture replacing the number 1, and find a different gesture to replace the number 2.\nYour pairs should have now two gestures, and only speak out number 3.</p>\n<h4 id="phase4">Phase 4</h4>\n<p>In the last phase, the pairs should replace all numbers by 3 different gestures.</p>\n<h3 id="video">Video</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/5UEKCPk4A84" frameborder="0" allowfullscreen></iframe>\n<p><br></p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/BoA8ODlTVSA" frameborder="0" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369211968,
				defaultImageId: 'file_4527',
				imageIds: ['file_4527'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Fun'
					},
					{
						value: 'Synchronization'
					},
					{
						value: 'Collaboration'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 38,
				name: 'Newspaper',
				slug: 'newspaper',
				category: 'WarmUp',
				scale: 'Min 4, Max 20',
				timebox: '15 mins',
				summary: 'Get closer together thanks to a newspaper.',
				description:
					'<h3 id="howtoplay">How to play</h3>\n<p>Each group of 4 people should stand on 2 sheets of newspaper.<br />\nAll members of the group should always step on the newspaper and not lean out of it, holding the position 5 seconds without falling or stepping outside. </p>\n<p>Put on some music. \nWhile the music is on, each team member walk around the newspaper.\nWhen the music stop, everyone should jump on the newspaper and hold for five seconds.  </p>\n<p>Then every team folds (or tear down) the newspaper in half.\nTurn the music on again and do it one more time.</p>\n<p>Continue as long as the size of the newspaper piece is reasonably big enough.</p>\n<h3 id="takeaways">Take Aways</h3>\n<p>Fun and trust.</p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369216625,
				defaultImageId: 'file_4528',
				imageIds: ['file_4528', 'file_4529', 'file_4531', 'file_4530'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Newspaper pages'
					}
				],
				preparationSteps: [
					{
						value: 'Free the room of all obstacles, table or chairs'
					}
				],
				safety: [
					{
						key: 'Physical contact',
						value: 'People should be comfortable with physical contact.'
					}
				],
				tags: [
					{
						value: 'Team-building'
					},
					{
						value: 'Trust'
					},
					{
						value: 'Creativity'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 43,
				name: 'The wind blows strongly for...',
				slug: 'the-wind-blows-strongly-for',
				category: 'IceBreaker',
				scale: 'Min 15, Max 20',
				timebox: '10 mins',
				summary: 'Learn to know each other and create connections.',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<p>Make sure there is one chair per participant except one.\nEveryone sits except one person. </p>\n<p>The one who is standing says :</p>\n<blockquote>\n  <p>The wind blows strongly for…</p>\n</blockquote>\n<p>and a characteristic that some people have in common</p>\n<p>For example </p>\n<blockquote>\n  <p>The wind blows strongly for those who have ever been in Asia.</p>\n</blockquote>\n<p>or</p>\n<blockquote>\n  <p>The wind blows strongly for those who have children.</p>\n</blockquote>\n<p>Those who are concerned stand up and go around the group of chairs, looking for another empty seat.\nThe person who stays on foot then has to continue.</p>\n<p>You can stop the game whenever you decide that the people know enough about each other.</p>\n<h3 id="takeaways">TAKEAWAYS</h3>\n<p>Learn about each other, on a personal of professional level.</p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369217267,
				defaultImageId: 'file_4546',
				imageIds: ['file_4546'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Large room'
					},
					{
						value: 'Chairs'
					}
				],
				preparationSteps: [
					{
						value: 'A room with chairs placed randomly, one less than the number of participants'
					}
				],
				safety: [
					{
						key: 'Physical contact',
						value:
							'When people run around to find a new chair, there is a possibility of physical contact. Make sure there is enough room for everyone to stay safe.'
					}
				],
				tags: [
					{
						value: 'knowing-each-other'
					},
					{
						value: 'trust'
					},
					{
						value: 'empathy'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 99,
				name: 'Empathy map',
				slug: 'empathy-map',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066782529,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 70,
				name: 'Living statues',
				slug: 'living-statues',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary:
					'Groups of 5\n1 starts\nthen 2\nthen 3\netc.\n\nThen merge 2 groups.\nThen merge 4 groups.\nThen all together ',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065845355,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 45,
				name: 'Name the circle',
				slug: 'name-the-circle',
				category: 'IceBreaker',
				scale: 'Min 8, No limit',
				timebox: '5 - 15 mins, depending on the size of the group',
				summary:
					"This ice breaker is ideal when you start an event or a meeting and people don't really know one another. It is very useful to learn all the names of the participants.",
				description:
					'<h3 id="setup">Setup</h3>\n<p>Have all people stand up and form a circle.</p>\n<h3 id="howtoplay">How to play</h3>\n<p>Start by stating your first name and an activity you like to do, while doing a gesture that illustrate that activity.<br />\nFor example "I am Cédric and I like to do yoga", while you mimic a meditation posture.<br />\nThen ask your neighbor (left or right, it doesn\'t really matter) to repeat what you just said, and do the same for himself.<br />\nOnce this is done, move on to the next person, and so forth.<br />\nTo be fair, you should be the one finishing the game by stating the names and activities of all the participants.<br />\nIt\'s a good way for you as a facilitator to remember everyone\'s first name afterwards.  </p>\n<h3 id="takeaway">Take Away</h3>\n<p>Everyone will remember any other person\'s name without having to use name tags.<br />\nSometimes, you will hear them refer to a person by her activity, when her name is not coming to mind.<br />\nIt\'s a lot of fun.  </p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369209741,
				defaultImageId: 'file_4553',
				imageIds: ['file_4553'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'introduction'
					},
					{
						value: 'memory'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 49,
				name: 'Barnga',
				slug: 'barnga',
				category: 'Game',
				scale: 'Min 10 - Max 40',
				timebox: '60 mins',
				summary:
					"Barnga is so easy to use that its procedure is a joy for both the experienced and the inexperienced game facilitator. The game almost immediately involves all its players and supplies are easily procurable. Careful planning of the follow-up debriefing period helps assure that all participants will become aware of and reflect on the learning's of the exercise.",
				description:
					'<h3 id="credits">Credits</h3>\n<p>Barnga was created by Sivasailam “Thiagi” Thiagarajan in 1980. </p>\n<h3 id="howtoplay">How to play</h3>\n<p>Players form small groups of, say, four-six players each. Each group sits separated from the others. They receive a modified deck of cards (each deck containing only the same few cards) and a sheet of rules for playing a new card game called "Five Tricks." They have a few minutes to study the rules and practice playing the game. Once everyone has the hang of it, the facilitator collects the rule sheets and at the same time imposes a strict command of "no verbal communication." This means that players may gesture or draw pictures if they wish, but may neither speak (orally or by signing) nor write words. Clearly, communication, should it be needed, is going to be more difficult henceforth. Since the game is so simple and so short, this artificial barrier to communication forces the players, within the simulated setting, to be as creative and alert as possible.    </p>\n<p>Frequently at this point there is a little nervous laughter, some stifled last words, and finally a settling in to playing "Five Tricks" without the written rules and in silence. The facilitator then announces a tournament. As in any tournament, some players leave their home table and move to another, some from that other table have moved to yet another, and so on. They sit down at their new table, look around, and begin at once playing "Five Tricks." Shortly thereafter an almost imperceptible change is felt in the room, then expressions of uncertainty. . . murmurs of frustration. .. chuckles… fists banging on tables. The tournament, with more movement to other tables, continues for another ten minutes or so amidst growing uncertainty, frustration, laughter, banging on tables. Sometimes someone is all ready to claim a "trick" when someone else reaches out and takes it. Sometimes someone makes an effort to draw a picture clarifying an uncertainty. Sometimes whoever was at the table first prevails, sometimes the more aggressive. </p>\n<p>When, during the debriefing, the facilitator probes for what might have been going on, someone takes another player to task for not learning the rules correctly. Someone else confesses that she never was very good at cards. Someone else speaks about others trying to cheat.</p>\n<p>And several suggest that each table originally had been given a different set of rules. Some are sure of this; others think it might be true; others hadn\'t considered it. </p>\n<p>In fact, at the beginning of the game each group had received a slightly different version of a basic set of rules to "Five Tricks." In one set, for example, Ace is high; in another, Ace low. In one set diamonds are trump, in another spades, in another there is no trump at all. Variations on these few differences are the only differences, no matter how many groups are playing. This means that virtually everything except one or two aspects is the same for everyone.</p>\n<h3 id="tournamentguidesheet">TOURNAMENT GUIDESHEET</h3>\n<p>You will have about 5 minutes to study the rules for and prac- tice playing "Five Tricks."\nThen the rules will be taken away and no verbal communication will be allowed. </p>\n<p>From then on, you may gesture or draw pictures (not words!), but you may not speak or write or use sign language. </p>\n<p>Then the Tournament will begin. </p>\n<p>You will have a few more minutes to play at your home table (in silence). </p>\n<h4 id="scoring">SCORING</h4>\n<p>Scoring begins at the start of the Tournament. </p>\n<p>Game Winner: The player taking the most tricks in the Game (one "hand"). If a game is not complete when the Round ends, the player winning the most tricks so far in that game wins that game. </p>\n<p>Round Winner: The player winning the most games in the Round. (Ordinarily, several games will be played during a Round.) </p>\n<p>Each Round lasts a few minutes. </p>\n<h4 id="playersmove">PLAYERS MOVE</h4>\n<p>Players move like this at the end of each Round: </p>\n<ul>\n<li>The player who has won the most games during a Round moves up to the next highest numbered table. If there are more than four players at a table, </li>\n<li>The two players who have won the most games during a Round move up to the next highest numbered table. </li>\n<li>The player who has won the fewest games during a Round moves down to the next lowest numbered table. If there are more than four players at a table,                 </li>\n<li>The two players who have won the fewest games during a Round move down to the next lowest numbered table. </li>\n<li>The other players remain at the table. </li>\n<li>Winning players at the highest table remain at that table, as do losing players at the lowest table. </li>\n<li>Ties are resolved by alphabetical order. </li>\n</ul>\n<h3 id="debrief">Debrief</h3>\n<ul>\n<li>What happened during the game/tournament?</li>\n<li>What are the ways 4-H is like playing Barnga?</li>\n<li>What does the game suggest about what to do when you are in a similar situation in the real world?</li>\n<li>How does this game focus on attention on the hidden aspects of culture?</li>\n</ul>\n<h3 id="more">More</h3>\n<ul>\n<li><a href="/files/barnga/barnga.pdf">PDF</a></li>\n<li><a href="/files/barnga/barnga-5-tricks.pdf">Five Tricks</a></li>\n<li><a href="https://www.amazon.com/Barnga-Simulation-Cultural-Clashes-Anniversary/dp/1931930309">Book</a></li>\n</ul>',
				credits: '',
				publishedAt: 1500163200000,
				updatedAt: 1677369214863,
				defaultImageId: 'file_4464',
				imageIds: ['file_4464'],
				resourceIds: ['file_4582', 'file_4583'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Playing card desks'
					}
				],
				preparationSteps: [
					{
						value: 'Large space'
					}
				],
				safety: [],
				tags: [
					{
						value: 'cultural-differences'
					},
					{
						value: 'cross-cultural-team'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 72,
				name: 'Lateral thinking',
				slug: 'lateral-thinking',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065833179,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 71,
				name: 'Wake the dragon',
				slug: 'wake-the-dragon',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065965150,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 100,
				name: 'Silent greetings',
				slug: 'silent-greetings',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066834129,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 53,
				name: 'Des’po’rate housewives',
				slug: 'desporate-housewives',
				category: 'Game',
				scale: 'Min 3, Max 12',
				timebox: "15'",
				summary:
					'Demonstrate how important it is for a delivery team to interact with its Product Owner.',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Print the <a href="{{site.url}}/files/desporate-housewives/desporate-housewives.pdf" title="Facilitator Notes">facilitator notes</a></p>\n<h4 id="rules">RULES</h4>\n<p>Sprints: There will be 2 sprints during this game. <br/> For each sprint, the facilitator must distribute the card corresponding (# sprint number). </p>\n<h4 id="goal">GOAL</h4>\n<p>The delivery team must deliver and present the house drawing at the end of each sprint.</p>\n<h3 id="roles">ROLES</h3>\n<ul>\n<li>Client (played by the facilitator)</li>\n<li>Delivery team</li>\n</ul>\n<h4 id="sprint1">SPRINT 1.</h4>\n<ul>\n<li>Distribute the story #1, if there is any question the client is not available</li>\n<li>Production - 2\' </li>\n<li>Presentation – 1\' (The team chooses a member in order to present the result of the sprint)</li>\n<li>Inspect &amp; adapt – 1\' to improve</li>\n</ul>\n<h4 id="sprint2">SPRINT 2.</h4>\n<ul>\n<li>Distribute the story #2, the client is available only if the issue has been identified by the team during the introspection time</li>\n<li>Production - 2\' </li>\n<li>Presentation – 1\' (The team chooses a member in order to present the result of the sprint)</li>\n</ul>\n<h4 id="debriefingonlyattheendofthegame">DEBRIEFING (only at the end of the game)</h4>\n<ul>\n<li>Do not start anything without acceptance criteria</li>\n<li>No extra features (Lean): ex: tree, road, and so on…</li>\n<li>We can finish before the end of the time (no needs to over engineer)</li>\n<li>Client/Product Owner availability</li>\n<li>Share an ubiquitous language</li>\n<li>Share retrospectives learnings </li>\n<li>Just in Time </li>\n</ul>\n<h4 id="ubiquitouslanguage">Ubiquitous language</h4>\n<p><img src="{{site.url}}/images/games/desporate-housewives/ubiquitous_language.jpg" alt="ubiquitous language" title="ubiquitous language" /></p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369215794,
				defaultImageId: 'file_4493',
				imageIds: ['file_4493', 'file_4492', 'file_4494'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Colour pencils'
					},
					{
						value: 'A4 papers'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Product ownership'
					},
					{
						value: 'Delivery team'
					},
					{
						value: 'User story'
					},
					{
						value: 'collaboration'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 55,
				name: 'My customer journey from Mars',
				slug: 'my-customer-journey-from-mars',
				category: 'Game',
				scale: 'Min 4, Max 12',
				timebox: '~2.5 hours (Can be used as a red line during a training)',
				summary: 'Introduction to customer journey, story mapping, user story writing...',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Split the group in 2 teams.</p>\n<h4 id="goal">GOAL</h4>\n<p>Create a journey to australia (earth) for martians based on a customer journey canva.</p>\n<h3 id="rules">RULES</h3>\n<p>Display the <a href="{{site.url}}/files/my-customer-journey-from-mars/my-customer-journey-from-mars.pptx" title="My customer journey from Mars">support</a></p>\n<h4 id="introducethegame10">INTRODUCE THE GAME 10\'</h4>\n<p>Introduce the game. <br/>\nEach team is a top of the range travel agency on Mars.<br/>\nThe agency is specialized in "To Earth travel".<br/>\nFor the business Australia is the most profitable destination.<br/></p>\n<p><img src="{{site.url}}/images/games/my-customer-journey-from-mars/01.png" alt="Introduction" title="Introduction" /></p>\n<p><strong>Make each team choose a name for their agency.</strong></p>\n<h4 id="explainwhatisacustomerjourney">EXPLAIN WHAT IS A CUSTOMER JOURNEY</h4>\n<p><img src="{{site.url}}/images/games/my-customer-journey-from-mars/03.png" alt="Customer Journey Canva" title="Customer Journey Canva" /></p>\n<h4 id="persona15">PERSONA 15\'</h4>\n<p>Introduce the concept of <a href="https://en.wikipedia.org/wiki/Persona_(user_experience)" title="Persona">Persona</a> <br/>\nEach team creates a persona based on a selected canva.<br/>\nThe facilitator can play the role a martian and the team can interview him.<br/>\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/04.png" alt="Persona" title="Persona" /></p>\n<h4 id="elevatorpitch15">ELEVATOR PITCH 15\'</h4>\n<p>Introduce the concept of <a href="https://en.wikipedia.org/wiki/Elevator_pitch" title="Elevator Pitch">Elevator Pitch</a> <br/>\nEach team creates its elevator pitch in order to sell their journey.<br/>\nYou can use the template defined below:<br/>\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/05.png" alt="Elevator Pitch" title="Elevator Pitch" /></p>\n<h4 id="stagesuseractivities15">STAGES/USER ACTIVITIES 15\'</h4>\n<p>Define the stages of the journey. <br/>\nFocus on the stay in Australia.<br/>\n<strong>Be creatives.</strong>\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/06.png" alt="User Activities" title="User Activities" /></p>\n<h4 id="channels10">CHANNELS 10\'</h4>\n<p>Define the channels used for each stages.<br/>\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/07.png" alt="Channels" title="Channels" /></p>\n<h4 id="usertasks30">USER TASKS 30\'</h4>\n<p>Deep dive into the user activities and create user tasks for each one. <br/>\nThink about the thought, feelings of your persona and fill the Think/Feel/Wow lanes.<br/>\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/08.png" alt="User Tasks" title="User Tasks" /></p>\n<p><strong>Congratulations</strong>: you just filled a customer journey.<br/>\nBased on the customer journey we can extract a user story map:</p>\n<ul>\n<li>User activities = Backbone</li>\n<li>User tasks = Walking skeleton\n"<a href="https://www.scrumalliance.org/community/articles/2013/august/creating-an-agile-roadmap-using-story-mapping" title="User Story Map">User Story Map</a>"</li>\n</ul>\n<h4 id="mvp10">M.V.P 10\'</h4>\n<p>Prioritize the User Tasks and extract an M.V.P.<br/>\n<strong>Martians can stay on earth only 10 days otherwise they die</strong>\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/09.png" alt="M.V.P" title="M.V.P" /></p>\n<h4 id="userstories30">USER STORIES 30\'</h4>\n<p>The facilitator must introduce how to write User Stories:<br/></p>\n<ul>\n<li>Format: <a href="https://www.agilealliance.org/glossary/role-feature/" title="Role-Feature-Reason">Role-Feature-Reason</a></li>\n<li><a href="https://www.agilealliance.org/glossary/three-cs/" title="The three C\'s">The three C\'s</a></li>\n<li><a href="https://en.wikipedia.org/wiki/INVEST_(mnemonic)" title="I.N.V.E.S.T">I.N.V.E.S.T</a></li>\n<li><a href="http://www.boost.co.nz/blog/2010/09/acceptance-criteria" title="Acceptance Criteria">Acceptance Criteria</a><br/>\nThe teams can now write User Stories (at least 2).<br/>\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/10.png" alt="User Stories" title="User Stories" /></li>\n</ul>\n<h4 id="pitchyourjourney15">PITCH YOUR JOURNEY 15\'</h4>\n<p>Each team presents the results of their work to the other team.\n<img src="{{site.url}}/images/games/my-customer-journey-from-mars/11.png" alt="Pitch your journey" title="Picth your journey" /></p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1677369217670,
				defaultImageId: 'file_4522',
				imageIds: ['file_4521', 'file_4522', 'file_4523', 'file_4524'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Post-its (at least 5 colors)'
					},
					{
						value: 'Beamer'
					},
					{
						value: 'A4 paper sheets'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Customer journey'
					},
					{
						value: 'Story mapping'
					},
					{
						value: 'Persona'
					},
					{
						value: 'Elevator pitch'
					},
					{
						value: 'M.V.P'
					},
					{
						value: 'User Story'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 54,
				name: 'The Maze',
				slug: 'the-maze',
				category: 'Game',
				scale: 'Min 8, Max unlimited, can be played in multiple parallel groups',
				timebox: '30-45 mins',
				summary:
					'This is a team building game that challenges teams solve a problem very collaboratively. The team need to discover a path through a labyrinth, the path is hidden.The labyrinth is represented by a grid on the floor. The path is a series connected squares travelling from one end  of the grid to the other.  When a team member steps off the path, they will need to start again. To make this suitability challenging, the labyrinth is solved in silence. It requires the team to support each other in order to succeed. Ultimately it will create feelings of euphoric success demonstrating what the team can achieve when they work together. The game can be scaled by having multiple teams play simultaneously, creating a competition.',
				description:
					'<h3>HOW TO PLAY</h3><h4>SETUP</h4><p>Space: You will need a large, empty space to play.</p><p>Maze Plan:</p><ul><li>Draw a grid that is 5 squares, by (team\'s size - 2). E.G. for a team of 9, that would be a 5x7 grid.</li><li>Plot a path by numbering consecutive connected squares from one end of the grid to another. This is an example grid for a team of 9-12 people. Note how it snakes forwards and backwards to increase complexity.&nbsp;</li></ul><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/maze_8cdf584d49.png" alt="maze.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_maze_8cdf584d49.png 117w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_maze_8cdf584d49.png 376w," sizes="100vw"></p><p>Recreate the grid on the floor with masking tape (squares only). Make each square about 50cm by 50 cm (big enough for a person to stand in).<br>Position a chair at the finishing end of the labyrinth for the facilitator to stand on.</p><h4>RULES</h4><p>The team will have time before starting to solve the labyrinth to collaborate and produce a strategy.</p><ul><li>When the team begin to solve the labyrinth, no further talking is allowed.</li><li>The team may not use any tools or implements to solve the maze (E.G. no breadcrumbs).</li><li>While the labyrinth is being solved, only one team member may enter at a time.</li><li>When a team member steps on an incorrect square, they must return to the beginning by FOLLOWING THE PATH that they have discovered so far. Should they go wrong, they must stop and try again to retrace their steps to the beginning.</li><li>When a team member exits the grid at the beginning (following stepping on an incorrect square) they are not allowed to be the next person to enter grid.</li><li>When a team member successfully completes the labyrinth, everyone from the team has to go through one at a time.</li></ul><h4>GOAL</h4><p>The game is won when EVERY team member completes the hidden path.</p><h3>FACILITATION</h3><ul><li>Position the team at the start end of the grid.</li><li>Read out the rules of the game.</li><li>Give the team 10 minutes to discuss and collaborate on a plan to solve the labyrinth.</li><li>When this time up, remind the team that game will now be played in silence.</li><li>Stand on a chair at the finishing end of the grid, facing the grid and the team.</li><li>Tell the team they may begin to solve it.</li><li>When a team member steps on a correct square, state: “CONTINUE”.</li><li>When a team member steps on an incorrect square, state: “STOP, GO BACK”.</li><li>When a team member is going back and steps on an incorrect square, state: “STOP, GO BACK”.</li><li>When a team member attempts to enter the grid two times in a row state: “STOP, GO BACK”.</li></ul><h3>FACILITATION - MULTIPLE TEAM VARIANTS</h3><p>Break the group into even teams of 8-15 people.<br>You will need several copies of the same grid plan. The grid size must work for the smallest team.<br>You will need one “Grid Master” (additional facilitator) per grid.</p><p>The game will play out the same as above, other than:</p><ul><li>Everyone will begin at the same time</li><li>The time needed for the discussion before solving is now flexible, they team can choose to start when they are ready. (This is now a race competition, so there’s an interesting pressure to begin)</li><li>Record the times of each team.</li><li>When a team has completed, invite them to watch how other teams are doing.</li></ul><h3>REFLECTION</h3><p>What was your strategy and how did you create it?<br>How did it feed when you were told to stop and to go back?<br>What was it like working in silence?<br>What was it like to be in the labyrinth?<br>How supported did you feel from the team?<br>What did it feel like to complete the labyrinth?</p><h3>MAKING THE GAME EASIER</h3><p>A team of adults should be able to complete this game, but if you feel the need to make it easier, you can try:</p><ul><li>Simplify the path</li><li>Reduce the grid size</li><li>Allow talking</li></ul><h3>VIDEOS</h3><h4>Luxembourg 2015</h4><h4>London 2016</h4>',
				credits: '',
				publishedAt: 1500681600000,
				updatedAt: 1683547496078,
				defaultImageId: 'file_4518',
				imageIds: ['file_4518', 'file_4517', 'file_4516'],
				resourceIds: ['file_4919'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'LOTS of masking tape - 3-4 reels per team.'
					}
				],
				preparationSteps: [
					{
						value: 'Make a maze for the team(s) to complete.'
					}
				],
				safety: [
					{
						key: 'Hard',
						value:
							'This game can be made to be rather hard, and thus potentially very frustrating. It’s important to be conscious of the team’s stress level. Should the team become overly frustrated pause the game, and allow them additional time to rethink their plan.'
					},
					{
						key: 'Mistakes',
						value:
							'It’s possible to make mistakes which will prevent the team from progressing. This can lead to a situation where the team feel they’ve tried all available options are are stuck. If frustration and stress is high, and they believe they’ve exhausted all options, give them a hint to unblock them.'
					}
				],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'cooperation'
					},
					{
						value: 'nonverbal communication'
					},
					{
						value: 'problem solving'
					},
					{
						value: 'team building'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 76,
				name: 'Improv',
				slug: 'improv',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065801876,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 78,
				name: 'Penny game',
				slug: 'penny-game',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065875089,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 75,
				name: 'The mind',
				slug: 'the-mind',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065906699,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 101,
				name: 'Contamination',
				slug: 'contamination',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066850097,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 73,
				name: 'Black stories',
				slug: 'black-stories',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: 'https://boardgamegeek.com/boardgame/351488/six-second-scribbles',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685077214374,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 62,
				name: 'Nippon',
				slug: 'nippon',
				category: 'WarmUp',
				scale: 'Min 10, Max 25, split into several circles if more',
				timebox: '15 mins',
				summary: 'Attack your opponents to eliminate them from the circle. There can be only one.',
				description:
					'<h2 id="howtoplay">HOW TO PLAY</h2>\n<ul>\n<li>Ask people to form a circle</li>\n<li>If you have more than 25 people, you might want to for 2 circles otherwise it might get a bit long, or boring for some players</li>\n<li>Start the game by having everyone squatting with a knee and a fist on the floor, shouting <strong>Nippon</strong></li>\n<li>Then explain the first gesture</li>\n<li>Fake a karate punch in your right neighbor\'s belly shouting <strong>Haï</strong></li>\n<li>The second player reapeats with his right neighbor and so forth</li>\n<li>Repeat until you complete the circle</li>\n<li>Then explain that at any time, someone can reverse the circle by changing the direction of the <strong>Haï</strong>, and continue</li>\n<li>Then add the attack/defense gesture</li>\n<li>At any moment, a player can attack someone in the circle by joining their hands in front of them, pointing at that person, shouting <strong>Hattamara</strong></li>\n<li>The person being attacked can defend him/herself by quickly putting their hands above their head, forming a kind of roof, shouting <strong>Senseï Kimono</strong></li>\n<li>The defender then decides the next move</li>\n<li>At any moment, someone can dicide to do a <strong>Nippon</strong> and everybody has to follow. The same person then decide the next gesture</li>\n</ul>\n<h2 id="elimination">ELIMINATION</h2>\n<p>Players get eliminated of the game if</p>\n<ul>\n<li>They make a mistake in the gesture and/or the words</li>\n<li>They are not fast enough</li>\n</ul>\n<p>At the end of the game, there will be only on person.  </p>\n<p>If you play with more than one circle, have the champion of each circle compete together in a final phase.</p>\n<h2 id="gestures">GESTURES</h2>\n<ul>\n<li>Nippon (all together)</li>\n<li>Haï (choose direction)</li>\n<li>Hattamara (attack)</li>\n<li>Senseï Kimono (defense)</li>\n</ul>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/nippon_b65946e02f.png" alt="Nippon" />\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/hai_right_2db7d1eda0.png" alt="Haï Right" />\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/hai_left_63d04df655.png" alt="Haï Left" />\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/hattamara_c5b53934f8.png" alt="Hattamara" />\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/sensei_kimono_1cce1570f8.png" alt="Senseï Kimono" /></p>',
				credits: '',
				publishedAt: 1538179200000,
				updatedAt: 1677369215134,
				defaultImageId: 'file_4526',
				imageIds: ['file_4526'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [
					{
						value: 'Large empty room'
					}
				],
				safety: [
					{
						key: 'Cultural sensitiveness',
						value:
							'This game is not made to make fun of any culture. That being said, Japanese people may find this game a little culturally insensitive. Make sure people are comfortable with that before you start.'
					}
				],
				tags: [
					{
						value: 'energy'
					},
					{
						value: 'fun'
					}
				],
				ratings: {
					energy: 4,
					connection: 2,
					silliness: 5
				}
			},
			{
				_strapiId: 64,
				name: 'Visuals 101',
				slug: 'visuals-101',
				category: 'Facilitation',
				scale: 'Min 4, Max 8',
				timebox: '2 hours',
				summary:
					'Learn to draw using basic lines & shapes so you can beef up your presentations on flipchart',
				description:
					'<h3 id="howtoplay">How to play</h3>\n<p>Visuals 101 is for those who want to impact their workshop with a touch of drawing the right expressions in a message. </p>\n<p>Approx 10 drawing techniques are told, shared and showed. Participants will exercise hands-on by applying the examples.\nSuper short introduction. Focus on the hands-on do it yourself.</p>\n<p>| <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/06_795456f7c8.jpg" alt="Containers" title="Containers" /> | <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/07_eba40bc2b0.jpg" alt="Banners" title="Banners" /> |\n| <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/08_f1c7308d76.jpg" alt="Emotions" title="Emotions" /> | <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/09_87da358ddc.jpg" alt="Lines" title="Lines" /> |</p>',
				credits: '',
				publishedAt: 1500076800000,
				updatedAt: 1677369216646,
				defaultImageId: 'file_4578',
				imageIds: ['file_4578', 'file_4576', 'file_4575', 'file_4579', 'file_4577'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Neuland markers'
					},
					{
						value: 'Flipchart'
					},
					{
						value: 'A4 paper sheets (marker quality)'
					}
				],
				preparationSteps: [
					{
						value: 'Large table where 6-8 people can sit and have space to draw'
					}
				],
				safety: [],
				tags: [
					{
						value: 'Visual-management'
					},
					{
						value: 'Graphic-facilitation'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 61,
				name: 'The Maze - Ultimate version',
				slug: 'the-maze-ultimate-version',
				category: 'Game',
				scale: 'Min 8, Max unlimited, can be played in multiple parallel groups',
				timebox: '30-45 mins',
				summary:
					'The maze in its original version has become has become a classic of `#play14. We decided to make it a significantly harder by having several teams run the maze at the same time, in the same grid, from different sides. This version adds a nice twist with impediments represented by other team members being in your way when you are in the grid.',
				description:
					'<p><a href="/games/maze">Original Maze</a></p>\n<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<ul>\n<li>Space: You will need a large, empty space to play.</li>\n<li>Build the maze : Have the teams build a 7x7 grid, with squares large enough to step in them.</li>\n</ul>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/02_c79cc9e0ff.jpg" alt="Grid" title="Grid" /></p>\n<p>This grid is particularly complicated. It has been designed for people who are used to solve problem as a team, like professional coaches.\nYou can create your own grid and make the path easier to find to make the game simpler.</p>\n<h4 id="rules">RULES</h4>\n<ul>\n<li>The team will have time before starting to solve the maze to collaborate and produce a strategy.</li>\n<li>When the team begin to solve the maze, no further talking is allowed.</li>\n<li>The team may not use any tools or implements to solve the maze (E.G. no breadcrumbs).</li>\n<li>While the maze is being solved, only one team member may enter at a time.</li>\n<li>When a team member steps on an incorrect square, they must return to the beginning by FOLLOWING THE PATH that they have discovered so far. Should they go wrong, they must stop and try again to retrace their steps to the beginning.</li>\n<li>When a team member exits the grid at the beginning (following stepping on an incorrect square) they are not allowed to be the next person to enter grid.</li>\n<li>When a team member successfully completes the maze, everyone from the team has to go through one at a time.</li>\n</ul>\n<h4 id="goal">GOAL</h4>\n<p>The game is won when EVERY team member completes the hidden path.</p>\n<h3 id="facilitation">FACILITATION</h3>\n<ul>\n<li>Split the group into teams with the same number of people</li>\n<li>Designate a facilitator for each team. EAch facilitators need to have the grid printed out, on their phone or tablet.</li>\n<li>Have each team pick a different color of stikies and use them to differentiate the team by sticking them on the team members</li>\n<li>Explain the rules to all teams</li>\n<li>Give each team as much time as they want to discuss and collaborate on a plan to solve the maze.</li>\n<li>They can ask questions to their facilitator if need be. As a facilitator though, do not reveal anything about a possible strategy.</li>\n<li>When the team decides to start, remind them that game will now be played in silence.</li>\n<li>Position yourself on a chair on the opposite side of the grid. Make sure your visibility field is ok by asking other team players not to stand in front of you. You\'ll need to see the grid perfectly.</li>\n<li>Start a timer as soon as the fist team member enters the maze</li>\n<li>When a team member steps on a correct square, state: “CONTINUE”.</li>\n<li>When a team member steps on an incorrect square, state: “STOP, GO BACK”.</li>\n<li>When a team member is going back and steps on an incorrect square, state: “STOP, GO BACK”.</li>\n<li>When a team member attempts to enter the grid two times in a row state: “STOP, GO BACK”.</li>\n</ul>\n<h3 id="reflection">REFLECTION</h3>\n<ul>\n<li>Have all team members gather together with their facilitator</li>\n<li>Use the <a href="http://thedebriefingcube.com">debriefing cube</a> and its list of questions to debrief the game</li>\n</ul>\n<h3 id="takeaways">TAKE AWAYS</h3>\n<p>Having more than one team in the grid adds an extra level of complexity by adding impediments. People will have to wait when another maze runner occupies a square, or find a way to collaborate with the other maze runners.</p>',
				credits: '',
				publishedAt: 1500681600000,
				updatedAt: 1677369218457,
				defaultImageId: 'file_4520',
				imageIds: ['file_4520'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'LOTS of masking tape - 3-4 reels per team.'
					}
				],
				preparationSteps: [],
				safety: [
					{
						key: 'Hard',
						value:
							'This game can be made to be rather hard, and thus potentially very frustrating. It’s important to be conscious of the team’s stress level. Should the team become overly frustrated pause the game, and allow them additional time to rethink their plan.'
					},
					{
						key: 'Mistakes',
						value:
							'It’s possible to make mistakes which will prevent the team from progressing. This can lead to a situation where the team feel they’ve tried all available options are are stuck. If frustration and stress is high, and they believe they’ve exhausted all options, give them a hint to unblock them.'
					}
				],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'cooperation'
					},
					{
						value: 'nonverbal communication'
					},
					{
						value: 'problem solving'
					},
					{
						value: 'team building'
					},
					{
						value: 'impediments'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 60,
				name: 'Cupcake design factory',
				slug: 'cupcake-design-factory',
				category: 'Game',
				scale: 'Min 10, Max 50',
				timebox: 'At least one hour',
				summary:
					'Welcome to the Cupcake Design Factory. Your role as a team will be to decorate cupcakes following a set of instructions. You will be competing with other teams to see who produces the most beautiful and delicious cupcakes.',
				description:
					'<h2 id="setup">SETUP</h2>\n<ul>\n<li>Provide each team with 10 cupcakes and all the supplies they will need to decorate them.</li>\n<li>Each team should have the exact same amount of supplies</li>\n<li>Give each team different mission statements</li>\n<li>If you have more than 4 teams, then give the same mission statement to more than one team</li>\n<li>Make sure teams with different mission statements are spearate, if possible in different rooms, so that they don\'t see the differences between mission statements.</li>\n</ul>\n<h2 id="missionstatements">Mission statements</h2>\n<h4 id="team1focusonquality">Team 1 : Focus on quality</h4>\n<ul>\n<li>As a team, decorate 10 exactly identical cupcakes</li>\n<li>Each worker will be in charge of a different task</li>\n<li>Worker 1 : Nutella frosting</li>\n<li>Worker 2 : Sprinkles</li>\n<li>Worker 3 : 1 green leaf candy</li>\n<li>Worker 4 : 1 lollipop</li>\n<li>Only when a worker has processed all 10 cupcakes can you move to the next stage </li>\n<li>1 batch of 10</li>\n<li>Elect a factory chief who will be in charge of</li>\n<li>Ensuring the quality of the final products</li>\n<li>Measuring the time it takes the team to finish their work</li>\n<li>Preparing a team debief using the debriefing cube</li>\n<li>The team should focus on QUALITY</li>\n</ul>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/02_b4eb92c455.jpg" alt="Quality team" /></p>\n<h4 id="team2focusonspeed">Team 2 : Focus on speed</h4>\n<ul>\n<li>As a team, decorate 10 exactly identical cupcakes</li>\n<li>Each worker will be in charge of a different task</li>\n<li>Worker 1 : Nutella frosting</li>\n<li>Worker 2 : Sprinkles</li>\n<li>Worker 3 : 1 green leaf candy</li>\n<li>Worker 4 : 1 lollipop</li>\n<li>Only when a worker has processed 5 cupcakes at a time, can you move to the next stage </li>\n<li>2 batches of 5 cupcakes</li>\n<li>10 cupcakes in total</li>\n<li>Elect a factory chief who will be in charge of</li>\n<li>Ensuring the products are delivered as fast as possible</li>\n<li>Measuring the time it takes the team to finish their work</li>\n<li>Preparing a team debief using the debriefing cube</li>\n<li>The team should focus on SPEED</li>\n</ul>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/03_00bf33bcbf.jpg" alt="Speed team 1" />\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/04_26d2926f55.jpg" alt="Speed team 2" /></p>\n<h4 id="team3focusonqualityspeed">Team 3 : Focus on quality &amp; speed</h4>\n<ul>\n<li>As a team, decorate 10 exactly identical cupcakes, one at a time</li>\n<li>Each worker will be in charge of a different task</li>\n<li>Worker 1 : Nutella frosting</li>\n<li>Worker 2 : Sprinkles</li>\n<li>Worker 3 : 1 green leaf candy</li>\n<li>Worker 4 : 1 lollipop</li>\n<li>Only when a worker has processed 1 cupcake, can you move to the next stage </li>\n<li>10 batches of 1 cupcake</li>\n<li>10 cupcakes in total</li>\n<li>Elect a team leader who will be in charge of</li>\n<li>Ensuring the team focuses on the quality of the final products</li>\n<li>Ensuring the team delivers fast enough</li>\n<li>Measuring the time it takes the team to finish their work</li>\n<li>Preparing a team debief using the debriefing cube</li>\n<li>The team should focus on QUALITY and SPEED</li>\n</ul>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/05_460895e05e.jpg" alt="Quality and speed team" /></p>\n<h4 id="team4focusoncreativity">Team 4 : Focus on creativity</h4>\n<ul>\n<li>As a team, decorate 10 different cupcakes.</li>\n<li>Be creative, be bald, innovate!</li>\n<li>Elect a facilitator that will be in charge of </li>\n<li>Helping the team achieve its goal</li>\n<li>Preparing a team debief using the debriefing cube</li>\n</ul>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/06_b135526707.jpg" alt="Creativity team 1" />\n<img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/07_83f9f3194f.jpg" alt="Creativity team 2" /></p>\n<h2 id="debrief">DEBRIEF</h2>\n<ul>\n<li>Have each team debrief using the <a href="http://thedebriefingcube.com">debriefing cube</a></li>\n<li>The team leader / factory chief is in charge of the debrief</li>\n<li>Give them 5 to 10 minutes to debreif within their team</li>\n<li>Have them write down their main discoveries</li>\n<li>Share with everyone, going from station to station, comparing end results</li>\n<li>Make sure everyone is aware of the differences in mission statements</li>\n<li>Compare batch size and measured time for each team</li>\n</ul>\n<h2 id="takeaways">TAKE AWAYS</h2>\n<ul>\n<li>Speed vs Quality</li>\n<li>Fixed process vs Creativity</li>\n<li>Command and control vs Leadership</li>\n<li>Principle of flow</li>\n<li>Batch size matters</li>\n</ul>',
				credits: '',
				publishedAt: 1542412800000,
				updatedAt: 1677369218733,
				defaultImageId: 'file_4483',
				imageIds: [
					'file_4483',
					'file_4482',
					'file_4481',
					'file_4480',
					'file_4488',
					'file_4485',
					'file_4487',
					'file_4486',
					'file_4484',
					'file_4490',
					'file_4491',
					'file_4489'
				],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'for each team of 5 people'
					},
					{
						value: '10 cupcakes'
					},
					{
						value: 'Nutella'
					},
					{
						value: 'Sprinkles'
					},
					{
						value: 'Heart lollipop'
					},
					{
						value: 'Green leaf candies'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'flow'
					},
					{
						value: 'collaboration'
					},
					{
						value: 'teamwork'
					},
					{
						value: 'leadership'
					},
					{
						value: 'creativity'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 59,
				name: 'X + Y game',
				slug: 'x-y-game',
				category: 'Game',
				scale: 'Min 6, Max 16',
				timebox: '30-45 mins',
				summary:
					'We have a natural tendency to optimise the world immediately around us and focus on personal or team success. Often this can be to the detriment of others  and the wider organisation which ultimately affects their success. This game exploits this aspect of human nature to demonstrate that localised sub-optimisation can have a dramatic effect when we look at the bigger picture.',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Form into 3 or 4 teams (departments).  4 works best.<br />\nAsk the teams to name themselves<br />\nAdd the names to both the game board spreadsheet  and the decision board<br />\nHave the scoring chart on the screen / projector<br />\nHand out copies of the scoring chart<br />\nHand out X and Y post it notes  </p>\n<h4 id="goal">GOAL</h4>\n<p>The department who earns the most money after 10 calendar months will receive a Christmas bonus and will win the game. </p>\n<h4 id="rules">RULES</h4>\n<p>Each department will work independently to decide whether to produce X or Y this month.<br />\nOne one person from each department in an interdepartmental discussion before announcing their products.<br />\nAll departments will announce simultaneously.   </p>\n<h3 id="facilitation">FACILITATION</h3>\n<p>Set the scene: “All of the teams are departments in XY Inc. Every month each department can produce either product X or product Y. The amount of profit each product will earn depends on saturation into the market, illustrated on the screen.”<br />\nEvery month all departments will announce what they will build<br />\nEvery month all departments will have a brief opportunity to collaborate on strategy  </p>\n<p>Round 1  </p>\n<ul>\n<li>Each department has 1 minute to discuss which product they will make</li>\n<li>Each department, please send a representative join the interdepartmental discussion. </li>\n<li>You have 1 minute to discuss anything you need to</li>\n<li>At the count of 3, please indicate your decision an X or a Y post it on the board.</li>\n</ul>\n<p>Round 2 - 10</p>\n<ul>\n<li>Each round follows the format of round 1</li>\n<li>Start the timer immediately following the announcement</li>\n<li><strong>Insight</strong>: This keeps the game moving and tight, it also keeps the tension up</li>\n<li>While they are deliberating, update game board spreadsheet and hand back the post it notes</li>\n</ul>\n<p>Bonus rounds</p>\n<ul>\n<li>Rounds 5, 8 and 10 are bonus rounds, where the teams will receive additional profit. Round 5: 2 times, round 8: 3 times and round 10: 10 times.</li>\n<li>At the beginning of these rounds, announce to all teams the potential bonus.</li>\n<li><strong>Insight</strong>: This helps tease out the local sub-optimisation :)</li>\n</ul>\n<p>Ending the game</p>\n<ul>\n<li>There are three outcomes to each round in this game<ul>\n<li>All departments play X - The company as a whole loses money</li>\n<li>One or more departments play X - The company breaks even, generating zero profit</li>\n<li>All departments play Y - The company as a whole makes money</li></ul></li>\n<li>At the end of the game, the company\'s profit is the sum of all the departments profit. This is likely to be very low.</li>\n<li>Celebrate the department with the most profit, but then inform everyone that regretfully the company is going out of business :(</li>\n</ul>\n<h3 id="reflections">REFLECTIONS</h3>\n<p>Bobbing</p>\n<ul>\n<li>Stand up if (In real life) you feel that you’re a generally nice guy</li>\n<li>Stay standing if you were a nice guy in this game</li>\n<li>Celebrate the nice people :) and sit down</li>\n</ul>\n<p>Those that played X, what was your chief motivation?<br />\nHow did you feel playing X?<br />\nDid you enjoy feeling like that?<br />\nAnd those that played Y, what was your chief motivation?<br />\nHow did it feel when others played X?<br />\nHow did the negotiations go?<br />\nHas anyone experienced a similar situation?<br />\nAt work have you ever been in a team that needed something, but couldn’t get the support from others who could help?<br />\nWhy didn’t they help?  </p>\n<h3 id="takeaways">TAKEAWAYS</h3>\n<p>Prisoner\'s Dilemma - <a href="https://www.youtube.com/watch?v=t9Lo2fgxWHw">Video</a><br />\nLocalised sub-optimisation<br />\nZoom out and ensure that your personal and team definitions of success still apply in the bigger picture<br />\nThe secret to Agile is to inspect and adapt, its ok that your plan might have to change to help others  </p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369220067,
				defaultImageId: 'file_4574',
				imageIds: ['file_4574'],
				resourceIds: ['file_4601'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'TV or Projector'
					},
					{
						value: 'Board or Flipchart and pens'
					},
					{
						value: 'Post it notes'
					},
					{
						value: 'Timer'
					},
					{
						value: 'Game board and scoring chart'
					}
				],
				preparationSteps: [
					{
						value: 'Print copies of the scoring chart'
					},
					{
						value:
							'Make a simple decision board for each department to indicate the option they’ve chosen (E.G. | Team name | Decision X or Y | )'
					},
					{
						value: 'Two post its per team, one with X and the other with Y'
					}
				],
				safety: [
					{
						key: 'Stress',
						value:
							'This game is highly valuable and educational, but to achieve this it creates an environment of stress, frustration and conflict. Be sure that is it safe for your team to experience these emotions and take the time to follow this game with a team building exercise.'
					},
					{
						key: 'Christmas Bonus',
						value:
							'Use a box of chocolates as the “Christmas Bonus” in this game, and when nobody actually wins (company has failed) at the end of game, share the chocolates during the reflection to begin to defuse.'
					}
				],
				tags: [
					{
						value: 'trust'
					},
					{
						value: 'empathy'
					},
					{
						value: 'zoom out'
					},
					{
						value: 'collaboration'
					},
					{
						value: 'competitive'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 77,
				name: 'Once upon a time in Legoland',
				slug: 'once-upon-a-time-in-legoland',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065856161,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 74,
				name: 'Story cubes',
				slug: 'story-cubes',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065896458,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 102,
				name: '3 persons improv ',
				slug: '3-persons-improv',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: 'A quick and easy improv exercise to warm up your creative brain',
				description:
					'<ul><li>Form a circle</li><li>One person jumps in and starts a science saying what they are (i.e. "I\'m a tree", "I\'m a bird", etc.)</li><li>Anyone from the circle can jump in and add something to the scene</li><li>A third person then comes in and adds another element to the scene</li><li>The first person then chooses who of the two other persons will stay</li><li>The persons who stays starts a new scene<br>&nbsp;</li></ul>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685076991648,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Improv'
					}
				],
				ratings: null
			},
			{
				_strapiId: 58,
				name: 'Yata - A DevOps game',
				slug: 'yata-a-devops-game',
				category: 'Game',
				scale: 'Min 6, Max 10, can be played in multiple parallel groups',
				timebox: '45-60 mins',
				summary: 'This game will demonstrate some of the most important principles behind DevOps.',
				description:
					'<h1>How to play</h1><p>Download the rules in the resources section on the right sidebar</p><h2>Setup</h2><p>Space: You will need a large space with 2 tables to play.</p><p>As a facilitator explains the game from the rules, then:</p><ul><li>Separate physically the Dev and Ops teams</li><li>Put the “Dev” environment on the dev table</li><li>Put the “Pre-production” and “Production” environments on the ops table</li><li>Add the base structure for tower bases on each environment. The base must be as in the image below : (base structure represents the environments (DB, Frameworks, Languages, …))&nbsp;</li></ul><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/base_3913e25274.png" alt="base.png"></p><h2>Rules</h2><p>Sprints: There will be 4 sprints during this game. Each sprint will be organized as described in the sprint image. For each sprint, the facilitator must distribute the corresponding cards (# sprint number).</p><h2>Goal</h2><p>The goal is to aim for maximum points by delivering features to production (deployment). We will use wooden bricks to do so.</p><h2>Roles</h2><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/roles_870072758e.png" alt="roles.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_roles_870072758e.png 245w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_roles_870072758e.png 500w," sizes="100vw"></p><h1>Sprints</h1><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/sprint_07bbf160c7.png" alt="sprint.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_sprint_07bbf160c7.png 245w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_sprint_07bbf160c7.png 500w,https://play14-cdn.azureedge.net/strapi-uploads/assets/medium_sprint_07bbf160c7.png 750w,https://play14-cdn.azureedge.net/strapi-uploads/assets/large_sprint_07bbf160c7.png 1000w," sizes="100vw"></p><h2>Sprint 1: Documentation approach vs collaboration</h2><ul><li>DEV: 3 minutes to build and deliver to pre-prod</li><li>OPS: Refuse any non-documented tower</li></ul><p>&nbsp;</p><p>RETROSPECTIVE</p><ul><li>Stop starting, start finishing / Work In Progress (W.I.P) limits</li><li>Keep It Simple &amp; Stupid (K.I.S.S)</li><li>Production deployment requires collaboration and reveals problems.</li><li><strong>Silo breaks the collaboration</strong></li></ul><h2>Sprint 2: Silo again</h2><p>No collaboration: <strong>it is forbidden to communicate with Ops (by the top management)</strong></p><ul><li>DEV: Document the delivery + no cards for them</li><li>OPS: T shape base in pre-prod + prod</li></ul><p>&nbsp;</p><p>RETROSPECTIVE</p><ul><li><strong>Opposite objectives between Dev &amp; Ops</strong> (accounting, different priorities/projects/visions)</li><li>Definition of done</li><li>Always think about the targeted environment</li></ul><p>&nbsp;</p><p>ACTION</p><p>Delivery and deployment in the presence of both teams.</p><h2>Sprint 3: Culture of collaboration</h2><p>Move from siloed delivery to collaboration: <strong>everyone in one room</strong>.</p><ul><li>DEV: construct, starting by taking back the previous tower + cards for Sprint 3</li><li>OPS: facilitates the deployment in pre-prod + prod</li></ul><p>&nbsp;</p><p>RETROSPECTIVE</p><ul><li>Collaboration makes it possible to deliver</li><li><strong>Focus on culture/collaboration</strong></li><li>Collaboration saves time</li></ul><h2>Sprint 4: Automation</h2><ul><li>DEV: construct, starting by taking back the previous tower + cards for Sprint 4</li><li>OPS: automate the deployment between pre-prod and prod</li></ul><p>&nbsp;</p><p>RETROSPECTIVE</p><ul><li>Clone of production (blue/green deployment), could be simulated by swapping two pre-production and production post-its</li><li>Automate deployment and acceptance testing, instead of manually doing it</li><li>Pre-production environment for practicing before production</li><li>Continuous deployment card by card, the ops manager sums the deployment times</li><li><strong>Automation saves time</strong></li></ul><h1>Conclusion</h1><ul><li>Evolution of the metrics used on the boards, and aggregation into one shared board (performance, process, people, KPI linked to events)</li><li>Collaboration is a skill that can be learned</li><li>Explain the basic principles of DevOps (Be C.A.L.M.S)</li></ul><p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/devops_7ee207db36.png" alt="devops.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_devops_7ee207db36.png 245w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_devops_7ee207db36.png 500w," sizes="100vw"></p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1686656192514,
				defaultImageId: 'file_4572',
				imageIds: ['file_4572', 'file_4570', 'file_4573', 'file_4569', 'file_4571'],
				resourceIds: ['file_5042'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: '1 set of 150-200 bricks/caplas'
					},
					{
						value: '2 pens'
					},
					{
						value: 'The printed rules'
					},
					{
						value: 'Whiteboard'
					},
					{
						value: 'Space'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'devOps'
					},
					{
						value: 'collaboration'
					}
				],
				ratings: {
					energy: 3,
					connection: 3,
					silliness: 2
				}
			},
			{
				_strapiId: 3,
				name: 'Back to back',
				slug: 'back-to-back',
				category: 'IceBreaker',
				scale: 'Min 2, Max infinite',
				timebox: '5 mins',
				summary: 'This is a very easy and short ice breaker',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<ul>\n<li>People form pairs, try to have pairs of roughly the same size and weight</li>\n<li>Each pair should sit down, back to back</li>\n<li>The pair has to stand up by leaning on one another\'s back</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209145,
				defaultImageId: 'file_4459',
				imageIds: ['file_4459'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 30,
				name: 'Live Twister',
				slug: 'live-twister',
				category: 'WarmUp',
				scale: 'Min 5, Max unlimited',
				timebox: '10 mnins',
				summary: 'Same as the classic twister game, but without the carpet',
				description:
					'<h2 id="thegame">The game</h2>\n<ul>\n<li>Facilitator gives instructions on which part of the body needs to connect to which colour</li>\n<li>Eg. <code>Elbow on red</code> </li>\n<li>Participants then have to find objects / surfaces of that color and touch it with the according body part</li>\n<li>The given color could be on someone else</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369211177,
				defaultImageId: 'file_4511',
				imageIds: ['file_4511'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [
					{
						key: 'Physical contact',
						value:
							'There could be physical contact, so make sure people are comfortable with that before hand.'
					}
				],
				tags: [
					{
						value: 'speed'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 18,
				name: 'Eggolution',
				slug: 'eggolution',
				category: 'IceBreaker',
				scale: 'Min 10, Max infinite',
				timebox: '10 mins',
				summary:
					'Evolution on rock, paper, scissors. Fun, easy and just the right amount of silly.',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<p>This is a classic rock-paper-scissors game, with a nice little twist of evolution.</p>\n<h4 id="egg">EGG</h4>\n<ul>\n<li>All people start as eggs</li>\n<li>An egg hits its head shouting <em>egg, egg, egg, egg, …</em></li>\n<li>When a egg meets another egg, they play rock, paper, scissors</li>\n<li>The winner evolves into a chicken</li>\n<li>In case of equality, they start over until there is a winner</li>\n</ul>\n<h4 id="chicken">Chicken</h4>\n<ul>\n<li>A chicken makes chicken noises while flapping its wings</li>\n<li>When a chicken meets another chicken, they play rock, paper, scissors</li>\n<li>The winner evolves into an elephant (because it’s the next logical thing, obviously) </li>\n</ul>\n<h4 id="elephant">Elephant</h4>\n<ul>\n<li>An elephant trumpets while moving its trunk</li>\n<li>When an elephant meets another elephant, they play rock, paper, scissors.</li>\n<li>The winner evolves into superman. </li>\n</ul>\n<h4 id="superman">Superman</h4>\n<ul>\n<li>As Superman cannot be vanquished, he circles the group, flying with his arm in the air.</li>\n</ul>\n<h2 id="endofthegame">End of the game</h2>\n<p>At the end of the game, will be left</p>\n<ul>\n<li>one egg</li>\n<li>one chicken</li>\n<li>one elephant</li>\n<li>and many supermen</li>\n</ul>\n<h2 id="benefits">Benefits</h2>\n<p>Absolutely none, except the fun it provides 🙂</p>\n<h2 id="video">Video</h2>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/m6EQejhTtmg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209168,
				defaultImageId: 'file_4498',
				imageIds: ['file_4498'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'team-building'
					}
				],
				ratings: {
					energy: 5,
					connection: 3,
					silliness: 5
				}
			},
			{
				_strapiId: 7,
				name: 'Animal Lineup',
				slug: 'animal-lineup',
				category: 'WarmUp',
				scale: 'Min 10, Max unlimited',
				timebox: '5 mnins',
				summary: 'Form a line from the smallest to the biggest animal',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<ul>\n<li>Have everyone in the group pick an animal</li>\n<li>When saying go, everyone should start miming their animal (sound, gestures)</li>\n<li>Everyone should form a line, from smallest animal to biggest, without talking</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209843,
				defaultImageId: 'file_4462',
				imageIds: ['file_4462'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'observation'
					},
					{
						value: 'silent'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 35,
				name: 'Molecules',
				slug: 'molecules',
				category: 'WarmUp',
				scale: 'Min 15, Max unlimited',
				timebox: '10 mnins',
				summary: 'Form molecules of people',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<ul>\n<li>The facilitator shouts a number between 2 and 10, depending on the size of the whole group</li>\n<li>People have to form clusters with the exact number of people that was announced</li>\n<li>The molecule should be consistent, so arms should be joined strongly</li>\n<li>Anyone who is not in a molecule is eliminated</li>\n<li>If the group is small, don\'t eliminate people and just stop when you want</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369210003,
				defaultImageId: 'file_4519',
				imageIds: ['file_4519'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'trust'
					},
					{
						value: 'speed'
					}
				],
				ratings: {
					energy: 4,
					connection: 5,
					silliness: 2
				}
			},
			{
				_strapiId: 1,
				name: 'Ball fight',
				slug: 'ball-fight',
				category: 'WarmUp',
				scale: 'Min 10, Max 100',
				timebox: '10 mins',
				summary: 'Very fun game that allows participants to release stress and anger',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<p>Turn around with a bag of multi-color plastic ball.<br />\nGive all participant one plastic ball each.<br />\nOnce everyone has a ball, start a speech, very seriously.</p>\n<blockquote>\n  <p>Now that you all have a ball, take some time to look at it.\n  This ball represent your knowledge and skills.\n  We are all professionals, we are all serious people.\n  &#x23;play14 is serious business.\n  Your boss paid good money so you could come here.\n  We have make sure that he is not disappointed when you go back to work next week.</p>\n</blockquote>\n<p>… build up you speech like that for a while.</p>\n<p>Then suddenly just say</p>\n<blockquote>\n  <p>Nahhh… we are not here to be serious.\n  Now BAAAAAAAL FIIIIIGHT</p>\n</blockquote>\n<p>… and throw your ball at anyone.</p>\n<p>The ball fight can last for a moment, until people get tired.</p>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369210946,
				defaultImageId: 'file_4453',
				imageIds: ['file_4453'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'A bag of 100 multi-color plastic balls'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'fun'
					}
				],
				ratings: {
					energy: 4,
					connection: 3,
					silliness: 4
				}
			},
			{
				_strapiId: 106,
				name: 'Sole mates',
				slug: 'sole-mates',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067029539,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 63,
				name: 'Rock Paper Scissors Lizard Spock',
				slug: 'rock-paper-scissors-lizard-spock',
				category: 'IceBreaker',
				scale: 'Min 10, Max infinite',
				timebox: '10 mins',
				summary:
					'Variation on rock, paper, scissors, invented by internet pioneer Sam Kass and famously explained by Dr Sheldon Cooper.',
				description:
					'<iframe width="560" height="315" src="https://www.youtube.com/embed/x5Q6-wMx-K8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n<div class=\'four spacing\'></div>\n<h2 id="howtoplay">How to play</h2>\n<p>This is a variation on the classic rock, paper, scissors.\nIt is made a little more difficult though, by adding two more possibilities : lizard and spock.</p>\n<p>Rules</p>\n<ul>\n<li>Scissors cut paper</li>\n<li>Paper covers rock</li>\n<li>Rock crushes lizard</li>\n<li>Lizard poisons Spock</li>\n<li>Spcok smashes scissors</li>\n<li>Scissors decapitate lizard</li>\n<li>Lizard eats paper</li>\n<li>Paper disproves Spock</li>\n<li>Spock vaporizes rock</li>\n<li>and as it always has, rock crushes scissors</li>\n</ul>\n<p>All hail Sam Kass !</p>\n<p><img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/02_a65d82f66b.png" alt="Rock Paper Scissors Lizard Spock" /></p>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369210060,
				defaultImageId: 'file_4542',
				imageIds: ['file_4542'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'team-building'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 103,
				name: 'Slidedeck karaoke',
				slug: 'slidedeck-karaoke',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description:
					"<p>Pick a random slidedeck from slideshare.</p><p>Have the person improvise a “fake” talk on the slidedeck.</p><p>Levels</p><ul><li>Easy: can browse the slidedeck before hand</li><li>Hard: don't see the slidedeck before hand</li><li>Ultimate; don't see the slidedeck + facilitator adds constraints (i.e. jumping, with an accent, etc.)</li></ul>",
				credits: '',
				publishedAt: null,
				updatedAt: 1685083158667,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Improv'
					}
				],
				ratings: null
			},
			{
				_strapiId: 104,
				name: 'Gibberish',
				slug: 'gibberish',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066969238,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 80,
				name: '6 seconds scribble',
				slug: '6-seconds-scribble',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: 'https://boardgamegeek.com/boardgame/351488/six-second-scribbles',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685076891795,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 81,
				name: 'Two truths and a lie',
				slug: 'two-truths-and-a-lie',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description:
					'<p>People sit in a circle.</p><p>Everyone picks two true stories and one lie that they are ready to share with the group.</p><p>In turn, each person tells their 3 stories and the rest of the group tries to figure out which is the lie.</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685082474849,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 9,
				name: 'Boing',
				slug: 'boing',
				category: 'WarmUp',
				scale: 'Min 6, Max unlimited',
				timebox: '15 mnins',
				summary: 'The clap is alive. Pass it on and have fun.',
				description:
					'<h2 id="start">START</h2>\n<ul>\n<li>Everyone stands in a circle. </li>\n<li>You start by sending a <em>clap</em> around by turning your body toward your neighbor and clapping in their direction.</li>\n<li>Try to <strong>go as fast as possible</strong> until all get good at it.</li>\n<li>Gradually introduce new rules and if anyone makes a mistake, everyone puts their hands in the air and <em>freaks out</em>: starts running and screaming to change positions in the circle, screaming <code>Freak out</code>.</li>\n</ul>\n<h2 id="addrulesgradually">ADD RULES GRADUALLY</h2>\n<ul>\n<li><strong>BOING</strong> put your hands in a defensive position (in front of your face, elbows and wrists together, hands in fists) and say <code>Boing</code>: the clap gets <em>bounced</em> and changes direction</li>\n<li><strong>GONG</strong> put your hands together like you are praying and squat while saying <code>Gong</code> with a deep voice: everyone has to do the same</li>\n<li><strong>HIGH-FIVE</strong> shout <code>High five</code> and everyone has to go in the middle of the circle to <em>high five</em> someone</li>\n<li><strong>WOOP</strong> send the clap across the circle, followed by a sliding gesture with hands (top hand slides toward the person): clap gets transferred to a person across the circle (important: make it clear by showing with the slide and looking at that person)</li>\n</ul>',
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369211062,
				defaultImageId: 'file_4465',
				imageIds: ['file_4465'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [
					{
						value: 'Large empty room'
					}
				],
				safety: [],
				tags: [
					{
						value: 'multitasking'
					}
				],
				ratings: {
					energy: 5,
					connection: 3,
					silliness: 5
				}
			},
			{
				_strapiId: 29,
				name: 'Happy Salmon',
				slug: 'happy-salmon',
				category: 'WarmUp',
				scale: 'Min 6, Max depends on the number of games you have',
				timebox: '2 mins of play, 20 minutes of cleanup',
				summary: 'Happy Salmon at scale',
				description:
					'<h2 id="setup">SETUP</h2>\n<p>You will need to provide as many <a href="https://www.northstargames.com/products/happy-salmon">Happy Salmon</a> game sets as you need, according to the number of people you want to play with. With one set, you can play with up to 6 players.  </p>\n<p>You can play with more than one set at a time, provided you mark the cards upfront</p>\n<ul>\n<li>by drawing a shape (circle, square, cross, …) on the back of the card with a marker</li>\n<li>by sticking a colored dot sticker on the back of the cards</li>\n</ul>\n<p><strong>Pro tip</strong>\nYou can double the number of players by buying green sets and blue sets, marking them both with the same color dots or shapes, since the back color of the cards are different.</p>\n<h2 id="howtoplay">HOW TO PLAY</h2>\n<ul>\n<li>Distribute one deck of cards to each player</li>\n<li>Each player should have 12 cards</li>\n<li>3 Happy Salmon</li>\n<li>3 High-Five</li>\n<li>3 Pound-it</li>\n<li>3 Switcheroo</li>\n<li>Explain each type of card and demonstrate the corresponding gesture with a volunteer</li>\n<li>Make sure everyone understand the different gestures</li>\n<li>Explain </li>\n<li>We will all start at the same time</li>\n<li>Start shouting the name of the card that you have and simulate the gesture</li>\n<li>Find someone who has the same card</li>\n<li>Pefrorm the gesture</li>\n<li>Once the gesture performed, throw the card on the floor</li>\n<li>Ask everyone to shuffle their deck</li>\n<li>Have everyone hold their deck in front of them, faces down</li>\n<li>Count 1, 2, 3 and start the game</li>\n</ul>\n<p>The first person who has no more cards is the winner.</p>\n<p>Enjoy the mess!</p>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/gOYAtjejma4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n<p>In this video, we had around 50 people playing at the same time. Is that a world record ?</p>\n<h2 id="takeaway">TAKE AWAY</h2>\n<p>2 minutes of playing, 20 minutes of sorting the cards.<br />\nYou can actually gamify the card sorting, trying to figure out the fastest strategy, collaborating as a team.</p>',
				credits: '',
				publishedAt: 1538179200000,
				updatedAt: 1677369215064,
				defaultImageId: 'file_4510',
				imageIds: ['file_4510'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'As many sets of Happy Salmon game as you want'
					},
					{
						value:
							'Mark each set with a specific sign so you can recognize the cards afterward (dot sticker or a shape drawn on the back of the card)'
					}
				],
				preparationSteps: [
					{
						value: 'Large empty room'
					}
				],
				safety: [],
				tags: [
					{
						value: 'energy'
					},
					{
						value: 'fun'
					}
				],
				ratings: {
					energy: 5,
					connection: 2,
					silliness: 5
				}
			},
			{
				_strapiId: 105,
				name: 'Helium stick',
				slug: 'helium-stick',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description:
					'<p>Form groups of 10 to 15 people. Ask them to hold their right or left-hand index finger horizontally to the floor. Place a broomstick on top of their fingers.</p><p>As a team, their goal is to put the stick on the floor. All fingers should always be in contact with the stick.</p><p>Usually, the stick starts by going up and may fall.</p><p>&nbsp;</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685082968026,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 85,
				name: 'Traditional dancing',
				slug: 'traditional-dancing',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: 'Alunelul\nCricasian circle (Chapeloise)',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065939890,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 84,
				name: "Yes, let's",
				slug: 'yes-let-s',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065988195,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Improv'
					}
				],
				ratings: null
			},
			{
				_strapiId: 82,
				name: 'Paperclip challenge',
				slug: 'paperclip-challenge',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description:
					'<p>Write down as many ways you can use a paper clip as you can think.</p><p>Are there any categories?</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685082355376,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'creativity'
					}
				],
				ratings: null
			},
			{
				_strapiId: 24,
				name: 'Giants, trolls & witches',
				slug: 'giants-trolls-and-witches',
				category: 'WarmUp',
				scale: 'Min 10, Max unlimited',
				timebox: '10-15 mins',
				summary: 'This is a very funny variation of the traditional rock, paper, scissors.',
				description:
					'<h3 id="setup">Setup</h3>\n<p>Separate people into two groups of equal size</p>\n<h3 id="howtoplay">How to play</h3>\n<p>Each group decides what they choose to be between</p>\n<ul>\n<li>giants (roaring)</li>\n<li>trolls (zzzzzzzzz)</li>\n<li>witches (gnahaaahhaaa)</li>\n</ul>\n<p>Rules are basically the same</p>\n<ul>\n<li>Giants dismember trolls</li>\n<li>Trolls eat witches</li>\n<li>Witches curse giants</li>\n</ul>\n<p>Once each group has decided what they are, each group should move toward the other, doing the sound and gesture related to what they chose.\nThe group that lose the round will give to the other team as many people as the round number</p>\n<ul>\n<li>1st round --&gt; 1 person</li>\n<li>2nd round --&gt; 2 people</li>\n</ul>\n<p>and so forth.</p>\n<h3 id="video">Video</h3>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/p_79k3puQuw" frameborder="0" allowfullscreen></iframe>',
				credits: '',
				publishedAt: 1500940800000,
				updatedAt: 1677369209973,
				defaultImageId: 'file_4505',
				imageIds: ['file_4505'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Fun'
					},
					{
						value: 'Team building'
					}
				],
				ratings: {
					energy: 3,
					connection: 3,
					silliness: 4
				}
			},
			{
				_strapiId: 108,
				name: 'Mexican wave',
				slug: 'mexican-wave',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067115630,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 107,
				name: 'Fruit salad',
				slug: 'fruit-salad',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685082067535,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 83,
				name: 'Human knot',
				slug: 'human-knot',
				category: 'Game',
				scale: '6–12 (multiple groups possible)',
				timebox: '15 - 30 mins',
				summary:
					'The Human Knot is a fun, interactive team-building game that encourages collaboration, communication, and problem-solving. Participants form a "human knot" by tangling their arms together and then work together to untangle themselves without letting go of each other\'s hands. It\'s a great icebreaker and energizer for groups of all sizes.',
				description:
					'<h1>Objective</h1><p><br>The goal of the game is for the group to untangle themselves into a circle (or a more organized shape) without breaking the chain of hands. The two rounds highlight the differences between hierarchical leadership and self-organization in problem-solving.</p><h1>Setup</h1><ol><li>Group Size: Ideal for 6–12 participants per group. For larger groups, divide into smaller teams.<br>&nbsp;</li><li>Space: A clear, open area with enough room for participants to stand in a circle and move around freely.<br>&nbsp;</li><li>Time: 15–30 minutes, depending on the group size and complexity of the knot.<br>&nbsp;</li></ol><h1>How to Play</h1><ol><li>Form a Circle: Have all participants stand in a circle, shoulder to shoulder.</li><li>Create the Knot:<ul><li>Each participant reaches out their right hand and grabs the hand of someone across the circle (not the person directly next to them).</li><li>Then, they reach out their left hand and grab the hand of a different person across the circle.</li><li>Ensure no one is holding both hands of the same person.</li></ul></li><li>Round 1: Command and Control:<ul><li>Designate one participant as the "manager."</li><li>The manager stands outside the knot and gives verbal instructions to the group on how to untangle themselves. The participants in the knot must follow the manager’s directions and cannot act independently.</li><li>The manager cannot physically touch the knot but can observe and strategize.</li><li>The round ends when the knot is untangled or after a set time limit (e.g., 5–10 minutes).</li></ul></li><li>Round 2: Self-Organized:<ul><li>This time, the group works together to untangle the knot without a designated leader.</li><li>Participants can communicate freely, share ideas, and collaborate to solve the problem.</li><li>The round ends when the knot is untangled or after a set time limit.</li></ul></li></ol><h1>Rules</h1><ul><li>Participants must hold hands throughout the game. No breaking the chain!</li><li>In Round 1, only the manager can give instructions, and participants must follow them.</li><li>In Round 2, everyone can communicate and contribute equally.</li><li>Be mindful of safety: avoid pulling or twisting arms too hard.</li><li>If the knot is deemed unsolvable, the group can agree to restart or adjust.</li></ul><h1>Debrief and Reflection</h1><p><br>After the game, take time to discuss the experience:</p><ul><li>Round 1 (Command and Control):<br>How did it feel to follow the manager’s instructions? Was it effective?<br>What challenges did the manager face in directing the group?<br>Did the group feel engaged or frustrated during this round?<br>&nbsp;</li></ul><ol><li>Round 2 (Self-Organized):<br>How did the group approach the problem without a designated leader?<br>What strategies worked well in this round?<br>How did communication and collaboration differ from Round 1?<br>&nbsp;</li><li>Comparison:<br>Which approach was more effective, and why?<br>What lessons can be drawn about leadership, teamwork, and problem-solving?<br>How do these dynamics relate to real-world team scenarios?</li></ol><h1>Variations</h1><ul><li>Timed Challenge: Set a timer for each round and compare how quickly the knot is untangled in both approaches.</li><li>Silent Mode: Add a silent round where participants must untangle the knot without speaking, relying solely on non-verbal communication.</li><li>Blindfolded Twist: Blindfold one or more participants to add an extra layer of challenge.</li><li>Multiple Groups: Divide participants into smaller groups and compare the results of each team across the two rounds.</li></ul><h1>Why Play the Human Knot?</h1><p><br>The Human Knot is a versatile game that:</p><ul><li>Highlights the impact of leadership styles on team performance.</li><li>Encourages creative problem-solving and adaptability.</li><li>Builds trust and camaraderie among participants.</li><li>Serves as a fun icebreaker or energizer for workshops, team-building events, or social gatherings.</li></ul>',
				credits: '',
				publishedAt: null,
				updatedAt: 1741801232033,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [
					{
						key: 'Physical safety',
						value: 'Avoid pulling or twisting arms too hard'
					}
				],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'team-building'
					},
					{
						value: 'self-organization'
					},
					{
						value: 'group-dynamics'
					},
					{
						value: 'communication'
					}
				],
				ratings: null
			},
			{
				_strapiId: 41,
				name: 'Rain',
				slug: 'rain',
				category: 'CoolDown',
				scale: 'Min 10, Max 100',
				timebox: '5 mins',
				summary: 'A beautiful calming exercise that mimics the sound of a rain storm',
				description:
					'<h2 id="howtoplay">How to play</h2>\n<ul>\n<li>Begin with everyone in a circle</li>\n<li><strong>Instruction:</strong> I am going to do an action. When I start <the person to your right> will copy me, and then the person to their right and so on until the action spreads around the circle. Remember to only copy the the person to your immediate left.</li>\n<li><strong>Action 1:</strong> Rub your hands together audibly </li>\n<li><strong>Action 2:</strong> (When the rubbing has spread all around the circle), click both hands</li>\n<li><strong>Action 3:</strong> (When the clicking has spread all around the circle), tap both knees audibly</li>\n<li><strong>Action 4:</strong> (When the taping has spread all around the circle), stomp both feet and tap both knees audibly</li>\n<li><strong>Action 5:</strong> (When the stomping and taping has spread all around the circle), tap both knees audibly</li>\n<li><strong>Action 6:</strong> (When the tapping has spread all around the circle), click both hands</li>\n<li><strong>Action 7:</strong> (When the clicking has spread all around the circle), rub hands audibly</li>\n<li><strong>Action 8:</strong> (When the rubbing has spread all around the circle), calmly lower both hands to your sides.</li>\n</ul>',
				credits: 'Philly Lander',
				publishedAt: 1530230400000,
				updatedAt: 1677369210922,
				defaultImageId: 'file_4540',
				imageIds: ['file_4540'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'Harmony'
					},
					{
						value: 'Calm'
					},
					{
						value: 'Closure'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 25,
				name: 'The golf ball',
				slug: 'the-golf-ball',
				category: 'Game',
				scale: 'Min 12, Max 20',
				timebox: '20 mins',
				summary: 'Know the different kinds of feedback and know how they affect the organization',
				description:
					'<h3 id="setup">SETUP</h3>\n<p>The four volunteers exit the room so that they cannot hear the instructions.\nThey will come back in the room one by one, following the instructions of the facilitator.</p>\n<h3 id="howtoplay">HOW TO PLAY</h3>\n<p>The facilitator indicates to the people who remained in the room that they will be giving a different kind of feedback to each one of the persons who are outside, once they reenter the room.\nThe goal that you indicate to the volunteers is that they need to find a golf ball that is hidden somewhere.</p>\n<p>The facilitator invites the first volunteer to enter. \nHe explains the goal: find the ball in three minutes.</p>\n<p>The first one who enters receives absolute silence. \nNo one will answer as he constantly asked questions to find the ball.\nOnce the three minutes are over, applaud the poor volunteer, and incorporate him/her as a participant.</p>\n<p>The second volunteer to enter receives negative feedback. \nThe people who stayed inside the room with answer questions with things like </p>\n<ul>\n<li>You\'re not going to be able to find it</li>\n<li>It will very difficult</li>\n<li>This is too much for you</li>\n</ul>\n<p>and so forth.</p>\n<p>The third receives pure positive feedback. \nThose inside the room say things like </p>\n<ul>\n<li>Come on, this is easy</li>\n<li>You can do it</li>\n<li>We\'re here for you</li>\n</ul>\n<p>but they do not provide any information.</p>\n<p>The fourth to enter the room receives constructive feedback. \nHe is the only one who usually finds the ball, since the participants guide him, either by providing positive or negative feedback. \nThe expressions used are for example </p>\n<ul>\n<li>That is not the right way</li>\n<li>You\'re doing well, you\'re going to get it</li>\n<li>Now, your going away</li>\n</ul>\n<h3 id="debrief">Debrief</h3>\n<p>After the game, ask each of the volunteers to tell about what they felt.<br />\nAlso give a chance to the other participants to express how they were feeling, especially when not helping or providing only negative feedback.</p>\n<h3 id="takeaways">TAKE AWAYS</h3>\n<p>Learn how to provide useful feedback.<br />\nFeedback can be either positive or negative.<br />\nThe important thing is to provide it in a benevolent manner.  </p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369214524,
				defaultImageId: 'file_4506',
				imageIds: ['file_4506'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'A small ball'
					}
				],
				preparationSteps: [
					{
						value: 'A room with a door'
					},
					{
						value: 'Four volunteers'
					}
				],
				safety: [],
				tags: [
					{
						value: 'Motivation'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 109,
				name: 'Belly laugh',
				slug: 'belly-laugh',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description:
					'<p>Have one person lie on the floor. Ask another person to lay beside them and put their head on their belly. Ask a third person to do the same with the second person and so forth.</p><p>People will start feeling the other person moving and laughing.</p>',
				credits: '',
				publishedAt: null,
				updatedAt: 1685077391281,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 86,
				name: 'Dixit',
				slug: 'dixit',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary:
					'Use Dixkit cards as a way to introduce yourself or state what you expect from an event.',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685078280832,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 57,
				name: 'Troublemakers',
				slug: 'troublemakers',
				category: 'Game',
				scale: 'Min 3, Max 7',
				timebox: '15 mins',
				summary:
					'In this game, participants will have fun and they could discover agile roles and think about forces involved inside agile transformations (for and against).',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Print the <a href="{{site.url}}/files/troublemakers/Troublemakers.pdf" title="Troublemakers cards">cards</a></p>\n<p><img src="{{site.url}}/images/games/troublemakers/troublemakers-rules.png" alt="Setup" title="Setup" /></p>\n<h4 id="playingthegame">PLAYING THE GAME</h4>\n<h4 id="introduction">Introduction</h4>\n<p>Before starting the facilitator of the game needs to explain :</p>\n<ul>\n<li>The game has two phases, “1- During the week end” and “2- Monday morning at the office”</li>\n<li>The differents roles/cards and the associated powers that can be used during the week-end.</li>\n</ul>\n<p><img src="{{site.url}}/images/games/troublemakers/roles.png" alt="roles" title="Roles" /></p>\n<h4 id="duringtheweekend">During the week end</h4>\n<ol>\n<li>“<strong>Everyone</strong>, close your eyes.”</li>\n<li>“<strong>Trouble Makers</strong> open your eyes and look for other Trouble Makers.”</li>\n<li>“<strong>Trouble Makers</strong>, close your eyes.”</li>\n<li>“<strong>Product Owner</strong>, open your eyes. You may look at another player’s card or two of the center cards.”</li>\n<li>“<strong>Product Owner</strong>, close your eyes.”</li>\n<li>“<strong>Middle Manager</strong>, open your eyes. You may exchange cards between two other players.”</li>\n<li>“<strong>Middle Manager</strong>, close your eyes.”</li>\n<li>(if any) “<strong>El Facilitator</strong>, open your eyes and look at your card.”</li>\n<li>(if any) “<strong>El Facilitator</strong>, close your eyes.”</li>\n</ol>\n<h4 id="mondaymorningattheoffice10minutes">Monday morning at the office (<strong>10 minutes</strong>)</h4>\n<p>Players have 10 minutes to discuss amongst themselves who they believe the “Trouble Makers” are. </p>\n<ul>\n<li>All players may say anything but may <strong>never show their card to anyone</strong>. </li>\n<li>After 10 minutes of discussion, <strong>players vote</strong>.</li>\n<li>After the vote <strong>everyone has to return his card</strong> in order to identify who was right.</li>\n</ul>\n<h3 id="debriefingthegame">Debriefing the game</h3>\n<p>As a facilitator, ask to the participants to do the parallel between their current agile implementation.</p>\n<h5 id="asksimplequestions">Ask simple questions</h5>\n<blockquote>\n  <p>Now; what are the forces for change? what are the forces against change? </p>\n</blockquote>\n<p>Push some tooling like the <strong>force field analysis</strong> that you can use in an agile transformation.</p>\n<p><img src="{{site.url}}/images/games/troublemakers/creative-commons.png" alt="Creative commons" title="Creative commons" /> <a href="https://www.linkedin.com/in/adrien-muller-566373a/" title="Adrien MULLER">Adrien MULLER</a> &amp; <a href="https://www.linkedin.com/in/yoanthirion/" title="Yoan THIRION">Yoan THIRION</a><br />\nFEEL FREE TO REUSE AND REMIX!<br />\nThis work is licensed under a Creative Commons Attribution-Share Alike 4.0 \nInternational License (CC BY-SA 4.0), https://creativecommons.org/licenses/by-sa/4.0/. </p>',
				credits: '',
				publishedAt: 1522368000000,
				updatedAt: 1677369214398,
				defaultImageId: 'file_4556',
				imageIds: [
					'file_4556',
					'file_4560',
					'file_4555',
					'file_4559',
					'file_4558',
					'file_4561',
					'file_4557',
					'file_4562'
				],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'The printed cheat sheet / rules (for the facilitator)'
					},
					{
						value: 'The printed cards'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'agile'
					},
					{
						value: 'collaboration'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 87,
				name: 'Know your entourage',
				slug: 'know-your-entourage',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065822254,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 110,
				name: 'Handcuffs',
				slug: 'handcuffs',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067184249,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 52,
				name: 'Collaborative origami',
				slug: 'collaborative-origami',
				category: 'Game',
				scale: 'Min 2 - Max unlimited',
				timebox: '45 mins',
				summary:
					'This game is designed to allow participants to experience and reflect on different forms of collaboration.',
				description:
					'<h1>Round one - Back-to-back</h1><p>INSTRUCTIONS:</p><ul><li>We’re going to make some origami.</li><li>Find a partner and chairs and sit back to back</li><li>I’m going to give you all some instructions to build a model. One of you will be the folder and the other will be the instructor</li><li>Rule: The instructor must keep the instructions to themselves</li><li>Rule: The folder can not show their instructor his model</li><li>Choose: Who will fold, and who will instruct</li><li>Instructors raise your hand</li><li>HANDOUT: Give each instructor round-one model instructions</li><li>INSTRUCTIONS:</li><li>You have 10 minutes to build your model Go!</li><li>REFLECTION:</li><li>Let’s share our models :)</li><li>What was that like?</li><li>Why was it difficult?</li><li>Etc</li></ul><p><strong>Timebox: </strong>15 mins</p><h1>Round two - Side-by-side</h1><p>INSTRUCTIONS:</p><ul><li>Ok let\'s make it better</li><li>Change your chairs to be side to side</li><li>Rule: Again the instructor must keep the instructions to themselves, but this time the instructor can see what the folder is building.</li><li>Rule: The instructor may not touch the model.</li><li>Choose: Who will fold, and who will instruct</li><li>Instructors raise your hand</li><li>HANDOUT: Give each instructor round two model instructions</li><li>INSTRUCTIONS:</li><li>You have 10 minutes to build your model Go!</li><li>REFLECTION:</li><li>Let’s share our models :)</li><li>What was that like?</li><li>Was it better than back-to-back?</li><li>What was it like not being able to help the folders?</li><li>What was it like not being able to see the instructions?</li><li>Etc</li></ul><p><strong>Timebox: </strong>15 mins</p><h1>Round three - Face-to-face</h1><p>INSTRUCTIONS:</p><ul><li>Ok let\'s make it better</li><li>This time there are no rules and no roles. Everyone can see the instructions. Everyone can build.</li><li>HANDOUT: Give each pair round three model instructions</li><li>INSTRUCTIONS:</li><li>You have 10 minutes to build your model Go!</li><li>REFLECTION:</li><li>Let’s share our models :)</li><li>What was that like?</li><li>Was it better than side to side?</li><li>Did anything interesting happen?</li><li>Did you notice that the model was harder yet you all did much better, why was that?</li><li>Etc</li></ul><p><strong>Timebox: </strong>15 mins</p><h1>Debrief</h1><ul><li>The further you are from face-to-face collaboration, the harder it becomes.</li><li>Unlimited verbal communication doesn’t really help</li><li>When you break down roles and begin to work together genuinely, magic happens.</li></ul><h1>Models</h1><p>Here are some models that you can use for this workshop</p><p><img class="image_resized" style="width:50%;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/shark_c9028ccbee.jpg" alt="shark.jpg" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_shark_c9028ccbee.jpg 146w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_shark_c9028ccbee.jpg 467w," sizes="100vw"></p><p><img class="image_resized" style="width:50%;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/duck_2677667d3c.jpg" alt="duck.jpg" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_duck_2677667d3c.jpg 146w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_duck_2677667d3c.jpg 468w,https://play14-cdn.azureedge.net/strapi-uploads/assets/medium_duck_2677667d3c.jpg 701w,https://play14-cdn.azureedge.net/strapi-uploads/assets/large_duck_2677667d3c.jpg 935w," sizes="100vw"></p><p><img class="image_resized" style="width:50%;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/waterbug_987666cd21.jpg" alt="waterbug.jpg" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_waterbug_987666cd21.jpg 146w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_waterbug_987666cd21.jpg 467w," sizes="100vw"></p><p><img class="image_resized" style="width:50%;" src="https://play14-cdn.azureedge.net/strapi-uploads/assets/hat_f083dc3b52.png" alt="hat.png" srcset="https://play14-cdn.azureedge.net/strapi-uploads/assets/thumbnail_hat_f083dc3b52.png 161w,https://play14-cdn.azureedge.net/strapi-uploads/assets/small_hat_f083dc3b52.png 500w," sizes="100vw"></p>',
				credits: '',
				publishedAt: 1517356800000,
				updatedAt: 1679327580367,
				defaultImageId: 'file_4479',
				imageIds: ['file_4479'],
				resourceIds: ['file_4816'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value:
							'Origami instructions (one set per 2 players (printed so that they each of the three instructions can be given out separately)'
					},
					{
						value: 'A4 paper'
					}
				],
				preparationSteps: [
					{
						value: 'Everyone will need a chair'
					},
					{
						value: 'Having tables is useful, but not a necessity'
					}
				],
				safety: [],
				tags: [
					{
						value: 'collaboration'
					},
					{
						value: 'communication'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 111,
				name: 'Leap frog',
				slug: 'leap-frog',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067223229,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 88,
				name: 'Danish clapping',
				slug: 'danish-clapping',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: 'https://youtu.be/eb5rNGNz0Xc',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685078160354,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 65,
				name: 'Farmers Challenge',
				slug: 'farmers-challenge',
				category: 'Game',
				scale: 'Min 8, Max 15',
				timebox: '30 - 60 mins',
				summary:
					"This is a team puzzle that introduces a few constraints to emphasise the need to cooperate, to collaborate and most importantly to listen. It can be used to assess a team's dynamic, to identify current or potential leaders and to simply build culture within a team.",
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<h4 id="setup">SETUP</h4>\n<p>Get everyone into circle<br />\nHand out all of the game cards as evenly as possible  </p>\n<h4 id="rules">RULES</h4>\n<p>You must hold on to your own cards. No sharing them or putting them down.<br />\nYou may not use pens, paper or electronic devices to help you   </p>\n<h4 id="goal">GOAL</h4>\n<p>Solve the puzzle as quickly as possible.  </p>\n<h3 id="facilitation">FACILITATION</h3>\n<p>Set the scene: “Expressed in the 30 cards that I’ve given you, is a puzzle. The objective of this game is to solve that puzzle.”<br />\nRead out the rules<br />\nBegin the game and the timer  </p>\n<p>15 mins in  </p>\n<ul>\n<li>By this point the team should have worked out that there are 5 of each element (farmer, house, location, fruit, animal and vehicle). </li>\n<li>They should also have worked out that having 5 people play the roles of each farmer, and standing in the their relative locations it useful</li>\n<li>Give clues if necessary  </li>\n</ul>\n<p>30 mins in  </p>\n<ul>\n<li>If the team has yet to solve the puzzle remove both rules from the game</li>\n<li>They are now able to use the board, pens etc to help</li>\n</ul>\n<p>45 mins in</p>\n<ul>\n<li>Warn the team that there is only 5 mins remaining.</li>\n</ul>\n<p>50 mins </p>\n<ul>\n<li>stop the game, reveal the solution and ask everyone to have a seat. </li>\n</ul>\n<p>Celebrate either way</p>\n<h3 id="reflection">REFLECTION</h3>\n<p>How the game make you feel? Why?<br />\nWhat could you have done to make the game easier?<br />\nWhat antipatterns did you notice?<br />\nDid any of you disengage? Why?<br />\nWas anyone leading? How did it go?  </p>\n<h3 id="takeaways">TAKEAWAYS</h3>\n<p>Visualization is powerful  </p>\n<h3 id="cards">CARDS</h3>\n<p>| Card 1 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_01_42d4a26652.png" alt="Card 1" /> | Card 2 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_02_eb2d4904fd.png" alt="Card 2" /> |\n| Card 3 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_03_50af3aeb93.png" alt="Card 3" /> | Card 4 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_04_884f87aa38.png" alt="Card 4" /> |\n| Card 5 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_05_88c5b0414b.png" alt="Card 5" /> | Card 6 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_06_0fcdac530c.png" alt="Card 6" /> |\n| Card 7 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_07_db60ea826f.png" alt="Card 7" /> | Card 8 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_08_e7c2a882ee.png" alt="Card 8" /> |\n| Card 9 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_09_bd0c156187.png" alt="Card 9" /> | Card 10 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_10_29dca722a1.png" alt="Card 10" /> |\n| Card 11 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_11_ea921ce4ad.png" alt="Card 11" /> | Card 12 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_12_557669c196.png" alt="Card 12" /> |\n| Card 13 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_13_7fb30f3953.png" alt="Card 13" /> | Card 14 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_14_72f6c89cf7.png" alt="Card 14" /> |\n| Card 15 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_15_2492418687.png" alt="Card 15" /> | Card 16 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_16_db71f95488.png" alt="Card 16" /> |\n| Card 17 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_17_ac70a47245.png" alt="Card 17" /> | Card 18 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_18_dcd2eebf1d.png" alt="Card 18" /> |\n| Card 19 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_19_55162bd78c.png" alt="Card 19" /> | Card 20 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_20_31e0c11d9a.png" alt="Card 20" /> |\n| Card 21 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_21_8c039ea5b6.png" alt="Card 21" /> | Card 22 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_22_5cf3de73c5.png" alt="Card 22" /> |\n| Card 23 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_23_8f0d78a996.png" alt="Card 23" /> | Card 24 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_24_9f044ac8aa.png" alt="Card 24" /> |\n| Card 25 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_25_5ee83e6893.png" alt="Card 25" /> | Card 26 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_26_7895bbdd90.png" alt="Card 26" /> |\n| Card 27 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_27_c4d5a0ada2.png" alt="Card 27" /> | Card 28 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_28_c737fe6209.png" alt="Card 28" /> |\n| Card 29 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_29_29c7508fd9.png" alt="Card 29" /> | Card 30 <img src="https://play14-cdn.azureedge.net/strapi-uploads/assets/Card_30_af342574c4.png" alt="Card 30" /> |</p>',
				credits: '',
				publishedAt: 1498867200000,
				updatedAt: 1677369219123,
				defaultImageId: 'file_4501',
				imageIds: ['file_4501'],
				resourceIds: ['file_4591', 'file_4590', 'file_4592'],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Board or Flipchart and pens'
					},
					{
						value: 'Post it notes'
					},
					{
						value: 'Timer'
					},
					{
						value: 'TV or Projector or handout of the solution'
					}
				],
				preparationSteps: [
					{
						value: 'Print and cut out the game cards'
					}
				],
				safety: [
					{
						key: 'Stress',
						value:
							'This game is highly valuable and educational, but to achieve this it creates an environment of stress, frustration and conflict. Be sure that is it safe for your team to experience these emotions and take the to follow this game with a team building exercise.'
					}
				],
				tags: [
					{
						value: 'active listening'
					},
					{
						value: 'leadership'
					},
					{
						value: 'conflict'
					},
					{
						value: 'cooperation'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 36,
				name: 'Name exchange',
				slug: 'name-exchange',
				category: 'IceBreaker',
				scale: 'Min 10, Max infinite',
				timebox: '10 mins',
				summary: 'Very simple game to learn the first name of other participants',
				description:
					"<h2 id=\"howtoplay\">How to play</h2>\n<ul>\n<li>Have everyone walk around</li>\n<li>When you say <em>go</em>, everyone should introduce themselves to someone else and shake hands</li>\n<li>By shaking hands, they also exchange their first name</li>\n<li><code>Hello, I'm Bob</code></li>\n<li><code>Hello, I'm James</code></li>\n<li><code>Hello, James</code></li>\n<li><code>Hello, Bob</code></li>\n<li>They shake hands</li>\n<li>From now on, Bob's name is <em>James</em>, and James's name is <em>Bob</em></li>\n<li>James and Bod then move on to the next person, introducing themselves using their new name</li>\n</ul>\n<p>The game ends when everyone found their own name back.</p>",
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369208970,
				defaultImageId: 'file_4525',
				imageIds: ['file_4525'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'meet-and-greet'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 17,
				name: 'Detective',
				slug: 'detective',
				category: 'Game',
				scale: 'Min 6, Max 30',
				timebox: '30 mnins',
				summary: 'Put your analytical skills to the test and guess the rules of the game',
				description:
					"<h2 id=\"howtoplay\">How to play</h2>\n<ul>\n<li>Find one or two volunteers who want to be a detective (depending on the size of the group)</li>\n<li>Have everyone else sit in a circle or around a large table</li>\n<li>Have the detectives exit the room</li>\n<li>Explain the rules to the people remaining</li>\n<li>Have the detectives enter the room again</li>\n<li>Detectives <ul>\n<li>have to guess 2 rules</li>\n<li>are explained that other player, will always tell the truth, to the best of their knowledge</li>\n<li>are allowed to ask anyone questions that can be answered by <em>yes</em> or <em>no</em></li>\n<li>cannot ask questions about the rules, except to the facilitator</li></ul></li>\n</ul>\n<h2 id=\"rules\">Rules</h2>\n<p><strong>SPOILER ALERT</strong></p>\n<p>If you read through, you will find out about the rules.<br />\nIf you ever want to play that game as a detective, don't read any further.<br />\nScroll down if you want to know the rules.  </p>\n<div class='four spacing'></div>\n<div class='four spacing'></div>\n<div class='four spacing'></div>\n<div class='four spacing'></div>\n<div class='four spacing'></div>\n<p>The 2 rules are</p>\n<ul>\n<li>Participants always answer for the people on their right side</li>\n<li>If a mistake is done while answering, mainly because the person being asked does not know the correct answer, everyone stands up and switch seat </li>\n</ul>\n<p>Tips</p>\n<ul>\n<li>The person who knows the correct answer should initiate the standing up, while the rest discreetly observe</li>\n<li>Remember that players should always try to tell the truth, to the best of their knowledge</li>\n</ul>",
				credits: '',
				publishedAt: 1515888000000,
				updatedAt: 1677369209936,
				defaultImageId: 'file_4495',
				imageIds: ['file_4495'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'analytical'
					},
					{
						value: 'questioning'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 89,
				name: 'Refactoring your mind',
				slug: 'refactoring-your-mind',
				category: 'Game',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685065928242,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 112,
				name: 'Silent stickies',
				slug: 'silent-stickies',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary:
					'Find someone\nLook at them\nWrite down the first impression (kind eyes, nice smile, ...)\nStick it on the person',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067316657,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 51,
				name: 'Craft challenges',
				slug: 'craft-challenges',
				category: 'Game',
				scale: 'Infinite',
				timebox: 'hours, weeks, months, years',
				summary:
					'Share the practices and the mindset associated to software craftsmanship and agility.',
				description:
					'<h3 id="howtoplay">HOW TO PLAY</h3>\n<p>You can find more explanation about this game <a href="https://agilepartner.github.io/craft-challenges" title="Craft cards">here</a></p>\n<h4 id="setup">SETUP</h4>\n<p>Print the <a href="https://agilepartner.github.io/craft-challenges/craft-challenges-cards.pdf" title="Craft cards">cards</a></p>\n<h4 id="rules">RULES</h4>\n<p>We propose 2 game modes : </p>\n<h3 id="competitivemode">Competitive mode</h3>\n<p><img src="{{site.url}}/images/games/craft-challenges/competitive-mode.png" alt="Competitive mode" title="Competitive mode" /></p>\n<h3 id="mobmode">Mob mode</h3>\n<p><img src="{{site.url}}/images/games/craft-challenges/mob-mode.png" alt="Mob mode" title="Mob mode" /></p>\n<h4 id="oruseitasyouwant">OR use it as you want :</h4>\n<ul>\n<li>Topics for retrospectives</li>\n<li>Topics for lean coffees</li>\n<li>Deep dive in brown bag lunches</li>\n<li>…</li>\n</ul>\n<h4 id="optional">OPTIONAL</h4>\n<ul>\n<li>Print a score board and hang it on the wall in your office</li>\n<li>Add the points you earned by doing each card (on the top right of the card)</li>\n<li>Buy something nice for the winner</li>\n</ul>\n<h3 id="bythewaywhatisasoftwarecraftsman">By the way, what is a software craftsman ?</h3>\n<p><img src="{{site.url}}/images/games/craft-challenges/the-software-craftsman.png" alt="The software craftsman" title="The software craftsman" /></p>',
				credits: '',
				publishedAt: 1537833600000,
				updatedAt: 1677369215667,
				defaultImageId: 'file_4477',
				imageIds: ['file_4477', 'file_4478', 'file_4476'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'At least 1 deck of cards'
					},
					{
						value: 'Internet connection'
					},
					{
						value: 'People'
					}
				],
				preparationSteps: [],
				safety: [],
				tags: [
					{
						value: 'craft'
					},
					{
						value: 'team'
					},
					{
						value: 'collaboration'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 13,
				name: 'Calculator',
				slug: 'calculator',
				category: 'Game',
				scale: 'Min 2, Max 10 per group',
				timebox: '30 min',
				summary:
					'Imagine, everyone thinks, that good arithmetic is important. And then we play a game that has nothing to do with arithmetic and more fun than titles. People learn a lot about themselves and agile procedures.',
				description:
					'<h2 id="rules">RULES</h2>\n<ul>\n<li>Touch each card in the playing field one after the other in the order 1-40</li>\n<li>Each team member must enter the field of play at least 1x</li>\n<li>There may be only 1 person in the playing field at a time</li>\n<li>A second person may enter the field only when the first person has left the playing field</li>\n</ul>\n<p>Moderator ensures compliance with the rules.</p>\n<h2 id="timeiteration">TIME/ITERATION</h2>\n<ul>\n<li>There are 90 seconds available per game round to solve the problem</li>\n<li>Allow 1 minute before the 1st game round for tactical discussion and planning,</li>\n<li>After each round allow 1 minute for retrospective (what went well, what went well bad, change tactics?) and planning</li>\n<li>3-5 game rounds</li>\n</ul>\n<h2 id="planning">PLANNING</h2>\n<ul>\n<li>How many cards do we touch in 90 seconds?</li>\n<li>When all 40 cards have been touched, start again from 1.</li>\n<li>Let the team plan all rounds beforehand and then take a second</li>\n<li>Write down on the flipchart the planning for each round, at the end the two plannings compare</li>\n</ul>\n<h2 id="facilitation">FACILITATION</h2>\n<p>Each time a player breaks the rules, have the team start over from scratch.</p>\n<h2 id="debrief">DEBRIEF</h2>\n<ul>\n<li>What were did you observe?</li>\n<li>How did you feel?</li>\n<li>What did you learn?</li>\n<li>What would you do differently?</li>\n</ul>\n<h2 id="takeaways">TAKE-AWAYS</h2>\n<p>Agile works</p>\n<ul>\n<li>Planning the performance for the next step (and only those)</li>\n<li>Assess your own performance (planning)</li>\n<li>Evaluate own and team performance (review)</li>\n<li>Impact on the next steps (tactics / lessons learned)</li>\n</ul>',
				credits: '',
				publishedAt: 1566950400000,
				updatedAt: 1677369219799,
				defaultImageId: 'file_4468',
				imageIds: ['file_4468', 'file_4469', 'file_4471', 'file_4470'],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [
					{
						value: 'Moderation cards'
					},
					{
						value: 'Flipchart or Whiteboard'
					},
					{
						value: 'Stickies'
					},
					{
						value: 'Markers'
					}
				],
				preparationSteps: [
					{
						value: 'Space requirement 3x4m (mark the playing field on the ground)'
					},
					{
						value: 'Mark Moderation Cards with the numbers 1-40'
					},
					{
						value: 'Prepare Flipchart for planning and results'
					},
					{
						value: 'Visualize the rules (prepare post its)'
					}
				],
				safety: [],
				tags: [
					{
						value: 'communication'
					},
					{
						value: 'team-dynamics'
					},
					{
						value: 'agile'
					},
					{
						value: 'review'
					},
					{
						value: 'iterative'
					},
					{
						value: 'self-organization'
					}
				],
				ratings: {
					energy: null,
					connection: null,
					silliness: null
				}
			},
			{
				_strapiId: 90,
				name: 'Shadows',
				slug: 'shadows',
				category: 'WarmUp',
				scale: '',
				timebox: '',
				summary: '',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685066073667,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			},
			{
				_strapiId: 113,
				name: 'Name chain',
				slug: 'name-chain',
				category: 'IceBreaker',
				scale: '',
				timebox: '',
				summary: 'Ball name game',
				description: '',
				credits: '',
				publishedAt: null,
				updatedAt: 1685067377674,
				defaultImageId: null,
				imageIds: [],
				resourceIds: [],
				firstPlayedAtEventId: null,
				materials: [],
				preparationSteps: [],
				safety: [],
				tags: [],
				ratings: null
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('games', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated games ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate games ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for games: ${results.length}/${data.length} records`);
		return results;
	}
});
