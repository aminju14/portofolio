import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Muhammad',
    lastName: 'Amin',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Engineer',
    avatar: '/images/avatar-aminju.jpg',
    location: 'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/aminju14',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/aminju/',
    },
    {
        name: 'Behance',
        icon: 'email',
        link: 'https://www.behance.net/aminju',
    },
    // {
    //     name: 'Email',
    //     icon: 'email',
    //     link: 'work.aminju@gmail.com',
    // },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer (Technical Leader)</>,
    subline: <>Hello, i am Amin. For 5 years+, I'm a seasoned professional with expertise in mobile and leadership. As a Technical Leader, im responsible for guilding my team through various technical challenges, ensuring the succesful completion of projects, and fostering a collaborative work environment. My role as Mobile Developer involves designing, developing, and maintaining mobile applications, leveraging my programming skills and knowledge of mobile platforms. With my technical and leadership skills, i play a crucial role in driving innovation, optimizing processes, and delivering high-quality solutions.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'PT. Triputra Agro Persada Tbk.',
                timeframe: '2020 - Present',
                role: 'Software Engineer Section Head (Technical Leader)',
                achievements: [
                    <>Manage IT team to excecute tasks.</>,
                    <>Assess tasks for the team.</>,
                    <>Maintan applications</>,
                    <>Control and monitor ongoing projects</>,
                    <>Solving and analysis existing issue from current applicaition</>,
                    <>Deployment mobile app to Playstore or Appstore</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'PT. Indocyber Global Technology',
                timeframe: '2017 - 2020',
                role: 'Mobile Developer',
                achievements: [
                    <>Develop Android or IOS Applications</>,
                    <>Design UI/UX for Android/IOS Application</>,
                    <>Maintain Android or Ios application issues</>,
                    <>Discuss requirement with users</>,
                    <>Analyze projects</>,
                    <>Deployment mobile app to Playstore or Appstore</>,
                    <>Create technical documentation</>,
                ],
                images: []
            },
            {
                company: 'PT. Swadharma Duta Data',
                timeframe: '2016 - 2017',
                role: 'Android Developer',
                achievements: [
                    <>Develop Android Applications</>,
                    <>Design UI/UX for Android mobile</>,
                    <>Maintain Android application issues</>,
                    <>Discuss requirement with users</>,
                    <>Analyze projects</>,
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'National University',
                description: <>Informatics Engineering</>,
            },
            {
                name: 'Science',
                description: <>Public High Schoo; 43 Jakarta</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/restuque-1.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/restuque-2.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/restuque-3.png',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/restuque-4.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };