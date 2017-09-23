jQuery(function($, undefined) {
$('#terminal').terminal(function(command, term) {
    if (command !== '') {

			command = command.trim();
			var custecho = function(arg){
				term.echo(arg);
			}

		switch(command){
			
				case "project":custecho("A few of my personal projects are \njekyller\nType (project [project_name]) to find out more!");
				break;
			
				case "email":custecho("I would love to hear from you! You can contact me at fanghuagu@163.com");
				break;
			
				case "github":custecho("Check out my github at https://github.com/fanghuagu");
				break;
			
				case "linkedin":custecho("View my LinkedIn at https://www.linkedin.com/in/fanghuagu");
				break;
			
				case "project jekyller":custecho("We maintained Jekyll to hold fantastic jekyll themes: https://github.com/jekyller");
				break;
			
				case "project big_red_app":custecho("I maintain an open source Android app for DLTU students, and now I own the repository for it!");
				break;
			

			case 'help':custecho('email: contact me (I\'d love to hear from you!) \ngithub: see my github page \nlinkedin: see my linkedin page \nproject: learn about my past projects \nworkshop: see my steam workshop projects');
				break;
			
			case 'arbitrary': term.echo('               .-. \'.-\'\r\n                __\\\/____\r\n              .\'        \'.\r\n             \/            \\         \/\\.\/\\\r\n            \/              \\        |   |\r\n           \/                \\       \\   \/\r\n         ~|      _           |~~~~~~~| |~~~~~\r\n        \/~|     \/ )          |^~~~~^~| |~^~^\/\r\n       \/~~|    (o\/            \\~^~~~\/  \/~^~\/\r\n      \/~^~\\__                  \\__.\'  \/~^~\/\r\n     \/~~~~~~\/________________________\/~^~\/\r\n    \/~^~^~^^~^~^^~^~^~^~^^~^~^~^^~^~^~^~\/\r\n   \/~^~^~^~^^~^~^~^~^^~^~^~^~^^~^~^~^~^\/\r\n   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', {
					finalize: function(div) {
					div.css("color", "blue");
					}
				});
				break;
			case 'yam': term.echo('               .,;>>%%%%%>>;,.\r\n            .>%%%%%%%%%%%%%%%%%%%%>,.\r\n          .>%%%%%%%%%%%%%%%%%%>>,%%%%%%;,.\r\n        .>>>>%%%%%%%%%%%%%>>,%%%%%%%%%%%%,>>%%,.\r\n      .>>%>>>>%%%%%%%%%>>,%%%%%%%%%%%%%%%%%,>>%%%%%,.\r\n    .>>%%%%%>>%%%%>>,%%>>%%%%%%%%%%%%%%%%%%%%,>>%%%%%%%,\r\n   .>>%%%%%%%%%%>>,%%%%%%>>%%%%%%%%%%%%%%%%%%,>>%%%%%%%%%%.\r\n  .>>%%%%%%%%%%>>,>>>>%%%%%%%%%%\'..`%%%%%%%%,;>>%%%%%%%%%>%%.\r\n .>>%%%>>>%%%%%>,%%%%%%%%%%%%%%.%%%,`%%%%%%,;>>%%%%%%%%>>>%%%%.\r\n >>%%>%>>>%>%%%>,%%%%%>>%%%%%%%%%%%%%`%%%%%%,>%%%%%%%>>>>%%%%%%.\r\n >>%>>>%%>>>%%%%>,%>>>%%%%%%%%%%%%%%%%`%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n >>%%%%%%%%%%%%%%,>%%%%%%%%%%%%%%%%%%%\'%%%,>>%%%%%%%%%%%%%%%%%%%%.\r\n >>%%%%%%%%%%%%%%%,>%%%>>>%%%%%%%%%%%%%%%,>>%%%%%%%%>>>>%%%%%%%%%%.\r\n >>%%%%%%%%;%;%;%%;,%>>>>%%%%%%%%%%%%%%%,>>>%%%%%%>>;\";>>%%%%%%%%%%%.\r\n `>%%%%%%%%%;%;;;%;%,>%%%%%%%%%>>%%%%%%%%,>>>%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n  >>%%%%%%%%%,;;;;;%%>,%%%%%%%%>>>>%%%%%%%%,>>%%%%%%%%%%%%%%%%%%%%%%%%%%.\r\n  `>>%%%%%%%%%,%;;;;%%%>,%%%%%%%%>>>>%%%%%%%%,>%%%%%%\'%%%%%%%%%%%%%%%%%%>>.\r\n   `>>%%%%%%%%%%>,;;%%%%%>>,%%%%%%%%>>%%%%%%\';;;>%%%%%,`%%%%%%%%%%%%%%>>%%>.\r\n    >>>%%%%%%%%%%>> %%%%%%%%>>,%%%%>>>%%%%%\';;;;;;>>,%%%,`%    `;>%%%%%%>>%%\r\n    `>>%%%%%%%%%%>> %%%%%%%%%>>>>>>>>;;;;\'.;;;;;>>%%\'  `%%\'         ;>%%%%%>\r\n     >>%%%%%%%%%>>; %%%%%%%%>>;;;;;;\'\'    ;;;;;>>%%%                  ;>%%%%\r\n     `>>%%%%%%%>>>, %%%%%%%%%>>;;\'        ;;;;>>%%%\'                   ;>%%%\r\n      >>%%%%%%>>>\':.%%%%%%%%%%>>;        .;;;>>%%%%                   ;>%%%\'\r\n      `>>%%%%%>>> ::`%%%%%%%%%%>>;.      ;;;>>%%%%\'                  ;>%%%\'\r\n       `>>%%%%>>> `:::`%%%%%%%%%%>;.     ;;>>%%%%%                  ;>%\r\n        `>>%%%%>>, `::::`%%%%%%%%%%>,   .;>>%%%%%\'                   ;>%\r\n         `>>%%%%>>, `:::::`%%%%%%%%%>>. ;;>%%%%%%                    ;>%\r\n          `>>%%%%>>, :::::::`>>>%%%%>>> ;;>%%%%%\'                     ;>%,\r\n           `>>%%%%>>,::::::,>>>>>>>>>>\' ;;>%%%%%                       ;%%\r\n             >>%%%%>>,:::,%%>>>>>>>>\'   ;>%%%%%.                        ;%%\r\n              >>%%%%>>``%%%%%>>>>>\'     `>%%%%%%.\r\n              >>%%%%>> `@@a%%%%%%\'     .%%%%%%%%%.\r\n              `a@@a%@\'    `%a@@\'       `a@@a%a@@a\'');
				break;
			default:
				try{
					var result = window.eval(command);
					if (result !== undefined) {
						term.echo(new String(result));
					}
				} catch(e) {
					term.echo('Unrecognized command. Type help or spam your tab key.');
				}
				break;
		}
    } else {
       term.echo('');
    }
	}, {
		completion: [
			'help',
			'yam',
			'arbitrary',
			'project',
			'workshop',
			'linkedin',
			'email',
			'github'
		],
		greetings: function(callback){
			const greet = 'Welcome to Fanghua\'s Personal Site!  Type help for commands.';
			callback(greet);
		},
    name: 'Fanghua Gu', //not necessary
    height: 800,
    prompt: '\u27B3 '});
});
