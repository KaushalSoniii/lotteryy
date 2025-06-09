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
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button Header - matching the original */}
      <div className="flex items-center gap-3 mb-6 p-4 bg-white rounded-lg border border-gray-200">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <ArrowLeft className="h-4 w-4 text-gray-600" />
        </Button>
        <span className="text-gray-700 font-medium">
          Set Commission For Distributors/Vendors
        </span>
      </div>

      {/* Main Card - exactly like the original */}
      <Card className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <CardHeader className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Set Commission For Distributors/Vendors
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            {/* Simple Tabs - matching original style */}
            <div className="mb-6">
              <TabsList className="inline-flex bg-gray-100 rounded-lg p-1">
                <TabsTrigger
                  value="distributor"
                  className="px-4 py-2 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900"
                >
                  Distributor
                </TabsTrigger>
                <TabsTrigger
                  value="vendor"
                  className="px-4 py-2 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900"
                >
                  Vendor
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Distributor Tab Content */}
            <TabsContent value="distributor" className="space-y-6 mt-0">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Distributor Name
                  </Label>
                  <Input
                    placeholder="Enter Vendor Name"
                    className="h-10 w-full border-gray-300"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Distributor Id
                  </Label>
                  <Input
                    placeholder="Enter Vendor Id"
                    className="h-10 w-full border-gray-300"
                  />
                </div>
              </div>

              {/* Commission Slider Section - exactly like original */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">0%</span>
                  <Select value="7%">
                    <SelectTrigger className="w-16 h-8 border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7%">7%</SelectItem>
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

                <div className="w-full">
                  <Slider
                    value={commissionValue}
                    onValueChange={setCommissionValue}
                    max={100}
                    step={1}
                    className="w-full [&>span[role=slider]]:bg-green-500 [&>span[role=slider]]:border-green-500 [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-green-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium h-10 rounded-md">
                  Set Commission
                </Button>
              </div>
            </TabsContent>

            {/* Vendor Tab Content */}
            <TabsContent value="vendor" className="space-y-6 mt-0">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Vendor Name
                  </Label>
                  <Input
                    placeholder="Enter Vendor Name"
                    className="h-10 w-full border-gray-300"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Vendor Id
                  </Label>
                  <Input
                    placeholder="Enter Vendor Id"
                    className="h-10 w-full border-gray-300"
                  />
                </div>
              </div>

              {/* Commission Slider Section for Vendor */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">0%</span>
                  <Select value="3%">
                    <SelectTrigger className="w-16 h-8 border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3%">3%</SelectItem>
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

                <div className="w-full">
                  <Slider
                    value={vendorCommissionValue}
                    onValueChange={setVendorCommissionValue}
                    max={100}
                    step={1}
                    className="w-full [&>span[role=slider]]:bg-green-500 [&>span[role=slider]]:border-green-500 [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-green-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium h-10 rounded-md">
                  Set Commission
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const AppSidebar = () => {
  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">30</span>
          </div>
          <span className="font-semibold text-lg text-gray-900">30 PLAY</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu className="space-y-1">
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <User className="h-4 w-4" />
              <span>Distributor</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Users className="h-4 w-4" />
              <span>Vendors</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Award className="h-4 w-4" />
              <span>Quiz Result</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 text-sm bg-blue-600 text-white rounded-md">
              <Percent className="h-4 w-4" />
              <span>Commission</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarSeparator className="mx-4 my-2" />

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="Amit Kumar Jain" />
            <AvatarFallback className="bg-gray-500 text-white text-xs">
              AK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Amit Kumar Jain
            </p>
            <Badge className="text-xs bg-orange-100 text-orange-700 border-orange-200 mt-1">
              Distributor
            </Badge>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

const AppHeader = () => (
  <header className="flex h-16 shrink-0 items-center justify-end gap-3 border-b border-gray-200 bg-white px-6">
    <Button variant="ghost" size="sm" className="relative p-2">
      <Bell className="h-4 w-4 text-gray-600" />
      <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
    </Button>
    <Avatar className="h-8 w-8">
      <AvatarImage src="/placeholder.svg" alt="User" />
      <AvatarFallback className="bg-gray-500 text-white text-xs">
        U
      </AvatarFallback>
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
