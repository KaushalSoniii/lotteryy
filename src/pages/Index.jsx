import React, { useState, useCallback } from "react";
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

// Simple Commission Form Component
const CommissionForm = () => {
  const [selectedTab, setSelectedTab] = useState("distributor");
  const [commissionValue, setCommissionValue] = useState([7]);
  const [vendorCommissionValue, setVendorCommissionValue] = useState([3]);
  const [distributorName, setDistributorName] = useState("");
  const [distributorId, setDistributorId] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorId, setVendorId] = useState("");

  const handleTabChange = useCallback((value) => {
    setSelectedTab(value);
  }, []);

  const handleCommissionChange = useCallback((value) => {
    setCommissionValue(value);
  }, []);

  const handleVendorCommissionChange = useCallback((value) => {
    setVendorCommissionValue(value);
  }, []);

  const currentCommission =
    selectedTab === "distributor" ? commissionValue : vendorCommissionValue;
  const currentCommissionValue = `${currentCommission[0]}%`;

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 p-4 bg-white rounded-lg border">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-base font-medium text-gray-700">
          Set Commission For Distributors/Vendors
        </h1>
      </div>

      {/* Main Card */}
      <Card className="bg-white border border-gray-200 rounded-lg">
        <CardHeader className="p-6 border-b">
          <h2 className="text-lg font-medium">
            Set Commission For Distributors/Vendors
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs
            value={selectedTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            {/* Simple Tabs */}
            <TabsList className="grid w-64 grid-cols-2 mb-6 bg-gray-100 rounded-lg h-10">
              <TabsTrigger
                value="distributor"
                className="text-sm data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
              >
                Distributor
              </TabsTrigger>
              <TabsTrigger
                value="vendor"
                className="text-sm data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-sm"
              >
                Vendor
              </TabsTrigger>
            </TabsList>

            {/* Distributor Tab */}
            <TabsContent value="distributor" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="distributor-name"
                    className="text-sm font-medium"
                  >
                    Distributor Name
                  </Label>
                  <Input
                    id="distributor-name"
                    placeholder="Enter Vendor Name"
                    className="h-10 border-gray-300"
                    value={distributorName}
                    onChange={(e) => setDistributorName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="distributor-id"
                    className="text-sm font-medium"
                  >
                    Distributor Id
                  </Label>
                  <Input
                    id="distributor-id"
                    placeholder="Enter Vendor Id"
                    className="h-10 border-gray-300"
                    value={distributorId}
                    onChange={(e) => setDistributorId(e.target.value)}
                  />
                </div>
              </div>

              {/* Commission Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">0%</span>
                  <div className="flex items-center gap-2">
                    <Select value={currentCommissionValue}>
                      <SelectTrigger className="w-16 h-8 border-gray-300">
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
                  </div>
                  <span className="text-sm font-medium">100%</span>
                </div>

                <div className="px-2">
                  <Slider
                    value={commissionValue}
                    onValueChange={handleCommissionChange}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white h-10 font-medium">
                  Set Commission
                </Button>
              </div>
            </TabsContent>

            {/* Vendor Tab */}
            <TabsContent value="vendor" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="vendor-name" className="text-sm font-medium">
                    Vendor Name
                  </Label>
                  <Input
                    id="vendor-name"
                    placeholder="Enter Vendor Name"
                    className="h-10 border-gray-300"
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendor-id" className="text-sm font-medium">
                    Vendor Id
                  </Label>
                  <Input
                    id="vendor-id"
                    placeholder="Enter Vendor Id"
                    className="h-10 border-gray-300"
                    value={vendorId}
                    onChange={(e) => setVendorId(e.target.value)}
                  />
                </div>
              </div>

              {/* Commission Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">0%</span>
                  <div className="flex items-center gap-2">
                    <Select value={currentCommissionValue}>
                      <SelectTrigger className="w-16 h-8 border-gray-300">
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
                  </div>
                  <span className="text-sm font-medium">100%</span>
                </div>

                <div className="px-2">
                  <Slider
                    value={vendorCommissionValue}
                    onValueChange={handleVendorCommissionChange}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white h-10 font-medium">
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

// Simple Sidebar Component
const AppSidebar = () => {
  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", isActive: false },
    { icon: User, label: "Distributor", isActive: false },
    { icon: Users, label: "Vendors", isActive: false },
    { icon: Award, label: "Quiz Result", isActive: false },
    { icon: Percent, label: "Commission", isActive: true },
    { icon: Settings, label: "Settings", isActive: false },
  ];

  return (
    <Sidebar className="border-r border-gray-200 bg-white w-64">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">30</span>
          </div>
          <span className="font-semibold text-lg">30 PLAY</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarMenu className="space-y-1">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                isActive={item.isActive}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  item.isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarSeparator className="mx-4" />

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="Amit Kumar Jain" />
            <AvatarFallback className="bg-gray-500 text-white text-xs">
              AK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Amit Kumar Jain</p>
            <Badge className="text-xs bg-orange-100 text-orange-700 border-orange-200">
              Distributor
            </Badge>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

// Simple Header Component
const AppHeader = () => (
  <header className="flex h-16 shrink-0 items-center justify-end gap-4 border-b bg-white px-6">
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

// Main Index Component
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
