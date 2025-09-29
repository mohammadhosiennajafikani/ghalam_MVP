// pages/AccountScreen.tsx
import { BookHighlightBox } from "../components/BookHighlightCard";
import { CardHolder } from "../components/CardHolder";
import { MonthlyViewsCard, PublishedBooksCard, SalesCard, WritingBooksCard } from "../components/counters";
import { cardData } from "../data/dummyData";
import book1 from '../assets/books/book(2).png'
import book3 from '../assets/books/book(4).png'

export default function WriterScreen() {
    return (
        <div className="flex flex-col pr-40 pl-40 pt-6">
            <div className="flex items-center justify-center ">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MonthlyViewsCard />
                    <PublishedBooksCard />
                    <WritingBooksCard />
                    <SalesCard />
                </div>
            </div>

            <div className="flex flex-col p-4 ">

                <div className="flex items-center justify-center  ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
                        <BookHighlightBox
                            title="پرفروش کتاب شما"
                            description="این کتاب بیشتری فروش را داشته"
                            image={book1}
                        />
                        <BookHighlightBox
                            title="پرطرفدار ترین کتاب شما"
                            description="این کتاب شما بیشترین بازخورد را داشته"
                            image={book3}
                        />
                    </div>
                </div>
            </div>



            <CardHolder
                title="کتاب‌های در حال جریان"
                description="کتاب‌هایی که دارید روش کار می‌کنید"
                data={cardData}
            />

            <CardHolder
                title="کتاب‌های منتشر شده"
                data={cardData}
            />
        </div>
    );
}