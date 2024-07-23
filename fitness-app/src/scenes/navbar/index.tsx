import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ActionButton } from "@/shared/actionbutton";

interface Props {
    isTopPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}
const NavBar = ({
    isTopPage,
    selectedPage,
    setSelectedPage
}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1110px)");
    const navBackgroundColor = isTopPage  ? "": "bg-primary-100 drop-shadow";
    return (
        <nav>
            <div className={ `${navBackgroundColor} ${flexBetween} fixed top-0 z-30 w-full py-6`} >
            <div className={`${flexBetween} mx-auto w-5/6`} >
                <div className={`${flexBetween} w-full gap-16`} >
                    <img src={Logo} alt="logo" />

                    {/* right side */}

                    { isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`} >
                        <div className={`${flexBetween} gap-8 text-sm`}>
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
                            <div className={`${flexBetween} gap-8`} >
                                <p>Sign In</p>
                                <ActionButton
                                setSelectedPage={setSelectedPage}
                                >Become a Member</ActionButton>
                            </div>

                        </div>
                        
                    ): (        <button
                                className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="text-white w-6 h-6" />
                            </button>
                        )}
                </div>
            </div>
        </div>
        {/* Mobile Menu Modal */}
        {!isAboveMediumScreens && isMenuToggled && (
        <div 
        className="fixed right-0 buttom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl "
        >
        {/* Close Modal */}
        <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)} >
                <XMarkIcon className="h-6 w-6 text-gray-400 " />
            </button>
        </div>
            {/* Menu Items */}
                    <div className="flex flex-col ml-[33%] gap-10">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefit"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our client"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                    </div>
        </div>
        )}
        </nav>
    )
}

export default NavBar;