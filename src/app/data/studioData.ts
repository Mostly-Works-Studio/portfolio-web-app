export const studioData = {
    studio: {
        name: "Mostly Works Studio",
        tagline: "Creating worlds, one block at a time",
        description: "We believe that every great digital masterpiece begins with a single, purposeful building block.",
        logo: "/images/studio-logo.jpg",
    },

    contact: {
        email: "contact@panshul.dev",
    },

    social: {
        github: "https://github.com/Mostly-Works-Studio",
        linkedin: "https://linkedin.com/company/mostly-works-studio",
        playstore: "https://play.google.com/store/apps/dev?id=6438029684128056716&hl=en-US",
    },

    about: "Mostly Works Studio is a playground for building meaningful digital products.\nWe believe great experiences are created one purposeful block at a time—focused on simplicity, intent, and continuous improvement.",

    projects: {
        web: [
            {
                title: "Tic Tac Toe",
                description: "Sleek, Tic Tac Toe with 3 CPU levels and a modern neon aesthetic.",
                imageUrl: "/images/tic-tac-toe.jpg",
                tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
                url: "https://tictactoe.panshul.dev",
                githubUrl: "https://github.com/Mostly-Works-Studio/tic-tac-toe-web-app",
            },
        ],
        mobile: [
            {
                title: "Tic Tac Toe",
                description: "Sleek, Tic Tac Toe with 3 CPU levels and a modern neon aesthetic.",
                imageUrl: "/images/tic-tac-toe.jpg",
                tags: ["Kotlin", "Jetpack Compose", "Android"],
                url: "https://play.google.com/store/apps/details?id=dev.panshul.tictactoe",
                githubUrl: null,
            },
            {
                title: "Planner",
                description: "A planner that tracks intent, effort, and progress — not perfection.",
                imageUrl: "/images/planner-logo.jpg",
                tags: ["Kotlin", "Jetpack Compose", "Android"],
                url: null,
                githubUrl: null,
                comingSoon: true,
            },
        ],
    },
};
