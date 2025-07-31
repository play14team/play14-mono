import { mutation } from './_generated/server';

// Migration function for articles
export const migrateArticles = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for articles...');

		const data = [
			{
				_strapiId: 9,
				title: 'Interview with Flick Hardingham on using games for learning',
				slug: 'interview-with-flick-hardingham-on-using-games-for-learning',
				category: 'Interview',
				summary:
					'An interview of Flick Hardingham, who has been using games extensively to foster creativity.',
				content:
					'<p>Our friend <a href="https://www.linkedin.com/in/webby">Mark Webb</a> published an interview of <a href="https://twitter.com/chasingdots">Flick Hardingham</a>, who has been using games extensively to foster creativity.</p>\n<p>Read the complete interview on <a href="http://britesparx.com/interview-with-flick-hardingham-on-using-games-for-learning">Mark\'s blog</a></p>',
				canonical: null,
				publishedAt: 1481275500000,
				updatedAt: 1677368704266,
				defaultImageId: 'file_4744',
				imageIds: [],
				authorId: null
			},
			{
				_strapiId: 6,
				title: '10 playful confessions from co-founder of #play14, Cédric Pontet',
				slug: '10-playful-confessions-from-co-founder-of-play14-cedric-pontet',
				category: 'Interview',
				summary:
					"That's the beauty of the unconference / open space format. There is no upfront agenda, no official speaker, no star or diva, simply open minded people, enjoying learning from each other",
				content:
					'<h5 id="1howdidx23play14start">1. How did &#x23;play14 start?</h5>\n<p><strong>&#x23;play14</strong> started with transforming frustration into something constructive.</p>\n<p>Back in 2013, some people could not register to play4agile because seats were sold out in minutes. Instead of complaining, we decided to see it as an opportunity. We gathered to speak about organizing our own event about serious games. From the start, we decided to make it as open as possible.</p>\n<p><strong>&#x23;play14</strong> was born. 3 months later, we had the first event in Luxembourg.</p>\n<p>More history <a href="/history/">there</a></p>\n<div class=\'spacing\'></div>\n<h5 id="2areyoufanofsoccerplayerjohancruijffwhynumber14">2. Are you fan of soccer player Johan Cruijff? Why number 14?</h5>\n<p><strong><em>"Why not ?"</em></strong> is usually our first answer to this question.<br />\nThe second one is <strong><em>"Because we can".</em></strong></p>\n<div class=\'spacing\'></div>\n<h5 id="3whatisthesecretingredientofx23play14">3. What is the secret ingredient of &#x23;play14?</h5>\n<p><strong>People</strong>, without hesitation.</p>\n<p>As organizers, we just bring people together in the same location and provide food, drinks and a bit of game materials. The rest is all about the people. <strong>Participants are the beating heart of &#x23;play14.</strong>\nThat\'s the beauty of the <em>unconference / open space</em> format. There is no upfront agenda, no official speaker, no star or diva, simply open minded people, enjoying learning from each other.</p>\n<div class=\'spacing\'></div>\n<h5 id="4whatisthecraziestexperienceyouhadduringoneoftheevents">4. What is the craziest experience you had during one of the events?</h5>\n<p>It was probably during the very first event. During the second day afternoon, some people had to take a plane back home and we ended up with a small group of "hard core gamers". <a href="/players/giovanni-puliti">Giovanni Puliti</a> decided to give us an <strong>introduction to improv theater</strong>. It ended up with us improvising on the 3 little piggies in 5 minutes, 1 minute, 30 seconds, and finally 5 seconds. I don\'t know if I ever laughed that much in my entire life. And for the record, <a href="/players/michael-tarnowski">Michael Tarnowski</a> makes a mean impression of the "big bad wolf".</p>\n<p>Now, we had so many great moments during each event that I am not even sure this is the craziest.</p>\n<ul>\n<li>We have sent martians on holidays</li>\n<li>We have built a pyramid on the moon to protect Donald Trump\'s hair, that was finally destroyed by Cleopatra and her giant banana</li>\n<li>We have run through many corridors of trust</li>\n<li>We have evolved from egg to chicken, from chicken to elephant, and from elephant to superman</li>\n<li>We have built and solved a maze in less than 30 minutes</li>\n<li>We have named circles, counted to 33, danced and followed the leader</li>\n<li>We have solved puzzles while being shout at</li>\n<li>We have built spaghetti towers to hold a marshmallow</li>\n</ul>\n<p>The craziest thing might just be that <strong>we have never ever been ashamed of any of this</strong> at any time… on the contrary.</p>\n<div class=\'spacing\'></div>\n<h5 id="5howwouldyoudescribetheaudienceofx23play14inonephrase">5. How would you describe the audience of &#x23;play14 in one phrase?</h5>\n<p><strong>Open minded</strong> people who are <strong>curious</strong> about everything, <strong>eager to learn</strong>, ready to <strong>get out of their comfort zone</strong>, happy to <strong>provide knowledge</strong> and to <strong>receive it</strong>, without judgment or prejudice.</p>\n<p>And of course <strong>playful</strong>.</p>\n<div class=\'spacing\'></div>\n<h5 id="6ifyoucouldinviteanybodytox23play14whowouldbeyourdreamparticipant">6. If you could invite anybody to &#x23;play14. Who would be your dream participant?</h5>\n<p><strong>Literally anyone</strong>.</p>\n<p>As mentioned earlier, we want <strong>&#x23;play14</strong> to be as open as possible.</p>\n<p>We have a few rules though, mainly presented in our <a href="/learning/">Code of Conduct</a> that we summarize by don\'t be a jackass and don\'t ruin other people\'s experience and fun.</p>\n<div class=\'spacing\'></div>\n<h5 id="7whyshouldpeoplecometox23play14madridat910and11thofjune">7. Why should people come to &#x23;play14 Madrid at 9, 10 and 11th of June?</h5>\n<p>First because it\'s going to be <strong>hot and sunny</strong> as always in Madrid. Sun is something we don\'t have that much in Luxembourg, so it matters.</p>\n<p>Second because it\'s our <strong>very first event in Spain</strong>. We will also have Barcelona later in 2017, but why wait ?</p>\n<p>Third, because I am sure that <strong>the team in Madrid will do a great work</strong> in organizing a wonderful event. We have seen it happen everywhere, the city and the location is different, but the spirit stays the same.</p>\n<p>&#x23;play14 is <strong>quite universal that way</strong>.</p>\n<div class=\'spacing\'></div>\n<h5 id="8completethissentencewithoutseriousgaming">8. Complete this sentence: without Serious Gaming…</h5>\n<p>…my life would be boring and much more difficult to live. And my customer\'s too.</p>\n<p>Oh, and I would not have met so many excellent people.</p>\n<div class=\'spacing\'></div>\n<h5 id="9whatisyourvisiononthefutureofplayfulness">9. What is your vision on the future of playfulness?</h5>\n<p>Playfulness is becoming mainstream. More than a trend, it\'s a way of seeing the world.\nIt has been scientifically proven that <strong>the human brain retains much better when actually doing something</strong> instead of being told how to do it.\nLearning by doing is not new. <em>The master and the apprentice</em> pattern goes as far as human existence.</p>\n<p>And it\'s not because you have fun doing something, and that sometimes you get a little silly, that you are not actually working and learning. It\'s the opposite.\n<strong>Having fun while doing something actually helps you learn better and stimulates your brain</strong>. It also allows you to use more of the right side of your brain, which makes you more creative and open to new ideas.</p>\n<p>I would make a difference between gamification and playfulness though. For me, gamification is a strategy, whereas playfulness is more a state of mind. There is a nuance.</p>\n<div class=\'spacing\'></div>\n<h5 id="10whatdoyouhopex23play14tobecomein5years">10. What do you hope &#x23;play14 to become in 5 years?</h5>\n<p>We will all be rich and retire… wait… no… <strong>&#x23;play14 is non-profit</strong> so this will never work.</p>\n<p>More seriously, in 5 years, I think we will have <strong>at least one &#x23;play14 event every other week, all around the world</strong>.\nWe never expected what we call now the &#x23;play14 movement to grow so fast. But given the current growth rate, it\'s actually possible.</p>\n<p>All we, as founders and local organizers, want to guarantee, is that <strong>you live the same overall experience</strong>, whether you come to Luxembourg, London, Berlin, Milano or Madrid, even though there are some slight differences due to the different locations and local culture of course.</p>\n<p>This is true today, and it will stay true tomorrow. We have already had some discussions about organizing events in the US, or in Asia. I am sure it will come at some point. We just need to get better organized to be able to cope with that.</p>\n<p>Anyway, we have 5 years for that, no ?</p>',
				canonical: 'https://www.microtool.de/en/project-management/lego-is-not-a-game/',
				publishedAt: 1491523200000,
				updatedAt: 1677368704269,
				defaultImageId: 'file_4743',
				imageIds: [],
				authorId: null
			},
			{
				_strapiId: 5,
				title: 'First online event ever',
				slug: 'first-online-event-ever',
				category: 'Event',
				summary:
					"On May 9th 2020, we had our very first online #play14 ever. It's been in the pipe for quite some time, and now it's done. Here is my on the spot feedback\n",
				content:
					'<h3 id="ourveryfirstonlinex23play14event">Our very first online &#x23;play14 event</h3>\n<p>Since the beginning, &#x23;play14 has been designed as an event where people would meeting <em>in real-life</em>. Gathering people around and being able to have physical contact seemed important to make most of the games we knew work, and reinforce the learning experience. Then some of us said that they wanted to start experimenting with a digital format, but no one really took the time to make it happen.</p>\n<p>Then came the COVID-19 pandemic. 2020 was supposed to be our most intense year yet, with a lot of events, recurring and new, that had been planned from March to July. One by one, we had to cancel all the events. Even though it was the safest and most reasonable decision, it was not an easy one. It left all the organizers with a bitter feeling of frustration.</p>\n<p>Then the team from Stuttgart decided to go all-in and to try out the digital format. The first online &#x23;play14 event ever was hosted using Zoom and Miro on May 9th, 2020. I would like to extend my gratitude to the team who made it happen. The endeavor was not easy, especially since no one had done that before, and since that team was new to &#x23;play14 organization. Congratulations to <a href="/players/christoph-reinicke">Christoph Reinicke</a>, <a href="/players/franziska-wiebel">Franziska Wiebel</a>, <a href="/players/juergen-rambo">Jürgen Rambo</a>, <a href="/players/ulrike-morgenstern">Uli Morgenstern</a> and their mentor <a href="/players/pierre-neis">Pierre Neis</a>. You did a great job guys.</p>\n<p>It was great to see the 60+ players, regular or new, from all around the world, gathered in a massive Zoom session. We had people from Europe, from Asia, from Australia, and even from North America. It was fun to play together again, and we even managed to turn some technical difficulties into something to laugh of rather than a problem.</p>\n<p>That being said, there were a few things to learn from this first experiment.\nHere are the lesson learned, that I would like to share.</p>\n<h4 id="asahost">As a host</h4>\n<ol>\n<li>Provide a single location for people to gather</li>\n</ol>\n<ul>\n<li>Use an online meeting software to provide one place where people can talk and see each other, the rest is optional</li>\n<li>That tool should provide a way to split the session into breakout rooms, like <a href="https://zoom.us/">Zoom</a> or <a href="https://qiqochat.com/">Qiqochat</a></li>\n<li>There is no such thing as <em>One tool to rule them all</em>. Accept the fact that all tools are flawed and live with it</li>\n</ul>\n<ol>\n<li>When running an open space in Zoom</li>\n</ol>\n<ul>\n<li>Leave the breakout rooms open at all time</li>\n<li>Allow people to move between breakout rooms, as in a <em>real life</em> open space, by setting everyone as co-host</li>\n<li>Don\'t summon people back by closing the room, but instead make them aware of the timebox, by using the messaging system as the host and having a visible timer like in Miro</li>\n</ul>\n<ol>\n<li>When using a virtual board</li>\n</ol>\n<ul>\n<li>Using a virtual board like <a href="https://https://miro.com/">Miro</a> or <a href="https://mural.co/">Mural</a> is an option</li>\n<li>Prepare a simple board! The simpler the better</li>\n<li>If it\'s too complicated, people will get lost and fight with the tool instead of having fun</li>\n<li>Don\'t put too much focus on a digital board, as it kills people interactions and creativity</li>\n</ul>\n<ol>\n<li>Use a tool like <a href="https://trello.com/">Trello</a> for the market place</li>\n</ol>\n<ul>\n<li>Don\'t try to make a virtual marketplace like in a real event with a virtual board and stickies</li>\n<li>Instead, make a <a href="https://trello.com/b/cCNiXuPC/play14-online">great board</a> in Trello</li>\n<li>Use one column as a parking lot and one column per timeslot</li>\n<li>Most people already know Trello and if they don\'t, the learning curve is very gentle</li>\n<li>The simpler the better, right!</li>\n<li>If you need voting or timers, Trello offers a great Power-Up called <a href="https://trello.com/power-ups/5d1249acb16eef6f790f2af9/leaner-coffee">Leaner Coffee</a></li>\n</ul>\n<ol>\n<li>Be inclusive</li>\n</ol>\n<ul>\n<li>Remember that you have people from all around the world</li>\n<li>Not everyone will eat at the same time</li>\n<li>Display time slots for the different time zones of your participants</li>\n</ul>\n<h4 id="asagamefacilitator">As a game facilitator</h4>\n<ol>\n<li>When facilitating a game online, focus on the learning objective, not on the format</li>\n</ol>\n<ul>\n<li>The most important part for the game is what you can learn from it, not the game format itself</li>\n<li>Focus on the learning experience by embracing the constraint of the digital world</li>\n<li>Be creative</li>\n<li>Debriefing continues to be a must to emphasize learning, so keep time at the end for a debrief session</li>\n<li>Prepare your debriefing questions in advance, using <a href="http://thedebriefingcube.com/">the debriefing cube</a></li>\n</ul>\n<ol>\n<li>Adapt the game to the digital world</li>\n</ol>\n<ul>\n<li>Don\'t try to reproduce online the exact same experience as <em>in real life</em></li>\n<li>Just accept the fact that a digital game will never be the same as the real deal</li>\n<li>Turn that into an opportunity instead</li>\n<li>When adapting a game that you know from the <em>real life</em>, don\'t feel constrained by the format of the original game you want to adapt</li>\n<li>Most probably, you won\'t be able to make it work with the same game mechanics and team dynamics</li>\n<li>Keep that in mind when you re-design the game for online</li>\n<li>Who cares if the digital version differs from the <em>in real life</em> version as long as the learning experience is there and it\'s fun</li>\n</ul>\n<ol>\n<li>Always come prepared</li>\n</ol>\n<ul>\n<li>Making things look simple in the digital world requires a lot of preparation</li>\n<li>If you are using a tool, know it well</li>\n<li>Rehearse, rehearse, rehearse</li>\n<li>Experiment, experiment, experiment</li>\n</ul>\n<ol>\n<li>Don\'t let the tool get in your way</li>\n</ol>\n<ul>\n<li>The simpler the better</li>\n<li>Don\'t spend too much time explaining the tool. You shouldn\'t need to.</li>\n<li>Make the game/facilitation simple enough so that people don\'t need to learn the tool</li>\n<li>Make learning the tool part of the game experience</li>\n</ul>',
				canonical: null,
				publishedAt: 1589068800000,
				updatedAt: 1677368704293,
				defaultImageId: 'file_4750',
				imageIds: ['file_4748', 'file_4749', 'file_4747'],
				authorId: null
			},
			{
				_strapiId: 7,
				title: 'Interview with Karen Fugle, Executive Coach',
				slug: 'interview-with-karen-fugle-executive-coach',
				category: 'Interview',
				summary:
					'Our friend Mark Webb publish an interview of Karen Fugle, who is an Executive Coach and LSP facilitator.',
				content:
					'<p>Our friend <a href="https://www.linkedin.com/in/webby">Mark Webb</a> publish an interview of <a href="https://twitter.com/KarenFugle">Karen Fugle</a>.</p>\n<p>Karen is an Executive Coach and <a href="https://en.wikipedia.org/wiki/Lego_Serious_Play">LEGO Serious Play</a> facilitator. We had the chance to meet Karen when she joined us for <a href="/events/london/2016-09">&#x23;play14 London 2016</a></p>\n<p>Read the complete interview on <a href="http://britesparx.com/interview-with-karen-fugle-executive-coach">Mark\'s blog</a></p>',
				canonical: null,
				publishedAt: 1481275680000,
				updatedAt: 1677368704238,
				defaultImageId: 'file_4746',
				imageIds: [],
				authorId: null
			},
			{
				_strapiId: 8,
				title: 'Welcome to our new website',
				slug: 'welcome-to-our-new-website',
				category: 'Announcement',
				summary: 'Announcing our brand new website, powered by Jekyll, hosted on GitHub Pages.',
				content:
					'<p>Our brand new <strong>&#x23;play14</strong> website is awesome, fully responsive and fast.<br />\nIt will allow us to provide more content, like</p>\n<ul>\n<li>general information about <strong>&#x23;play14</strong></li>\n<li>descriptions of games</li>\n<li>history of all the passed <strong>&#x23;play14</strong> events</li>\n<li>blog posts, to give some news and povide any realted content</li>\n</ul>',
				canonical: null,
				publishedAt: 1481237225000,
				updatedAt: 1677368704242,
				defaultImageId: 'file_4745',
				imageIds: [],
				authorId: null
			},
			{
				_strapiId: 10,
				title: 'London is ready for its third edition',
				slug: 'london-is-ready-for-its-third-edition',
				category: 'Announcement',
				summary:
					'After meeting a great success in 2015 and 2016, London is ready to receive its third #play14\n',
				content:
					"<p><a class='button small' href='http://play14.org/events/london/2017-09#register'>Register Now</a></p>\n<p><img src=\"https://play14-cdn.azureedge.net/strapi-uploads/assets/infographic_body_81a7fbdbe0.png\" alt=\"London 2017\" style=\"width: 100%; max-height: 6000px;\"/></p>\n<div class='two spacing'></div>\n<p><a class='button small' href='http://play14.org/events/london/2017-09#register'>Register Now</a></p>",
				canonical: null,
				publishedAt: 1501027200000,
				updatedAt: 1677368704373,
				defaultImageId: 'file_4737',
				imageIds: [],
				authorId: null
			},
			{
				_strapiId: 3,
				title: 'LEGO is not a game!',
				slug: 'lego-is-not-a-game',
				category: 'Article',
				summary:
					'From the very start playing is important for our development: with dolls, building blocks and other toys we re-enact happenings, relationships and ideas. If you have ever tried to disturb children during playing, you know, how focused they can get. With lots of emotional closeness and ambition, with own rules and clear judgment they are fixated on the scene. When they play, they speak with themselves – even when there is no one around. Playing supports logical thinking and communication. On top it has the power to make us self-confident and happy.\n',
				content:
					'<p>From the very start playing is important for our development: with dolls, building blocks and other toys we re-enact happenings, relationships and ideas. If you have ever tried to disturb children during playing, you know, how focused they can get. With lots of emotional closeness and ambition, with own rules and clear judgment they are fixated on the scene. When they play, they speak with themselves – even when there is no one around. Playing supports logical thinking and communication. On top it has the power to make us self-confident and happy.</p>\n<p>Would it not make sense to give a little bit of this spirit into our meeting rooms, so colleagues connect enthusiastically and resourcefully in lively sessions? Playing is often considered as an end in itself or as an activity to pass the time, objections arise: “In our meetings we talk about hard facts and decisions. We have no time to play around.“ My argument is: How good and effective are your meetings really? Most business meetings are often painful, chaotic and at the end without a result. Patrick M. Lencioni calls this “Death by Meeting”. He comes to the conclusion that we need an encouraging and engaging communication culture to create useful results.</p>\n<h2 id="withlegobrickstobetterresults">With LEGO bricks to better results</h2>\n<p>In the mid-1990s the former CEO of the LEGO Group Kjeld K. Kristiansen and the two Swiss professors Johan Roos and Bar Victor looked for a better way to create business strategies. They started to combine business related questions with the imaginativeness of employees and bricks – today LEGO SERIOUS PLAY. It is a participative problem-solving facilitation method, during which the participants answer questions with the help of LEGO models.</p>\n<p>The process of a LEGO SERIOUS PLAY workshop is explained quickly: The facilitator asks a question. The participants built in a limited time a LEGO model, which incorporates their answer. Afterwards, each person explains the model to the entire group. The gathered information are reflected mutually.</p>\n<p>It is the LEGO SERIOUS PLAY facilitator’s job to craft highly relevant questions for the attendants and to watch over this sequence of question-building-sharing-reflection. Furthermore, he defines if individual models, shared models or connections between models are to be built.</p>\n<p>With questions like: „Has this brick a meaning? Is there a meaning for this brick being transparent or this specific color?“ LEGO models are explicitly explored. This clarification helps to not misunderstand or misinterpret the model from others. And through always questioning the model, the builder is not cross-questioned – a substantial advantage of the LEGO SERIOUS PLAY method. During the dialogue details emerge which would possibly not be expressed otherwise. This active listening and enquiring generates a high positive experience for the participants. It often leads to much better communication after such a workshop. With relevant information, feedback and solution focused debates participants create new insights, knowledge and alternative solutions.</p>\n<h2 id="nobulletpointsandbackstothewallbutbrickstoclick">No bullet points and backs to the wall – but bricks to click</h2>\n<p>LEGO SERIOUS PLAY models are three dimensional and better to understand than for instance a presentation. As it is easier for us to understand, see and feel a new apartment three dimensional than two dimensional, while looking at the floor plan. With models which are visible throughout the workshop, the participants are constantly confronted. The answers cannot be ignored any more.</p>\n<p>To use the LEGO SERIOUS PLAY method requires a courageous client who truly wants to hear the answers to the questions raised. Imagine the following assignment: A team which is located throughout the country get together for a strategy meeting. During the last months the department was exposed to more and more expectations and new assignments. The workshop goal is to define the teams success factors for the future work and to improve the motivation by focusing.</p>\n<p>After a short introduction into the LEGO SERIOUS PLAY method the participants develop individual models as answer to the question: Who are you and what characterizes your contribution best? The next question is: What characterizes our team? This time a shared identity model is build. This step may take up to an hour. The participants discuss the status quo, their strengths and what makes the team tick. During the next phase questions focusing on the outside world are asked: “How are we perceived from your colleagues in other departments? What influences our work? Either totally new models are built or already existing models are extended – depending on the workshop concept.</p>\n<p>Slowly a whole landscape of LEGO models is created, so to speak the visible thought framework of the participants. With this visualization one can fearless simulate unusual or uncomfortable scenarios to develop optimal solutions. In the third part of the workshop the participants map their aspirations: How do we want to work in the future? How do we want to be seen? What services will we offer? And how does this relate to the status quo?</p>\n<p>Questions around team development, strategies, projects and business models are possible. Two remarks:</p>\n<p>Complex situations and connections cannot be made visible within two to three hours. Therefore, plan enough time.\nA poorly moderated workshop stays at best playful. Please be aware to choose an experienced LEGO SERIOUS PLAY facilitator. Best would be, that he brings along further methods and a proven track record.\nFor the LEGO SERIOUS PLAY method as well as for other workshop methods counts: If the workshop is badly lead, the participants will not use this method again with confidence. Bad experiences stay in ones mind and this could mean for LEGO SERIOUS PLAY: the participant will not touch a brick again outside of the children’s room. Then the following statement of the Irish Nobel Price- and Oscar-winner George B. Shaw applies: “We don’t stop playing because we grow old; we grow old because we stop playing.”</p>\n<h2 id="pickabrickandmakeapoint">Pick a brick and make a point!</h2>\n<p>Let’s face a fact: What the participants built and explain during a workshop with the LEGO SERIOUS PLAY method was already there before the workshop. Maybe spread in the heads, maybe vaguely discussed or not combined in a shared vision.</p>\n<p>When bullet points, illuminated walls and experts in the spotlight with their back to the wall are not enough, remember the LEGO SERIOUS PLAY method: round after round focused and genuine answers are created and new knowledge emerges. You can experiment with possible solutions in a save environment and this is the breeding ground of little as well as disruptive innovations.</p>\n<p>No, the LEGO SERIOUS PLAY method is not suitable for all questions nor for all meetings. But if every participant needs a voice and must be heard for further development and if you need to get hold of every idea in the room to create new solutions, I recommend: Bricks not cookies! Then a workshop with the LEGO SERIOUS PLAY method creates more understanding, engagement and communication.</p>\n<p>Should you have any questions or if you want to experience LEGO SERIOUS PLAY yourself, why not come to my next <a href="http://www.meetup.com/LEGOSERIOUSPLAYMeetup/">LEGO SERIOUS PLAY Meetup in Berlin</a> or visit me at <a href="http://www.kilearning.net/">[ki:]®Learning</a>.</p>\n<p><strong>Original post by <a href="https://www.microtool.de/en/project-management/lego-is-not-a-game/">Julian Kea on www.microtool.de</a></strong></p>',
				canonical: 'https://www.microtool.de/en/project-management/lego-is-not-a-game/',
				publishedAt: 1491004800000,
				updatedAt: 1677368704283,
				defaultImageId: 'file_4752',
				imageIds: ['file_4754', 'file_4753', 'file_4755'],
				authorId: null
			},
			{
				_strapiId: 1,
				title: 'Learn, bonding & improving communication with #play14',
				slug: 'learn-bonding-and-improving-communication-with-play14',
				category: 'Meetup',
				summary:
					'#play14 started in Luxembourg in 2014 to provide a forum for people who enjoying playing, learning and sharing. The movement has spread across Europe, with off-shoots in London, Hamburg, Beirut and Milano. Last year, one of our Agile Coaches, Lloyd Jones, attended #play14 and created his high-paced and fun game Ball Runner, which he shared a couple of months back at an AWA meetup.\n',
				content:
					'<p>&#x23;play14 started in Luxembourg in 2014 to provide a forum for people who enjoying playing, learning and sharing. The movement has spread across Europe, with off-shoots in London, Hamburg, Beirut and Milano. Last year, one of our Agile Coaches, Lloyd Jones, attended &#x23;play14 and created his high-paced and fun game Ball Runner, which he shared a couple of months back at an AWA meetup.</p>\n<p>So, ahead of the annual &#x23;play14 unconference, we hosted a &#x23;play14 mini meetup at RBS in London with Chris, Christina, Mark and Natasha.</p>\n<p><a href="https://www.adventureswithagile.com/2016/08/03/play14-review/">Read the whole article on AWA</a></p>',
				canonical: 'https://www.adventureswithagile.com/2016/08/03/play14-review/',
				publishedAt: 1470182400000,
				updatedAt: 1677368704240,
				defaultImageId: 'file_4760',
				imageIds: [
					'file_4732',
					'file_4735',
					'file_4730',
					'file_4733',
					'file_4736',
					'file_4731',
					'file_4734'
				],
				authorId: null
			},
			{
				_strapiId: 4,
				title: 'The power of playfulness at Play14 Madrid',
				slug: 'the-power-of-playfulness-at-play14-madrid',
				category: 'Event',
				summary:
					'When extraordinary people from different backgrounds come together only good things can happen.\n',
				content:
					'<p>When extraordinary people from different backgrounds come together only good things can happen.</p>\n<p>Sunny and hot Madrid, June 9-11 unfolded into a vibrant refreshing weekend thanks to the contributions of all the amazing people who made this Play14 Madrid unconference experience very special:</p>\n<p>Good laughs, warm-ups &amp; ice breakers, fun, exchange of ideas, expertise and great learnings through serious games from blind sensational walks, "Brain Reset" to solving the popular "Maze", from learning about the importance of iteration while building airplanes, building cities with Lego in an agile way, inventing the best slogan, storytelling with the direct "law of 2 feet" feedback until important strategic decision making using Duplo and many many more…</p>\n<p><a href="https://www.linkedin.com/pulse/power-playfulness-play14-madrid-mari-luz-garcia">Read the whole article on LinkedIn</a></p>',
				canonical: 'https://www.linkedin.com/pulse/power-playfulness-play14-madrid-mari-luz-garcia',
				publishedAt: 1497744000000,
				updatedAt: 1677368704253,
				defaultImageId: 'file_4759',
				imageIds: ['file_4740', 'file_4742', 'file_4739', 'file_4738', 'file_4741'],
				authorId: null
			},
			{
				_strapiId: 2,
				title: 'What happens at a #play14 conference ?',
				slug: 'what-happens-at-a-play14-conference',
				category: 'Article',
				summary:
					'People look at me funny when I say that spent a weekend at a Play conference. Yes, we do laugh a lot, it is fun and there is a lot of learning to be had from play. #play14 is a conference where you "develop your facilitation skills, increase your ability to accompany change in your organization, foster your creativity and improve your capacity to innovate."\n',
				content:
					'<p>People look at me funny when I say that spent a weekend at a Play conference. Yes, we do laugh a lot, it is fun and there is a lot of learning to be had from play. #play14 is a conference where you "develop your facilitation skills, increase your ability to accompany change in your organization, foster your creativity and improve your capacity to innovate."</p><p>#play14 was started in Luxembourg by a group of Agile- and Scrum Coaches (think software development) and the growing fanbase is now reaching a wider audience all over Europe. This year\'s London event attracted a majority of agile/scrum coaches, a scattering of executive coaches (including myself), organisational /leadership development experts and a few outliers. What unites us is our work with teams and groups and the shared philosophy that play can be the best way to learn.</p><p>We kick-off the conference in an unconventional way: that is, there is no agenda until the participants contribute and build the agenda themselves.</p><p><a href="http://www.sleepinggiant-consulting.com/news/2017/10/19/what-happens-at-a-play14-conference">Read the full article on Karen\'s blog</a></p>',
				canonical:
					'http://www.sleepinggiant-consulting.com/news/2017/10/19/what-happens-at-a-play14-conference',
				publishedAt: 1508457600000,
				updatedAt: 1677789147260,
				defaultImageId: 'file_4756',
				imageIds: ['file_4757', 'file_4758'],
				authorId: null
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('articles', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated articles ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate articles ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for articles: ${results.length}/${data.length} records`);
		return results;
	}
});
