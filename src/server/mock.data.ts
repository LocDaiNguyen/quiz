import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDbData implements InMemoryDbService {

  createDb() {

    const questions = [
      {
        id: 1,
        type: 'Marvel',
        question: 'The Fantastic Four have the headquarters in what building?',
        image: undefined,
        answers: [
          {
            answer: 'Baxter Building',
            correct: true
          },
          {
            answer: 'Stark Tower',
            correct: false
          },
          {
            answer: 'Fantastic Headquarters',
            correct: false
          },
          {
            answer: 'Xavier Institute',
            correct: false
          }
        ],
      },
      {
        id: 2,
        type: 'Marvel',
        question: 'Peter Parker works as a photographer for:',
        image: undefined,
        answers: [
          {
            answer: 'The Daily Bugle',
            correct: true
          },
          {
            answer: 'The Daily Planet',
            correct: false
          },
          {
            answer: 'The New York Times',
            correct: false
          },
          {
            answer: 'The Rolling Stone',
            correct: false
          }
        ],
      },
      {
        id: 3,
        type: 'Marvel',
        question: 'Thor has two war goats to pull his chariot. They are named:',
        image: undefined,
        answers: [
          {
            answer: 'Toothgrinder and Toothgnasher',
            correct: true
          },
          {
            answer: 'Balder and Hermod',
            correct: false
          },
          {
            answer: 'Thunder and Lightning',
            correct: false
          },
          {
            answer: 'Ask and Embla',
            correct: false
          }
        ],
      },
      {
        id: 4,
        type: 'Marvel',
        question: 'Before becoming Radioactive Man, Chen Lu was:',
        image: undefined,
        answers: [
          {
            answer: 'A nuclear physicist',
            correct: true
          },
          {
            answer: 'A spy',
            correct: false
          },
          {
            answer: 'A soldier',
            correct: false
          },
          {
            answer: 'A pilot',
            correct: false
          }
        ],
      },
      {
        id: 5,
        type: 'Marvel',
        question: 'S.H.I.E.L.D.\'s highest ranking agent is: ',
        image: undefined,
        answers: [
          {
            answer: 'Nick Fury',
            correct: true
          },
          {
            answer: 'Steven Rogers',
            correct: false
          },
          {
            answer: 'Peter Parker',
            correct: false
          },
          {
            answer: 'Natalia Romanova',
            correct: false
          }
        ],
      },
      {
        id: 6,
        type: 'Marvel',
        question: 'Captain America was frozen in which war?',
        image: undefined,
        answers: [
          {
            answer: 'World War II',
            correct: true
          },
          {
            answer: 'World War I',
            correct: false
          },
          {
            answer: 'Cold War',
            correct: false
          },
          {
            answer: 'American Civil War',
            correct: false
          }
        ],
      },
      {
        id: 7,
        type: 'Marvel',
        question: 'The vampire hunter Blade is a:',
        image: undefined,
        answers: [
          {
            answer: 'Half vampire',
            correct: true
          },
          {
            answer: 'Mutant',
            correct: false
          },
          {
            answer: 'Human',
            correct: false
          },
          {
            answer: 'Vampire',
            correct: false
          }
        ],
      },
      {
        id: 8,
        type: 'Marvel',
        question: 'Before turning to a life of crime, Mysterio was:',
        image: undefined,
        answers: [
          {
            answer: 'A special effects artist',
            correct: true
          },
          {
            answer: 'A stuntman',
            correct: false
          },
          {
            answer: 'A magician',
            correct: false
          },
          {
            answer: 'A firefighter',
            correct: false
          }
        ],
      },
      {
        id: 9,
        type: 'Marvel',
        question: 'Dr. Doom went to the same college as:',
        image: undefined,
        answers: [
          {
            answer: 'Reed Richards',
            correct: true
          },
          {
            answer: 'Tony Stark',
            correct: false
          },
          {
            answer: 'Peter Parker',
            correct: false
          },
          {
            answer: 'Bruce Banner',
            correct: false
          }
        ],
      },
      {
        id: 10,
        type: 'Marvel',
        question: 'What is commonly believe to be The Black Widow\'s previous occupation before becoming a Russian spy?',
        image: undefined,
        answers: [
          {
            answer: 'A ballerina',
            correct: true
          },
          {
            answer: 'A military pilot',
            correct: false
          },
          {
            answer: 'A thief',
            correct: false
          },
          {
            answer: 'An athlete',
            correct: false
          }
        ],
      },
      {
        id: 11,
        type: 'Marvel',
        question: 'Ghost Rider is known as:',
        image: undefined,
        answers: [
          {
            answer: 'The Spirit of Vengeance',
            correct: true
          },
          {
            answer: 'The Guardian Devil',
            correct: false
          },
          {
            answer: 'The Spirit of Hate',
            correct: false
          },
          {
            answer: 'The Red Skull',
            correct: false
          }
        ],
      },
      {
        id: 12,
        type: 'Marvel',
        question: 'Deadpool joined the Weapon X program because:',
        image: undefined,
        answers: [
          {
            answer: 'He had incurable cancer',
            correct: true
          },
          {
            answer: 'He was forced to',
            correct: false
          },
          {
            answer: 'He thought it would be fun',
            correct: false
          },
          {
            answer: 'He wanted to fight for justice',
            correct: false
          }
        ],
      },
      {
        id: 13,
        type: 'Marvel',
        question: 'Who paid Mac Gargan to become the Scorpion?',
        image: undefined,
        answers: [
          {
            answer: 'J. Jonah Jameson',
            correct: true
          },
          {
            answer: 'Felicia Hardy',
            correct: false
          },
          {
            answer: 'The Kingpin',
            correct: false
          },
          {
            answer: 'Norman Osborn',
            correct: false
          }
        ],
      },
      {
        id: 14,
        type: 'Marvel',
        question: 'What did Dr. Pym discover that allowed him to change size?',
        image: undefined,
        answers: [
          {
            answer: 'Pym Particles',
            correct: true
          },
          {
            answer: 'Gamma Rays',
            correct: false
          },
          {
            answer: 'Alpha Rays',
            correct: false
          },
          {
            answer: 'Omega Particles',
            correct: false
          }
        ],
      },
      {
        id: 15,
        type: 'Marvel',
        question: 'Who here was not a member of the Howling Commandos?',
        image: undefined,
        answers: [
          {
            answer: 'Jasper Sitwell',
            correct: true
          },
          {
            answer: 'Nick Fury',
            correct: false
          },
          {
            answer: 'Dum Dum Dugan',
            correct: false
          },
          {
            answer: 'Sam Sawyer',
            correct: false
          }
        ],
      },
      {
        id: 16,
        type: 'Marvel',
        question: 'What vehicle is the Avengers primary mode of transport?',
        image: undefined,
        answers: [
          {
            answer: 'The Quinjet',
            correct: true
          },
          {
            answer: 'A bus',
            correct: false
          },
          {
            answer: 'The Blackbird',
            correct: false
          },
          {
            answer: 'The Blackhawk',
            correct: false
          }
        ],
      },
      {
        id: 17,
        type: 'Marvel',
        question: 'Which inhuman did Johnny Storm date?',
        image: undefined,
        answers: [
          {
            answer: 'Crystal',
            correct: true
          },
          {
            answer: 'Medusa',
            correct: false
          },
          {
            answer: 'Storm',
            correct: false
          },
          {
            answer: 'Invisible Woman',
            correct: false
          }
        ],
      },
      {
        id: 18,
        type: 'Marvel',
        question: 'Iceman is a member of which team?',
        image: undefined,
        answers: [
          {
            answer: 'The X-Men',
            correct: true
          },
          {
            answer: 'The Fantastic Four',
            correct: false
          },
          {
            answer: 'The Invaders',
            correct: false
          },
          {
            answer: 'The Liberators',
            correct: false
          }
        ],
      },
      {
        id: 19,
        type: 'Marvel',
        question: 'Which Super Hero is romantically interested in Sue Storm?',
        image: undefined,
        answers: [
          {
            answer: 'Namor',
            correct: true
          },
          {
            answer: 'Iron Man',
            correct: false
          },
          {
            answer: 'Spider-Man',
            correct: false
          },
          {
            answer: 'Black Panther',
            correct: false
          }
        ],
      },
      {
        id: 20,
        type: 'Marvel',
        question: 'What was Dum Dum Dugan before he joined the military?',
        image: undefined,
        answers: [
          {
            answer: 'A circus strongman',
            correct: true
          },
          {
            answer: 'An actor',
            correct: false
          },
          {
            answer: 'A policeman',
            correct: false
          },
          {
            answer: 'A firefighter',
            correct: false
          }
        ],
      },
      {
        id: 21,
        type: 'Marvel',
        question: 'What is the name of Tony Stark\'s building that the team uses as head - quarters in Marvel: Ultimate Alliance?',
        image: undefined,
        answers: [
          {
            answer: 'Stark Tower',
            correct: true
          },
          {
            answer: 'Camp Hammond',
            correct: false
          },
          {
            answer: 'Iron Tower',
            correct: false
          },
          {
            answer: 'S.H.I.E.L.D. Headquarters',
            correct: false
          }
        ],
      },
      {
        id: 22,
        type: 'Marvel',
        question: 'Wyatt Wingfoot is a member of what tribe of Native Americans?',
        image: undefined,
        answers: [
          {
            answer: 'Keewazi',
            correct: true
          },
          {
            answer: 'Wasabi',
            correct: false
          },
          {
            answer: 'Inuit',
            correct: false
          },
          {
            answer: 'Aztecs',
            correct: false
          }
        ],
      },
      {
        id: 23,
        type: 'Marvel',
        question: 'What was Wolverine\'s name when he was a Horseman of Apocalypse?',
        image: undefined,
        answers: [
          {
            answer: 'Death',
            correct: true
          },
          {
            answer: 'Rage',
            correct: false
          },
          {
            answer: 'Destruction',
            correct: false
          },
          {
            answer: 'Oblivion',
            correct: false
          }
        ],
      },
      {
        id: 24,
        type: 'Marvel',
        question: 'Daredevil and Elektra first met at which school?',
        image: undefined,
        answers: [
          {
            answer: 'Columbia University',
            correct: true
          },
          {
            answer: 'Smallville High',
            correct: false
          },
          {
            answer: 'Empire State University',
            correct: false
          },
          {
            answer: 'Hard Knocks',
            correct: false
          }
        ],
      },
      {
        id: 25,
        type: 'Marvel',
        question: 'Weasel\'s real name is:',
        image: undefined,
        answers: [
          {
            answer: 'Jack Hammer',
            correct: true
          },
          {
            answer: 'Henry Pym',
            correct: false
          },
          {
            answer: 'Natalia Romanova',
            correct: false
          },
          {
            answer: 'Pack Ham',
            correct: false
          }
        ],
      },
      {
        id: 26,
        type: 'Marvel',
        question: 'Edwin Jarvis is the butler to:',
        image: undefined,
        answers: [
          {
            answer: 'Tony Stark',
            correct: true
          },
          {
            answer: 'Bruce Wayne',
            correct: false
          },
          {
            answer: 'Charles Xavier',
            correct: false
          },
          {
            answer: 'Brian Braddock',
            correct: false
          }
        ],
      },
      {
        id: 27,
        type: 'Marvel',
        question: 'Captain Leonard McKenzie was the father of:',
        image: undefined,
        answers: [
          {
            answer: 'Namor',
            correct: true
          },
          {
            answer: 'Captain America',
            correct: false
          },
          {
            answer: 'Captain Britain',
            correct: false
          },
          {
            answer: 'Iron Man',
            correct: false
          }
        ],
      },
      {
        id: 28,
        type: 'Marvel',
        question: 'The Vision is an android created by:',
        image: undefined,
        answers: [
          {
            answer: 'Ultron',
            correct: true
          },
          {
            answer: 'Reed Richards',
            correct: false
          },
          {
            answer: 'Tony Stark',
            correct: false
          },
          {
            answer: 'Doctor Doom',
            correct: false
          }
        ],
      },
      {
        id: 29,
        type: 'Marvel',
        question: 'Fin Fang Foom is an alien from:',
        image: undefined,
        answers: [
          {
            answer: 'Maklu IV',
            correct: true
          },
          {
            answer: 'Krypton',
            correct: false
          },
          {
            answer: 'Mars',
            correct: false
          },
          {
            answer: 'Vulcan',
            correct: false
          }
        ],
      },
      {
        id: 30,
        type: 'Marvel',
        question: 'How many rings of power does Mandarin possess?',
        image: undefined,
        answers: [
          {
            answer: '10',
            correct: true
          },
          {
            answer: '1',
            correct: false
          },
          {
            answer: '2',
            correct: false
          },
          {
            answer: '3',
            correct: false
          }
        ],
      },
      {
        id: 31,
        type: 'Marvel',
        question: 'Spider-Man was talked into creating the Spider-Mobile by the advertising firm of:',
        image: undefined,
        answers: [
          {
            answer: 'Carter Lombardo',
            correct: true
          },
          {
            answer: 'Max Shrek',
            correct: false
          },
          {
            answer: 'Reed Richards',
            correct: false
          },
          {
            answer: 'Splash',
            correct: false
          }
        ],
      },
      {
        id: 32,
        type: 'Marvel',
        question: 'When just a child living on the street, Storm attempted to:',
        image: undefined,
        answers: [
          {
            answer: 'Pick the pocket of Professor Xavier',
            correct: true
          },
          {
            answer: 'Burn down a village with a lightning strike',
            correct: false
          },
          {
            answer: 'Become the leader of a gang',
            correct: false
          },
          {
            answer: 'Steal Professor Xavier\'s car',
            correct: false
          }
        ],
      },
      {
        id: 33,
        type: 'Marvel',
        question: 'The Thing has how many fingers on both hands, including his thumbs?',
        image: undefined,
        answers: [
          {
            answer: '8',
            correct: true
          },
          {
            answer: '6',
            correct: false
          },
          {
            answer: '10',
            correct: false
          },
          {
            answer: '4',
            correct: false
          }
        ],
      },
      {
        id: 34,
        type: 'Marvel',
        question: 'Silver Surfer\'s "surfboard" is composed of: ',
        image: undefined,
        answers: [
          {
            answer: 'The same material as his body',
            correct: true
          },
          {
            answer: 'Adamantium',
            correct: false
          },
          {
            answer: 'Silver',
            correct: false
          },
          {
            answer: 'Ice',
            correct: false
          }
        ],
      },
      {
        id: 35,
        type: 'Marvel',
        question: 'Nick Fury has a brother who became the villain:',
        image: undefined,
        answers: [
          {
            answer: 'Scorpio',
            correct: true
          },
          {
            answer: 'Venom',
            correct: false
          },
          {
            answer: 'Viper',
            correct: false
          },
          {
            answer: 'The Red Skull',
            correct: false
          }
        ],
      },
      {
        id: 36,
        type: 'Marvel',
        question: 'Ms. Marvel Carol Danvers has never been known as:',
        image: undefined,
        answers: [
          {
            answer: 'Rogue',
            correct: true
          },
          {
            answer: 'Captain Marvel',
            correct: false
          },
          {
            answer: 'Warbird',
            correct: false
          },
          {
            answer: 'Binary',
            correct: false
          }
        ],
      },
      {
        id: 37,
        type: 'Marvel',
        question: 'In college, Mr. Fantastic roomed with:',
        image: undefined,
        answers: [
          {
            answer: 'Ben Grimm',
            correct: true
          },
          {
            answer: 'Tony Stark',
            correct: false
          },
          {
            answer: 'Johnny Storm',
            correct: false
          },
          {
            answer: 'Susan Storm',
            correct: false
          }
        ],
      },
      {
        id: 38,
        type: 'Marvel',
        question: 'Bullseye killed Elektra with:',
        image: undefined,
        answers: [
          {
            answer: 'Her own sai',
            correct: true
          },
          {
            answer: 'A gun',
            correct: false
          },
          {
            answer: 'A bow',
            correct: false
          },
          {
            answer: 'A nail',
            correct: false
          }
        ],
      },
      {
        id: 39,
        type: 'Marvel',
        question: 'Bucky was:',
        image: undefined,
        answers: [
          {
            answer: 'Captain America\'s sidekick',
            correct: true
          },
          {
            answer: 'A member of the X-Men',
            correct: false
          },
          {
            answer: 'A supervillain',
            correct: false
          },
          {
            answer: 'An assistant of Bruce Banner',
            correct: false
          }
        ],
      },
      {
        id: 40,
        type: 'Marvel',
        question: 'What does the K in MODOK stand for?',
        image: undefined,
        answers: [
          {
            answer: 'Killing',
            correct: true
          },
          {
            answer: 'Knowledge',
            correct: false
          },
          {
            answer: 'Kings',
            correct: false
          },
          {
            answer: 'Ketchup',
            correct: false
          }
        ],
      },
      {
        id: 41,
        type: 'Marvel',
        question: 'Jarvis was at one time a member of:',
        image: undefined,
        answers: [
          {
            answer: 'The Royal Air Force',
            correct: true
          },
          {
            answer: 'The X-Men',
            correct: false
          },
          {
            answer: 'S.H.I.E.L.D.',
            correct: false
          },
          {
            answer: 'The CIA',
            correct: false
          }
        ],
      },
      {
        id: 42,
        type: 'Marvel',
        question: 'When she worked for Hydra, Spider-Woman\'s first mission was to: ',
        image: undefined,
        answers: [
          {
            answer: 'Kill Nick Fury',
            correct: true
          },
          {
            answer: 'Seduce Iron Man',
            correct: false
          },
          {
            answer: 'Seduce Spider-Man',
            correct: false
          },
          {
            answer: 'Kill the Black Widow',
            correct: false
          }
        ],
      },
      {
        id: 43,
        type: 'Marvel',
        question: 'Wyatt Wingfoot was a college roommate of:',
        image: undefined,
        answers: [
          {
            answer: 'Johnny Storm',
            correct: true
          },
          {
            answer: 'James Howlett',
            correct: false
          },
          {
            answer: 'Peter Parker',
            correct: false
          },
          {
            answer: 'Reed Richards',
            correct: false
          }
        ],
      },
      {
        id: 44,
        type: 'Marvel',
        question: 'Weasel has worked closely with:',
        image: undefined,
        answers: [
          {
            answer: 'Deadpool',
            correct: true
          },
          {
            answer: 'Cable',
            correct: false
          },
          {
            answer: 'Captain America',
            correct: false
          },
          {
            answer: 'Iron Man',
            correct: false
          }
        ],
      },
      {
        id: 45,
        type: 'Marvel',
        question: 'Namor\'s cousin Namorita is:',
        image: undefined,
        answers: [
          {
            answer: 'A clone',
            correct: true
          },
          {
            answer: 'An android',
            correct: false
          },
          {
            answer: 'His wife',
            correct: false
          },
          {
            answer: 'His mistress',
            correct: false
          }
        ],
      },
      {
        id: 46,
        type: 'Marvel',
        question: 'Namor is half Atlantean and half:',
        image: undefined,
        answers: [
          {
            answer: 'Human',
            correct: true
          },
          {
            answer: 'Asgardian',
            correct: false
          },
          {
            answer: 'Alien',
            correct: false
          },
          {
            answer: 'Mutant',
            correct: false
          }
        ],
      },
      {
        id: 47,
        type: 'Marvel',
        question: 'Dr. Doom was expelled from college because:',
        image: undefined,
        answers: [
          {
            answer: 'He caused an explosion with an experiment',
            correct: true
          },
          {
            answer: 'He killed a teacher',
            correct: false
          },
          {
            answer: 'He got into a fist fight with Reed Richard',
            correct: false
          },
          {
            answer: 'He was cheating to get good grades',
            correct: false
          }
        ],
      },
      {
        id: 48,
        type: 'Marvel',
        question: 'The Grey Gargoyle is able to:',
        image: undefined,
        answers: [
          {
            answer: 'Turn his victims to stone with a touch',
            correct: true
          },
          {
            answer: 'Create storms with his wings',
            correct: false
          },
          {
            answer: 'Freeze his victims',
            correct: false
          },
          {
            answer: 'Spit fire',
            correct: false
          }
        ],
      },
      {
        id: 49,
        type: 'Marvel',
        question: 'Attuma believes he is destined to rule Atlantis because:',
        image: undefined,
        answers: [
          {
            answer: 'It was written in the Atlantean Chronicles',
            correct: true
          },
          {
            answer: 'He doesn\'t believe he is destined to rule Atlantis',
            correct: false
          },
          {
            answer: 'He thinks he is the strongest',
            correct: false
          },
          {
            answer: 'His mom told him he can do anything he wants',
            correct: false
          }
        ],
      },
      {
        id: 50,
        type: 'Marvel',
        question: 'Mandarin lives in:',
        image: undefined,
        answers: [
          {
            answer: 'The Valley of Spirits',
            correct: true
          },
          {
            answer: 'The Mountains of Asgard',
            correct: false
          },
          {
            answer: 'The Canyons of Atlantis',
            correct: false
          },
          {
            answer: 'The Cave of Souls',
            correct: false
          }
        ],
      },
      {
        id: 51,
        type: 'DC',
        question: 'What is Superman\'s real name?',
        image: undefined,
        answers: [
          {
            answer: 'Kal-El',
            correct: true
          },
          {
            answer: 'Clark Kent',
            correct: false
          },
          {
            answer: 'Bruce Wayne',
            correct: false
          },
          {
            answer: 'Peter Parker',
            correct: false
          }
        ],
      },
      {
        id: 52,
        type: 'DC',
        question: 'What is the name of the Green Arrow\'s apprentice?',
        image: undefined,
        answers: [
          {
            answer: 'Speedy',
            correct: true
          },
          {
            answer: 'Slick',
            correct: false
          },
          {
            answer: 'Blue Arrow',
            correct: false
          },
          {
            answer: 'Quick Arrow',
            correct: false
          }
        ],
      },
      {
        id: 53,
        type: 'DC',
        question: 'Who is the Oracle in the DC Universe?',
        image: undefined,
        answers: [
          {
            answer: 'Barbara Gordon',
            correct: true
          },
          {
            answer: 'Lois Lane',
            correct: false
          },
          {
            answer: 'The Riddler',
            correct: false
          },
          {
            answer: 'Jimmy Olsen',
            correct: false
          }
        ],
      },
      {
        id: 54,
        type: 'DC',
        question: 'In the Batman novel "No Man\'s Land", who kills Commissioner Gordon\'s lover?',
        image: undefined,
        answers: [
          {
            answer: 'The Joker',
            correct: true
          },
          {
            answer: 'Two-Face',
            correct: false
          },
          {
            answer: 'The Riddler',
            correct: false
          },
          {
            answer: 'Batman',
            correct: false
          }
        ],
      },
      {
        id: 55,
        type: 'DC',
        question: 'What is the name of the original Flash?',
        image: undefined,
        answers: [
          {
            answer: 'Jay Garrick',
            correct: true
          },
          {
            answer: 'Barry Allen',
            correct: false
          },
          {
            answer: 'Wally West',
            correct: false
          },
          {
            answer: 'Bart Allen',
            correct: false
          }
        ],
      },
      {
        id: 56,
        type: 'DC',
        question: 'Which of these people was a Green Lantern?',
        image: undefined,
        answers: [
          {
            answer: 'John Stewart',
            correct: true
          },
          {
            answer: 'Princess Diana',
            correct: false
          },
          {
            answer: 'Wally West',
            correct: false
          },
          {
            answer: 'Harvey Dent',
            correct: false
          }
        ],
      },
      {
        id: 57,
        type: 'DC',
        question: 'In the graphic novel "Hush", who does Batman fall in love with?',
        image: undefined,
        answers: [
          {
            answer: 'Catwoman',
            correct: true
          },
          {
            answer: 'Huntress',
            correct: false
          },
          {
            answer: 'Poison Ivy',
            correct: false
          },
          {
            answer: 'Lois Lane',
            correct: false
          }
        ],
      },
      {
        id: 58,
        type: 'DC',
        question: 'Which Green Lantern became Parallax?',
        image: undefined,
        answers: [
          {
            answer: 'Hal Jordan',
            correct: true
          },
          {
            answer: 'Green Arrow',
            correct: false
          },
          {
            answer: 'Guy Gardner',
            correct: false
          },
          {
            answer: 'Kyle Rayner',
            correct: false
          }
        ],
      },
      {
        id: 59,
        type: 'DC',
        question: 'The Flash became what kind of lantern during the events of "Blackest Night"?',
        image: undefined,
        answers: [
          {
            answer: 'Blue Lantern',
            correct: true
          },
          {
            answer: 'Black Lantern',
            correct: false
          },
          {
            answer: 'Green Lantern',
            correct: false
          },
          {
            answer: 'Orange Lantern',
            correct: false
          }
        ],
      },
      {
        id: 60,
        type: 'DC',
        question: 'What color is a Green Lantern\'s weakness?',
        image: undefined,
        answers: [
          {
            answer: 'Yellow',
            correct: true
          },
          {
            answer: 'Purple',
            correct: false
          },
          {
            answer: 'Blue',
            correct: false
          },
          {
            answer: 'Orange',
            correct: false
          }
        ],
      },
      {
        id: 61,
        type: 'DC',
        question: 'Which Robin did The Joker kill?',
        image: undefined,
        answers: [
          {
            answer: 'Jason Todd',
            correct: true
          },
          {
            answer: 'Alfred Pennyworth',
            correct: false
          },
          {
            answer: 'Dick Grayson',
            correct: false
          },
          {
            answer: 'Tim Drake',
            correct: false
          }
        ],
      },
      {
        id: 62,
        type: 'DC',
        question: 'What is the name of the object in the DC Universe that can bring someone back to life?',
        image: undefined,
        answers: [
          {
            answer: 'Lazarus Pit',
            correct: true
          },
          {
            answer: 'Cosmic Treadmill',
            correct: false
          },
          {
            answer: 'Kryptonite',
            correct: false
          },
          {
            answer: 'The Multiverse',
            correct: false
          }
        ],
      },
      {
        id: 63,
        type: 'DC',
        question: 'In the DC/Marvel crossover where DC characters fight against Marvel characters, who is Batman matched up against?',
        image: undefined,
        answers: [
          {
            answer: 'Captain America',
            correct: true
          },
          {
            answer: 'Wolverine',
            correct: false
          },
          {
            answer: 'Spiderman',
            correct: false
          },
          {
            answer: 'The Hulk',
            correct: false
          }
        ],
      },
      {
        id: 64,
        type: 'DC',
        question: 'Harley Quinn is devoted to which villain?',
        image: undefined,
        answers: [
          {
            answer: 'The Joker',
            correct: true
          },
          {
            answer: 'Clayface',
            correct: false
          },
          {
            answer: 'Two-Face',
            correct: false
          },
          {
            answer: 'The Riddler',
            correct: false
          }
        ],
      },
    ];



    const options = [
      {
        id: 1,
        number: 10,
        randomize: true,
        type: 'all'
      }
    ];



    return { questions, options };
  }
}
