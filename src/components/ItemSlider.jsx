import "./ItemSlider.css";
export default function ItemSlider({ item }) {
  return (
    <div className="item-vertical border">
      <div
        className="item-img"
        style={{
          backgroundImage: `url(${
            item?.imgUrl ?? "https://picsum.photos/536/354"
          })`,
        }}
      ></div>
      <div className="item-details">
        <div className="item-title-description">
          <h3 className="item-title">
            {item?.title ?? "Item title not found"}
          </h3>
          <p className="item-description">
            {item?.description ??
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum rerum harum fugit praesentium, aliquam eos vero voluptas consequuntur corporis velit laborum fuga aliquid sunt repellendus, blanditiis, nihil itaque esse"}
          </p>
        </div>
        <div className="item-secondary-details">details secondary</div>
      </div>
    </div>
  );
}
