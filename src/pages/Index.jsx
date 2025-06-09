import React, { useState } from "react";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("distributor");
  const [commissionValue, setCommissionValue] = useState(7);
  const [vendorCommissionValue, setVendorCommissionValue] = useState(3);

  const currentCommission =
    selectedTab === "distributor" ? commissionValue : vendorCommissionValue;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          backgroundColor: "white",
          borderRight: "1px solid #e2e8f0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div style={{ padding: "16px", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#2563eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              30
            </div>
            <span style={{ fontWeight: "600", fontSize: "18px" }}>30 PLAY</span>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ padding: "8px", flex: 1 }}>
          {[
            { icon: "📊", label: "Dashboard", active: false },
            { icon: "👤", label: "Distributor", active: false },
            { icon: "👥", label: "Vendors", active: false },
            { icon: "🏆", label: "Quiz Result", active: false },
            { icon: "💰", label: "Commission", active: true },
            { icon: "⚙️", label: "Settings", active: false },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "8px 12px",
                margin: "2px 0",
                borderRadius: "6px",
                backgroundColor: item.active ? "#1e40af" : "transparent",
                color: item.active ? "white" : "#64748b",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "16px", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#6b7280",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
              }}
            >
              AK
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Amit Kumar Jain
              </div>
              <div
                style={{
                  fontSize: "11px",
                  backgroundColor: "#fed7aa",
                  color: "#c2410c",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  display: "inline-block",
                  marginTop: "2px",
                }}
              >
                Distributor
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div
          style={{
            height: "64px",
            backgroundColor: "white",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 24px",
            gap: "12px",
          }}
        >
          <div style={{ position: "relative" }}>
            <span style={{ fontSize: "16px" }}>🔔</span>
            <div
              style={{
                position: "absolute",
                top: "-2px",
                right: "-2px",
                width: "8px",
                height: "8px",
                backgroundColor: "#ef4444",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#6b7280",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "12px",
            }}
          >
            U
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "24px",
            maxWidth: "1024px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Back Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
              padding: "16px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
            }}
          >
            <button
              style={{
                width: "32px",
                height: "32px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ←
            </button>
            <span style={{ color: "#374151", fontWeight: "500" }}>
              Set Commission For Distributors/Vendors
            </span>
          </div>

          {/* Main Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Card Header */}
            <div
              style={{
                padding: "24px",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Set Commission For Distributors/Vendors
              </h2>
            </div>

            {/* Card Content */}
            <div style={{ padding: "24px" }}>
              {/* Tabs */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "8px",
                    padding: "4px",
                  }}
                >
                  <button
                    onClick={() => setSelectedTab("distributor")}
                    style={{
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      cursor: "pointer",
                      backgroundColor:
                        selectedTab === "distributor" ? "white" : "transparent",
                      boxShadow:
                        selectedTab === "distributor"
                          ? "0 1px 2px rgba(0, 0, 0, 0.1)"
                          : "none",
                    }}
                  >
                    Distributor
                  </button>
                  <button
                    onClick={() => setSelectedTab("vendor")}
                    style={{
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      cursor: "pointer",
                      backgroundColor:
                        selectedTab === "vendor" ? "white" : "transparent",
                      boxShadow:
                        selectedTab === "vendor"
                          ? "0 1px 2px rgba(0, 0, 0, 0.1)"
                          : "none",
                    }}
                  >
                    Vendor
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div
                style={{
                  marginBottom: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    {selectedTab === "distributor" ? "Distributor" : "Vendor"}{" "}
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Vendor Name"
                    style={{
                      width: "100%",
                      height: "40px",
                      padding: "0 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    {selectedTab === "distributor" ? "Distributor" : "Vendor"}{" "}
                    Id
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Vendor Id"
                    style={{
                      width: "100%",
                      height: "40px",
                      padding: "0 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Commission Slider */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    0%
                  </span>
                  <select
                    value={`${currentCommission}%`}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (selectedTab === "distributor") {
                        setCommissionValue(value);
                      } else {
                        setVendorCommissionValue(value);
                      }
                    }}
                    style={{
                      width: "64px",
                      height: "32px",
                      border: "1px solid #d1d5db",
                      borderRadius: "4px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  >
                    {Array.from({ length: 101 }, (_, i) => (
                      <option key={i} value={i}>
                        {i}%
                      </option>
                    ))}
                  </select>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    100%
                  </span>
                </div>

                {/* Slider */}
                <div
                  style={{ position: "relative", width: "100%", height: "6px" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "6px",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "3px",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      width: `${currentCommission}%`,
                      height: "6px",
                      backgroundColor: "#22c55e",
                      borderRadius: "3px",
                    }}
                  ></div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentCommission}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (selectedTab === "distributor") {
                        setCommissionValue(value);
                      } else {
                        setVendorCommissionValue(value);
                      }
                    }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "6px",
                      opacity: 0,
                      cursor: "pointer",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: `${currentCommission}%`,
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#22c55e",
                      borderRadius: "50%",
                      border: "2px solid white",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      cursor: "pointer",
                    }}
                  ></div>
                </div>
              </div>

              {/* Set Commission Button */}
              <button
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#f59e0b",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Set Commission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
