import thumbnailRedVsBlack from '../home/lists/images/videos/redvsblack.jpg'
import thumbtamojunto from '../home/lists/images/videos/tamojunto.jpg'
import thumbBrilhante from '../home/lists/images/videos/Brilhante.jpg'
import thumbOnibus from '../home/lists/images/videos/Onibus.jpg'
import thumbOmelette from '../home/lists/images/videos/Omelette.jpg'
import thumbCaravanPalace from '../home/lists/images/videos/CaravanPalace.jpg'
import thumbRockleevsGaara from '../home/lists/images/videos/rockeleevsgaara.jpg'

export const videos = [
    {
        id: 1,
        image: thumbnailRedVsBlack,
        title: "Red vs Black",
        category: "Action",
        embedVideo: "https://www.youtube.com/embed/PNFHIkOJOII?si=e6YcfJfnsRtoZQ6X",
        rating: 4.5,
        description: "An action-packed video with intense battles and stunning visuals.",
        comments: [
            { user: "JohnDoe", text: "Great video!", rating: 5 },
            { user: "JaneSmith", text: "Pretty good.", rating: 4 },
        ]
    },
    {
        id: 2,
        image: thumbtamojunto,
        title: "Tamo Junto",
        category: "Drama",
        embedVideo: "https://www.youtube.com/embed/NL3Kx0S1RzQ?si=Iij0GSwDzmelG87l",
        rating: 5,
        description: "A touching drama that explores deep human emotions and connections.",
        comments: [
            { user: "Alice", text: "Very touching.", rating: 5 },
            { user: "masterx", text: "parece animação da disney.", rating: 5 }
        ]
    },
    {
        id: 3,
        image: thumbBrilhante,
        title: "Brilhante",
        category: "Drama",
        embedVideo: "https://www.youtube.com/embed/21mDekTZwsw?si=2CfOsQgFRX2oIT7D",
        rating: 3.5,
        description: "A story that shines a light on the struggles and triumphs of everyday life.",
        comments: [
            { user: "Bob", text: "Could be better.", rating: 3 },
            { user: "Charlie", text: "I enjoyed it.", rating: 4 },
        ]
    },
    {
        id: 4,
        image: thumbOnibus,
        title: "O Paradoxo\nda\nEspera do Ônibus",
        category: "Drama",
        embedVideo: "https://www.youtube.com/embed/Ibow_K7fqF0?si=PpepP1YyUkq9vdU6",
        rating: 4.8,
        description: "A philosophical exploration of life's waiting periods, told through a bus stop scenario.",
        comments: [
            { user: "Dave", text: "Amazing story!", rating: 5 },
            { user: "Eve", text: "Loved it.", rating: 4.5 },
        ]
    },
    {
        id: 5,
        image: thumbOmelette,
        title: "Omelette",
        category: "Comedy",
        embedVideo: "https://www.youtube.com/embed/OCp_G6J0m6g?si=GRSvq7f0DfDZTzBU",
        rating: 4.2,
        description: "A hilarious short film about the misadventures of cooking an omelette.",
        comments: [
            { user: "Frank", text: "Hilarious!", rating: 5 },
            { user: "Grace", text: "Very funny.", rating: 4 },
        ]
    },
    {
        id: 6,
        image: thumbCaravanPalace,
        title: "Caravan Palace",
        category: "Music Video",
        embedVideo: "https://www.youtube.com/embed/UbQgXeY_zi4?si=Sf81SKMDL-kQjPTk",
        rating: 4.7,
        description: "An electrifying music video from Caravan Palace that blends retro and modern vibes.",
        comments: [
            { user: "Heidi", text: "Great music!", rating: 5 },
            { user: "Ivan", text: "Nice video.", rating: 4.5 },
        ]
    },
    {
        id: 7,
        image: thumbRockleevsGaara,
        title: "Rock Lee vs Gaara - Linkin Park",
        category: "Action",
        embedVideo: "https://www.youtube.com/embed/VgDgWzBL7s4?si=gnb0339WnN_Q61zk",
        rating: 4.7,
        description: "A fan-made video featuring an epic battle between Rock Lee and Gaara set to Linkin Park.",
        comments: [
            { user: "Heidi", text: "wtf!", rating: 5 },
            { user: "Ivan", text: "god.", rating: 4.5 },
        ]
    },
];
