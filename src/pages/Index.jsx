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
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Modern Header */}
      <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <Button
          variant="ghost"
          size="sm"
          className="p-3 rounded-full hover:bg-white/80 transition-all duration-200 shadow-sm"
        >
          <ArrowLeft className="h-5 w-5 text-blue-600" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Commission Management
          </h1>
          <p className="text-gray-600 text-sm">
            Set commission rates for distributors and vendors
          </p>
        </div>
      </div>

      {/* Enhanced Main Card */}
      <Card className="shadow-xl border-0 bg-white rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Set Commission Rates
          </h2>
        </CardHeader>
        <CardContent className="p-8">
          <Tabs
            value={selectedTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            {/* Redesigned Tabs */}
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-80 grid-cols-2 p-1 bg-gray-100 rounded-xl h-12">
                <TabsTrigger
                  value="distributor"
                  className="rounded-lg text-sm font-medium transition-all duration-300 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-blue-50 hover:text-blue-600"
                >
                  <User className="h-4 w-4 mr-2" />
                  Distributor
                </TabsTrigger>
                <TabsTrigger
                  value="vendor"
                  className="rounded-lg text-sm font-medium transition-all duration-300 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-emerald-50 hover:text-emerald-600"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Vendor
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Distributor Tab Content */}
            <TabsContent value="distributor" className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="distributor-name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Distributor Name
                    </Label>
                    <Input
                      id="distributor-name"
                      placeholder="Enter Distributor Name"
                      className="h-12 bg-white border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-lg shadow-sm transition-all duration-200"
                      value={distributorName}
                      onChange={handleDistributorNameChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="distributor-id"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Distributor ID
                    </Label>
                    <Input
                      id="distributor-id"
                      placeholder="Enter Distributor ID"
                      className="h-12 bg-white border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-lg shadow-sm transition-all duration-200"
                      value={distributorId}
                      onChange={handleDistributorIdChange}
                    />
                  </div>
                </div>

                {/* Enhanced Commission Slider */}
                <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      0%
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-600">
                        Commission:
                      </span>
                      <Select value={currentCommissionValue}>
                        <SelectTrigger className="w-20 h-10 bg-blue-50 border-blue-200 focus:border-blue-400 rounded-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>{percentageSelectItems}</SelectContent>
                      </Select>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      100%
                    </span>
                  </div>

                  <div className="px-4">
                    <Slider
                      value={commissionValue}
                      onValueChange={handleCommissionChange}
                      max={100}
                      step={1}
                      className="w-full [&_[role=slider]]:bg-blue-500 [&_[role=slider]]:border-blue-600 [&>span]:bg-blue-500"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {commissionValue[0]}%
                    </span>
                    <p className="text-sm text-gray-600">
                      Current Commission Rate
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    onClick={handleSetCommission}
                  >
                    Set Distributor Commission
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Vendor Tab Content */}
            <TabsContent value="vendor" className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border-2 border-dashed border-emerald-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="vendor-name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Vendor Name
                    </Label>
                    <Input
                      id="vendor-name"
                      placeholder="Enter Vendor Name"
                      className="h-12 bg-white border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-lg shadow-sm transition-all duration-200"
                      value={vendorName}
                      onChange={handleVendorNameChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="vendor-id"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Vendor ID
                    </Label>
                    <Input
                      id="vendor-id"
                      placeholder="Enter Vendor ID"
                      className="h-12 bg-white border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 rounded-lg shadow-sm transition-all duration-200"
                      value={vendorId}
                      onChange={handleVendorIdChange}
                    />
                  </div>
                </div>

                {/* Enhanced Commission Slider */}
                <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      0%
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-600">
                        Commission:
                      </span>
                      <Select value={currentCommissionValue}>
                        <SelectTrigger className="w-20 h-10 bg-emerald-50 border-emerald-200 focus:border-emerald-400 rounded-lg">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>{percentageSelectItems}</SelectContent>
                      </Select>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      100%
                    </span>
                  </div>

                  <div className="px-4">
                    <Slider
                      value={vendorCommissionValue}
                      onValueChange={handleVendorCommissionChange}
                      max={100}
                      step={1}
                      className="w-full [&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-600 [&>span]:bg-emerald-500"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-2xl font-bold text-emerald-600">
                      {vendorCommissionValue[0]}%
                    </span>
                    <p className="text-sm text-gray-600">
                      Current Commission Rate
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    onClick={handleSetCommission}
                  >
                    Set Vendor Commission
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
    <SidebarMenuButton
      isActive={isActive}
      className="hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
    >
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
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">30</span>
          </div>
          <span className="font-bold text-xl text-gray-800">30 PLAY</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarMenu className="space-y-2">{navigationItems}</SidebarMenu>
      </SidebarContent>

      <SidebarSeparator className="mx-4" />

      <SidebarFooter className="p-6">
        <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Amit Kumar Jain" />
            <AvatarFallback className="bg-orange-500 text-white font-semibold">
              AK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-gray-800">
              Amit Kumar Jain
            </p>
            <Badge
              variant="secondary"
              className="text-xs bg-orange-100 text-orange-700 border-orange-200"
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
  <header className="flex h-16 shrink-0 items-center justify-end gap-4 border-b bg-white px-6 shadow-sm">
    <Button
      variant="ghost"
      size="sm"
      className="relative hover:bg-gray-100 p-3 rounded-full transition-colors duration-200"
    >
      <Bell className="h-5 w-5 text-gray-600" />
      <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
    </Button>
    <Avatar className="h-9 w-9">
      <AvatarImage src="/placeholder.svg" alt="User" />
      <AvatarFallback className="bg-gray-500 text-white">U</AvatarFallback>
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
          <main className="flex-1 p-8">
            <CommissionForm />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
