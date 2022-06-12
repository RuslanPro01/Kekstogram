const BODY = document.body;

const DESCRIPTIONS = [
  'Архитектурная башня – удивительное и красивое здание, выделяющееся среди всех остальных. Он был разработан, чтобы стать прекрасным примером архитектурного совершенства, с его поразительно современным дизайном и элегантным внешним видом. Башня изготовлена из различных материалов, включая, помимо прочего, сталь, стекло и пластик. Это внушительное сооружение прекрасно выглядит независимо от погодных условий снаружи.',
  'С возвышенности можно увидеть красивую интересную архитектуру башню зеленую великолепную чистую убогую хорошо еловую гору снежную. Архитектурная башня ярко окрашена с учетом чистоты здания. Он величественно возвышается вдалеке и выделяется своей чистотой. Архитектура хорошо украшена, много зелени, что делает его красивым местом. Спускаясь с холма, вы можете увидеть башню под разными углами и при разном освещении. Это великолепное место с любого ракурса. Архитектура очень хорошо сохранилась, и чистота района очевидна.',
  'Чистота территории имеет жизненно важное значение, и это видно по тому, как она поддерживается. Все аккуратно и на своих местах. Мусора нет, территория чистая и аккуратная. Архитектура является хорошим примером этого, так как она чистая и хорошо сохранившаяся. Территория благоустроена, все на своих местах. Территория благоустроена, и чистота территории имеет жизненно важное значение.',
  'Район хорошо организован, и чистота района имеет жизненно важное значение. Архитектура является хорошим примером того, насколько зеленый район. Архитектура является хорошим примером того, насколько великолепно зеленый район.',
  'Много долгих лет спустя пришел в ту страну королевский сын и услышал, как старик рассказывал, что за терновой изгородью должен стоять замок, и что там сто лет спала прекрасная заколдованная принцесса по имени Розамонда. с нею король и королева, и весь двор. Дедушка рассказал старику, что многие царские сыновья пытались пройти через терновник, но были схвачены и пронзены шипами и умерли жалкой смертью. Тогда молодой человек сказал: «Тем не менее, я не боюсь попробовать; я выиграю и увижу прелестную Розамунду». Добрый старик пытался отговорить его, но он не слушал его слов. Изгородь из шипов росла с каждым годом все гуще, пока, наконец, весь замок не скрылся из виду, и в нем не было видно ничего, кроме флюгера на крыше. И по всей стране разнесся слух о прекрасной спящей Розамунде, ибо так звали принцессу; и время от времени многие королевские сыновья приходили и пытались прорваться через изгородь; но сделать это им было невозможно, ибо тернии сцепились, как крепкие руки, и юноши были захвачены ими и, не в силах освободиться, умерли жалкой смертью.',
  'Ибо сто лет подошли к концу, и настал день, когда Розамунда должна была пробудиться. Когда принц приблизился к изгороди из терновника, она превратилась в изгородь из прекрасных больших цветов, которые раздвинулись и наклонились в сторону, чтобы пропустить его, а затем сомкнулись позади него в густой изгороди. Дойдя до замкового двора, он увидел лошадей и пятнистых охотничьих собак, которые спали, а на крыше сидели голуби, подвернув головы под крылья. И когда он вошел в дом, мухи на стене спали, повар на кухне поднял руку, чтобы ударить поварёнка, а у кухарки на коленях была чёрная курица, готовая ощипать. Потом он поднялся выше и увидел в зале весь двор, спящий, а над ними, на своих тронах, спали король и королева. — спросила девица и, взяв веретено в руку, стала прясть; но едва она прикоснулась к нему, как сбылось злое пророчество, и она уколола им палец. В этот самый момент она упала на стоявшую там кровать и заснула глубоким сном. И этот сон опустился на весь замок; король и королева, вернувшиеся и находившиеся в большом зале, крепко уснули, а с ними и весь двор.',
  'Из-за возмущения в связи с предстоящими торговыми войнами Франция решила активировать старейшего спящего агента в США. Статую Свободы.',
  'Вы собираете небольшую команду, чтобы сразиться с злобной колдуньей и убить ее. Пройдя множество испытаний вместе, вы пробираетесь во владенья колдуньи и неожиданно узнаете, что та милашка - целительница из вашей команды на самом деле та самая колдунья, которой просто стало скучно.',
  'Каждый раз, когда вы моете пол, идет дождь. Каждый раз, когда вы заказываете блинчики, происходит рост доллара. Каждый раз, когда вы идете в кинотеатр, недалеко от вас происходит авария. Вы понимаете, что эти события взаимосвязаны. Некоторые ваши действия по-своему влияют на мир. Вы решаете узнать, что еще может ваша способность.',
  'Это 11:59 пятница, 31 декабря 1999 года, вы волнуетесь и преувеличиваете вместе со своими друзьями и семьей, ожидающими 2000 год, вы смотрите на цифровые часы вокруг вас и по телевизору, отсчет начинается с 5 ... 4 ... 3 ... 2 ... 1, тогда часы обращаются к 11:60.',
  'У вас есть друг, он вам очень близок. Вас бросили псевдо-друзья, отказались родители. И остался в вашей жизни только этот друг. Но выясняется, что он смертельно болен.',
  'Главный герой думает, что его возлюбленная, убитая в начале рассказа главным злодеем, которая преследует его везде призраком - его галлюцинация, но она оказывается реальной.',
  'Независимо от того, сколько бедствий мы отправили на их планету. Независимо от того, сколько вторжений мы устроили. Человечество всегда, выживает, исключительно из злости.',
  'Вы отрываетесь от своего ноутбука и видите как все остальные в кафе замороженно глядят на вас.',
  'Однажды ночью вы ложитесь спать в 2018 году, и вы просыпаетесь в 1853 году. После того, как вы спали в 1853 году, вы просыпаетесь в 2183 году. После засыпания в 2183 году вы проснетесь в 2018 году, затем цикл повторяется. Так или иначе, вам удается жить во все 3 периода времени.',
  'Однажды утром вы просыпаетесь в теле другого человека. Через некоторое время вы узнаёте что он работает секретным агентом и ему поручили важное задание',
];

const MASSAGES_EXPRESSION = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Дарья',
  'Мирослава',
  'Глеб',
  'Макар',
  'Александр',
  'Кирилл',
  'Владимир',
  'Константин',
  'Алина',
  'Герман',
  'Диана',
  'Виктория',
  'Василиса',
  'Ника',
  'Леонид',
  'Евгения',
  'Ева',
  'Александра',
  'Ибрагим',
  'Артём'
];

export {DESCRIPTIONS, NAMES, BODY, MASSAGES_EXPRESSION};
