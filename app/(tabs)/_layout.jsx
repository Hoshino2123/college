import React from 'react';
import { View } from 'react-native';
import { Tabs } from 'expo-router';
import { Home } from 'lucide-react-native';
import { MessageSquareMore } from 'lucide-react-native';
import {  BookmarkPlus  } from 'lucide-react-native';
import { CircleUserRound } from 'lucide-react-native';


const TabIcon = ({ icon: Icon, color, focused }) => {
  return (
    <View>
      <Icon color={color} size={24} />
    </View>
  );
}

const TabsLay = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'coral',
      tabBarInactiveTintColor: 'khaki',
      tabBarStyle: {
        backgroundColor: '#4B0082',
        borderTopWidth: 2,
        borderTopColor: 'azure',
        height: 44
        }

    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={Home}
              color={color}
              focused={focused}
            />
          )
        }}
      />
       <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={MessageSquareMore }
              color={color}
              focused={focused}
            />
          )
        }}
      />
       <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={BookmarkPlus }
              color={color}
              focused={focused}
            />
          )
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={CircleUserRound}
              color={color}
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
}

export default TabsLay;
