import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const salt = bcrypt.genSaltSync(10);

async function main() {
  const BoedNoSuper = await prisma.user.create({
    data: {
      name: "BoedNoNiwa",
      email: "dukunas12@gmail.com",
      password: bcrypt.hashSync("123456", salt),
      role: "super",
    },
  });
  const BoedNoAdmin = await prisma.user.create({
    data: {
      name: "BoedNoAdmin",
      email: "dukunas34@gmail.com",
      password: bcrypt.hashSync("123456", salt),
      role: "admin",
    },
  });
  const BoedNoUser = await prisma.user.create({
    data: {
      name: "BoedNoUser",
      email: "dukunas56@gmail.com",
      password: bcrypt.hashSync("123456", salt),
      role: "user",
    },
  });
  const genreList = await prisma.genre.createMany({
    data: [
      {
        name: "Action",
      },
      {
        name: "Adventure",
      },
      {
        name: "Comedy",
      },
      {
        name: "Crime",
      },
      {
        name: "Drama",
      },
      {
        name: "Fantasy",
      },
      {
        name: "Historical",
      },
      {
        name: "Horror",
      },
      {
        name: "Isekai",
      },
      {
        name: "Mecha",
      },
      {
        name: "Medical",
      },
      {
        name: "Mystery",
      },
      {
        name: "Philosophical",
      },
      {
        name: "Psychological",
      },
      {
        name: "Romance",
      },
      {
        name: "Sci-Fi",
      },
      {
        name: "Slice Of Life",
      },
      {
        name: "Sports",
      },
      {
        name: "Superhero",
      },
      {
        name: "Thriller",
      },
      {
        name: "Tragedy",
      },
      {
        name: "Wuxia",
      },
    ],
  });
}

const comicList = await prisma.comic.createMany({
  data: [
    {
      title: "Otonari Ni Ginga",
      slug: "otonari-ni-ginga",
      synopsis:
        "After the death of his father, Kuga Ichirou, a shoujo mangaka fresh out of high school, has to take care of his two little siblings, Machi and Fumio, all by himself. Struggling to meet a deadline after his previous assistants get their manga debuts, he hires a new assistant through his editor. However, his life takes an unexpected turn after this new assistant is revealed to be a beautiful and mysterious girl…",
      author: "Amagakure Gido",
      artist: "Amagakure Gido",
      status: "Ongoing",
      publication: "2019",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618377/coverArt/Otonari_Ni_Ginga_Vol.1_tpdx2q.jpg",
    },
    {
      title: "Suki Na Ko Ga Megane Wo Wasuretai",
      slug: "suki-na-ko-ga-megane-wo-wasuretai",
      synopsis:
        "Komura is a middle school boy who is head-over-heels in love with his next-seat neighbor Mie, a girl with terrible eyesight who just can't get used to carrying her glasses, often leaving them at home, or accidentally breaking them. He opts to help her as much as he possibly can, and through those efforts, she begins getting acquainted with his kindness. Will she reciprocate?",
      author: "Fujichika Koume",
      artist: "Fujichika Koume",
      status: "Ongoing",
      publication: "2019",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618358/coverArt/Suki_na_Ko_Vol.1_xb3fup.jpg",
    },
    {
      title: "Aishiteru Game Wo Owarasetai",
      slug: "aishiteru-game-wo-owarasetai",
      synopsis:
        "Childhood friends who have been together since they were little. They both realize their feelings for each other, but are too close to be honest. What connects them is the 'I love you game' that they have been playing since they were little. The end of their love is decided in this simple game where the winner is the one who makes the other embarrassed!",
      author: "Doumoto Yuuki",
      artist: "Doumoto Yuuki",
      status: "Ongoing",
      publication: "2021",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618375/coverArt/Aishiteru_Game_Vol._1_ujl54o.png",
    },
    {
      title: "Rinna Keibu wa Iki ga dekinai",
      slug: "rinna-keibu-wa-iki-ga-dekinai",
      synopsis:
        "Clearing up crime after crime, there is one case she can't solve: love. The top-class inspector of the London Police Department, Inspector Rinna, suddenly encounters Private Detective Meishi at a crime scene. Although he doesn't help in the slightest, she can't take her eyes off him. What is this feeling? And if that wasn't enough, he keeps appearing at every imaginable crime scene after that. Thus begins the love story between the inexperienced inspector and clumsy private detective!",
      author: "Araragi Ayune",
      artist: "Araragi Ayune",
      status: "Completed",
      publication: "2018",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618379/coverArt/Rinna_Keibu_Vol._3_i3sqwb.jpg",
    },
    {
      title: "Bungou Stray Dogs",
      slug: "bungou-stray-dogs",
      synopsis:
        "Nakajima Atsushi was kicked out of his orphanage, and now he has no place to go and no food. While he is standing by a river, on the brink of starvation, he rescues a man whimsically attempting suicide. That man is Dazai Osamu, and he and his partner Kunikida are members of a very special detective agency. They have supernatural powers, and deal with cases that are too dangerous for the police or the military. They're tracking down a tiger that has appeared in the area recently, around the time Atsushi came to the area. The tiger seems to have a connection to Atsushi, and by the time the case is solved, it is clear that Atsushi's future will involve much more of Dazai and the rest of the detectives!",
      author: "Asagiri Kafka",
      artist: "Harukawa 35",
      status: "Ongoing",
      publication: "2010",
      featured: true,
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618369/coverArt/Bungou_Stray_Dogs_Vol._1_x02en6.jpg",
    },
    {
      title: "Golden Kamuy",
      slug: "golden-kamuy",
      synopsis:
        "In the early twentieth century, Russo-Japanese War veteran Saichi “Immortal” Sugimoto scratches out a meager existence during the postwar gold rush in the wilderness of Hokkaido. When he stumbles across a map to a fortune in hidden Ainu gold, he sets off on a treacherous quest to find it. But Sugimoto is not the only interested party, and everyone who knows about the gold will kill to possess it! Faced with the harsh conditions of the northern wilderness, ruthless criminals and rogue Japanese soldiers, Sugimoto will need all his skills and luck—and the help of an Ainu girl named Asirpa - to survive.",
      author: "Noda Satoru",
      artist: "Noda Satoru",
      status: "Completed",
      publication: "2012",
      featured: true,
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618371/coverArt/Golden_Kamuy_Vol._1_zosqhn.png",
    },
    {
      title: "Bocchi The Rock",
      slug: "bocchi-the-rock",
      synopsis:
        "Hitori Gotou is a high school girl who's starting to learn to play the guitar because she dreams of being in a band, but she's so shy that she hasn't made a single friend. However, her dream might come true after she meets Nijika Ijichi, a girl who plays drums and is looking for a new guitarist for her band.",
      author: "Hamaji Aki",
      artist: "Hamaji Aki",
      status: "Ongoing",
      publication: "2019",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618376/coverArt/Bocchi_The_Rock_Vol._1_nru7dy.jpg",
    },
    {
      title: "Noragami",
      slug: "noragami",
      synopsis:
        "Yato is a minor god whose dream is to have a lot of followers worshiping him and praying to him. Unfortunately, his dream is far from coming true since he doesn't even have a single shrine dedicated to him. To make things worse, the only partner he had to help him solve people's problems, had just quit the job. His godly existence and luck just might change when he stumbles upon Iki Hiyori in her attempt to save him from an oncoming bus; a feat which also leaves her in quite a predicament so she is stuck with him until her problem gets resolved. Together with Hiyori and his new partner-weapon Yukine, Yato will do everything he can to gain fame, recognition and just maybe, one shrine dedicated to him, as well.",
      author: "Adachi Taka",
      artist: "Adachi Taka",
      status: "Ongoing",
      publication: "2010",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674618369/coverArt/Noragami_Vol._1_r4rxvc.jpg",
    },
    {
      title: "Yurucamp △",
      slug: "yurucamp",
      synopsis:
        "Rin, a girl camping by herself at the base of Mt. Fuji. Nadeshiko, a girl who came to see Mt. Fuji on her bicycle. The scenery the two witness over a supper of cup ramen marks the start of a new friendship and many adventures to come, camping in the great outdoors!",
      author: "Afro",
      artist: "Afro",
      status: "Hiatus",
      publication: "2015",
      coverArt:
        "https://res.cloudinary.com/boednocomic/image/upload/v1674663939/coverArt/e1v2hbpzbhhvko2kvasf.jpg",
    },
  ],
});

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
