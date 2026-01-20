"use client";
import { Fragment, useState } from "react";
import { Menu, MoveRight, X } from "lucide-react";
import { registerOverlayPortal, WithPuckProps } from "@puckeditor/core";
import { cn } from "@/registry/lib/utils";
import { BaseButton } from "@/registry/shadcn/components/ui/base-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/shadcn/components/ui/navigation-menu";
import { Button, ButtonProps } from "@/registry/shadcn/components/button";

type NavigationLink = { label: string };

type SubmenuLink = NavigationLink & {
  url: string;
};

type SecondaryNavigationItem = NavigationLink & {
  url: string;
  variant?: ButtonProps["variant"];
  icon?: ButtonProps["icon"];
  divider?: "true" | "false";
  isHiddenOnMobile?: "true" | "false";
};

type NavigationItem = NavigationLink & {
  url?: string;
  description?: string;
  cta?: ButtonProps;
  items?: SubmenuLink[];
};

export interface HeaderProps {
  companyName: string;
  primaryNavigation?: NavigationItem[];
  secondaryNavigation?: SecondaryNavigationItem[];
}

export const Header = ({
  companyName,
  primaryNavigation,
  secondaryNavigation,
  puck,
}: WithPuckProps<HeaderProps>) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 sticky top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          {Array.isArray(primaryNavigation) && primaryNavigation.length > 0 ? (
            <NavigationMenu className="flex justify-start items-start">
              <NavigationMenuList className="flex justify-start gap-4 flex-row">
                {primaryNavigation.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.url ? (
                      <>
                        <NavigationMenuLink asChild>
                          <Button
                            url={item.url}
                            label={item.label}
                            variant="ghost"
                            disableNavigation={puck?.isEditing}
                          />
                        </NavigationMenuLink>
                      </>
                    ) : (
                      <>
                        <NavigationMenuTrigger
                          className="font-medium text-sm"
                          ref={registerOverlayPortal}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                <p className="text-base">{item.label}</p>
                                {item.description ? (
                                  <p className="text-muted-foreground text-sm">
                                    {item.description}
                                  </p>
                                ) : null}
                              </div>
                              {item.cta?.url ? (
                                <Button
                                  label={item.cta.label}
                                  url={item.cta.url}
                                  variant={item.cta.variant}
                                  size={item.cta.size}
                                  icon={item.cta.icon}
                                  className="mt-10"
                                  disableNavigation={puck?.isEditing}
                                />
                              ) : null}
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items?.map((subItem, index) => (
                                <NavigationMenuLink
                                  key={index}
                                  href={subItem.url}
                                  className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                >
                                  <span>{subItem.label}</span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground" />
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          ) : null}
        </div>
        <div className="flex lg:justify-center">
          <p className="font-semibold whitespace-nowrap">{companyName}</p>
        </div>
        <div className="flex justify-end w-full gap-4">
          {secondaryNavigation?.map((item, index) => (
            <Fragment key={index}>
              <Button
                label={item.label}
                variant={item.variant}
                icon={item.icon}
                url={item.url}
                className={cn({
                  "hidden md:inline": item.isHiddenOnMobile === "true",
                })}
                disableNavigation={puck?.isEditing}
              />
              {item.divider === "true" ? (
                <div className="border-e-1 hidden md:inline"></div>
              ) : null}
            </Fragment>
          ))}
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <BaseButton
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            ref={registerOverlayPortal}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </BaseButton>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {primaryNavigation?.map((item, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-2">
                    {item.url ? (
                      <a
                        href={item.url}
                        className="flex justify-between items-center"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg">{item.label}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </a>
                    ) : (
                      <p className="text-lg">{item.label}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.url}
                          className="flex justify-between items-center"
                          onClick={() => setOpen(false)}
                        >
                          <span className="text-muted-foreground">
                            {subItem.label}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
