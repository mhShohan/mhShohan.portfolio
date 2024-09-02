import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApiIcon from '@mui/icons-material/Api';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';

export const navbarData = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Projects', path: '/projects' },
  { id: 4, name: 'Blogs', path: '/blogs' },
  { id: 5, name: 'Contact', path: '/contact' },
]


export const sidebarData = [
  { id: '1', name: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { id: '3', name: 'Technologies', icon: ApiIcon, path: '/dashboard/technologies' },
  { id: '2', name: 'Educations', icon: SchoolIcon, path: '/dashboard/educations' },
  { id: '4', name: 'Experiences', icon: BackupTableIcon, path: '/dashboard/experiences' },
  { id: '5', name: 'Projects', icon: BeenhereIcon, path: '/dashboard/projects' },
  { id: '6', name: 'Create Blog', icon: BookIcon, path: '/dashboard/blogs' },
  { id: '7', name: 'Update Profile', icon: AccountCircleIcon, path: '/dashboard/profile' },
];

export const skills = [
  {
    title: "Full Stack Development",
    fileName: "FullStackImg",
    skills: [
      "⚡ Develop highly interactive full-stack web applications.",
      "⚡ Building backend systems using Node.js and Express.js.",
      "⚡ Building responsive user friendly frontend using React and Next.js.",
      "⚡ Implement state management using Redux-toolkit and contextAPI.",
      "⚡ Manage databases using MongoDB, Mongoose, PostgreSQL, Prisma.",
      "⚡ Implement secure user authentication and authorization.",
    ],
  },
]

export const slider = [
  { id: 1, img: './assets/slider/1.jpg' },
  { id: 2, img: './assets/slider/2.jpg' },
  { id: 3, img: './assets/slider/3.jpg' },
  { id: 4, img: './assets/slider/4.jpg' },
  { id: 5, img: './assets/slider/5.jpg' },
  { id: 6, img: './assets/slider/6.jpg' },
  { id: 7, img: './assets/slider/7.jpg' },
  { id: 8, img: './assets/slider/8.jpg' },
  { id: 9, img: './assets/slider/9.jpg' },
  { id: 10, img: './assets/slider/10.jpg' },
];
