import { BannerHolder } from "../components/BannerHolder";
import { CardHolder } from "../components/CardHolder"
import { banners, cardData } from "../data/dummyData"

export default function Library() {
  return (
    <div >
        <BannerHolder data={banners} />
      <CardHolder
        title="محصولات ویژه"
        description="جدید ترین کتاب ها"
        data={cardData}
      />
<CardHolder
        title=" از نویسندگان نو"
        description="جدیدترین کارت‌ها"
        data={cardData}
      />
<CardHolder
        title="محصولات ویژه"
        description="جدیدترین کارت‌ها"
        data={cardData}
      />

    </div>
  );
}
