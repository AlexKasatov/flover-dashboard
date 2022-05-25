import { FiFacebook, FiTwitter, FiLinkedin, FiGithub, FiDribbble } from 'react-icons/fi';

export const footerData = [
        {
                title: 'Products',
                body: [
                        {
                                title: 'Overview',
                                url: '/overview',
                        },
                        {
                                title: 'Features',
                                url: '/features',
                        },

                        {
                                title: 'Solutions',
                                url: '/solutions',
                        },
                        {
                                title: 'Tutorials',
                                url: '/tutorials',
                        },
                        {
                                title: 'Pricing',
                                url: '/pricing',
                        },
                        {
                                title: 'Releases',
                                url: '/releases',
                        },
                ],
        },
        {
                title: 'Company',
                body: [
                        {
                                title: 'About us',
                                url: '/about-us',
                        },
                        {
                                title: 'Careers',
                                url: '/careers',
                        },

                        {
                                title: 'Press',
                                url: '/press',
                        },
                        {
                                title: 'News',
                                url: '/news',
                        },
                        {
                                title: 'Media kit',
                                url: '/media-kit',
                        },
                        {
                                title: 'Contact',
                                url: '/contact',
                        },
                ],
        },
        {
                title: 'Resources',
                body: [
                        {
                                title: 'Blog',
                                url: '/blog',
                        },
                        {
                                title: 'Newsletter',
                                url: '/newsletter',
                        },

                        {
                                title: 'Events',
                                url: '/events',
                        },
                        {
                                title: 'Help centre',
                                url: '/help',
                        },
                        {
                                title: 'Tutorials',
                                url: '/tutorials',
                        },
                ],
        },
        {
                title: 'Social',
                body: [
                        {
                                title: 'Twitter',
                                url: 'https://www.twitter.com',
                                icon: <FiTwitter onClick={() => window.open('https://www.twitter.com')} size={24} />,
                        },
                        {
                                title: 'LinkedIn',
                                url: 'linkedin.com',
                                icon: <FiLinkedin onClick={() => window.open('https://www.linkedin.com')} size={24} />,
                        },

                        {
                                title: 'Facebook',
                                url: 'https://www.facebook.com/',
                                icon: <FiFacebook onClick={() => window.open('https://www.facebook.com')} size={24} />,
                        },
                        {
                                title: 'GitHub',
                                url: 'github.com',
                                icon: <FiGithub onClick={() => window.open('https://www.github.com')} size={24} />,
                        },
                        {
                                title: 'Dribbble',
                                url: 'dribbble.com',
                                icon: <FiDribbble onClick={() => window.open('https://www.dribbble.com')} size={24} />,
                        },
                ],
        },
        {
                title: 'Legal',
                body: [
                        {
                                title: 'Terms',
                                url: '/terms',
                        },
                        {
                                title: 'Newsletter',
                                url: '/newsletter',
                        },

                        {
                                title: 'Privacy',
                                url: '/privacy',
                        },
                        {
                                title: 'Cookies',
                                url: '/cookies',
                        },
                        {
                                title: 'Licenses',
                                url: '/licenses',
                        },
                        {
                                title: 'Settings',
                                url: '/settings',
                        },
                        {
                                title: 'Contact',
                                url: '/contact',
                        },
                ],
        },
];
