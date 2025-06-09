import React, { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutDashboard,
  Users,
  User,
  Award,
  Percent,
  Settings,
  ArrowLeft,
  Bell,
} from "lucide-react";

const CommissionForm = () => {
  const [selectedTab, setSelectedTab] = useState("distributor");
  const [commissionValue, setCommissionValue] = useState([7]);
  const [vendorCommissionValue, setVendorCommissionValue] = useState([3]);

  const currentCommission =
    selectedTab === "distributor" ? commissionValue : vendorCommissionValue;

  return (
    <div className="p-6 space-y-6">
      {/* Back Button Header */}
      <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <span className="text-gray-700 font-medium">
          Set Commission For Distributors/Vendors
        </span>
      </div>

      {/* Main Card */}
      <Card className="bg-white shadow-md">
        <CardHeader className="pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Set Commission For Distributors/Vendors
          </h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            {/* Simple Tabs */}
            <TabsList className="grid w-fit grid-cols-2 bg-gray-100 p-1 h-auto">
              <TabsTrigger
                value="distributor"
                className="px-6 py-2 text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Distributor
              </TabsTrigger>
              <TabsTrigger
                value="vendor"
                className="px-6 py-2 text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Vendor
              </TabsTrigger>
            </TabsList>

            {/* Distributor Tab Content */}
            <TabsContent value="distributor" className="mt-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="distributor-name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Distributor Name
                  </Label>
                  <Input
                    id="distributor-name"
                    placeholder="Enter Vendor Name"
                    className="mt-1 h-10"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="distributor-id"
                    className="text-sm font-medium text-gray-700"
                  >
                    Distributor Id
                  </Label>
                  <Input
                    id="distributor-id"
                    placeholder="Enter Vendor Id"
                    className="mt-1 h-10"
                  />
                </div>
              </div>

              {/* Commission Slider Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">0%</span>
                  <Select value="7%">
                    <SelectTrigger className="w-16 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 101 }, (_, i) => (
                        <SelectItem key={i} value={`${i}%`}>
                          {i}%
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-sm font-medium text-gray-700">
                    100%
                  </span>
                </div>

                <div className="px-0">
                  <Slider
                    value={commissionValue}
                    onValueChange={setCommissionValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium h-10">
                Set Commission
              </Button>
            </TabsContent>

            {/* Vendor Tab Content */}
            <TabsContent value="vendor" className="mt-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="vendor-name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Vendor Name
                  </Label>
                  <Input
                    id="vendor-name"
                    placeholder="Enter Vendor Name"
                    className="mt-1 h-10"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="vendor-id"
                    className="text-sm font-medium text-gray-700"
                  >
                    Vendor Id
                  </Label>
                  <Input
                    id="vendor-id"
                    placeholder="Enter Vendor Id"
                    className="mt-1 h-10"
                  />
                </div>
              </div>

              {/* Commission Slider Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">0%</span>
                  <Select value="3%">
                    <SelectTrigger className="w-16 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 101 }, (_, i) => (
                        <SelectItem key={i} value={`${i}%`}>
                          {i}%
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-sm font-medium text-gray-700">
                    100%
                  </span>
                </div>

                <div className="px-0">
                  <Slider
                    value={vendorCommissionValue}
                    onValueChange={setVendorCommissionValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium h-10">
                Set Commission
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const AppSidebar = () => {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">30</span>
          </div>
          <span className="font-semibold text-lg">30 PLAY</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <User className="h-4 w-4" />
              <span>Distributor</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Users className="h-4 w-4" />
              <span>Vendors</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Award className="h-4 w-4" />
              <span>Quiz Result</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton isActive>
              <Percent className="h-4 w-4" />
              <span>Commission</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="Amit Kumar Jain" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Amit Kumar Jain</p>
            <Badge
              variant="secondary"
              className="text-xs bg-orange-100 text-orange-800"
            >
              Distributor
            </Badge>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

const AppHeader = () => (
  <header className="flex h-16 shrink-0 items-center justify-end gap-2 border-b bg-white px-4">
    <Button variant="ghost" size="sm" className="relative">
      <Bell className="h-4 w-4" />
      <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
    </Button>
    <Avatar className="h-8 w-8">
      <AvatarImage src="/placeholder.svg" alt="User" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  </header>
);

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <AppHeader />
          <main className="flex-1">
            <CommissionForm />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
