import {Search} from "@/components/search.tsx";
import {ThemeSwitch} from "@/components/theme-switch.tsx";
import {Header} from "@/components/layout/header.tsx";
import {ProfileDropdown} from "@/components/profile-dropdown.tsx";

export default function AppHeader() {
    return (
        <Header>
            <div className='ml-auto flex items-center space-x-4'>
                <Search/>
                <ThemeSwitch/>
                <ProfileDropdown/>
            </div>
        </Header>
    );
}
