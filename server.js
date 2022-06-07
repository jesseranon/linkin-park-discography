const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const LINKIN_PARK_DISCOGRAPHY = {
    "Hybrid Theory": {
        albumName: "Hybrid Theory",
        year: 2000,
        tracklist: {
            "Papercut": {
                length: '3:04'
            },
            "One Step Closer": {
                length: '2:35'
            },
            "With You": {
                length: '3:23'
            },
            "Points of Authority": {
                length: '3:20'
            },
            "Crawling": {
                length: '3:29'
            },
            "Runaway": {
                length: '3:03'
            },
            "By Myself": {
                length: '3:09'
            },
            "In the End": {
                length: '3:36'
            },
            "A Place for My Head": {
                length: '3:04'
            },
            "Forgotten": {
                length: '3:14'
            },
            "Cure for the Itch": {
                length: '2:37'
            },
            "Pushing Me Away": {
                length: '3:11'
            }
        }
    },
    "Reanimation": {
        albumName: "Reanimation",
        year: 2002,
        tracklist: {
            "Opening": {
                length: '1:07',
            },
            "Pts.OF.Athrty": {
                length: '3:45',
                featuring: "Jay Gordon"
            },
            "Enth E Nd": {
                length: '4:00',
                featuring: "KutMasta Kurt and Motion Man"
            },
            "[Chali]": {
                length: '0:23'
            },
            "Frgt/10": {
                length: '3:32',
                featuring: 'Alchemist and Chali 2na'
            },
            "P5hng Me A*wy": {
                length: '4:38',
                featuring: "Stephen Richards"
            },
            "Plc.4 Mie Hæd": {
                length: '4:20',
                featuring: "Amp Live and Zion"
            },
            "X-Ecutioner Style": {
                length: '1:49',
                featuring: "Sean C, Roc Raida and Black Thought"
            },
            "H! Vltg3": {
                length: '3:30',
                featuring: "Evidence, Pharoahe Monch and DJ Babu"
            },
            "[Riff Raff]": {
                length: '0:21'
            },
            "Wth>You": {
                length: '4:12',
                featuring: "Aceyalone"
            },
            "Ntr\\Mssion": {
                length: '0:29'
            },
            "Ppr:Kut": {
                length: '3:26',
                featuring: "Cheapshot, Jubacca, Rasco and Planet Asia"
            },
            "Rnw@y": {
                length: '3:13',
                featuring: "Backyard Bangers and Phoenix Orion"
            },
            "My<Dsmbr": {
                length: '4:17',
                featuring: "Mickey P. and Kelli Ali"
            },
            "[Stef]": {
                length: '0:10'
            },
            "By_Myslf": {
                length: '3:42',
                featuring: "Josh Abraham and Stephen Carpenter"
            },
            "Kyur4 th Ich": {
                length: '2:32',
                featuring: "Chairman Hanh"
            },
            "1Stp Klosr": {
                length: '5:46',
                featuring: "The Humble Brothers and Jonathan Davis"
            },
            "Krwlng": {
                length: '5:40',
                featuring: "Aaron Lewis"
            }
        }
        
    },
    "Meteora": {
        albumName: "Meteora",
        year: 2003,
        tracklist: {
            "Foreword": {
                length: '0:13'
            },
            "Don't Stay": {
                length: '3:07'
            },
            "Somewhere I Belong": {
                length: '3:33'
            },
            "Lying from You": {
                length: '2:55'
            },
            "Hit the Floor": {
                length: '2:44'
            },
            "Easier to Run": {
                length: '3:24'
            },
            "Faint": {
                length: '2:42'
            },
            "Figure.09": {
                length: '3:17'
            },
            "Breaking the Habit": {
                length: '3:16'
            },
            "From the Inside": {
                length: '2:53'
            },
            "Nobody's Listening": {
                length: '2:58'
            },
            "Session": {
                length: '2:23'
            },
            "Numb": {
                length: '3:05'
            }
        }
    },
    "Minutes to Midnight": {
        albumName: "Minutes to Midnight",
        year: 2007,
        tracklist: {
            "Wake": {
                length: '1:40'
            },
            "Given Up": {
                length: '3:09'
            },
            "Leave Out All the Rest": {
                length: '3:29'
            },
            "Bleed It Out": {
                length: '2:44'
            },
            "Shadow of the Day": {
                length: '4:49'
            },
            "What I've Done": {
                length: '3:25'
            },
            "Hands Held High": {
                length: '3:53'
            },
            "No More Sorrow": {
                length: '3:41'
            },
            "Valentine's Day": {
                length: '3:16'
            },
            "In Between": {
                length: '3:16'
            },
            "In Pieces": {
                length: '3:38'
            },
            "The Little Things Give You Away": {
                length: '6:23'
            }
        }
    },
    "A Thousand Suns": {
        albumName: "A Thousand Suns",
        year: 2010,
        tracklist: {
            "The Requiem": {
                length: '2:01'
            },
            "The Radiance": {
                length: '0:57'
            },
            "Burning in the Skies": {
                length: '4:13'
            },
            "Empty Spaces": {
                length: '0:18'
            },
            "When They Come for Me": {
                length: '4:53'
            },
            "Robot Boy": {
                length: '4:29'
            },
            "Jornada Del Muerto": {
                length: '1:34'
            },
            "Waiting for the End": {
                length: '3:51'
            },
            "Blackout": {
                length: '4:39'
            },
            "Wretches and Kings": {
                length: '4:10'
            },
            "Wisdom, Justice, and Love": {
                length: '1:39'
            },
            "Iridescent": {
                length: '4:56'
            },
            "Fallout": {
                length: '1:23'
            },
            "The Catalyst": {
                length: '5:39'
            },
            "The Messenger": {
                length: '3:01'
            }
        }
    },
    "Living Things": {
        albumName: "Living Things",
        year: 2012,
        tracklist: {
            "Lost In the Echo": {
                length: '3:25'
            },
            "In My Remains": {
                length: '3:20'
            },
            "Burn It Down": {
                length: '3:51'
            },
            "Lies Greed Misery": {
                length: '2:27'
            },
            "I'll Be Gone": {
                length: '3:31'
            },
            "Castle of Glass": {
                length: '3:25'
            },
            "Victimized": {
                length: '1:46'
            },
            "Roads Untraveled": {
                length: '3:49'
            },
            "Skin to Bone": {
                length: '2:48'
            },
            "Until It Breaks": {
                length: '3:43'
            },
            "Tinfoil": {
                length: '1:11'
            },
            "Powerless": {
                length: '3:43'
            }
        }
    },
    "The Hunting Party": {
        albumName: "The Hunting Party",
        year: 2014,
        tracklist: {
            "Keys to the Kingdom": {
                length: '3:38'
            },
            "All for Nothing": {
                length: '3:33',
                featuring: "Page Hamilton"
            },
            "Guilty All the Same": {
                length: '5:55',
                featuring: "Rakim"
            },
            "The Summoning": {
                length: '1:00'
            },
            "War": {
                length: '2:11'
            },
            "Wastelands": {
                length: '3:15'
            },
            "Until It's Gone": {
                length: '3:53'
            },
            "Rebellion": {
                length: '3:44',
                featuring: "Daron Malakian"
            },
            "Mark the Graves": {
                length: '5:05'
            },
            "Drawbar": {
                length: '2:46',
                featuring: "Tom Morello"
            },
            "Final Masquerade": {
                length: '3:37'
            },
            "A Line in the Sand": {
                length: '6:35'
            }
        }
    },
    "One More Light": {
        albumName: "One More Light",
        year: 2017,
        tracklist: {
            "Nobody Can Save Me": {
                length: '3:45'
            },
            "Goodbye": {
                length: '3:31',
                featuring: "Pusha T and Stormzy"
            },
            "Talking to Myself": {
                length: '3:51'
            },
            "Battle Symphony": {
                length: '3:36'
            },
            "Invisible": {
                length: '3:34'
            },
            "Heavy": {
                length: '2:49',
                featuring: "Kiiara"
            },
            "Sorry for Now": {
                length: '3:23'
            },
            "Halfway Right": {
                length: '3:37'
            },
            "One More Light": {
                length: '4:15'
            },
            "Sharp Edges": {
                length: '2:58'
            }
        }
    }
};


app.get('/', (request, response) => {
    response.send('Hello world!');
});

app.get('/info', (request, response) => {
    response.send('<h1>Linkin Park Discography</h1>');
});

app.get('/api/:album', (request, response) => {
    let album = request.params.album;
    album = album.split(' ');
    album = album.map(word => {
        return word[0].toUpperCase().concat(word.slice(1).toLowerCase());
    });
    album = album.join(' ');
    if (LINKIN_PARK_DISCOGRAPHY[album]) {
        response.json(LINKIN_PARK_DISCOGRAPHY[album]);
    } else {
        response.send('<h1>Album not found</h1>');
    }
});

app.listen(PORT, () => console.log(`app running on port ${PORT}`));