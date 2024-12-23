const products = [
    {
        "id": "1",
        "name": "Granola siêu hạt ăn kiêng",
        "description": "Sản phẩm bổ dưỡng, thích hợp cho bữa sáng hoặc ăn nhẹ.",
        "price": 133000,
        "category": ["Nhỏ", "Vừa", "Lớn"],
        "image": "https://bizweb.dktcdn.net/thumb/1024x1024/100/447/785/products/granola-sieu-hat-20-percentage-yen-mach-8-85761444-b2ef-4a69-b33f-0c35fe74e7c1.jpg?v=1658713933227",
        "discount": 15,
        "rating": 4.5,
        "note": "",
        "stock": 20,
        "status": "Còn hàng",
        "addedAt": "2023-12-01T10:15:00"
    },
    {
        "id": "2",
        "name": "Hạnh nhân rang muối",
        "description": "Hạnh nhân giòn rụm, giàu dinh dưỡng.",
        "price": 110000,
        "category": ["Nhỏ", "Vừa"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU-IEZYP4Xg0o3s8nIWXcFjmSNK0C3ynHXw&s",
        "discount": 10,
        "rating": 4.0,
        "note": "",
        "stock": 15,
        "status": "Còn hàng",
        "addedAt": "2023-12-02T14:20:00"
    },
    {
        "id": "3",
        "name": "Ngũ hạt thập cẩm",
        "description": "Đặc sản Langfarm, thích hợp làm quà tặng.",
        "price": 42000,
        "category": ["Nhỏ", "Vừa", "Lớn"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPdz6tgYzmEUJJgjP-PdOyTB3l3UqubGs9Q&s",
        "discount": 30,
        "rating": 4.8,
        "note": "",
        "stock": 50,
        "status": "Còn hàng",
        "addedAt": "2023-12-03T09:30:00"
    },
    {
        "id": "4",
        "name": "Đậu hòa lan wasabi",
        "description": "Snack cay nhẹ, thích hợp làm đồ ăn vặt.",
        "price": 42000,
        "category": ["Nhỏ"],
        "image": "https://product.hstatic.net/1000175970/product/hlm_190_80f300136e2749dd849f413e4ce8fcec_large.png",
        "discount": 10,
        "rating": 4.2,
        "note": "",
        "stock": 30,
        "status": "Còn hàng",
        "addedAt": "2023-12-04T11:45:00"
    },
    {
        "id": "5",
        "name": "Nước cốt dâu tằm",
        "description": "Thức uống giải khát tự nhiên.",
        "price": 54000,
        "category": ["Chai lớn"],
        "image": "https://lafreshdalat.vn/img/product/-6WMi5O.jpg",
        "discount": 5,
        "rating": 4.6,
        "note": "",
        "stock": 25,
        "status": "Còn hàng",
        "addedAt": "2023-12-05T15:00:00"
    },
    {
        "id": "6",
        "name": "Trà sencha",
        "description": "Trà xanh nguyên lá, hương vị thanh mát.",
        "price": 109000,
        "category": ["Nhỏ", "Vừa"],
        "image": "https://fujiocha.com/wp-content/uploads/2018/07/1-11.jpg",
        "discount": 20,
        "rating": 4.7,
        "note": "",
        "stock": 10,
        "status": "Còn hàng",
        "addedAt": "2023-12-06T13:15:00"
    },
    {
        "id": "7",
        "name": "Bột trà xanh matcha",
        "description": "Thích hợp làm bánh hoặc đồ uống.",
        "price": 36000,
        "category": ["Túi nhỏ"],
        "image": "https://leteemartdalat.vn/static/images/san-pham/thuc-pham/N%C6%B0%E1%BB%9Bc%20u%E1%BB%91ng/1/B%E1%BB%99t%20tr%C3%A0%20xanh%20Matcha%20Uji%20Yanoen%20(2).jpg",
        "discount": 8,
        "rating": 4.3,
        "note": "",
        "stock": 40,
        "status": "Còn hàng",
        "addedAt": "2023-12-07T16:10:00"
    },
    {
        "id": "8",
        "name": "Bột rau má",
        "description": "Thức uống làm mát cơ thể.",
        "price": 100000,
        "category": ["Gói lớn"],
        "image": "https://media.loveitopcdn.com/25/thumb/092704-bot-rau-ma-say-lanh-dalahouse.jpg",
        "discount": 10,
        "rating": 4.0,
        "note": "",
        "stock": 12,
        "status": "Còn hàng",
        "addedAt": "2023-12-08T08:25:00"
    },
    {
        "id": "9",
        "name": "Trái cây sấy khô",
        "description": "Trái cây sấy tự nhiên, không đường.",
        "price": 85000,
        "category": ["Hộp nhỏ", "Hộp lớn"],
        "image": "https://www.vitaminhouse.vn/cdn/shop/articles/trai-cay-say-kho-1.png?v=1644832332",
        "discount": 15,
        "rating": 4.4,
        "note": "",
        "stock": 35,
        "status": "Còn hàng",
        "addedAt": "2023-12-09T10:50:00"
    },
    {
        "id": "10",
        "name": "Hạt điều rang muối",
        "description": "Hạt điều giòn ngon, thích hợp ăn nhẹ.",
        "price": 120000,
        "category": ["Túi nhỏ"],
        "image": "https://quaqueviet.vn/upload/imgproduct/hat-dieu-rang-muoi-1-min.jpg",
        "discount": 10,
        "rating": 4.7,
        "note": "",
        "stock": 18,
        "status": "Còn hàng",
        "addedAt": "2023-12-10T14:30:00"
    }
];

export default products;
