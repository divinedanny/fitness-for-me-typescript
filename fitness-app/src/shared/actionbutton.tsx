import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

export const ActionButton = ({children, setSelectedPage}: Props) => {
    return (
        <AnchorLink
        className='roounded-md bg-secondary-500 hover:bg-primary-500 hover:text-white px-10 py-2'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}
