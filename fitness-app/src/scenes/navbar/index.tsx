import { useState, useEffect } from "react"
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

interface Props {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}
const NavBar = ({
    selectedPage,
    setSelectedPage
}: Props) => {
    const flexBetween = "flex items-center justify-between"
    return (
        <nav>
            <div
            className={ `${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
            <div
            className={`${flexBetween} mx-auto w-5/6`}
            >
                <div
                className={`${flexBetween} w-full gap-16`}
                >
                    <img src={Logo} alt="logo" />

                    {/* right side */}
                    <div
                    className={`${flexBetween} w-full`}
                    >
                        <div
                        className={`${flexBetween} gap-8 text-sm`}
                        >
                        <Link 
                        page= "Home" 
                        selectedPage={selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link 
                        page = "Benefit"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link
                        page= "Our client"
                        selectedPage={selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link
                        page= "Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage = {setSelectedPage}
                            />
                        <Link
                        page= "Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage = {setSelectedPage}
                            />

                        </div>
                        <div
                            className={`${flexBetween} gap-8`}
                        >
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>

                    </div>
                    <div>

                    </div>

                </div>

            </div>

            </div>
        </nav>
    )
}

export default NavBar;