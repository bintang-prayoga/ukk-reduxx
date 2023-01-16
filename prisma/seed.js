import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const salt = bcrypt.genSaltSync(10);

async function main() {
  // const BoedNoSuper = await prisma.user.create({
  //   data: {
  //     name: "BoedNoNiwa",
  //     email: "dukunas12@gmail.com",
  //     password: bcrypt.hashSync("123456", salt),
  //     isAdmin: true,
  //     isSuper: true,
  //   },
  // });
  // const BoedNoAdmin = await prisma.user.create({
  //   data: {
  //     name: "BoedNoAdmin",
  //     email: "dukunas34@gmail.com",
  //     password: bcrypt.hashSync("123456", salt),
  //     isAdmin: true,
  //     isSuper: false,
  //   },
  // });
  // const BoedNoUser = await prisma.user.create({
  //   data: {
  //     name: "BoedNoUser",
  //     email: "dukunas56@gmail.com",
  //     password: bcrypt.hashSync("123456", salt),
  //     isAdmin: false,
  //     isSuper: false,
  //   },
  // });
  // const genreList = await prisma.genre.createMany({
  //   data: [
  //     {
  //       name: "Action",
  //     },
  //     {
  //       name: "Adventure",
  //     },
  //     {
  //       name: "Comedy",
  //     },
  //     {
  //       name: "Crime",
  //     },
  //     {
  //       name: "Drama",
  //     },
  //     {
  //       name: "Fantasy",
  //     },
  //     {
  //       name: "Historical",
  //     },
  //     {
  //       name: "Horror",
  //     },
  //     {
  //       name: "Isekai",
  //     },
  //     {
  //       name: "Mecha",
  //     },
  //     {
  //       name: "Medical",
  //     },
  //     {
  //       name: "Mystery",
  //     },
  //     {
  //       name: "Philosophical",
  //     },
  //     {
  //       name: "Psychological",
  //     },
  //     {
  //       name: "Romance",
  //     },
  //     {
  //       name: "Sci-Fi",
  //     },
  //     {
  //       name: "Slice Of Life",
  //     },
  //     {
  //       name: "Sports",
  //     },
  //     {
  //       name: "Superhero",
  //     },
  //     {
  //       name: "Thriller",
  //     },
  //     {
  //       name: "Tragedy",
  //     },
  //     {
  //       name: "Wuxia",
  //     },
  //   ],
  // });
}

const comicList = await prisma.comic.createMany({
  data: [
    {
      title: "[Oshi no Ko]",
      synopsis:
        "The story begins with a beautiful girl, her perfectly fake smile, and the people who love her selfishly for it. What transpires behind the scenes of the glittering showbiz industry? How far would you go for the sake of your beloved idol? What would you do if you found out reincarnation was real? The star of the show is Aquamarine Hoshino and the stage is but a mere facade. Will he manage to reach the climax before the world of glamour swallows him whole?",
      author: "Akasaka Aka",
      artist: "Yokoyari Mengo",
      status: "Ongoing",
      release: "2020",
      featured: true,
      coverArt:
        "https://mangadex.org/covers/296cbc31-af1a-4b5b-a34b-fee2b4cad542/eec6e287-36db-465b-986c-04143612df94.jpg",
    },
    {
      title: "Otonari Ni Ginga",
      synopsis:
        "After the death of his father, Kuga Ichirou, a shoujo mangaka fresh out of high school, has to take care of his two little siblings, Machi and Fumio, all by himself. Struggling to meet a deadline after his previous assistants get their manga debuts, he hires a new assistant through his editor. However, his life takes an unexpected turn after this new assistant is revealed to be a beautiful and mysterious girl…",
      author: "Amagakure Gido",
      artist: "Amagakure Gido",
      status: "Ongoing",
      release: "2020",
      coverArt:
        "https://mangadex.org/covers/9496f98c-78b9-46d0-a092-d4ccc6759cc9/5bf826e6-b367-428a-8cb0-347d3f90347a.jpg",
    },
    {
      title: "Suki Na Ko Ga Megane Wo Wasuretai",
      synopsis:
        "Komura is a middle school boy who is head-over-heels in love with his next-seat neighbor Mie, a girl with terrible eyesight who just can't get used to carrying her glasses, often leaving them at home, or accidentally breaking them. He opts to help her as much as he possibly can, and through those efforts, she begins getting acquainted with his kindness. Will she reciprocate?",
      author: "Fujichika Koume",
      artist: "Fujichika Koume",
      status: "Ongoing",
      release: "2018",
      coverArt:
        "https://mangadex.org/covers/6d6d9fda-5cd3-40ac-948b-776b1a1a0eb1/d2ab85d9-dbb5-4c3a-b2ba-7cc6eb3aa24a.jpg",
    },
    {
      title: "Aishiteru Game Wo Owarasetai",
      synopsis:
        "Childhood friends who have been together since they were little. They both realize their feelings for each other, but are too close to be honest. What connects them is the 'I love you game' that they have been playing since they were little. The end of their love is decided in this simple game where the winner is the one who makes the other embarrassed!",
      author: "Doumoto Yuuki",
      artist: "Doumoto Yuuki",
      status: "Ongoing",
      release: "2021",
      coverArt:
        "https://mangadex.org/covers/acdbf57f-bf54-41b4-8d92-b3f3d14c852e/384b426b-51db-4f68-b3a1-332022805da4.png",
    },
    {
      title: "Rinna Keibu wa Iki ga dekinai",
      synopsis:
        "Clearing up crime after crime, there is one case she can't solve: love. The top-class inspector of the London Police Department, Inspector Rinna, suddenly encounters Private Detective Meishi at a crime scene. Although he doesn't help in the slightest, she can't take her eyes off him. What is this feeling? And if that wasn't enough, he keeps appearing at every imaginable crime scene after that. Thus begins the love story between the inexperienced inspector and clumsy private detective!",
      author: "Araragi Ayune",
      artist: "Araragi Ayune",
      status: "Completed",
      release: "2018",
      coverArt:
        "https://mangadex.org/covers/2a3071f0-bad5-497d-bc3e-98de089c25c9/0ba99e70-b9d7-4f0e-aa26-364cf282e640.jpg",
    },
    {
      title: "Bungou Stray Dogs",
      synopsis:
        "Nakajima Atsushi was kicked out of his orphanage, and now he has no place to go and no food. While he is standing by a river, on the brink of starvation, he rescues a man whimsically attempting suicide. That man is Dazai Osamu, and he and his partner Kunikida are members of a very special detective agency. They have supernatural powers, and deal with cases that are too dangerous for the police or the military. They're tracking down a tiger that has appeared in the area recently, around the time Atsushi came to the area. The tiger seems to have a connection to Atsushi, and by the time the case is solved, it is clear that Atsushi's future will involve much more of Dazai and the rest of the detectives!",
      author: "Asagiri Kafka",
      artist: "Harukawa 35",
      status: "Ongoing",
      release: "2012",
      featured: true,
      coverArt:
        "https://mangadex.org/covers/3fba42cf-2ad6-4c30-a7ab-46cb8149208a/183db81a-fe13-42ab-8ef5-b81f25351da3.jpg",
    },
    {
      title: "Golden Kamuy",
      synopsis:
        "In the early twentieth century, Russo-Japanese War veteran Saichi “Immortal” Sugimoto scratches out a meager existence during the postwar gold rush in the wilderness of Hokkaido. When he stumbles across a map to a fortune in hidden Ainu gold, he sets off on a treacherous quest to find it. But Sugimoto is not the only interested party, and everyone who knows about the gold will kill to possess it! Faced with the harsh conditions of the northern wilderness, ruthless criminals and rogue Japanese soldiers, Sugimoto will need all his skills and luck—and the help of an Ainu girl named Asirpa - to survive.",
      author: "Noda Satoru",
      artist: "Noda Satoru",
      status: "Completed",
      release: "2014",
      featured: true,
      coverArt:
        "https://mangadex.org/covers/8847f905-550d-4fe6-bcda-ac2b896789c7/57c05826-c91f-467b-8749-bb2cd06f7847.png",
    },
    {
      title: "Bocchi The Rock",
      synopsis:
        "Hitori Gotou is a high school girl who's starting to learn to play the guitar because she dreams of being in a band, but she's so shy that she hasn't made a single friend. However, her dream might come true after she meets Nijika Ijichi, a girl who plays drums and is looking for a new guitarist for her band.",
      author: "Hamaji Aki",
      artist: "Hamaji Aki",
      status: "Ongoing",
      release: "2017",
      coverArt:
        "https://mangadex.org/covers/2e0fdb3b-632c-4f8f-a311-5b56952db647/81c3ae10-0c33-495d-a493-20a98da675d0.jpg",
    },
    {
      title: "Noragami",
      synopsis:
        "Yato is a minor god whose dream is to have a lot of followers worshiping him and praying to him. Unfortunately, his dream is far from coming true since he doesn't even have a single shrine dedicated to him. To make things worse, the only partner he had to help him solve people's problems, had just quit the job. His godly existence and luck just might change when he stumbles upon Iki Hiyori in her attempt to save him from an oncoming bus; a feat which also leaves her in quite a predicament so she is stuck with him until her problem gets resolved. Together with Hiyori and his new partner-weapon Yukine, Yato will do everything he can to gain fame, recognition and just maybe, one shrine dedicated to him, as well.",
      author: "Adachi Taka",
      artist: "Adachi Taka",
      status: "Ongoing",
      release: "2010",
      coverArt:
        "https://mangadex.org/covers/e5ce88e2-8c46-482d-8acf-5c6d5a64a585/eb7e8831-89fc-4ae1-938d-92edd86419b7.jpg",
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
