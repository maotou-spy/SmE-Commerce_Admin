import {LinkProps} from '@tanstack/react-router'
import React from "react";

interface User {
    name: string
    email: string
    avatar: string
}

interface NavUser {
    title: string
    url?: LinkProps['to']
    icon: React.ElementType
}

interface SidebarLogo {
    light: string,
    dark: string
}

interface SidebarHeader {
    title: string
    logo: SidebarLogo
}

interface BaseNavItem {
    title: string
    badge?: string
    icon?: React.ElementType
}

type NavLink = BaseNavItem & {
    url?: LinkProps['to']
    items?: never
}

type NavCollapsible = BaseNavItem & {
    items: (BaseNavItem & { url: LinkProps['to'] })[]
    url?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
    title: string
    items: NavItem[]
}

interface SidebarData {
    user: User
    NavUser: NavUser[]
    sidebarHeader: SidebarHeader
    navGroups: NavGroup[]
}

export type {SidebarData, NavGroup, NavItem, NavCollapsible, NavLink}
