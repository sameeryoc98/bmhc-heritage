import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Menu, X, Heart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Prayer times data
  const prayerTimes = [
    { name: "Fajr", time: "5:30 AM" },
    { name: "Dhuhr", time: "12:45 PM" },
    { name: "Asr", time: "3:30 PM" },
    { name: "Maghrib", time: "6:15 PM" },
    { name: "Isha", time: "8:00 PM" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/public/logo.png" alt="BMHC Heritage" className="h-auto w-32" />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Clock className="h-4 w-4 mr-2" />
                  Prayer Times
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px]">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Prayer</TableHead>
                          <TableHead>Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {prayerTimes.map((prayer) => (
                          <TableRow key={prayer.name}>
                            <TableCell className="font-medium">{prayer.name}</TableCell>
                            <TableCell>{prayer.time}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-teal-50 p-6 no-underline outline-none focus:shadow-md"
                          href="#about"
                        >
                          <Heart className="h-6 w-6 text-teal-600" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            About BMHC
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Learn about our mission and community impact
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#about"
                        >
                          <div className="text-sm font-medium leading-none">Our Story</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Discover our history and values
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#community"
                        >
                          <div className="text-sm font-medium leading-none">Community</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Meet our community members
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#visit"
                        >
                          <div className="text-sm font-medium leading-none">Visit Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Find our location and opening hours
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#donate"
                        >
                          <div className="text-sm font-medium leading-none">Donate</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Support our community initiatives
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#appeals"
                        >
                          <div className="text-sm font-medium leading-none">Current Appeals</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See how you can help right now
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#volunteer"
                        >
                          <div className="text-sm font-medium leading-none">Volunteer</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our volunteer community
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#newsletter"
                        >
                          <div className="text-sm font-medium leading-none">Newsletter</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Stay updated with our news
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}
                  href="#activities"
                >
                  Activities
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}
                  href="#news"
                >
                  News
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}
                  href="#events"
                >
                  Events
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#causes"
                        >
                          <div className="text-sm font-medium leading-none">Causes</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our community causes
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#media"
                        >
                          <div className="text-sm font-medium leading-none">Media</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Photos and videos
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#contact"
                        >
                          <div className="text-sm font-medium leading-none">Contact</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get in touch with us
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              <Heart className="h-4 w-4 mr-2" />
              Donate Now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="px-4 py-4 space-y-4">
              <div className="border-b pb-4 mb-4">
                <h3 className="font-medium text-sm mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Prayer Times
                </h3>
                <div className="space-y-1">
                  {prayerTimes.map((prayer) => (
                    <div key={prayer.name} className="flex justify-between text-sm">
                      <span>{prayer.name}</span>
                      <span className="text-muted-foreground">{prayer.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#donate"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </a>
              <a
                href="#activities"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Activities
              </a>
              <a
                href="#news"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </a>
              <a
                href="#events"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#causes"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Causes
              </a>
              <a
                href="#media"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Media
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
