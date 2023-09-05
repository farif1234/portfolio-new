//ID, Title, Description, ImageURL, GithubURL,  Demo, Tech
// Developed backend infrastructure and implemented a database solution to cache results after processing large volumes of OpenStreetMap data, resulting in load time reduction of 70%
const projectList = [
    {
        id: 5,
        title: "Emergency Services Analytics",
        desc: "Collaboration with Levrum Data Technologies to design a web application enabling fire departments to visualize coverage on a map and identify service gaps.",
        imageURL:
            "https://github-production-user-asset-6210df.s3.amazonaws.com/88285952/265586272-364f735b-fb22-46d5-993e-b9623e57f39d.png",
        githubURL: null,
        demo: null,
        tech: ["ASP.NET", "MongoDB", "C#"],
    },
    {
        id: 4,
        title: "Portfolio",
        desc: "This website! Adopted the awesome server-side rendering capabilities of NextJS. Inter font from Google Fonts. Icons from React Icon Library.",
        imageURL: null,
        githubURL: "https://github.com/farif1234/portfolio-new",
        demo: "/",
        tech: ["React", "NextJS", "TailwindCSS", "JS"],
    },
    {
        id: 3,
        title: "Wav.ninja",
        desc: "Web application that allows users to input a YouTube URL, generate a waveform representation of the audio, cut a segment of the audio, and then download that segment in either MP3 or WAV format.",
        imageURL:
            "https://user-images.githubusercontent.com/88285952/262580779-eb617cf4-5ad7-4da0-b375-bc39421af4a9.png",
        githubURL: "https://github.com/farif1234/youtube-cutter",
        demo: "https://wav.ninja",
        tech: ["React", "Vite", "TailwindCSS", "JS", "Python", "Flask", "AWS"],
    },
    {
        id: 2,
        title: "SpellWell",
        desc: "Full stack application created for a high school competitive spelling team. Allow users to create personalized tests, receive accurate pronunciations/definitions through integration with Merriam-Webster's API, and utilize a secure login system to review their missed word.",
        imageURL:
            "https://user-images.githubusercontent.com/88285952/205398596-68302bed-83ac-4754-85f6-5fcca696916c.png",
        githubURL: "https://github.com/farif1234/spellwell",
        demo: "https://spellwell.netlify.app",
        tech: ["React", "Vite", "TailwindCSS", "JS", "Firebase"],
    },
    {
        id: 1,
        title: "MeetCode",
        desc: "Google Chrome extension to allow real time collaboration on LeetCode by synchronizing code editors.",
        imageURL:
            "https://user-images.githubusercontent.com/88285952/200093073-ebdd7263-a178-468f-94fe-fa67a6af9a67.gif",
        githubURL: "https://github.com/farif1234/meetcode",
        demo: null,
        tech: ["Node", "Express", "Socket.IO"],
    },
];

export default projectList;
