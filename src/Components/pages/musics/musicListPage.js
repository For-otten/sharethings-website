import thumbFeel from '../home/lists/images/musics/Feel.png';
import feelAudio from './Lies of P OST _ Feel.mp3';
import conexaoAudio from './conexaozonasul.mp3'
import thumbConexao from '../home/lists/images/musics/conexãozonasul.png'
import megalovaniaAudio from './Megalovania.mp3'
import thumbMegalovania from '../home/lists/images/musics/megalovania.jpg'
import dinhoAudio from './Dinhovirtuoso.mp3'
import thumbDinho from '../home/lists/images/musics/Jhinovirtuoso.jpg'
import duckAudio from './ducktales.mp3'
import thumbDuck from '../home/lists/images/musics/ducktales.jpg'
import volatilAudio from './Volátil.mp3'
import thumbVolatil from '../home/lists/images/musics/volatil.png'

export const musics = [
    {
        id: 1,
        image: thumbFeel,
        title: "Feel",
        category: "Masterpiece",
        audio: feelAudio,
        description: "A captivating piece of music from the 'Lies of P' OST that touches the soul.",
        comments: [
            { user: "User1", text: "Great music!", rating: 5 },
            { user: "User2", text: "I love it!", rating: 4 },
            { user: "User3", text: "Awesome!", rating: 5 }
        ]
    },
    {
        id: 2,
        image: thumbConexao,
        title: "Conexão Zona Sul ft Claris",
        category: "Rap",
        audio: conexaoAudio,
        description: "A powerful rap track featuring Claris with deep lyrics and a catchy beat.",
        comments: [
            { user: "User4", text: "Nice vibe!", rating: 4 },
            { user: "User5", text: "Relaxing!", rating: 5 }
        ]
    },
    {
        id: 3,
        image: thumbMegalovania,
        title: "Megalovania",
        category: "8-bit",
        audio: megalovaniaAudio,
        description: "An iconic track from the game Undertale, known for its catchy 8-bit melody.",
        comments: [
            { user: "User6", text: "Epic tune!", rating: 5 },
            { user: "User7", text: "Nostalgic!", rating: 4 }
        ]
    },
    {
        id: 4,
        image: thumbDinho,
        title: "Rap do Jhin",
        category: "Rap",
        audio: dinhoAudio,
        description: "A rap song inspired by the character Jhin from League of Legends.",
        comments: [
            { user: "User8", text: "Great lyrics!", rating: 4 },
            { user: "User9", text: "Well composed!", rating: 5 }
        ]
    },
    {
        id: 5,
        image: thumbDuck,
        title: "The Moon Theme",
        category: "8-bit",
        audio: duckAudio,
        description: "A legendary track from the DuckTales game, beloved by many for its uplifting melody.",
        comments: [
            { user: "User10", text: "Classic!", rating: 5 },
            { user: "User11", text: "Timeless!", rating: 4.5 }
        ]
    },
    {
        id: 6,
        image: thumbVolatil,
        title: "Volátil",
        category: "Masterpiece",
        audio: volatilAudio,
        description: "A dynamic and explosive track that keeps listeners on their toes.",
        comments: [
            { user: "User12", text: "Thrilling!", rating: 4 },
            { user: "User13", text: "Amazing energy!", rating: 5 }
        ]
    },
];
