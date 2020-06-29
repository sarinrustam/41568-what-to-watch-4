import {getRandomRating} from "../utils/utils.js";

export default [
  {
    id: 0,
    title: `Pulp Fuction`,
    img: `img/pulp-fiction.jpg`,
    release: 1994,
    genre: `Action`,
    poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg`,
    rating: {
      score: getRandomRating(),
      scoreDesc: `Very good`,
      amount: 2323
    },
    description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    crew: {
      director: `Quentin Tarantino`,
      actors: `Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`
    },
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
  {
    id: 1,
    title: `Orlando`,
    img: `img/orlando.jpg`,
    release: 1992,
    genre: `Drama`,
    poster: `https://m.media-amazon.com/images/M/MV5BYmY1OTA3MjAtYjQxOC00OTlkLWExZWQtMjc3ZjExOWFhM2UwXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BOTNlZDExZDgtZjMzMS00NDZkLWFlNTItNDM1YTAxODQyMzM4XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg`,
    rating: {
      score: 7.1,
      scoreDesc: `Very awesome`,
      amount: 4333
    },
    description: `After Queen Elizabeth I commands him not to grow old, a young nobleman struggles with love and his place in the world.`,
    crew: {
      director: `Sally Potter`,
      actors: `Tilda Swinton, Quentin Crisps, John Bott`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
  {
    id: 2,
    title: `Avatar`,
    img: `img/avatar.jpg`,
    release: 2009,
    genre: `SCI-FI`,
    poster: `https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BMTUxMDI1MDI5MV5BMl5BanBnXkFtZTcwOTY3MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg`,
    rating: {
      score: 7.8,
      scoreDesc: `Not Bad`,
      amount: 43332
    },
    description: `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.`,
    crew: {
      director: `James Cameron`,
      actors: `Sam Worthington, Zoe Saldana, Sigourney Weaver`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
  {
    id: 3,
    title: `No country for old men`,
    img: `img/no-country-for-old-men.jpg`,
    release: 2007,
    genre: `Fantasy`,
    poster: `https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BODRmM2U0OGYtNmZhOC00N2U0LTlkODktODk5MjM2YmJiYjYxXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SX1777_CR0,0,1777,755_AL_.jpg`,
    rating: {
      score: 9.1,
      scoreDesc: `Very well`,
      amount: 3451
    },
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    crew: {
      director: `Ethan Coen, Joel Coen`,
      actors: `Tommy Lee Jones, Javier Bardem, Josh Brolin`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
  {
    id: 4,
    title: `Aviator`,
    img: `img/aviator.jpg`,
    release: 2004,
    genre: `Thriller`,
    poster: `https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BMTcwMDczNDY5N15BMl5BanBnXkFtZTcwNjU0NzcxNw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg`,
    rating: {
      score: 8.5,
      scoreDesc: `Very well`,
      amount: 9883
    },
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    crew: {
      director: `Martin Scorsese`,
      actors: ` Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
  {
    id: 5,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    release: 2015,
    genre: `Action`,
    poster: `https://m.media-amazon.com/images/M/MV5BNzgyNDczMjU4NV5BMl5BanBnXkFtZTgwMTUwMDI3NjE@._V1_SY1000_SX675_AL_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BMTkwOTA2YTQtNDNkNi00YWZiLTg2ZGEtODAwOGFjMmZlYTUyXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg`,
    rating: {
      score: 8.3,
      scoreDesc: `Very good`,
      amount: 383
    },
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    crew: {
      director: `Justin Kurzel`,
      actors: `Michael Fassbender, Marion Cotillard, Jack Madigan`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
  {
    id: 6,
    title: `Johnny English`,
    img: `img/johnny-english.jpg`,
    release: 2018,
    genre: `Melodrama`,
    poster: `https://m.media-amazon.com/images/M/MV5BMjI4MjQ3MjI5MV5BMl5BanBnXkFtZTgwNjczMDE4NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BYTgwOGQ0ZWMtYTZlNS00YzliLTkzMmYtNzQ1ZmJkNDRhMDk1XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg`,
    rating: {
      score: 3.0,
      scoreDesc: `Bad`,
      amount: 3123
    },
    description: `After a cyber-attack reveals the identity of all of the active undercover agents in Britain, Johnny English (Rowan Atkinson) is forced to come out of retirement to find the mastermind hacker.`,
    crew: {
      director: `David Kerrl`,
      actors: `Rowan Atkinson, Ben Miller, Olga Kurylenko`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
  {
    id: 7,
    title: `Seven years in Tibet`,
    img: `img/seven-years-in-tibet.jpg`,
    release: 1997,
    genre: `PSY`,
    poster: `https://m.media-amazon.com/images/M/MV5BYmM4ZDhhNmItMDEyZi00NDUyLTk3MzUtMzE5NTE1ZWM0N2UyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg`,
    coverBackground: `https://m.media-amazon.com/images/M/MV5BMTUwMTc5NzMyOF5BMl5BanBnXkFtZTcwMTk2NDAzNA@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg`,
    rating: {
      score: 8.4,
      scoreDesc: `Very awesome`,
      amount: 435435
    },
    description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
    crew: {
      director: `Jean-Jacques Annaud`,
      actors: `Brad Pitt, David Thewlis, BD Wong`
    },
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    review: {
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      author: `Kate Moss`,
      rating: getRandomRating()
    }
  },
];
