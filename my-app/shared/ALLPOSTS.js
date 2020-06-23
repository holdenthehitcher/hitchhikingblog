import { CULINARYPOSTS } from "./CULINARYPOSTS";
import { GEARPOSTS } from "./GEARPOSTS";
import { HITCHHIKINGPOSTS } from "./HITCHHIKINGPOSTS";
import { VOLUNTEERPOSTS } from "./VOLUNTEERPOSTS";

export const ABOUTPOST = [
  {
    className: "aboutPostCard",
    name: "The Beginning of a Journey",
    location: "England",
    date: "30/03/16",
    thumbnail: {
      title: "Why I started Hitchhiking",
      description: "Embarking on an adventure is a risk. Reflecting: a process",
      image: "/blogmaterials/about/AboutPost/londonEye.jpg",
    },
    images: {
      bridge: {
        photo: "/blogmaterials/about/AboutPost/torquayBridge.jpg",
        description: "",
      },
      harbor: {
        photo: "/blogmaterials/about/AboutPost/torquayHarbor.jpg",
        description: "",
      },
      camp: {
        photo: "/blogmaterials/about/AboutPost/campTorquay.jpg",
        description: "Freedom is never knowing where you'll end up",
      },
      cavemen: {
        photo: "/blogmaterials/about/AboutPost/cavemen.jpg",
        description: "Who invited Fred and Barney?",
      },
      londonEye: {
        photo: "/blogmaterials/about/AboutPost/londonEye.jpg",
        description: "",
      },
      nuts: {
        photo: "/blogmaterials/about/AboutPost/nuts.jpg",
        description: "",
      },
      overcastTorquay: {
        photo: "/blogmaterials/about/AboutPost/overcastTorquay.jpg",
        description: "Typical weather in a not-so-average town",
      },
      theLightsBelow: {
        photo: "/blogmaterials/about/AboutPost/theLightsBelow.jpg",
        description: "The calmness of the British ocean",
      },
      torquayFriends: {
        photo: "/blogmaterials/about/AboutPost/torquayFriends.jpg",
        description: "",
      },
      torquayFriends2: {
        photo: "/blogmaterials/about/AboutPost/torquayFriends2.jpg",
        description: "",
      },
      harborDay: {
        photo: "/blogmaterials/about/AboutPost/torquayHarborday.jpg",
        description: "",
      },
      moon: {
        photo: "/blogmaterials/about/AboutPost/torquayMoon.jpg",
        description: "",
      },
    },
    videos: ["https://www.youtube.com/embed/Amk-s62YPlg"],
    paragraphs: [
      "As I awaken this morning in a very pink and green room, a fabulous one I must admit, I thought of the friend who me off the day before and of passing out during the football match on the telly. It was a well-known fact that since '96, England had never lost to the Dutch; everyone made sure to remind me of that fact, while my eyelids were lighter than at around half-time…",

      'My fuzzy mind becomes clearer after I sip down my first steaming cup of tea as I gaze out the window to a typical overcast morning, boats swaying with the ever drastically dipping tide. The twinge in my temple feels as though my eyes are being pushed into my nasal cavity. "Oooooouuuhhhhffff…" I mutter to myself as another sip of milky sweet liquid bubbles over my tongue. It reminded me of the sneaky yet strong cider we partook in the night prior, that I\'m really starting to grow fond of. Noticing me nursing a minute-hangover, my host placed down on the table in front of me a plate with a bacon and tomato sandwich, reminiscent of the Spanish bocadillo sandwich I\'d months prior. Only as a true Brit would, their country\'s famous "brown sauce" was spread over the bread halves. "I\'m feeling under the weather," I pushed the words out with a mouthful of bread blocking the airwaves. After finishing the last bite, our hands grasp and move up and down, one in appreciation and the other in altruism. By the time 2:00 pm rolls around I leave his apartment* ahem I mean flat* and then walked down to buy some much needed medicine.',

      "Sitting on the edge of the ocean watching small inflatable boats cruise by with flashlights moving up and down the edge of the rocks, leaning slightly on an overweight backpack, I begin wondering silently to myself, “What are they searching for?” Car keys? Maybe keeping an eye out for trespassers? Or is there a missing person that needs finding? I squint my eyes as the dusk falls quickly, with only the bright flashlights moving rapidly on the shore below",

      "Admittedly, the past few nights here in Torquay have been more than interesting. Late night parties with cavement costumes (a masculine idea if I’ve ever heard one), getting free hand-therapy (get your head out of the gutter) from an occupational therapist on my stiff thumbs, and making friends that I can’t imagine not meeting at all in my life. My name is Holden, I this may be the beginning of my journey... one about risking it all to make memories and gain insight into the world, living vicariously through each other.",
    ],
    pageLink: "/Stories/AboutHTH",
  },
];

const culinaryPosts = CULINARYPOSTS.map((post) => ({ ...post, className: "culinaryCard" }));
const gearPosts = GEARPOSTS.map((post) => ({ ...post, className: "gearCard" }));
const hitchhikingPosts = HITCHHIKINGPOSTS.map((post) => ({ ...post, className: "hitchhikingCard" }));
const volunteerPosts = VOLUNTEERPOSTS.map((post) => ({ ...post, className: "volunteerCard" }));

export const ALLPOSTS = [...ABOUTPOST, ...culinaryPosts, ...gearPosts, ...hitchhikingPosts, ...volunteerPosts];
