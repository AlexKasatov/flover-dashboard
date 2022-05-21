import { Children } from 'react';
import CatalogLogotype from '../../styles/img/social-proof/Catalog/Logotype.svg';
import CatalogMark from '../../styles/img/social-proof/Catalog/Logomark.svg';
import LayersLogotype from '../../styles/img/social-proof/Layers/Logotype.svg';
import LayersMark from '../../styles/img/social-proof/Layers/Logomark.svg';
import QoutientLogotype from '../../styles/img/social-proof/Qoutient/Logotype.svg';
import QoutientMark from '../../styles/img/social-proof/Qoutient/Logomark.svg';
import SisiphusLogotype from '../../styles/img/social-proof/Sisiphus/Logotype.svg';
import SisiphusMark from '../../styles/img/social-proof/Sisiphus/Logomark.svg';
import CircoolesLogotype from '../../styles/img/social-proof/Circooles/Logotype.svg';
import CircoolesMark from '../../styles/img/social-proof/Circooles/Logomark.svg';

export const socialProofData = [
        {
                title: 'Catalog',
                logotype: CatalogLogotype,
                logomark: CatalogMark,
        },
        {
                title: 'Layers',
                logotype: LayersLogotype,
                logomark: LayersMark,
        },
        {
                title: 'Qoutient',
                logotype: QoutientLogotype,
                logomark: QoutientMark,
        },
        {
                title: 'Sisiphus',
                logotype: SisiphusLogotype,
                logomark: SisiphusMark,
        },
        {
                title: 'Circooles',
                logotype: CircoolesLogotype,
                logomark: CircoolesMark,
        },
];

const SocialProof = () => (
        <div>
                {Children.toArray(
                        socialProofData.map(({ title, logotype, logomark }) => <img src={logotype} alt={title} />)
                )}
        </div>

        // ? This map WORKS!
        // <div>
        //         {socialProofData.map((postdata, index) => (
        //                 <>
        //                         <img key={index} src={postdata.logotype} wrapped ui={false} alt={postdata.title} />
        //                         <img key={index} src={postdata.logomark} wrapped ui={false} alt={postdata.title} />
        //                 </>
        //         ))}
        // </div>
);

export default SocialProof;
