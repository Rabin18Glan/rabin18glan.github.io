import { ReactNode } from 'react';

import { About, Contacts, Hero, MyTimeline, Projects, Services } from './pages';
interface Page {
    id: string;
    title: string;
    page: string;
    pageSection: ReactNode
}
export const pageList: Page[] = [
    { id: 'home', title: 'Home', page: 'home', pageSection: <Hero /> },
    { id: 'about', title: 'About', page: 'about', pageSection: <About /> },
    { id: 'timeline', title: 'Timeline', page: 'timeline', pageSection: <MyTimeline /> },
    { id: 'services', title: 'Services', page: 'services', pageSection: <Services /> },
    { id: 'projects', title: 'Projects', page: 'projects', pageSection: <Projects /> },
    { id: 'contact', title: 'Contact', page: 'contact', pageSection: <Contacts /> },
];