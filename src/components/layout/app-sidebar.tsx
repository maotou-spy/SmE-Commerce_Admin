import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from '@/components/ui/sidebar'
import {NavGroup} from '@/components/layout/nav-group'
import {NavUser} from '@/components/layout/nav-user'
import {sidebarData} from './data/sidebar-data'
import {AppSidebarHeader} from "@/components/layout/app-sidebar-header.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import React from "react";

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible='icon' variant='floating' {...props}>
            <SidebarHeader>
                <AppSidebarHeader
                    sidebarHeader={sidebarData.sidebarHeader}/>
            </SidebarHeader>
            <Separator orientation='horizontal' className='h-2'/>
            <SidebarContent>
                {sidebarData.navGroups.map((props) => (
                    <NavGroup key={props.title} {...props} />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={sidebarData.user} navUser={sidebarData.NavUser}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
