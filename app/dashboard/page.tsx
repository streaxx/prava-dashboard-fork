"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, PlusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const [isNewUser, setIsNewUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const newUser = localStorage.getItem("newUser");
    setIsNewUser(newUser === "true");
  }, []);

  const handleGetStarted = () => {
    router.push("/dashboard/agent-wallet");
  };

  if (isNewUser) {
    return (
      <div className="space-y-6 p-6">
        <h2 className="text-3xl font-bold tracking-tight">Welcome to Prava!</h2>
        <Card className="card-hover metallic-card bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardHeader>
            <CardTitle>Get Started with Prava</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome aboard! To start using Prava's powerful AI agent platform,
              you'll need to set up your agent wallet and activate your API key.
            </p>
            <Button onClick={handleGetStarted} size="lg" className="w-full">
              Set Up Your Agent Wallet
            </Button>
          </CardContent>
        </Card>
        <Card className="card-hover metallic-card">
          <CardHeader>
            <CardTitle>What You Can Do with Prava</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>• Create and manage AI agents for various tasks</p>
            <p>• Monitor agent performance and earnings</p>
            <p>• Securely handle transactions with agent wallets</p>
            <p>• Access detailed analytics and insights</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Carousel>
        <CarouselContent className="py-4">
          <CarouselItem className="max-w-[35%]">
            <Card className="metallic-card card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ChatShopper Genie
                  <Badge variant="outline" className="border-green-500 text-green-500">Active</Badge>
                </CardTitle>
                <CardDescription>AI shopping agent</CardDescription>
              </CardHeader>
              <Link href={"https://chatshopper.prava.space"}>
                <CardContent className="flex gap-2 cursor-pointer text-blue-700">
                  Explore
                  <ChevronRight />
                </CardContent>
              </Link>
            </Card>
          </CarouselItem>

          <CarouselItem className="max-w-[35%]">
            <Card className="metallic-card card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Zwoop
                  <Badge variant="outline" className="border-red-500 text-red-500">Inactive</Badge>
                </CardTitle>
                <CardDescription>AI shopping agent</CardDescription>
              </CardHeader>
              <Link href={"/dashboard"}>
                <CardContent className="flex gap-2 cursor-pointer text-gray-400">
                  Coming Soon
                  <ChevronRight />
                </CardContent>
              </Link>
            </Card>
          </CarouselItem>

          <CarouselItem className="basis-1/4 flex justify-center items-center">
            <Card className="card-hover metallic-card">
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  Add an Agent <PlusIcon/>
                </CardTitle>
              </CardHeader>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="col-span-2 card-hover metallic-card">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <div className="grid gap-4 md:grid-cols-2 col-span-2">
          <Card className="card-hover metallic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$760.35</div>
              <p className="text-xs text-muted-foreground">
                +5.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover metallic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Agents
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                1 from last month
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover metallic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tasks Completed
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70</div>
              <p className="text-xs text-muted-foreground">
                +4% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="card-hover metallic-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">1 agent inactive</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
