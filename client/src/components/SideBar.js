import React from 'react'
import { SideBarContainer, SideNav, Page, Heading } from './styles/Layout.style'

const SideBar = () => {
    return (
        <SideBarContainer>
            <Heading> Inventory App</Heading>
            <SideNav>
                <Page>Food</Page>
                <Page>Clothes </Page>
                <Page>Statistics</Page>
                <Page>Add Categories</Page>
            </SideNav>
        </SideBarContainer>
    )
}

export default SideBar

