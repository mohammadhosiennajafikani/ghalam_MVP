import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { BannerHolder } from '../components/BannerHolder';
import { StatusBar } from 'expo-status-bar';
import { banners } from '../data/dummyData';
import { cardData } from '../data/dummyData';
import { theme } from '../theme/theme';
import { CardHolder } from '../components/CardHolder';


export default function LibraryScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={theme.layout.container}>
            <View style={{ flex: 1 }}>
                <BannerHolder
                    data={banners}
                    interval={3000}
                    onPressBanner={(item) => {}}
                />
            </View>


            <CardHolder
                title="کتاب‌های پیشنهادی"
                description="کتاب‌هایی که ممکنه دوست داشته باشی"
                data={cardData}
            />
            <CardHolder
                title="پرفروش این روز ها"
                description=""
                data={cardData}
            />
             <CardHolder
                title="از نویسنده های نوظهور"
                description=""
                data={cardData}
            />

            <StatusBar style="auto" />

        </ScrollView>
    );
}