import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import { Color } from "../utils/Colors";
import Title from "../components/Global/Title";
import Search from "../components/Global/Search";
import Chat from "../components/Chat/Chat";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Title title="Chats" />
      <Search />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: Color.background,
    gap: 10,
  },
});
