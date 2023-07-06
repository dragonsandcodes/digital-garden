"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Music2, Youtube } from "lucide-react";

import { defaultAuthor } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CommandDialogComponent } from "@/components/command-dialog";
import { CopyButton } from "@/components/copy-button";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";
import { WorkAvailabilityBadge } from "@/components/work-availability-badge";

export function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header
        className={cn(
          "fixed -bottom-32 z-20 mx-auto mb-4 w-full px-4 animate-out delay-500 sm:static sm:z-auto sm:mb-0 sm:mt-4 sm:h-16 sm:max-w-6xl sm:transition-none sm:delay-0 lg:px-0",
          visible && "bottom-0 left-0 animate-in"
        )}
      >
        {defaultAuthor.availableForWork && (
          <div className="mx-auto mb-2 text-center sm:hidden">
            <Link href="/about-me" aria-label="Go to Now page">
              <WorkAvailabilityBadge />
            </Link>
          </div>
        )}
        <div className="flex items-center rounded-full border-b border-primary/40 bg-white/30 bg-clip-padding px-4 py-2 shadow-md backdrop-blur-sm sm:container dark:bg-black/30 dark:text-white sm:justify-between sm:rounded-lg">
          <div className="order-1 flex flex-row items-center justify-start">
            <Link href="/" aria-label="Go to Home">
              <Image
                className="aspect-square h-auto w-10 rounded-full border border-black hover:opacity-60"
                width={40}
                height={40}
                src="/avatar.png"
                alt={defaultAuthor.name}
              />
            </Link>
            {defaultAuthor.availableForWork && (
              <Link href="/about-me" aria-label="Go to Now page" className="ml-2 hidden sm:block">
                <WorkAvailabilityBadge />
              </Link>
            )}
          </div>
          <div className="order-3 sm:order-2 sm:ml-auto">
            <nav className="ml-auto hidden space-x-6 text-sm font-medium sm:block sm:w-full">
              <Navbar />
            </nav>
            <nav className="sm:hidden">
              <MobileNav />
            </nav>
          </div>
          <div className="order-2 flex w-full items-center sm:order-3 sm:w-fit">
            <CommandDialogComponent />
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="flex max-w-7xl flex-row justify-end space-x-2 text-sm text-muted-foreground">
        <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
          <Link href={defaultAuthor.social.tiktok} target="_blank">
            <Music2 />
            <span className="sr-only">Go to my Youtube channel</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
          <Link href={defaultAuthor.social.youtube} target="_blank">
            <Youtube />
            <span className="sr-only">Go to my Youtube channel</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
          <Link href={defaultAuthor.social.github} target="_blank">
            <Github />
            <span className="sr-only">Go to my Github profile</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="hover:text-foreground">
          <Link href={defaultAuthor.social.instagram} target="_blank">
            <Instagram />
            <span className="sr-only">Go to my Instagram profile</span>
          </Link>
        </Button>

        <CopyButton size="icon" variant="ghost" className="hover:text-foreground" copyText={defaultAuthor.email}>
          <Mail />
          <span className="sr-only">Email address</span>
        </CopyButton>
      </div>
    </>
  );
}
