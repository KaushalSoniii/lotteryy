import React, { useState, useCallback, useMemo } from "react";
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

// Memoized percentage options to avoid recreating array on each render
const PERCENTAGE_OPTIONS = Array.from({ length: 101 }, (_, i) => ({
  value: `${i}%`,
  label: `${i}%`,
}));

// Memoized navigation items
const NAVIGATION_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", isActive: false },
  { icon: User, label: "Distributor", isActive: false },
  { icon: Users, label: "Vendors", isActive: false },
  { icon: Award, label: "Quiz Result", isActive: false },
  { icon: Percent, label: "Commission", isActive: true },
  { icon: Settings, label: "Settings", isActive: false },
];

// Memoized Commission Form Component
const CommissionForm = React.memo(() => {
  const [selectedTab, setSelectedTab] = useState("distributor");
  const [commissionValue, setCommissionValue] = useState([7]);
  const [vendorCommissionValue, setVendorCommissionValue] = useState([3]);
  const [distributorName, setDistributorName] = useState("");
  const [distributorId, setDistributorId] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [vendorId, setVendorId] = useState("");

  // Memoized handlers to prevent unnecessary re-renders
  const handleTabChange = useCallback((value) => {
    setSelectedTab(value);
  }, []);

  const handleCommissionChange = useCallback((value) => {
    setCommissionValue(value);
  }, []);

  const handleVendorCommissionChange = useCallback((value) => {
    setVendorCommissionValue(value);
  }, []);

  const handleDistributorNameChange = useCallback((e) => {
    setDistributorName(e.target.value);
  }, []);

  const handleDistributorIdChange = useCallback((e) => {
    setDistributorId(e.target.value);
  }, []);

  const handleVendorNameChange = useCallback((e) => {
    setVendorName(e.target.value);
  }, []);

  const handleVendorIdChange = useCallback((e) => {
    setVendorId(e.target.value);
  }, []);

  const handleSetCommission = useCallback(() => {
    console.log("Setting commission for:", selectedTab, {
      name: selectedTab === "distributor" ? distributorName : vendorName,
      id: selectedTab === "distributor" ? distributorId : vendorId,
      commission:
        selectedTab === "distributor"
          ? commissionValue[0]
          : vendorCommissionValue[0],
    });
  }, [
    selectedTab,
    distributorName,
    distributorId,
    vendorName,
    vendorId,
    commissionValue,
    vendorCommissionValue,
  ]);

  // Memoized percentage options JSX to prevent recreation
  const percentageSelectItems = useMemo(
    () =>
      PERCENTAGE_OPTIONS.map(({ value, label }) => (
        <SelectItem key={value} value={value}>
          {label}
        </SelectItem>
      )),
    [],
  );

  const currentCommission =
    selectedTab === "distributor" ? commissionValue : vendorCommissionValue;
  const currentCommissionValue = `${currentCommission[0]}%`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-lg font-medium text-gray-700">
          Set Commission For Distributors/Vendors
        </h1>
      </div>

      {/* Main Card */}
      <Card className="w-full">
        <CardHeader>
          <h2 className="text-xl font-semibold">
            Set Commission For Distributors/Vendors
          </h2>
        </CardHeader>
        <CardContent>
          <Tabs
            value={selectedTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="distributor">Distributor</TabsTrigger>
              <TabsTrigger value="vendor">Vendor</TabsTrigger>
            </TabsList>

            <TabsContent value="distributor" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="distributor-name">Distributor Name</Label>
                  <Input
                    id="distributor-name"
                    placeholder="Enter Vendor Name"
                    className="w-full"
                    value={distributorName}
                    onChange={handleDistributorNameChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="distributor-id">Distributor Id</Label>
                  <Input
                    id="distributor-id"
                    placeholder="Enter Vendor Id"
                    className="w-full"
                    value={distributorId}
                    onChange={handleDistributorIdChange}
                  />
                </div>
              </div>

              {/* Commission Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">0%</span>
                  <div className="flex items-center gap-2">
                    <Select value={currentCommissionValue}>
                      <SelectTrigger className="w-16 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>{percentageSelectItems}</SelectContent>
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
                <Button
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white"
                  onClick={handleSetCommission}
                >
                  Set Commission
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="vendor" className="space-y-6">
              <div className="p-6 border-2 border-blue-400 border-dashed rounded-lg bg-blue-50/20">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vendor-name">Vendor Name</Label>
                    <Input
                      id="vendor-name"
                      placeholder="Enter Vendor Name"
                      className="w-full bg-white border-gray-300"
                      value={vendorName}
                      onChange={handleVendorNameChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vendor-id">Vendor Id</Label>
                    <Input
                      id="vendor-id"
                      placeholder="Enter Vendor Id"
                      className="w-full bg-white border-gray-300"
                      value={vendorId}
                      onChange={handleVendorIdChange}
                    />
                  </div>
                </div>

                {/* Commission Slider */}
                <div className="space-y-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">0%</span>
                    <div className="flex items-center gap-2">
                      <Select value={currentCommissionValue}>
                        <SelectTrigger className="w-16 h-8 bg-white border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>{percentageSelectItems}</SelectContent>
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
                  <Button
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white"
                    onClick={handleSetCommission}
                  >
                    Set Commission
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
});

CommissionForm.displayName = "CommissionForm";

// Memoized Navigation Item Component
const NavigationItem = React.memo(({ icon: Icon, label, isActive }) => (
  <SidebarMenuItem>
    <SidebarMenuButton isActive={isActive}>
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
));

NavigationItem.displayName = "NavigationItem";

// Memoized Sidebar Component
const AppSidebar = React.memo(() => {
  const navigationItems = useMemo(
    () =>
      NAVIGATION_ITEMS.map((item) => (
        <NavigationItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={item.isActive}
        />
      )),
    [],
  );

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
        <SidebarMenu>{navigationItems}</SidebarMenu>
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
});

AppSidebar.displayName = "AppSidebar";

// Memoized Header Component
const AppHeader = React.memo(() => (
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
));

AppHeader.displayName = "AppHeader";

// Main Index Component
const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <AppHeader />

          {/* Main Content */}
          <main className="flex-1 p-6">
            <CommissionForm />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
