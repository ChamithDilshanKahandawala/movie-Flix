import { ImageBackground, Text , View} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Image } from 'expo-image'
import { images } from '@/constants/images'
import {icons} from '@/constants/icons'

const TabIcon = ({focused, icon, title}: any) => {
  if(focused){
    return (
       <ImageBackground
          source={images.highlight}
                      className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
                 >
      <Image 
        source={icon}
        style={{ width: 20, height: 20, tintColor: '#151312' }}
        contentFit="contain"
      />
      <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
    </ImageBackground>
  )
  }else{
    return (
      <View className='justify-center items-center'>
        <Image 
          source={icon} 
          style={{ width: 20, height: 20, tintColor: '#A8B5DB' }}
          contentFit="contain"
        />
      </View>
    )
  }

}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'

        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius:50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position : 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '0f0d23'

        }
      }}
    >
      <Tabs.Screen 
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon = {icons.home}
              title = 'Home'
            /> 
          )
        }}
        />
        <Tabs.Screen 
        name='search'
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon = {icons.search}
              title = 'Search'
            />
          )
        }}/>

        

        <Tabs.Screen
        name='saved'
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon = {icons.star}
              title = 'Favorites'
            />
          )
        }}/> 

        <Tabs.Screen 
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon = {icons.person}
              title = 'Profile'
            />
          )
        }}/>
    </Tabs>

    
  )
}

export default _layout