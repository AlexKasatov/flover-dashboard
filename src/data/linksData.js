import { FiChevronDown } from 'react-icons/fi';

export const mainNavLinks = [
        {
                title: 'Home',
                url: '/',
        },
        {
                title: 'Products',
                icon: <FiChevronDown />,
                submenu: [
                        {
                                title: 'Interactive reports',
                                url: '/reports',
                                subTitle: 'Learn about your users.',
                        },
                        {
                                title: 'Team dashboard',
                                url: '/team-dashboard',
                                subTitle: 'Monitor your metrics.',
                        },

                        {
                                title: 'Limitless segmentation',
                                url: '/segmentation',
                                subTitle: 'Surface hidden trends.',
                        },
                        {
                                title: 'Group analytics',
                                url: '/analytics',
                                subTitle: 'Measure B2B account health.',
                        },
                ],
        },
        {
                title: 'Resources',
                icon: <FiChevronDown />,
                submenu: [
                        {
                                title: 'Blog',
                                url: '/blog',
                                subTitle: 'The latest industry news, updates and info.',
                        },
                        {
                                title: 'Customer stories',
                                url: '/customer-stories',
                                subTitle: 'Learn how our customers are making big changes.',
                        },

                        {
                                title: 'Video tutorials',
                                url: '/tutorials',
                                subTitle: 'Get up and running on new features and techniques.',
                        },
                        {
                                title: 'Documentation',
                                url: '/documentation',
                                subTitle: 'All the boring stuff that you (hopefully won’t) need.',
                        },
                        {
                                title: 'Help and support',
                                url: '/help',
                                subTitle: 'Learn, fix a problem, and get answers to your questions.',
                        },
                        {
                                title: 'API reference',
                                url: '/api-refs',
                                subTitle: 'Complete reference documentation for API.',
                        },
                        {
                                title: 'Setup 101',
                                url: '/setup-101',
                                subTitle: 'Get up and running as fast as possible with our 101 guide..',
                        },
                        {
                                title: 'Video tutorials',
                                url: '/tutorials',
                                subTitle: 'Get up and running on new features and techniques.',
                        },
                        {
                                title: 'Podcast',
                                url: '/podcast',
                                subTitle: 'Talks about the industry and the latest technologies.',
                        },
                        {
                                title: 'University',
                                url: '/university',
                                subTitle: 'Short courses to become a master of advanced features.',
                        },
                        {
                                title: 'Changelog',
                                url: '/university',
                                subTitle: 'Check out the latest updates and releases from our team.',
                        },
                ],
        },
        {
                title: 'Pricing',
                url: '/pricing',
        },
];

export const burgerSecondaryLinks = [
        [
                {
                        title: 'About',
                        url: '/about',
                },
                {
                        title: 'Press',
                        url: '/press',
                },
                {
                        title: 'Careers',
                        url: '/careers',
                },
                {
                        title: 'Legal',
                        url: '/legal',
                },
        ],
        [
                {
                        title: 'Support',
                        url: '/support',
                },
                {
                        title: 'Contact',
                        url: '/contact',
                },
                {
                        title: 'Sitemap',
                        url: '/sitemap',
                },
                {
                        title: 'Cookie settings',
                        url: '/cookie-settings',
                },
        ],
];

export const productItems = [
        {
                title: 'Blog',
                url: '/blog',
                subTitle: 'The latest industry news, updates and info.',
        },
        {
                title: 'Customer stories',
                url: '/customer-stories',
                subTitle: 'Learn how our customers are making big changes.',
        },
        {
                title: 'Blog',
                url: '/blog',
                subTitle: 'The latest industry news, updates and info.',
        },
        {
                title: 'Video tutorials',
                url: '/tutorials',
                subTitle: 'Get up and running on new features and techniques.',
        },
        {
                title: 'Documentation',
                url: '/documentation',
                subTitle: 'All the boring stuff that you (hopefully won’t) need.',
        },
        {
                title: 'Help and support',
                url: '/help',
                subTitle: 'Learn, fix a problem, and get answers to your questions.',
        },
        {
                title: 'API reference',
                url: '/api-refs',
                subTitle: 'Complete reference documentation for API.',
        },
        {
                title: 'Setup 101',
                url: '/setup-101',
                subTitle: 'Get up and running as fast as possible with our 101 guide..',
        },
        {
                title: 'Video tutorials',
                url: '/tutorials',
                subTitle: 'Get up and running on new features and techniques.',
        },
        {
                title: 'Podcast',
                url: '/podcast',
                subTitle: 'Talks about the industry and the latest technologies.',
        },
        {
                title: 'University',
                url: '/university',
                subTitle: 'Short courses to become a master of advanced features.',
        },
        {
                title: 'Changelog',
                url: '/university',
                subTitle: 'Check out the latest updates and releases from our team.',
        },
];
