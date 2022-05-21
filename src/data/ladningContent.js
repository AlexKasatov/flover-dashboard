import imgFeature1 from '../styles/img/features/1.avif';
import imgFeature2 from '../styles/img/features/2.avif';
import imgFeature3 from '../styles/img/features/3.avif';

export const ladningContent = [
        {
                title: 'features',
                header: {
                        subheading: 'Features',
                        heading: 'Analytics that feels like it’s from the future',
                        support: 'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.',
                },

                content: [
                        {
                                icon: 'component',
                                heading: 'Share team inboxes',
                                support: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
                                items: [
                                        { icon: 'component', text: 'Leverage automation to move fast' },
                                        { icon: 'component', text: 'Always give customers a human to chat to' },
                                        { icon: 'component', text: 'Automate customer support and close leads faster' },
                                ],
                                img: imgFeature1,
                        },
                        {
                                icon: 'component',
                                heading: 'Deliver instant answers',
                                support: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
                                items: [
                                        { icon: 'component', text: 'Keep your customers in the loop with live chat' },
                                        { icon: 'component', text: 'Embed help articles right on your website' },
                                        {
                                                icon: 'component',
                                                text: 'Customers never have to leave the page to find an answer',
                                        },
                                ],
                                img: imgFeature2,
                        },
                        {
                                icon: 'component',
                                heading: 'Manage your team with reports',
                                support: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
                                items: [
                                        {
                                                icon: 'component',
                                                text: 'Filter, export, and drilldown on the data quickly',
                                        },
                                        {
                                                icon: 'component',
                                                text: 'Save, schedule, and automate reports to your inbox',
                                        },
                                        {
                                                icon: 'component',
                                                text: 'Connect the tools you already use with 100+ integrations',
                                        },
                                ],
                                img: imgFeature3,
                        },
                ],
        },
        { title: 'integrations', body: ['integrations'] },
        { title: 'power', body: ['power'] },
        { title: 'quote', body: ['quote'] },
        { title: 'cta', body: ['cta'] },
        { title: 'footer', body: ['footer'] },
];
