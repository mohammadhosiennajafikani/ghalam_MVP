// components/Post.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

type Img = any;
type PostType = "plain" | "bookReply" | "excerptReply" | "quote";

interface BookInfo {
    cover: Img;
    title: string;
    author: string;
}

interface PostProps {
    avatar: Img;
    name: string;
    message?: string;
    type: PostType;
    book?: BookInfo;
    excerpt?: string;
    time?: string;
    quoteText?: string;    // متن نقل‌قول (برای حالت quote)
    likes?: number;
    comments?: number;
}

export function Post({
    avatar,
    name,
    message,
    type,
    book,
    excerpt,
    time,
    quoteText,
    likes = 0,
    comments = 0,
}: PostProps) {
    return (
        <View style={styles.container}>
            <PostHeader avatar={avatar} name={name} time={time} />

            {type === "bookReply" && book && (
                <>
                    <BookRow book={book} />
                    {message ? <Text style={styles.message}>{message}</Text> : null}
                </>
            )}

            {type === "excerptReply" && book && (
                <>
                    <BookRow book={book} />
                    {excerpt ? (
                        <Text numberOfLines={3} style={styles.excerpt}>
                            {excerpt}
                        </Text>
                    ) : null}
                    {message ? <Text style={styles.message}>{message}</Text> : null}
                </>
            )}

            {type === "plain" && message ? (
                <Text style={styles.message}>{message}</Text>
            ) : null}

            {type === "quote" && quoteText && (
                <>
                    {message ? <Text style={styles.message}>{message}</Text> : null}
                    <QuoteBox text={quoteText} />
                </>
            )}

            {/* بخش تعاملات: برای همه حالت‌ها */}
            <View style={styles.actions}>
                <Text style={styles.actionText}>❤️ {likes}</Text>
                <Text style={styles.actionText}>💬 {comments} نظر</Text>
            </View>
        </View>
    );
}

/* ---------- Subcomponents ---------- */

function PostHeader({
    avatar,
    name,
    time,
}: {
    avatar: Img;
    name: string;
    time?: string;
}) {
    return (
        <View style={styles.header}>
            <Image
                source={typeof avatar === "string" ? { uri: avatar } : avatar}
                style={styles.avatar}
            />
            <View style={{ marginLeft: 8 }}>
                <Text style={styles.name}>{name}</Text>
                {time ? <Text style={styles.time}>{time}</Text> : null}
            </View>
        </View>
    );
}

function BookRow({ book }: { book: BookInfo }) {
    return (
        <View style={styles.bookRow}>
            <Image
                source={typeof book.cover === "string" ? { uri: book.cover } : book.cover}
                style={styles.bookCover}
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.bookTitle} numberOfLines={1}>
                    {book.title}
                </Text>
                <Text style={styles.bookAuthor} numberOfLines={1}>
                    {book.author}
                </Text>
            </View>
        </View>
    );
}

function QuoteBox({ text }: { text: string }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <View style={styles.quoteContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setCollapsed((c) => !c)}
            >
                <Text
                    style={styles.quoteText}
                    numberOfLines={collapsed ? 3 : undefined}
                >
                    {text}
                </Text>
                <Text style={styles.quoteToggle}>
                    {collapsed ? "نمایش بیشتر ▾" : "نمایش کمتر ▴"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.06)",
        marginVertical: 8,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#eee",
    },
    name: {
        fontSize: 14.5,
        fontWeight: "600",
        color: "#111",
        fontFamily: "vazir"
    },
    time: {
        fontSize: 11.5,
        color: "#666",
        marginTop: 2,
    },
    bookRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.035)",
        padding: 8,
        borderRadius: 10,
        marginBottom: 8,
        gap: 10,
    },
    bookCover: {
        width: 40,
        height: 56,
        borderRadius: 6,
        backgroundColor: "#ddd",
        fontFamily: "vazir"
    },
    bookTitle: {
        fontSize: 13.5,
        fontWeight: "600",
        color: "#222",
        fontFamily: "vazir"
    },
    bookAuthor: {
        fontSize: 12,
        color: "#666",
        marginTop: 2,
        fontFamily: "vazir"
    },
    excerpt: {
        fontSize: 13,
        color: "#333",
        backgroundColor: "rgba(0,0,0,0.03)",
        padding: 8,
        borderRadius: 8,
        marginBottom: 6,
    },
    message: {
        fontSize: 13.5,
        color: "#222",
        lineHeight: 20,
        marginBottom: 6,
        fontFamily: "vazir"
    },
    quoteContainer: {
        backgroundColor: "rgba(0,0,0,0.04)",
        borderLeftWidth: 3,
        borderLeftColor: "#888",
        padding: 10,
        borderRadius: 8,
    },
    quoteText: {
        fontSize: 13.5,
        color: "#222",
        lineHeight: 20,
        fontFamily: "vazir"
    },
    quoteToggle: {
        fontSize: 12,
        color: "#007aff",
        marginTop: 8,
    },
    actions: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "flex-start",
        gap: 16,
    },
    actionText: {
        fontSize: 13,
        color: "#444",
        fontFamily: "vazir"
    },
});