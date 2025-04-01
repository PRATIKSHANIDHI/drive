import React from 'react';
import { 
  Users, Activity, DollarSign, TrendingUp, Clock, Diamond, 
  Package, FileText, HelpCircle, MessageSquare, Settings,
  Briefcase, Image, Sliders, Database, Car
} from 'lucide-react';

interface UserStats {
  name: string;
  role: string;
  earnings: string;
  activeTime: string;
  avatar: string;
  rank: number;
}

interface ZoneStats {
  name: string;
  trips: number;
  earnings: string;
}

interface RecentTrip {
  id: string;
  user: string;
  amount: string;
  status: 'completed' | 'cancelled' | 'ongoing';
  time: string;
}

function App() {
  const users: UserStats[] = [
    {
      name: "John Smith",
      role: "Senior Driver",
      earnings: "$3.88K",
      activeTime: "27h",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rank: 1
    },
    {
      name: "Roji Chen",
      role: "Elite Driver",
      earnings: "$2.91K",
      activeTime: "22h",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rank: 2
    },
    {
      name: "King Williams",
      role: "Pro Driver",
      earnings: "$3.51K",
      activeTime: "25h",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rank: 3
    }
  ];

  const zoneStats: ZoneStats[] = [
    { name: "Zone A", trips: 156, earnings: "$5.2K" },
    { name: "Zone B", trips: 98, earnings: "$3.8K" },
    { name: "Zone C", trips: 142, earnings: "$4.9K" }
  ];

  const recentTrips: RecentTrip[] = [
    { id: "TRIP-1000815", user: "Alex Johnson", amount: "$24.50", status: "completed", time: "2 min ago" },
    { id: "TRIP-1000814", user: "Sarah Chen", amount: "$18.75", status: "cancelled", time: "15 min ago" },
    { id: "TRIP-1000813", user: "Mike Peters", amount: "$32.20", status: "ongoing", time: "28 min ago" }
  ];

  const sidebarItems = [
    { icon: Package, label: "Trip Fare Setup" },
    { icon: Package, label: "Parcel Delivery" },
    { icon: FileText, label: "Transactions" },
    { icon: FileText, label: "Reports" },
    { icon: HelpCircle, label: "Help & Support" },
    { icon: MessageSquare, label: "Chat" },
    { icon: Briefcase, label: "Business Management" },
    { icon: Image, label: "Pages & Media" },
    { icon: Sliders, label: "Configurations" },
    { icon: Settings, label: "System Settings" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4 flex items-center gap-2">
          <Diamond className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            DriveAdmin
          </span>
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Welcome Super Admin
          </h1>
          <p className="text-gray-600">Monitor your team's performance and earnings</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-semibold">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Earnings</p>
                <p className="text-2xl font-semibold">$10.3K</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-semibold">7</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Growth Rate</p>
                <p className="text-2xl font-semibold">+24%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Zone Statistics */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Zone Statistics
            </h2>
            <div className="space-y-4">
              {zoneStats.map((zone, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{zone.name}</p>
                    <p className="text-sm text-gray-600">{zone.trips} trips</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{zone.earnings}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Top Drivers
            </h2>
            <div className="space-y-4">
              {users.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center font-bold text-blue-600">
                      #{user.rank}
                    </div>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{user.earnings}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Recent Trips
          </h2>
          <div className="space-y-4">
            {recentTrips.map((trip, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Car className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{trip.id}</p>
                    <p className="text-sm text-gray-600">{trip.user}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{trip.amount}</p>
                  <p className={`text-sm ${
                    trip.status === 'completed' ? 'text-green-600' :
                    trip.status === 'cancelled' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {trip.status} • {trip.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;