
import { ReactNode } from 'react';

import { About, Contact, Hero, MyTimeline, Projects, Services } from './pages/home';
import { PrivacyPolicy, TermsOfUse } from './pages';

interface Page {
    id: string;
    title: string;
    page: string;
    pageSection: ReactNode;
    showInHeader?: boolean;
    isRoute?: boolean;
}
export const pageList: Page[] = [
    { id: 'home', title: 'Home', page: 'home', pageSection: <Hero />, showInHeader: true, isRoute: false },
    { id: 'about', title: 'About', page: 'about', pageSection: <About />, showInHeader: true, isRoute: false },
    { id: 'timeline', title: 'Timeline', page: 'timeline', pageSection: <MyTimeline />, showInHeader: true, isRoute: false },
    { id: 'services', title: 'Services', page: 'services', pageSection: <Services />, showInHeader: true, isRoute: false },
    { id: 'projects', title: 'Projects', page: 'projects', pageSection: <Projects />, showInHeader: true, isRoute: false },
    { id: 'contact', title: 'Contact', page: 'contact', pageSection: <Contact />, showInHeader: true, isRoute: false },
    { id: 'privacy', title: 'Privacy Policy', page: 'privacy', pageSection: <PrivacyPolicy />, showInHeader: false, isRoute: true },
    { id: 'terms', title: 'Terms of Use', page: 'terms', pageSection: <TermsOfUse />, showInHeader: false, isRoute: true },
];