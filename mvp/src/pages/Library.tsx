import { BannerHolder } from "../components/BannerHolder";
import { CardHolder } from "../components/CardHolder"
import { banners, cardData } from "../data/dummyData"

export default function Library() {
  return (
    <div >
      <h1>library</h1>

      <CardHolder
        title="محصولات ویژه"
        description="جدیدترین کارت‌ها"
        data={cardData}
      />

      <BannerHolder data={banners}>
        
      </BannerHolder>
    </div>
  );
}
