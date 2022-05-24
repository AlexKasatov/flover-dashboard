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
                                url: 'twitter.com',
                                icon: <FiTwitter />,
                        },
                        {
                                title: 'LinkedIn',
                                url: 'linkedin.com',
                                icon: <FiLinkedin />,
                        },

                        {
                                title: 'Facebook',
                                url: 'facebook.com',
                                icon: <FiFacebook />,
                        },
                        {
                                title: 'GitHub',
                                url: 'github.com',
                                icon: <FiGithub />,
                        },
                        {
                                title: 'Dribbble',
                                url: 'dribbble.com',
                                icon: <FiDribbble />,
                        },
                ],
        },
];
