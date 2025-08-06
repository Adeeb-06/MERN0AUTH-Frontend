import React,{useContext , useState} from 'react';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Edit3,
  Camera,
  Settings,
  Bell,
  LogOut
} from 'lucide-react';

export default function Profile() {
   const navigate = useNavigate()
  const { userData , getUserData , backendUrl } = useContext(AppContent);
  console.log(userData)
  const handleVerifyEmail = () => {
    console.log('Verify email clicked');
  };

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  const handleChangeAvatar = () => {
    console.log('Change avatar clicked');
  };

  const handleLogout = async () => {
   try {
       const {data} =  await axios.post(`${backendUrl}/api/auth/logout`,{},{
        withCredentials:true
       })
       if(data.success){
        navigate('/login')
       }
      } catch (error) {
        console.log(error)
      }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
              <p className="text-gray-600">Manage your account settings and preferences</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-8">
              {/* Avatar Section */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {userData.avatar ? (
                      <img 
                        src={userData.avatar} 
                        alt="Profile" 
                        className="w-full h-full rounded-2xl object-cover"
                      />
                    ) : (
                      `${userData.name}`
                    )}
                  </div>
                  <button
                    onClick={handleChangeAvatar}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-4">
                  {userData.name}
                </h2>
                {/* <p className="text-gray-600 text-sm mt-1">{userData.bio}</p> */}
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-600">Member since</span>
                  <span className="text-sm font-semibold text-gray-900">{userData.createdAt}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-600">Account Status</span>
                  <span className="text-sm font-semibold text-green-600">Active</span>
                </div>
              </div>

              {/* Edit Profile Button */}
              <button
                onClick={handleEditProfile}
                className="w-full mt-6 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold py-3 px-4 rounded-2xl hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Edit3 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                  <span>Edit Profile</span>
                </div>
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full mt-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-4 rounded-2xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-2">
                  <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Logout</span>
                </div>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                <User className="w-6 h-6 text-blue-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Name</label>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                    <p className="text-gray-900 font-medium">{userData.name}</p>
                  </div>
                </div> 

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-900 font-medium">{userData.email}</p>
                  </div>
                </div>

            
                 
              </div>
            </div>

            {/* Email Verification Section */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Email Verification</h3>
                <Mail className="w-6 h-6 text-blue-600" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-900 font-medium">{userData.email}</p>
                      <p className="text-sm text-gray-600">Primary email address</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-amber-600">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">Unverified</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-amber-800">Email not verified</h4>
                      <p className="text-sm text-amber-700 mt-1">
                        Please verify your email address to secure your account and receive important notifications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verify Email Button */}
                <button
                  onClick={handleVerifyEmail}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>Verify Email Address</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Account Security */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Account Security</h3>
                <Shield className="w-6 h-6 text-blue-600" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div>
                    <p className="text-gray-900 font-medium">Password</p>
                    <p className="text-sm text-gray-600">Last updated 2 months ago</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors hover:underline">
                    Change
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div>
                    <p className="text-gray-900 font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors hover:underline">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}