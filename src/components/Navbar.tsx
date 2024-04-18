"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <div className="flex flex-col space-y-4 text-sm rounded-xl">
                <Menu setActive={setActive}>
                    <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem></Link>
                    <Link href={'/contact'}>
                        <MenuItem setActive={setActive} active={active} item="contact Us">
                        </MenuItem>
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="ALl courses">
                        <div className="flex flex-col gap-2">
                            <HoveredLink href="/courses">Basic Music theory</HoveredLink>
                            <HoveredLink href="/interface-design">Advance composition</HoveredLink>
                            <HoveredLink href="/seo">SongWritting</HoveredLink>
                            <HoveredLink href="/branding">Music production</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>

        </div>
    )
}

export default Navbar
